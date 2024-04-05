import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/slices/theme/themeSlice";
export const Navbar = ({ handleScroll }) => {
  const dispatch = useDispatch();
  //con el estado de redux y localhost el manejo el cambio de tema
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "gasteacDark"
  );
  const handleToggle = (e) => {
    dispatch(changeTheme());
    if (e.target.checked) {
      setTheme("gasteacLight");
    } else {
      setTheme("gasteacDark");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  //esto es para abrir el menu lateral cuando la pantalla es de tablet para abajo
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  //se resetea la navbar lateral si crece la pantalla
  const handleReset = () => {
    setIsChecked(false);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 708) {
        handleReset();
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="p-6 w-full fixed top-0 z-20 tablet:bg-[rgba(0,0,0,0,0.5)] tablet:backdrop-blur-[50px]">
        <div className="flex justify-end items-center text-xl h-8">
          <input
            onChange={handleCheckboxChange}
            checked={isChecked}
            type="checkbox"
            id="sidebar-active"
            className="hidden"
          />
          <label
            htmlFor="sidebar-active"
            className="menu-icon z-20 block relative w-[25px] h-full cursor-pointer tablet:hidden"
          >
            <span className="absolute top-[55%] -mt-[0.2em] w-full h-[0.2em] rounded-[1px] bg-accent after:bg-accent before:bg-accent"></span>
          </label>
          <label
            id="overlay"
            onClick={() => handleReset()}
            className="tablet:hidden z-10"
          ></label>
          <div
            className="navGlass:bg-primary navGlass:glass links-container transition-right -right-[100%] flex flex-col items-center space-y-14 h-screen tablet:max-w-[100%] w-[40%] min-w-[105px] fixed top-0 z-10 shadow-2xl tablet:space-y-0
          tablet:mt-0 tablet:shadow-none tablet:w-[100%] tablet:flex-row tablet:space-x-10 tablet:static"
          >
            <div className="tablet:mr-auto flex items-center justify-center">
              <a
                className={` ${
                  isChecked ? "opacity-100" : "opacity-0"
                } socials tablet:block hidden font-semibold  nav-link  tablet:opacity-100 tablet:transition-none`}
                to="/"
              >
                <img
                  className="w-12 mr-3"
                  src={
                    theme === "gasteacDark"
                      ? "/icons/GABlack.svg"
                      : "/icons/GA.svg"
                  }
                  alt="wolf icon"
                />
              </a>
              <label className="swap-rotate hidden tablet:swap">
                <input
                  type="checkbox"
                  className="theme-controller"
                  onChange={handleToggle}
                  checked={theme === "gasteacDark" ? false : true}
                />

                {/* sun icon */}
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            <a
              className={` ${
                isChecked ? "opacity-100" : "opacity-0"
              } navlinks duration-[1000ms] cursor-pointer`}
              onClick={() => handleScroll("home")}
            >
              Home
            </a>

            <a
              className={` ${
                isChecked ? "opacity-100" : "opacity-0"
              } navlinks duration-[1000ms] cursor-pointer`}
              onClick={() => handleScroll("projects")}
            >
              Projects
            </a>
            <a
              className={` ${
                isChecked ? "opacity-100" : "opacity-0"
              } navlinks duration-[1000ms] cursor-pointer`}
              onClick={() => handleScroll("contact")}
            >
              Contact
            </a>
            <div className="navGlass:block  navGlass:opacity-80 tablet:flex items-center justify-center space-x-2">
              <a
                href="https://github.com/gasteac"
                target="_blank"
                className="socials hover:drop-shadow-xl"
              >
                <img
                  width={"50px"}
                  className={`${
                    theme === "gasteacDark"
                      ? "bg-black border-black"
                      : "bg-white border-white"
                  } rounded-[100%] border-4 opacity-70 hover:opacity-100`}
                  src={
                    theme === "gasteacDark"
                      ? "/icons/github.svg"
                      : "/icons/githubBlack.svg"
                  }
                  alt="github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/gasteac/"
                target="_blank"
                className="socials hover:drop-shadow-xl "
              >
                <img
                  width={"50px"}
                  src={
                    theme === "gasteacDark"
                      ? "/icons/linkedinBlack.svg"
                      : "/icons/linkedin.svg"
                  }
                  alt="linkedin"
                  className={`${
                    theme === "gasteacDark"
                      ? "bg-white border-black"
                      : "bg-black border-white"
                  } rounded-[100%] border-4 opacity-70 hover:opacity-100`}
                />
              </a>
            </div>

            <label className="swap swap-rotate tablet:hidden">
              <input
                type="checkbox"
                className="theme-controller"
                onChange={handleToggle}
                checked={theme === "gasteacDark" ? false : true}
              />

              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};
