
import React from "react";
import StartedImage from "../assets/Me.png";

const HowWeStarted = () => {
  return (
    <section className="w-full px-5 py-16 sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-16">

        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="group relative overflow-hidden rounded-[35px] shadow-xl">
            <img
              src={StartedImage}
              alt="How we started"
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[420px]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-blue-900/10 transition duration-300 group-hover:bg-blue-900/0"></div>
          </div>
        </div>

        {/* Story */}
        <div className="w-full md:w-1/2">

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            OUR STORY
          </span>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            How We Started
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Our journey started with a simple idea — to make quality
            automotive parts easier to find and more accessible to
            customers.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
            What began as a small passion for automobiles gradually grew
            into a business built around quality products, honest service,
            and customer satisfaction. We wanted to create a place where
            customers could find reliable parts without compromising on
            quality or value.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
            Today, we continue to grow with the same values that we had
            when we started. Every product we offer and every customer we
            serve is part of our journey forward.
          </p>

          {/* Small Highlight */}
          <div className="mt-7 flex items-center gap-4">
            <div className="h-1 w-12 rounded-full bg-blue-600"></div>

            <p className="font-semibold text-gray-800">
              Built with passion. Driven by quality.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowWeStarted;

