import React from "react";
import { useSelector } from "react-redux";
import "animate.css";
export const ProyectsPage = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <div className="flex px-2 h-[100vh] justify-center items-center flex-col overflow-hidden animate__animated animate__fadeIn">
        <h1 className="text-5xl tablet:text-7xl ">
          PROYECTS
        </h1>
        <h1 className="text-3xl tablet:text-4xl ">
          {theme === "cyberpunk" ? "CYBERPUNK THEME" : "DARK THEME"}
        </h1>
      </div>
    </>
  );
};
