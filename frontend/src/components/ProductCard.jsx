import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { BsFillStarFill, BsCart4,BsStar,BsStarHalf } from "react-icons/bs";

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const percentage_discount=Math.ceil(((product.original_price-product.current_price)/product.original_price)*100);
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

        <div className="flex flex-col justify-between ">
          <div className="flex flex-row gap-3 items-center">
            {(product.original_price>product.current_price) ?(
            <>
              <p className="text-blue-300 text-2xl text-left font-semibold">₹ {product.current_price}/- </p>
              <p className="text-blue-200 text-1xl items-center line-through font-semibold">₹ {product.original_price}/- </p>
              <p className="text-red-400 text-1xl font-semibold" > {percentage_discount}% off </p>
            </>):
            (
            <>
              <p className="text-blue-300 text-2xl font-semibold">₹ {product.original_price}/- </p>
            </>)}
          
          </div>
          
          
          {/* Star Ratings */}
          <div className="flex items-center my-2 text-yellow-500">
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="relative w-5 h-5">
                  {/* Empty Star (Background) */}
                  <BsStar className="absolute text-gray-500" />
                  
                  {/* Filled Star (Foreground) */}
                  {i < Math.floor(product.rating) ? (
                    <BsFillStarFill className="absolute" />
                  ) : i === Math.floor(product.rating) ? (
                    <div className="absolute overflow-hidden" style={{ width: `${(product.rating % 1) * 100}%` }}>
                      <BsFillStarFill />
                    </div>
                  ) : null}
                </div>
              ))}
              <span className="text-white text-sm font-semibold ml-2">{product.rating}/5 | </span>
            </div>
            <div>
              <span className="text-white text-sm font-semibold ml-2">{product.reviews} reviews</span>
            </div>
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