import React from "react";

const StatsCard = ({ count, text }) => {
  return (
    <>
      <div className="col-span-6 lg:col-span-3 bg-white p-5 rounded-md shadow-sm text-center">
        <h2 className="text-[45px] font-bold">{count}</h2>
        <p className="text-[16px]">{text}</p>
      </div>
    </>
  );
};

export default StatsCard;
