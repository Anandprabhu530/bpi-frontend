const Send = () => {
  return (
    <div className="font-sans w-full border-2 border-white min-h-screen flex items-center justify-center">
      <div className="bg-white w-[320px] h-[500px] flex items-center flex-col px-8 py-4 rounded-md text-black">
        <div className="w-full pt-4 flex justify-center font-semibold text-3xl">
          Confirm Payment
        </div>
        <div className="pt-10 text-xl font-semibold">To: 9876543210</div>
        <div className="h-[50%] w-full flex items-center justify-center text-5xl">
          <div className="font-semibold">₹</div>
          <input className="pl-2 font-semibold bg-transparent w-[150px] outline-none" />
        </div>
        <div className="mt-14 w-full justify-center flex bg-black text-white font-semibold p-2 my-4 rounded-md cursor-pointer">
          Send Money
        </div>
      </div>
    </div>
  );
};

export default Send;
