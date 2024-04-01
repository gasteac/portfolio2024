import React from "react";
import { useSelector } from "react-redux";
export const AboutMePage = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <div className="flex h-[100vh] justify-center items-center flex-col overflow-hidden">
        <h1 className="text-5xl tablet:text-7xl">ABOUT PAGE</h1>
        <h1 className="text-3xl tablet:text-4xl">
          {theme === "cyberpunk" ? "CYBERPUNK THEME" : "DARK THEME"}
        </h1>
      </div>
    </>
  );
};
