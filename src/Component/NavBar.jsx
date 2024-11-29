import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("");

  useEffect(() => {
    const section = new URLSearchParams(location.search).get("section");
    if (section) {
      scrollToSection(section);
    }
  }, [location]);

  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const handleClick = (id) => {
    if (location.pathname === "/") {
      // If already on the home page, scroll to the section
      scrollToSection(id);
      setActive(id);
    } else {
      // Navigate to home and add query parameter for the section
      navigate(`/?section=${id}`);
      setActive(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 bg-white z-50 w-full shadow">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="flex flex-1 gap-4 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/">
                <img
                  alt="Your Company"
                  src="/images/Logo/Logo2.png"
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button
                onClick={() => handleClick("TrendingProduct")}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 ${
                  active === "TrendingProduct" && "border-b-2 border-pink-400"
                }`}
              >
                Trending
              </button>
              <button
                onClick={() => handleClick("ProjectList")}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 ${
                  active === "ProjectList" && "border-b-2 border-pink-400"
                }`}
              >
                Products
              </button>
            </div>
          </div>
          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-3 sm:pr-0">
            <button
              type="button"
              className="group relative rounded-full p-1 text-gray-400"
            >
              <a href="/cart">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-7 group-hover:stroke-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </a>
            </button>
          </div>
          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-3 sm:pr-0">
            <button
              type="button"
              className="group relative rounded-full p-1 text-gray-400"
            >
              <a href="/wishlist">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-7 group-hover:fill-red-600 group-hover:stroke-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
