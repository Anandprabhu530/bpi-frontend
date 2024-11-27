import {useEffect, useState} from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Transactions = ({userInfo}: any) => {
  const [details, setDetails] = useState<string[] | null>(null);
  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await fetch("/api/transactions", {
        method: "POST",
        body: JSON.stringify(localStorage.getItem("usercache")),
      }).then((response) => response.json());

      setDetails(res);
    };
    fetchTransactions();
  }, [userInfo.mobilenumber]);

  if (details === null) {
    return (
      <div className="bg-neutral-700 rounded-md w-[350px] h-full animate-pulse"></div>
    );
  }
  return (
    <div>
      <div className="text-2xl font-semibold pb-10">Transactions</div>
      <div className="flex justify-between w-[350px] flex-col">
        {details.map((singleTransaction, index) => (
          <div
            key={index}
            className="p-4 rounded-md w-full flex justify-between items-center text-lg"
          >
            <div
              className={`${
                singleTransaction.code === 500
                  ? "text-neutral-500"
                  : "text-white"
              }`}
            >
              {singleTransaction.to}
            </div>
            <div
              className={`flex  ${
                singleTransaction.code === 500
                  ? "text-neutral-500"
                  : singleTransaction.debit
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >
              {singleTransaction.code === 500 ? (
                <div>Failed</div>
              ) : singleTransaction.debit ? (
                <div>- ₹</div>
              ) : (
                <div>+ ₹</div>
              )}
              <div>
                {singleTransaction.code !== 500 && singleTransaction.amount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
