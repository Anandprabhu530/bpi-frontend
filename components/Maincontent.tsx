import {useState} from "react";

// https://mobbin.com/apps/revolut-web-538d8553-9169-4343-a90c-66494c577e23/7b40d0d4-cc0e-44d5-bd4a-2ff514b9f898/screens
// Link to inspiration
const Maincontent = () => {
  const [search, setsearch] = useState<string[]>([]);
  const [inputData, setInputData] = useState("");
  return (
    <div className="w-full h-full flex gap-6">
      <div className="basis-1/3">
        <div className="text-2xl font-semibold">Account</div>
        <div className="bg-white text-black w-fit mt-10 rounded-md p-6">
          <div className="text-4xl">₹10569.31</div>
          <div>Indian Rupee</div>
          <div className="flex gap-4 pt-10">
            <div className="px-2 py-1 rounded-md bg-neutral-800 text-white">
              + Add Money
            </div>
            <div className="px-2 py-1 rounded-md bg-neutral-800 text-white">
              Account Details
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="w-[300px] h-[300px] bg-white text-black flex justify-center items-center rounded-md">
            QR Code
          </div>
          <div className="w-[300px] flex justify-center pt-1 text-neutral-300 text-sm">
            Scan to receive with BPI
          </div>
        </div>
      </div>
      <div className="basis-1/3 ">
        <div className="text-2xl font-semibold pb-10">Transactions</div>
        <div className="flex justify-between w-[350px]">
          <div>Hello</div>
          <div>₹180</div>
        </div>
      </div>
      <div className="basis-1/3">
        <div className="text-2xl font-semibold pb-10">
          Send and Receive Money
        </div>
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
    </div>
  );
};

export default Maincontent;
