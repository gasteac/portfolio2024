import React from "react";
import { useSelector } from "react-redux";
import "animate.css";
export const ContactPage = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <div className="flex h-[100vh] w-[50vw]  justify-center items-center flex-col overflow-hidden animate__animated animate__fadeIn">
        <h1 className="text-5xl self-start tablet:self-center tablet:text-7xl">CONTACT</h1>
        <h1 className="text-3xl  self-start  tablet:text-4xl tablet:self-center">
          {theme === "cyberpunk" ? "CYBERPUNK THEME" : "DARK THEME"}
        </h1>
      </div>
    </>
  );
};
