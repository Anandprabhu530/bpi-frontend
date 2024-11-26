import {useEffect, useState} from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Transactions = ({userInfo}: any) => {
  const [details, setDetails] = useState<string[] | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await fetch("/api/transactions", {
        method: "POST",
        body: JSON.stringify({number: userInfo.mobilenumber}),
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
      <div className="flex justify-between w-[350px]">
        <div>Hello</div>
        <div>₹180</div>
      </div>
    </div>
  );
};

export default Transactions;
