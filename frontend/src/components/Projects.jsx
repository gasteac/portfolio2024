import Tilt from "react-parallax-tilt";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';
import { Suspense } from "react";
import Spline from '@splinetool/react-spline';

export const Projects = ({ handleClickScroll }) => {
  const { t } = useTranslation();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
       
        <div className="flex relative h-auto min-h-screen w-full items-center flex-col overflow-hidden">
          <div className="relative flex items-center py-5 text-[2rem] phone:text-[3rem] tablet:text-[3.7rem] tablet:pb-4 tablet:mt-[120px] mt-[60px]">
            <div className="flex-none border-t-4 border-emerald-800 w-screen "></div>
            <span className="flex-none mx-4">
              <Fade triggerOnce={true} cascade fraction={0.01} damping={0.1}>
                {t('projects')}
              </Fade>
            </span>
            <div className="flex-none border-t-4 border-emerald-800 w-screen "></div>
          </div>
          <div className="p-14">
            <div className="flex justify-evenly w-full h-full flex-wrap gap-16">
              {/* Portfolio */}
              <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
                <Tilt
                  glareEnable
                  glareBorderRadius={"1rem"}
                  scale="1.1"
                  perspective="4000"
                >
                  <div className="card group max-w-[40rem] max-h-[35rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project1.jpg"
                        alt="Portafolio personal"
                        className="brightness-90 self-start hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body gap-4">
                      <div className="flex flex-col items-start phone:justify-between phone:items-center phone:flex-row gap-2">
                        <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                          {t('project1title')}
                        </h2>
                        <div className="flex gap-2 group-hover:gap-5 transition-all duration-300 items-center justify-center">
                          <a
                            href="https://github.com/gasteac/portfolio2024"
                            target="_blank"
                            className="socials"
                          >
                            <img
                              style={{ clipPath: "circle(47% at 50% 50%)" }}
                              className="bg-black hover:bg-secondary rounded-[100%] w-[25px] tablet:w-[33px] h-auto"
                              src="/icons/github.svg"
                              alt="github"
                            />
                          </a>
                          <a
                            target="_blank"
                            onClick={() => handleClickScroll("home")}
                            className="cursor-pointer"
                          >
                            <span className="text-emerald-400 hover:text-emerald-600 text-[0.8rem] phone:text-[1rem] tablet:text-[1.1rem]">
                              Demo
                            </span>
                          </a>
                        </div>
                      </div>
                      <h2 className=" text-[0.6rem] phone:text-[1rem] text-gray-300">
                        {t('project1desc')}
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        <span className="text-emerald-400">+Tools: </span>{" "}
                        Axios, Formik + Yup, DaisyUI, React-Router-Dom,
                        React-Parallax-Tilt, React-Type-Animation, React-Scroll.
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#0c9fcb] p-2 rounded-xl flex-1">
                          React
                        </span>
                        <span className="bg-[#16becb] p-2 rounded-xl flex-1">
                          TailwindCSS
                        </span>
                        <span className="bg-green-500 p-2 rounded-xl flex-1">
                          MongoDB
                        </span>
                        <span className="bg-[#16becb] p-2 rounded-xl flex-1">
                          Express.js
                        </span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </Fade>
              {/* Facerook */}
              <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
                <Tilt
                  glareEnable
                  glareBorderRadius={"1rem"}
                  scale="1.1"
                  perspective="4000"
                >

                  <div className="card max-w-[40rem] group max-h-[35rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project9.jpg"
                        alt="Red Social {en progreso..}"
                        className="brightness-90 hover:brightness-100 self-start transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body gap-4">
                      <div className="flex flex-col items-start phone:justify-between phone:items-center phone:flex-row gap-2">
                        <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                          {t('project2title')}
                        </h2>
                        <div className="flex gap-2 group-hover:gap-5 transition-all duration-300 items-center justify-center">
                          <a
                            href="https://github.com/gasteac/mern-project"
                            target="_blank"
                            className="socials"
                          >
                            <img
                              style={{ clipPath: "circle(47% at 50% 50%)" }}
                              className="bg-black hover:bg-secondary rounded-[100%] w-[25px] tablet:w-[33px] h-auto"
                              src="/icons/github.svg"
                              alt="github"
                            />
                          </a>
                          <a target="_blank" href="https://facerook.up.railway.app/">
                            <span className="text-emerald-400 hover:text-emerald-600 text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                              Demo
                            </span>
                          </a>
                        </div>
                      </div>
                      <h2 className=" text-[0.6rem] phone:text-[1rem] text-gray-300 line-clamp-2 tablet:line-clamp-none">
                        {t('project2desc')}
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        <span className="text-emerald-400">+Tools: </span>
                        Redux, Firebase, JWT, Axios, Formik + Yup, FlowBite.
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#0c9fcb] p-2 rounded-xl flex-1">
                          React
                        </span>
                        <span className="bg-[#16becb] p-2 rounded-xl flex-1">
                          TailwindsCSS
                        </span>
                        <span className="bg-green-500 p-2 rounded-xl flex-1">
                          MongoDB
                        </span>
                        <span className="bg-[#16becb] p-2 rounded-xl flex-1">
                          Express.js
                        </span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </Fade>
              {/* Heroes */}
              <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
                <Tilt
                  glareEnable
                  glareBorderRadius={"1rem"}
                  scale="1.1"
                  perspective="4000"
                >

                  <div className="card max-w-[40rem] group max-h-[35rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project2.jpg"
                        alt="Pagina para buscar heroes"
                        className="brightness-90 self-start hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body gap-4">
                      <div className="flex flex-col items-start phone:justify-between phone:items-center phone:flex-row gap-2">
                        <h2 className=" text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                          {t('project3title')}
                        </h2>
                        <div className="flex gap-2 group-hover:gap-5 transition-all duration-300 items-center justify-center">
                          <a
                            href="https://github.com/gasteac/heroes"
                            target="_blank"
                            className="socials"
                          >
                            <img
                              style={{ clipPath: "circle(47% at 50% 50%)" }}
                              className="bg-black hover:bg-secondary rounded-[100%] w-[25px] tablet:w-[33px] h-auto"
                              src="/icons/github.svg"
                              alt="github"
                            />
                          </a>
                          <a target="_blank" href="https://gasteacheroes.vercel.app/">
                            <span className="text-emerald-400 hover:text-emerald-600 text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                              Demo
                            </span>
                          </a>
                        </div>
                      </div>
                      <h2 className=" text-[0.6rem] phone:text-[1rem] text-gray-300">
                        {t('project3desc')}
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        <span className="text-emerald-400">+Tools: </span>
                        React Router Dom, LocalStorage, AnimateCSS.
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#0c9fcb] p-2 rounded-xl flex-1">
                          React
                        </span>
                        <span className="bg-yellow-300 text-black p-2 rounded-xl flex-1">
                          Javascript
                        </span>
                        <span className="bg-[#820af9] p-2 rounded-xl flex-1">
                          Bootstrap
                        </span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </Fade>
              {/* Gifts Searcher */}
              <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
                <Tilt
                  glareEnable
                  glareBorderRadius={"1rem"}
                  scale="1.1"
                  perspective="4000"
                >

                  <div className="card max-w-[40rem] group max-h-[35rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project3.jpg"
                        alt="Buscador de gifs"
                        className="brightness-90 self-start hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body gap-4">
                      <div className="flex flex-col items-start phone:justify-between phone:items-center phone:flex-row gap-2">
                        <h2 className=" text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                          {t('project4title')}
                        </h2>
                        <div className="flex gap-2 group-hover:gap-5 transition-all duration-300 items-center justify-center">
                          <a
                            href="https://github.com/gasteac/react-gifs"
                            target="_blank"
                            className="socials"
                          >
                            <img
                              style={{ clipPath: "circle(47% at 50% 50%)" }}
                              className="bg-black hover:bg-secondary rounded-[100%] w-[25px] tablet:w-[33px] h-auto"
                              src="/icons/github.svg"
                              alt="github"
                            />
                          </a>
                          <a target="_blank" href="https://gasteacgifs.vercel.app/">
                            <span className="text-emerald-400 hover:text-emerald-600 text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                              Demo
                            </span>
                          </a>
                        </div>
                      </div>
                      <h2 className=" text-[0.6rem] phone:text-[1rem] text-gray-300">
                        {t('project4desc')}
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        <span className="text-emerald-400">+Tools: </span>
                        Custom React Hooks, Giphy API.
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#0c9fcb] p-2 rounded-xl flex-1">
                          React
                        </span>
                        <span className="bg-yellow-300 text-black p-2 rounded-xl flex-1">
                          Javascript
                        </span>
                        <span className="bg-[#1c3db1] p-2 rounded-xl flex-1">
                          CSS
                        </span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </Fade>
              {/* Expenses Control */}
              <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
                <Tilt
                  glareEnable
                  glareBorderRadius={"1rem"}
                  scale="1.1"
                  perspective="4000"
                >

                  <div className="card max-w-[40rem] group max-h-[35rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project4.jpg"
                        alt="Control de gastos"
                        className="brightness-90 self-start hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body gap-4">
                      <div className="flex flex-col items-start phone:justify-between phone:items-center phone:flex-row gap-2">
                        <h2 className=" text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                          {t('project5title')}
                        </h2>
                        <div className="flex gap-2 group-hover:gap-5 transition-all duration-300 items-center justify-center">
                          <a
                            href="https://github.com/gasteac/control-gastos-REACT"
                            target="_blank"
                            className="socials"
                          >
                            <img
                              style={{ clipPath: "circle(47% at 50% 50%)" }}
                              className="bg-black hover:bg-secondary rounded-[100%] w-[25px] tablet:w-[33px] h-auto"
                              src="/icons/github.svg"
                              alt="github"
                            />
                          </a>
                          <a
                            target="_blank"
                            href="https://gasteaccontrolgastos.vercel.app/"
                          >
                            <span className="text-emerald-400 hover:text-emerald-600 text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                              Demo
                            </span>
                          </a>
                        </div>
                      </div>
                      <h2 className=" text-[0.6rem] phone:text-[1rem] text-gray-300">
                        {t('project5desc')}
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        <span className="text-emerald-400">+Tools: </span>
                        PropTypes, LocalStorage, Pure CSS.
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#0c9fcb] p-2 rounded-xl flex-1">
                          React
                        </span>
                        <span className="bg-yellow-300 text-black p-2 rounded-xl flex-1">
                          Javascript
                        </span>
                        <span className="bg-[#1c3db1] p-2 rounded-xl flex-1">
                          CSS
                        </span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </Fade>
              {/* My First Page */}
              <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
                <Tilt
                  glareEnable
                  glareBorderRadius={"1rem"}
                  scale="1.1"
                  perspective="4000"
                >
                  <div className="card max-w-[40rem] group max-h-[35rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project6.jpg"
                        alt="Mi primera pagina con HTML, CSS y JS"
                        className="brightness-90 self-start hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body gap-4">
                      <div className="flex flex-col items-start phone:justify-between phone:items-center phone:flex-row gap-2">
                        <h2 className=" text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                          {t('project6title')}
                        </h2>
                        <div className="flex gap-2 group-hover:gap-5 transition-all duration-300 items-center justify-center">
                          <a
                            href="https://github.com/gasteac/html-css-js-test"
                            target="_blank"
                            className="socials"
                          >
                            <img
                              style={{ clipPath: "circle(47% at 50% 50%)" }}
                              width={"30px"}
                              height={"auto"}
                              className="bg-black hover:bg-secondary rounded-[100%] w-[25px] tablet:w-[33px] h-auto"
                              src="/icons/github.svg"
                              alt="github"
                            />
                          </a>
                          <a target="_blank" href="https://gasteaclobos.vercel.app/">
                            <span className="text-emerald-400 hover:text-emerald-600 text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                              Demo
                            </span>
                          </a>
                        </div>
                      </div>
                      <h2 className=" text-[0.6rem] phone:text-[1rem] text-gray-300">
                        {t('project6desc')}
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        <span className="text-emerald-400">+Tools: </span>
                        ScrollReveal.
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#ffa435] p-2 rounded-xl flex-1">
                          HTML
                        </span>

                        <span className="bg-[#1c3db1] p-2 rounded-xl flex-1">
                          CSS
                        </span>
                        <span className="bg-yellow-300 text-black p-2 rounded-xl flex-1">
                          Javascript
                        </span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </Fade>
              {/* Crypto Real Price Calculator */}
              <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
                <Tilt
                  glareEnable
                  glareBorderRadius={"1rem"}
                  scale="1.1"
                  perspective="4000"
                >
                  <div className="card max-w-[40rem] group max-h-[35rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project7.jpg"
                        alt="Cotizador de crptos"
                        className="brightness-90 self-start hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body gap-4">
                      <div className="flex flex-col items-start phone:justify-between phone:items-center phone:flex-row gap-2">
                        <h2 className=" text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                          {t('project7title')}
                        </h2>
                        <div className="flex gap-2 group-hover:gap-5 transition-all duration-300 items-center justify-center">
                          <a
                            href="https://github.com/gasteac/criptos-REACT"
                            target="_blank"
                            className="socials"
                          >
                            <img
                              style={{ clipPath: "circle(47% at 50% 50%)" }}
                              className="bg-black hover:bg-secondary rounded-[100%] w-[25px] tablet:w-[33px] h-auto"
                              src="/icons/github.svg"
                              alt="github"
                            />
                          </a>
                          <a target="_blank" href="https://gasteacriptos.vercel.app">
                            <span className="text-emerald-400 hover:text-emerald-600 text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                              Demo
                            </span>
                          </a>
                        </div>
                      </div>
                      <h2 className=" text-[0.6rem] phone:text-[1rem] text-gray-300">
                        {t('project7desc')}
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        <span className="text-emerald-400">+Tools: </span>
                        Emotion.
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#0c9fcb] p-2 rounded-xl flex-1">
                          React
                        </span>
                        <span className="bg-yellow-300 text-black p-2 rounded-xl flex-1">
                          Javascript
                        </span>
                        <span className="bg-[#1c3db1] p-2 rounded-xl flex-1">
                          CSS
                        </span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </Fade>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};
