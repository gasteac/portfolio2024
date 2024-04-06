import React from "react";
export const Contact = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('sexo')
  }
  return (
    <>
      <div className="flex px-6 h-[100vh] tablet:items-center flex-col">
        <div className="flex-col flex tablet:flex-row space-x-5 items-center justify-center pb-2 tablet:pb-4 tablet:mt-[100px] mt-[60px]">
          <h1 className="text-[2rem] phone:text-[4rem] tablet:text-[5rem] ">
            Contactame
          </h1>
          <div className="space-x-5 flex">
              <div className="tooltip" data-tip="gasteac@gmail.com">
            <button className="btn bg-primary outline-none border-none text-black text-[0.7rem] phone:text-[0.9rem] tablet:text-[1rem] hover:bg-primary hover:bg-opacity-80">
              Email
            </button>
          </div>
          <div className="tooltip" data-tip="+543795130132">
            <button className="btn bg-primary outline-none border-none text-black text-[0.7rem] phone:text-[0.9rem] tablet:text-[1rem] hover:bg-primary hover:bg-opacity-80">
              Celular
            </button>
          </div>
          </div>
        
        </div>

        <form onSubmit={handleSubmit} className="max-w-[1000px] w-full h-full">
          <div className="flex flex-col space-y-4 tablet:space-y-0 tablet:space-x-6 mb-6 tablet:flex-row">
            <div className="flex flex-col w-full">
              <label
                className="text-[1rem] phone:text-[1.2rem] tablet:text-[1.4rem]"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="Nombre"
                className="text-[1rem] phone:text-[1.2rem] tablet:text-[1.4rem] p-4 rounded-xl border-none outline-none text-black w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                className="text-[1rem] phone:text-[1.2rem] tablet:text-[1.4rem]"
                htmlFor="email"
              >
                Correo
              </label>
              <input
                id="email"
                type="email"
                placeholder="correo@correo.com"
                className="text-[1rem] phone:text-[1.2rem] tablet:text-[1.4rem] p-4 rounded-xl border-none outline-none text-black w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                className="text-[1rem] phone:text-[1.2rem] tablet:text-[1.4rem]"
                htmlFor="phone"
              >
                Celular
              </label>
              <input
                id="phone"
                type="text"
                placeholder="+5493794132130"
                className="text-[1rem] phone:text-[1.2rem] tablet:text-[1.4rem] p-4 rounded-xl border-none outline-none text-black w-full"
              />
            </div>
          </div>
          <label
            className="text-[1rem] phone:text-[1.2rem] tablet:text-[1.4rem]"
            htmlFor="message"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Tu mensaje aquí"
            className="text-[1rem] phone:text-[1.2rem] tablet:text-[1.4rem] p-4 rounded-xl min-h-[8rem] tablet:min-h-[20rem] border-none outline-none text-black w-full"
          />
          <button className="btn mt-4 w-full bg-primary outline-none border-none text-black text-[1rem] phone:text-[1.2rem] tablet:text-[1.4rem] hover:bg-primary hover:bg-opacity-80">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
