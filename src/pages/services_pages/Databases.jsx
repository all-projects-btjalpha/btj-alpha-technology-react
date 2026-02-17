import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
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
      description: "Seamlessly integrate databases with your applications, ensuring smooth data flow and real-time synchronization across all your systems and platforms."
    },
    {
      icon: <FaServer className="text-5xl text-green-600" />,
      title: "Database Migration",
      description: "Migrate your databases from legacy systems to modern platforms without data loss. We handle everything from planning to execution with minimal downtime."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-orange-600" />,
      title: "Database Management and Support",
      description: "24/7 database management and support services including monitoring, maintenance, performance tuning, and troubleshooting to keep your databases running smoothly."
    },
    {
      icon: <FaCogs className="text-5xl text-purple-600" />,
      title: "Database Monitoring and Management",
      description: "Real-time database performance monitoring and management tools that provide insights into query performance, resource utilization, and potential bottlenecks."
    },
    {
      icon: <FaChartBar className="text-5xl text-cyan-600" />,
      title: "Data Analytics and Reporting",
      description: "Transform your raw data into actionable insights with advanced analytics and custom reporting solutions that help drive business decisions."
    }
  ];

  const databaseTechnologies = [
    {
      name: "MySQL",
      icon: <SiMysql className="text-6xl" />,
      color: "#4479A1",
      description: "The world's most popular open-source relational database management system, known for reliability and ease of use."
    },
    {
      name: "MS SQL",
      icon: <FaDatabase className="text-6xl" />,
      color: "#CC2927",
      description: "Microsoft's enterprise-grade relational database with powerful features for mission-critical applications."
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-6xl" />,
      color: "#336791",
      description: "Advanced open-source database with support for complex queries, JSON data, and enterprise-level features."
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-6xl" />,
      color: "#47A248",
      description: "Leading NoSQL document database offering flexibility, scalability, and performance for modern applications."
    },
    {
      name: "Redis",
      icon: <SiRedis className="text-6xl" />,
      color: "#DC382D",
      description: "In-memory data structure store used as database, cache, and message broker for high-performance applications."
    },
    {
      name: "Amazon DynamoDB",
      icon: <SiAmazon className="text-6xl" />,
      color: "#FF9900",
      description: "Fully managed NoSQL database service by AWS that provides fast and predictable performance with seamless scalability."
    },
    {
      name: "Azure CosmosDB",
      icon: <FaCloud className="text-6xl" />,
      color: "#0078D4",
      description: "Microsoft's globally distributed, multi-model database service for building highly responsive applications."
    },
    {
      name: "Google Firebase",
      icon: <SiGooglecloud className="text-6xl" />,
      color: "#FFCA28",
      description: "Google's real-time NoSQL cloud database that syncs data across all clients in real-time."
    },
    {
      name: "Elastic Search",
      icon: <FaSearch className="text-6xl" />,
      color: "#005571",
      description: "Distributed search and analytics engine for all types of data, including textual, numerical, and geospatial."
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
      question: "What is Database Integration?",
      answer: "Database integration is the process of combining data from multiple database sources into a unified view. It enables different applications and systems to share and access data seamlessly, ensuring data consistency and enabling real-time data synchronization across your organization."
    },
    {
      question: "Why do I Need Database Management Service?",
      answer: "Database management services ensure your databases run optimally, securely, and reliably. Professional management includes regular maintenance, performance monitoring, security updates, backup management, and troubleshooting, which helps prevent downtime, data loss, and performance issues."
    },
    {
      question: "How can you Migrate Data Services?",
      answer: "We follow a structured migration process: 1) Assessment of current database, 2) Planning migration strategy, 3) Data mapping and transformation, 4) Testing in staging environment, 5) Executing migration with minimal downtime, 6) Post-migration validation and optimization. We ensure zero data loss and maintain data integrity throughout."
    },
    {
      question: "Can you Help with Database Data Security?",
      answer: "Yes, we implement comprehensive database security measures including encryption at rest and in transit, access controls and user permissions, regular security audits, SQL injection prevention, backup encryption, compliance with regulations (GDPR, HIPAA), and monitoring for suspicious activities."
    },
    {
      question: "What Database Technologies do you Support?",
      answer: "We support a wide range of database technologies including SQL databases (MySQL, PostgreSQL, MS SQL Server, Oracle), NoSQL databases (MongoDB, Redis, Cassandra), Cloud databases (AWS RDS, Azure SQL, Google Cloud SQL), and specialized databases like Elasticsearch for search and analytics."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Database<br />
                Management &<br />
                Integration Services
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Step2gen offers comprehensive database management and integration services to optimize, secure and integrate your database systems. With our expertise in both SQL and NoSQL databases, we provide scalable solutions that grow with your business needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openForm}
                  className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fb9c24] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Us
                </button>
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
                Our team of highly-skilled database management specialists offers complete services for designing, implementing, configuring, and managing databases across various platforms such as on-premise, cloud, and hybrid environments.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We provide tailored database solutions that match your specific business needs whether you need transactional databases, analytical databases, or both. Our experts work closely with you to understand your data requirements and build robust, high-performance database infrastructures.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From database design and optimization to migration and ongoing management, we ensure your databases are secure, scalable, and performing at their best to support your business operations efficiently.
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
      <section className="py-16 px-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] relative overflow-hidden">
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

      {/* Popup Form */}
      {isPopupOpen && <UserForm onClose={closeForm} />}

      <style jsx>{`
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
}

export default Databases;
