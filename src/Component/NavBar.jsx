import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

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
      scrollToSection(id);
      setActive(id);
    } else {
      navigate(`/?section=${id}`);
      setActive(id);
    }
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
    <nav className="fixed top-0 left-0 bg-white z-50 w-full shadow">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 sm:hidden"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16m-7 6h7" // Hamburger icon
                }
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
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

          {/* Cart and Wishlist */}
          <div className="flex items-center space-x-4">
            <a href="/cart" className="p-2 text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </a>
            <a
              href="/wishlist"
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </a>
          </div>
        </div>

        

        {/* Dropdown Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-md mt-2`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleClick("TrendingProduct")}
              className={`block px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 ${
                active === "TrendingProduct" && "bg-gray-200"
              }`}
            >
              Trending
            </button>
            <button
              onClick={() => handleClick("ProjectList")}
              className={`block px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 ${
                active === "ProjectList" && "bg-gray-200"
              }`}
            >
              Products
            </button>
          </div>
        </div>
       
      </div>
    </nav>
  );
};

export default NavBar;
