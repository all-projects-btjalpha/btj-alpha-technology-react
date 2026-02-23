import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaAngular, FaCode, FaShieldAlt, FaRocket, FaCog, FaTools,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaUsers, FaClock,
  FaLaptop, FaMobileAlt, FaSync, FaDatabase, FaChartLine, FaPlug
} from "react-icons/fa";

function Angular() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const angularServices = [
    {
      icon: <FaAngular className="text-5xl text-[#dd0031]" />,
      title: "Build UI Web Application",
      description: "We design and develop tailored Angular applications that align with your business goals."
    },
    {
      icon: <FaRocket className="text-5xl text-[#fb9c24]" />,
      title: "Rapid Angular UI Development",
      description: "Create responsive and engaging front-end interfaces with reusable Angular components."
    },
    {
      icon: <FaSync className="text-5xl text-[#4285F4]" />,
      title: "Angular 2+ Development",
      description: "Develop scalable applications using the latest Angular versions with advanced features."
    },
    {
      icon: <FaPlug className="text-5xl text-[#10B981]" />,
      title: "Angular Migration & UpgrModernize legacy applications by migrating to the latest Angular framework.ade Services",
      description: "Modernize legacy applications by migrating to the latest Angular framework."
    }
  ];

  const whyAngular = [
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Improved Performance",
      description: "Angular’s optimized change detection and structured architecture enhance application speed."
    },
    {
      icon: <FaSync className="text-4xl text-[#dd0031]" />,
      title: "Faster Development Process",
      description: "Angular CLI enables faster project setup and component-based development."
    },
    {
      icon: <FaCode className="text-4xl text-[#4285F4]" />,
      title: "Reusable Components",
      description: "Reusable UI components reduce development time and improve consistency."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#10B981]" />,
      title: "SEO-Friendly Structure",
      description: "Server-side rendering (Angular Universal) improves search engine visibility."
    },
    {
      icon: <FaUsers className="text-4xl text-[#8B5CF6]" />,
      title: "Large Community Support",
      description: "Backed by Google and a global developer community."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "Experienced Angular Developers",
      description: "Our team has hands-on expertise in delivering scalable Angular applications."
    },
    {
      icon: <FaClock className="text-4xl text-[#dd0031]" />,
      title: "On-Time Project Delivery",
      description: "We follow agile methodologies to ensure timely completion."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#4285F4]" />,
      title: "Customized Solutions",
      description: "Every project is built according to client-specific requirements."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#10B981]" />,
      title: "Technical Support & Maintenance",
      description: "Every project is built according to client-specific requirements."
    },
    {
      icon: <FaTools className="text-4xl text-[#8B5CF6]" />,
      title: "Competitive Pricing",
      description: "Cost-effective Angular development services without compromising quality."
    }
  ];

  const faqs = [
    {
      question: "Why Should I Consider Angular JS for Web Development?",
      answer: "Angular JS is a powerful framework that offers numerous benefits including improved performance through efficient DOM manipulation, faster development with Angular CLI, reusable components for consistency, SEO-friendly architecture for better visibility, and a large global community for support. It's particularly excellent for building enterprise-grade, scalable web applications with complex requirements."
    },
    {
      question: "What React JS Development Services do you Offer?",
      answer: "We offer comprehensive Angular development services including: Custom web application development, Rapid UI plugin development for reusable components, Angular 2+ development with latest features, Legacy application migration to Angular, Single Page Application (SPA) development, Progressive Web App (PWA) development, Enterprise application development, API integration services, Performance optimization, Ongoing maintenance and support, and Technical consulting for Angular projects."
    },
    {
      question: "How Much Does it Cost to Hire our React JS Web Development Team?",
      answer: "The cost of hiring our Angular development team varies based on several factors including project complexity, duration, team size, and specific requirements. We offer flexible hiring models: Hourly basis for short-term projects, Fixed price for well-defined projects, and Dedicated team for long-term engagements. Contact us with your project details for a customized quote. We ensure competitive pricing without compromising on quality."
    },
    {
      question: "What Kind of Technical Support and Maintenance Services do you Provide?",
      answer: "We provide comprehensive post-deployment support including: Bug fixes and issue resolution, Regular updates and security patches, Performance monitoring and optimization, Feature enhancements and upgrades, Technical consultation, 24/7 emergency support for critical issues, Documentation and training, Version upgrades to latest Angular releases, and Code refactoring for improved maintainability. Our team ensures your application runs smoothly and stays up-to-date with the latest technologies."
    },
    {
      question: "How Long Does it take to Develop a React JS Web Application?",
      answer: "Development timelines depend on project complexity and requirements. A simple web application typically takes 4-6 weeks, medium complexity projects with custom features take 8-12 weeks, and large enterprise applications can take 3-6 months or more. Our phased approach includes: Requirement analysis (1-2 weeks), UI/UX design (2-3 weeks), Development and integration (varies), Testing and QA (2-3 weeks), and Deployment and support (1 week). We provide detailed timelines after understanding your specific requirements."
    },
    {
      question: "What is the Process of Hiring your React JS Development Team?",
      answer: "Our hiring process is simple and transparent: 1) Initial Consultation - Discuss your project requirements, goals, and timeline. 2) Proposal - We provide a detailed proposal with scope, timeline, and cost estimates. 3) Team Selection - Choose developers based on skills and experience. 4) Contract - Sign agreement with clear terms and conditions. 5) Project Kickoff - Begin development with regular updates and communication. 6) Delivery - Deliver the project with full documentation and support. Throughout the process, we maintain transparent communication and provide regular progress updates."
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
               Top Angular Development Company in India for Scalable Web Applications
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Build Secure, Dynamic & Enterprise-Grade Applications with Expert Angular Developers
                BTJ Alpha Technology Pvt. Ltd. is a trusted Angular Development Company in India delivering scalable, secure, and high-performance web applications tailored to modern business needs. Our experienced Angular developers specialize in building dynamic single-page applications (SPAs), enterprise dashboards, SaaS platforms, and custom business solutions.

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
                {/* Angular Logo Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Angular Icon */}
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-80 h-80 flex items-center justify-center shadow-2xl">
                      <FaAngular className="text-9xl text-[#dd0031] animate-pulse" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaCode className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaRocket className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaShieldAlt className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaCog className="text-3xl text-[#8B5CF6]" />
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
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
                <div className="relative">
                  {/* Person with Angular Development */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                      <FaUsers className="text-5xl text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaCode className="text-3xl text-[#dd0031] mb-2" />
                      <div className="text-xs font-bold text-gray-700">Code</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaCog className="text-3xl text-[#fb9c24] mb-2" />
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
                 Delivering High-Performance Applications with Angular Development Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Angular is a powerful front-end framework developed for building dynamic and feature-rich web applications. It enables developers to create interactive user interfaces, real-time dashboards, and scalable enterprise systems with structured architecture.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At BTJ Alpha Technology Pvt. Ltd., we use Angular’s component-based development approach and dependency injection model to build maintainable and scalable applications.
              </p>
             <p>
              Key Benefits of Angular:  Strong TypeScript-based architecture,Reusable and modular components,Enhanced application performance,Two-way data binding,Built-in testing capabilities,Enterprise-level scalability

             </p>
            </div>
          </div>
        </div>
      </section>

      {/* Angular Development Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Angular Development Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Step2gen Technologies offers a wide range of Angular JS development services for both businesses achieve their goals and stay competitive in an increasingly fast-paced and digital-first world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {angularServices.map((service, index) => (
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

      {/* Why Consider Angular */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             Why Choose Angular for Modern Web Development?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Angular JS is one of the most loved frameworks. Its ability to build complex and dynamic real-world applications makes it quite popular among developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyAngular.slice(0, 2).map((reason, index) => (
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
            {whyAngular.slice(2).map((reason, index) => (
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
              Why Choose BTJ Alpha Technology Pvt. Ltd. for Angular Development?

            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              When you need a reliable partner for Angular development, Step2gen Technologies stands out as a top choice. Here are some of the reasons why you should work with us.
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
            Partner with BTJ Alpha Technology Pvt. Ltd. for Advanced Angular Development Solutions
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let’s build powerful, secure, and scalable Angular applications that drive business success.
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

      <style jsx>{`
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

export default Angular;
