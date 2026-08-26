import React from "react";

import Product1 from "../assets/Me.png";
import Product2 from "../assets/Me.png";
import Product3 from "../assets/Me.png";
import Product4 from "../assets/Me.png";
import Product5 from "../assets/Me.png";
import Product6 from "../assets/Me.png";
import Product7 from "../assets/Me.png";

const OurProducts = () => {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-16">

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <h2 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Our Products
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
          Discover our collection of quality automotive parts and kits,
          designed to provide reliability, performance, and value for your
          vehicle.
        </p>
      </div>

      {/* Products Gallery */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-5 md:items-center">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4">

          {/* Image 1 */}
          <div className="group relative h-[190px] overflow-hidden rounded-[25px] md:h-[210px]">
            <img
              src={Product1}
              alt="Automotive Product"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
          </div>

          {/* Image 2 */}
          <div className="group relative h-[110px] overflow-hidden rounded-[25px]">
            <img
              src={Product2}
              alt="Automotive Product"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
          </div>

        </div>

        {/* SECOND COLUMN - TALL */}
        <div className="group relative h-[300px] overflow-hidden rounded-[28px] md:h-[390px]">
          <img
            src={Product3}
            alt="Automotive Product"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
        </div>

        {/* CENTER COLUMN */}
        <div className="group relative h-[250px] overflow-hidden rounded-[28px] md:h-[290px]">
          <img
            src={Product4}
            alt="Automotive Product"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Product Name */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-5 py-2 text-sm font-semibold text-white shadow-lg">
            Explore Products
          </div>

          <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
        </div>

        {/* FOURTH COLUMN - TALL */}
        <div className="group relative h-[300px] overflow-hidden rounded-[28px] md:h-[390px]">
          <img
            src={Product5}
            alt="Automotive Product"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4">

          {/* Image 6 */}
          <div className="group relative h-[190px] overflow-hidden rounded-[25px] md:h-[210px]">
            <img
              src={Product6}
              alt="Automotive Product"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
          </div>

          {/* Image 7 */}
          <div className="group relative h-[110px] overflow-hidden rounded-[25px]">
            <img
              src={Product7}
              alt="Automotive Product"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurProducts;