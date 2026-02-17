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
      description: "Our manual testing services involve experienced QA professionals who meticulously test your software to identify bugs, usability issues, and inconsistencies. We ensure comprehensive test coverage across all features and user scenarios."
    },
    {
      icon: <FaRobot className="text-5xl text-cyan-500" />,
      title: "Automation Testing",
      description: "We implement automated test scripts using industry-leading tools like Selenium, Cypress, and Jest to accelerate testing cycles, improve accuracy, and provide faster feedback on code changes."
    },
    {
      icon: <FaTachometerAlt className="text-5xl text-red-500" />,
      title: "Mobile App Testing Services",
      description: "Our mobile app testing ensures your iOS and Android applications work flawlessly across different devices, screen sizes, and OS versions. We test functionality, performance, and user experience."
    },
    {
      icon: <FaUserCheck className="text-5xl text-purple-500" />,
      title: "Usability Testing",
      description: "We evaluate your application from the end-user perspective, identifying navigation issues, confusing interfaces, and areas where user experience can be improved for better engagement."
    },
    {
      icon: <FaChartLine className="text-5xl text-green-500" />,
      title: "Performance Testing",
      description: "Load, stress, and performance testing to ensure your application can handle expected traffic volumes and maintains optimal response times under various conditions."
    },
    {
      icon: <FaLock className="text-5xl text-blue-600" />,
      title: "Penetration Testing (Security)",
      description: "Our security experts identify vulnerabilities and potential security breaches before malicious actors can exploit them, ensuring your application meets security compliance standards."
    }
  ];

  const testingCategories = [
    {
      icon: <FaMobileAlt className="text-5xl text-blue-500" />,
      title: "Functional Testing",
      description: "Functional testing is a type of testing that validates the software system against the functional requirements. We verify that each function of the software operates in conformance with the requirement specification."
    },
    {
      icon: <FaCogs className="text-5xl text-purple-500" />,
      title: "Integration Testing",
      description: "Integration testing ensures that different modules or services used by your application work well together. We test the interfaces between components, data transfers, and communication between systems."
    },
    {
      icon: <FaDesktop className="text-5xl text-cyan-500" />,
      title: "System Testing",
      description: "System testing evaluates the complete integrated system to verify that it meets specified requirements. We test the entire system as a whole, including all interfaces and interactions."
    },
    {
      icon: <FaClipboardList className="text-5xl text-green-500" />,
      title: "Acceptance Testing",
      description: "User Acceptance Testing (UAT) validates that the software meets business requirements and is ready for deployment. We work with stakeholders to ensure all acceptance criteria are met."
    }
  ];

  const nonFunctionalTesting = [
    {
      icon: <FaTachometerAlt className="text-5xl text-orange-500" />,
      title: "Performance Testing",
      description: "Performance testing checks system behavior and response time under various load conditions. We simulate different user loads to identify bottlenecks and optimize application performance."
    },
    {
      icon: <FaLock className="text-5xl text-red-500" />,
      title: "Security Testing",
      description: "Security testing identifies vulnerabilities, threats, and risks in the software application. We perform penetration testing, vulnerability assessment, and security audits to protect your data."
    },
    {
      icon: <FaUsers className="text-5xl text-blue-500" />,
      title: "Compatibility Testing",
      description: "Compatibility testing ensures your application works across different browsers, devices, operating systems, and network environments without any issues or degraded performance."
    },
    {
      icon: <FaServer className="text-5xl text-purple-500" />,
      title: "Reliability Testing",
      description: "Reliability testing verifies that the software can perform failure-free operation for a specified period in a particular environment. We test stability, availability, and fault tolerance."
    },
    {
      icon: <FaGlobe className="text-5xl text-cyan-500" />,
      title: "Usability Testing",
      description: "Usability testing evaluates how easy and user-friendly the software interface is. We assess navigation, layout, content, and overall user experience to ensure customer satisfaction."
    }
  ];

  const importancePoints = [
    {
      title: "Ensuring Quality",
      description: "Testers play a crucial role in ensuring that the software meets quality standards and user expectations. They identify defects early, reducing the cost of fixes and improving overall product quality."
    },
    {
      title: "Reducing Risks",
      description: "Early detection of bugs and issues through systematic testing reduces the risk of software failures in production, protecting brand reputation and user trust."
    },
    {
      title: "Validating User Experience",
      description: "Testers validate that the software provides a seamless and intuitive user experience, ensuring end-users can accomplish their goals efficiently and without frustration."
    },
    {
      title: "Collaborating with Development Team",
      description: "Testers work closely with developers to understand requirements, report issues clearly, and verify fixes, fostering a collaborative environment for quality software delivery."
    },
    {
      title: "Continuous Improvement",
      description: "Through continuous testing and feedback loops, testers help teams identify areas for improvement, optimize processes, and adopt best practices for long-term success."
    }
  ];

  const testingLifecycle = [
    {
      phase: "Planning",
      description: "Define testing scope, objectives, resources, and schedule. Create test strategy and identify testing tools.",
      color: "from-gray-500 to-gray-700"
    },
    {
      phase: "Design",
      description: "Create detailed test cases, test scripts, and test data based on requirements and user stories.",
      color: "from-blue-500 to-blue-700"
    },
    {
      phase: "Delivery",
      description: "Set up test environment, prepare test data, and ensure all prerequisites are ready for execution.",
      color: "from-orange-500 to-orange-700"
    },
    {
      phase: "Implementation",
      description: "Execute test cases, document results, report defects, and verify fixes through regression testing.",
      color: "from-red-500 to-red-700"
    },
    {
      phase: "Stabilization",
      description: "Perform final validation, regression testing, and ensure all critical issues are resolved before release.",
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
                At BTJ Alpha Technology, we provide comprehensive software testing and quality assurance services to ensure your applications are bug-free, secure, and perform optimally. Our experienced QA team uses industry-leading tools and methodologies to deliver reliable testing solutions from manual testing to full test automation.
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
              We offer comprehensive testing services designed to identify issues early, reduce costs, 
              and ensure your software meets the highest quality standards before reaching end-users.
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
              Software testing is a broad term that covers all types of testing for various project requirements.
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
                Functional testing is a type of testing that validates the software system against the functional requirements/specifications. 
                The purpose is to verify that each function of the software application operates in conformance with the requirement specification.
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
                Non-functional testing evaluates the non-functional aspects such as performance, usability, reliability, and security. 
                It tests how well the system performs rather than what specific functions it performs.
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
              Testers play a vital role throughout the software development lifecycle, ensuring quality, 
              identifying issues early, and validating that the final product meets user expectations and business requirements.
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
              We follow a structured testing lifecycle approach to ensure comprehensive quality assurance.
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
