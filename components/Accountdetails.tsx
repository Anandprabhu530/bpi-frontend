/* eslint-disable @typescript-eslint/no-explicit-any */
const Accountdetails = ({userInfo}: any) => {
  return (
    <div>
      <div className="text-2xl font-semibold">Account</div>
      {userInfo.balance ? (
        <div className="bg-white text-black w-fit mt-10 rounded-md p-6">
          <div className="text-4xl">₹ {userInfo.balance}</div>
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
      ) : (
        <div className="w-[300px] h-[180px] animate-pulse bg-white mt-10 rounded-md" />
      )}
      <div className="pt-10">
        <div className="w-[300px] h-[300px] bg-white text-black flex justify-center items-center rounded-md">
          QR Code
        </div>
        <div className="w-[300px] flex justify-center pt-1 text-neutral-300 text-sm">
          Scan to receive with BPI
        </div>
      </div>
    </div>
  );
};

export default Accountdetails;
