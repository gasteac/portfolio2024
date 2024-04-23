import React from "react";
import Tilt from "react-parallax-tilt";
import { Fade } from "react-awesome-reveal";
export const Projects = ({ handleClickScroll }) => {
  return (
    <>
      <div className="flex h-auto min-h-screen w-full items-center flex-col">
        <h1 className="text-[2rem] phone:text-[3rem] tablet:text-[3.7rem] tablet:pb-4 tablet:mt-[120px] mt-[60px]">
          <Fade triggerOnce={true} cascade fraction={0.01} damping={0.1}>
            Proyectos
          </Fade>
        </h1>

        <div className="p-14">
          <div className="flex justify-evenly w-full h-full flex-wrap gap-16">
            <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
              <Tilt
                glareEnable
                glareBorderRadius={"1rem"}
                scale="1.1"
                perspective="4000"
              >
                <a
                  target="_blank"
                  onClick={() => handleClickScroll("home")}
                  className="cursor-pointer"
                >
                  <div className="card max-w-[40rem] max-h-[30rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project1.jpg"
                        alt="Portafolio personal"
                        className="brightness-90 self-start hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                        Portafolio personal
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        Tailwind CSS, Axios, Formik+Yup, DaisyUI.
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#0c9fcb] p-2 rounded-xl">
                          React+Vite
                        </span>

                        <span className="bg-yellow-300 text-black p-2 rounded-xl">
                          Javascript
                        </span>
                        <span className="bg-green-500 p-2 rounded-xl">
                          MongoDB
                        </span>
                        <span className="bg-[#16becb] p-2 rounded-xl">
                          Tailwindcss
                        </span>
                        <span className="bg-[#16becb] p-2 rounded-xl">
                          Express.js
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Tilt>
            </Fade>

            <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
              <Tilt
                glareEnable
                glareBorderRadius={"1rem"}
                scale="1.1"
                perspective="4000"
              >
                <a
                  target="_blank"
                  href="https://mern-project-cfqm.onrender.com/"
                >
                  <div className="card max-w-[40rem] max-h-[30rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project9.jpg"
                        alt="Red Social {en progreso..}"
                        className="brightness-90 hover:brightness-100 self-start transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]">
                        Proyecto MERN completo
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        React, Redux-Persist, Tailwind CSS, Mongoose, MongoDB,
                        Express.js, Node.js, Firebase, JWT, Axios, Formik, Yup,
                        FlowBite.
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#0c9fcb] p-2 rounded-xl">
                          React+Vite
                        </span>

                        <span className="bg-yellow-300 text-black p-2 rounded-xl">
                          Javascript
                        </span>
                        <span className="bg-green-500 p-2 rounded-xl">
                          MongoDB
                        </span>
                        <span className="bg-[#16becb] p-2 rounded-xl">
                          Tailwindcss
                        </span>
                        <span className="bg-[#16becb] p-2 rounded-xl">
                          Express.js
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Tilt>
            </Fade>
            <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
              <Tilt
                glareEnable
                glareBorderRadius={"1rem"}
                scale="1.1"
                perspective="4000"
              >
                <a
                  target="_blank"
                  href="https://gasteaccontrolgastos.vercel.app/"
                >
                  <div className="card max-w-[40rem] max-h-[30rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project4.jpg"
                        alt="Control de gastos"
                        className="brightness-90 self-start hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]">
                        Control de gastos
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        Manejo de estados a través de props en React
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#0c9fcb] p-2 rounded-xl">
                          React
                        </span>
                        <span className="bg-yellow-300 text-black p-2 rounded-xl">
                          Javascript
                        </span>
                        <span className="bg-[#1c3db1] p-2 rounded-xl">CSS</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Tilt>
            </Fade>
            <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
              <Tilt
                glareEnable
                glareBorderRadius={"1rem"}
                scale="1.1"
                perspective="4000"
              >
                <a target="_blank" href="https://gasteacheroes.vercel.app/">
                  <div className="card max-w-[40rem] max-h-[30rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project2.jpg"
                        alt="Pagina para buscar heroes"
                        className="brightness-90 self-start hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.3rem]">
                        Pagina para buscar heroes
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        Rutas protegidas, useContext - useProvider, Bootstrap.
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#0c9fcb] p-2 rounded-xl">
                          React+Vite
                        </span>
                        <span className="bg-yellow-300 text-black p-2 rounded-xl">
                          Javascript
                        </span>
                        <span className="bg-[#820af9] p-2 rounded-xl">
                          Bootstrap
                        </span>
                        <span className="bg-[#1c3db1] p-2 rounded-xl">CSS</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Tilt>
            </Fade>
            <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
              <Tilt
                glareEnable
                glareBorderRadius={"1rem"}
                scale="1.1"
                perspective="4000"
              >
                <a
                  target="_blank"
                  href="https://gasteacveterinaria.vercel.app/"
                >
                  <div className="card max-w-[40rem] max-h-[30rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project5.jpg"
                        alt="Veterinaria"
                        className="brightness-90 self-start hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]">
                        Veterinaria
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        Agregar eliminar componentes / LocalStorage
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#0c9fcb] p-2 rounded-xl">
                          React
                        </span>
                        <span className="bg-yellow-300 text-black p-2 rounded-xl">
                          Javascript
                        </span>
                        <span className="bg-[#1c3db1] p-2 rounded-xl">CSS</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Tilt>
            </Fade>
            <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
              <Tilt
                glareEnable
                glareBorderRadius={"1rem"}
                scale="1.1"
                perspective="4000"
              >
                <a target="_blank" href="https://gasteacgifs.vercel.app/">
                  <div className="card max-w-[40rem] max-h-[30rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project3.jpg"
                        alt="Buscador de gifs"
                        className="brightness-90 self-start hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]">
                        Buscador de gifs
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        Custom React Hook para Fetch Data con Async/Await
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#0c9fcb] p-2 rounded-xl">
                          React
                        </span>
                        <span className="bg-yellow-300 text-black p-2 rounded-xl">
                          Javascript
                        </span>
                        <span className="bg-[#1c3db1] p-2 rounded-xl">CSS</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Tilt>
            </Fade>
            <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
              <Tilt
                glareEnable
                glareBorderRadius={"1rem"}
                scale="1.1"
                perspective="4000"
              >
                <a target="_blank" href="https://gasteaclobos.vercel.app/">
                  <div className="card max-w-[40rem] max-h-[30rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project6.jpg"
                        alt="Mi primera pagina con HTML, CSS y JS"
                        className="brightness-90 self-start hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]">
                        Mi primera pagina con HTML, CSS y JS
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        Nada más que primeros pasos 😊
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#ffa435] p-2 rounded-xl">
                          HTML
                        </span>

                        <span className="bg-[#1c3db1] p-2 rounded-xl">CSS</span>
                        <span className="bg-yellow-300 text-black p-2 rounded-xl">
                          Javascript
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Tilt>
            </Fade>
            <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.2}>
              <Tilt
                glareEnable
                glareBorderRadius={"1rem"}
                scale="1.1"
                perspective="4000"
              >
                <a target="_blank" href="https://gasteacriptos.vercel.app">
                  <div className="card max-w-[40rem] max-h-[30rem] w-auto glass m-auto">
                    <figure>
                      <img
                        src="./images/project7.jpg"
                        alt="Cotizador de crptos"
                        className="brightness-90 self-start hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]">
                        Cotizador de crptos
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        Practicando fetch data
                      </p>
                      <div className="card-actions justify-evenly mt-5 text-[0.5rem] phone:text-[0.6rem] tablet:text-[0.8rem]">
                        <span className="bg-[#0c9fcb] p-2 rounded-xl">
                          React
                        </span>
                        <span className="bg-yellow-300 text-black p-2 rounded-xl">
                          Javascript
                        </span>
                        <span className="bg-[#1c3db1] p-2 rounded-xl">CSS</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Tilt>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};
