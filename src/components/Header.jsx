import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FiArrowRightCircle } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { 
  FaCode, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaSearch, 
  FaBullhorn, 
  FaGoogle, 
  FaFacebookSquare,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaLaravel,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
  FaAws,
  FaDatabase,
  FaBrain,
  FaPalette,
  FaCogs,
  FaCloud,
  FaChartBar,
  FaShieldAlt,
  FaVial,
  FaChartLine,
  FaMousePointer,
  FaRobot,
  FaEnvelope,
  FaHeartbeat,
  FaWallet,
  FaCalendarAlt,
  FaShoppingCart,
  FaShieldAlt as FaCompliance,
  FaBoxes,
  FaTruck,
  FaHome,
  FaMicrochip,
  FaGraduationCap,
  FaCar,
  FaDonate,
  FaPlane,
  FaTasks,
  FaDumbbell,
  FaFootballBall,
  FaServer,
  FaPhone,
  FaChartPie,
  FaCreditCard,
  FaChartArea,
  FaVideo,
  FaChartLine as FaChartLineAlt,
  FaEdit
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiAmazondynamodb,
  SiStripe,
  SiPaypal,
  SiPrime,
  SiCkeditor4,
  SiChartdotjs as SiChartjs
} from "react-icons/si";

const Header = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const [verticalsOpen, setVerticalsOpen] = useState(false);
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

  const itServices = [
    { name: "Website Designing", path: "/website-designing", icon: <FaCode className="text-2xl text-[#e74c3c]" /> },
    { name: "Website Development", path: "/website-development", icon: <FaLaptopCode className="text-2xl text-[#3498db]" /> },
    { name: "Mobile App Development", path: "/mobile-app-development", icon: <FaMobileAlt className="text-2xl text-[#9b59b6]" /> },
    { name: "AI & ML", path: "/ai-ml", icon: <FaBrain className="text-2xl text-[#e67e22]" /> },
    { name: "Product Development", path: "/product-development", icon: <FaCogs className="text-2xl text-[#1abc9c]" /> },
    { name: "PWA Development", path: "/pwa-development", icon: <FaMobileAlt className="text-2xl text-[#f39c12]" /> },
    { name: "Web API", path: "/web-api", icon: <FaCode className="text-2xl text-[#16a085]" /> },
    { name: "Software Architecture", path: "/software-architecture", icon: <FaCogs className="text-2xl text-[#d35400]" /> },
    { name: "Software Testing", path: "/software-testing", icon: <FaVial className="text-2xl text-[#c0392b]" /> },
    { name: "UI/UX Design", path: "/ui-ux-design", icon: <FaPalette className="text-2xl text-[#8e44ad]" /> },
    { name: "Databases", path: "/databases", icon: <FaDatabase className="text-2xl text-[#2980b9]" /> },
    { name: "Cloud Services", path: "/cloud-services", icon: <FaCloud className="text-2xl text-[#3498db]" /> },
    { name: "Reporting", path: "/reporting", icon: <FaChartBar className="text-2xl text-[#27ae60]" /> },
  ];

  const digitalServices = [
    { name: "Search Engine Optimization", path: "/search-engine-optimization", icon: <FaSearch className="text-2xl text-[#e67e22]" /> },
    { name: "Performance Marketing", path: "/performance-marketing", icon: <FaChartLine className="text-2xl text-[#e67e22]" /> },
    { name: "Social Media Marketing", path: "/social-media-marketing", icon: <FaBullhorn className="text-2xl text-[#e74c3c]" /> },
    { name: "Pay per Click Advertising", path: "/ppc-advertising", icon: <FaMousePointer className="text-2xl text-[#3498db]" /> },
    { name: "Google Ads", path: "/google-ads", icon: <FaGoogle className="text-2xl text-[#4285f4]" /> },
    { name: "Facebook Ads", path: "/meta-ads", icon: <FaFacebookSquare className="text-2xl text-[#1877f2]" /> },
    { name: "Answer Engine Optimization", path: "/answer-engine-optimization", icon: <FaRobot className="text-2xl text-[#9b59b6]" /> },
    { name: "Email Marketing", path: "/email-marketing", icon: <FaEnvelope className="text-2xl text-[#e74c3c]" /> },
  ];

  // Technologies Data
  const frontendTechnologies = [
    { name: "React.js", path: "/technologies/reactjs", icon: <FaReact className="text-2xl text-[#61dafb]" /> },
    { name: "Angular", path: "/technologies/angular", icon: <FaAngular className="text-2xl text-[#dd0031]" /> },
    { name: "Vue.js", path: "/technologies/vuejs", icon: <FaVuejs className="text-2xl text-[#42b883]" /> },
    { name: "Next.js", path: "/technologies/nextjs", icon: <SiNextdotjs className="text-2xl text-black" /> },
    { name: "TypeScript", path: "/technologies/typescript", icon: <SiTypescript className="text-2xl text-[#3178c6]" /> },
    { name: "HTML5", path: "/technologies/html5", icon: <FaHtml5 className="text-2xl text-[#e34f26]" /> },
    { name: "CSS3", path: "/technologies/css3", icon: <FaCss3Alt className="text-2xl text-[#1572b6]" /> },
    { name: "Tailwind CSS", path: "/technologies/tailwindcss", icon: <SiTailwindcss className="text-2xl text-[#06b6d4]" /> },
    { name: "Bootstrap", path: "/technologies/bootstrap", icon: <FaBootstrap className="text-2xl text-[#7952b3]" /> },
  ];

  const backendTechnologies = [
    { name: "Node.js", path: "/technologies/nodejs", icon: <FaNodeJs className="text-2xl text-[#339933]" /> },
    { name: "Python", path: "/technologies/python", icon: <FaPython className="text-2xl text-[#3776ab]" /> },
    { name: "Java", path: "/technologies/java", icon: <FaJava className="text-2xl text-[#007396]" /> },
    { name: ".NET", path: "/technologies/dotnet", icon: <FaCode className="text-2xl text-[#512bd4]" /> },
    // { name: "PHP", path: "/technologies/php", icon: <FaPhp className="text-2xl text-[#777bb4]" /> },
    // { name: "Laravel", path: "/technologies/laravel", icon: <FaLaravel className="text-2xl text-[#ff2d20]" /> },
    { name: "WordPress", path: "/technologies/wordpress", icon: <FaWordpress className="text-2xl text-[#21759b]" /> },
  ];

  const mobileTechnologies = [
    { name: "React Native", path: "/technologies/react-native", icon: <FaReact className="text-2xl text-[#61dafb]" /> },
    { name: "Flutter", path: "/technologies/flutter", icon: <SiFlutter className="text-2xl text-[#02569b]" /> },
    { name: "Kotlin", path: "/technologies/kotlin", icon: <SiKotlin className="text-2xl text-[#7f52ff]" /> },
    { name: "Swift", path: "/technologies/swift", icon: <SiSwift className="text-2xl text-[#fa7343]" /> },
  ];

  const databaseTechnologies = [
    { name: "MongoDB", path: "/technologies/mongodb", icon: <SiMongodb className="text-2xl text-[#47a248]" /> },
    { name: "MySQL", path: "/technologies/mysql", icon: <SiMysql className="text-2xl text-[#4479a1]" /> },
    { name: "PostgreSQL", path: "/technologies/postgresql", icon: <SiPostgresql className="text-2xl text-[#336791]" /> },
    { name: "Firebase", path: "/technologies/firebase", icon: <SiFirebase className="text-2xl text-[#ffca28]" /> },
    { name: "Indexed Database API", path: "/technologies/indexeddb", icon: <FaDatabase className="text-2xl text-[#2980b9]" /> },
    { name: "Azure CosmosDB", path: "/technologies/azure-cosmosdb", icon: <FaDatabase className="text-2xl text-[#0078d4]" /> },
    { name: "Amazon DynamoDB", path: "/technologies/amazon-dynamodb", icon: <SiAmazondynamodb className="text-2xl text-[#ff9900]" /> },
    { name: "Ms SQL", path: "/technologies/mssql", icon: <FaDatabase className="text-2xl text-[#cc2927]" /> },
  ];

  const otherTechnologies = [
    { name: "AWS", path: "/technologies/aws", icon: <FaAws className="text-2xl text-[#ff9900]" /> },
    { name: "Azure", path: "/technologies/azure", icon: <FaCloud className="text-2xl text-[#0078d4]" /> },
    { name: "IBM Cloud", path: "/technologies/ibm-cloud", icon: <FaCloud className="text-2xl text-[#1261fe]" /> },
    { name: "Google Cloud Platform", path: "/technologies/google-cloud", icon: <FaGoogle className="text-2xl text-[#4285f4]" /> },
    // { name: "Figma", path: "/technologies/figma", icon: <FaFigma className="text-2xl text-[#f24e1e]" /> },
  ];

  // Third Party Integration Data
  const thirdPartyIntegration = [
    { name: "Telerik", path: "/technologies/telerik", icon: <FaCogs className="text-2xl text-[#512bd4]" /> },
    { name: "QuickBooks/Xero", path: "/technologies/quickbooks-xero", icon: <FaChartBar className="text-2xl text-[#2ca01c]" /> },
    { name: "Twilio & Plivo", path: "/technologies/twilio-plivo", icon: <FaPhone className="text-2xl text-[#f22f46]" /> },
    { name: "DevExpress", path: "/technologies/devexpress", icon: <FaChartPie className="text-2xl text-[#00d084]" /> },
    { name: "SyncFusion", path: "/technologies/syncfusion", icon: <FaChartArea className="text-2xl text-[#ff6b35]" /> },
    { name: "MudBlazor", path: "/technologies/mudblazor", icon: <FaPalette className="text-2xl text-[#5a45ff]" /> },
    { name: "Stripe/PayPal/Cardknox", path: "/technologies/stripe-paypal", icon: <FaCreditCard className="text-2xl text-[#6772e5]" /> },
    { name: "Google APIs", path: "/technologies/google-api", icon: <FaGoogle className="text-2xl text-[#4285f4]" /> },
    { name: "Highcharts & ECharts", path: "/technologies/highcharts", icon: <FaChartLine className="text-2xl text-[#f05b4f]" /> },
    { name: "Yahoo/Quandl/Alpha Vantage", path: "/technologies/yahoo-finance", icon: <FaChartBar className="text-2xl text-[#7b1fa2]" /> },
    { name: "Zoom", path: "/technologies/zoom", icon: <FaVideo className="text-2xl text-[#2d8cff]" /> },
    { name: "Power BI", path: "/technologies/powerbi", icon: <FaChartBar className="text-2xl text-[#f2c811]" /> },
    { name: "Material UI", path: "/technologies/material-ui", icon: <FaPalette className="text-2xl text-[#1976d2]" /> },
    { name: "PrimeNG", path: "/technologies/primeng", icon: <FaCode className="text-2xl text-[#dd0031]" /> },
    { name: "Radzen", path: "/technologies/radzen", icon: <FaPalette className="text-2xl text-[#009688]" /> },
    { name: "CKEditor", path: "/technologies/ckeditor", icon: <FaEdit className="text-2xl text-[#0288d1]" /> },
    { name: "EasyPost", path: "/technologies/easypost", icon: <FaTruck className="text-2xl text-[#ff6b35]" /> },
    { name: "Kit Builder", path: "/technologies/kit-builder", icon: <FaCogs className="text-2xl text-[#9c27b0]" /> },
  ];

  // Verticals/Industries Data
  const verticals = [
    { name: "Healthcare", path: "/verticals/healthcare", icon: <FaHeartbeat className="text-2xl text-[#e74c3c]" /> },
    { name: "Fintech", path: "/verticals/fintech", icon: <FaWallet className="text-2xl text-[#2ecc71]" /> },
    { name: "Event Management", path: "/verticals/event-management", icon: <FaCalendarAlt className="text-2xl text-[#9b59b6]" /> },
    { name: "Marketplace", path: "/verticals/marketplace", icon: <FaShoppingCart className="text-2xl text-[#e67e22]" /> },
    { name: "Compliance", path: "/verticals/compliance", icon: <FaShieldAlt className="text-2xl text-[#34495e]" /> },
    { name: "CRM", path: "/verticals/crm", icon: <FaBoxes className="text-2xl text-[#3498db]" /> },
    { name: "Logistics & Transport", path: "/verticals/logistics-transport", icon: <FaTruck className="text-2xl text-[#f39c12]" /> },
    { name: "Real Estate", path: "/verticals/real-estate", icon: <FaHome className="text-2xl text-[#16a085]" /> },
    { name: "ERP", path: "/verticals/erp", icon: <FaMicrochip className="text-2xl text-[#8e44ad]" /> },
    { name: "Ed-Tech", path: "/verticals/ed-tech", icon: <FaGraduationCap className="text-2xl text-[#2980b9]" /> },
    { name: "Automotive", path: "/verticals/automotive", icon: <FaCar className="text-2xl text-[#c0392b]" /> },
    { name: "Fundraising Management", path: "/verticals/fundraising-management", icon: <FaDonate className="text-2xl text-[#27ae60]" /> },
    { name: "Travel & Tourism", path: "/verticals/travel-tourism", icon: <FaPlane className="text-2xl text-[#1abc9c]" /> },
    { name: "Workflow Management", path: "/verticals/workflow-management", icon: <FaTasks className="text-2xl text-[#d35400]" /> },
    { name: "Fitness", path: "/verticals/fitness", icon: <FaDumbbell className="text-2xl text-[#e74c3c]" /> },
    { name: "Sports Management", path: "/verticals/sports-management", icon: <FaFootballBall className="text-2xl text-[#27ae60]" /> },
    { name: "SaaS", path: "/verticals/saas", icon: <FaServer className="text-2xl text-[#3498db]" /> },
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

        {/* Desktop Mega Menu: also listens for mouse enter/leave so it doesn't close when moving pointer */}
        <div
          className={`absolute left-1/2 -translate-x-[30%] bg-white shadow-2xl w-[95vw] max-w-[1400px] z-50 transition-all duration-200 ease-in-out hidden md:block rounded-lg border border-gray-200 ${
            servicesOpen ? "opacity-100 translate-y-2 visible" : "opacity-0 invisible -translate-y-1"
          }`}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <div className="grid grid-cols-3 gap-6 p-6">
            {/* IT Services Column 1 */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#fb9c24]">
                IT Services
              </h3>
              <ul className="space-y-2">
                {itServices.slice(0, 7).map((service, i) => (
                  <Link
                    key={i}
                    to={service.path}
                    onClick={() => {
                      setActiveTab("services");
                      setShow(false);
                      setServicesOpen(false);
                    }}
                  >
                    <li className="flex items-center gap-3 px-3 py-3 hover:bg-orange-50 rounded-lg transition-all duration-200 group cursor-pointer">
                      <div className="flex-shrink-0">
                        {service.icon}
                      </div>
                      <span className="text-gray-700 group-hover:text-[#fb9c24] font-medium text-sm">
                        {service.name}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* IT Services Column 2 */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#fb9c24] opacity-0">
                IT Services
              </h3>
              <ul className="space-y-2">
                {itServices.slice(7).map((service, i) => (
                  <Link
                    key={i}
                    to={service.path}
                    onClick={() => {
                      setActiveTab("services");
                      setShow(false);
                      setServicesOpen(false);
                    }}
                  >
                    <li className="flex items-center gap-3 px-3 py-3 hover:bg-orange-50 rounded-lg transition-all duration-200 group cursor-pointer">
                      <div className="flex-shrink-0">
                        {service.icon}
                      </div>
                      <span className="text-gray-700 group-hover:text-[#fb9c24] font-medium text-sm">
                        {service.name}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Digital Services Column */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#fb9c24]">
                Digital Services
              </h3>
              <ul className="space-y-2">
                {digitalServices.map((service, i) => (
                  <Link
                    key={i}
                    to={service.path}
                    onClick={() => {
                      setActiveTab("services");
                      setShow(false);
                      setServicesOpen(false);
                    }}
                  >
                    <li className="flex items-center gap-3 px-3 py-3 hover:bg-orange-50 rounded-lg transition-all duration-200 group cursor-pointer">
                      <div className="flex-shrink-0">
                        {service.icon}
                      </div>
                      <span className="text-gray-700 group-hover:text-[#fb9c24] font-medium text-sm">
                        {service.name}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {servicesOpen && (
          <div className="md:hidden mt-2 pl-4">
            <div className="mb-4">
              <h4 className="font-bold text-[#fb9c24] mb-2">IT Services</h4>
              {itServices.map((service, i) => (
                <Link
                  key={i}
                  to={service.path}
                  onClick={() => {
                    setActiveTab("services");
                    setShow(false);
                    setServicesOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2 py-2 border-b hover:text-[#fb9c24]">
                    {service.icon}
                    <span className="text-sm">{service.name}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div>
              <h4 className="font-bold text-[#fb9c24] mb-2">Digital Services</h4>
              {digitalServices.map((service, i) => (
                <Link
                  key={i}
                  to={service.path}
                  onClick={() => {
                    setActiveTab("services");
                    setShow(false);
                    setServicesOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2 py-2 border-b hover:text-[#fb9c24]">
                    {service.icon}
                    <span className="text-sm">{service.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Technologies Mega Menu */}
      <div
        className="relative"
        onMouseEnter={() => setTechnologiesOpen(true)}
        onMouseLeave={() => setTechnologiesOpen(false)}
      >
        <div className="flex items-center justify-between cursor-pointer max-lg:w-[120px] max-lg:mb-4 max-md:mb-0">
          <span
            onClick={() => handleTabClick("technologies")}
            className={`flex items-center gap-1 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24] ${
              activeTab === "technologies"
                ? "underline underline-offset-8 decoration-2 decoration-[#fb9c24]"
                : ""
            }`}
          >
            Technologies
            <IoIosArrowDown className="hidden md:inline" />
          </span>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-xl"
            onClick={() => setTechnologiesOpen((t) => !t)}
          >
            {technologiesOpen ? "-" : "+"}
          </button>
        </div>

        {/* Desktop Mega Menu for Technologies */}
        <div
          className={`absolute left-1/2 -translate-x-[40%] bg-white shadow-2xl w-[95vw] max-w-[1400px] z-50 transition-all duration-200 ease-in-out hidden md:block rounded-lg border border-gray-200 ${
            technologiesOpen ? "opacity-100 translate-y-2 visible" : "opacity-0 invisible -translate-y-1"
          }`}
          onMouseEnter={() => setTechnologiesOpen(true)}
          onMouseLeave={() => setTechnologiesOpen(false)}
        >
          <div className="grid grid-cols-6 gap-6 p-8">
            {/* Frontend Technologies Column */}
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#fb9c24]">
                Frontend Technologies
              </h3>
              <ul className="space-y-2">
                {frontendTechnologies.map((tech, i) => (
                  <li key={i}>
                    <Link 
                      to={tech.path}
                      className="flex items-center gap-3 px-2 py-2 hover:bg-orange-50 rounded-lg transition-all duration-200 group cursor-pointer"
                      onClick={() => setTechnologiesOpen(false)}
                    >
                      <div className="flex-shrink-0">
                        {tech.icon}
                      </div>
                      <span className="text-gray-700 group-hover:text-[#fb9c24] font-medium text-sm">
                        {tech.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend Technologies Column */}
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#fb9c24]">
                Backend Technologies
              </h3>
              <ul className="space-y-2">
                {backendTechnologies.map((tech, i) => (
                  <li key={i}>
                    <Link 
                      to={tech.path}
                      className="flex items-center gap-3 px-2 py-2 hover:bg-orange-50 rounded-lg transition-all duration-200 group cursor-pointer"
                      onClick={() => setTechnologiesOpen(false)}
                    >
                      <div className="flex-shrink-0">
                        {tech.icon}
                      </div>
                      <span className="text-gray-700 group-hover:text-[#fb9c24] font-medium text-sm">
                        {tech.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Mobile Technologies Section */}
              <h3 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#fb9c24] mt-6">
                Mobile Technologies
              </h3>
              <ul className="space-y-2">
                {mobileTechnologies.map((tech, i) => (
                  <li key={i}>
                    <Link 
                      to={tech.path}
                      className="flex items-center gap-3 px-2 py-2 hover:bg-orange-50 rounded-lg transition-all duration-200 group cursor-pointer"
                      onClick={() => setTechnologiesOpen(false)}
                    >
                      <div className="flex-shrink-0">
                        {tech.icon}
                      </div>
                      <span className="text-gray-700 group-hover:text-[#fb9c24] font-medium text-sm">
                        {tech.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Database Column */}
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#fb9c24]">
                Database
              </h3>
              <ul className="space-y-2">
                {databaseTechnologies.map((tech, i) => (
                  <li key={i}>
                    <Link 
                      to={tech.path}
                      className="flex items-center gap-3 px-2 py-2 hover:bg-orange-50 rounded-lg transition-all duration-200 group cursor-pointer"
                      onClick={() => setTechnologiesOpen(false)}
                    >
                      <div className="flex-shrink-0">
                        {tech.icon}
                      </div>
                      <span className="text-gray-700 group-hover:text-[#fb9c24] font-medium text-sm">
                        {tech.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cloud Services Column */}
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#fb9c24]">
                Cloud Services
              </h3>
              <ul className="space-y-2">
                {otherTechnologies.map((tech, i) => (
                  <li key={i}>
                    <Link 
                      to={tech.path}
                      className="flex items-center gap-3 px-2 py-2 hover:bg-orange-50 rounded-lg transition-all duration-200 group cursor-pointer"
                      onClick={() => setTechnologiesOpen(false)}
                    >
                      <div className="flex-shrink-0">
                        {tech.icon}
                      </div>
                      <span className="text-gray-700 group-hover:text-[#fb9c24] font-medium text-sm">
                        {tech.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Third Party Integration Column 1 */}
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#fb9c24]">
                Third Party Integration
              </h3>
              <ul className="space-y-2">
                {thirdPartyIntegration.slice(0, 9).map((tech, i) => (
                  <li key={i}>
                    <Link 
                      to={tech.path}
                      className="flex items-center gap-3 px-2 py-2 hover:bg-orange-50 rounded-lg transition-all duration-200 group cursor-pointer"
                      onClick={() => setTechnologiesOpen(false)}
                    >
                      <div className="flex-shrink-0">
                        {tech.icon}
                      </div>
                      <span className="text-gray-700 group-hover:text-[#fb9c24] font-medium text-sm">
                        {tech.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Third Party Integration Column 2 */}
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#fb9c24] opacity-0">
                Third Party Integration
              </h3>
              <ul className="space-y-2">
                {thirdPartyIntegration.slice(9).map((tech, i) => (
                  <li key={i}>
                    <Link 
                      to={tech.path}
                      className="flex items-center gap-3 px-2 py-2 hover:bg-orange-50 rounded-lg transition-all duration-200 group cursor-pointer"
                      onClick={() => setTechnologiesOpen(false)}
                    >
                      <div className="flex-shrink-0">
                        {tech.icon}
                      </div>
                      <span className="text-gray-700 group-hover:text-[#fb9c24] font-medium text-sm">
                        {tech.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown for Technologies */}
        {technologiesOpen && (
          <div className="md:hidden mt-2 pl-4 max-h-96 overflow-y-auto">
            <div className="mb-4">
              <h4 className="font-bold text-[#fb9c24] mb-2 text-sm">Frontend Technologies</h4>
              {frontendTechnologies.map((tech, i) => (
                <Link 
                  key={i} 
                  to={tech.path}
                  className="flex items-center gap-2 py-2 border-b hover:text-[#fb9c24]"
                  onClick={() => setTechnologiesOpen(false)}
                >
                  {tech.icon}
                  <span className="text-xs">{tech.name}</span>
                </Link>
              ))}
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-[#fb9c24] mb-2 text-sm">Backend Technologies</h4>
              {backendTechnologies.map((tech, i) => (
                <Link 
                  key={i} 
                  to={tech.path}
                  className="flex items-center gap-2 py-2 border-b hover:text-[#fb9c24]"
                  onClick={() => setTechnologiesOpen(false)}
                >
                  {tech.icon}
                  <span className="text-xs">{tech.name}</span>
                </Link>
              ))}
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-[#fb9c24] mb-2 text-sm">Mobile Technologies</h4>
              {mobileTechnologies.map((tech, i) => (
                <Link 
                  key={i} 
                  to={tech.path}
                  className="flex items-center gap-2 py-2 border-b hover:text-[#fb9c24]"
                  onClick={() => setTechnologiesOpen(false)}
                >
                  {tech.icon}
                  <span className="text-xs">{tech.name}</span>
                </Link>
              ))}
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-[#fb9c24] mb-2 text-sm">Database</h4>
              {databaseTechnologies.map((tech, i) => (
                <Link 
                  key={i} 
                  to={tech.path}
                  className="flex items-center gap-2 py-2 border-b hover:text-[#fb9c24]"
                  onClick={() => setTechnologiesOpen(false)}
                >
                  {tech.icon}
                  <span className="text-xs">{tech.name}</span>
                </Link>
              ))}
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-[#fb9c24] mb-2 text-sm">Third Party Integration</h4>
              {thirdPartyIntegration.map((tech, i) => (
                <Link 
                  key={i} 
                  to={tech.path}
                  className="flex items-center gap-2 py-2 border-b hover:text-[#fb9c24]"
                  onClick={() => setTechnologiesOpen(false)}
                >
                  {tech.icon}
                  <span className="text-xs">{tech.name}</span>
                </Link>
              ))}
            </div>
            <div>
              <h4 className="font-bold text-[#fb9c24] mb-2 text-sm">Others</h4>
              {otherTechnologies.map((tech, i) => (
                <Link 
                  key={i} 
                  to={tech.path}
                  className="flex items-center gap-2 py-2 border-b hover:text-[#fb9c24]"
                  onClick={() => setTechnologiesOpen(false)}
                >
                  {tech.icon}
                  <span className="text-xs">{tech.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Verticals Mega Menu */}
      <div
        className="relative"
        onMouseEnter={() => setVerticalsOpen(true)}
        onMouseLeave={() => setVerticalsOpen(false)}
      >
        <div className="flex items-center justify-between cursor-pointer max-lg:w-[90px] max-lg:mb-4 max-md:mb-0">
          <span
            onClick={() => handleTabClick("verticals")}
            className={`flex items-center gap-1 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24] ${
              activeTab === "verticals"
                ? "underline underline-offset-8 decoration-2 decoration-[#fb9c24]"
                : ""
            }`}
          >
            Verticals
            <IoIosArrowDown className="hidden md:inline" />
          </span>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-xl"
            onClick={() => setVerticalsOpen((v) => !v)}
          >
            {verticalsOpen ? "-" : "+"}
          </button>
        </div>

        {/* Desktop Mega Menu for Verticals */}
        <div
          className={`absolute left-1/2 -translate-x-[50%] bg-white shadow-2xl w-[95vw] max-w-[1400px] z-50 transition-all duration-200 ease-in-out hidden md:block rounded-lg border border-gray-200 ${
            verticalsOpen ? "opacity-100 translate-y-2 visible" : "opacity-0 invisible -translate-y-1"
          }`}
          onMouseEnter={() => setVerticalsOpen(true)}
          onMouseLeave={() => setVerticalsOpen(false)}
        >
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#fb9c24] text-center">
              Industry Verticals
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {verticals.map((vertical, i) => (
                <Link
                  key={i}
                  to={vertical.path}
                  onClick={() => {
                    setActiveTab("verticals");
                    setShow(false);
                    setVerticalsOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 rounded-lg transition-all duration-200 group cursor-pointer border border-transparent hover:border-[#fb9c24]">
                    <div className="flex-shrink-0">
                      {vertical.icon}
                    </div>
                    <span className="text-gray-700 group-hover:text-[#fb9c24] font-medium text-sm">
                      {vertical.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Dropdown for Verticals */}
        {verticalsOpen && (
          <div className="md:hidden mt-2 pl-4 max-h-96 overflow-y-auto">
            <h4 className="font-bold text-[#fb9c24] mb-2 text-sm">Industry Verticals</h4>
            {verticals.map((vertical, i) => (
              <Link
                key={i}
                to={vertical.path}
                onClick={() => {
                  setActiveTab("verticals");
                  setShow(false);
                  setVerticalsOpen(false);
                }}
              >
                <div className="flex items-center gap-2 py-2 border-b hover:text-[#fb9c24]">
                  {vertical.icon}
                  <span className="text-xs">{vertical.name}</span>
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
