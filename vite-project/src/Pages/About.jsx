import React from "react";
import Logo from "../assets/logo.png";
import AboutCards from "../Components/AboutCards";
import Mission from "../Components/Mission";
import OurProducts from "../Components/OurProducts";
import Story from "../Components/Story";
import Brands from "../Components/Brands";
const About = () => {
  return (
    
  <div className="bg-gradient-to-b from-white  to-pink-300">
      <div className="relative h-[170px] text-white bg-pink-300 text-center p-4">
        <h1 className="text-4xl font-extrabold">
          About Us
        </h1>

        <p className="mt-3 text-[18px] pb-[15px]">
          <span className="font-bold">MY Fashion</span> is a modern lifestyle
          brand created for people who love style, beauty, and quality. We offer
          a carefully selected collection of trendy handbags, cosmetics,
          accessories, and everyday essentials designed to add a touch of
          elegance to your lifestyle.
        </p>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 mt-4 flex rounded-full h-[90px] w-[90px] items-center justify-center mx-auto bg-white overflow-hidden">
          <img
            src={Logo}
            alt="MY Fashion Logo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <AboutCards/>
      <Mission/>
      <OurProducts/>
      <Story/>
      <Brands/>
    </div>
  
  );
};

export default About;