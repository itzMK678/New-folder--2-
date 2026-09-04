import React from 'react'
import Lastbanner from '../Components/Lastbanner'
import products from "../assets/Data";
import ProductCard from '../Components/ProductCard';
import Card from '../Components/Card';
import banner from "../assets/banner.png";
const Home = () => {
  return (
    <div>
      <section
  id="hero"
  className="w-full h-[70vh] bg-cover px-20 flex flex-col items-start justify-center
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
<section>
  <div className="mb-8 text-center">
    <p className="mt-6 text-5xl font-bold uppercase tracking-widest text-pink-500">
      Our Collection
    </p>

    <h2 className="mt-2 text-3xl font-bold text-gray-800">
      Featured Products
    </h2>

    <p className="mt-2 text-gray-500">
      Discover something beautiful for every style.
    </p>
  </div>

  <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    
    {products.map((product, index) => (
      <React.Fragment key={product.id}>
        
        {/* Product Card */}
        <ProductCard product={product} />

        {/* Banner after every 8 products */}
        {(index + 1) % 8 === 0 && (
          <div className="col-span-1 my-4 w-full overflow-hidden  sm:col-span-2 md:col-span-3 lg:col-span-4">
            <img
              src={banner}
              alt="Special Offer"
              className="h-[200px] w-full object-contain"
            />
          </div>
        )}

      </React.Fragment>
    ))}

  </div>
</section>
<Lastbanner/>
</div>
  )
}

export default Home