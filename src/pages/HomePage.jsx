import React from "react";
import { useSelector } from "react-redux";
import "animate.css";
export const HomePage = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <div className="flex px-2 h-[100vh] justify-center items-center flex-col overflow-hidden animate__animated animate__fadeIn">
        <h1 className="text-5xl  tablet:text-7xl">
          HOME PAGE
        </h1>
        <h1 className="text-3xl tablet:text-4xl ">
          {theme === "cyberpunk" ? (
            <img
              className="w-[600px] drop-shadow-lg "
              src="./icons/cyberpunk.svg"
              alt=""
            />
          ) : (
            <img className="w-[700px]" src="./icons/dark.svg" alt="" />
          )}
        </h1>
        <h3 className="text-2xl">
          Beta version 1.0.
        </h3>
      </div>
    </>
  );
};
