import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleUser, faCartShopping, faCat, faDog } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import logo from "../assets/ypof_icon.png";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function Header({ toggleSidebar }) {
    return (
      <div className="relative mb-2 z-50">
      <header className="w-screen fixed top-0 right-0 left-0 grid grid-cols-12 gap-1 items-center bg-ypof text-white p-4 h-16 shadow-md">
        <div className="col-span-2 flex items-center px-4">
          {/* <div className=" py-3 px-2 h-14 flex justify-between text-ypof-background">
          <div>
            <MdOutlineMenuOpen size={30}  onClick={()=>setOpen(!open)} className={`cursor-pointer ${open ? '': 'rotate-180'}`}/>
            </div>
              <img src={logo} alt="logo" className={`${open ? 'w-8 h-8'  :'w-0'} rounded-md `}/>
          </div> */}
        </div>
            
        <div className="col-span-4 flex justify-center ">
          <span className="relative flex items-center max-w-lg w-full">
            <input
              type="text"
              placeholder="Search..."
              className="bg-ypof-background rounded-2xl p-2 flex-1 text-ypof "
            />
            <FaSearch size={20} className="absolute right-3 text-gray-500" />
          </span>
        </div>
        <nav className=" col-span-6 flex justify-end pr-8">
          <ul className="flex space-x-6">
            {/* <li><a href="#" className="text-ypof-background text-3xl hover:text-gray-300">
            <FontAwesomeIcon icon={faDog} /></a></li>
            <li><a href="#" className="text-ypof-background text-3xl hover:text-gray-300">
            <FontAwesomeIcon icon={faCat} /></a></li>
            <li><a href="#" className="text-ypof-background text-3xl hover:text-gray-300">
            <FontAwesomeIcon icon={faCartShopping} /> </a></li> */}
            <li><a href="#" className="text-ypof-background text-3xl hover:text-gray-300">
            <FontAwesomeIcon icon={faCircleUser} /></a>
            </li>
          </ul>
        </nav>

        {/* <div className="col-span-2 flex justify-end space-x-4 pr-4">
        <button className="bg-ypof-background text-ypof rounded-md flex items-center">
          <FontAwesomeIcon icon={faUser} />
          <span>Login</span>
        </button>
        <button className="bg-ypof-background text-ypof rounded-md flex items-center">
          <FontAwesomeIcon icon={faUserPlus} />
          <span>Sign-up</span>
        </button>
      </div> */}
      </header>
      </div>

    );
  }

  export default Header