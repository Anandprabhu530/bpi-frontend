"use client";
import Maincontent from "@/components/Maincontent";

import {useEffect} from "react";
import {usePathname, useSearchParams} from "next/navigation";

const Dashboard = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);
  return (
    <div className="border-2 border-white min-h-screen flex px-32 py-16">
      <Maincontent />
    </div>
  );
};

export default Dashboard;
