import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <img src="Banner.jpg" className="h-[92vh] w-full opacity-90 blur-sm" />
      <div className="absolute flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold tracking-tight text-black lg:text-6xl drop-shadow-2xl">
          New arrivals are here
        </h1>
        <p className="mt-4 text-xl text-black">
          The new arrivals have, well, newly arrived. Check out the latest
          options from our summer small-batch release while they're still in
          stock.
        </p>
      </div>
    </div>
  );
};

export default Banner;
