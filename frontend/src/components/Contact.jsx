import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
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
        await axios.post("api/form/new", {
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
          <h3 className="font-bold text-lg text-black">Message Sent!</h3>
          <p className="py-4 text-black">I'll get back to you soon!</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn ">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="flex px-6 h-screen items-center flex-col overflow-hidden ">
        <div className="flex-col  flex tablet:flex-col space-x-5 phone:space-x-0  items-center justify-center mb-5">
          <div className="relative flex items-center py-5 text-[2rem] phone:text-[3rem] tablet:text-[3.7rem] tablet:pb-4 tablet:mt-[120px] mt-[60px]">
            <div className="flex-none border-t-4  border-emerald-800 w-screen"></div>
            <span className="flex-none mx-4">
              <Fade triggerOnce={true} cascade fraction={0.01} damping={0.1}>
                Contact Me
              </Fade>
            </span>
            <div className="flex-none border-t-4 border-emerald-800 w-screen"></div>
          </div>
          <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.4}>
            <div className="phone:space-x-2 mt-2 space-y-3 phone:flex phone:flex-row phone:space-y-0 phone:items-center  flex flex-col items-start">
              <a
                href="mailto:gasteac@gmail.com"
                target="_blank"
                className="hover:text-primary flex items-center justify-center  phone:w-auto  outline-none border-none text-white text-[0.7rem] phone:text-[0.9rem] tablet:text-[1rem]"
              >
                <span className="cursor-default material-symbols-outlined mr-1 ">
                  mail
                </span>
                gasteac@gmail.com
              </a>
              <a
                target="_blank"
                href="https://wa.me/543795130132"
                className="hover:text-primary flex items-center justify-center  phone:w-auto  outline-none border-none text-white text-[0.7rem] phone:text-[0.9rem] tablet:text-[1rem]"
              >
                <span className="cursor-default material-symbols-outlined mr-1 ml-2">
                  phone_android
                </span>
                (+54)3795130132
              </a>
            </div>
          </Fade>
        </div>
        <form onSubmit={formik.handleSubmit} className="max-w-[1000px] w-full">
          <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.4}>
            <div className="flex flex-col space-y-2 tablet:space-y-0 tablet:space-x-6 mb-2 tablet:flex-row">
              <div className="flex flex-col w-full group">
                <div className="flex items-end">
                  <label
                    className="group-focus-within:text-primary text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]"
                    htmlFor="name"
                  >
                    Name
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
                  placeholder="Gaston"
                  className="text-[0.8rem] mt-1 phone:text-[1rem] tablet:text-[1.2rem] p-3 rounded-xl border-none outline-none text-black w-full"
                />
              </div>
              <div className="flex flex-col w-full group">
                <div className="flex items-end">
                  <label
                    className="group-focus-within:text-primary text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  {formik.touched.email && formik.errors.email ? (
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
                  placeholder="email@company.com"
                  className="text-[0.8rem] mt-1 phone:text-[1rem] tablet:text-[1.2rem] p-3 rounded-xl border-none outline-none text-black w-full"
                />
              </div>
              <div className="flex flex-col w-full group">
                <label
                  className="group-focus-within:text-primary text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]"
                  htmlFor="phone"
                >
                  Phone
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
          </Fade>
          <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.4}>
            <div className="flex flex-col w-full group">
              <div className="flex items-end">
                <label
                  className="group-focus-within:text-primary text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem]"
                  htmlFor="newMessage"
                >
                  Message
                </label>
                {formik.touched.message && formik.errors.message ? (
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
                placeholder="Let's get in touch!"
                className="text-[0.8rem] mt-1 phone:text-[1rem] tablet:text-[1.2rem] p-3 rounded-xl min-h-[4rem] tablet:min-h-[10rem] max-h-[20rem] border-none outline-none text-black w-full"
              />
            </div>
          </Fade>
          <Fade triggerOnce={true} delay={100} duration={1500} fraction={0.4}>
            <button
              type="submit"
              className="active:scale-95 active:bg-opacity-100 transition-all p-2 rounded-lg mt-4 w-full bg-primary outline-none border-none text-black text-[0.8rem] phone:text-[1rem] tablet:text-[1.2rem] hover:bg-primary hover:bg-opacity-80"
            >
              Send
            </button>
          </Fade>
        </form>
      </div>
    </>
  );
};