import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faUserPlus, faCircleUser, faCartShopping, faCat, faDog } from "@fortawesome/free-solid-svg-icons";


function Header({ toggleSidebar }) {
    return (
      <div className="relative">
      <header className="w-screen fixed top-0 right-0 left-0 grid grid-cols-9 gap-1 items-center bg-ypof text-white p-4 h-16 shadow-md">
        <div className="col-span-2 flex items-center px-4">

          <span className="text-2xl font-bold ml-8">YPOF</span>
        </div>

        <nav className=" col-span-7 flex justify-end pr-8">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-ypof-background text-3xl hover:text-gray-300">
            <FontAwesomeIcon icon={faDog} /></a></li>
            <li><a href="#" className="text-ypof-background text-3xl hover:text-gray-300">
            <FontAwesomeIcon icon={faCat} /></a></li>
            <li><a href="#" className="text-ypof-background text-3xl hover:text-gray-300">
            <FontAwesomeIcon icon={faCartShopping} /> </a></li>
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