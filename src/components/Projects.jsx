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
              <a href="">
                <div className="card max-w-[40rem] w-auto glass m-auto">
                  <figure>
                    <img
                      src="./images/proyect1.jpg"
                      alt="car!"
                      className="hover:scale-125 transition-all duration-300"
                      loading="lazy"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Nombre del proyectito</h2>
                    <p>Que aprendi, que me costo mas?</p>
                    <div className="card-actions justify-evenly mt-5">
                      <span>React</span>
                      <span>Javascript</span>
                      <span>MongoDB</span>
                      <span>Redux</span>
                    </div>
                  </div>
                </div>
              </a>
            </Tilt>
            <Tilt>
              <a href="">
                <div className="card max-w-[40rem] w-auto glass m-auto">
                  <figure>
                    <img
                      src="./images/proyect1.jpg"
                      alt="car!"
                      className="hover:scale-125 transition-all duration-300"
                      loading="lazy"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Nombre del proyectito</h2>
                    <p>Que aprendi, que me costo mas?</p>
                    <div className="card-actions justify-evenly mt-5">
                      <span>React</span>
                      <span>Javascript</span>
                      <span>MongoDB</span>
                      <span>Redux</span>
                    </div>
                  </div>
                </div>
              </a>
            </Tilt>
            <Tilt>
              <a href="">
                <div className="card max-w-[40rem] w-auto glass m-auto">
                  <figure>
                    <img
                      src="./images/proyect1.jpg"
                      alt="car!"
                      className="hover:scale-125 transition-all duration-300"
                      loading="lazy"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Nombre del proyectito</h2>
                    <p>Que aprendi, que me costo mas?</p>
                    <div className="card-actions justify-evenly mt-5">
                      <span>React</span>
                      <span>Javascript</span>
                      <span>MongoDB</span>
                      <span>Redux</span>
                    </div>
                  </div>
                </div>
              </a>
            </Tilt>
            <Tilt>
              <a href="">
                <div className="card max-w-[40rem] w-auto glass m-auto">
                  <figure>
                    <img
                      src="./images/proyect1.jpg"
                      alt="car!"
                      className="hover:scale-125 transition-all duration-300"
                      loading="lazy"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Nombre del proyectito</h2>
                    <p>Que aprendi, que me costo mas?</p>
                    <div className="card-actions justify-evenly mt-5">
                      <span>React</span>
                      <span>Javascript</span>
                      <span>MongoDB</span>
                      <span>Redux</span>
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
