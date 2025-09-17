import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="w-full min-h-fit bg-gray-900 text-white py-6 text-[1.2rem]">
      {/* Call Us */}
      <div className="call-us-box">
        <div className="call-us-logo-text">
            <div>
            <span>Khit</span>
            <span>Thit</span>
            </div>
            <div>
                <span>IT and Mobile Shop</span>
            </div>
        </div>

      </div>
      {/* Menu */}
      <div className="menu-box mb-4">
        <ul className="flex flex-wrap justify-center gap-6 ">
          <li><a href="#" className="hover:text-blue-400">About Us</a></li>
          <li><a href="#" className="hover:text-blue-400">Services</a></li>
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
          <li><a href="#" className="hover:text-blue-400">Shop</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
        </ul>
      </div>

      {/* Payments */}
      <div className="payment-box flex justify-center gap-4 mb-4">
        <span>Wave</span>
        <span>Kpay</span>
        <span>Mahar Bawga</span>
        <span>MPU Card</span>
      </div>

      {/* Social Media */}
      <div className="media-links flex justify-center gap-6 ">
        <a href="#" className="hover:text-blue-500">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="hover:text-pink-500">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="hover:text-sky-400">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="hover:text-red-500">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#" className="hover:text-gray-500">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
      {/* Copyright */}
      <div className="text-center text-lg text-gray-400 mt-2">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
