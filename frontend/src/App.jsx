import React, { useEffect, useRef, useState } from "react";
import { Contact, Home, Navbar, Projects } from "./components";
import Loader from "./components/Loader";
import "animate.css";
import { About } from "./components/About";

const App = () => {
  //con esto volves al inicio cuando recargas la pagina sino se rompe todo
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  //este para actualizar el componente activo
  const [activeLink, setActiveLink] = useState("home");
  // console.log(activeLink);
  //creas la referencia a cada componente y dsp se los mandas como atributo
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    let scrollTimeout;
    //esto se va a activar siempre que gires la ruedita
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      //creas un timeout para que el navlink se vuelva active dsp de un ratito nomas o sino se activaba solo si pasabas por arriba y se rompia todo porque pensaba que se tenia que activar, le pones un ratito nomas 200ms y ya anda
      scrollTimeout = setTimeout(() => {
        //aca unis el desplazamiento vertical con el tamaño vertical de la ventana /2 para obtener aproximadamente la mitad, asi al desplazarte te paras en la mitad del componente
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        //creas las referencia a la posicion de cada componente
        const homePos = homeRef.current.offsetTop;
        const aboutPos = aboutRef.current.offsetTop;
        const projectsPos = projectsRef.current.offsetTop;
        const contactPos = contactRef.current.offsetTop;
        //esto se hace para determinar donde estas parado y volver active al navlink
        //fijate que comparas la posicion de home por ejemplo y donde esta tu ventana con otro componente
        //asi no importa el tamaño vertical del componente va a funcionar igual
        if (scrollPosition >= homePos && scrollPosition < aboutPos) {
          setActiveLink("home");
        } else if (
          scrollPosition >= aboutPos &&
          scrollPosition < projectsPos
        ) {
          setActiveLink("about");
        }
        else if (
          scrollPosition >= projectsPos &&
          scrollPosition < contactPos
        ) {
          setActiveLink("projects");
        } else if (scrollPosition >= contactPos) {
          setActiveLink("contact");
        }
      }, 100); //este es el tiempito necesario para que no se active por ejemplo proyecto si te moves a contacto y pasas por encima de el
    };
    //bueno y esto agregas los listeners al scroll nomas para q este useEffect se ejecute siempre que te muevas con la ruedita
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //segun el navlink que clickes te manda a ese componente de forma smooooothhhsxzzz
  const handleClickScroll = (id) => {
    switch (id) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
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
      {/* le pasas la funcion scroll y active a la nav para que desde ella actives aca la funcion pa moverte */}
      <Navbar
        handleClickScroll={handleClickScroll}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      {/* home esta solito porque su ref lo tiene loader */}
      <div ref={homeRef}>
        <Home handleClickScroll={handleClickScroll}
          setActiveLink={setActiveLink} />
      </div>
       <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects handleClickScroll={handleClickScroll} />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};
export default App;
