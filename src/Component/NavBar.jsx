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
                  src="favicon.ico"
                  className="h-10 w-auto"
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
                Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
