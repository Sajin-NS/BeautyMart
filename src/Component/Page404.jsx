import React from "react";

const Page404 = ({ title, subTitle }) => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col items-center justify-center gap-2">
      <img src="NotFound.svg" className="h-[50vh]" alt=""></img>{" "}
      <h1 className="text-xl">{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export default Page404;
