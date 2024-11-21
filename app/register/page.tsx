import React from "react";
import registerform from "../actions/registerform";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-sans">
      <form className="w-[500px]" action={registerform}>
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
              name="firstname"
            />
          </div>
          <div className="basis-1/2">
            <div className="pb-2 text-xl">Last Name</div>
            <input
              className="outline-none w-full bg-[#1b1a1a] border border-neutral-600 rounded-md p-2 placeholder:text-neutral-500"
              placeholder="Doe"
              name="lastname"
            />
          </div>
        </div>
        <div className="pt-4 ">
          <div className="py-2 text-xl">Mobile Number</div>
          <input
            className="outline-none border border-neutral-600 p-2 placeholder:text-neutral-500 bg-[#1b1a1a] rounded-md w-full"
            placeholder="9876543210"
            name="mobilenumber"
            type="tel"
          />
        </div>
        <div className="pt-4 ">
          <div className="py-2 text-xl">Email</div>
          <input
            className="outline-none border border-neutral-600 p-2 placeholder:text-neutral-500 bg-[#1b1a1a] rounded-md w-full"
            placeholder="youremail@example.com"
            type="email"
            name="email"
          />
        </div>
        <div>
          <div className="pt-6 pb-2 text-xl">Password</div>
          <input
            className="outline-none border border-neutral-600 p-2 bg-[#1b1a1a] rounded-md w-full"
            type="password"
            name="password"
          />
        </div>
        <div>
          <div className="pt-6 pb-2 text-xl">Set yourBPI Pin</div>
          <input
            className="outline-none border border-neutral-600 p-2 bg-[#1b1a1a] rounded-md w-full"
            type="password"
            name="bpipin"
          />
        </div>
        <div className="pt-6">
          <button className="w-full flex justify-center text-black bg-white cursor-pointer font-semibold p-2 rounded-md">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
