import { SliderComponent } from "./Slider";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";
export const Presentation = () => {
  return (
    <div className="flex  flex-col space-y-4 tablet:space-y-6 p-6 h-[100%] tablet:h-[100%] justify-center items-center ">
      <TypeAnimation
        sequence={["", 1000, "Hello, I'm Gastón"]}
        wrapper="span"
        style={{ display: "inline-block" }}
        className="text-center text-[2rem] phone:text-[3rem] tablet:text-[4rem] animate__animated animate__fadeIn animate__slower animate__delay-0s "
        repeat={false}
      />
      <div>
        <TypeAnimation
          sequence={["", 2500, "Full Stack Developer"]}
          wrapper="span"
          speed={60}
          style={{ display: "inline-block" }}
          className="text-[1rem] phone:text-[1.6rem] tablet:text-[2.2rem] text-emerald-500 animate__animated animate__fadeIn animate__slower animate__delay-1s "
          cursor={false}
        />
        <TypeAnimation
          sequence={[" ", 200 ,"</>", 1000]}
          wrapper="span"
          speed={60}
          cursor={false}
          style={{ display: "inline-block" }}
          className="text-[1rem] phone:text-[1.6rem] tablet:text-[2.2rem] text-emerald-400 animate__animated animate__fadeIn animate__slower animate__delay-1s "
        />
      </div>

      {/* <SliderComponent /> */}
      <Fade triggerOnce={true} delay={3400} duration={1400}>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" mt-3 py-3 px-5 text-[0.7rem] phone:text-[0.9rem] tablet:text-[1.1rem] cursor-pointer  z-10  border-none text-opacity-100 text-black hover:bg-emerald-500 hover:bg-opacity-40  hover:text-white bg-white bg-opacity-70  text-center transition-all duration-50 rounded-xl active:scale-95"
          >
            My Resume
          </div>
          <ul
            tabIndex={0}
            className="p-2 mt-2 shadow menu dropdown-content w-full z-[1] text-[0.7rem] phone:text-[0.9rem] tablet:text-[1.1rem] cursor-pointer border-none bg-emerald-500 bg-opacity-40  text-center transition-all duration-200  rounded-xl active:scale-95"
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
