import React from "react";
import { useSelector } from "react-redux";
export const HomePage = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <div className="flex h-[100vh] justify-center items-center flex-col overflow-hidden">
        <h1 className="text-5xl tablet:text-7xl">HOME PAGE</h1>
        <h1 className="text-3xl tablet:text-4xl">
          {theme === "cyberpunk" ? "CYBERPUNK THEME" : "DARK THEME"}
        </h1>
        <h3>Beta version 1.0</h3>
      </div>
    </>
  );
};
