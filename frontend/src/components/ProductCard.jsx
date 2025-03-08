import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { BsFillStarFill, BsCart4 } from "react-icons/bs";

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-ypof p-4 rounded-xl shadow-lg border border-gray-700 text-white">
      {/* Product Image & Favorite Button */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover border border-gray-300 rounded-lg"
        />
        <button
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? (
            <FaHeart className="text-red-500 text-lg" />
          ) : (
            <FaRegHeart className="text-gray-500 text-lg" />
          )}
        </button>
      </div>

      {/* Product Details */}
      <div className="mt-3 text-center">
        <h2 className="text-lg font-bold text-white">{product.name}</h2>

        <div className="flex justify-between ">
        <p className="text-gray-300 font-semibold">₹ {product.price}/-</p>

        {/* Star Ratings */}
        <div className="flex justify-center my-2 text-yellow-500">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <BsFillStarFill key={i} className="mx-0.5" />
            ))}
        </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-3">
          <button className="bg-white text-ypof p-1 w-1/2 rounded-md flex items-center justify-center gap-2 shadow-md border border-gray-300">
            <IoBagOutline size={30}/> BUY NOW
          </button>
          <button className="bg-ypof text-ypof-background p-1 w-1/2 rounded-md flex items-center justify-center gap-2 shadow-md border border-gray-300">
            <BsCart4 size={30}/> ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
