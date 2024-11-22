import {useState} from "react";

const Sendmoney = () => {
  const [search, setsearch] = useState<string[]>([]);
  const [inputData, setInputData] = useState("");
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
              setsearch(["test", "yeet"]);
            }}
          />
        </div>
      </div>
      <div
        className={`w-[300px] bg-neutral-900 h-[100px] text-white rounded-md mt-4 
            ${search.length === 0 ? "hidden" : ""}`}
      >
        {inputData}
      </div>
    </div>
  );
};

export default Sendmoney;
