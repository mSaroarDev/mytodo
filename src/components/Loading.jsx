import React from "react";

const Loading = () => {
  return (
    <>
      <div className="h-screen w-full fixed top-0 bottom-0 left-0 right-0 bg-white flex items-center justify-center">
        <span className="loader"></span>
      </div>
    </>
  );
};

export default Loading;
