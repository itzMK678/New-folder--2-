import React from "react";
import { Plus, Minus, Trash2 } from "lucide-react";

const Card = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="bg-white border border-pink-100 rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition duration-300">
      
      <div className="flex gap-4">
        
        {/* Product Image */}
        <div className="w-28 h-32 md:w-36 md:h-40 rounded-xl overflow-hidden bg-pink-50 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between">

          {/* Top */}
          <div className="flex justify-between gap-3">

            <div>
              <p className="text-xs uppercase tracking-wider text-pink-400 font-medium">
                {item.category}
              </p>

              <h3 className="text-base md:text-lg font-semibold text-gray-900 mt-1">
                {item.name}
              </h3>

              <p className="text-pink-500 font-bold mt-2">
                Rs. {item.price.toLocaleString()}
              </p>
            </div>

            {/* Remove */}
            <button
              onClick={() => onRemove(item.id)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition"
            >
              <Trash2 size={18} />
            </button>

          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between mt-4">

            {/* Quantity */}
            <div className="flex items-center border border-pink-200 rounded-full overflow-hidden">

              <button
                onClick={() => onDecrease(item.id)}
                className="w-9 h-9 flex items-center justify-center text-pink-500 hover:bg-pink-50 transition"
              >
                <Minus size={15} />
              </button>

              <span className="w-10 text-center text-sm font-semibold text-gray-700">
                {item.quantity}
              </span>

              <button
                onClick={() => onIncrease(item.id)}
                className="w-9 h-9 flex items-center justify-center text-pink-500 hover:bg-pink-50 transition"
              >
                <Plus size={15} />
              </button>

            </div>

            {/* Total */}
            <p className="font-bold text-gray-800">
              Rs.{" "}
              {(item.price * item.quantity).toLocaleString()}
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;