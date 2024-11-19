import Maincontent from "@/components/Maincontent";

const Dashboard = () => {
  return (
    <div className="border-2 border-white min-h-screen flex p-20">
      <div className="basis-1/4">
        <div className="flex gap-2 items-center">
          <div className="h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center text-black font-semibold">
            P
          </div>
          <div>peyar</div>
        </div>
        <div className="pt-8 flex flex-col gap-4">
          <div>Home</div>
          <div>Send</div>
        </div>
      </div>
      <div className="basis-3/4">
        <Maincontent />
      </div>
    </div>
  );
};

export default Dashboard;
