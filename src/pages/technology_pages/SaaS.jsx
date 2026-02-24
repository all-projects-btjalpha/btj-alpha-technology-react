import { useState, useEffect } from "react"; // Force reload
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaCloud, FaUsers, FaChartLine, FaMobileAlt, FaLaptop, FaGlobe, FaLock, FaRocket, FaCogs, FaDatabase, FaServer, FaShieldAlt,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaCode, FaSync, FaPlug, FaClock
} from "react-icons/fa";

function SaaS() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const saasServices = [
    {
      icon: <FaCloud className="text-5xl text-[#0088cc]" />,
      title: "SaaS Platform Development",
      description: "We build robust and scalable SaaS platforms tailored to your business needs. Our team ensures that your SaaS solution is secure, reliable, and designed to grow with your business."
    },
    {
      icon: <FaRocket className="text-5xl text-[#fb9c24]" />,
      title: "SaaS Application Architecture",
      description: "Our experts design and implement scalable SaaS architectures that can handle thousands of users and large datasets. We follow best practices for security, performance, and reliability."
    },
    {
      icon: <FaSync className="text-5xl text-[#4285F4]" />,
      title: "Multi-Tenant Solutions",
      description: "We develop multi-tenant SaaS applications that provide isolated environments for each customer while maintaining optimal resource utilization and cost efficiency."
    },
    {
      icon: <FaPlug className="text-5xl text-[#10B981]" />,
      title: "SaaS Integration Services",
      description: "Modernize your business with our seamless integration services. We connect your SaaS applications with third-party tools and systems for enhanced functionality."
    }
  ];

  const whySaaS = [
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Scalability",
      description: "SaaS solutions offer unparalleled scalability, allowing businesses to scale up or down based on demand without significant infrastructure investments."
    },
    {
      icon: <FaLock className="text-4xl text-[#0088cc]" />,
      title: "Security",
      description: "Enterprise-grade security measures protect your data with encryption, compliance standards, and continuous monitoring to ensure your peace of mind."
    },
    {
      icon: <FaCode className="text-4xl text-[#4285F4]" />,
      title: "Cost-Effective",
      description: "Reduce operational costs with our SaaS solutions that eliminate the need for hardware, maintenance, and infrastructure management."
    },
    {
      icon: <FaGlobe className="text-4xl text-[#10B981]" />,
      title: "Accessibility",
      description: "Access your applications from anywhere with an internet connection, enabling remote work and global collaboration."
    },
    {
      icon: <FaUsers className="text-4xl text-[#8B5CF6]" />,
      title: "Automatic Updates",
      description: "Stay current with the latest features and security patches without manual intervention, ensuring your systems are always up-to-date."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "Expert SaaS Development Team",
      description: "Our team consists of experienced SaaS developers who understand the complexities of multi-tenant architecture and can deliver solutions tailored to your business needs."
    },
    {
      icon: <FaClock className="text-4xl text-[#0088cc]" />,
      title: "Timely Delivery",
      description: "We prioritize on-time delivery while maintaining the highest quality standards. Our agile methodology ensures transparency and regular updates throughout the development process."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#4285F4]" />,
      title: "Customized Solutions",
      description: "Every business is unique, and we create customized SaaS solutions that align with your specific requirements and business objectives."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#10B981]" />,
      title: "Ongoing Support & Maintenance",
      description: "Our commitment doesn't end after deployment. We provide comprehensive support and maintenance services to ensure your SaaS application runs smoothly."
    },
    {
      icon: <FaCogs className="text-4xl text-[#8B5CF6]" />,
      title: "Competitive Pricing",
      description: "We offer competitive pricing models that provide value without compromising on quality, ensuring your investment delivers maximum ROI."
    }
  ];

  const faqs = [
    {
      question: "Why Should I Consider SaaS for My Business?",
      answer: "SaaS offers numerous benefits including reduced upfront costs, scalability, accessibility from anywhere, automatic updates, and reduced IT maintenance overhead. It allows businesses to focus on their core operations while leveraging enterprise-grade software solutions without the complexity of managing infrastructure."
    },
    {
      question: "What SaaS Development Services Do You Offer?",
      answer: "We offer comprehensive SaaS development services including: Custom SaaS platform development, Multi-tenant architecture design, SaaS migration services, Integration with third-party tools, Security and compliance implementation, Performance optimization, Ongoing maintenance and support, and Technical consulting for SaaS projects."
    },
    {
      question: "How Much Does It Cost to Develop a SaaS Application?",
      answer: "The cost of SaaS development varies based on complexity, features, security requirements, and scalability needs. Simple SaaS applications start from $20,000-$50,000, while complex enterprise solutions can range from $100,000-$500,000+ depending on requirements. We offer flexible pricing models including fixed-price, time & materials, and dedicated team arrangements."
    },
    {
      question: "What Kind of Technical Support and Maintenance Services Do You Provide?",
      answer: "We provide comprehensive post-deployment support including: Bug fixes and issue resolution, Regular security patches and updates, Performance monitoring and optimization, Feature enhancements and upgrades, 24/7 emergency support for critical issues, Documentation and training, Data backup and recovery services, and Code optimization for improved performance. Our team ensures your SaaS application runs smoothly and securely."
    },
    {
      question: "How Long Does It Take to Develop a SaaS Application?",
      answer: "Development timelines depend on project complexity and requirements. A simple SaaS application typically takes 12-16 weeks, medium complexity projects with custom features take 16-24 weeks, and large enterprise applications can take 6-12 months or more. Our phased approach includes: Requirement analysis (2-3 weeks), Architecture design (2-3 weeks), Development and testing (varies), Security implementation (2-3 weeks), and Deployment and support (1-2 weeks). We provide detailed timelines after understanding your specific requirements."
    },
    {
      question: "What Is the Process of Developing Your SaaS Solution?",
      answer: "Our development process is systematic and transparent: 1) Discovery Phase - Understanding your business requirements and goals. 2) Design - Creating system architecture and user experience designs. 3) Development - Building the SaaS platform with security and scalability in mind. 4) Testing - Comprehensive testing for functionality, security, and performance. 5) Deployment - Launching the solution with proper monitoring. 6) Support - Ongoing maintenance and enhancement. Throughout the process, we maintain transparent communication and provide regular progress updates."
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
                SaaS<br />
                Development<br />
                Company
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Step2gen Technologies Pvt. Ltd. is a top SaaS Development Company in India specializing in creating scalable, secure, and innovative Software as a Service solutions. Our team of experienced developers builds enterprise-grade SaaS applications that help businesses streamline operations, reduce costs, and accelerate growth. We deliver high-quality SaaS development services that enable our clients to stay ahead of the competition in today's digital landscape.
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
                {/* SaaS Logo Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large SaaS Icon */}
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-80 h-80 flex items-center justify-center shadow-2xl">
                      <img src="/sass.svg" alt="SaaS" className="w-48 h-48" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaCloud className="text-3xl text-[#0088cc]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaUsers className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaLock className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaChartLine className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Business Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div data-aos="fade-right" className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl">
                <div className="relative">
                  {/* Person with SaaS Development */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-yellow-400 to-blue-500 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                      <FaUsers className="text-5xl text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaCloud className="text-3xl text-[#0088cc] mb-2" />
                      <div className="text-xs font-bold text-gray-700">SaaS</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaCogs className="text-3xl text-[#fb9c24] mb-2" />
                      <div className="text-xs font-bold text-gray-700">Build</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaRocket className="text-3xl text-[#4285F4] mb-2" />
                      <div className="text-xs font-bold text-gray-700">Deploy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Business with Next-Generation SaaS Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In today's rapidly evolving digital landscape, SaaS solutions are crucial for business growth and efficiency. Our team of expert SaaS developers brings years of experience in building scalable, secure, and feature-rich SaaS applications. Using best practices and incorporating the latest technologies, our team excels in creating powerful SaaS solutions that drive business outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                SaaS platforms provide businesses with flexible, cost-effective solutions that can adapt to changing market demands. They offer centralized management, automatic updates, and global accessibility, making them ideal for companies looking to expand their reach and capabilities. Our SaaS development services ensure you get robust, scalable applications that meet your specific business requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're launching a new SaaS product or migrating existing applications to a SaaS model, our team can turn your vision into reality. As a top SaaS development company, we have the expertise to drive your business forward with powerful SaaS solutions. Let's make your SaaS project a success with Step2gen Technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Development Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SaaS Development Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Step2gen Technologies offers a comprehensive range of SaaS development services to help businesses leverage the power of cloud computing and subscription-based software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {saasServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Consider SaaS */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Consider SaaS for Your Business
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              SaaS solutions offer numerous advantages that make them an attractive option for businesses of all sizes looking to optimize operations and reduce costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {whySaaS.slice(0, 2).map((reason, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
            {whySaaS.slice(2).map((reason, index) => (
              <div
                key={index + 2}
                data-aos="fade-up"
                data-aos-delay={(index + 2) * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Step2gen */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Step2gen for SaaS Development
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              When you need a reliable partner for SaaS development, Step2gen Technologies stands out as a top choice. Here are some of the reasons why you should work with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{reason.description}</p>
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
        <div className="container mx-auto relative z-10 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Partner with Step2gen Technologies for the Best SaaS Development Solutions.
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's build powerful, scalable SaaS applications that drive your business forward.
          </p>
          <button
            onClick={openForm}
            className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Get Started Today
          </button>
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

      <style jsx={true}>{`
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
    </div>
  );
}

export default SaaS;