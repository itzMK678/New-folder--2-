import React from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative w-full max-w-[280px] overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image Section */}
      <div className="relative h-[300px] overflow-hidden bg-pink-50">
        
        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white">
            -{product.discount}%
          </span>
        )}

        {/* Wishlist */}
        <button className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-pink-500 shadow-md transition hover:bg-pink-500 hover:text-white">
          <Heart size={18} />
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Quick Add */}
        <button className="absolute bottom-3 left-1/2 flex w-[90%] -translate-x-1/2 translate-y-14 items-center justify-center gap-2 rounded-xl bg-white py-3 font-medium text-pink-600 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-pink-500 hover:text-white">
          <ShoppingBag size={18} />
          Add to Cart
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        
        {/* Category */}
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-pink-400">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="truncate text-lg font-semibold text-gray-800">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <div className="flex text-pink-400">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={15}
                fill={index < Math.round(product.rating) ? "currentColor" : "none"}
              />
            ))}
          </div>

          <span className="ml-1 text-xs text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xl font-bold text-pink-600">
            Rs. {product.price}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              Rs. {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;