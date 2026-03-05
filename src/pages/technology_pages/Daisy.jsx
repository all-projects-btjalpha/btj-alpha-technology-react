import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
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
      title: "Custom DaisyUI Web Development",
      description: "We develop fully customized web applications using DaisyUI components tailored to your business requirements."
    },
    {
      icon: <FaCode className="text-5xl text-[#10B981]" />,
      title: "Custom Theme Development",
      description: "Our designers build unique DaisyUI themes that match your brand identity while ensuring high performance and consistency."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#4285F4]" />,
      title: "Responsive UI Implementation",
      description: "We implement mobile-first and fully responsive designs using DaisyUI and Tailwind CSS."
    },
    {
      icon: <FaPlug className="text-5xl text-[#8B5CF6]" />,
      title: " DaisyUI Integration Services",
      description: "We seamlessly integrate DaisyUI with modern frameworks like React, Next.js, Vue, Angular, and other front-end technologies."
    }
  ];

  const whyDaisy = [
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: " Faster Development",
      description: "DaisyUI provides ready-made components that reduce development time and cost."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#10B981]" />,
      title: "Consistent Design System",
      description: "Maintain uniform styling across your entire application."
    },
    {
      icon: <FaCode className="text-4xl text-[#4285F4]" />,
      title: "Highly Customizable",
      description: "Easily customize themes, colors, layouts, and components according to your brand."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#8B5CF6]" />,
      title: "Mobile First Approach",
      description: "Build responsive interfaces that work perfectly on mobile, tablet, and desktop devices."
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
      title: "Expert DaisyUI Developers ",
      description: "Our skilled UI/UX developers have extensive experience in DaisyUI and Tailwind-based interface development."
    },
    {
      icon: <FaClock className="text-4xl text-[#10B981]" />,
      title: " Fast & On-Time Delivery",
      description: "We follow agile development processes to deliver projects on time without compromising quality. "
    },
    {
      icon: <FaChartLine className="text-4xl text-[#4285F4]" />,
      title: "Custom UI Solutions",
      description: "Every business is unique. We create tailored UI solutions that align with your specific goals. "
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#8B5CF6]" />,
      title: "Ongoing Support  & Maintenance",
      description: "We provide continuous support, updates, and performance optimization services."
    },
    {
      icon: <FaCog className="text-4xl text-[#F59E0B]" />,
      title: "Cost-Effective Pricing",
      description: "Get high-quality DaisyUI development services at competitive pricing."
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
            <div data-aos="fade-right"className="lg:pl-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c438d] mb-6 leading-tight">
                DaisyUI
                Development
                Services
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                BTJ Alpha Technology is a leading DaisyUI Development Company in India delivering modern, responsive, and scalable UI solutions. We specialize in building beautiful user interfaces using DaisyUI and Tailwind CSS to create fast, interactive, and visually appealing web applications.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <button className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fb9c24] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Contact Us
                  </button>
                </Link>
                <button onClick={openForm} className="bg-gradient-to-r from-[#ff8c00] to-[#fb9c24] hover:from-[#fb9c24] hover:to-[#ff8c00] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
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
                In today’s competitive digital world, your user interface plays a crucial role in user engagement and business success. DaisyUI is a powerful component library built on Tailwind CSS that helps create consistent and attractive UI designs faster.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">At BTJ Alpha Technology, we use DaisyUI to: Build responsive web applications,Create reusable UI components,Maintain consistent design systems,Improve loading speed and performance,Deliver mobile-friendly interfaces
                Our DaisyUI experts ensure your application looks professional and works smoothly across all devices.
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
              Why Choose BTJ Alpha Technology for DaisyUI Development
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              When you need a reliable partner for DaisyUI development, BTJ Alpha Technologies stands out as a top choice. Here are some of the reasons why you should work with us.
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
            Partner with BTJ Alpha Technology, your trusted DaisyUI Development
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
                  className={`transition-all duration-300 overflow-hidden ${openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 max-md:p-2">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button onClick={closeForm} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white rounded-full p-2 shadow-md">
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