import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { 
  FaDatabase, FaServer, FaChartBar, FaShieldAlt, FaBolt, FaSync,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaCogs, FaCloud,
  FaLock, FaCode, FaSearch, FaTachometerAlt, FaClipboardCheck
} from "react-icons/fa";
import { SiMysql, SiPostgresql, SiMongodb, SiRedis, SiAmazon, SiGooglecloud } from "react-icons/si";

function Databases() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const databaseServices = [
    {
      icon: <FaDatabase className="text-5xl text-blue-600" />,
      title: "Database Integration",
      description: "Seamlessly connect your databases with websites, applications, and third-party systems. We ensure smooth data flow and real-time synchronization across all platforms."
    },
    {
      icon: <FaServer className="text-5xl text-green-600" />,
      title: "Database Migration",
      description: "Move your databases from legacy systems to modern platforms without data loss. From planning to final execution, we handle the entire process with minimal downtime."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-orange-600" />,
      title: "Database Management and Support",
      description: "Get 24/7 database management and support services, including monitoring, maintenance, performance tuning, and troubleshooting to keep your systems running smoothly."
    },
    {
      icon: <FaCogs className="text-5xl text-purple-600" />,
      title: "Database Monitoring and Management",
      description: "Real-time performance monitoring tools help identify query issues, resource usage, and potential bottlenecks. We optimize your database to ensure maximum efficiency."
    },
    {
      icon: <FaChartBar className="text-5xl text-cyan-600" />,
      title: "Data Analytics and Reporting",
      description: "Turn your raw data into meaningful insights. Our advanced analytics and custom reporting solutions help you make smarter business decisions."
    }
  ];

  const databaseTechnologies = [
    {
      name: "MySQL",
      icon: <SiMysql className="text-6xl" />,
      color: "#4479A1",
      description: "One of the world’s most popular open-source relational database systems. It is known for reliability, stability, and ease of use, making it ideal for web applications and business systems."
    },
    {
      name: "MS SQL",
      icon: <FaDatabase className="text-6xl" />,
      color: "#CC2927",
      description: "Microsoft’s enterprise-grade relational database designed for mission-critical applications. It offers strong security, high performance, and advanced data management features."
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-6xl" />,
      color: "#336791",
      description: "An advanced open-source database known for handling complex queries, JSON data, and enterprise-level workloads with excellent performance and flexibility."
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-6xl" />,
      color: "#47A248",
      description: "A leading NoSQL document database that provides flexibility, scalability, and high performance for modern and data-driven applications."
    },
    {
      name: "Redis",
      icon: <SiRedis className="text-6xl" />,
      color: "#DC382D",
      description: "An in-memory data store used as a database, cache, and message broker. It is perfect for high-speed applications that require real-time data processing."
    },
    {
      name: "Amazon DynamoDB",
      icon: <SiAmazon className="text-6xl" />,
      color: "#FF9900",
      description: "A fully managed NoSQL database service by AWS that delivers fast, predictable performance with automatic scalability."
    },
    {
      name: "Azure CosmosDB",
      icon: <FaCloud className="text-6xl" />,
      color: "#0078D4",
      description: "Microsoft’s globally distributed, multi-model database service designed for highly responsive and scalable applications."
    },
    {
      name: "Google Firebase",
      icon: <SiGooglecloud className="text-6xl" />,
      color: "#FFCA28",
      description: "A real-time NoSQL cloud database that synchronizes data across devices instantly, ideal for mobile and web applications."
    },
    {
      name: "Elastic Search",
      icon: <FaSearch className="text-6xl" />,
      color: "#005571",
      description: "A powerful distributed search and analytics engine used for handling large volumes of textual, numerical, and geospatial data."
    }
  ];

  const platformFeatures = [
    {
      icon: <FaCloud className="text-5xl text-blue-500" />,
      title: "Scalable Database Management Solutions Across Different Platforms",
      description: "Our team of highly-skilled database management specialists offers complete services for designing, implementing, configuring, and managing database across various platforms such as on-premise, cloud, and hybrid environments. We provide tailored database solutions that match your specific business needs whether you need transactional databases, analytical databases, or both. Our experts work closely with you to understand your data requirements and build robust, high-performance database infrastructures that grow with your business needs."
    }
  ];

  const faqs = [
    {
      question: "What are Database Management & Integration Services?",
      answer: "Database Management & Integration Services help businesses design, optimize, secure, migrate, and integrate databases to ensure smooth data flow, high performance, and strong security across systems."
    },
    {
      question: "What services do you offer?",
      answer: "At BTJ Alpha Technology, we provide:Database design and configuration,Database integration with applications,Database migration (on-premise to cloud or hybrid),Performance tuning and optimization,24/7 monitoring and support,Data analytics and reporting solutions"
    },
    {
      question: " Do you work with both SQL and NoSQL databases?",
      answer: "Yes. We work with both relational (SQL) and non-relational (NoSQL) databases to deliver scalable and high-performance solutions."
    },
    {
      question: "Which database technologies do you support?",
      answer: "We work with leading database platforms, including: MySQL,Microsoft SQL Server,PostgreSQL,MongoDB,Redis,Amazon DynamoDB,Azure Cosmos DB,Firebase Realtime Database,Elasticsearch"
    },
    {
      question: "Do you provide database migration services?",
      answer: "Yes. We migrate legacy databases to modern platforms or cloud environments with minimal downtime and zero data loss."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right"className="lg:pl-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Database Management & Integration Services
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Step2gen offers comprehensive database management and integration services to optimize, secure and integrate your database systems. With our expertise in both SQL and NoSQL databases, we provide scalable solutions that grow with your business needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <button
                    className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fb9c24] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Us
                  </button>
                </Link>
                <button
                  onClick={openForm}
                  className="bg-gradient-to-r from-[#ff8c00] to-[#fb9c24] hover:from-[#fb9c24] hover:to-[#ff8c00] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Hire Now
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div data-aos="fade-left" className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
                {/* Database Illustration */}
                <div className="relative">
                  {/* Stacked Databases */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all w-64">
                      <div className="flex items-center gap-3">
                        <FaDatabase className="text-3xl text-white" />
                        <div className="flex-1">
                          <div className="h-2 bg-white/30 rounded mb-2"></div>
                          <div className="h-2 bg-white/20 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all w-64">
                      <div className="flex items-center gap-3">
                        <FaServer className="text-3xl text-white" />
                        <div className="flex-1">
                          <div className="h-2 bg-white/30 rounded mb-2"></div>
                          <div className="h-2 bg-white/20 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all w-64">
                      <div className="flex items-center gap-3">
                        <FaShieldAlt className="text-3xl text-white" />
                        <div className="flex-1">
                          <div className="h-2 bg-white/30 rounded mb-2"></div>
                          <div className="h-2 bg-white/20 rounded w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaSync className="text-3xl text-green-600" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaChartBar className="text-3xl text-orange-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scalable Database Management Solutions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Scalable Database Management Solutions Across Different Platforms
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div data-aos="fade-right" className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaDatabase className="text-4xl text-blue-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">SQL Databases</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <SiMongodb className="text-4xl text-green-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">NoSQL</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaCloud className="text-4xl text-cyan-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Cloud DB</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaLock className="text-4xl text-orange-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Secure</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <p className="text-gray-600 leading-relaxed mb-6">
                Our experienced database specialists provide complete services for designing, implementing, configuring, and managing databases across multiple platforms — including on-premise, cloud, and hybrid environments.</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We create customized database solutions based on your business needs. Whether you require transactional databases, analytical databases, or a combination of both, our team works closely with you to understand your data requirements and deliver high-performance systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From database design and optimization to migration and ongoing management, we ensure your databases remain secure, scalable, and efficient to support your daily operations and long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Database Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {databaseServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Database Technologies We Work With */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Database Technologies We Work With
            </h2>
            <p>We work with a wide range of modern database technologies to deliver secure, scalable, and high-performance solutions.</p> 
              <p>Our team selects the right database based on your business needs, application type, and performance requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {databaseTechnologies.map((tech, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-32 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Any Questions Regarding Our Database Management Services?<br />
                Just Drop Us a Line. We Love to Hear from You
              </h2>
            </div>
            <div data-aos="fade-left">
              <button
                onClick={openForm}
                className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <FaChevronUp className="text-[#fb9c24] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 max-md:p-2">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white rounded-full p-2 shadow-md"
            >
              <FaTimes className="text-xl" />
            </button>
            
            <div className="flex flex-col md:flex-row gap-8 p-8 max-md:p-6">
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl max-md:text-2xl font-bold text-gray-900 mb-4">
                  Get A Free Consultation With Our Marketing Expert
                </h2>
                <div className="w-16 h-1 bg-[#fb9c24] rounded-full mb-6"></div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Fill out the form and our marketing expert will get in touch with you shortly to discuss your project requirements.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600 font-bold">1</span>
                    </div>
                    <p className="text-gray-700">Share your project requirements</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600 font-bold">2</span>
                    </div>
                    <p className="text-gray-700">Get a free consultation</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600 font-bold">3</span>
                    </div>
                    <p className="text-gray-700">Receive custom solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
                <UserForm />
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
}

export default Databases;
