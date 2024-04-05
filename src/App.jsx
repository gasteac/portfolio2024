import React, { useEffect, useRef } from "react";
import { Contact, Home, Navbar, Projects } from "./components";
import Loader from "./components/Loader";
import "animate.css";

const App = () => {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const handleScroll = (id) => {
    switch (id) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div ref={homeRef}>
        <Loader />
      </div>
      <Navbar handleScroll={handleScroll} />

      <Home />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default App;
