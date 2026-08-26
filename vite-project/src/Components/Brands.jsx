
import React from "react";

import Toyota from "../assets/Me.png";
import Honda from "../assets/Me.png";
import Suzuki from "../assets/Me.png";
import Nissan from "../assets/Me.png";
import Hyundai from "../assets/Me.png";
import Kia from "../assets/Me.png";

const Brands = () => {
  const brands = [
    {
      name: "Toyota",
      logo: Toyota,
    },
    {
      name: "Honda",
      logo: Honda,
    },
    {
      name: "Suzuki",
      logo: Suzuki,
    },
    {
      name: "Nissan",
      logo: Nissan,
    },
    {
      name: "Hyundai",
      logo: Hyundai,
    },
    {
      name: "Kia",
      logo: Kia,
    },
  ];

  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 md:px-12 lg:px-20">

      {/* Heading */}
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-600">
          Trusted Partners
        </p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
          Brands We Work With
        </h2>
      </div>

      {/* Brand Strip */}
      <div
        className="
          mx-auto flex max-w-6xl
          flex-wrap items-center justify-center
          gap-5 rounded-3xl
          border border-gray-100
          bg-gray-50
          px-5 py-8
          shadow-sm
          sm:gap-8
          md:justify-between
          md:px-10
        "
      >
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="
              group flex h-20
              w-[120px]
              items-center justify-center
              rounded-2xl
              bg-white
              px-4
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-md
              sm:w-[140px]
              md:w-[145px]
            "
          >
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="
                max-h-12
                max-w-[100px]
                object-contain
                grayscale
                opacity-60
                transition-all duration-300
                group-hover:grayscale-0
                group-hover:opacity-100
              "
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Brands;

