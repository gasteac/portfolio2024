import React from "react";
import { SliderComponent } from "./Slider";
import { TypeAnimation } from "react-type-animation";
import { Fade, JackInTheBox } from "react-awesome-reveal";
export const Presentation = () => {
  return (
    <div className="flex flex-col space-y-4 tablet:space-y-6 p-6 w-full h-[70%] tablet:h-[100%] justify-center items-center ">
      <TypeAnimation
        sequence={["Hola!", 1500, "Hola! soy Gaston.", 3000]}
        wrapper="span"
        speed={15}
        style={{ display: "inline-block" }}
        className="text-center text-[2rem] phone:text-[3rem] tablet:text-[3.7rem] animate__animated animate__fadeIn animate__slower animate__delay-1s "
        repeat={false}
      />
      <div>
        <TypeAnimation
          sequence={["", 3500, "Desarrollador Full Stack", 2000]}
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
          cursor={false}
          preRenderFirstString="hola"
          style={{ display: "inline-block" }}
          className="text-[1rem] phone:text-[1.6rem] tablet:text-[2.2rem] text-emerald-400 animate__animated animate__fadeIn animate__slower animate__delay-1s "
        />
      </div>
      <Fade
        triggerOnce={true}
        duration={1500}
        delay={4500}
        
        className="text-[0.7rem] phone:text-[1.2rem] tablet:text-[1.5rem]"
      >
        <p>Apasionado por el desarrollo web :)</p>
      </Fade>
      <SliderComponent />
      <JackInTheBox triggerOnce={true} delay={6000} duration={1000}>
        <a
          className="text-[0.7rem] phone:text-[0.9rem] tablet:text-[1.1rem] cursor-pointer w-fit z-10  border-none bg-emerald-700 hover:bg-emerald-800 text-center transition-all duration-200 py-2 pr-4 pl-3 rounded-xl active:scale-95"
          href="AcostaGastonResume.pdf"
          target="_blank"
        >
          Descargar CV
        </a>
      </JackInTheBox>
    </div>
  );
};
