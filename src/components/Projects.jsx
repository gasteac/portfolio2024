import Tilt from "react-parallax-tilt";
import { Fade } from "react-awesome-reveal";
export const Projects = ({ handleClickScroll }) => {
  return (
    <>
      <div className="flex h-auto min-h-screen w-full items-center flex-col">
        <h1 className="text-[2rem] phone:text-[3rem] tablet:text-[3.7rem] tablet:pb-4 tablet:mt-[120px] mt-[60px]">
          <Fade triggerOnce={true} cascade fraction={0.01} damping={0.1}>
            Projects
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
                        Personal Portfolio.
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
                <a target="_blank" href="https://facerook.up.railway.app/">
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
                        Complete MERN Project.
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
                        Expense Control.
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        State management through props in React.
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
                        Page to search for heroes.
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        Protected routes, useContext - useProvider, Bootstrap.
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
                        Veterinary patient management.
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        Add, Delete components / LocalStorage.
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
                        Gifts Searcher.
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        Custom React hooks for fetching data with Async/Await.
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
                        WOLVES. One of my first pages.
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        First steps working with HTML, CSS y JS.
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
                        Crypto price calculator.
                      </h2>
                      <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                        Practicing fetch data.
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
