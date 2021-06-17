import { useEffect } from "react";
import TimeLine from "../components/Timeline";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid grid-cols-3 gaap-4 justify-between mx-auto max-w-screen-lg ">
        <TimeLine />
        <Sidebar />
      </div>
    </div>
  );
}
