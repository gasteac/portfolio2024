import React from "react";
import { SliderComponent } from "./Slider";
import { TypeAnimation } from "react-type-animation";
export const Presentation = () => {
  return (
    <div className="flex flex-col space-y-4 tablet:space-y-6 p-6 w-full h-[70%] tablet:h-[100%] justify-center items-center ">
      <TypeAnimation
        sequence={["Hola!", 2000, "Hola! soy Gaston.", 3000]}
        wrapper="span"
        speed={15}
        style={{ display: "inline-block" }}
        className="text-center text-[2rem] phone:text-[3rem] tablet:text-[3.7rem] animate__animated animate__fadeIn animate__slower animate__delay-1s "
        repeat={false}
      />
      <div>
        <TypeAnimation
          sequence={["", 4000, "Desarrollador Full Stack", 2000]}
          wrapper="span"
          speed={60}
          style={{ display: "inline-block" }}
          className="text-[1rem] phone:text-[1.6rem] tablet:text-[2.2rem] text-emerald-400 animate__animated animate__fadeIn animate__slower animate__delay-1s "
          repeat={false}
          cursor={false}
        />
        <TypeAnimation
          sequence={["</>", 0]}
          wrapper="span"
          speed={60}
          preRenderFirstString="hola"
          style={{ display: "inline-block" }}
          className="text-[1rem] phone:text-[1.6rem] tablet:text-[2.2rem] text-emerald-400 animate__animated animate__fadeIn animate__slower animate__delay-1s "
        />
      </div>
      <TypeAnimation
        sequence={["", 4000, "Apasionado por el desarrollo web:)", 2000]}
        wrapper="span"
        speed={60}
        style={{ display: "inline-block" }}
        className="text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]  animate__animated animate__fadeIn animate__slower animate__delay-1s "
        repeat={true}
        cursor={false}
      />
      <SliderComponent />
      <a
        className="text-[0.7rem] phone:text-[0.9rem] tablet:text-[1.1rem] animate__animated animate__fadeIn animate__slower animate__delay-5s cursor-pointer w-fit z-10  border-none bg-emerald-700 hover:bg-emerald-800 text-center transition-all duration-200 py-2 pr-4 pl-3 rounded-xl active:scale-95"
        href="AcostaGastonResume.pdf"
        target="_blank"
      >
        Descargar CV
      </a>
    </div>
  );
};
