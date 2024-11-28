// Enforce React usage (assuming this file is a React component)
"use client";

// Import components and hooks
import Maincontent from "@/components/Maincontent";
import {useEffect, useState} from "react";
import {redirect, usePathname} from "next/navigation";

const Dashboard = () => {
  // Get current pathname from Next.js navigation
  const pathname = usePathname();

  // State to store user information
  const [userInfo, setUserInfo] = useState({});

  // Effect hook to fetch user details on pathname change
  useEffect(() => {
    const fetchDetails = async () => {
      // Extract user ID from pathname (if present)
      const arr = pathname.split("/");
      let data = pathname;
      if (arr.length < 3) {
        // Check for cached user data in localStorage
        if (!localStorage.getItem("usercache")) {
          // Redirect to login if no cached data and invalid path
          redirect("/login");
        } else {
          // Construct data object with cached user ID
          data = `/dashboard/${localStorage.getItem("usercache")}`;
        }
      }

      // Fetch user details from API endpoint
      const response = await fetch("/api/details", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {Accept: "application/json", method: "POST"}, // Double-check headers
      }).then((response) => response.json());

      // Handle errors and missing data
      if (!response || response.data === null) {
        redirect("/login");
      }

      // Update user state and store user ID in cache
      setUserInfo(response);
      localStorage.setItem("usercache", response.mobilenumber);
    };

    // Trigger fetch on initial render and pathname changes
    fetchDetails();
  }, [pathname]);

  // Render the Maincontent component with user information
  return (
    <div className="border-2 border-white min-h-screen flex px-32 py-16">
      <Maincontent userInfo={userInfo} />
    </div>
  );
};

export default Dashboard;
