import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

function Homepage() {
  const Navigate=useNavigate()
    return (
      <div className="mt-16 text-center flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold mb-4">Transforming the Way You Care for Your Pet!</h1>
        <Carousel/>
        <h2 className="text-lg mt-4 font-serif mb-4">Every Soul Deserves Care and Comfort</h2>
        <button onClick={()=>Navigate("/Dashboard")} className="m-4">SHOP NOW</button>
      </div>
    );
  }
  
export default Homepage;