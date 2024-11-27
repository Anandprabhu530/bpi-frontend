/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useRef} from "react";
import {v4 as uuidv4} from "uuid";

const Send = ({senderData}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    if (inputValue > 99999) {
      event.target.value = 99999;
    }
  };

  const handleClick = async () => {
    if (!inputRef.current.value || inputRef.current.value === 0) {
      return;
    }

    const dataTosend = {
      senderId: localStorage.getItem("usercache") + "@okbpi",
      receiverId: senderData,
      amount: inputRef.current.value,
      transactionId: uuidv4(),
    };

    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(dataTosend),
      headers: {Accept: "application/json", method: "POST"},
    }).then((resposne) => resposne.json());
    console.log(res);
  };

  return (
    <div className="font-sans border-2 border-red-400 flex items-center justify-center">
      <div className="bg-white w-[320px] h-[500px] flex items-center flex-col px-8 py-4 rounded-md text-black">
        <div className="w-full pt-4 flex justify-center font-semibold text-3xl">
          Confirm Payment
        </div>
        <div className="pt-10 text-xl font-semibold">
          To : {senderData !== null && senderData}
        </div>
        <div className="h-[50%] w-full flex items-center justify-center text-5xl">
          <div className="font-semibold">₹</div>
          <input
            className="pl-2 font-semibold bg-transparent w-[150px] outline-none"
            ref={inputRef}
            type="number"
            maxLength={5}
            onChange={handleChange}
          />
        </div>
        <div
          className="mt-14 w-full justify-center flex bg-black text-white font-semibold p-2 my-4 rounded-md cursor-pointer"
          onClick={handleClick}
        >
          Send Money
        </div>
        <button
          className="mt-2 w-full justify-center flex bg-white text-black border border-neutral-700 font-semibold p-2 my-4 rounded-md cursor-pointer"
          onClick={() => window.location.reload()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Send;
