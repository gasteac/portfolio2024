import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AboutMePage, ContactPage, HomePage, ProyectsPage } from "../pages";
export const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = localStorage.getItem("theme");
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    fakeDataFetch();
  }, []);
  return (
    <>
      {isLoading ? (
        <div
          className={`flex justify-center items-center h-screen ${
            theme === "dark" ? "bg-[#1C232B]" : "bg-[#FFF349]"
          }`}
        >
          <span className="loading loading-infinity loading-lg scale-[2]"></span>
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/proyects" element={<ProyectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </>
      )}
    </>
  );
};
