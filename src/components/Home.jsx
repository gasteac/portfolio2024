import React from "react";
import { Presentation } from "./Presentation";
import { Fade } from "react-awesome-reveal";

export const Home = () => {
  return (
    <>
      <div className="h-[100vh] tablet:h-[80vh] w-full flex flex-col items-center justify-start">
        
        <Presentation />
      </div>
    </>
  );
};
