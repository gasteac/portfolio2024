import React, { useEffect, useState } from "react";
import Slider from "react-infinite-logo-slider";
import { Fade } from "react-awesome-reveal";
export const SliderComponent = () => {
  const [xvariation, setXvariation] = useState('120px');
  useEffect(() => {
      if (window.innerWidth <= 708) {
        setXvariation("50px");
      }
      if (window.innerWidth >= 708) {
        setXvariation("80px");
      }
    function handleResize() {
      if (window.innerWidth <= 708) {
        setXvariation("50px");
      }
      if (window.innerWidth >= 708) {
        setXvariation("80px");
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex items-center overflow-hidden max-w-[80%] w-[300px] tablet:max-w-[70%] tablet:w-[450px]">
      <Fade
        triggerOnce={true}
        delay={5500}
        duration={2000}
        className="border-accent rounded-2xl w-full border-r-8 border-l-8"
      >
        <Slider width={xvariation} duration={15}>
          <Slider.Slide>
            <img
              className="w-[30px] h-[30px] tablet:w-[auto] tablet:h-[40px] flex items-center justify-center"
              src="/icons/react.svg"
              alt="react"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              className="w-[30px] h-[30px] tablet:w-[auto] tablet:h-[40px] flex items-center justify-center"
              src="/icons/jest.svg"
              alt="jest"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              className="w-[25px] h-[auto] tablet:w-[35px] tablet:h-[auto] flex items-center justify-center"
              src="/icons/nodejs.svg"
              alt="nodejs"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              className="bg-white rounded-full p-1 w-[25px] h-[auto] tablet:w-[35px] tablet:h-[auto] flex items-center justify-center"
              src="/icons/expressjs.svg"
              alt="express"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              className="w-[30px] h-[30px] tablet:w-[auto] tablet:h-[40px] flex items-center justify-center"
              src="/icons/flutter.svg"
              alt="flutter"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              className="w-[30px] rounded-xl h-[50px] tablet:w-[auto] tablet:h-[40px] flex items-center justify-center"
              src="/icons/javascript.svg"
              alt="javascript"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              className="tablet:ml-2 w-[30px] h-[40px] tablet:w-[auto] tablet:h-[40px] flex items-center justify-center"
              src="/icons/mongodb.svg"
              alt="mongodb"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              className="w-[30px] h-[30px] tablet:w-[auto] tablet:h-[40px] flex items-center justify-center"
              src="/icons/html5.svg"
              alt="html5"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              className="w-[32px] h-[32px] tablet:w-[42px] tablet:h-[42px] mb-1"
              src="/icons/github.svg"
              alt="github"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 85%)" }}
              className="w-[30px] h-[auto] tablet:w-[40px] tablet:h-[auto] mt-1 flex items-center justify-center"
              src="/icons/python.svg"
              alt="python"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              className="w-[30px] h-[30px] tablet:w-[auto] tablet:h-[40px] flex items-center justify-center"
              src="/icons/css.svg"
              alt="css"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              className="w-[30px] h-[30px] tablet:w-[auto] tablet:h-[40px] flex items-center justify-center"
              src="/icons/mysql.svg"
              alt="mysql"
            />
          </Slider.Slide>
        </Slider>
      </Fade>
    </div>
  );
};
