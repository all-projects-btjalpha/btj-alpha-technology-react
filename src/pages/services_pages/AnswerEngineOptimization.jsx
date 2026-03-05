import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { 
  FaRobot, FaSearch, FaMicrophone, FaBrain, FaComments, FaLightbulb,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaCogs, FaCloud,
  FaLock, FaCode, FaSearchPlus, FaChartLine, FaBullseye
} from "react-icons/fa";

function AnswerEngineOptimization() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const aeoServices = [
    {
      icon: <FaRobot className="text-5xl text-blue-600" />,
      title: "AI Search Optimization",
      description: "We optimize your content for AI-driven platforms like ChatGPT and AI-powered search engines to increase visibility in direct answers and intelligent search results."
    },
    {
      icon: <FaMicrophone className="text-5xl text-green-600" />,
      title: "Voice Search SEO",
      description: "With the growth of voice assistants, we optimize your website for conversational queries, long-tail keywords, and natural language searches to improve rankings in voice results."
    },
    {
      icon: <FaSearch className="text-5xl text-orange-600" />,
      title: "Featured Snippets Optimization",
      description: "We structure content to appear in Google�s featured snippets and answer boxes, improving click-through rates and authority positioning."
    },
    {
      icon: <FaBrain className="text-5xl text-purple-600" />,
      title: "Natural Language Processing (NLP) Optimization",
      description: "Our NLP-based content strategy aligns with how modern AI search engines interpret context, intent, and semantic relationships."
    },
    {
      icon: <FaComments className="text-5xl text-cyan-600" />,
      title: "Q&A Content Strategy",
      description: "We develop structured question-answer content formats that AI systems prefer, increasing your chances of appearing in zero-click searches and direct responses."
    }
  ];

  const optimizationFeatures = [
    {
      icon: <FaCloud className="text-5xl text-blue-500" />,
      title: "Future-Proof SEO Strategies for AI-Powered Search Engines",
      description: "Our team of SEO experts specializes in answer engine optimization (AEO) to help your content rank in AI-powered search results. We understand how search engines like ChatGPT, Bard, and other AI assistants process and rank content. Our AEO strategies focus on creating helpful, authoritative content that answers user questions directly, ensuring your business appears in featured snippets and direct answers. We optimize for voice search, featured snippets, and conversational queries to capture traffic from the next generation of search technology."
    }
  ];

  const faqs = [
    {
      question: "What is Answer Engine Optimization (AEO)?",
      answer: "Answer Engine Optimization (AEO) is an advanced SEO strategy that focuses on optimizing website content to appear in AI-powered search engines, voice assistants, and featured snippets. It helps businesses gain visibility in direct answers rather than just traditional search rankings."
    },
    {
      question: "How is AEO different from traditional SEO?",
      answer: "Traditional SEO focuses on ranking web pages in search engine results pages (SERPs). AEO focuses on optimizing content to appear in AI-generated answers, voice search results, featured snippets, and zero-click searches."
    },
    {
      question: "Can AEO help my website appear in AI search platforms?",
      answer: "Yes. With properly structured content, schema markup, and optimized Q&A formats, AEO increases the chances of your website appearing in AI-driven search platforms and intelligent answer engines."
    },
    {
      question: "Is AEO suitable for all types of businesses?",
      answer: "Yes. AEO is beneficial for service-based businesses, SaaS companies, eCommerce platforms, healthcare providers, financial services, educational institutions, and local businesses looking to increase online visibility."
    },
    {
      question: "Does AEO include voice search optimization?",
      answer: "Yes. Voice search optimization is a key component of AEO. It focuses on conversational queries, long-tail keywords, and natural language patterns commonly used in voice searches."
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Answer Engine
                Optimization
                Services
              </h1>
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                Future-Proof Your Business with AI Search Optimization
              </h4>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At BTJ Alpha Technology, we help businesses stay ahead in the evolving digital landscape with advanced Answer Engine Optimization (AEO) services. As search engines shift toward AI-powered results, voice assistants, and direct answer platforms, traditional SEO alone is no longer enough.
                <br></br>Our AEO strategies ensure your content ranks in AI search engines like ChatGPT, Google�s AI search, Bing AI, and voice assistants such as Alexa and Google Assistant. We structure and optimize your content to appear in featured snippets, answer boxes, and conversational search results.

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
                {/* AI Search Illustration */}
                <div className="relative">
                  {/* AI Brain with Search Elements */}
                  <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all w-72">
                    <div className="flex flex-col items-center">
                      <FaBrain className="text-6xl text-white mb-4" />
                      <div className="w-full space-y-2">
                        <div className="h-2 bg-white/30 rounded"></div>
                        <div className="h-2 bg-white/20 rounded w-4/5"></div>
                        <div className="h-2 bg-white/25 rounded w-3/4"></div>
                      </div>
                      <div className="flex justify-center mt-4 space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaSearch className="text-3xl text-blue-600" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaRobot className="text-3xl text-purple-600" />
                  </div>
                  <div className="absolute top-0 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaMicrophone className="text-3xl text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future-Proof SEO Strategies */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Future-Proof SEO Strategies for AI-Powered Search Engines
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div data-aos="fade-right" className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaRobot className="text-4xl text-purple-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">AI Search</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaMicrophone className="text-4xl text-green-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Voice SEO</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaSearch className="text-4xl text-blue-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Featured Snippets</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaComments className="text-4xl text-orange-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Q&A Format</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team of SEO experts specializes in answer engine optimization (AEO) to help your content rank in AI-powered search results. We understand how search engines like ChatGPT, Bard, and other AI assistants process and rank content.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our AEO strategies focus on creating helpful, authoritative content that answers user questions directly, ensuring your business appears in featured snippets and direct answers. We optimize for voice search, featured snippets, and conversational queries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By staying ahead of search engine evolution and algorithm changes, we help you capture traffic from the next generation of search technology and maintain competitive advantage in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aeoServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
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
                Ready to Future-Proof Your SEO?
              </h2>
              <p className="text-white text-lg mb-8 leading-relaxed">AI search is rapidly transforming how users find information online. Don�t let your business fall behind. Partner with BTJ Alpha Technology and dominate AI-powered search results with expert Answer Engine Optimization services.</p>
            </div>
            <div data-aos="fade-left">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <button
                  className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            Frequently Asked Questions (FAQs) � Answer Engine Optimization (AEO)
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

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 max-md:p-2">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white rounded-full p-2 shadow-md"
            >
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

export default AnswerEngineOptimization;