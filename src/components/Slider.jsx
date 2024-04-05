import React, { useEffect, useState } from "react";
import Slider from "react-infinite-logo-slider";
import { useSelector } from "react-redux";
export const SliderComponent = () => {
  const [xvariation, setXvariation] = useState('120px');

  useEffect(() => {
      if (window.innerWidth <= 708) {
        setXvariation("70px");
      }
      if (window.innerWidth >= 708) {
        setXvariation("120px");
      }
    function handleResize() {
      if (window.innerWidth <= 708) {
        setXvariation("70px");
      }
      if (window.innerWidth >= 708) {
        setXvariation("120px");
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { theme } = useSelector((state) => state.theme);
  return (
    <div className="animate__animated animate__fadeIn animate__slower animate__delay-5s rounded-2xl border-accent flex items-center overflow-hidden border-r-8 border-l-8 max-w-[80%] w-[300px] tablet:max-w-[70%] tablet:w-[450px]">
      <Slider width={xvariation} duration={15}>
        <Slider.Slide>
          <img
            className="w-[50px] h-[50px] tablet:w-[auto] tablet:h-[60px] flex items-center justify-center"
            src="/icons/react.svg"
            alt="react"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            className="w-[45px] h-[auto] tablet:w-[55px] tablet:h-[auto] flex items-center justify-center"
            src="/icons/nodejs.svg"
            alt="nodejs"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            className="w-[50px] h-[50px] tablet:w-[auto] tablet:h-[60px] flex items-center justify-center"
            src="/icons/flutter.svg"
            alt="flutter"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            className="w-[50px] rounded-xl h-[50px] tablet:w-[auto] tablet:h-[60px] flex items-center justify-center"
            src={
              theme === "gasteacDark"
                ? "/icons/javascript.svg"
                : "/icons/javascriptBlack.svg"
            }
            alt="javascript"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            className="tablet:ml-4 w-[50px] h-[60px] tablet:w-[auto] tablet:h-[60px] flex items-center justify-center"
            src="/icons/mongodb.svg"
            alt="mongodb"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            className="w-[50px] h-[50px] tablet:w-[auto] tablet:h-[60px] flex items-center justify-center"
            src="/icons/html5.svg"
            alt="html5"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            className="w-[52px] h-[52px] tablet:w-[62px] tablet:h-[62px] flex items-center justify-center"
            src={
              theme === "gasteacDark"
                ? "/icons/github.svg"
                : "/icons/githubBlack.svg"
            }
            alt="github"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 85%)" }}
            className="w-[50px] h-[auto] tablet:w-[60px] tablet:h-[auto] mt-3 flex items-center justify-center"
            src="/icons/python.svg"
            alt="python"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            className="w-[50px] h-[50px] tablet:w-[auto] tablet:h-[60px] flex items-center justify-center"
            src="/icons/css.svg"
            alt="css"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            className="w-[50px] h-[50px] tablet:w-[auto] tablet:h-[60px] flex items-center justify-center"
            src={
              theme === "gasteacDark"
                ? "/icons/mysql.svg"
                : "/icons/mysqlBlack.svg"
            }
            alt="mysql"
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
};
