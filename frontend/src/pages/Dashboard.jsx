import React from "react";
import dogImage from "../assets/dog.jpg";
import catImage from "../assets/cat.jpg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const Navigate=useNavigate()
  return (
    <div className="bg-ypof-background w-full h-full flex flex-col items-center justify-center p-8 m-8 gap-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-ypof mb-8">
        Choose your Pet
      </h1>

      {/* Grid for Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Dog Section */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-48 bg-ypof-background rounded-[40%] overflow-hidden shadow-lg">
            <img src={dogImage} alt="Dog" className="w-full h-full object-cover" />
          </div>
          <button className="bg-ypof text-ypof-background px-6 py-3 mt-4 rounded-full shadow-md hover:scale-105 transition" onClick={()=>Navigate("/collection/dogs")}>
            Shop for Dog
          </button>
        </div>

        {/* Cat Section */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-48 bg-ypof-background rounded-[40%] overflow-hidden shadow-lg">
            <img src={catImage} alt="Cat" className="w-full h-full object-cover" />
          </div>
          <button className="bg-ypof text-ypof-background px-6 py-3 mt-4 rounded-full shadow-md hover:scale-105 transition" onClick={()=>Navigate("/collection/cats")}>
            Shop for Cat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
