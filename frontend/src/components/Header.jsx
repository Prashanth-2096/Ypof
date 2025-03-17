import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleUser, faCartShopping, faCat, faDog } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/ypof_icon.png";
import { FaHome, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {useState} from 'react';
import { FaCircleUser } from "react-icons/fa6";


function Header({ toggleSidebar }) {
    const navigate=useNavigate();
    const [DogIsOpen,setDogIsOpen]=useState(false);
    const [CatIsOpen,setCatIsOpen]=useState(false);
    const [LoginIsOpen,setLoginIsOpen]=useState(false);
    const [LoggedIn,setLoggedIn]=useState(false);
    return (
      <div className="relative mb-2 z-50">
      <header className="w-screen fixed top-0 right-0 left-0 grid grid-cols-12 gap-1 items-center bg-ypof text-white p-4 h-16 shadow-md">
        <div className="col-span-2 flex items-center px-4">
          <button onClick={()=>navigate("/")} className="p-0 ml-4">
            <img src={logo} alt="logo" className="w-8 rounded-lg" />
          </button>
          <h2>YPOF</h2>
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
              className="bg-ypof-background text-ypof rounded-2xl p-2 flex-1 "
            />
            <FaSearch size={20} className="absolute right-3 text-gray-500" />
          </span>
        </div>
        <nav className=" col-span-6 flex justify-end pr-8">
          <ul className="flex space-x-6">
          <li className="relative">
            {/* Main Menu Item */}
            <button
              onClick={() => {
                setDogIsOpen(!DogIsOpen)
                {CatIsOpen && setCatIsOpen(!CatIsOpen)}
                {LoginIsOpen && setLoginIsOpen(!LoginIsOpen)}
                }}
              className="text-ypof-background p-1 text-2xl flex items-center "
            >
              <FontAwesomeIcon icon={faCat} className="mr-2" />
              <h2>Cats</h2>
            </button>

            {/* Animated Dropdown */}
            <AnimatePresence>
              {DogIsOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }} // Start: Hidden & slightly above
                  animate={{ opacity: 1, y: 0 }} // Animate: Fade-in & move down
                  exit={{ opacity: 0, y: -10 }} // Exit: Fade-out & move up
                  transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
                  className="absolute left-0 mt-2 w-40 bg-ypof-background shadow-md rounded-lg py-2"
                >
                  <div className="bg-ypof">
                    <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">Toys</li>
                    <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">Foods</li>
                    <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">Accessories</li>
                  </div>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

            <li className="relative">
            {/* Main Menu Item */}
            <button
              onClick={() => {
                setCatIsOpen(!CatIsOpen)
                {DogIsOpen && setDogIsOpen(!DogIsOpen)}
                {LoginIsOpen && setLoginIsOpen(!LoginIsOpen)}
                
              }}
              className="text-ypof-background p-1 text-2xl flex items-center "
            >
              <FontAwesomeIcon icon={faDog} className="mr-2" />
              <h2>Dogs</h2>
            </button>

            {/* Animated Dropdown */}
            <AnimatePresence>
              {CatIsOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }} // Start: Hidden & slightly above
                  animate={{ opacity: 1, y: 0 }} // Animate: Fade-in & move down
                  exit={{ opacity: 0, y: -10 }} // Exit: Fade-out & move up
                  transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
                  className="absolute left-0 mt-2 w-40 bg-ypof shadow-md rounded-lg py-2"
                >
                  <div className="bg-ypof">
                    <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">Toys</li>
                    <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">Foods</li>
                    <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">Accessories</li>
                  </div>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li className=""><button

              className="text-ypof-background p-1 text-2xl flex items-center "
            >
              <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
              <h2>Cart</h2>
            </button>

          </li>
          
          <li className="relative">
            {/* Main Menu Item */}
            <button
              onClick={() => {
                navigate("/login")
                setLoginIsOpen(!LoginIsOpen)
                {CatIsOpen && setCatIsOpen(!CatIsOpen)}
                {DogIsOpen && setDogIsOpen(!DogIsOpen)}
                setLoggedIn(true);
                }}
              className="text-ypof-background p-1 text-2xl flex items-center "
            >
              <FontAwesomeIcon icon={faCircleUser} className="mr-2" />
              {(!LoggedIn) ?
                <h2>Login</h2>
              :
                <h2>Welcome User</h2>
                }
            </button>
            
            {/* Animated Dropdown */}
            {LoggedIn && <>
              <AnimatePresence>
              {LoginIsOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }} // Start: Hidden & slightly above
                  animate={{ opacity: 1, y: 0 }} // Animate: Fade-in & move down
                  exit={{ opacity: 0, y: -10 }} // Exit: Fade-out & move up
                  transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
                  className="absolute left-0 mt-2 w-40 bg-ypof-background shadow-md rounded-lg py-2"
                >
                  <li className="px-4 py-2 text-ypof hover:bg-gray-200 cursor-pointer">Profile</li>
                  <li className="px-4 py-2 text-ypof hover:bg-gray-200 cursor-pointer">Orders</li>
                  <li className="px-4 py-2 text-ypof hover:bg-gray-200 cursor-pointer">Settings</li>
                  <li className="px-4 py-2 text-ypof hover:bg-gray-200 cursor-pointer">
                    <button onClick={()=>setLoggedIn(false)}>Logout</button>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
            
            </>}
            
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

export default Header;
