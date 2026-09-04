import React from 'react'

import b17 from "../assets/b17.jpg";
import b10 from "../assets/b10.jpg";
import b7 from "../assets/b7.jpg";
import b4 from "../assets/b4.jpg";
import b18 from "../assets/b18.jpg";
const Lastbanner = () => {
  return (
    <>
   
      {/* HERO */}
  


      {/* SMALL BANNERS */}
      <section
        id="sm-banner"
        className="
          py-10
          px-20
          flex
          justify-between
          flex-wrap
        "
      >
        {/* Banner 1 */}
        <div
          className="
            flex
            flex-col
            justify-center
            items-center
            text-center
            w-full
            h-[50vh]
            bg-cover
            bg-no-repeat
            bg-center
            p-[30px]
          "
          style={{ backgroundImage: `url(${b17})` }}
        >
          <h4 className="text-white text-xl font-light">
            Crazy deal
          </h4>

          <h2 className="text-white text-[32px] font-bold">
            Buy 1 Get 1 Free
          </h2>

          <span className="text-white text-sm font-medium pb-[15px]">
            The best classic dress is on sale of course
          </span>

          <button
            className="
              text-white
              text-[13px]
              font-semibold
              py-[11px]
              px-[18px]
              bg-transparent
              rounded
              cursor-pointer
              border
              border-transparent
              transition
              duration-200
              hover:bg-[#088178]
              hover:border-[#088178]
            "
          >
            Learn more
          </button>
        </div>


        {/* Banner 2 */}
        <div
          className="
            flex
            flex-col
            justify-center
            items-center
            text-center
            w-full
            h-[50vh]
            bg-cover
            bg-no-repeat
            bg-center
            p-[30px]
          "
          style={{ backgroundImage: `url(${b10})` }}
        >
          <h4 className="text-white text-xl font-light">
            Crazy deal
          </h4>

          <h2 className="text-white text-[32px] font-bold">
            Upcoming Season
          </h2>

          <span className="text-white text-sm font-medium pb-[15px]">
            The best classic dress is on sale of course
          </span>

          <button
            className="
              text-white
              text-[13px]
              font-semibold
              py-[11px]
              px-[18px]
              bg-transparent
              rounded
              cursor-pointer
              border
              border-transparent
              transition
              duration-200
              hover:bg-[#088178]
              hover:border-[#088178]
            "
          >
            Collection
          </button>
        </div>
      </section>


      {/* BANNER 3 */}
      <section
        id="banner3"
        className="
          py-0
          px-20
          flex
          justify-around
          flex-wrap
        "
      >
        {/* Banner 3.1 */}
        <div
          className="
            flex
            flex-col
            justify-center
            items-start
            text-center
            w-[350px]
            h-[30vh]
            bg-cover
            bg-no-repeat
            bg-center
            p-5
            mb-5
          "
          style={{ backgroundImage: `url(${b7})` }}
        >
          <h2 className="text-[#e3e6f3] text-[35px] font-extrabold">
            Upcoming Season
          </h2>

          <h3 className="text-white">
            The best classic dress is on sale of course
          </h3>
        </div>


        {/* Banner 3.2 */}
        <div
          className="
            flex
            flex-col
            justify-center
            items-start
            text-center
            w-[350px]
            h-[30vh]
            bg-cover
            bg-no-repeat
            bg-center
            p-5
            mb-5
          "
          style={{ backgroundImage: `url(${b4})` }}
        >
          <h2 className="text-[#e3e6f3] text-[35px] font-extrabold">
            Upcoming Season
          </h2>

          <h3 className="text-white">
            The best classic dress is on sale of course
          </h3>
        </div>


        {/* Banner 3.3 */}
        <div
          className="
            flex
            flex-col
            justify-center
            items-start
            text-center
            w-[350px]
            h-[30vh]
            bg-cover
            bg-no-repeat
            bg-center
            p-5
            mb-5
          "
          style={{ backgroundImage: `url(${b18})` }}
        >
          <h2 className="text-[#e3e6f3] text-[35px] font-extrabold">
            Upcoming Season
          </h2>

          <h3 className="text-white">
            The best classic dress is on sale of course
          </h3>
        </div>
      </section>

    </>
  )
}

export default Lastbanner