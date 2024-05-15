import { Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';
import { Suspense } from "react";
import { Tools } from "./Tools";
import Spline from '@splinetool/react-spline';
import "animate.css";

export const About = () => {
    const { t } = useTranslation();
    return (
        <>
                      
            <Suspense fallback={<div>Loading...</div>}>
                <div className="flex px-6 h-full items-center flex-col overflow-hidden ">
                    <div className="flex-col flex tablet:flex-col space-x-5 phone:space-x-0 items-center justify-center mb-5">
                        <div className="relative flex items-center py-5 text-[2rem] phone:text-[3rem] tablet:text-[3.7rem] tablet:pb-4 tablet:mt-[120px] mt-[60px]">
                            <div className="flex-none border-t-4  border-emerald-800 w-screen"></div>
                            <span className="flex-none mx-4">
                                <Fade triggerOnce={true} cascade fraction={0.01} damping={0.1}>
                                    {t('about')}
                                </Fade>
                            </span>
                            <div className="flex-none border-t-4 border-emerald-800 w-screen"></div>

                        </div>
                    </div>
                    
                    <div className="text-justify text-[1rem] phone:text-[1.4rem] tablet:text-[1.6rem] tablet:max-w-[70%] laptop:max-w-[65%] overflow-hidden">
                        <Fade triggerOnce={true} delay={200} duration={2500} fraction={0.2}>
                            <h1>
                                {t('hellomynameis')} <span className="text-emerald-600">Gastón Acosta</span>, {t('about1')}
                                <br />
                                <br />
                                {t('about2')}
                            </h1>

                        </Fade>
                        <Fade className="max-w-[700px]" triggerOnce={true} delay={200} duration={3500} fraction={0.2}>
                            <h1 className="mt-12 text-center text-emerald-500">{t('currentStack')}</h1>
                            <div className='absolute desktop:right-[342px]  z-50 opacity-80'>
                                <Spline className="scale-75 phone:scale-105 transition-all " scene="https://prod.spline.design/LNX4GdVNTKBqdTLu/scene.splinecode" />
                            </div>
                            <Tools />
                        </Fade>
                    </div>
                </div>
               
            </Suspense>
        </>
    );
};
