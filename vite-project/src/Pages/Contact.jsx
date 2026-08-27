import React from "react";
import Logo from "../assets/logo.png";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative min-h-[250px] bg-pink-400 px-4 pb-20 pt-8 text-center text-white">
        <div className="mx-auto max-w-5xl">

          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 sm:text-lg">
            Have a question or need help? We are always here to listen.
            Get in touch with <span className="font-bold">MY Fashion</span>
            and we will be happy to assist you.
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


      {/* Contact Section */}
      <section className="w-full px-6 py-20 md:px-12 lg:px-20">

        <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row">


          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-gray-500">
              Get In Touch
            </p>

            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              We'd Love To
              <span className="block text-pink-400">
                Hear From You.
              </span>
            </h2>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              Whether you have a question about our products, need help with
              your order, or simply want to know more about MY Fashion,
              feel free to contact us.
            </p>


            {/* Address */}
            <div className="mb-5 flex items-start gap-4 rounded-[12px] border-2 border-pink-400 p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-400 text-xl">
                📍
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Visit Us
                </h3>

                <p className="mt-1 leading-7 text-gray-500">
                  Bakhsh Arcade, Civil Hospital Road,
                  Bahawalpur, Pakistan
                </p>
              </div>

            </div>


            {/* Phone */}
            <div className="mb-5 flex items-start gap-4 rounded-[12px] bg-pink-400 p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl">
                📞
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Call Us
                </h3>

                <p className="mt-1 leading-7 text-pink-100">
                  +92 00112233456
                </p>
              </div>

            </div>


            {/* Email */}
            <div className="flex items-start gap-4 rounded-[12px] border-2 border-pink-400 p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-400 text-xl">
                ✉️
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Email Us
                </h3>

                <p className="mt-1 leading-7 text-gray-500">
                  info@myfashion.com
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE - FORM */}
          <div className="w-full md:w-1/2">

            <div className="rounded-[12px] bg-gray-50 p-6 md:p-8">

              <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-gray-500">
                Send A Message
              </p>

              <h2 className="mb-8 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Let's Talk
                <span className="text-pink-400">.</span>
              </h2>


              <form className="space-y-5">

                {/* Name */}
                <div>
                  <label className="mb-2 block font-semibold text-gray-900">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-[12px] border-2 border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-pink-400"
                  />
                </div>


                {/* Email */}
                <div>
                  <label className="mb-2 block font-semibold text-gray-900">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-[12px] border-2 border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-pink-400"
                  />
                </div>


                {/* Subject */}
                <div>
                  <label className="mb-2 block font-semibold text-gray-900">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full rounded-[12px] border-2 border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-pink-400"
                  />
                </div>


                {/* Message */}
                <div>
                  <label className="mb-2 block font-semibold text-gray-900">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-[12px] border-2 border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-pink-400"
                  ></textarea>
                </div>


                {/* Button */}
                <button
                  type="submit"
                  className="w-full rounded-[12px] bg-pink-400 px-6 py-3 font-bold text-white transition hover:bg-pink-500"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* Bottom Section */}
      <section className="w-full bg-white px-6 pb-20 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl rounded-[12px] bg-pink-400 px-6 py-12 text-center">

          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Your Style,
            <span className="block">
              Our Passion.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-pink-100">
            Thank you for choosing MY Fashion. We are always happy to
            connect with our customers and help you find something you love.
          </p>

        </div>

      </section>

    </div>
  );
};

export default Contact;