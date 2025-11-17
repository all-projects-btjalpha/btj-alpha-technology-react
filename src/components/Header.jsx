import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FiArrowRightCircle } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const handleClick = () => setShow(!show);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync active tab with current URL (so refresh keeps underline)
  useEffect(() => {
    const path = location.pathname;

    if (path === "/") setActiveTab("home");
    else if (path === "/about") setActiveTab("about");
    else if (path === "/bulk-sms") setActiveTab("bulk-sms");
    else if (path === "/portfolio") setActiveTab("portfolio");
    else if (path === "/contact") setActiveTab("contact");
    else if (
      [
        "/website-designing",
        "/website-development",
        "/mobile-app-development",
        "/search-engine-optimization",
        "/social-media-marketing",
        "/meta-ads",
        "/google-ads",
      ].includes(path)
    ) {
      setActiveTab("services");
    } else {
      // default: clear if route unknown
      setActiveTab("");
    }
  }, [location.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShow(false);
  };

  const servicesList = [
    { name: "Website Designing", path: "/website-designing" },
    { name: "Website Development", path: "/website-development" },
    { name: "Mobile App Development", path: "/mobile-app-development" },
    { name: "Search Engine Optimization", path: "/search-engine-optimization" },
    { name: "Social Media Marketing", path: "/social-media-marketing" },
    { name: "Facebook Ads", path: "/meta-ads" },
    { name: "Google Ads", path: "/google-ads" },
  ];

  const menuItems = (
    <ul className="flex-col gap-6 flex text-lg font-semibold md:flex-row md:items-center md:gap-8">
      <Link to="/">
        <li
          onClick={() => handleTabClick("home")}
          className={`cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24] ${
            activeTab === "home"
              ? "underline underline-offset-8 decoration-2 decoration-[#fb9c24]"
              : ""
          }`}
        >
          Home
        </li>
      </Link>

      <Link to="/about">
        <li
          onClick={() => handleTabClick("about")}
          className={`cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24] ${
            activeTab === "about"
              ? "underline underline-offset-8 decoration-2 decoration-[#fb9c24]"
              : ""
          }`}
        >
          About Us
        </li>
      </Link>

      {/* Services Dropdown wrapper: keep open while hovering trigger OR dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <div className="flex items-center justify-between cursor-pointer max-lg:w-[85px] max-lg:mb-4 max-md:mb-0">
          <span
            onClick={() => handleTabClick("services")}
            className={`flex items-center gap-1 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24] ${
              activeTab === "services"
                ? "underline underline-offset-8 decoration-2 decoration-[#fb9c24]"
                : ""
            }`}
          >
            Services
            <IoIosArrowDown className="hidden md:inline" />
          </span>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-xl"
            onClick={() => setServicesOpen((s) => !s)}
          >
            {servicesOpen ? "-" : "+"}
          </button>
        </div>

        {/* Desktop Dropdown: also listens for mouse enter/leave so it doesn't close when moving pointer */}
        <ul
          className={`absolute left-0 bg-white shadow-lg w-[280px]  z-50 transition-all duration-200 ease-in-out hidden md:block ${
            servicesOpen ? "opacity-100 translate-y-2 visible" : "opacity-0 invisible -translate-y-1"
          }`}
          // ensure dropdown keeps servicesOpen while hovered
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          {servicesList.map((service, i) => (
            <Link
              key={i}
              to={service.path}
              onClick={() => {
                // set active to services so underline works and close mobile drawer if opened
                setActiveTab("services");
                setShow(false);
                // also close dropdown on click (useful for desktop)
                setServicesOpen(false);
              }}
            >
              <li className="px-4 py-4 hover:bg-[#fb9c24] hover:text-white border ">
                {service.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* Mobile Dropdown */}
        {servicesOpen && (
          <div className="md:hidden mt-2 pl-4">
            {servicesList.map((service, i) => (
              <Link
                key={i}
                to={service.path}
                onClick={() => {
                  setActiveTab("services");
                  setShow(false);
                  setServicesOpen(false);
                }}
              >
                <div className="py-2 border-b hover:text-[#fb9c24]">
                  {service.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link to="/bulk-sms">
        <li
          onClick={() => handleTabClick("bulk-sms")}
          className={`cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24] ${
            activeTab === "bulk-sms"
              ? "underline underline-offset-8 decoration-2 decoration-[#fb9c24]"
              : ""
          }`}
        >
          Bulk SMS
        </li>
      </Link>

      <Link to="/portfolio">
        <li
          onClick={() => handleTabClick("portfolio")}
          className={`cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24] ${
            activeTab === "portfolio"
              ? "underline underline-offset-8 decoration-2 decoration-[#fb9c24]"
              : ""
          }`}
        >
          Portfolio
        </li>
      </Link>

      <Link to="/contact">
        <li
          onClick={() => handleTabClick("contact")}
          className={`cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24] ${
            activeTab === "contact"
              ? "underline underline-offset-8 decoration-2 decoration-[#fb9c24]"
              : ""
          }`}
        >
          Contact
        </li>
      </Link>
    </ul>
  );

  return (
    <>
      {show && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[900]"
          onClick={() => setShow(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-[1000] bg-white h-full w-[310px] px-[30px] py-[40px] flex-col transition-all duration-500 ease-in-out border transform ${
          show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } md:hidden`}
      >
        <IoClose
          className="text-2xl absolute right-3 top-5 cursor-pointer"
          onClick={() => setShow(false)}
        />
        <div className="flex justify-center mb-5">
          <img src="/logo.jpg" className="w-[80px]" alt="Admirer Logo" />
        </div>
        {menuItems}
      </div>

      {/* Header */}
      <main
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/20 backdrop-blur-md shadow-md border-b border-white/30"
            : "bg-white shadow-md"
        }`}
      >
        <div className="w-[95%] px-4 flex justify-between items-center">
          <Link to="/">
            <img
              src="/btlogo.png"
              className="w-[50px] max-md:w-[50px] ml-8 max-md:ml-0 my-3"
              alt="Admirer Logo"
            />
          </Link>

          <div className="md:hidden">
            <div
              className="w-5 h-[14px] flex flex-col justify-between cursor-pointer"
              onClick={handleClick}
            >
              <span className="w-full h-[2px] bg-black"></span>
              <span
                className={`h-[2px] bg-black self-end ${
                  show ? "w-full" : "w-1/2"
                }`}
              ></span>
              <span className="w-full h-[2px] bg-black"></span>
            </div>
          </div>

          <div className="hidden md:flex">{menuItems}</div>

          <div className="hidden md:flex">
            <Link to="/contact">
              <button className="w-[170px] flex font-semibold bg-[#fb9c24] justify-center h-12 rounded-lg text-white text-lg items-center">
                Get In Touch
                <span className="text-xl ml-2">
                  <FiArrowRightCircle />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
