import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-sans">
      <div className="w-[500px]">
        <div className="w-full flex justify-center text-3xl font-semibold pb-6">
          Welcome to&nbsp;
          <div className="text-purple-500 pb-4">BPI-Payments!</div>
        </div>
        <div className="flex w-full gap-6">
          <div className="basis-1/2">
            <div className="pb-2 text-xl">First Name</div>
            <input
              className="outline-none w-full bg-[#1b1a1a] border border-neutral-600 rounded-md p-2 placeholder:text-neutral-500"
              placeholder="John"
            />
          </div>
          <div className="basis-1/2">
            <div className="pb-2 text-xl">Last Name</div>
            <input
              className="outline-none w-full bg-[#1b1a1a] border border-neutral-600 rounded-md p-2 placeholder:text-neutral-500"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="pt-4 ">
          <div className="py-2 text-xl">Mobile Number</div>
          <input
            className="outline-none border border-neutral-600 p-2 placeholder:text-neutral-500 bg-[#1b1a1a] rounded-md w-full"
            placeholder="9876543210"
            type="tel"
          />
        </div>
        <div className="pt-4 ">
          <div className="py-2 text-xl">Email</div>
          <input
            className="outline-none border border-neutral-600 p-2 placeholder:text-neutral-500 bg-[#1b1a1a] rounded-md w-full"
            placeholder="youremail@example.com"
            type="email"
          />
        </div>
        <div>
          <div className="pt-6 pb-2 text-xl">Password</div>
          <input
            className="outline-none border border-neutral-600 p-2 bg-[#1b1a1a] rounded-md w-full"
            type="password"
          />
        </div>
        <div className="pt-6">
          <div className="w-full flex justify-center text-black bg-white cursor-pointer font-semibold p-2 rounded-md">
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
