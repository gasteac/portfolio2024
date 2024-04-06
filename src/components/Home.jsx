import React from "react";
import { Presentation } from "./Presentation";
export const Home = () => {
  return (
    <>
      <div className="h-[100vh] tablet:h-[80vh] w-full flex flex-col items-center justify-start">
        <div className="absolute left-20 bottom-96 h-96 w-96 bg-secondary translate-x-[350%] translate-y-[70%] transition-all duration-300 rounded-full blur-[100px]"></div>
        <Presentation />
      </div>
    </>
  );
};
