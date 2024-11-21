import loginform from "../actions/loginform";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-sans">
      <div className="">
        <div className="w-full flex justify-center text-3xl font-semibold pb-6">
          Welcome to&nbsp;
          <div className="text-purple-500 pb-4">BPI-Payments!</div>
        </div>
        <form action={loginform} className="w-[400px]">
          <div className="py-2 text-xl">Mobile Number</div>
          <input
            className="outline-none border border-neutral-600 p-2 placeholder:text-neutral-500 bg-[#1b1a1a] rounded-md w-full"
            placeholder="9876543210"
            type="number"
            name="mobilenumber"
          />

          <div className="pt-6 pb-2 text-xl">Password</div>
          <input
            className="outline-none border border-neutral-600 p-2 bg-[#1b1a1a] rounded-md w-full"
            type="password"
            name="password"
          />
          <button className="pt-6">
            <div className="w-full flex justify-center text-black bg-white cursor-pointer font-semibold p-2 rounded-md">
              Login
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;