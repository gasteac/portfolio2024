import { SliderComponent } from "./Slider";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";
export const Presentation = () => {
  return (
    <div className="flex flex-col space-y-4 tablet:space-y-6 p-6 w-full h-[70%] tablet:h-[100%] justify-center items-center ">
      <TypeAnimation
        sequence={["Hi!", 1500, "Hi! I'm Gastón.", 3000]}
        wrapper="span"
        speed={15}
        style={{ display: "inline-block" }}
        className="text-center text-[2rem] phone:text-[3rem] tablet:text-[3.7rem] animate__animated animate__fadeIn animate__slower animate__delay-1s "
        repeat={false}
      />
      <div>
        <TypeAnimation
          sequence={["", 3500, "Full Stack Developer", 2000]}
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
      <SliderComponent />
      <Fade triggerOnce={true} delay={5000} duration={1000}>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="text-white m-1 btn text-[0.7rem] phone:text-[0.9rem] tablet:text-[1.1rem] cursor-pointer w-fit z-10  border-none bg-emerald-700 hover:bg-emerald-800 text-center transition-all duration-200 rounded-xl active:scale-95"
          >
            Download CV
          </div>
          <ul
            tabIndex={0}
            className="p-2 shadow menu dropdown-content w-full z-[1] text-[0.7rem] phone:text-[0.9rem] tablet:text-[1.1rem] cursor-pointer border-none bg-emerald-800 hover:bg-emerald-900 text-center transition-all duration-200  rounded-xl active:scale-95"
          >
            <li>
              <a href="Acosta Gaston - FullStack Developer.pdf" target="_blank">
                English
              </a>
            </li>
            <li>
              <a
                href="Acosta Gaston - Desarrollador Full Stack.pdf"
                target="_blank"
              >
                Spanish
              </a>
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  );
};
