import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCartShopping, faCat, faDog } from "@fortawesome/free-solid-svg-icons";
import { SearchBar } from "./Search";
import { IoHome } from "react-icons/io5";

function Header({ toggleSidebar }) {
    return (
        <div className="relative">
            <header className="w-screen fixed top-0 left-0 right-0 flex items-center bg-ypof text-white p-4 h-16 shadow-md">
                {/* Logo */}
                <div className="flex items-center ml-5 pl-6">
                    <span className="text-2xl font-bold">YPOF</span>
                </div>
                <div className="ml-4">
                  <a className="text-white" href="./Homepage.jsx"><IoHome size={30}/></a>
                </div>
                {/* Search Bar (Centered & Responsive) */}
                <div className="w-full max-w-[500px] ml-auto mr-auto">
                    <SearchBar />
                </div>

                {/* Icons Navigation */}
                <nav className="flex items-center space-x-6 pr-8">
                    <a href="#" className="text-ypof-background text-3xl hover:text-gray-300">
                        <FontAwesomeIcon icon={faDog} />
                    </a>
                    <a href="#" className="text-ypof-background text-3xl hover:text-gray-300">
                        <FontAwesomeIcon icon={faCat} />
                    </a>
                    <a href="#" className="text-ypof-background text-3xl hover:text-gray-300">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </a>
                    <a href="#" className="text-ypof-background text-3xl hover:text-gray-300">
                        <FontAwesomeIcon icon={faCircleUser} />
                    </a>
                </nav>
            </header>
        </div>
    );
}

export default Header;
