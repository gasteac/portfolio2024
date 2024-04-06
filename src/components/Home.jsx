import React from "react";
import { Presentation } from "./Presentation";
import { Fade } from "react-awesome-reveal";

export const Home = () => {
  return (
    <>
      <div className="h-[100vh] tablet:h-[80vh] w-full flex flex-col items-center justify-start">
        <Fade delay={3000} duration={2000} triggerOnce={true}>
          <div className="absolute  h-[1000px] w-[1000px] left-[1250px] -bottom-[400px] bg-secondary transition-all duration-300 rounded-full blur-[100px]"></div>
        </Fade>
        <Fade delay={2000} duration={2000} triggerOnce={true}>
          <div className="absolute -left-[350px] bottom-[400px] h-[800px] w-[800px] bg-secondary transition-all duration-300 rounded-full blur-[100px]"></div>
        </Fade>
        <Presentation />
      </div>
    </>
  );
};
