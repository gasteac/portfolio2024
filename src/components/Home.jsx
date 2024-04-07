import React from "react";
import { Presentation } from "./Presentation";
import { Fade } from "react-awesome-reveal";

export const Home = () => {
  return (
    <>
      <div className="h-[100vh] tablet:h-[85vh]">
        <Presentation />
      </div>
    </>
  );
};
