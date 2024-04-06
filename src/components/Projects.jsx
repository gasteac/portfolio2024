import React from "react";
import Tilt from "react-parallax-tilt";
export const Projects = () => {
  return (
    <>
      <div className="flex h-auto min-h-screen w-full items-center flex-col">
        <h1 className="text-[2rem] phone:text-[3rem] tablet:text-[3.7rem] tablet:pb-4 tablet:mt-[100px] mt-[60px]">
          Proyectos
        </h1>
        <div className="p-12">
          <div className="flex justify-evenly w-full h-full flex-wrap gap-8">
            <Tilt>
              <a target="_blank" href="">
                <div className="card max-w-[40rem] w-auto glass m-auto">
                  <figure>
                    <img
                      src="./images/proyect1.jpg"
                      alt="car!"
                      className="brightness-90 hover:brightness-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]">
                      Portafolio personal
                    </h2>
                    <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                      Con este proyecto aprendi a utilizar tailwindcss.
                    </p>
                    <div className="card-actions justify-evenly mt-5 text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                      <span className="bg-[#0c9fcb] p-2 rounded-xl">React</span>
                      <span className="bg-yellow-300 text-black p-2 rounded-xl">
                        Javascript
                      </span>
                      <span className="bg-green-500 p-2 rounded-xl">
                        MongoDB
                      </span>
                      <span className="bg-[#16becb] p-2 rounded-xl">
                        Tailwindcss
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Tilt>
            <Tilt>
              <a target="_blank" href="">
                <div className="card max-w-[40rem] w-auto glass m-auto">
                  <figure>
                    <img
                      src="./images/proyect1.jpg"
                      alt="car!"
                      className="brightness-90 hover:brightness-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]">
                      Portafolio personal
                    </h2>
                    <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                      Con este proyecto aprendi a utilizar tailwindcss.
                    </p>
                    <div className="card-actions justify-evenly mt-5 text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                      <span className="bg-[#0c9fcb] p-2 rounded-xl">React</span>
                      <span className="bg-yellow-300 text-black p-2 rounded-xl">
                        Javascript
                      </span>
                      <span className="bg-green-500 p-2 rounded-xl">
                        MongoDB
                      </span>
                      <span className="bg-[#16becb] p-2 rounded-xl">
                        Tailwindcss
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Tilt>
            <Tilt>
              <a target="_blank" href="">
                <div className="card max-w-[40rem] w-auto glass m-auto">
                  <figure>
                    <img
                      src="./images/proyect1.jpg"
                      alt="car!"
                      className="brightness-90 hover:brightness-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]">
                      Portafolio personal
                    </h2>
                    <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                      Con este proyecto aprendi a utilizar tailwindcss.
                    </p>
                    <div className="card-actions justify-evenly mt-5 text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                      <span className="bg-[#0c9fcb] p-2 rounded-xl">React</span>
                      <span className="bg-yellow-300 text-black p-2 rounded-xl">
                        Javascript
                      </span>
                      <span className="bg-green-500 p-2 rounded-xl">
                        MongoDB
                      </span>
                      <span className="bg-[#16becb] p-2 rounded-xl">
                        Tailwindcss
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Tilt>
            <Tilt>
              <a target="_blank" href="">
                <div className="card max-w-[40rem] w-auto glass m-auto">
                  <figure>
                    <img
                      src="./images/proyect1.jpg"
                      alt="car!"
                      className="brightness-90 hover:brightness-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]">
                      Portafolio personal
                    </h2>
                    <p className="text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                      Con este proyecto aprendi a utilizar tailwindcss.
                    </p>
                    <div className="card-actions justify-evenly mt-5 text-[0.6rem] phone:text-[0.8rem] tablet:text-[1rem]">
                      <span className="bg-[#0c9fcb] p-2 rounded-xl">React</span>
                      <span className="bg-yellow-300 text-black p-2 rounded-xl">
                        Javascript
                      </span>
                      <span className="bg-green-500 p-2 rounded-xl">
                        MongoDB
                      </span>
                      <span className="bg-[#16becb] p-2 rounded-xl">
                        Tailwindcss
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Tilt>
          </div>
        </div>
      </div>
    </>
  );
};
