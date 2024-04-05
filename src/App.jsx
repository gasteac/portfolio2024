import React, { useRef } from 'react'
import { Contact, Home, Navbar, Projects } from './components'
import Loader from './components/Loader'
import "animate.css";
  

const App = () => {
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
      <Loader />
      <Navbar handleScroll={handleScroll} />
      <div className="relative max-w-[1300px] mx-auto desktop:p-[1.5rem]">
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App