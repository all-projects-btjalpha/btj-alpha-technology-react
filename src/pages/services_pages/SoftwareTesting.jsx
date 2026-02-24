import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaBug, FaCheckCircle, FaRobot, FaClipboardCheck, FaVial, FaShieldAlt,
  FaChevronDown, FaChevronUp, FaLightbulb, FaMobileAlt, FaDesktop,
  FaCogs, FaChartLine, FaUsers, FaCode, FaFlask, FaServer,
  FaClipboardList, FaUserCheck, FaSyncAlt, FaFileAlt, FaTachometerAlt,
  FaLock, FaGlobe, FaPlayCircle, FaTools
} from "react-icons/fa";
import { SiJira, SiSelenium, SiJest, SiCypress, SiPostman } from "react-icons/si";

function SoftwareTesting() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const prioritizeServices = [
    {
      icon: <FaFlask className="text-5xl text-yellow-500" />,
      title: "Manual Testing Services",
      description: "Our QA experts carefully test your software to find bugs and usability issues. We check all features and user scenarios to ensure everything works correctly."
    },
    {
      icon: <FaRobot className="text-5xl text-cyan-500" />,
      title: "Automation Testing",
      description: "We use automation tools like Selenium, Cypress, and Jest to speed up testing. Automation improves accuracy and gives faster feedback on code changes."
    },
    {
      icon: <FaTachometerAlt className="text-5xl text-red-500" />,
      title: "Mobile App Testing Services",
      description: "We test iOS and Android apps on different devices and screen sizes. We ensure your app works smoothly and delivers a good user experience."
    },
    {
      icon: <FaUserCheck className="text-5xl text-purple-500" />,
      title: "Usability Testing",
      description: "We test your application from a user’s point of view. We identify navigation issues and improve overall user experience."
    },
    {
      icon: <FaChartLine className="text-5xl text-green-500" />,
      title: "Performance Testing",
      description: "We check how your software performs under heavy traffic and different conditions. This ensures fast response times and stable performance."
    },
    {
      icon: <FaLock className="text-5xl text-blue-600" />,
      title: "Penetration Testing (Security)",
      description: "Our security experts find vulnerabilities and fix security risks. We make sure your application meets security standards and stays protected."
    }
  ];

  const testingCategories = [
    {
      icon: <FaMobileAlt className="text-5xl text-blue-500" />,
      title: "Functional Testing",
      description: "Functional testing checks if the software works as expected. It makes sure every feature follows the given requirements and works correctly."
    },
    {
      icon: <FaCogs className="text-5xl text-purple-500" />,
      title: "Integration Testing",
      description: "Integration testing checks if different modules or parts of the system work well together. It tests the connection, data flow, and communication between components."
    },
    {
      icon: <FaDesktop className="text-5xl text-cyan-500" />,
      title: "System Testing",
      description: "System testing checks the complete software as a whole. It ensures the entire system works properly, including all features and interactions."
    },
    {
      icon: <FaClipboardList className="text-5xl text-green-500" />,
      title: "Acceptance Testing",
      description: "Acceptance testing (UAT) checks if the software meets business requirements. It confirms the product is ready for release and meets user expectations."
    }
  ];

  const nonFunctionalTesting = [
    {
      icon: <FaTachometerAlt className="text-5xl text-orange-500" />,
      title: "Performance Testing",
      description: "Performance testing checks how fast and stable the system is. It tests different user loads to find slow areas and improve speed."
    },
    {
      icon: <FaLock className="text-5xl text-red-500" />,
      title: "Security Testing",
      description: "Security testing finds weaknesses and risks in the software. It includes penetration testing and security checks to protect user data."
    },
    {
      icon: <FaUsers className="text-5xl text-blue-500" />,
      title: "Compatibility Testing",
      description: "Compatibility testing ensures the application works on different browsers, devices, operating systems, and networks. It makes sure there are no performance or display issues."
    },
    {
      icon: <FaServer className="text-5xl text-purple-500" />,
      title: "Reliability Testing",
      description: "Reliability testing checks if the software works without failure for a long time. It tests stability, availability, and error handling in different environments."
    },
    {
      icon: <FaGlobe className="text-5xl text-cyan-500" />,
      title: "Usability Testing",
      description: "Usability testing checks how easy and user-friendly the software is. It reviews navigation, design, content, and overall user experience."
    }
  ];

  const importancePoints = [
    {
      title: "Ensuring Quality",
      description: "Testers make sure the software meets quality standards. They find bugs early which leads to lower fixing costs while enhancing the final product quality."
    },
    {
      title: "Reducing Risks",
      description: "Testers use regular testing to identify problems before software release. This process minimizes failure risks while safeguarding the company's reputation and establishing customer confidence."
    },
    {
      title: "Validating User Experience",
      description: "Testers check if the software is easy to use. They ensure users can complete tasks smoothly and without frustration."
    },
    {
      title: "Collaborating with Development Team",
      description: "Testers work closely with developers. They deliver precise feedback which they use to confirm solutions while they assist the team in producing high-quality software."
    },
    {
      title: "Continuous Improvement",
      description: "Testers help organizations improve their processes through their continuous testing and feedback activities. They enable organizations to achieve better performance while developing stronger capabilities for their long-term success."
    }
  ];

  const testingLifecycle = [
    {
      phase: "Planning",
      description: "We define the testing scope, goals, resources, and timelines. We create a test strategy and choose the right tools.",
      color: "from-gray-500 to-gray-700"
    },
    {
      phase: "Design",
      description: "We create detailed test cases and test scripts. We prepare test data based on project requirements and user stories.",
      color: "from-blue-500 to-blue-700"
    },
    {
      phase: "Delivery",
      description: "We set up the test environment and prepare all required data. We make sure everything is ready before testing begins.",
      color: "from-orange-500 to-orange-700"
    },
    {
      phase: "Implementation",
      description: "We execute test cases and record the results. We report bugs, verify fixes, and perform regression testing.",
      color: "from-red-500 to-red-700"
    },
    {
      phase: "Stabilization",
      description: "We perform final validation and regression testing. We ensure all critical issues are fixed before release.",
      color: "from-green-500 to-green-700"
    }
  ];

  const techStack = [
    {
      category: "Test Management",
      tools: [
        { name: "Jira", icon: <SiJira className="text-6xl text-blue-600" /> }
      ]
    },
    {
      category: "Automation Testing",
      tools: [
        { name: "Katalon", icon: <FaCode className="text-6xl text-green-500" /> }
      ]
    },
    {
      category: "Performance Testing",
      tools: [
        { name: "JMeter", icon: <FaChartLine className="text-6xl text-orange-500" /> }
      ]
    },
    {
      category: "Security Testing",
      tools: [
        { name: "OWASP ZAP", icon: <FaShieldAlt className="text-6xl text-red-500" /> }
      ]
    },
    {
      category: "Selenium",
      tools: [
        { name: "Selenium", icon: <SiSelenium className="text-6xl text-green-600" /> }
      ]
    },
    {
      category: "Cypress",
      tools: [
        { name: "Cypress", icon: <SiCypress className="text-6xl text-gray-700" /> }
      ]
    },
    {
      category: "API Testing",
      tools: [
        { name: "Postman", icon: <SiPostman className="text-6xl text-orange-600" /> }
      ]
    },
    {
      category: "Jest",
      tools: [
        { name: "Jest", icon: <SiJest className="text-6xl text-red-600" /> }
      ]
    }
  ];

  const faqs = [
    {
      question: "Why should I use a Third-Party Software Testing Services?",
      answer: "Using third-party software testing services provides unbiased evaluation, specialized expertise, access to advanced tools and methodologies, cost savings compared to maintaining an in-house QA team, scalability to handle varying project sizes, and allows your development team to focus on core development activities while experts handle quality assurance."
    },
    {
      question: "How can we determine the Quality of your Testing Services?",
      answer: "The quality of our testing services can be determined through: comprehensive test coverage reports, defect detection rates, detailed test documentation, clear bug reports with reproduction steps, adherence to timelines, effective communication, use of industry-standard tools and methodologies, client testimonials, and our track record of successful project deliveries. We provide regular updates and metrics to track testing effectiveness."
    },
    {
      question: "How much does it cost to Avail our Testing Services?",
      answer: "Testing service costs vary based on project complexity, testing types required (manual, automation, performance, security), project duration, team size needed, and specific requirements. We offer flexible engagement models including hourly rates, dedicated teams, and project-based pricing. Contact us for a detailed quote tailored to your specific testing needs and budget."
    },
    {
      question: "What sets BTJ from Other Manual or Automation Testing Service?",
      answer: "BTJ Alpha Technology stands out through our experienced QA professionals with domain expertise, comprehensive testing approach covering all testing types, use of latest testing tools and frameworks, dedicated support and communication, flexible engagement models, competitive pricing, proven track record across industries, focus on both functional and non-functional testing, and commitment to continuous improvement and innovation in testing methodologies."
    },
    {
      question: "How do you Guarantee Quality Services During Testing?",
      answer: "We guarantee quality through: ISO 9001:2015 certified processes, experienced testing professionals with relevant certifications, well-defined testing methodologies and best practices, comprehensive test planning and documentation, multiple levels of test review and validation, continuous monitoring and reporting, regular communication with stakeholders, use of industry-standard tools, adherence to security and confidentiality agreements, and commitment to meeting agreed-upon quality metrics and SLAs."
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
                QA and Software<br />
                Testing Company India
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At BTJ Alpha Technology, we provide complete software testing and quality 
                assurance services. Our goal is to make sure your applications are bug-free,
                secure, and perform smoothly. <br></br>
                Our experienced QA team uses modern tools and proven methods to deliver 
                reliable testing solutions. We offer services from manual testing to full 
                automation testing to ensure high-quality results.
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
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div data-aos="fade-left" className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
                {/* Testing Illustration */}
                <div className="relative">
                  {/* Main Screen */}
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-all animate-float">
                    <div className="space-y-4">
                      {/* Test Cases */}
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-2xl text-green-300" />
                        <div className="flex-1 h-3 bg-green-300 rounded"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-2xl text-green-300" />
                        <div className="flex-1 h-3 bg-green-300 rounded"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaBug className="text-2xl text-red-300" />
                        <div className="flex-1 h-3 bg-red-300 rounded"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-2xl text-green-300" />
                        <div className="flex-1 h-3 bg-green-300 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-8 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaVial className="text-3xl text-blue-600" />
                  </div>
                  <div className="absolute -top-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaRobot className="text-3xl text-purple-600" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaBug className="text-3xl text-red-600" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaShieldAlt className="text-3xl text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prioritize Quality */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prioritize Quality with Our Software Testing Services
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide complete testing services to find issues early, reduce costs, and make 
              sure your software meets high-quality standards before it reaches users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prioritizeServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories for Software Testing */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Categories for Software Testing
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Software testing includes different types of testing based on project needs.
            </p>
          </div>

          {/* Functional Testing */}
          <div className="mb-16">
            <div className="text-center mb-8" data-aos="fade-up">
              <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                <FaClipboardList className="text-5xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Functional Testing</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Functional testing checks if the software works as expected. It makes sure every feature follows the given requirements and works correctly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testingCategories.map((category, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{category.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Functional Testing */}
          <div>
            <div className="text-center mb-8" data-aos="fade-up">
              <div className="inline-block bg-purple-100 p-4 rounded-full mb-4">
                <FaCogs className="text-5xl text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Non-Functional Testing</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Non-functional testing checks how well the system works. It focuses on performance, security, usability, reliability, and compatibility — not just features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nonFunctionalTesting.map((test, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      {test.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{test.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{test.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Importance of Testers */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Importance of Testers in Software Development<br />Life Cycle
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Testers play an important role in the software development process. They help ensure quality, find issues early, and make sure the final product meets user and business needs.

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {importancePoints.map((point, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Software Testing Services Lifecycle */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Software Testing Services Lifecycle
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a clear and structured testing process to ensure high quality.
            </p>
          </div>

          {/* Lifecycle Visualization */}
          <div className="max-w-4xl mx-auto mb-12" data-aos="fade-up">
            <div className="relative h-64 flex items-center justify-center">
              {/* Circular Lifecycle Representation */}
              <div className="grid grid-cols-5 gap-4 w-full">
                {testingLifecycle.map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className={`bg-gradient-to-br ${phase.color} text-white rounded-lg p-6 mb-3 hover:scale-105 transition-all duration-300 shadow-lg`}>
                      <h4 className="font-bold text-lg">{phase.phase}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack and Tools */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tech Stack and Tools - What Our QA Team Use
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {techStack.map((stack, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {stack.tools[0].icon}
                </div>
                <h4 className="text-sm font-bold text-gray-900">{stack.category}</h4>
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
                Software Testing Services For All<br />Your Project Needs
              </h2>
            </div>
            <div data-aos="fade-left">
              <button
                onClick={openForm}
                className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Get in Touch
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
    </div>
  );
}

export default SoftwareTesting;
