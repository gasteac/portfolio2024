import React from "react";
import { useSelector } from "react-redux";
import "animate.css";
export const AboutMePage = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <div className="flex px-2 h-[100vh] justify-center items-center flex-col overflow-hidden animate__animated animate__fadeIn space-y-4">
        <h1 className="text-5xl tablet:text-7xl">ABOUT ME</h1>
        <h1 className="tablet:text-2xl p-2 max-w-screen-tablet text-justify">
          Hello! I'm a soon-to-be graduate from the Information Systems
          Engineering program at the National Technological University, Regional
          Faculty of Resistencia. I'm a responsible and curious individual
          passionate about my career. During my university journey, I honed
          problem-solving skills, fostered teamwork, and gained valuable
          experience in various projects. I've delved into frontend and backend
          development, mastering technologies like React, Node.js, HTML, CSS,
          and more. Although my portfolio is currently empty, I'm eager to
          revisit past projects, optimize code, and gain further experience. I'm
          adaptable, tech-savvy, and committed to delivering my best in any
          environment. Thank you for your interest!
        </h1>
      </div>
    </>
  );
};
