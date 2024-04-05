import React from "react";
import { useSelector } from "react-redux";
import "animate.css";
export const Contact = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <div className="flex px-2 h-[100vh] justify-center items-center flex-col overflow-hidden animate__animated animate__fadeIn">
        <h1 className="text-5xl tablet:self-center tablet:text-7xl">CONTACT</h1>
       
      </div>
    </>
  );
};
