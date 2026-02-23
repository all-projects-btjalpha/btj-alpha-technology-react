import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaPalette, FaCode, FaMobileAlt, FaDesktop, FaPlug, FaCheckCircle, FaChevronDown, FaChevronUp,
  FaUsers, FaClock, FaLaptop, FaSync, FaChartLine, FaCog, FaShieldAlt, FaLightbulb
} from "react-icons/fa";

function Daisy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const daisyServices = [
    {
      icon: <FaPalette className="text-5xl text-[#fb9c24]" />,
      title: "DaisyUI Component Library",
      description: "We create stunning, responsive user interfaces using DaisyUI's comprehensive component library. Our team specializes in building beautiful, accessible designs that enhance user experience across all devices."
    },
    {
      icon: <FaCode className="text-5xl text-[#10B981]" />,
      title: "Custom Theme Development",
      description: "Our designers create custom DaisyUI themes that perfectly reflect your brand identity while ensuring optimal performance and user experience across all platforms."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#4285F4]" />,
      title: "Responsive Design Implementation",
      description: "We implement fully responsive designs using DaisyUI's utility-first approach, ensuring your application looks perfect on all screen sizes and devices."
    },
    {
      icon: <FaPlug className="text-5xl text-[#8B5CF6]" />,
      title: "Integration Services",
      description: "Seamlessly integrate DaisyUI with your existing tech stack, including React, Vue, Angular, and other frameworks for enhanced functionality."
    }
  ];

  const whyDaisy = [
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Rapid Development",
      description: "DaisyUI's component library enables faster development cycles, allowing you to build beautiful interfaces in record time without compromising on quality."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#10B981]" />,
      title: "Consistent Design System",
      description: "Maintain design consistency across your entire application with DaisyUI's comprehensive component library and theming capabilities."
    },
    {
      icon: <FaCode className="text-4xl text-[#4285F4]" />,
      title: "Highly Customizable",
      description: "Access over 50+ components that can be easily customized to match your specific design requirements and brand guidelines."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#8B5CF6]" />,
      title: "Mobile First Approach",
      description: "Built with mobile-first principles, ensuring your applications look and function perfectly on all devices and screen sizes."
    },
    {
      icon: <FaUsers className="text-4xl text-[#F59E0B]" />,
      title: "Accessibility Focused",
      description: "DaisyUI components follow accessibility standards, ensuring your applications are usable by everyone, including users with disabilities."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "Expert DaisyUI Developers",
      description: "Our team consists of certified UI/UX developers with extensive experience in creating stunning interfaces using DaisyUI and modern design principles."
    },
    {
      icon: <FaClock className="text-4xl text-[#10B981]" />,
      title: "Fast Delivery",
      description: "We understand the importance of timely delivery. Our streamlined process ensures rapid development without compromising on quality or design excellence."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#4285F4]" />,
      title: "Custom Solutions",
      description: "Every business is unique, and we create customized DaisyUI solutions that align with your specific requirements and brand identity."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#8B5CF6]" />,
      title: "Ongoing Support",
      description: "Our support doesn't end after delivery. We provide continuous support, updates, and optimization to ensure your interfaces perform at their best."
    },
    {
      icon: <FaCog className="text-4xl text-[#F59E0B]" />,
      title: "Competitive Pricing",
      description: "We offer transparent pricing models that provide exceptional value without compromising on quality, ensuring your investment delivers maximum ROI."
    }
  ];

  const faqs = [
    {
      question: "Why Should I Choose DaisyUI for My Project?",
      answer: "DaisyUI offers numerous benefits including rapid development with pre-built components, consistent design system, high customizability, mobile-first approach, and excellent accessibility standards. It's perfect for teams looking to build beautiful, responsive interfaces quickly while maintaining design consistency."
    },
    {
      question: "What DaisyUI Development Services Do You Offer?",
      answer: "We offer comprehensive DaisyUI development services including: Custom component development, Theme customization and design, Integration with React/Vue/Angular, Responsive design implementation, Accessibility optimization, Performance optimization, Migration from other UI libraries, Ongoing maintenance and support, and Technical consulting for DaisyUI projects."
    },
    {
      question: "How Much Does It Cost to Develop with DaisyUI?",
      answer: "The cost varies based on project complexity and requirements. Basic DaisyUI implementations start from $1,000-$3,000, while complex custom solutions can range from $5,000-$15,000+ depending on requirements. We offer flexible pricing models including fixed-price, hourly rates, and dedicated team arrangements. Contact us with your project details for a customized quote."
    },
    {
      question: "What Kind of Support and Maintenance Services Do You Provide?",
      answer: "We provide comprehensive post-implementation support including: Bug fixes and issue resolution, Regular updates and component enhancements, Performance monitoring and optimization, Feature additions and upgrades, 24/7 emergency support for critical issues, Documentation and training, Code reviews and optimization, and Design system maintenance. Our team ensures your DaisyUI implementation runs smoothly."
    },
    {
      question: "How Long Does It Take to Implement DaisyUI?",
      answer: "Implementation timelines depend on project complexity. A basic DaisyUI setup typically takes 1-2 weeks, medium complexity projects with custom components take 2-4 weeks, and large-scale implementations can take 4-8 weeks or more. Our phased approach includes: Assessment and planning (3-5 days), Component development (varies), Integration and testing (1-2 weeks), and Deployment and support (3-5 days). We provide detailed timelines after understanding your specific requirements."
    },
    {
      question: "What Is the Process of Working with Your DaisyUI Team?",
      answer: "Our development process is systematic and transparent: 1) Discovery - Understanding your design requirements and goals. 2) Planning - Creating project roadmap and timeline. 3) Design - Creating mockups and design system specifications. 4) Development - Building components with DaisyUI best practices. 5) Testing - Comprehensive testing for functionality and responsiveness. 6) Deployment - Implementing the solution with proper monitoring. 7) Support - Ongoing maintenance and enhancement. Throughout the process, we maintain transparent communication and provide regular progress updates."
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c438d] mb-6 leading-tight">
                DaisyUI<br />
                Development<br />
                Services
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Step2gen Technologies Pvt. Ltd. is a leading DaisyUI Development Company specializing in creating beautiful, responsive, and accessible user interfaces. Our team of experienced UI/UX developers builds stunning applications using DaisyUI's comprehensive component library, helping businesses deliver exceptional user experiences. We deliver high-quality DaisyUI development services that enable our clients to create modern, engaging interfaces that drive user satisfaction and business growth.
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
                {/* DaisyUI Logo Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large DaisyUI Icon */}
                    <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-full w-80 h-80 flex items-center justify-center shadow-2xl">
                      <img src="/daisy-removebg-preview.png" alt="DaisyUI" className="w-48 h-48" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaPalette className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaCode className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaMobileAlt className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaPlug className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Interface Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div data-aos="fade-right" className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl">
                <div className="relative">
                  {/* Person with UI Development */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-orange-400 to-blue-500 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                      <FaUsers className="text-5xl text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaPalette className="text-3xl text-[#fb9c24] mb-2" />
                      <div className="text-xs font-bold text-gray-700">Design</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaCode className="text-3xl text-[#10B981] mb-2" />
                      <div className="text-xs font-bold text-gray-700">Code</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaMobileAlt className="text-3xl text-[#4285F4] mb-2" />
                      <div className="text-xs font-bold text-gray-700">Mobile</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c438d] mb-6">
                Transform Your User Interface with DaisyUI
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In today's digital landscape, having a beautiful and functional user interface is crucial for user engagement and business success. Our team of expert UI/UX developers brings years of experience in building stunning interfaces using DaisyUI's powerful component library. Using best practices and modern design principles, our team excels in creating beautiful interfaces that enhance user experience and drive engagement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                DaisyUI provides developers with a comprehensive library of pre-built components that can be easily customized to create beautiful, consistent interfaces. Our DaisyUI development services ensure you get interfaces that not only look professional but also provide excellent user experience, fast loading times, and seamless interactions across all devices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're building a new application or enhancing an existing one with modern UI components, our team can help you leverage the full power of DaisyUI. As a leading DaisyUI development company, we have the expertise to create stunning interfaces that users will love. Let's make your user interface exceptional with Step2gen Technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DaisyUI Development Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c438d] mb-4">
              DaisyUI Development Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Step2gen Technologies offers a comprehensive range of DaisyUI development services to help businesses create beautiful, responsive user interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {daisyServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-[#1c438d] mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DaisyUI */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c438d] mb-4">
              Why Choose DaisyUI for Your Interface Development
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              DaisyUI offers numerous advantages that make it the preferred choice for developers looking to create beautiful, consistent interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyDaisy.slice(0, 2).map((reason, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-[#1c438d] mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
            {whyDaisy.slice(2).map((reason, index) => (
              <div
                key={index + 2}
                data-aos="fade-up"
                data-aos-delay={(index + 2) * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-[#1c438d] mb-3">{reason.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c438d] mb-4">
              Why Choose Step2gen for DaisyUI Development
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              When you need a reliable partner for DaisyUI development, Step2gen Technologies stands out as a top choice. Here are some of the reasons why you should work with us.
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
                <h3 className="text-lg font-bold text-[#1c438d] mb-3 text-center">{reason.title}</h3>
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
            Partner with Step2gen Technologies for Exceptional DaisyUI Development.
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's create beautiful, responsive interfaces that delight your users and drive business success.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
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

export default Daisy;