import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from "./LanguageChanger";
import { Suspense } from "react";
import "animate.css";
export const Navbar = ({ handleClickScroll, activeLink, setActiveLink }) => {
  const { t } = useTranslation();
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
      <Suspense fallback={<div>Loading...</div>}>
      <a
        className="socials fixed z-[60000] tablet:hidden top-[22px] left-3 cursor-pointer"
        onClick={() => {
          setActiveLink("home");
          handleClickScroll("home");
        }}
      >
        <img
          className="w-8 mr-3 hover:scale-95 active:scale-100 transition-all duration-100"
          src="/icons/GA.svg"
          alt="gasteacIcon"
        />
      </a>
        <nav className="animate__animated animate__fadeInDown animate__delay-1s animate__slowest p-6 w-screen fixed top-0 z-50 tablet:bg-[rgb(20,50,57,0.05)] bg-[linear-gradient(320deg,_#0a0a0a40_0%,_#0f0f0f40_47%,_#1a1a1a40_100%)] tablet:backdrop-blur-[50px]">
        <div className="flex justify-end items-center text-xl h-[3vh]">
          <input
            onChange={handleCheckboxChange}
            checked={isChecked}
            type="checkbox"
            id="sidebar-active"
            className="hidden"
          />
          <label
            htmlFor="sidebar-active"
            className="menu-icon z-30 block relative w-[25px] h-full cursor-pointer tablet:hidden"
          >
            <span className="absolute top-[55%] -mt-[0.2em] w-full h-[0.2em] rounded-[1px] bg-accent after:bg-accent before:bg-accent"></span>
          </label>
          <label
            id="overlay"
            onClick={() => handleReset()}
            className="tablet:hidden z-10"
          ></label>

          <div
            className="navGlass:backdrop-blur-[50px] navGlass:shadow-2xl links-container transition-right -right-[100%] flex flex-col items-center space-y-16 navGlass:h-screen tablet:max-w-[100%] min-w-[115px] max-w-[250px] w-[70vw] fixed top-0 z-10 shadow-2xl tablet:space-y-0
          tablet:mt-0 tablet:shadow-none tablet:w-[100%] tablet:flex-row tablet:space-x-10 tablet:static"
          >
            <div className="tablet:mr-auto flex items-center justify-center">
              <a
                className="socials tablet:block hidden font-semibold  cursor-pointer"
                onClick={() => {
                  setActiveLink("home");
                  handleClickScroll("home");
                }}
              >
                <img
                  className="w-14 mr-3 hover:scale-95 active:scale-100 transition-all duration-100"
                  src="/icons/GA.svg"
                  alt="gasteacIcon"
                />
              </a>

            </div>

            <a
              className={`cursor-pointer ${activeLink === "home" ? "text-primary activeLink" : "text-white"
                }`}
              // cuando haces clic en un link solo le avisas a app.jsx que ejecute su funcion handleScroll con determinado ref y que actualice el estado del link activo
              onClick={() => {
                setActiveLink("home");
                handleClickScroll("home");
              }}
            >
              {t('home')}
            </a>


            <a
              className={`cursor-pointer text-nowrap ${activeLink === "about" ? "text-primary activeLink" : "text-white"
                }`}
              // cuando haces clic en un link solo le avisas a app.jsx que ejecute su funcion handleScroll con determinado ref y que actualice el estado del link activo
              onClick={() => {
                setActiveLink("about");
                handleClickScroll("about");
              }}
            >
              {t('about')}
            </a>


            <a
              className={`cursor-pointer ${activeLink === "projects"
                  ? "text-primary activeLink"
                  : "text-white"
                }`}
              // cuando haces clic en un link solo le avisas a app.jsx que ejecute su funcion handleScroll con determinado ref y que actualice el estado del link activo

              onClick={() => {
                setActiveLink("projects");
                handleClickScroll("projects");
              }}
            >
              {t('projects')}
            </a>
            <a
              className={`cursor-pointer ${activeLink === "contact"
                  ? "text-primary activeLink"
                  : "text-white"
                }`}
              // cuando haces clic en un link solo le avisas a app.jsx que ejecute su funcion handleScroll con determinado ref y que actualice el estado del link activo

              onClick={() => {
                setActiveLink("contact");
                handleClickScroll("contact");
              }}
            >
              {t('contact')}
            </a>
            <div className="navGlass:flex tablet:flex tablet:space-x-4 items-center justify-center space-x-2">
              <a
                href="https://github.com/gasteac"
                target="_blank"
                className="socials"
              >
                <img
                  style={{ clipPath: "circle(47% at 50% 50%)" }}
                  width={"40px"}
                  className="bg-black hover:bg-secondary rounded-[100%] min-w-[30px]"
                  src="/icons/github.svg"
                  alt="github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/gasteac/"
                target="_blank"
                className="socials"
              >
                <img
                  style={{ clipPath: "circle(38% at 50% 50%)" }}
                  width={"51px"}
                  src="/icons/linkedin.svg"
                  alt="linkedin"
                  className="bg-black hover:bg-secondary min-w-[40px]"
                />
              </a>
            </div>
            <div className="tablet:hidden">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>
      </Suspense>
    </>
  );
};
