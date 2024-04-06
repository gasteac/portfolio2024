import React, { useEffect, useRef, useState } from "react";
import { Contact, Home, Navbar, Projects } from "./components";
import Loader from "./components/Loader";
import "animate.css";

const App = () => {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  const [activeLink, setActiveLink] = useState("home");
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const homePos = homeRef.current.offsetTop;
        const projectsPos = projectsRef.current.offsetTop;
        const contactPos = contactRef.current.offsetTop;

        if (scrollPosition >= homePos && scrollPosition < projectsPos) {
          setActiveLink("home");
        } else if (
          scrollPosition >= projectsPos &&
          scrollPosition < contactPos
        ) {
          setActiveLink("projects");
        } else if (scrollPosition >= contactPos) {
          setActiveLink("contact");
        }
      }, 200); // Adjust this value to control the delay after scrolling stops
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <Navbar
        handleScroll={handleScroll}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
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
