"use client";
import Maincontent from "@/components/Maincontent";

import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

const Dashboard = () => {
  const pathname = usePathname();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch("/details", {
        method: "POST",
        body: JSON.stringify(pathname),
      });

      if (res) {
        setUserInfo(res.json());
      }
    };
    fetchDetails();
  }, [pathname]);
  return (
    <div className="border-2 border-white min-h-screen flex px-32 py-16">
      <Maincontent />
    </div>
  );
};

export default Dashboard;
