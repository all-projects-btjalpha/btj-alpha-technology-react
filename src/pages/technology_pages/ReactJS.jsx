import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaReact, FaCode, FaMobileAlt, FaRocket, FaPuzzlePiece, FaUsers,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaShieldAlt,
  FaLaptop, FaSync, FaDatabase, FaChartLine, FaPlug, FaCog, FaTools
} from "react-icons/fa";

function ReactJS() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const reactServices = [
    {
      icon: <FaPuzzlePiece className="text-5xl text-[#61dafb]" />,
      title: "Build UI Web Application",
      description: "Our team of experienced React developers can bring robust solutions to complex problems. We build dynamic and secure web applications that are user-friendly and follow all the latest standards that are stable in your business."
    },
    {
      icon: <FaRocket className="text-5xl text-[#fb9c24]" />,
      title: "Rapid UI Plugin Development",
      description: "We can help you develop custom React UI plugins for your library. The plugins are designed to be highly reusable, optimized for performance, and aligned with React best practices and architecture."
    },
    {
      icon: <FaSync className="text-5xl text-[#4285F4]" />,
      title: "React Development",
      description: "Our team of developers use React technology to create responsive, modular applications with improved performance and use latest features to build scalable enterprise-level solutions with modern React architecture."
    },
    {
      icon: <FaPlug className="text-5xl text-[#10B981]" />,
      title: "React UI Migration Services",
      description: "Modernize your legacy applications with our seamless migration services. We help migrate your existing web apps to React, ensuring minimal downtime and maintaining all functionality."
    }
  ];

  const whyReact = [
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Improved Performance",
      description: "React is built on Virtual DOM that makes it improve the performance of web applications by making efficient updates and rendering only the components that change, resulting in faster load times."
    },
    {
      icon: <FaSync className="text-4xl text-[#61dafb]" />,
      title: "Faster Development Process",
      description: "React CLI is a fast and efficient way to get started when using React for your rapid development. Just a simple command and you can create a project or components with powerful tools and hot reloading."
    },
    {
      icon: <FaPuzzlePiece className="text-4xl text-[#4285F4]" />,
      title: "Reusable Components",
      description: "Using React makes it convenient to build reusable UI components that can be used across different sections and maintain consistency throughout application, saving development time and effort."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#10B981]" />,
      title: "SEO Friendly",
      description: "React JS is SEO-friendly, which means your application will be detected easily by search engines with server-side rendering. This translates to higher visibility and better website exposure."
    },
    {
      icon: <FaUsers className="text-4xl text-[#8B5CF6]" />,
      title: "Large Community",
      description: "React JS has a large community of developers across the globe. This backing and shared resources helps find quick answers to solve problems and assist support to other developers with extensive libraries."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "Experienced React JS Developers",
      description: "We consist of expert React developers covering all aspects of web development from planning to execution. Our team stays up-to-date with latest trends and can cater to your business needs."
    },
    {
      icon: <FaClock className="text-4xl text-[#61dafb]" />,
      title: "On-Time Delivery",
      description: "We understand the value of time, therefore we make it our priority to deliver projects on time. In case of unforeseen delays, we communicate with you and give reasons and work hard to deliver high quality on time."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#4285F4]" />,
      title: "Customized Solutions",
      description: "We understand every client and project is not similar and we are committed to providing customized solutions that suit your business and achieve your goals with tailored React applications."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#10B981]" />,
      title: "Technical Support And Maintenance",
      description: "We provide long-term support and maintenance services to ensure all of the project runs smoothly after deployment. Our team is always available to fix bugs and help you with any issues."
    },
    {
      icon: <FaTools className="text-4xl text-[#8B5CF6]" />,
      title: "Competitive Pricing",
      description: "We deliver services with competitive pricing while ensuring that the quality of our work is not compromised at all. Competitive pricing without compromising on quality and excellence."
    }
  ];

  const faqs = [
    {
      question: "Why Should I Consider React JS for Web Development?",
      answer: "React JS is a powerful library that offers numerous benefits including improved performance through Virtual DOM, faster development with reusable components, SEO-friendly architecture with server-side rendering, and a large global community for support. It's particularly excellent for building interactive, scalable single-page applications (SPAs) with complex user interfaces. React's component-based architecture makes code more maintainable and easier to test."
    },
    {
      question: "What React JS Development Services do you Offer?",
      answer: "We offer comprehensive React development services including: Custom web application development, Rapid UI plugin and component development, Single Page Application (SPA) development, Progressive Web App (PWA) development, React Native mobile app development, Legacy application migration to React, Enterprise application development, Redux state management integration, API integration services, Performance optimization, UI/UX design and development, Ongoing maintenance and support, and Technical consulting for React projects."
    },
    {
      question: "How Much Does it Cost to Hire our React JS Web Development Team?",
      answer: "The cost of hiring our React development team varies based on several factors including project complexity, duration, team size, feature requirements, and integrations needed. We offer flexible hiring models: Hourly basis for short-term projects or specific tasks, Fixed price for well-defined projects with clear scope, and Dedicated team for long-term engagements. Contact us with your project details for a customized quote. We ensure competitive pricing without compromising on quality and deliver excellent value for your investment."
    },
    {
      question: "What Kind of Technical Support and Maintenance Services do you Provide?",
      answer: "We provide comprehensive post-deployment support including: Bug fixes and issue resolution with quick turnaround, Regular updates and security patches, Performance monitoring and optimization, Feature enhancements and new functionality, React version upgrades, Technical consultation and best practices guidance, 24/7 emergency support for critical issues, Documentation and knowledge transfer, Code refactoring for improved maintainability, Integration of new third-party services, and Database optimization. Our team ensures your React application runs smoothly and stays current with the latest technologies."
    },
    {
      question: "How Long Does it take to Develop a React JS Web Application?",
      answer: "Development timelines depend on project complexity and requirements. A simple web application with basic features typically takes 4-6 weeks, medium complexity projects with custom components and API integrations take 8-12 weeks, and large enterprise applications with complex business logic can take 3-6 months or more. Our phased approach includes: Requirement analysis and planning (1-2 weeks), UI/UX design and prototyping (2-3 weeks), Frontend and backend development (varies based on features), Testing and quality assurance (2-3 weeks), and Deployment and launch (1 week). We provide detailed timelines and milestones after understanding your specific requirements."
    },
    {
      question: "What is the Process of Hiring your React JS Development Team?",
      answer: "Our hiring process is simple, transparent, and client-focused: 1) Initial Consultation - Schedule a call to discuss your project requirements, goals, timeline, and budget. 2) Proposal & Planning - We provide a detailed proposal with scope of work, technology stack, timeline estimates, and cost breakdown. 3) Team Selection - Choose developers based on their skills, experience, and portfolio. We can arrange interviews if needed. 4) Contract & Agreement - Sign agreement with clear terms, milestones, and payment schedule. 5) Project Kickoff - Begin development with sprint planning, regular updates, and transparent communication. 6) Development & Testing - Agile development with regular demos and feedback loops. 7) Delivery & Support - Project delivery with complete documentation, training, and ongoing support. Throughout the process, we maintain transparent communication and provide regular progress updates via your preferred channels."
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
                ReactJS<br />
                Development<br />
                Company
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Step2gen Technologies Pvt. Ltd. is a top ReactJS Development Company in India that specializes in providing high-quality web applications using the React platform. Our team of skilled developers has years of experience in building enterprise-grade React applications that are scalable and robust to fulfill your business needs. We strive to provide our clients with high quality development services that help them stay ahead of the competition.
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
                {/* React Logo Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large React Icon */}
                    <div className="bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full w-80 h-80 flex items-center justify-center shadow-2xl">
                      <FaReact className="text-9xl text-[#61dafb] animate-spin-slow" />
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
                    <FaPuzzlePiece className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaMobileAlt className="text-3xl text-[#8B5CF6]" />
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
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
                <div className="relative">
                  {/* Person with React Development */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                      <FaUsers className="text-5xl text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaCode className="text-3xl text-[#61dafb] mb-2" />
                      <div className="text-xs font-bold text-gray-700">JSX</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaCog className="text-3xl text-[#fb9c24] mb-2" />
                      <div className="text-xs font-bold text-gray-700">Hooks</div>
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
                Transform Your Business with Next-Generation Web Applications using ReactJS Development Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Streamlining your business processes is essential for growth and efficiency. Our team of expert React developers has years of experience in React JS providing robust React development services. Using the best practices and incorporating the latest features, our team excels in creating powerful web applications that run smoothly.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                React is a popular JavaScript library used for building fast and efficient user interfaces. It provides a solid foundation for developing user-friendly and intuitive interfaces that is tailored to your specific needs. By choosing the best possible React development service, you can boost your user engagement and interactions by featuring powerful and self-interactive components and visualizations. We not only do React application development, but also provide wide design flexibility and intuitive interface that is tailored to your specific needs for the various features you want.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're building a startup MVP or an enterprise solution, our team can turn your project plans into reality. We are a top React development company that has the expertise to drive your business into the future with powerful React solutions. Let's make your project a success with Step2gen Technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* React Development Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ReactJS Development Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Step2gen Technologies offers a wide range of React JS development services for both businesses achieve their goals and stay competitive in an increasingly fast-paced and digital-first world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reactServices.map((service, index) => (
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

      {/* Why Consider React */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why consider ReactJS for Web Development
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              React JS is one of the most loved JavaScript libraries. Its ability to build complex and dynamic real-world applications makes it quite popular among developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyReact.slice(0, 2).map((reason, index) => (
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
            {whyReact.slice(2).map((reason, index) => (
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
              Why Choose Step2gen for ReactJS Web Development
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              When you need a reliable partner for React development, Step2gen Technologies stands out as a top choice. Here are some of the reasons why you should work with us.
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
            Partner with Step2gen Technologies for the Best React JS Development Solutions.
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's build powerful, scalable React applications that drive your business forward.
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
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
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
    </div>
  );
}

export default ReactJS;
