import React from "react";
import AboutCards from "./AboutCards";
import Me from "../assets/Me.png";
import Me2 from "../assets/Me2.png";
import Me3 from "../assets/Me3.png";
const Team = () => {
  const people = [
    {
      Name: "Rao Mamoon",
      role: "Founder",
      src: Me,
      Linkedin: "https://www.linkedin.com/in/mamoon-khaliq-2592ba336/",
      borderColor: "border-blue-200/50",
      bgColor: "bg-blue-100",
    },
    {
      Name: "Miss Jannat",
      role: "Founder",
      src: Me2,
      Linkedin: "https://www.linkedin.com/in/jannat-zaman-90441a340",
      borderColor: "border-pink-200/50",
      bgColor: "bg-pink-100",
    },
    {
      Name: "Mr Hassan",
      role: "Founder",
      src: Me3  ,
      Linkedin: "https://linkedin.com/",
      borderColor: "border-green-200/50",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="w-full">

       <h2 className=" text-center text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
  Meet <span className="text-pink-400">Our</span> Team
</h2>
  <p className="text-center text-sm font-semibold uppercase tracking-[3px] text-pink-300">
         Meet the 3 legends behind all this 
        </p>

      <div className="flex justify-center items-center flex-wrap gap-6">
        {people.map((person, index) => (
          <AboutCards key={index} data={person} />
        ))}
      </div>

    </div>
  );
};

export default Team;