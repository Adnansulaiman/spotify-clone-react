import React from "react";

const SectionHeading = ({title}) => {
  return (
    <div className={` flex justify-between mt-7 mb-5 items-center `}>
      <h1 className=" text-lg sm:text-xl font-semibold">{title}</h1>
      <p className="text-xs sm:text-sm font-semibold hover:underline">View all</p>
    </div>
  );
};

export default SectionHeading;
