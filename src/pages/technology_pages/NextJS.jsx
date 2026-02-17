import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaServer, FaRocket, FaSearch, FaImage, FaCode, FaCheckCircle,
  FaChevronDown, FaChevronUp, FaClock, FaShieldAlt, FaUsers,
  FaLaptop, FaSync, FaDatabase, FaChartLine, FaPlug, FaCog, FaTools,
  FaMobileAlt, FaGlobe, FaTachometerAlt
} from "react-icons/fa";
import { SiNextdotjs, SiReact, SiJavascript, SiNodedotjs } from "react-icons/si";

function NextJS() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const jsFrameworks = [
    {
      icon: <SiReact className="text-5xl text-[#61dafb]" />,
      title: "React.js",
      description: "React.js is a popular JavaScript library for building user interfaces. Developed by Facebook, it facilitates the creation of reusable UI components. Its component-based architecture, virtual DOM, and vast ecosystem make it ideal for building modern web applications."
    },
    {
      icon: <FaCode className="text-5xl text-[#dd0031]" />,
      title: "Angular",
      description: "Angular is a comprehensive TypeScript-based framework for building dynamic web applications. Developed by Google, it provides a complete solution with built-in features like routing, forms, HTTP client, and more for enterprise-grade applications."
    },
    {
      icon: <FaCode className="text-5xl text-[#42b883]" />,
      title: "Vue.js",
      description: "Vue.js is a progressive JavaScript framework known for its simplicity and flexibility. It's incrementally adoptable, making it suitable for both small projects and large-scale applications with its intuitive API and excellent documentation."
    },
    {
      icon: <FaCode className="text-5xl text-[#fb9c24]" />,
      title: "Next.js",
      description: "Next.js is a powerful React framework that enables server-side rendering and static site generation. It's optimized for production with features like automatic code splitting, optimized prefetching, and built-in CSS support."
    },
    {
      icon: <FaDatabase className="text-5xl text-[#4285F4]" />,
      title: "Express.js",
      description: "Express.js is a minimal and flexible Node.js web application framework providing robust features for web and mobile applications. It's the de facto standard server framework for Node.js with middleware support."
    },
    {
      icon: <FaRocket className="text-5xl text-[#8B5CF6]" />,
      title: "Node.js",
      description: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to run JavaScript on the server side. It's perfect for building scalable network applications with its event-driven, non-blocking I/O model."
    },
    {
      icon: <FaCode className="text-5xl text-[#10B981]" />,
      title: "Ember.js",
      description: "Ember.js is an opinionated framework for ambitious web developers. It follows convention over configuration, providing a complete solution for building complex client-side applications with strong community support."
    },
    {
      icon: <FaSync className="text-5xl text-[#EF4444]" />,
      title: "Svelte",
      description: "Svelte is a radical new approach to building user interfaces. It compiles components at build time, resulting in highly optimized vanilla JavaScript that directly manipulates the DOM without virtual DOM overhead."
    },
    {
      icon: <FaPlug className="text-5xl text-[#0ea5e9]" />,
      title: "jQuery",
      description: "jQuery is a fast, small, and feature-rich JavaScript library. It simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development across browsers."
    },
    {
      icon: <FaCode className="text-5xl text-[#f59e0b]" />,
      title: "Backbone.js",
      description: "Backbone.js provides structure to web applications by providing models with key-value binding, custom events, collections, and connects it all to your existing API over a RESTful JSON interface."
    },
    {
      icon: <FaTools className="text-5xl text-[#06b6d4]" />,
      title: "Meteor",
      description: "Meteor is a full-stack JavaScript platform for developing modern web and mobile applications. It includes a key set of technologies for building connected-client reactive applications with real-time capabilities."
    },
    {
      icon: <FaLaptop className="text-5xl text-[#ec4899]" />,
      title: "Polymer",
      description: "Polymer is a JavaScript library for building web applications using web components. It provides a set of features for creating custom reusable HTML elements with encapsulated functionality."
    }
  ];

  const jsServices = [
    {
      icon: <FaCode className="text-5xl text-[#fb9c24]" />,
      title: "JavaScript Project Development",
      description: "Build robust and scalable JavaScript applications tailored to your business needs. We develop custom solutions using modern JavaScript frameworks and libraries for optimal performance and maintainability."
    },
    {
      icon: <FaPlug className="text-5xl text-[#4285F4]" />,
      title: "JavaScript Integration and Augmentation",
      description: "Seamlessly integrate JavaScript solutions with your existing systems and enhance functionality. We provide expert integration services with third-party APIs, databases, and enterprise systems."
    },
    {
      icon: <FaSync className="text-5xl text-[#10B981]" />,
      title: "JavaScript Testing and Optimization",
      description: "Ensure your JavaScript applications perform flawlessly with comprehensive testing and optimization. We implement automated testing, performance tuning, and code quality improvements."
    }
  ];

  const benefits = [
    {
      icon: <FaTachometerAlt className="text-5xl text-[#fb9c24]" />,
      title: "High Application Speed",
      description: "JavaScript's asynchronous nature and optimized engines ensure fast execution and responsive user interfaces, providing excellent performance for modern web applications."
    },
    {
      icon: <FaUsers className="text-5xl text-[#4285F4]" />,
      title: "Enhanced User Experience",
      description: "Create interactive and dynamic user interfaces that respond instantly to user actions without page reloads, delivering smooth and engaging experiences."
    },
    {
      icon: <FaSync className="text-5xl text-[#10B981]" />,
      title: "Improved Functionality",
      description: "JavaScript enables rich client-side functionality including form validation, dynamic content updates, animations, and real-time features that enhance application capabilities."
    },
    {
      icon: <FaGlobe className="text-5xl text-[#8B5CF6]" />,
      title: "Cross-Browser Compatibility",
      description: "JavaScript works seamlessly across all major browsers with consistent behavior, ensuring your application reaches the widest possible audience without compatibility issues."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#EF4444]" />,
      title: "Versatility",
      description: "Use JavaScript for full-stack development - frontend, backend (Node.js), mobile apps (React Native), and even desktop applications (Electron), providing a unified development experience."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#fb9c24]" />,
      title: "Experienced JavaScript Developers",
      description: "Our team consists of highly skilled JavaScript developers with extensive experience across various frameworks and libraries, delivering enterprise-grade solutions."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#4285F4]" />,
      title: "Comprehensive Web Development Services",
      description: "We provide end-to-end JavaScript development services from planning and design to development, testing, deployment, and ongoing support."
    },
    {
      icon: <FaClock className="text-5xl text-[#10B981]" />,
      title: "On-Time Delivery",
      description: "We follow agile methodologies and maintain strict project timelines to ensure your JavaScript projects are delivered on schedule without compromising quality."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#8B5CF6]" />,
      title: "Quality Assurance",
      description: "We implement rigorous testing procedures including unit tests, integration tests, and end-to-end testing to deliver bug-free, reliable JavaScript applications."
    }
  ];

  const faqs = [
    {
      question: "What is JavaScript?",
      answer: "JavaScript is a versatile, high-level programming language that enables interactive web pages and is an essential part of web applications. It's a client-side scripting language that runs in web browsers, allowing developers to create dynamic content, control multimedia, animate images, and much more. JavaScript is also used on the server-side through Node.js, making it a full-stack development language. It's one of the core technologies of the World Wide Web, alongside HTML and CSS, and is supported by all modern web browsers without plugins."
    },
    {
      question: "What are the Benefits of Using JavaScript for Web Development?",
      answer: "JavaScript offers numerous benefits: 1) Speed - JavaScript executes quickly in the browser as it's a client-side language. 2) Versatility - It can be used for both frontend and backend development (Node.js). 3) Rich Interfaces - Create dynamic and interactive user interfaces with animations and real-time updates. 4) Cross-Browser Compatibility - Works consistently across all major browsers. 5) Large Ecosystem - Vast collection of frameworks, libraries, and tools available. 6) Asynchronous Programming - Handle multiple operations simultaneously without blocking. 7) Easy to Learn - Relatively simple syntax and gentle learning curve. 8) Community Support - Huge community with extensive resources and documentation."
    },
    {
      question: "Which JavaScript Framework should you Choose?",
      answer: "The choice of JavaScript framework depends on your project requirements: React.js is ideal for building interactive UIs with component-based architecture and large ecosystem. Angular is perfect for enterprise applications needing a complete framework with TypeScript. Vue.js offers simplicity and flexibility for projects of any size. Next.js is excellent for SEO-critical applications requiring server-side rendering. Express.js is the go-to for backend API development with Node.js. Consider factors like project complexity, team expertise, performance requirements, community support, and long-term maintainability when choosing. We can help assess your needs and recommend the best framework for your project."
    },
    {
      question: "What Industries Become we Provide?",
      answer: "We provide JavaScript development services across diverse industries including: E-commerce and Retail (online stores, shopping platforms), Healthcare (patient portals, telemedicine apps), Finance and Banking (fintech apps, payment gateways), Education (e-learning platforms, LMS), Real Estate (property listings, CRM systems), Travel and Hospitality (booking systems, tour management), Media and Entertainment (streaming platforms, content management), Logistics and Transportation (tracking systems, fleet management), and many more. Our JavaScript expertise allows us to build custom solutions tailored to specific industry requirements and compliance standards."
    },
    {
      question: "Do you Wince the Quality of Your NextJS Web Development Services?",
      answer: "Yes, absolutely! We maintain the highest quality standards in our Next.js and JavaScript development services through: 1) Code Reviews - Regular peer reviews and code quality checks. 2) Testing - Comprehensive testing including unit tests, integration tests, and end-to-end tests. 3) Best Practices - Following industry standards and framework-specific best practices. 4) Performance Monitoring - Continuous performance optimization and monitoring. 5) Security Audits - Regular security assessments and vulnerability scanning. 6) Documentation - Detailed code documentation and project documentation. 7) Quality Assurance Team - Dedicated QA professionals ensuring bug-free delivery. 8) Client Feedback - Iterative development with regular client reviews and feedback incorporation. We're committed to delivering robust, scalable, and maintainable JavaScript solutions."
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
                Javascript<br />
                Development<br />
                Company
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Step2gen Technologies is a leading JavaScript development company based in India that specializes in delivering high-quality, scalable web applications. Our experienced JavaScript developers are experts in modern frameworks and libraries like React, Angular, Vue.js, Node.js, and Next.js. We create dynamic, interactive, and responsive web solutions that drive business growth and deliver exceptional user experiences across all devices and platforms.
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
                {/* JavaScript Logo Shield */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 w-64 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                    <div className="text-center">
                      <div className="text-8xl font-bold text-gray-900 mb-2">JS</div>
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
                    <FaLaptop className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaGlobe className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Full-Stack Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hire Full-Stack JavaScript Development Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div data-aos="fade-right" className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl">
                <div className="relative">
                  {/* Developer Illustration */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                      <FaUsers className="text-5xl text-white" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <FaLaptop className="text-4xl text-gray-700" />
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <SiJavascript className="text-2xl text-[#f7df1e]" />
                        <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiReact className="text-2xl text-[#61dafb]" />
                        <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-200 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiNodedotjs className="text-2xl text-[#339933]" />
                        <div className="h-2 bg-gradient-to-r from-green-400 to-green-200 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <p className="text-gray-600 leading-relaxed mb-6">
                Our skilled JavaScript developers have vast industry experience and can handle complex projects that involve advanced problem-solving capabilities. From creating interactive user interfaces to building robust server-side applications, our team delivers comprehensive JavaScript solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We stay updated with the latest JavaScript trends, frameworks, and best practices to ensure your applications are built with cutting-edge technology. Our developers are proficient in ES6+, TypeScript, and modern JavaScript patterns.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you need frontend development with React or Vue.js, backend development with Node.js, or full-stack solutions, our team has the expertise to turn your vision into reality with clean, maintainable, and scalable code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JavaScript Frameworks */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our JavaScript Development Frameworks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jsFrameworks.map((framework, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{framework.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{framework.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JavaScript Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our JavaScript Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jsServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Are The Benefits of Using JavaScript?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
            <div className="md:col-span-2 lg:col-span-1" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 text-center h-full">
                <div className="flex justify-center mb-4">{benefits[2].icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefits[2].title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefits[2].description}</p>
              </div>
            </div>
            {benefits.slice(3).map((benefit, index) => (
              <div
                key={index + 3}
                data-aos="fade-up"
                data-aos-delay={(index + 3) * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Step2gen */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Step2gen: The Right Choice for JavaScript Web Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
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
            Ready to Start a New Project? JavaScript Development Solutions.
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to build powerful, scalable JavaScript applications that drive your business forward.
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

export default NextJS;
