import react from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
 import { Menu, X, ChevronDown } from "lucide-react";
 import logo from "../assets/Logo.png";
function Navbar() {

 const [isOpen, setIsOpen] = useState(false);
const handleScroll = () => {
  window.scrollBy({ top: 100, behavior: "smooth" });
};
  return (
    <>

    <nav className="w-full bg-white bg-opacity-80 text-black px-6 py-4 backdrop-blur-md shadow-sm border-b border-white/10 relative z-[9999]">

      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo"
            width={100}
            height={32}
            className="rounded-full "
          />
        
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-lg">
          <Link to="/" className="hover:text-pink-400 transition">Home</Link>
          <Link to="/About" className="hover:text-pink-400 transition">About</Link>
          <Link to="/Contact" className="hover:text-pink-400 transition">Contact</Link>

       

         
        </div>

        {/* Get Started */}
        <div className="hidden md:block">
          <button
            onClick={handleScroll}
            className="bg-[#1e1e1e] hover:bg-pink-400 transition px-5 py-2 rounded-md text-white font-medium"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-3 px-4">
          <button onClick={() => handleRedirect("/")}>Home</button>
          <button onClick={() => handleRedirect("/about")}>About</button>
          <button onClick={() => handleRedirect("/contact")}>Contact</button>
          <select
            defaultValue=""
            onChange={(e) => handleRedirect(e.target.value)}
            className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm text-center focus:outline-none"
          >
            <option disabled value="">Skills</option>
            <option value="/services/seo">SEO</option>
            <option value="/services/ppc">Pay Per Click</option>
            <option value="/services/social-media-marketing">Social Media Marketing</option>
            <option value="/services/web-development">Web Development</option>
            <option value="/services/shopify-development">Shopify Development</option>
            <option value="/services/blogging-content-writing">Blogging & Content</option>
            <option value="/services/cro">CRO</option>
          </select>
        </div>
      )}
    </nav>
    </>


  );
}

export default Navbar;