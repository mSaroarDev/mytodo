import { LayoutList, LayoutPanelLeft, SquareUserRound } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  const path = useLocation();
  const isActive = path.pathname.startsWith("/user/task-group");

  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 w-0 lg:w-[250px] bg-slate-50">
        <div className="flex flex-col h-full w-full items-start justify-between">
          <div className="mt-24 flex flex-col w-full">
            <Link
              to="/user/dashboard"
              className={`sidebar-links ${
                path.pathname == "/user/dashboard"
                  ? "bg-[#292929] text-white hover:text-[#292929]"
                  : ""
              }`}
            >
              <LayoutPanelLeft className="w-4 h-4" /> <span>Overview</span>
            </Link>
            {/* <Link
              to="/user/profile"
              className={`sidebar-links ${
                path.pathname == "/user/profile"
                  ? "bg-[#292929] text-white hover:text-[#292929]"
                  : ""
              }`}
            >
              <SquareUserRound className="w-4 h-4" /> <span>Profile</span>
            </Link> */}
            <Link
              to="/user/task-group"
              className={`sidebar-links ${isActive && "active-link"}`}
            >
              <LayoutList className="w-4 h-4" /> <span>Task Groups</span>
            </Link>
          </div>

          <div className="p-3 mb-3 w-full">
            <LogoutButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
