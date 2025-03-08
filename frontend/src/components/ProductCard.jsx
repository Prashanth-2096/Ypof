import { useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const percentage_discount=Math.ceil(((product.original_price-product.price)/product.original_price)*100);
  
  return (
    <div className="bg-[#02042B] p-4 rounded-xl shadow-lg w-64 border border-gray-700 text-white">
      {/* Product Image & Favorite Button */}
      <div className="relative hover:cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover border border-gray-300 rounded-lg"
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
      {/* Star Ratings */}
      <div className="flex justify-left my-2 text-yellow-500">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <BsFillStarFill key={i} className="mx-0.5" />
            ))}
          
        </div>

      {/* Product Details */}
      <div className="mt-3 text-center">
        <h2 className="text-lg font-bold text-left text-white">{product.name}</h2>
        <div className="flex items-center gap-2">
          {(product.original_price>product.price) ?(
          <>
            <p className="text-blue-200 text-1xl line-through font-semibold">₹ {product.original_price}/- </p>
            <p className="text-blue-300 text-2xl text-left font-semibold">₹ {product.price}/- </p>
            <p className="text-red-400 text-1xl font-semibold" > {percentage_discount}% off </p>
          </>):
          (
          <>
            <p className="text-blue-300 text-2xl font-semibold">₹ {product.original_price}/- </p>
          </>)}
          
         
        </div>
       
        
        

        {/* Buttons */}
        <div className="flex gap-2 mt-3">
          <button className="bg-white text-black px-3 py-2 w-1/2 rounded-md shadow-md border border-gray-300">
            BUY NOW
          </button>
          <button className="bg-black text-white px-3 py-2 w-1/2 rounded-md flex items-center justify-center gap-2">
            <FaShoppingCart /> ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
