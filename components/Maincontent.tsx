// https://mobbin.com/apps/revolut-web-538d8553-9169-4343-a90c-66494c577e23/7b40d0d4-cc0e-44d5-bd4a-2ff514b9f898/screens
// Link to inspiration
const Maincontent = () => {
  return (
    <div className="w-full h-full">
      <div className="text-2xl font-semibold">Account</div>
      <div className="bg-white text-black w-fit mt-10 rounded-md p-6">
        <div className="text-4xl">₹10569.31</div>
        <div>Indian Rupee</div>
        <div className="flex gap-4 pt-10">
          <div className="px-2 py-1 rounded-md bg-neutral-800 text-white">
            + Add Money
          </div>
          <div className="px-2 py-1 rounded-md bg-neutral-800 text-white">
            Account Details
          </div>
        </div>
      </div>
      <div>Transactions</div>
    </div>
  );
};

export default Maincontent;
