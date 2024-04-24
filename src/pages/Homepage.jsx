import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-between">
        <div className="__navbar w-full fixed top-0 z-50 bg-[#292929] text-white">
          <main className="flex items-center justify-between py-3">
            <Link to={"/"} className="text-[17px] font-bold">
              {" "}
              Today-Todo
            </Link>
            <div className="flex items-center gap-4">
              <Link to={"/"}>Home</Link>
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </div>
          </main>
        </div>

        {/* home */}
        <main className="h-full w-full flex flex-col items-center justify-center mt-24">
          <img
            src="/avatar.svg"
            alt="Image"
            className="h-[300px] w-auto mb-10"
          />
          <p>Choose what to do & Organize them into Today Todo</p>
          <h1 className="text-[35px] font-bold mb-6">
            The #1 To Do Application
          </h1>
          <Link to="/register" className="button-main">
            Get Started
          </Link>
        </main>

        <div className="__footer bg-slate-100 py-3">
          <p className="text-center">
            A digital product of{" "}
            <a className="underline" href="https://unisoft-informatix.top">
              UniSoft Informatix Solutions
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Homepage;
