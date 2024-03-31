import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [show, setShow] = useState(false)
    useEffect(() => {
      function handleResize() {
        if (window.innerWidth >= 640) {
          setShow(false); 
        }
      }
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="flex justify-end items-center text-xl h-8 ">
        <input type="checkbox" id="sidebar-active" className="hidden" />
        <label htmlFor="sidebar-active" className="openButton z-20 sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>
        <label
          htmlFor="sidebar-active"
          className="closeButton z-20 hidden sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </label>
        <div className="links-container transition-right -right-[100%] flex flex-col items-center mt-8 sm:mt-0 justify-evenly h-full fixed top-0 z-10 bg-white opacity-75 shadow-2xl w-[50%] sm:bg-white sm:shadow-none sm:w-auto sm:flex-row sm:space-x-10 sm:static">
          <a href="">Home</a>
          <a href="">About Me</a>
          <a href="">Proyects</a>
          <a href="">Contact</a>
        </div>
      </div>
    </nav>
  );
};

// fixed top-0 right-[-100%] z-10 w-[200px] shadow-lg transition-all duration-75 ease-out
