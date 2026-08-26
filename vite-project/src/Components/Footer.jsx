import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-10 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold">
            MY <span className="text-pink-400">Fashion</span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
            MY Fashion is a modern lifestyle brand created for people who
            love style, beauty, and quality. We bring trendy products and
            everyday essentials together with elegance.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition duration-300 hover:-translate-y-1 hover:bg-pink-500"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition duration-300 hover:-translate-y-1 hover:bg-pink-500"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition duration-300 hover:-translate-y-1 hover:bg-pink-500"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition duration-300 hover:-translate-y-1 hover:bg-pink-500"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition duration-300 hover:-translate-y-1 hover:bg-pink-500"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a
                href="#"
                className="transition hover:text-pink-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-pink-400"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-pink-400"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-pink-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Our Products
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="transition hover:text-pink-400">
              Handbags
            </li>

            <li className="transition hover:text-pink-400">
              Cosmetics
            </li>

            <li className="transition hover:text-pink-400">
              Accessories
            </li>

            <li className="transition hover:text-pink-400">
              Beauty Products
            </li>

            <li className="transition hover:text-pink-400">
              Lifestyle Essentials
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Contact Us
          </h3>

          <div className="space-y-4 text-sm text-gray-400">

            <p>
              <span className="font-semibold text-white">
                Email:
              </span>
              <br />
              info@myfashion.com
            </p>

            <p>
              <span className="font-semibold text-white">
                Phone:
              </span>
              <br />
              +92 300 1234567
            </p>

            <p>
              <span className="font-semibold text-white">
                Location:
              </span>
              <br />
              Lahore, Pakistan
            </p>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-500 sm:px-10 md:flex-row">

          <p>
            © {new Date().getFullYear()} MY Fashion. All rights reserved.
          </p>

          <p>
            Designed by Mamoon Khaliq
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;