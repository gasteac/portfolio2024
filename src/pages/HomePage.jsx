import React, { useEffect } from "react";
import { SliderComponent } from "../components/Slider";
import "animate.css";
import { useSelector } from "react-redux";
export const HomePage = () => {
  const { isPageLoaded } = useSelector((state) => state.theme);
  let delayValue = 1;
  let delayAbout = 3;
  useEffect(() => {
    let i;
    let name = new SplitType("#name");
    let rol = new SplitType("#rol");
    let beta = new SplitType("#beta");
    let characters = document.querySelectorAll(".char");
    for (i = 0; i < characters.length; i++) {
      characters[i].classList.add("translate-y-full");
    }
  }, []);
  useEffect(() => {
    if (isPageLoaded) {
      delayValue = 0;
      delayAbout = 0;
      gsap.to(".char", {
        y: 0,
        stagger: 0,
        delay: 0,
        duration: 0,
      });
    }
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.02 + delayValue,
      duration: 0,
    });
  }, [isPageLoaded]);

  return (
    <>
      <div className="flex h-screen px-2 justify-center items-center flex-col overflow-hidden space-y-4">
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
          className="text-3xl tablet:text-4xl text-nowrap"
        >
          Full Stack Developer
        </h1>
        <div
          className={`rounded-2xl border-accent flex items-center overflow-hidden border-r-8 border-l-8 h-[80px] tablet:h-[100px] w-[80%] tablet:w-[550px] animate__animated animate__delay-${delayValue+1}s ${
            !isPageLoaded && "animate__fadeIn animate__slower"
          }`}
        >
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
};
