import React from "react";
import { SliderComponent } from "./Slider";
import { TypeAnimation } from "react-type-animation";
export const Presentation = () => {
  return (
    <div className="flex flex-col space-y-4 tablet:space-y-6 p-6 w-full h-[80%] tablet:h-[100%] justify-center items-center ">
      <TypeAnimation
        sequence={["Hola!", 2000, "Hola! soy Gaston.", 3000]}
        wrapper="span"
        speed={15}
        style={{ display: "inline-block" }}
        className="text-center text-[2rem] phone:text-[4rem] tablet:text-[5rem] animate__animated animate__fadeIn animate__slower animate__delay-1s "
        repeat={false}
      />
      <div>
        <TypeAnimation
          sequence={["", 4000, "Desarrollador Full Stack", 2000]}
          wrapper="span"
          speed={60}
          style={{ display: "inline-block" }}
          className="text-[1.4rem] phone:text-[2.25rem] tablet:text-[2.7rem] text-emerald-400 animate__animated animate__fadeIn animate__slower animate__delay-1s "
          repeat={false}
          cursor={false}
        />
        <TypeAnimation
          sequence={["</>", 0]}
          wrapper="span"
          speed={60}
          preRenderFirstString="hola"
          style={{ display: "inline-block" }}
          className="text-[1rem] phone:text-[2.25rem] tablet:text-[2.2rem] text-emerald-400 animate__animated animate__fadeIn animate__slower animate__delay-1s "
          repeat={Infinity}
        />
      </div>
      <TypeAnimation
        sequence={["", 4000, "React | Nodejs | MongoDB | JS", 2000]}
        wrapper="span"
        speed={60}
        style={{ display: "inline-block" }}
        className="text-[1.2rem] phone:text-[2.05rem] tablet:text-[2.2rem] animate__animated animate__fadeIn animate__slower animate__delay-1s "
        repeat={true}
        cursor={false}
      />
      <TypeAnimation
        sequence={["", 4000, "Flutter | MySQL | Python | Dart", 2000]}
        wrapper="span"
        speed={60}
        style={{ display: "inline-block" }}
        className="text-[1.1rem] phone:text-[1.95rem] tablet:text-[2.1rem]  animate__animated animate__fadeIn animate__slower animate__delay-1s "
        repeat={true}
        cursor={false}
      />
      <SliderComponent />
      <a
        className=" animate__animated animate__fadeIn animate__slower animate__delay-5s text-[1rem] phone:text-[1.6rem] tablet:text-[1.6rem] cursor-pointer w-fit z-10  border-none bg-emerald-700 hover:bg-emerald-800 text-center transition-all duration-200 py-2 pr-4 pl-3 rounded-xl active:scale-95"
        href="AcostaGastonResume.pdf"
        target="_blank"
      >
        Descargar CV
      </a>
    </div>
  );
};
