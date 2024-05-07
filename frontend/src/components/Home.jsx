import { Presentation } from "./Presentation";

export const Home = () => {
  return (
    <>
      <div className="relative h-[100vh] justify-center  flex w-screen  items-center  tablet:h-[100vh]">
        <div>
          <Presentation />
        </div>
        <img
          src="./icons/wolfHero.svg"
          className=" drop-shadow-[0_35px_35px_white]	 absolute z-[-500] laptop:right-[10rem] w-[44rem] h-auto filter blur-[2px] animate__animated animate__fadeIn animate__slower animate__delay-1s"
          alt="wolficon"
        />
      </div>
    </>
  );
};
