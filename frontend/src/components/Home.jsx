import { Presentation } from "./Presentation";
import Spline from '@splinetool/react-spline';
import "animate.css";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

import { Fade } from "react-awesome-reveal";
export const Home = ({ handleClickScroll, setActiveLink }) => {
  const [showRobot, setShowRobot] = useState(true)
  const { t } = useTranslation();

  const handleShowRobot =()=>{
    setShowRobot(!showRobot)
  }
  return (
    <>
      <div className="relative h-[100vh] justify-center  flex w-screen  items-center  tablet:h-[100vh] overflow-hidden">
        <Fade className={`absolute w-full -right-2 h-full z-0 overflow-clip ${showRobot ? 'visible' : 'hidden'}`} triggerOnce={true}  duration={2000}>
          <Spline className="overflow-clip" scene="https://prod.spline.design/1Np5iFnYpUkyE9pK/scene.splinecode" />
        </Fade>
        <div>
          <Presentation handleShowRobot={handleShowRobot} showRobot={showRobot}/>
        </div>
        <span onClick={() => {
          setActiveLink("about");
          handleClickScroll("about");
        }} className="cursor-pointer transition-all duration-200 hover:text-emerald-400 material-symbols-outlined absolute text-6xl bottom-28">
          expand_more
        </span>
      </div>
    </>
  );
};
