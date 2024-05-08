import { Fade } from "react-awesome-reveal";
export const About = () => {
    return (
        <>
            <div className="flex px-6 h-full items-center flex-col overflow-hidden ">
                <div className="flex-col flex tablet:flex-col space-x-5 phone:space-x-0 items-center justify-center mb-5">
                    <div className="relative flex items-center py-5 text-[2rem] phone:text-[3rem] tablet:text-[3.7rem] tablet:pb-4 tablet:mt-[120px] mt-[60px]">
                        <div className="flex-none border-t-4  border-emerald-800 w-screen"></div>
                        <span className="flex-none mx-4">
                            <Fade triggerOnce={true} cascade fraction={0.01} damping={0.1}>
                                About Me
                            </Fade>
                        </span>
                        <div className="flex-none border-t-4 border-emerald-800 w-screen"></div>

                    </div>
                </div>
                <div className="max-w-[70%] text-justify text-[1rem] phone:text-[1.4rem] tablet:text-[1.6rem]">
                    <Fade triggerOnce={true} fraction={0.01} >
                        <h1>
                            I'm an Advanced Information Systems Engineering student with a strong aspiration to become a leading Full Stack developer. Motivated by curiosity, I'm continuously exploring and practicing new technologies in my field.
                            <br />
                            <br />
                            My dedication to delivering innovative solutions fuels my passion for building extraordinary software. I actively seek out new learning opportunities, whether through online courses, documentation, tutorials or mentorship programs. By embracing a continuous learning mindset, I aim to develop the skills and expertise necessary to make meaningful contributions to any team or project.
                        </h1>

                    </Fade>
                    <div className="flex items-center justify-center mt-12 ">
                        <img className="w-[500px] h-auto" src="https://d.furaffinity.net/art/canis-ferox/1488278723/1412836498.canis-ferox_tea-gif.gif" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};
