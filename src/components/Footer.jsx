import { ImFacebook } from "react-icons/im";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-white pt-[110px] pb-[40px] relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/footer-bgimage2.jpg')" }}
    >
      <div className="relative z-10 container mx-auto w-[90%] max-md:w-[95%] px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-10 mb-10">
          {/* Logo & Description */}
          <div className="w-full md:w-[28%]">
            <img
              src="btlogo.png"
              alt="BTJ Alpha Technology"
              className="w-[90px] mb-6 bg-white rounded-full p-2"
            />
            <p className="text-white/80 leading-relaxed">
              We’re passionate about helping businesses grow with tailored
              digital solutions driving success, boosting engagement, and
              building your online presence.
            </p>

            <div className="flex items-center gap-4 mt-6 text-xl">
              <a
                href="https://www.instagram.com/btjalphatechnology/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/tanya-gupta-bb598834b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/btj.alpha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <ImFacebook />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-[18%]">
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/bulk-sms" className="hover:text-white">
                  Bulk SMS
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-condition" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-[22%]">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link to="/website-designing" className="hover:text-white">
                  Website Designing
                </Link>
              </li>
              <li>
                <Link to="/website-development" className="hover:text-white">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/mobile-app-development" className="hover:text-white">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/search-engine-optimization"
                  className="hover:text-white"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/social-media-marketing" className="hover:text-white">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/meta-ads" className="hover:text-white">
                  Facebook Ads
                </Link>
              </li>
              <li>
                <Link to="/google-ads" className="hover:text-white">
                  Google Ads
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-[25%]">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <div>
                  Sector-2, Noida <br />
                  Gautam Buddha Nagar <br />
                  UP 201301, India
                </div>
              </li>

              <li className="flex gap-2">
                <FaEnvelope className="mt-1" />
                <a
                  href="mailto:info@btjalphatechnology.com"
                  className="hover:text-white break-all"
                >
                  info@btjalphatechnology.com
                </a>
              </li>

              <li className="flex gap-2">
                <FaPhone className="mt-1" />
                <a href="tel:+919310228489" className="hover:text-white">
                  +91-9310228489
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Details */}
        <div className="border-t border-white/30 pt-8 text-white/80 text-sm flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h4 className="font-semibold mb-2">Registered Office Address:</h4>
            <p>Sector-2, Noida</p>
            <p>Gautam Buddha Nagar</p>
            <p>Uttar Pradesh - 201301</p>
            <p>India</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Legal Information:</h4>
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

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-white/30 pt-4 text-white/80 text-sm">
          &copy; 2025 BTJ Alpha Technology Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
