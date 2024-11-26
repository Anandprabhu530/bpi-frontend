"use client";
import Maincontent from "@/components/Maincontent";

import {useEffect, useState} from "react";
import {redirect, usePathname} from "next/navigation";

const Dashboard = () => {
  const pathname = usePathname();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const arr = pathname.split("/");
    let data = pathname;
    if (arr.length < 3) {
      if (!localStorage.getItem("usercache")) {
        redirect("/login");
      } else {
        data = `/dashboard/${localStorage.getItem("usercache")}`;
      }
    }

    const fetchDetails = async () => {
      const res = await fetch("/api/details", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {Accept: "application/json", method: "POST"},
      }).then((resposne) => resposne.json());
      if (!res || res.data === null) {
        redirect("/login");
      }
      setUserInfo(res.userInfo);
      localStorage.setItem("usercache", res.userInfo.mobilenumber);
    };
    fetchDetails();
  }, [pathname]);

  return (
    <div className="border-2 border-white min-h-screen flex px-32 py-16">
      <Maincontent userInfo={userInfo} />
    </div>
  );
};

export default Dashboard;
