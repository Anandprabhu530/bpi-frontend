import {QRCodeSVG} from "qrcode.react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Accountdetails = ({userInfo}: any) => {
  const value = userInfo.mobilenumber;
  return (
    <div>
      <time dateTime="2016-10-25" suppressHydrationWarning />
      <div className="text-2xl font-semibold">Account</div>
      {userInfo.balance ? (
        <div className="bg-white text-black w-[300px] h-[120px] mt-10 rounded-md p-6">
          <div className="text-4xl">₹ {userInfo.balance}</div>
          <div>Indian Rupee</div>
        </div>
      ) : (
        <div className="w-[300px] h-[120px] animate-pulse bg-white mt-10 rounded-md" />
      )}
      <div className="pt-10">
        <div className="w-[300px] h-[300px] bg-white text-black flex justify-center items-center rounded-md">
          <QRCodeSVG value={value} size={200} level="H" />
        </div>
        <div className="w-[300px] flex justify-center pt-1 text-neutral-300 text-sm">
          Scan to receive with BPI
        </div>
      </div>
    </div>
  );
};

export default Accountdetails;
