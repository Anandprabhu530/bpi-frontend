/* eslint-disable @typescript-eslint/no-explicit-any */
import Accountdetails from "./Accountdetails";
import Sendmoney from "./Sendmoney";
import Transactions from "./Transactions";

const Maincontent = ({userInfo}: any) => {
  return (
    <div className="w-full h-fulql flex gap-6">
      <div className="basis-1/3">
        <Accountdetails userInfo={userInfo} />
      </div>
      <div className="basis-1/3">
        <Transactions />
      </div>
      <div className="basis-1/3">
        <Sendmoney />
      </div>
    </div>
  );
};

export default Maincontent;
