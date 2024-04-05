import React from "react";
import { Presentation } from "./Presentation";
export const Home = () => {
  return (
    <>
      <div className="h-screen w-full space-y-6 flex flex-col items-center justify-start">
        <Presentation />
      </div>
    </>
  );
};
