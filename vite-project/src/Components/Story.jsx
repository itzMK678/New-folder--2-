import React from "react";
import StartedImage from "../assets/3pson.png";

const Story = () => {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-20">

      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:gap-16">

        {/* Image */}
       

        {/* Story */}
        <div className="w-full md:w-1/2">

         <h2 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
  How <span className="text-pink-400">We</span> Started
</h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
  It all started when three friends sat together in a small room with a
  simple idea — to provide high-quality automotive parts that people could
  truly trust.
</p>

<p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
  What began as a conversation between three friends soon became a shared
  vision. We wanted to create a place where customers could find reliable,
  high-quality automotive products without compromising on quality, value,
  or service.
</p>

<p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
  With passion, hard work, and a commitment to quality, that small idea
  gradually grew into a business. Today, we continue moving forward with
  the same vision that brought us together — providing quality products
  and building lasting relationships with our customers.
</p>

          <div className="mt-7 flex items-center gap-4">
            <div className="h-1 w-12 rounded-full bg-pink-400" />

            <p className="font-semibold text-gray-800">
              Built with passion. Driven by quality.
            </p>
          </div>

        </div>
 <div className="relative w-full overflow-hidden rounded-3xl md:w-1/2">

          <img
            src={StartedImage}
            alt="How we started"
            className="h-[350px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[420px]"
          />

          <div className="absolute inset-0 bg-blue-900/10" />

        </div>
      </div>

    </section>
  );
};

export default Story;