
import React from "react";

const Mission = () => {
  return (
    <section className="w-full  px-5 py-16 sm:px-8 md:px-12 lg:px-20">

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-3xl text-center">

        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Our Mission
        </h2>

        <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
          Our mission is to provide high-quality automotive parts and kits
          while delivering reliable service, competitive prices, and a
          trustworthy experience for every customer.
        </p>

      </div>

      {/* Cards */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 md:flex-row md:items-stretch">

        {/* Card 1 - Larger */}
        <div
          className="
            h-[280px] w-full
            rounded-3xl
            bg-blue-500
            p-7
            text-white
            shadow-lg
            transition-all duration-500 ease-in-out
            hover:scale-100
            md:h-[340px]
            md:w-[34%]
            hover:md:w-[34%]
          "
        >
          <h3 className="text-2xl font-bold">
            Quality
          </h3>

          <p className="mt-5 leading-7 text-blue-50">
            We are committed to providing reliable and high-quality
            automotive parts that meet the needs of our customers.
          </p>
        </div>

        {/* Card 2 - Smaller */}
        <div
          className="
            h-[280px] w-full
            rounded-3xl
            bg-blue-400
            p-7
            text-white
            shadow-lg
            transition-all duration-500 ease-in-out
            hover:md:h-[340px]
            hover:md:w-[34%]
            md:h-[310px]
            md:w-[31%]
          "
        >
          <h3 className="text-2xl font-bold">
            Trust
          </h3>

          <p className="mt-5 leading-7 text-blue-50">
            We believe in honest pricing, dependable products, and
            building long-lasting relationships with our customers.
          </p>
        </div>

        {/* Card 3 - Smaller */}
        <div
          className="
            h-[280px] w-full
            rounded-3xl
            bg-blue-300
            p-7
            text-gray-900
            shadow-lg
            transition-all duration-500 ease-in-out
            hover:md:h-[340px]
            hover:md:w-[34%]
            md:h-[295px]
            md:w-[31%]
          "
        >
          <h3 className="text-2xl font-bold">
            Customer Satisfaction
          </h3>

          <p className="mt-5 leading-7 text-gray-700">
            Our customers are at the heart of everything we do. We aim
            to make every experience simple, smooth, and satisfying.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Mission;

