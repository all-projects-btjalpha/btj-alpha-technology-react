import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCode, FaShieldAlt, FaServer, FaRocket, FaLayerGroup,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaUsers,
  FaLaptop, FaSync, FaChartLine, FaTools, FaCogs, FaMobileAlt
} from "react-icons/fa";

function Telerik() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const telerikFeatures = [
    {
      icon: <FaCode className="text-5xl text-[#512bd4]" />,
      title: "Rich UI Components",
      description: "We use Telerik’s advanced UI libraries to create responsive, interactive, and enterprise-ready applications."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#512bd4]" />,
      title: "Enterprise-Level Security",
      description: "Applications are built following secure coding standards with authentication, role management, and compliance-ready architecture."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#512bd4]" />,
      title: "Cross-Platform Compatibility",
      description: "Deploy applications across web, desktop, and mobile platforms using a single technology stack."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#512bd4]" />,
      title: "Advanced Data Visualization",
      description: "Build dynamic dashboards using Telerik charts, grids, and reporting tools to turn data into insights."
    },
    {
      icon: <FaCogs className="text-5xl text-[#512bd4]" />,
      title: " Seamless Integration",
      description: "We integrate Telerik applications with ERP systems, CRM software, cloud platforms, and third-party APIs."
    },
    {
      icon: <FaLayerGroup className="text-5xl text-[#512bd4]" />,
      title: "Scalability Architecture",
      description: "Our solutions are designed for growing enterprises requiring long-term stability and performance."
    }
  ];

  const telerikServices = [
    {
      icon: <FaCode className="text-5xl text-[#512bd4]" />,
      title: "Custom Telerik Application Development",
      description: "We build enterprise-grade applications using Telerik UI for ASP.NET Core, Blazor, and MVC frameworks."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Dashboard & Reporting Solutions",
      description: "Design interactive dashboards with Telerik Reporting and advanced data visualization components."
    },
    {
      icon: <FaServer className="text-5xl text-[#8B5CF6]" />,
      title: "UI/UX Modernization",
      description: "Upgrade legacy systems with modern Telerik UI components to enhance usability and performance."
    }
  ];

  const benefits = [
    {
      icon: <FaCode className="text-5xl text-[#512bd4]" />,
      title: " Faster Development",
      description: "Pre-built components reduce development time and overall project cost."
    },
    {
      icon: <FaRocket className="text-5xl text-[#fb9c24]" />,
      title: "High Performance",
      description: "Optimized UI components ensure fast loading and smooth user experience."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#10B981]" />,
      title: "Enterprise-Grade Reliability",
      description: "Robust architecture designed for mission-critical applications."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#512bd4]" />,
      title: " Certified Telerik Experts",
      description: "Experienced developers specializing in Telerik UI for Blazor, ASP.NET, Angular, and React."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: " Agile & Best Practices",
      description: "We follow agile methodology, secure coding standards, and performance optimization techniques."
    },
    {
      icon: <FaClock className="text-5xl text-[#fb9c24]" />,
      title: " On-Time Project Delivery",
      description: "Timely execution without compromising quality."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#8B5CF6]" />,
      title: " Comprehensive Quality Testing",
      description: "Rigorous testing ensures stable and bug-free applications."
    }
  ];

  const faqs = [
    {
      question: "How can Telerik development benefit enterprise businesses?",
      answer: "Telerik provides advanced UI components and development tools that help build high-performance web, desktop, and mobile applications. BTJ Alpha Technology uses Telerik frameworks to develop secure, scalable, and data-driven enterprise solutions that improve productivity and user experience."
    },
    {
      question: "Why should I choose Telerik for modern .NET application development?",
      answer: "Telerik is built to work seamlessly with Microsoft technologies and offers reliable UI controls, reporting tools, and data visualization components. BTJ Alpha Technology leverages Telerik’s powerful ecosystem to reduce development time while maintaining strong performance and security standards."
    },
    {
      question: "Which platforms and frameworks can Telerik support?",
      answer: "Telerik supports ASP.NET Core, MVC, Blazor, Angular, React, WinForms, and WPF applications. BTJ Alpha Technology builds cross-platform enterprise solutions using the right Telerik framework based on your business requirements and technical architecture."
    },
    {
      question:"Can BTJ Alpha Technology fully customize Telerik applications?",
      answer:"Yes. We customize UI components, dashboards, reporting modules, workflows, and system architecture according to your branding and operational needs. BTJ Alpha Technology ensures your Telerik-based solution aligns perfectly with your business processes."
    },
    {
      question:"Do you provide long-term maintenance and support services?",
      answer:"Yes. BTJ Alpha Technology offers continuous maintenance, version upgrades, performance optimization, and technical support after deployment. Our team ensures your Telerik application remains secure, updated, and scalable as your business grows."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right"className="lg:pl-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Telerik Development<br />
                Services in India
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Looking for reliable Telerik Development Services in India?
                BTJ Alpha Technology delivers scalable, secure, and high-performance enterprise applications using Telerik UI and modern Microsoft technologies.
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
                {/* Telerik Logo Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Telerik Icon with gradient background */}
                    <div className="bg-gradient-to-br from-purple-100 to-indigo-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaCode className="text-9xl text-[#512bd4]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaChartLine className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaMobileAlt className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaShieldAlt className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaCogs className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telerik Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             Key Features of Our Telerik Development
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {telerikFeatures.map((item, i) => (
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
              Our Telerik Development Services in India
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">BTJ Alpha Technology provides complete Telerik Development Services in India to support startups, SMEs, and large enterprises.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {telerikServices.map((item, i) => (
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
              Benefits of Telerik
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
              Why Choose Us?
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
            Ready to Build with Telerik?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            If you are searching for dependable Telerik Development Services in India, BTJ Alpha Technology is your trusted technology partner.
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

      {isPopupOpen && <UserForm onClose={closeForm} />}
    </div>
  );
}

export default Telerik;