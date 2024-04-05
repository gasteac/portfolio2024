import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { SliderComponent } from "./Slider";
import { TypeAnimation } from "react-type-animation";
export const Presentation = () => {
  const { isPageLoaded } = useSelector((state) => state.theme);
  return (
    <div className="flex flex-col space-y-4 tablet:space-y-6 p-6 w-full h-[80%] tablet:justify-center items-center ">
      <TypeAnimation
        sequence={["Hola!", 2000, "Hola! soy Gaston.", 3000]}
        wrapper="span"
        speed={15}
        style={{ display: "inline-block" }}
        className="text-[3rem] phone:text-[4rem] tablet:text-[5rem] animate__animated animate__fadeIn animate__slower animate__delay-1s "
        repeat={false}
      />
      <div>
        <TypeAnimation
          sequence={["", 4000, "Desarrollador Full Stack", 2000]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          className="text-[1.6rem] phone:text-[2.25rem] tablet:text-[2.5rem] text-emerald-500 animate__animated animate__fadeIn animate__slower animate__delay-1s "
          repeat={false}
          cursor={false}
        />
        <TypeAnimation
          sequence={["</>", 0]}
          wrapper="span"
          speed={50}
          preRenderFirstString="hola"
          style={{ display: "inline-block" }}
          className="text-[1.6rem] phone:text-[2.25rem] tablet:text-[2.5rem] text-emerald-500 animate__animated animate__fadeIn animate__slower animate__delay-1s "
          repeat={Infinity}
        />
      </div>

      <SliderComponent />
      <a
        className="animate__animated animate__fadeIn animate__slower animate__delay-5s text-[1.2rem] phone:text-[1.6rem] tablet:text-[1.6rem] cursor-pointer w-fit z-10  border-none bg-emerald-500 hover:bg-emerald-600 text-center transition-all duration-200 py-2 pr-4 pl-3 rounded-xl active:scale-95"
        href="ResumeAcostaGaston.pdf"
        target="_blank"
      >
        Descargar CV
      </a>
      
    </div>
  );
};
