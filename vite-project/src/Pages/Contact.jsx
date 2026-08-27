import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-[#f45bb0] text-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-5">
            Get In <span className="text-white">Touch</span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8">
            Have a question, need help, or want to know more about our
            products? We would love to hear from you.
          </p>
        </div>
      </section>


      {/* Contact Information + Form */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2">

          {/* Contact Information */}
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#f45bb0]">
              CONTACT US
            </p>

            <h2 className="mb-6 text-4xl font-extrabold text-[#111827]">
              We'd Love To <span className="text-[#f45bb0]">Hear From You.</span>
            </h2>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              Whether you have a question about our products, need help with
              your order, or simply want to say hello, our team is here to
              help.
            </p>


            {/* Address */}
            <div className="mb-5 flex items-start gap-4 rounded-2xl border border-pink-100 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f45bb0] text-xl">
                📍
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#111827]">
                  Visit Us
                </h3>

                <p className="mt-1 text-gray-600">
                  Bakhsh Arcade, Civil Hospital Road,
                  Bahawalpur, Pakistan
                </p>
              </div>
            </div>


            {/* Phone */}
            <div className="mb-5 flex items-start gap-4 rounded-2xl border border-pink-100 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f45bb0] text-xl">
                📞
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#111827]">
                  Call Us
                </h3>

                <p className="mt-1 text-gray-600">
                  +92 3322445523
                </p>
              </div>
            </div>


            {/* Email */}
            <div className="flex items-start gap-4 rounded-2xl border border-pink-100 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f45bb0] text-xl">
                ✉️
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#111827]">
                  Email Us
                </h3>

                <p className="mt-1 text-gray-600">
                  info@myfashion.com
                </p>
              </div>
            </div>

          </div>


          {/* Contact Form */}
          <div className="rounded-3xl bg-gray-50 p-8 shadow-lg">

            <h2 className="mb-2 text-3xl font-extrabold text-[#111827]">
              Send Us A <span className="text-[#f45bb0]">Message</span>
            </h2>

            <p className="mb-7 text-gray-600">
              Fill out the form below and we'll get back to you soon.
            </p>


            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block font-semibold text-[#111827]">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#f45bb0] focus:ring-2 focus:ring-pink-100"
                />
              </div>


              {/* Email */}
              <div>
                <label className="mb-2 block font-semibold text-[#111827]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#f45bb0] focus:ring-2 focus:ring-pink-100"
                />
              </div>


              {/* Subject */}
              <div>
                <label className="mb-2 block font-semibold text-[#111827]">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#f45bb0] focus:ring-2 focus:ring-pink-100"
                />
              </div>


              {/* Message */}
              <div>
                <label className="mb-2 block font-semibold text-[#111827]">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#f45bb0] focus:ring-2 focus:ring-pink-100"
                ></textarea>
              </div>


              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#f45bb0] px-6 py-3 font-bold text-white transition hover:bg-pink-600"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* Bottom Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#f45bb0]">
            MY FASHION
          </p>

          <h2 className="text-4xl font-extrabold text-[#111827]">
            Your Style, <span className="text-[#f45bb0]">Our Passion.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Thank you for choosing MY Fashion. We are always happy to connect
            with our customers and help you find something you love.
          </p>

        </div>
      </section>

    </div>
  );
};

export default Contact;