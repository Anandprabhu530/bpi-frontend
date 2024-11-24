/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {useState} from "react";

const Register = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    mobilenumber: "",
    email: "",
    password: "",
    bpipin: "",
  });

  const [error, setError] = useState({
    mobilenumber: "",
    email: "",
    password: "",
    bpipin: "",
  });

  const handleChange = (event: any) => {
    setData((prev) => ({...prev, [event.target.name]: event.target.value}));
    setError((prev) => ({...prev, [event.target.name]: ""}));
  };

  const handleSubmit = async (event: any) => {
    let hasError = false;
    event.preventDefault();

    setError({
      mobilenumber: "",
      email: "",
      password: "",
      bpipin: "",
    });

    if (data.mobilenumber.length < 10) {
      setError((prev) => ({
        ...prev,
        mobilenumber: "Mobile number must be 10 digits",
      }));
      hasError = true;
    }

    if (data.password.length <= 5) {
      setError((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters",
      }));
      hasError = true;
    }

    if (data.bpipin.length !== 6) {
      setError((prev) => ({
        ...prev,
        bpipin: "bpipin must contain 6 digits",
      }));
      hasError = true;
    }

    if (!data.email.includes("@") || !data.email.includes(".")) {
      setError((prev) => ({
        ...prev,
        email: "Enter a valid email",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans">
      <form className="w-[500px]">
        <div className="w-full flex justify-center text-3xl font-semibold pb-6">
          Welcome to&nbsp;
          <div className="text-purple-500 pb-4">BPI-Payments!</div>
        </div>
        <div className="flex w-full gap-6">
          <div className="basis-1/2">
            <div className="pb-2 text-xl">First Name</div>
            <input
              onChange={handleChange}
              className="outline-none w-full bg-[#1b1a1a] border border-neutral-600 rounded-md p-2 placeholder:text-neutral-500"
              placeholder="John"
              name="firstname"
            />
          </div>
          <div className="basis-1/2">
            <div className="pb-2 text-xl">Last Name</div>
            <input
              onChange={handleChange}
              className="outline-none w-full bg-[#1b1a1a] border border-neutral-600 rounded-md p-2 placeholder:text-neutral-500"
              placeholder="Doe"
              name="lastname"
            />
          </div>
        </div>
        <div className="pt-4 ">
          <div className="py-2 text-xl">Mobile Number</div>
          <input
            onChange={handleChange}
            className="outline-none border border-neutral-600 p-2 placeholder:text-neutral-500 bg-[#1b1a1a] rounded-md w-full"
            placeholder="9876543210"
            name="mobilenumber"
            type="tel"
          />
        </div>
        <div className="pt-4 ">
          <div className="py-2 text-xl">Email</div>
          <input
            onChange={handleChange}
            className="outline-none border border-neutral-600 p-2 placeholder:text-neutral-500 bg-[#1b1a1a] rounded-md w-full"
            placeholder="youremail@example.com"
            type="email"
            name="email"
          />
        </div>
        <div>
          <div className="pt-6 pb-2 text-xl">Password</div>
          <input
            onChange={handleChange}
            className="outline-none border border-neutral-600 p-2 bg-[#1b1a1a] rounded-md w-full"
            type="password"
            name="password"
          />
        </div>
        <div>
          <div className="pt-6 pb-2 text-xl">Set your BPI Pin</div>
          <input
            onChange={handleChange}
            className="outline-none border border-neutral-600 p-2 bg-[#1b1a1a] rounded-md w-full"
            type="password"
            name="bpipin"
          />
        </div>
        <div className="pt-6">
          <button
            onClick={handleSubmit}
            className="w-full flex justify-center text-black bg-white cursor-pointer font-semibold p-2 rounded-md"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
