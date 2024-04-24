import { AlignJustify } from "lucide-react";
import React from "react";

const NavbarDashboard = () => {
  return (
    <>
      <div className="shadow-sm w-full fixed top-0 z-50 bg-white">
        <div className="px-5">
          <div className="flex items-center justify-between">
            <a href="#" className="font-bold text-[22px]">
              My To do
            </a>

            <div className="flex items-center gap-4 overflow-hidded rounded-full py-3">
              <img
                src="/avatar.png"
                alt="Avatar"
                className="h-[40px] w-[40px] cursor-pointer"
              />

              <div className="block lg:hidden">
                <AlignJustify className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarDashboard;
