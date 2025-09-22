import { ImFacebook } from "react-icons/im";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-white pt-[110px] pb-[40px] relative overflow-hidden"
      style={{ backgroundImage: "url('/footer-bgimage2.jpg')" }}
    >
      <div className="relative z-10 container mx-auto w-[90%] max-md:w-[95%] px-4">
        <div className="flex flex-wrap justify-between mb-8 max-md:mb-0">
          {/* Left: Logo & Description */}
          <div className="w-full md:w-[30%] mb-10 mt-[-40px]">
            <img src="logo.jpg" alt="" className="w-[90px] mb-6" />
            <p className="text-white/80 font-medium leading-relaxed w-[80%]">
              We’re passionate about helping businesses grow with tailored
              digital solutions driving success, boosting engagement, and
              building your online presence.
            </p>
            <div className="flex items-center gap-4 mt-6 text-white text-xl">
              <a
                href="https://www.instagram.com/btjalphatechnology/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/tanya-gupta-bb598834b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110"
              >
              <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/btj.alpha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110"
              >
                <ImFacebook />
              </a>

              {/* <FaWhatsapp /> */}

              {/* <FaPhoneAlt /> */}
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-[20%] mb-10">
            <h3 className="text-2xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 max-md:space-y-0 max-md:gap-2 text-white/80 text-base max-md:grid max-md:grid-cols-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-all duration-200 "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-all duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio  "
                  className="hover:text-white transition-all duration-200"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/bulk-sms"
                  className="hover:text-white transition-all duration-200"
                >
                  Bulk SMS
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-all duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-condition"
                  className="hover:text-white transition-all duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-all duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="w-full md:w-[20%] mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-white/80 text-base">
              <li>
                <Link
                  to="/website-designing"
                  className="hover:text-white transition-all duration-200"
                >
                  Website Designing
                </Link>
              </li>
              <li>
                <Link
                  to="/website-development"
                  className="hover:text-white transition-all duration-200"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  to="/mobile-app-development"
                  className="hover:text-white transition-all duration-200"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/search-engine-optimization"
                  className="hover:text-white transition-all duration-200"
                >
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link
                  to="/social-media-marketing"
                  className="hover:text-white transition-all duration-200"
                >
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/meta-ads"
                  className="hover:text-white transition-all duration-200"
                >
                  Facebook Ads
                </Link>
              </li>
              <li>
                <Link
                  to="/google-ads"
                  className="hover:text-white transition-all duration-200"
                >
                  Google Ads
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-[25%] mb-10 ml-12 max-md:ml-0">
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-white/80 text-base">
              <li>
                Sector-2, Noida <br />
                Gautam Buddha Nagar, UP <br />
                201301, India
              </li>
              <li>info@btjalphatechnology.com</li>
              <li>0120-4525483</li>
            </ul>
          </div>
        </div>

        {/* Optional Divider */}
        <hr className="w-full h-[1px] bg-white/30 border-0 mb-6" />

        {/* Registered Office Info */}
        {/* Company Details Section */}
        <div className=" rounded-xl  text-white/90 pt-10 max-md:pt-6">
          <div className="flex max-md:flex-col justify-between gap-6 text-base">
            {/* Left: Office Address */}
            <div>
              <h4 className="text-xl font-semibold mb-4">
                Registered Office Address:
              </h4>
              <p>Sector-2, Noida</p>
              <p>Gautam Buddha Nagar</p>
              <p>Uttar Pradesh, 201301</p>
              <p>India</p>
            </div>

            {/* Right: Legal Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Legal Information:</h4>
              <p>
                <strong>Company Name:</strong> BTJ Alpha Technology Private
                Limited
              </p>
              <p>
                <strong>CIN:</strong> U62099UP2025PTC215855
              </p>
              <p>
                <strong>GSTIN:</strong> 09AANCB2020R1ZB
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-white/30 pt-4 text-white/80 text-base">
          &copy; 2025 BTJ ALPHA TECHNOLOGY PVT LTD. All rights reserved.
        </div>
      </div>

      {/* Floating WhatsApp and Call Buttons */}
      {/* <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/918920589117"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full text-white text-2xl shadow-lg hover:scale-110 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="tel:+917982013160"
          className="bg-sky-500 p-3 rounded-full text-white text-2xl shadow-lg hover:scale-110 transition"
        >
          <FaPhoneAlt />
        </a>
      </div> */}
    </footer>
  );
};
export default Footer;
