import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaTasks, FaProjectDiagram, FaUsers, FaChartLine, FaMobileAlt, FaCog,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaLaptop, FaSync,
  FaDatabase, FaTools, FaCogs, FaServer, FaLayerGroup, FaTimes
} from "react-icons/fa";

function WorkflowManagement() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const workflowFeatures = [
    {
      icon: <FaTasks className="text-5xl text-[#fb9c24]" />,
      title: "Task Automation",
      description: "Automate repetitive tasks with triggers, actions, and conditional logic.Our expert Workflow Management Devlopment services ensure smooth execution of daily operations while reducing errors and delays."
    },
    {
      icon: <FaProjectDiagram className="text-5xl text-[#10B981]" />,
      title: "Process Design",
      description: "Design custom workflows using intuitive drag-and-drop tools.We create structured digital processes that align perfectly with your business goals."
    },
    {
      icon: <FaUsers className="text-5xl text-[#8B5CF6]" />,
      title: "Team Collaboration",
      description: "These features enhance communication and speed up decision-making."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#06b6d4]" />,
      title: "Performance Tracking",
      description: "Monitor workflow efficiency, identify bottlenecks, and analyze completion times through real-time dashboards and reporting tools."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#f87171]" />,
      title: "Mobile Workflows",
      description: "Manage and approve workflows from mobile devices anytime, anywhere.Our mobile-enabled systems powered by Workflow Management Devlopment provide flexibility and continuous productivity."
    },
    {
      icon: <FaCog className="text-5xl text-[#fbbf24]" />,
      title: "Integration Hub",
      description: "Seamlessly integrate with CRMs, ERPs, HR systems, and third-party applications for complete workflow automation."
    }
  ];

  const workflowServices = [
    {
      icon: <FaTasks className="text-5xl text-[#fb9c24]" />,
      title: "Workflow Automation Development",
      description: "We build customized automation platforms that simplify complex business operations. Our expertise in Workflow Management Devlopment ensures secure architecture, smooth functionality, and long-term scalability."
    },
    {
      icon: <FaProjectDiagram className="text-5xl text-[#10B981]" />,
      title: "Process Optimization",
      description: "We analyze existing workflows and redesign them to improve efficiency, reduce delays, and enhance performance."
    },
    {
      icon: <FaCog className="text-5xl text-[#8B5CF6]" />,
      title: "System Integration",
      description: "Our team connects workflow systems with your existing software infrastructure to ensure smooth data flow and operational consistency."
    }
  ];

  const benefits = [
    {
      icon: <FaTasks className="text-5xl text-[#fb9c24]" />,
      title: "Increased Efficiency",
      description: "Automate routine processes and eliminate manual bottlenecks."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Better Visibility",
      description: "Gain real-time insights into business operations and workflow performance."
    },
    {
      icon: <FaCog className="text-5xl text-[#8B5CF6]" />,
      title: "Smart Automation",
      description: "Leverage advanced tools developed through professional Workflow Management Devlopment to automate decision-making and improve productivity."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#fb9c24]" />,
      title: "Expert Team",
      description: "Our experienced developers and analysts specialize in workflow automation and business process improvement."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Best Practices",
      description: "We follow proven development methodologies to ensure reliable and scalable solutions."
    },
    {
      icon: <FaClock className="text-5xl text-[#8B5CF6]" />,
      title: "On-Time Delivery",
      description: "Agile development ensures timely project completion."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#f87171]" />,
      title: "Quality Assurance",
      description: "Every solution undergoes rigorous testing to guarantee performance, security, and reliability."
    }
  ];

  const faqs = [
    {
      question: "What does a workflow automation development company do?",
      answer: "A workflow automation development company builds digital systems that automate business processes, reduce manual tasks, and improve operational efficiency. At BTJ Alpha Technology, we specialize in Workflow Management Development to create secure, scalable, and high-performance automation platforms."
    },
    {
      question: "What features are included in your workflow management solutions?",
      answer: "Our Workflow Management Development solutions include: Task automation with triggers and conditional logic,Custom workflow design tools,Approval systems and task assignments,Real-time performance tracking dashboards,Mobile workflow access,Third-party system integrations"
    },
    {
      question: "Can you automate complex business processes?",
      answer: "Yes. We design and implement structured automation systems that streamline approvals, reduce bottlenecks, and improve cross-department collaboration."
    },
    {

      question: "Do you offer workflow integration with existing software?",
      answer: "Absolutely. We integrate workflow platforms with CRM, ERP, HR systems, and other enterprise tools to ensure seamless data flow and operational consistency."
    },
    {
      question: "Is your workflow automation software scalable?",
      answer: "Yes. Our Workflow Management Development approach ensures your automation platform can scale as your business grows and processes become more complex."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right" className="lg:pl-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Workflow Software Development Company – Automate Business Processes & Improve Team Productivity
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                BTJ Alpha Technology is a trusted Workflow Software Development Company delivering smart, secure, and scalable automation platforms for modern businesses.
                We design and develop powerful workflow software that helps organizations automate approvals, manage tasks, streamline operations, and eliminate manual bottlenecks.
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
                {/* Workflow Management Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Workflow Icon with gradient background */}
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaProjectDiagram className="text-9xl text-[#fb9c24]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaTasks className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaUsers className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaChartLine className="text-3xl text-[#10B981]" />
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

      {/* Workflow Management Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of Workflow Management
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {workflowFeatures.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#fb9c24] text-center" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-center mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Workflow Management Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {workflowServices.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#fb9c24] text-center" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Workflow Management
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {benefits.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 text-center" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BTJ Alpha Technology?
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 container mx-auto px-4">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#fb9c24] text-center" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with BTJ Alpha Technology for reliable and scalable Workflow Management Devlopment solutions. We help businesses streamline operations, enhance collaboration, and achieve higher productivity with powerful automation platforms.
          </p>
          <button
            onClick={openForm}
            className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay={i * 50}>
                <button onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  {openFAQ === i ? <FaChevronUp className="text-[#fb9c24] flex-shrink-0" /> : <FaChevronDown className="text-gray-400 flex-shrink-0" />}
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFAQ === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
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
    </div>
  );
}

export default WorkflowManagement;