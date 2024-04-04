import React, { useEffect } from "react";
import { SliderComponent } from "../components/Slider";
import "animate.css";
export const HomePage = () => {
  useEffect(() => {
    let i;
    let name = new SplitType("#name");
    let rol = new SplitType("#rol");
    let beta = new SplitType("#beta");

    let characters = document.querySelectorAll(".char");
    for (i = 0; i < characters.length; i++) {
      characters[i].classList.add("translate-y-full");
    }
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0,
    });
  }, []);

  return (
    <>
      <div className="flex px-2 h-[100vh] justify-center items-center flex-col overflow-hidden space-y-4">
        <h1
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          id="name"
          className="text-5xl tablet:text-7xl text-nowrap"
        >
          Gaston Acosta
        </h1>
        <h1
          id="rol"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          className="text-3xl tablet:text-5xl text-nowrap"
        >
          Full Stack Developer
        </h1>

        <div className="rounded-2xl border-primary flex items-center overflow-hidden border-r-4 border-l-4 h-[80px] tablet:h-[100px] w-[80%] tablet:w-[550px] animate__animated animate__fadeIn animate__delay-1s animate__slower">
          <SliderComponent />
        </div>

        <h3
          id="beta"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          className="text-2xl"
        >
          Beta version 1.0.
        </h3>
      </div>
    </>
  );
}
