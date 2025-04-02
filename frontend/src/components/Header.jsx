import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCartShopping, faCat, faDog } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/ypof_icon.png";
import { FaHome, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

// Corrected import for FaCircleUser from FontAwesome instead of "fa6"
import { useAuth } from "../contexts/authContext";

function Header() {
  const navigate = useNavigate();
  const [DogIsOpen, setDogIsOpen] = useState(false);
  const [CatIsOpen, setCatIsOpen] = useState(false);
  const [LoginIsOpen, setLoginIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="relative mb-2 z-50">
      <header className="w-screen fixed top-0 right-0 left-0 grid grid-cols-12 gap-1 items-center bg-ypof text-white p-4 h-16 shadow-md">
        <div className="col-span-2 flex items-center px-4">
          <button onClick={() => navigate("/")} className="p-0 ml-4">
            <img src={logo} alt="logo" className="w-8 rounded-lg" />
          </button>
          <h2>YPOF</h2>
        </div>

        <div className="col-span-4 flex justify-center">
          <span className="relative flex items-center max-w-lg w-full">
            <input
              type="text"
              placeholder="Search..."
              className="bg-ypof-background text-ypof rounded-2xl p-2 flex-1 "
            />
            <FaSearch size={20} className="absolute right-3 text-gray-500" />
          </span>
        </div>

        <nav className="col-span-6 flex justify-end pr-8">
          <ul className="flex space-x-6">
            {/* Dog Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setDogIsOpen(true)}
              onMouseLeave={() => setDogIsOpen(false)}
            >
              <button className="text-ypof-background p-1 text-2xl flex items-center">
                <FontAwesomeIcon icon={faCat} className="mr-2" />
                <h2>Cats</h2>
              </button>
              <AnimatePresence>
                {DogIsOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute left-0 mt-2 w-40 bg-ypof shadow-md rounded-lg py-2"
                  >
                    <div className="bg-ypof">
                      <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">
                        Toys
                      </li>
                      <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">
                        Foods
                      </li>
                      <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">
                        Accessories
                      </li>
                    </div>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Cat Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setCatIsOpen(true)}
              onMouseLeave={() => setCatIsOpen(false)}
            >
              <button className="text-ypof-background p-1 text-2xl flex items-center">
                <FontAwesomeIcon icon={faDog} className="mr-2" />
                <h2>Dogs</h2>
              </button>
              <AnimatePresence>
                {CatIsOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute left-0 mt-2 w-40 bg-ypof shadow-md rounded-lg py-2"
                  >
                    <div className="bg-ypof">
                      <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">
                        Toys
                      </li>
                      <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">
                        Foods
                      </li>
                      <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">
                        Accessories
                      </li>
                    </div>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Cart */}
            <li className="relative">
              <button className="text-ypof-background p-1 text-2xl flex items-center">
                <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                <h2>Cart</h2>
              </button>
            </li>

            {/* Login/Logout */}
            <li
              className="relative"
              onMouseEnter={() => user && setLoginIsOpen(true)}
              onMouseLeave={() => user && setLoginIsOpen(false)}
            >
            <button
                onClick={() => !user && navigate("/login")}
                className="text-ypof-background p-1 text-2xl flex items-center"
              >
              <FontAwesomeIcon icon={faCircleUser} className="mr-2" />
              {!user ?
                <h2>Login</h2>
              :
                <h2>Welcome {user.displayName}</h2>
              }
            </button>
            
            {/* Animated Dropdown */}
            
              <AnimatePresence>
                {LoginIsOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute left-0 mt-2 w-full bg-ypof shadow-md rounded-lg py-2"
                  >
                    <div>
                      <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">
                        Profile
                      </li>
                      <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">
                        Orders
                      </li>
                      <li className="px-4 py-2 text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer">
                        Settings
                      </li>
                      <button
                        onClick={() => {
                          logout();
                          setLoginIsOpen(false);
                        }}
                        className="px-4 py-2 w-full text-left text-ypof-background hover:bg-ypof-background hover:text-ypof cursor-pointer"
                      >
                        Logout
                      </button>
                    </div>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
