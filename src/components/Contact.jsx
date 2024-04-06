import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gasteacApi } from "../../api";

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Requerido!"),
      message: Yup.string().required("Requerido!"),
      email: Yup.string().email("Email invalido").required("Requerido!"),
    }),
    onSubmit: async ({ name, email, phone = "", message }) => {
      try {
        await gasteacApi.post("/form/new", {
          name: name,
          email: email,
          phone: phone,
          newMessage: message,
        });
        formik.resetForm();
        document.getElementById("my_modal_1").showModal();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-primary">
          <h3 className="font-bold text-lg text-black">Mensaje enviado!</h3>
          <p className="py-4 text-black">Gracias! Responderé cuanto antes :)</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn ">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="flex px-6 h-screen items-center justify-center flex-col">
        <div className="flex-col flex tablet:flex-col space-x-5 phone:space-x-0  items-center justify-center mb-5">
          <h1 className="text-center text-[2rem] phone:text-[3rem] tablet:text-[3.7rem]">
            Contactame
          </h1>
          <div className="phone:space-x-2 mt-2 space-y-3 phone:flex phone:flex-row phone:space-y-0 phone:items-center  flex flex-col items-start">
            <p className="cursor-default  flex items-center justify-center  phone:w-auto  outline-none border-none text-white text-[0.7rem] phone:text-[0.9rem] tablet:text-[1rem] hover:bg-primary hover:bg-opacity-80">
              <span className="material-symbols-outlined mr-1">mail</span>
              gasteac@gmail.com
            </p>
            <p className="cursor-default flex items-center justify-center  phone:w-auto  outline-none border-none text-white text-[0.7rem] phone:text-[0.9rem] tablet:text-[1rem] hover:bg-primary hover:bg-opacity-80">
              <span className="material-symbols-outlined mr-1 ml-2">
                phone_android
              </span>
              (+54)3795130132
            </p>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="max-w-[1000px] w-full">
          <div className="flex flex-col space-y-2 tablet:space-y-0 tablet:space-x-6 mb-2 tablet:flex-row">
            <div className="flex flex-col w-full">
              <div className="flex items-end">
                <label
                  className="text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]"
                  htmlFor="name"
                >
                  Nombre
                </label>
                {formik.touched.name && formik.errors.name ? (
                  <h6 className="ml-2 text-red-300 text-[0.8rem]  phone:text-[1rem] tablet:text-[1.2rem]">
                    {formik.errors.name}
                  </h6>
                ) : null}
              </div>
              <input
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                placeholder="Nombre"
                className="text-[0.8rem] mt-1 phone:text-[1rem] tablet:text-[1.2rem] p-3 rounded-xl border-none outline-none text-black w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex items-end">
                <label
                  className="text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]"
                  htmlFor="email"
                >
                  Correo
                </label>
                {formik.touched.name && formik.errors.name ? (
                  <h6 className="ml-2 text-red-300 text-[0.8rem]  phone:text-[1rem] tablet:text-[1.2rem]">
                    {formik.errors.email}
                  </h6>
                ) : null}
              </div>
              <input
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="text"
                placeholder="correo@correo.com"
                className="text-[0.8rem] mt-1 phone:text-[1rem] tablet:text-[1.2rem] p-3 rounded-xl border-none outline-none text-black w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                className="text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]"
                htmlFor="phone"
              >
                Celular
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                placeholder="+5493794132130"
                className="text-[0.8rem] mt-1 phone:text-[1rem] tablet:text-[1.2rem] p-3 rounded-xl border-none outline-none text-black w-full"
              />
            </div>
          </div>
          <div className="flex items-end">
            <label
              className="text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]"
              htmlFor="newMessage"
            >
              Mensaje
            </label>
            {formik.touched.name && formik.errors.name ? (
              <h6 className="ml-2 text-red-300 text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]">
                {formik.errors.message}
              </h6>
            ) : null}
          </div>
          <textarea
            id="newMessage"
            type="text"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            placeholder="Tu mensaje aquí"
            className="text-[0.8rem] mt-1 phone:text-[1rem] tablet:text-[1.2rem] p-3 rounded-xl min-h-[4rem] tablet:min-h-[10rem] border-none outline-none text-black w-full"
          />
          <button
            type="submit"
            className="p-2 rounded-lg mt-4 w-full bg-primary outline-none border-none text-black text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem] hover:bg-primary hover:bg-opacity-80"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
