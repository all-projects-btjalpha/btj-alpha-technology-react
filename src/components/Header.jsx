import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FiArrowRightCircle } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [show, setShow] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  const [scrolled, setScrolled] = useState(false); // 👈 add this line
  const handleClick = () => setShow(!show);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // blur starts after 10px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuItems = (
    <ul className=" flex-col gap-6  flex text-lg font-semibold md:flex-row md:items-center md:gap-8">
      <Link to="/">
        <li
          onClick={() => setShow(false)}
          className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]"
        >
          Home
        </li>
      </Link>
      <Link to="/about">
        <li
          onClick={() => setShow(false)}
          className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]"
        >
          About Us
        </li>
      </Link>

      <div className="relative">
        {/* Main Menu Item */}
        <div className="flex items-center justify-between cursor-pointer  max-lg:w-[85px]  max-lg:mb-4 max-md:mb-0">
          <span
            className="flex items-center gap-1 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            Services
            <IoIosArrowDown className="hidden md:inline" />
          </span>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            {servicesOpen ? "-" : "+"}
          </button>
        </div>

        {/* Dropdown for Desktop */}
        <ul
          className={`absolute left-0 bg-white shadow-lg w-[280px] rounded-[12px] z-50 transition-all duration-300 ease-in-out hidden md:block ${
            servicesOpen ? "opacity-100 translate-y-2" : "opacity-0 invisible"
          }`}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <Link to="/website-designing">
            <li className="px-4 py-4 hover:bg-gray-100 border rounded-t-[12px]">
              Website Designing
            </li>
          </Link>
          <Link to="/website-development">
            <li className="px-4 py-4 hover:bg-gray-100 border">
              Website Development
            </li>
          </Link>
          <Link to="/mobile-app-development">
            <li className="px-4 py-4 hover:bg-gray-100 border">
              Mobile App Development
            </li>
          </Link>
          <Link to="/search-engine-optimization">
            <li className="px-4 py-4 hover:bg-gray-100 border">
              Search Engine Optimization
            </li>
          </Link>
          <Link to="/social-media-marketing">
            <li className="px-4 py-4 hover:bg-gray-100 border">
              Social Media Marketing
            </li>
          </Link>
          <Link to="/meta-ads">
            <li className="px-4 py-4 hover:bg-gray-100 border">Facebook Ads</li>
          </Link>
          <Link to="/google-ads">
            <li className="px-4 py-4 hover:bg-gray-100 border rounded-b-[12px]">
              Google Ads
            </li>
          </Link>
        </ul>

        {/* Dropdown for Mobile */}
        {servicesOpen && (
          <div className="md:hidden mt-2 pl-4">
            <Link to="/website-designing">
              <div
                onClick={() => setShow(false)}
                className="py-2 border-b hover:text-[#fb9c24]"
              >
                Website Designing
              </div>
            </Link>
            <Link to="/website-development">
              <div
                onClick={() => setShow(false)}
                className="py-2 border-b hover:text-[#fb9c24]"
              >
                Website Development
              </div>
            </Link>
            <Link to="/mobile-app-development">
              <div
                onClick={() => setShow(false)}
                className="py-2 border-b hover:text-[#fb9c24]"
              >
                Mobile App Development
              </div>
            </Link>
            <Link to="/search-engine-optimization">
              <div
                onClick={() => setShow(false)}
                className="py-2 border-b hover:text-[#fb9c24]"
              >
                Search Engine Optimization
              </div>
            </Link>
            <Link to="/social-media-marketing">
              <div
                onClick={() => setShow(false)}
                className="py-2 border-b hover:text-[#fb9c24]"
              >
                Social Media Marketing
              </div>
            </Link>
            <Link to="/meta-ads">
              <div
                onClick={() => setShow(false)}
                className="py-2 border-b hover:text-[#fb9c24]"
              >
                Facebook Ads
              </div>
            </Link>
            <Link to="/google-ads">
              <div
                onClick={() => setShow(false)}
                className="py-2 hover:text-[#fb9c24]"
              >
                Google Ads
              </div>
            </Link>
          </div>
        )}
      </div>

      <Link to="/bulk-sms">
        <li
          onClick={() => setShow(false)}
          className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]"
        >
          Bulk SMS
        </li>
      </Link>
      {/* <li className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]">
        Blog
      </li> */}
      <Link to="/portfolio">
        <li
          onClick={() => setShow(false)}
          className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]"
        >
          Portfolio
        </li>
      </Link>
      <Link to="/contact">
        <li
          onClick={() => setShow(false)}
          className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]"
        >
          Contact
        </li>
      </Link>
    </ul>
  );

  return (
    <>
      {/* Overlay */}
      {show && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[900]"
          onClick={() => setShow(false)}
        />
      )}

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 left-0 z-[1000] bg-white h-full w-[310px] px-[30px] py-[40px] flex-col transition-all duration-500 ease-in-out border border-white transform ${
          show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } md:hidden`}
      >
        <IoClose
          className="text-2xl absolute right-3 top-5 cursor-pointer"
          onClick={() => setShow(false)}
        />
        <div className="flex justify-center mb-5">
          <img
            src="/logo.jpg"
            className="w-[80px] object-cover"
            alt="Admirer Logo"
          />
        </div>
        {menuItems}
      </div>

      {/* Header */}
      
      <main
  className={`fixed top-0 left-0 z-50 w-full transition-all duration-300
    ${
      scrolled
        ? "bg-white/20 backdrop-blur-md shadow-md border-b border-white/30"
        : "bg-white shadow-md"
    }
    md:bg-white md:backdrop-blur-none`}
>


        <div className="w-[95%] max-md:w-full px-4 flex justify-between items-center">
          {/* Mobile Menu Icon */}

          {/* Logo */}
          <Link to="/">
            <img
              src="/btlogo.png"
              className="w-[70px] max-md:w-[60px] ml-8 max-md:ml-0  object-cover"
              alt="Admirer Logo"
            />
          </Link>

          <div className="md:hidden flex items-center">
            <div
              className="w-5 h-[14px] flex flex-col justify-between cursor-pointer"
              onClick={handleClick}
            >
              <span className="w-full h-[2px] bg-black block"></span>
              <span
                className={` h-[2px] bg-black block self-end ${
                  show ? "w-full" : "w-1/2"
                }`}
              ></span>
              <span className="w-full h-[2px] bg-black block"></span>
            </div>
          </div>

          {/* Desktop Navigation */}

          {/* <div className="hidden md:flex items-center gap-2"> */}
          <div className="hidden md:flex">{menuItems}</div>
          <div className="hidden md:flex">
            <Link to="/contact">
              <button className="w-[170px] flex font-bold border  border-orange-500 pl-4 pr-4 h-12 rounded-2xl text-lg  items-center ">
                Get In Touch
                <span className="text-xl ml-2">
                  <FiArrowRightCircle />
                </span>
              </button>
            </Link>
          </div>
          {/* </div> */}
        </div>
      </main>
    </>
  );
};

export default Header;
