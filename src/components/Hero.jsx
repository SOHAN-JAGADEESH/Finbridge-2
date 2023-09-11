import React from 'react';
import styles from "../style";
import { discount, robot } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row hero-section flex-col h-[calc(90vh)] lg:h-[calc(95vh)] ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-2`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[52px] 2xl:text-[72px] text-white leading-snug md:leading-normal lg:leading-relaxed">
            From <span className="text-gradient">Rupees </span>to 
            <span className="text-gradient"> Dollars </span> <br/>
            Your <span className="text-gradient"> Financial Compass</span>
            <br className="sm:block hidden" /> <span>in Australia</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Empowering India's bright students in Australia with the tools they need to thrive.
        </p>
        <Button styles={`mt-10`} />
      </div>

      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative overflow-hidden`}>
        <img src={robot} alt="billing" className="w-[90%] h-auto max-h-[60vh] lg:max-h-[70vh] relative z-[5]" />
      </div>
    </section>
  );
};

export default Hero;
