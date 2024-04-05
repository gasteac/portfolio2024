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
          className={` align-middle justify-center items-center${
            theme === "gasteacDark" ? "bg-[#1f2937]" : "bg-[#f3f4f6] "
          }`}
        >
          {theme === "gasteacDark" ? (
            <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] loading loading-infinity loading-lg scale-[3] text-white"></span>
          ) : (
            <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] loading loading-infinity loading-lg scale-[3] text-black"></span>
          )}
        </div>
      )}

      <Navbar />
      <HomePage />
      <AboutMePage />
      <ProyectsPage />
      <ContactPage />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/proyects" element={<ProyectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};
