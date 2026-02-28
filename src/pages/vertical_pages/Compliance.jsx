import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaShieldAlt, FaFileAlt, FaCheckCircle, FaExclamationTriangle, FaChartBar, FaLock,
  FaChevronDown, FaChevronUp, FaClock, FaLaptop, FaSync,
  FaDatabase, FaTools, FaCogs, FaServer, FaLayerGroup, FaUsers, FaChartLine
} from "react-icons/fa";

function Compliance() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const complianceFeatures = [
    {
      icon: <FaShieldAlt className="text-5xl text-[#fb9c24]" />,
      title: "Regulatory Compliance",
      description: "Ensure compliance with standards such as GDPR, HIPAA, SOC 2, ISO, and other industry regulations.Our solutions help you stay updated with changing laws and maintain proper documentation through expert Compliance Management Development in India."
    },
    {
      icon: <FaFileAlt className="text-5xl text-[#10B981]" />,
      title: "Document Management",
      description: "Centralize all compliance-related documents, policies, and audit records in one secure system.We create structured repositories that make document tracking and retrieval easy."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#8B5CF6]" />,
      title: "Audit Management",
      description: "Our systems reduce manual effort and improve audit accuracy."
    },
    {
      icon: <FaExclamationTriangle className="text-5xl text-[#06b6d4]" />,
      title: "Risk Assessment",
      description: "Identify, assess, and mitigate compliance risks with automated risk management tools.We provide dashboards that highlight risk levels and corrective actions."
    },
    {
      icon: <FaChartBar className="text-5xl text-[#f87171]" />,
      title: "Compliance Reporting",
      description: "Access real-time dashboards and detailed reports to monitor compliance status and regulatory requirements.Advanced reporting tools powered by Compliance Management Development in India help management make informed decisions."
    },
    {
      icon: <FaLock className="text-5xl text-[#fbbf24]" />,
      title: "Data Security",
      description: "Protect sensitive compliance data with encryption, role-based access control, and multi-layer security protocols.Security is integrated into every stage of development."
    }
  ];

  const complianceServices = [
    {
      icon: <FaShieldAlt className="text-5xl text-[#fb9c24]" />,
      title: "Compliance Management System Development",
      description: "BTJ Alpha Technology builds customized compliance management platforms tailored to your business needs. Our expertise in Compliance Management Development in India ensures high-performance, secure, and future-ready systems."
    },
    {
      icon: <FaFileAlt className="text-5xl text-[#10B981]" />,
      title: "Document & Policy Management Solutions",
      description: "We develop centralized platforms for managing policies, procedures, and compliance records efficiently."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#8B5CF6]" />,
      title: "Audit & Risk Management Solutions",
      description: "Our systems automate audit workflows and risk tracking to improve operational efficiency and regulatory adherence."
    }
  ];

  const benefits = [
    {
      icon: <FaShieldAlt className="text-5xl text-[#fb9c24]" />,
      title: "Improved Confidence",
      description: "Stay compliant with confidence using automated tools and structured workflows."
    },
    {
      icon: <FaChartBar className="text-5xl text-[#10B981]" />,
      title: "Real-Time Reporting",
      description: "Track compliance performance with live dashboards and instant reporting features."
    },
    {
      icon: <FaLock className="text-5xl text-[#8B5CF6]" />,
      title: "Enhanced Security",
      description: "Protect confidential data with robust security systems built using industry best practices and modern Compliance Management Development in India standards."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#fb9c24]" />,
      title: "Expert Team",
      description: "Our team has deep experience in compliance and regulatory technology solutions."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Best Practices",
      description: "We follow industry standards and proven methodologies for reliable system development."
    },
    {
      icon: <FaClock className="text-5xl text-[#8B5CF6]" />,
      title: "On-Time Delivery",
      description: "Agile processes ensure timely project completion without compromising quality."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#f87171]" />,
      title: "Quality Assurance",
      description: "Every solution undergoes thorough testing to ensure security, performance, and reliability."
    }
  ];

  const faqs = [
    {
      question: "What is Compliance Management Software and why is it important for businesses in India?",
      answer: "Compliance Management Software is a digital platform that helps organizations track, manage, and document regulatory requirements, policies, and risk controls. In India, businesses must comply with various industry regulations, tax rules, corporate governance laws, and data protection standards. BTJ Alpha Technology develops Compliance Management Software that centralizes compliance processes, reduces manual errors, and ensures businesses stay audit-ready at all times."
    },
    {
      question: "Which industries can benefit from Compliance Management Software Development in India",
      answer: "Our Compliance Management Software Development services in India support industries such as:Financial Services & Banking,Healthcare & Pharmaceuticals,Manufacturing & Supply Chain,IT & SaaS Companies,Corporate Enterprises,Government & Regulatory Bodies"
    },
    {
      question: "Can your Compliance Management Software integrate with existing ERP or business systems?",
      answer: "Yes. BTJ Alpha Technology builds compliance platforms that integrate seamlessly with ERP systems, HR software, accounting tools, document management systems, and third-party APIs. This ensures centralized data flow, automated compliance tracking, and reduced duplication of work across departments."
    },
    {
      question: "How secure is your Compliance Management Software?",
      answer: "Security is a top priority at BTJ Alpha Technology. Our Compliance Management Software Development in India includes encrypted data storage, role-based access control, audit trails, secure authentication protocols, and cloud-based backup systems to ensure complete data protection and regulatory alignment."
    },
    {
      question: " How does compliance software improve audit readiness and risk management?",
      answer: "Compliance software helps organizations maintain structured documentation, automate alerts for deadlines, track risk mitigation plans, and generate detailed audit reports instantly. With solutions developed by BTJ Alpha Technology, businesses can reduce penalties, avoid compliance gaps, and maintain complete transparency during regulatory audits."
    },

  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right"className="lg:pl-16">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Compliance Management Software Development Company in India 
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                BTJ Alpha Technology is a trusted Compliance Management Software Development Company in India delivering secure, scalable, and high-performance compliance platforms for modern businesses.</p>
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
                {/* Compliance Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Compliance Icon with gradient background */}
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaShieldAlt className="text-9xl text-[#fb9c24]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaFileAlt className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaCheckCircle className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaExclamationTriangle className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaChartBar className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of Compliance Management
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {complianceFeatures.map((item, i) => (
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
              Our Compliance Management Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {complianceServices.map((item, i) => (
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
              Benefits of Compliance Management Technology
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
            Ready to Ensure Compliance?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with BTJ Alpha Technology for professional and scalable Compliance Management Development in India. We help businesses stay compliant, reduce risks, and maintain complete audit readiness with smart and secure technology solutions.
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

export default Compliance;