import React from "react";
import Logo from "../assets/Logo.png";

import AboutCards from "../Components/AboutCards";
import Mission from "../Components/Mission";
import OurProducts from "../Components/OurProducts";
import Story from "../Components/Story";
import Brands from "../Components/Brands";
import WhoWeAre from "../Components/WhoWeAre";
import Team from "../Components/Team"
const About = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <section className="relative min-h-[250px] bg-pink-400 px-4 pb-20 pt-8 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            About Us
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 sm:text-lg">
            <span className="font-bold">MY Fashion</span> is a modern lifestyle
            brand created for people who love style, beauty, and quality. We
            offer a carefully selected collection of trendy handbags,
            cosmetics, accessories, and everyday essentials designed to add a
            touch of elegance to your lifestyle.
          </p>
        </div>

        {/* Logo */}
        <div className="absolute bottom-[-45px] left-1/2 flex h-[90px] w-[90px] -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
          <img
            src={Logo}
            alt="MY Fashion Logo"
            className="h-full w-full object-contain"
          />
        </div>
      </section>
<div><WhoWeAre/></div>
<div><Brands/></div>
<div><Story/></div>
<div><Team/></div>
<div><OurProducts/></div>
    </div>
  );
};

export default About;