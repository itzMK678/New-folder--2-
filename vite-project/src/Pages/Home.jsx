import React from 'react'
import Lastbanner from '../Components/Lastbanner'

const Home = () => {
  return (
    <div>
      <section
  id="hero"
  className="w-full h-[90vh] bg-cover px-20 flex flex-col items-start justify-center
   bg-[url('./assets/bg.png')] bg-[position:top_25%_right_0] "
>
  <h4 className="text-white text-xl font-semibold pb-[15px]">Trade-in-offer</h4>

  <h2 className="text-white text-5xl font-bold">Super value deal</h2>

  <h1 className="text-pink-400 text-5xl font-bold mt-1.5 text-[#088178]">On all products</h1>

  <p className="text-md text-gray-500 mt-1">Save more with coupons & up to 70% off!</p>

  <button
    className="
      bg-white
      rounded-[8px] 
      text-pink-400
      border-0
      mt-1
      py-[14px]
      pr-[80px]
      pl-[65px]
      bg-no-repeat
      cursor-pointer
      font-bold
      
    "
  >
    Shop now
  </button>
</section>
<Lastbanner/>
</div>
  )
}

export default Home