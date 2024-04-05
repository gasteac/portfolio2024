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
    <Slider
      className="slider w-[60px] tablet:w-[100px]"
      width={xvariation}
      duration={10}
      pauseOnHover={true}
    >
      <Slider.Slide>
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          <img
            className="w-[50px] h-[50px] tablet:w-[80px] tablet:h-[80px] flex items-center justify-center"
            src="/icons/react.svg"
            alt="react"
          />
        </a>
      </Slider.Slide>
      <Slider.Slide>
        <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">
          <img
            className="w-[45px] h-[auto] tablet:w-[75px] tablet:h-[auto] flex items-center justify-center"
            src="/icons/nodejs.svg"
            alt="nodejs"
          />
        </a>
      </Slider.Slide>
      <Slider.Slide>
        <a href="https://flutter.dev/" target="_blank" rel="noreferrer">
          <img
            className="w-[50px] h-[50px] tablet:w-[80px] tablet:h-[80px] flex items-center justify-center"
            src="/icons/flutter.svg"
            alt="flutter"
          />
        </a>
      </Slider.Slide>
      <Slider.Slide>
        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-[50px] rounded-xl h-[50px] tablet:w-[80px] tablet:h-[80px] flex items-center justify-center"
            src={
              theme === "gasteacDark"
                ? "/icons/javascript.svg"
                : "/icons/javascriptBlack.svg"
            }
            alt="javascript"
          />
        </a>
      </Slider.Slide>
      <Slider.Slide>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <img
            className="w-[50px] h-[60px] tablet:w-[80px] tablet:h-[80px] flex items-center justify-center"
            src="/icons/mongodb.svg"
            alt="mongodb"
          />
        </a>
      </Slider.Slide>
      <Slider.Slide>
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-[50px] h-[50px] tablet:w-[80px] tablet:h-[80px] flex items-center justify-center"
            src="/icons/html5.svg"
            alt="html5"
          />
        </a>
      </Slider.Slide>
      <Slider.Slide>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img
            className="w-[52px] h-[52px] tablet:w-[82px] tablet:h-[82px] flex items-center justify-center"
            src={
              theme === "gasteacDark"
                ? "/icons/github.svg"
                : "/icons/githubBlack.svg"
            }
            alt="github"
          />
        </a>
      </Slider.Slide>
      <Slider.Slide>
        <a
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 85%)" }}
          href="https://www.python.org/community/logos/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-[50px] shadow-2xl h-[auto] tablet:w-[80px] tablet:h-[auto] mt-5 flex items-center justify-center"
            src="/icons/python.svg"
            alt="python"
          />
        </a>
      </Slider.Slide>
      <Slider.Slide>
        <a
          href="https://developer.mozilla.org/es/docs/Web/CSS"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-[50px] h-[50px] tablet:w-[80px] tablet:h-[80px] flex items-center justify-center"
            src="/icons/css.svg"
            alt="css"
          />
        </a>
      </Slider.Slide>
      <Slider.Slide>
        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
          <img
            className="w-[50px] h-[50px] tablet:w-[80px] tablet:h-[80px] flex items-center justify-center"
            src={
              theme === "gasteacDark"
                ? "/icons/mysql.svg"
                : "/icons/mysqlBlack.svg"
            }
            alt="mysql"
          />
        </a>
      </Slider.Slide>
    </Slider>
  );
};
