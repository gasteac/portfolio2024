import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageLoaded } from "../../store/slices/theme/themeSlice";
const Loader = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.classList.remove("no-scroll");
      }, 1000);
    };
    fakeDataFetch();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      dispatch(pageLoaded());
    }, 5000);
  }, []);
  return (
    <>
      {isLoading && (
        <div
          className={`align-middle justify-center items-center h-full w-full${
            theme === "gasteacDark" ? "bg-[#1f2937]" : "bg-[#f3f4f6] "
          }`}
        >
          {theme === "gasteacLight" ? (
            <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] loading loading-infinity loading-lg scale-[3] text-black"></span>
          ) : (
            <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] loading loading-infinity loading-lg scale-[3] text-white"></span>
          )}
        </div>
      )}
    </>
  );
};

export default Loader;
