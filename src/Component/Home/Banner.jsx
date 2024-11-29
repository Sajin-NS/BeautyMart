import React from "react";
import Slider from "react-slick";

const Banner = () => {
  const images = [
    "/images/Banner/Banner1.jpg",
    "/images/Banner/Banner2.png",
    "/images/Banner/Banner3.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              className="h-[92vh] w-full object-cover opacity-90 "
              alt={`Banner ${index + 1}`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-amber-50 lg:text-6xl drop-shadow-2xl">
                New arrivals are here
              </h1>
              <p className="mt-4 text-xl text-amber-50 max-w-2xl text-center">
                The new arrivals have, well, newly arrived. Check out the latest
                options from our summer small-batch release while they're still
                in stock.
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
