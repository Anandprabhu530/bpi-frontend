import {useEffect, useState} from "react";
import Send from "./Send";

const Sendmoney = () => {
  const [search, setsearch] = useState<string[]>([
    "9874563210@okbpi",
    "9876543210@okbpi",
  ]);
  const [inputData, setInputData] = useState("");
  const [toggle, setToggle] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [indexnumber, setIndexNumber] = useState<number | null>();

  useEffect(() => {
    if (!toggle) {
      return;
    }
    const fetchDetails = async () => {
      const res = await fetch("/api/sendsearch", {
        method: "GET",
        headers: {Accept: "application/json", method: "GET"},
      }).then((resposne) => resposne.json());
      setsearch(res.data);
    };
    fetchDetails();
  }, [toggle]);

  const handleClick = async (index: number) => {
    setClicked(true);
    setIndexNumber(index);
  };

  if (clicked) {
    return (
      <div className=" w-full absolute inset-0 min-h-screen bg-neutral-800 bg-opacity-95 flex items-center justify-center">
        <Send senderData={search[indexnumber ? indexnumber : 0]} />
      </div>
    );
  }

  return (
    <div className="basis-1/3">
      <div className="text-2xl font-semibold pb-10">Send and Receive Money</div>
      <div className="flex gap-4 flex-col">
        <div className="w-[300px] flex justify-center bg-white text-black font-semibold py-2 rounded-md">
          Scan to pay
        </div>
        <div className="flex w-[300px] gap-4 items-center ">
          <div className="h-[1px] w-[50%] bg-white"></div>
          <div>OR</div>
          <div className="h-[1px] w-[50%] bg-white"></div>
        </div>
        <div>
          <div className="pb-2">Enter Mobile Number</div>
          <input
            className="w-[300px] p-2 border border-neutral-800 outline-none rounded-md bg-neutral-900"
            onChange={(event) => {
              setInputData(event?.target.value);
            }}
            onClick={() => setToggle(true)}
          />
        </div>
      </div>
      <div
        className={`w-[300px] bg-neutral-900 h-fit text-white rounded-md mt-4
            ${search.length === 0 ? "hidden" : ""}`}
      >
        {search.map((solo_data, index) => (
          <div
            key={index}
            className="w-full p-4 flex gap-4 border-b border-neutral-800 border-x cursor-pointer items-center"
            onClick={() => handleClick(index)}
          >
            <div className="w-[30px] h-[30px] rounded-full bg-neutral-400 flex items-center justify-center text-black font-semibold">
              {solo_data[0]}
            </div>
            <div>{solo_data}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sendmoney;
