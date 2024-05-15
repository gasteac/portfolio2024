import { Presentation } from "./Presentation";
export const Home = ({ handleClickScroll, setActiveLink }) => {
  return (
    <>
        <div className="relative h-[100vh] justify-center  flex w-screen  items-center  tablet:h-[100vh]">
          <div>
            <Presentation />
          </div>
          {/* <img
            src="./icons/wolfHero.svg"
            className=" animate-change-color drop-shadow-[0_35px_35px_white]	 absolute z-[-500] laptop:right-[10rem] w-[44rem] h-auto  "
            alt="wolficon"
          /> */}
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
