"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useRef, useState} from "react";
import {v4 as uuidv4} from "uuid";

const Send = ({senderData}: any) => {
  const [loading, setLoading] = useState(false);
  const [status, setstatus] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
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
    if (inputRef.current === null) {
      return;
    }
    if (!inputRef.current.value || Number(inputRef.current.value) === 0) {
      return;
    }

    const dataTosend = {
      senderId: localStorage.getItem("usercache") + "@okbpi",
      receiverId: senderData,
      amount: inputRef.current.value,
      transactionId: uuidv4(),
    };

    setLoading(true);
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(dataTosend),
      headers: {Accept: "application/json", method: "POST"},
    }).then((resposne) => resposne.json());
    if (res.data.errorCode === 0) {
      const intervalId = setInterval(async () => {
        const respone = await fetch("/api/status", {
          method: "POST",
          body: JSON.stringify({
            senderId: dataTosend.senderId,
            transactionId: dataTosend.transactionId,
          }),
        }).then((res) => res.json());
        if (respone === 0) {
          setLoading(false);
          setstatus(1);
          clearInterval(intervalId);
          return;
        } else if (respone === 1 || respone === 2) {
          setLoading(false);
          setstatus(2);
          clearInterval(intervalId);
          return;
        }
        setLoading(false);
        clearInterval(intervalId);
        return;
      }, 2000);
    } else {
      setLoading(false);
      window.location.reload();
    }
  };

  return (
    <div className="font-sans flex items-center justify-center">
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
        {status === 0 ? (
          <div className="w-full">
            <div
              className={`mt-14 w-full justify-center flex bg-black text-white font-semibold p-2 my-4 rounded-md cursor-pointer ${
                loading && "animate-pulse"
              }`}
              onClick={handleClick}
            >
              {loading ? "Processing..." : "Send Money"}
            </div>
            <button
              className="mt-2 w-full justify-center flex bg-white text-black border border-neutral-700 font-semibold p-2 my-4 rounded-md cursor-pointer"
              onClick={() => window.location.reload()}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="w-full">
            {status === 1 ? (
              <div className="w-full flex justify-center text-xl pb-4 text-green-500">
                Payment Completed
              </div>
            ) : (
              <div className="w-full flex justify-center text-xl pb-4 text-red-500">
                Payment Failed
              </div>
            )}
            <button
              className="mt-2 w-full justify-center flex bg-black text-white font-semibold p-2 my-4 rounded-md cursor-pointer"
              onClick={() => window.location.reload()}
            >
              Proceed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Send;
