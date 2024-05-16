import { LanguageSelector } from "./LanguageChanger";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';
import "animate.css";
import { useState} from "react";
// import Spline from '@splinetool/react-spline';
export const Presentation = ({ handleShowRobot, showRobot }) => {
  const { t } = useTranslation();
  const [key, setKey] = useState(0)

  return (
    <>
      <dialog id="languageChanged" className="modal">
        <div className="modal-box bg-primary">
          <p className="py-4 text-black">{t('modalLanguage')}</p>
          <div className="modal-action">
            <form method="dialog">
              <button onClick={() => setKey(currentKey => currentKey + 1)} className="btn">{t('close')}</button>
            </form>
          </div>
        </div>
      </dialog>
      <div key={key} className="flex  flex-col space-y-4 tablet:space-y-6 p-6 h-[100%] tablet:h-[100%] justify-center items-center ">
  
      <TypeAnimation
        sequence={["", 2200, `${t('presentation')}`]}
        wrapper="span"
        style={{ display: "inline-block" }}
        className="text-center text-[2rem] phone:text-[3rem] tablet:text-[4rem] animate__animated animate__fadeIn animate__slower animate__delay-0s "
        repeat={false}
      />
      <div>
        <TypeAnimation
          sequence={["", 3500, `${t('fullstackdeveloper')}`]}
          wrapper="span"
          speed={60}
          style={{ display: "inline-block" }}
          className="text-[1rem] phone:text-[1.6rem] tablet:text-[2.2rem] text-emerald-500 animate__animated animate__fadeIn animate__slower animate__delay-1s "
          cursor={false}
        />
        <TypeAnimation
          sequence={[" ", 150 ,"</>", 3000]}
          wrapper="span"
          speed={60}
          cursor={false}
          style={{ display: "inline-block" }}
          className="text-[1rem] phone:text-[1.6rem] tablet:text-[2.2rem] text-emerald-400 animate__animated animate__fadeIn animate__slower animate__delay-1s "
        />
      </div>

      <Fade triggerOnce={true} delay={4200} duration={1400}>
          <div className="flex gap-4">
            <a href="Acosta Gaston - Desarrollador Full Stack.pdf" target="_blank" role='button' className="z-50 bg-gray-800 hover:bg-emerald-900 px-2 py-1 rounded-xl">
              CV - ES
            </a>
            <a href="Acosta Gaston - FullStack Developer.pdf" target="_blank" role='button' className="z-50 bg-gray-800 hover:bg-emerald-900 px-2 py-1 rounded-xl">
              CV - EN
            </a>
          </div>
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
          <button className="z-50 hover:text-emerald-500" onClick={() => handleShowRobot()}>{t(!showRobot ? 'showRobot' : 'hideRobot')}</button>
         
        
        {/* <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" mt-3 py-3 px-5 text-[0.7rem] phone:text-[0.9rem] tablet:text-[1.1rem] cursor-pointer  z-10  border-none text-opacity-100 text-black hover:bg-emerald-500 hover:bg-opacity-40  hover:text-white bg-white bg-opacity-70   rounded-xl active:scale-95"
          >
            {t('resume')}
          </div>
          <ul
            tabIndex={0}
            className="p-2 mt-2 shadow menu dropdown-content w-full z-[1] text-[0.7rem] phone:text-[0.9rem] tablet:text-[1.1rem] cursor-pointer border-none bg-emerald-500 bg-opacity-40  text-center transition-all duration-200  rounded-xl active:scale-95"
          >
            <li>
              <a href="Acosta Gaston - FullStack Developer.pdf" target="_blank">
                 {t('english')}
              </a>
            </li>
            <li>
              <a
                href="Acosta Gaston - Desarrollador Full Stack.pdf"
                target="_blank"
              >
                {t('spanish')}
              </a>
            </li>
          </ul>
        </div> */}
       
      </Fade>
    </div>
     
    </>
  );
};
