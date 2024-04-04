import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AboutMePage, ContactPage, HomePage, ProyectsPage } from "../pages";
import { useDispatch, useSelector } from "react-redux";
import { pageLoaded } from "../../store/slices/theme/themeSlice";
export const AppRouter = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
        dispatch(pageLoaded())
      }, 1000);
    };
    fakeDataFetch();
  }, []);
  return (
    <>
      {isLoading && (
        <div
          className={`flex justify-center items-center h-screen ${
            theme === "dark" ? "bg-[#1C232B]" : "bg-[#FFF349] "
          }`}
        >
          {theme === "dark" ? (
            <span className="loading loading-dots loading-lg scale-[2]  text-white"></span>
          ) : (
            <span className="loading loading-infinity loading-lg scale-[2] text-black"></span>
          )}
        </div>
      )}

      <Navbar/>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/proyects" element={<ProyectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {theme === "cyberpunk" ? (
        <h1 className="select-none 400:hidden opacity-50 flex text-2xl fixed bottom-3 right-5">
          CYBERPUNK
        </h1>
      ) : (
        <h1 className="select-none 400:hidden opacity-50 flex text-3xl fixed bottom-3 right-5">
          DARK THEME
        </h1>
      )}
    </>
  );
};
