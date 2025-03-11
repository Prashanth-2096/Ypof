import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram, faSquareXTwitter, faLinkedin, faSquareFacebook, faSquareReddit } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
      <div className="static ">
      <footer className="w-full text-ypof p-4 text-center border-4 border-t-ypof ixed top-0 right-0 left-0">
        <div className="grid grid-cols-5 text-start">
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">FOLLOW YPOF</h2>
            <ul className="grid gap-4 text-lg">
              <a href="" className="hover:text-white transition duration-300 ease-in-out">
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faSquareInstagram} className="text-2xl" />
                  <span>Instagram</span>
                </li></a>
              <a href="" className="hover:text-white transition duration-300 ease-in-out">
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faSquareXTwitter} className="text-2xl " />
                  <span>Twitter</span>
                </li></a>
                <a href="" className="hover:text-white transition duration-300 ease-in-out">
                <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faSquareReddit} className="text-2xl "/>
                  <span>Reddit</span>
                </li></a>
                <a href="" className="hover:text-white transition duration-300 ease-in-out">
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faSquareFacebook} className="text-2xl" />
                  <span>Facebook</span>
                </li></a>
            </ul>

          </div>
          <div className="col-span-1">
          <h2 className="text-lg font-bold">SHOP NOW</h2>
            <ul>
              <li><a href="#">Dog</a></li>
              <li><a href="#">Cat</a></li>
              <li><a href="#">Toys</a></li>
              <li><a href="">Accessories</a></li>
            </ul>
          </div>
          <div className="col-span-1">
          <h2 className="text-lg font-bold">QUICK LINKS</h2>
            <ul>
              <li><a href="#">Refund policy</a></li>
              <li><a href="#">Return policy</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="">Terms of Use</a></li>
              <li><a href="">Refer and Save</a></li>
            </ul>
          </div>
          <div className="col-span-1">
          <h2 className="text-lg font-bold">TRENDING LINKS</h2>
            <ul>
              <li><a href="#">Dog Toys</a></li>
              <li><a href="#">Pet Rainwear</a></li>
              <li><a href="#">Cat Toys</a></li>
              <li><a href="">Dog Treats & Chews</a></li>
            </ul>
          </div>
          <div className="col-span-1">
          <h2 className="text-lg font-bold">EXPLORE</h2>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <p className="text-center">&copy; 2025 YPOF. All rights reserved.</p>
      </footer>
      </div>
    );
  }

export default Footer