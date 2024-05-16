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
        {showRobot ? <Fade className='absolute w-full -right-2 h-full z-0 overflow-clip' triggerOnce={true}  duration={2000}>
          <Spline className="overflow-clip" scene="https://prod.spline.design/1Np5iFnYpUkyE9pK/scene.splinecode" />
        </Fade> :
           <div className='absolute laptop:right-[162px] z-0 opacity-80'>
          <Spline className="scale-75 phone:scale-105 transition-all " scene="https://prod.spline.design/aZZ5kX7gJc2MkRAO/scene.splinecode" />
      </div>}
       
        <div>
          <Presentation handleShowRobot={handleShowRobot} showRobot={showRobot}/>
        </div>
        <span onClick={() => {
          setActiveLink("about");
          handleClickScroll("about");
        }} className="cursor-pointer transition-all duration-200 hover:text-emerald-400 material-symbols-outlined absolute text-6xl bottom-14">
          expand_more
        </span>
      </div>
    </>
  );
};
