import { Presentation } from "./Presentation";
import Spline from '@splinetool/react-spline';
import "animate.css";
import { Fade } from "react-awesome-reveal";
export const Home = ({ handleClickScroll, setActiveLink }) => {
  return (
    <>
      <div className="relative h-[100vh] justify-center  flex w-screen  items-center  tablet:h-[100vh] overflow-hidden">
        <Fade className='absolute w-full -right-2 h-full z-0'  triggerOnce={true} delay={2000}  duration={2000}>
          <Spline scene="https://prod.spline.design/1Np5iFnYpUkyE9pK/scene.splinecode" />
        </Fade>
          <div>
            <Presentation />
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
