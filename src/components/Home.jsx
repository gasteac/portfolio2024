import React from "react";
import { Presentation } from "./Presentation";
import { Fade } from "react-awesome-reveal";

export const Home = () => {
  return (
    <>
      <div className="h-[100vh] tablet:h-[80vh] w-full flex flex-col items-center justify-start">
        <div className="absolute left-20 bottom-96 h-[600px] w-[600px] bg-secondary translate-x-[250%] translate-y-[80%] transition-all duration-300 rounded-full blur-[100px]"></div>
        <div className="absolute -left-[350px] bottom-[400px] h-[800px] w-[800px] bg-secondary transition-all duration-300 rounded-full blur-[100px]"></div>
        <Presentation />
      </div>
    </>
  );
};
