import { Presentation } from "./Presentation";
import Spline from '@splinetool/react-spline';
import "animate.css";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
export const Home = ({ handleClickScroll, setActiveLink }) => {
  const [showRobot, setShowRobot] = useState(false)
  const handleShowRobot =()=>{
    setShowRobot(!showRobot)
  }
  return (
    <>
      <div className="relative h-[100vh]  justify-center  flex w-screen  items-center  overflow-hidden ">
        {/* {showRobot &&  <Fade className={`absolute h-full w-full z-0 overflow-clip ${showRobot ? 'visible' : 'hidden'}`} triggerOnce={true}  duration={2000}>
          <Spline className="overflow-clip w-full" scene="https://prod.spline.design/1Np5iFnYpUkyE9pK/scene.splinecode" />
        </Fade>} */}
        <div>
          {/* <Presentation handleShowRobot={handleShowRobot} showRobot={showRobot} /> */}
          <Presentation />
        </div>
        <div className=" animate__animated animate__bounceInDown animate__delay-3s absolute bottom-28">

        
        <span onClick={() => {
          setActiveLink("about");
          handleClickScroll("about");
        }} className="cursor-pointer transition-all duration-200 hover:text-emerald-400 material-symbols-outlined  text-6xl ">
          expand_more
        </span>
       
        </div>
      </div>
    </>
  );
};
