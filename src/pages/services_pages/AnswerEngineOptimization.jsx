import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
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
      description: "Optimize your content for AI-powered search engines like ChatGPT, Bard, and Bing AI to appear in direct answers and featured snippets."
    },
    {
      icon: <FaMicrophone className="text-5xl text-green-600" />,
      title: "Voice Search SEO",
      description: "Optimize for voice assistants like Alexa, Siri, and Google Assistant with conversational content and natural language queries."
    },
    {
      icon: <FaSearch className="text-5xl text-orange-600" />,
      title: "Featured Snippets",
      description: "Structure content to appear in featured snippets and answer boxes across search engines for maximum visibility."
    },
    {
      icon: <FaBrain className="text-5xl text-purple-600" />,
      title: "Natural Language Processing",
      description: "Optimize content for natural language queries and conversational search patterns used by modern search engines."
    },
    {
      icon: <FaComments className="text-5xl text-cyan-600" />,
      title: "Q&A Content Strategy",
      description: "Create question-answer format content that AI engines prefer and users find helpful for better search rankings."
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
      answer: "Answer Engine Optimization is the process of optimizing content specifically for AI-powered search engines and voice assistants. Unlike traditional SEO that focuses on keywords, AEO emphasizes creating helpful, direct answers to user questions in a conversational format that AI systems can easily understand and present as answers."
    },
    {
      question: "How is AEO different from traditional SEO?",
      answer: "Traditional SEO focuses on keyword rankings and backlinks, while AEO optimizes for natural language queries, featured snippets, and direct answers. AEO emphasizes question-answer content format, conversational tone, and providing immediate value to users rather than just targeting specific keywords."
    },
    {
      question: "Which platforms benefit from AEO?",
      answer: "AEO benefits content appearing in ChatGPT, Google Bard, Bing AI, voice assistants (Alexa, Siri, Google Assistant), and featured snippets across search engines. It's particularly effective for knowledge panels, direct answers, and voice search results."
    },
    {
      question: "How long does it take to see AEO results?",
      answer: "AEO results typically appear within 3-6 months as AI systems index and understand your optimized content structure. The timeline depends on content quality, competition, and how quickly search engines recognize your content as authoritative for specific queries."
    },
    {
      question: "What type of content works best for AEO?",
      answer: "Question-answer format content, how-to guides, step-by-step tutorials, comparison articles, and FAQ sections perform exceptionally well for AEO. Content should be structured with clear headings, direct answers, and helpful information that addresses user intent comprehensively."
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
                Answer Engine<br />
                Optimization<br />
                Services
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Prepare for the future of search with AEO. Optimize your content for AI-powered answer engines and voice search to stay ahead of the curve and capture traffic from the next generation of search technology.
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
                Ready to Future-Proof Your SEO?<br />
                Get Expert AEO Services Today
              </h2>
            </div>
            <div data-aos="fade-left">
              <button
                onClick={openForm}
                className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Contact Us
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