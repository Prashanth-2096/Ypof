import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";


function Header({ toggleSidebar }) {
    return (
      <header className="w-full grid grid-cols-9 items-center bg-ypof text-white p-2 h-16 shadow-md">
        <div className="col-span-1 flex items-center px-4">
          <button className="">
            <FontAwesomeIcon icon={faBars} />
          </button>

          <span className="text-2xl font-bold ml-4">YPOF</span>
        </div>

        <nav className="col-span-5 flex justify-end">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-ypof-background text-xl hover:text-gray-300">Dog</a></li>
            <li><a href="#" className="text-ypof-background text-xl hover:text-gray-300">Cat</a></li>
            <li><a href="#" className="text-ypof-background text-xl hover:text-gray-300">Cart</a></li>
            <li><a href="#" className="text-ypof-background text-xl hover:text-gray-300">FAQs</a></li>
            <li><a href="#" className="text-ypof-background text-xl hover:text-gray-300">About</a></li>
          </ul>
        </nav>

        <div className="col-span-2 flex justify-end space-x-4 pr-4">
        <button className="bg-white text-ypof px-4 py-2 rounded-md flex items-center space-x-2">
          <FontAwesomeIcon icon={faUser} />
          <span>Login</span>
        </button>
        <button className="bg-white text-ypof px-4 py-2 rounded-md flex items-center space-x-2 ">
          <FontAwesomeIcon icon={faUserPlus} />
          <span>Sign-up</span>
        </button>
      </div>
      </header>

    );
  }

  export default Header