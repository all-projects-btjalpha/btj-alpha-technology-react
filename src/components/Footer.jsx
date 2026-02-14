import { ImFacebook } from "react-icons/im";
import {
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1c438d] to-[#0d2552] text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 container mx-auto w-[95%] lg:w-[90%] py-8 sm:py-10 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 xl:gap-6 mb-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src="btlogo.png" 
                alt="BTJ Alpha Technology" 
                className="w-20 sm:w-24 mb-4 bg-white rounded-full p-2 shadow-lg hover:scale-105 transition-transform duration-300" 
              />
              <h3 className="text-xl sm:text-2xl font-bold mb-3">BTJ ALPHA TECHNOLOGY</h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                We're passionate about helping businesses grow with tailored digital solutions, 
                driving success, boosting engagement, and building your online presence.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/btjalphatechnology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] p-3 rounded-full hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tanya-gupta-bb598834b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077b5] p-3 rounded-full hover:bg-[#006399] hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-xl text-white" />
                </a>
                <a
                  href="https://www.facebook.com/btj.alpha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877f2] p-3 rounded-full hover:bg-[#0c63d4] hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  aria-label="Facebook"
                >
                  <ImFacebook className="text-xl text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 relative inline-block">
              Useful Links
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-white rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/bulk-sms"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Bulk SMS
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-condition"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-white rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/website-designing"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Website Designing
                </Link>
              </li>
              <li>
                <Link
                  to="/website-development"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Website Development
                </Link>
              </li>
              <li>
                <Link
                  to="/mobile-app-development"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Mobile App
                </Link>
              </li>
              <li>
                <Link
                  to="/search-engine-optimization"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → SEO
                </Link>
              </li>
              <li>
                <Link
                  to="/social-media-marketing"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Social Media
                </Link>
              </li>
              <li>
                <Link
                  to="/ui-ux-design"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/google-ads"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Google Ads
                </Link>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 relative inline-block">
              Technologies
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-white rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/technologies/reactjs"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → React.js
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies/angular"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Angular
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies/nodejs"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Node.js
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies/python"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Python
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies/php"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → PHP
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies/react-native"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → React Native
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies/flutter"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Flutter
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies/mongodb"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → MongoDB
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies/mysql"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → MySQL
                </Link>
              </li>
            </ul>
          </div>

          {/* Verticals */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 relative inline-block">
              Verticals
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-white rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/verticals/healthcare"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Healthcare
                </Link>
              </li>
              <li>
                <Link
                  to="/verticals/fintech"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Fintech
                </Link>
              </li>
              <li>
                <Link
                  to="/verticals/event-management"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Event Management
                </Link>
              </li>
              <li>
                <Link
                  to="/verticals/marketplace"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/verticals/crm"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → CRM
                </Link>
              </li>
              <li>
                <Link
                  to="/verticals/real-estate"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Real Estate
                </Link>
              </li>
              <li>
                <Link
                  to="/verticals/erp"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → ERP
                </Link>
              </li>
              <li>
                <Link
                  to="/verticals/ed-tech"
                  className="text-white/90 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm"
                >
                  → Ed-Tech
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-white rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 group">
                <FaMapMarkerAlt className="text-base mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-white/90 text-xs sm:text-sm">
                  <p>Sector-2, Noida</p>
                  <p>Gautam Buddha Nagar</p>
                  <p>UP 201301</p>
                </div>
              </li>
              <li className="flex items-start gap-2 group">
                <FaEnvelope className="text-base mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="mailto:info@btjalphatechnology.com" 
                  className="text-white/90 hover:text-white transition-colors duration-300 text-xs sm:text-sm break-all"
                >
                  info@btjalphatechnology.com
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <FaPhone className="text-base flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="tel:01204525483" 
                  className="text-white/90 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                >
                  0120-4525483
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Details Section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Registered Office */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-white" />
                Registered Office Address
              </h4>
              <div className="text-white/90 text-sm sm:text-base space-y-1">
                <p>Sector-2, Noida</p>
                <p>Gautam Buddha Nagar</p>
                <p>Uttar Pradesh, 201301</p>
                <p>India</p>
              </div>
            </div>

            {/* Legal Information */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold mb-4">Legal Information</h4>
              <div className="text-white/90 text-sm sm:text-base space-y-2">
                <p>
                  <strong className="text-white">Company Name:</strong><br />
                  BTJ Alpha Technology Private Limited
                </p>
                <p>
                  <strong className="text-white">CIN:</strong> U62099UP2025PTC215855
                </p>
                <p>
                  <strong className="text-white">GSTIN:</strong> 09AANCB2020R1ZB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/20 pt-4">
          <p className="text-white/90 text-sm sm:text-base">
            &copy; 2025 <span className="font-semibold text-white">BTJ ALPHA TECHNOLOGY PVT LTD</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
