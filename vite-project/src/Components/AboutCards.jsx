import React from "react";
import {Link} from "react-router-dom";
import { CircleUser } from "lucide-react";

const AboutCards = ({data}) => {
  return (
    <section className="flex  justify-center bg-white px-5 py-8">

      <div
        className={`
          relative
          h-[380px]
          w-[300px]
          overflow-hidden
          rounded-[35px]
          border
          ${data.borderColor}
    ${data.bgColor}
          p-6
          shadow-lg
        `}
      >

        {/* Title */}
        <h2 className="relative z-20 mt-28 pl-2 text-[22px] font-bold leading-tight">
        {data.Name}
        </h2>

        {/* Role */}
        <div className="relative z-20 mt-3 w-fit rounded-full bg-white px-6 py-2 text-sm font-medium shadow-sm">
          {data.role}
        </div>

        {/* Image */}
        <img
          src={data.src}
          alt="Mamoon Khaliq"
          className="absolute right-[-15px] top-[25px] z-10 h-[300px] w-[230px] object-cover object-top"
        />

        {/* Bottom */}
        <Link to ={data.Linkedin}>
        <div className="absolute bottom-2 left-2 right-2 z-20 flex h-[55px] items-center justify-between rounded-[30px] bg-black px-5">

          <p className="text-2xl font-bold text-white">
            Connect
          </p>

          <button
            type="button"
            className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
          >
            <CircleUser size={28} />
          </button>

        </div>
</Link>
      </div>

    </section>
  );
};

export default AboutCards;