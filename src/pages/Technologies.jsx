import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { 
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
  FaMobileAlt,
  FaEnvelope,
  FaHeartbeat,
  FaWallet,
  FaCalendarAlt,
  FaShoppingCart,
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
  FaEdit,
  FaCode,
  FaGoogle
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
  SiCkeditor4
} from "react-icons/si";

const Technologies = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      mirror: true,
    });
  }, []);

  const frontendTechnologies = [
    { name: "React.js", path: "/technologies/reactjs", icon: <FaReact className="text-3xl text-[#61dafb]" /> },
    { name: "Angular", path: "/technologies/angular", icon: <FaAngular className="text-3xl text-[#dd0031]" /> },
    { name: "Vue.js", path: "/technologies/vuejs", icon: <FaVuejs className="text-3xl text-[#42b883]" /> },
    { name: "Next.js", path: "/technologies/nextjs", icon: <SiNextdotjs className="text-3xl text-black" /> },
    { name: "TypeScript", path: "/technologies/typescript", icon: <SiTypescript className="text-3xl text-[#3178c6]" /> },
    { name: "HTML5", path: "/technologies/html5", icon: <FaHtml5 className="text-3xl text-[#e34f26]" /> },
    { name: "CSS3", path: "/technologies/css3", icon: <FaCss3Alt className="text-3xl text-[#1572b6]" /> },
    { name: "Tailwind CSS", path: "/technologies/tailwindcss", icon: <SiTailwindcss className="text-3xl text-[#06b6d4]" /> },
    { name: "Bootstrap", path: "/technologies/bootstrap", icon: <FaBootstrap className="text-3xl text-[#7952b3]" /> },
  ];

  const backendTechnologies = [
    { name: "Node.js", path: "/technologies/nodejs", icon: <FaNodeJs className="text-3xl text-[#339933]" /> },
    { name: "Python", path: "/technologies/python", icon: <FaPython className="text-3xl text-[#3776ab]" /> },
    { name: "Java", path: "/technologies/java", icon: <FaJava className="text-3xl text-[#007396]" /> },
    { name: ".NET", path: "/technologies/dotnet", icon: <FaCode className="text-3xl text-[#512bd4]" /> },
    // { name: "PHP", path: "/technologies/php", icon: <FaPhp className="text-3xl text-[#777bb4]" /> },
    // { name: "Laravel", path: "/technologies/laravel", icon: <FaLaravel className="text-3xl text-[#ff2d20]" /> },
    { name: "WordPress", path: "/technologies/wordpress", icon: <FaWordpress className="text-3xl text-[#21759b]" /> },
  ];

  const mobileTechnologies = [
    { name: "React Native", path: "/technologies/react-native", icon: <FaReact className="text-3xl text-[#61dafb]" /> },
    { name: "Flutter", path: "/technologies/flutter", icon: <SiFlutter className="text-3xl text-[#02569b]" /> },
    { name: "Kotlin", path: "/technologies/kotlin", icon: <SiKotlin className="text-3xl text-[#7f52ff]" /> },
    { name: "Swift", path: "/technologies/swift", icon: <SiSwift className="text-3xl text-[#fa7343]" /> },
  ];

  const databaseTechnologies = [
    { name: "MongoDB", path: "/technologies/mongodb", icon: <SiMongodb className="text-3xl text-[#47a248]" /> },
    { name: "MySQL", path: "/technologies/mysql", icon: <SiMysql className="text-3xl text-[#4479a1]" /> },
    { name: "PostgreSQL", path: "/technologies/postgresql", icon: <SiPostgresql className="text-3xl text-[#336791]" /> },
    { name: "Firebase", path: "/technologies/firebase", icon: <SiFirebase className="text-3xl text-[#ffca28]" /> },
    { name: "Indexed Database API", path: "/technologies/indexeddb", icon: <FaDatabase className="text-3xl text-[#2980b9]" /> },
    { name: "Azure CosmosDB", path: "/technologies/azure-cosmosdb", icon: <FaDatabase className="text-3xl text-[#0078d4]" /> },
    { name: "Amazon DynamoDB", path: "/technologies/amazon-dynamodb", icon: <SiAmazondynamodb className="text-3xl text-[#ff9900]" /> },
    { name: "Ms SQL", path: "/technologies/mssql", icon: <FaDatabase className="text-3xl text-[#cc2927]" /> },
    { name: "Hostinger", path: "/technologies/hostinger", icon: <img src="/hostinger.svg" alt="Hostinger" className="w-6 h-6" /> },
  ];

  const otherTechnologies = [
    { name: "AWS", path: "/technologies/aws", icon: <FaAws className="text-3xl text-[#ff9900]" /> },
    { name: "Azure", path: "/technologies/azure", icon: <FaCloud className="text-3xl text-[#0078d4]" /> },
    { name: "IBM Cloud", path: "/technologies/ibm-cloud", icon: <FaCloud className="text-3xl text-[#1261fe]" /> },
    { name: "Google Cloud Platform", path: "/technologies/google-cloud", icon: <FaGoogle className="text-3xl text-[#4285f4]" /> },
    { name: "Figma", path: "/technologies/figma", icon: <FaFigma className="text-3xl text-[#f24e1e]" /> },
  ];

  const thirdPartyIntegration = [
    { name: "Telerik", path: "/technologies/telerik", icon: <FaCogs className="text-3xl text-[#512bd4]" /> },
    { name: "QuickBooks/Xero", path: "/technologies/quickbooks-xero", icon: <FaChartBar className="text-3xl text-[#2ca01c]" /> },
    { name: "Twilio & Plivo", path: "/technologies/twilio-plivo", icon: <FaPhone className="text-3xl text-[#f22f46]" /> },
    { name: "DevExpress", path: "/technologies/devexpress", icon: <FaChartPie className="text-3xl text-[#00d084]" /> },
    { name: "SyncFusion", path: "/technologies/syncfusion", icon: <FaChartArea className="text-3xl text-[#ff6b35]" /> },
    { name: "MudBlazor", path: "/technologies/mudblazor", icon: <FaPalette className="text-3xl text-[#5a45ff]" /> },
    { name: "Stripe/PayPal/Cardknox", path: "/technologies/stripe-paypal", icon: <FaCreditCard className="text-3xl text-[#6772e5]" /> },
    { name: "Google APIs", path: "/technologies/google-api", icon: <FaGoogle className="text-3xl text-[#4285f4]" /> },
    { name: "Highcharts & ECharts", path: "/technologies/highcharts", icon: <FaChartLine className="text-3xl text-[#f05b4f]" /> },
    { name: "Yahoo/Quandl/Alpha Vantage", path: "/technologies/yahoo-finance", icon: <FaChartBar className="text-3xl text-[#7b1fa2]" /> },
    { name: "Zoom", path: "/technologies/zoom", icon: <FaVideo className="text-3xl text-[#2d8cff]" /> },
    { name: "Power BI", path: "/technologies/powerbi", icon: <FaChartBar className="text-3xl text-[#f2c811]" /> },
    { name: "Material UI", path: "/technologies/material-ui", icon: <FaPalette className="text-3xl text-[#1976d2]" /> },
    { name: "PrimeNG", path: "/technologies/primeng", icon: <FaCode className="text-3xl text-[#dd0031]" /> },
    { name: "Radzen", path: "/technologies/radzen", icon: <FaPalette className="text-3xl text-[#009688]" /> },
    { name: "CKEditor", path: "/technologies/ckeditor", icon: <FaEdit className="text-3xl text-[#0288d1]" /> },
    { name: "EasyPost", path: "/technologies/easypost", icon: <FaTruck className="text-3xl text-[#ff6b35]" /> },
    { name: "Kit Builder", path: "/technologies/kit-builder", icon: <FaCogs className="text-3xl text-[#9c27b0]" /> },
    { name: "Shopify", path: "/technologies/shopify", icon: <img src="/shopify-removebg-preview.png" alt="Shopify" className="w-6 h-6" /> },
    { name: "DaisyUI", path: "/technologies/daisyui", icon: <img src="/daisy-removebg-preview.png" alt="DaisyUI" className="w-6 h-6" /> },
  ];

  return (
    <>
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden pt-[80px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right" data-aos-once="false">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Our<br />
                <span className="text-[#fb9c24]">Technologies</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We leverage the latest and most powerful technologies to build innovative, scalable, and high-performance solutions. 
                From frontend frameworks to backend systems, databases, and cloud platforms, we have expertise across the entire technology stack.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <button className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fb9c24] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Contact Us
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="bg-gradient-to-r from-[#ff8c00] to-[#fb9c24] hover:from-[#fb9c24] hover:to-[#ff8c00] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div data-aos="fade-left" data-aos-once="false" className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
                {/* Animated Technologies Illustration */}
                <div className="relative">
                  {/* Main Screen */}
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-700 rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-all animate-float">
                    <div className="space-y-4">
                      {/* Tech blocks */}
                      <div className="flex gap-3">
                        <div className="w-16 h-3 bg-cyan-300 rounded animate-pulse"></div>
                        <div className="w-24 h-3 bg-purple-300 rounded animate-pulse delay-100"></div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-20 h-3 bg-pink-300 rounded animate-pulse delay-200"></div>
                        <div className="w-16 h-3 bg-yellow-300 rounded animate-pulse"></div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-24 h-3 bg-green-300 rounded animate-pulse delay-100"></div>
                        <div className="w-20 h-3 bg-blue-300 rounded animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-8 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaReact className="text-3xl text-blue-600" />
                  </div>
                  <div className="absolute -top-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaNodeJs className="text-3xl text-green-600" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <SiMongodb className="text-3xl text-green-500" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaAws className="text-3xl text-orange-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frontend Technologies Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-once="false"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frontend <span className="text-[#fb9c24]">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-[#fb9c24] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendTechnologies.map((tech, index) => (
              <Link 
                key={index}
                to={tech.path}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#fb9c24] transform hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#fb9c24] transition-all duration-300">
                      <div className="group-hover:text-white transition-colors duration-300">
                        {tech.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#fb9c24] transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-[#fb9c24] font-semibold group-hover:underline">
                      Learn More
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Backend Technologies Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-once="false"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Backend <span className="text-[#fb9c24]">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-[#fb9c24] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {backendTechnologies.map((tech, index) => (
              <Link 
                key={index}
                to={tech.path}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#fb9c24] transform hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#fb9c24] transition-all duration-300">
                      <div className="group-hover:text-white transition-colors duration-300">
                        {tech.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#fb9c24] transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-[#fb9c24] font-semibold group-hover:underline">
                      Learn More
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Technologies Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-once="false"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mobile <span className="text-[#fb9c24]">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-[#fb9c24] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mobileTechnologies.map((tech, index) => (
              <Link 
                key={index}
                to={tech.path}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#fb9c24] transform hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#fb9c24] transition-all duration-300">
                      <div className="group-hover:text-white transition-colors duration-300">
                        {tech.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#fb9c24] transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-[#fb9c24] font-semibold group-hover:underline">
                      Learn More
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Database Technologies Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-once="false"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Database <span className="text-[#fb9c24]">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-[#fb9c24] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {databaseTechnologies.map((tech, index) => (
              <Link 
                key={index}
                to={tech.path}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#fb9c24] transform hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#fb9c24] transition-all duration-300">
                      <div className="group-hover:text-white transition-colors duration-300">
                        {tech.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#fb9c24] transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-[#fb9c24] font-semibold group-hover:underline">
                      Learn More
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Cloud & Other Technologies Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-once="false"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cloud & Other <span className="text-[#fb9c24]">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-[#fb9c24] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherTechnologies.map((tech, index) => (
              <Link 
                key={index}
                to={tech.path}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#fb9c24] transform hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#fb9c24] transition-all duration-300">
                      <div className="group-hover:text-white transition-colors duration-300">
                        {tech.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#fb9c24] transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-[#fb9c24] font-semibold group-hover:underline">
                      Learn More
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Third Party Integration Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-once="false"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Third Party <span className="text-[#fb9c24]">Integrations</span>
            </h2>
            <div className="w-24 h-1 bg-[#fb9c24] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {thirdPartyIntegration.map((tech, index) => (
              <Link 
                key={index}
                to={tech.path}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#fb9c24] transform hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#fb9c24] transition-all duration-300">
                      <div className="group-hover:text-white transition-colors duration-300">
                        {tech.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#fb9c24] transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-[#fb9c24] font-semibold group-hover:underline">
                      Learn More
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-[#fb9c24] to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            data-aos="fade-up"
            data-aos-once="false"
          >
            Ready to Leverage Advanced Technologies?
          </h2>
          <p 
            className="text-xl text-white mb-10 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="false"
          >
            Let's discuss how our technology expertise can help you build innovative solutions and drive business growth.
          </p>
          <Link to="/contact">
            <button 
              className="group relative inline-flex items-center px-8 py-4 bg-white text-[#fb9c24] font-bold text-xl rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="false"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Today
                <svg 
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-[#fb9c24] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </Link>
        </div>
      </div>
    </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </>
  );
};

export default Technologies;