import React from "react";
export const Contact = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('sexo')
  }
  return (
    <>
      <div className="flex px-6 h-[100vh] tablet:items-center flex-col">
        <div className="flex-col mb-2 flex tablet:flex-col space-x-5 items-center justify-center pb-2 tablet:pb-4 tablet:mt-[100px] mt-[60px]">
          <h1 className="text-[2rem] phone:text-[4rem] tablet:text-[5rem] ">
            Contactame
          </h1>
          <div className="phone:space-x-2 mt-2 space-y-2 phone:flex phone:space-y-0 justify-center items-center">
            <p className="cursor-default p-2 flex items-center justify-center rounded-lg phone:w-auto bg-primary outline-none border-none text-black text-[0.7rem] phone:text-[0.9rem] tablet:text-[1rem] hover:bg-primary hover:bg-opacity-80">
              <span class="material-symbols-outlined">mail</span>
              gasteac@gmail.com
            </p>
            <p className="cursor-default p-2 flex items-center justify-center rounded-lg phone:w-auto bg-primary outline-none border-none text-black text-[0.7rem] phone:text-[0.9rem] tablet:text-[1rem] hover:bg-primary hover:bg-opacity-80">
              <span class="material-symbols-outlined">phone_android</span>
              (+54)3795130132
            </p>
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
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn mt-4 w-full bg-primary outline-none border-none text-black text-[1rem] phone:text-[1.2rem] tablet:text-[1.4rem] hover:bg-primary hover:bg-opacity-80"
          >
            Enviar
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-primary">
              <h3 className="font-bold text-lg text-black">Mensaje enviado!</h3>
              <p className="py-4 text-black">
                Gracias! :D Responderé cuanto antes OWO
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn ">Cerrar</button>
                </form>
              </div>
            </div>
          </dialog>
        </form>
      </div>
    </>
  );
};
