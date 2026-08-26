import React from "react";

import Toyota from "../assets/Brand1.png";
import Honda from "../assets/Brand2.png";
import Suzuki from "../assets/Brand3.png";
import Nissan from "../assets/Brand4.png";
import Hyundai from "../assets/Brand5.png";
import Kia from "../assets/Brand6.png";

const Brands = () => {
  const brands = [
    { name: "Toyota", logo: Toyota },
    { name: "Honda", logo: Honda },
    { name: "Suzuki", logo: Suzuki },
    { name: "Nissan", logo: Nissan },
    { name: "Hyundai", logo: Hyundai },
    { name: "Kia", logo: Kia },
  ];

  return (
    <section className="w-full bg-white py-12">

      {/* Heading */}
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[3px] text-pink-300">
          Trusted Partners
        </p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
          Brands We Work With
        </h2>
      </div>

      {/* Full Width Black Strip */}
      <div
        className="
          flex
          w-full
          items-center
          justify-center
          gap-4
          overflow-x-auto
          bg-black
          px-5
          py-8
          sm:gap-6
          md:justify-between
          md:px-10
        "
      >
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="
              group
              flex
              h-20
              min-w-[120px]
              items-center
              justify-center          
              
              transition-all
              duration-300
              hover:-translate-y-1
              
              sm:min-w-[140px]
              md:min-w-[145px]
            "
          >
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="
                max-h-20
                max-w-[100px]
                object-contain
                grayscale
                transition-all
                duration-300
                group-hover:grayscale-0
              "
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Brands;