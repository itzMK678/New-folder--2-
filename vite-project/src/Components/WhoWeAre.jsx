import React from "react";
import AboutImage from "../assets/Siting.png";

const WhoWeAre = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="relative ">
            <img
              src={AboutImage}
              alt="Who We Are"
              className="w-full h-[400px] md:h-[450px] object-contain"
            />
           
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-gray-500 mb-3">
            Who We Are
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            More Than Just a Store,
            <span className="block text-pink-400">
              We're Your Trusted Choice.
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-5">
            We are a customer-focused e-commerce store dedicated to bringing
            high-quality products to people at prices they can trust. Our goal
            is to make online shopping simple, reliable, and enjoyable.
          </p>

          <p className="text-gray-600 leading-7 mb-8">
            From carefully selecting our products to delivering them to your
            doorstep, we focus on quality, value, and customer satisfaction at
            every step.
          </p>

          {/* Small highlights */}
          <div className="flex flex-wrap gap-8">
            <div className="text-2xl border-pink-400 border-2 p-3 rounded-[12px]">
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>

            <div className="text-2xl bg-pink-400  p-3 rounded-[12px]">
              <h3 className="text-2xl font-bold text-white">1000+</h3>
              <p className="text-gray-200 text-sm">Products Delivered</p>
            </div>

            <div className="text-2xl border-pink-400 border-2 p-3 rounded-[12px]">
              <h3 className="text-2xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-500 text-sm">Customer Focused</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;