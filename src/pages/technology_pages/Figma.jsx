import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFigma, FaPalette, FaUsers, FaPuzzlePiece, FaMobileAlt, FaCode,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaLaptop,
  FaSync, FaDatabase, FaChartLine, FaTools, FaCogs, FaRocket, FaShieldAlt
} from "react-icons/fa";

function Figma() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const figmaFeatures = [
    {
      icon: <FaFigma className="text-5xl text-[#f24e1e]" />,
      title: "Collaborative Design",
      description: "Figma allows real-time collaboration, enabling teams to work together seamlessly without version conflicts. Designers, developers, and stakeholders can contribute in one shared workspace."
    },
    {
      icon: <FaPalette className="text-5xl text-[#f24e1e]" />,
      title: "Vector Design Tools",
      description: "Powerful vector editing tools help create pixel-perfect layouts, icons, and custom UI elements with precision."
    },
    {
      icon: <FaUsers className="text-5xl text-[#f24e1e]" />,
      title: "Design Systems",
      description: "Build and maintain consistent design systems with reusable components, styles, and libraries to ensure brand consistency."
    },
    {
      icon: <FaPuzzlePiece className="text-5xl text-[#f24e1e]" />,
      title: "Prototyping",
      description: "Create interactive prototypes with smooth animations and transitions to test user flows before development."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#f24e1e]" />,
      title: "Responsive Design",
      description: "Design responsive interfaces that adapt perfectly across desktop, tablet, and mobile devices."
    },
    {
      icon: <FaCode className="text-5xl text-[#f24e1e]" />,
      title: "Developer Handoff",
      description: "Generate CSS, iOS, and Android code snippets for seamless handoff from design to development."
    }
  ];

  const figmaServices = [
    {
      icon: <FaCode className="text-5xl text-[#f24e1e]" />,
      title: "UI/UX Design",
      description: "We create beautiful and intuitive user interfaces using Figma’s collaborative tools to enhance user experience."
    },
    {
      icon: <FaPalette className="text-5xl text-[#10B981]" />,
      title: "Design Systems",
      description: "Our team builds scalable design systems with reusable components and style guides for long-term efficiency."
    },
    {
      icon: <FaPuzzlePiece className="text-5xl text-[#8B5CF6]" />,
      title: "Prototyping",
      description: "We design interactive prototypes to visualize product functionality and improve user testing before launch."
    }
  ];

  const benefits = [
    {
      icon: <FaFigma className="text-5xl text-[#f24e1e]" />,
      title: "Real-Time Collaboration",
      description: "Work together with your team instantly without file-sharing issues or delays."
    },
    {
      icon: <FaRocket className="text-5xl text-[#fb9c24]" />,
      title: "Enhanced Productivity",
      description: "Streamlined workflows help accelerate the design process and reduce turnaround time."
    },
    {
      icon: <FaUsers className="text-5xl text-[#10B981]" />,
      title: "Seamless Handoff",
      description: "Smooth transition from design to development with accurate specifications and code references."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#f24e1e]" />,
      title: "Expert Designers",
      description: "Our skilled Figma professionals have extensive experience in UI/UX and modern design trends."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Best Practices",
      description: "We follow clean design principles and structured workflows for efficient project delivery."
    },
    {
      icon: <FaClock className="text-5xl text-[#fb9c24]" />,
      title: "On-Time Delivery",
      description: "Agile processes ensure your project is completed within deadlines."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#8B5CF6]" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and design reviews guarantee pixel-perfect results."
    }
  ];

  const faqs = [
    {
      question: "What is Figma?",
      answer: "Figma is a collaborative web application for interface design, used for creating user interfaces, prototypes, and design systems."
    },
    {
      question: "Why use Figma?",
      answer: "Figma offers real-time collaboration, cloud-based storage, cross-platform compatibility, and seamless developer handoff."
    },
    {
      question: "Is Figma suitable for team collaboration?",
      answer: "Yes, Figma excels at team collaboration with real-time editing, commenting, and version control features."
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
                Figma Design<br />
                Company
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At BTJ Alpha Technology, we are a professional Figma Design Company delivering modern, creative, and user-focused UI/UX solutions. Our designers use Figma’s powerful collaborative platform to create stunning, functional, and user-friendly interfaces for web and mobile applications.
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
                {/* Figma Logo Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Figma Icon with gradient background */}
                    <div className="bg-gradient-to-br from-orange-100 to-red-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaFigma className="text-9xl text-[#f24e1e]" />
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
                    <FaPalette className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaUsers className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Figma Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of Figma
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {figmaFeatures.map((item, i) => (
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
              Our Figma Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
             As a leading Figma Design Company, we provide comprehensive design solutions tailored to your business needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {figmaServices.map((item, i) => (
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
              Benefits of Figma Design
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
            Ready to Create Beautiful Designs with Figma?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with BTJ Alpha Technology, your trusted Figma Design Company, to build engaging and high-performing digital experiences.
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

export default Figma;