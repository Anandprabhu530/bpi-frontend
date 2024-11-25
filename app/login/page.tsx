"use client";
import {loginform} from "../../utils/loginform";
/* eslint-disable @typescript-eslint/no-explicit-any */

import {useState} from "react";

const Login = () => {
  const [data, setData] = useState({
    mobilenumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    mobilenumber: "",
    password: "",
  });

  const handleChange = (event: any) => {
    const {name, value} = event.target;
    setData((prev) => ({...prev, [name]: value}));
    setErrors((prev) => ({...prev, [name]: ""}));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let hasError = false;

    setErrors({mobilenumber: "", password: ""});

    if (data.mobilenumber.length < 10) {
      setErrors((prev) => ({
        ...prev,
        mobilenumber: "Mobile number must be 10 digits",
      }));
      hasError = true;
    }

    if (data.password.length <= 5) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const res = await loginform(data);
    // 1 represents password mismatch or user does not exists
    if (res === 1) {
      setErrors({
        mobilenumber: "",
        password: "User not found or password not matched",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans">
      <div className="">
        <div className="w-full flex justify-center text-3xl font-semibold pb-6">
          Welcome to&nbsp;
          <div className="text-purple-500 pb-4">BPI-Payments!</div>
        </div>
        <form className="w-[400px]">
          <div className="py-2 text-xl">Mobile Number</div>
          <input
            onChange={handleChange}
            className={`outline-none border 
                         ${
                           errors.mobilenumber
                             ? "border-red-500"
                             : "border-neutral-600"
                         } 
                         p-2 placeholder:text-neutral-500 bg-[#1b1a1a] rounded-md w-full`}
            placeholder="9876543210"
            type="number"
            name="mobilenumber"
          />
          {errors.mobilenumber && (
            <span className="text-red-500 text-sm pt-1">
              {errors.mobilenumber}
            </span>
          )}

          <div className="pt-6 pb-2 text-xl">Password</div>
          <input
            onChange={handleChange}
            className={`outline-none border 
                         ${
                           errors.password
                             ? "border-red-500"
                             : "border-neutral-600"
                         } 
                         p-2 bg-[#1b1a1a] rounded-md w-full`}
            type="password"
            name="password"
          />
          {errors.password && (
            <span className="text-red-500 text-sm pt-1">{errors.password}</span>
          )}

          <div className="pt-6">
            <button
              onClick={handleSubmit}
              className="w-full flex justify-center text-black bg-white cursor-pointer font-semibold p-2 rounded-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
