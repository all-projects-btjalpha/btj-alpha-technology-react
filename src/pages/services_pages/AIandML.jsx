import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaBrain, FaRobot, FaChartLine, FaDatabase, FaCog, FaLightbulb,
  FaCheckCircle, FaLayerGroup, FaEye, FaShieldAlt, FaCode, FaNetworkWired,
  FaChevronDown, FaChevronUp, FaMicrosoft
} from "react-icons/fa";
import { SiOpenai, SiGoogle } from "react-icons/si";

function AIandML() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const coreServices = [
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      description: "Build intelligent systems that learn from data and improve performance over time without explicit programming."
    },
    {
      icon: <FaCode />,
      title: "Natural Language Processing (NLP)",
      description: "Enable machines to understand, interpret, and generate human language for better communication."
    },
    {
      icon: <FaRobot />,
      title: "Chatbot Development",
      description: "Create intelligent conversational AI agents that provide 24/7 customer support and engagement."
    },
    {
      icon: <FaNetworkWired />,
      title: "AI Product Development",
      description: "Transform ideas into market-ready AI products with end-to-end development and deployment."
    },
    {
      icon: <FaEye />,
      title: "Computer Vision",
      description: "Develop systems that can identify and process images and videos, enabling visual intelligence."
    },
    {
      icon: <FaChartLine />,
      title: "Predictive Modeling",
      description: "Leverage historical data to predict future outcomes and make data-driven business decisions."
    },
    {
      icon: <FaLayerGroup />,
      title: "Enterprise Vision Development",
      description: "Build custom computer vision solutions for quality control, surveillance, and visual inspection."
    },
    {
      icon: <FaDatabase />,
      title: "Deep Learning Solutions",
      description: "Implement neural networks that mimic human brain functions for complex pattern recognition."
    },
    {
      icon: <FaShieldAlt />,
      title: "Robotic Process Automation (RPA)",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce operational costs."
    }
  ];

  const aiModels = [
    { name: "GPT 4 & 4.1", icon: <SiOpenai className="text-5xl" />, color: "#10a37f" },
    { name: "OpenAI", icon: <SiOpenai className="text-5xl" />, color: "#10a37f" },
    { name: "Microsoft Phi-3", icon: <FaMicrosoft className="text-5xl" />, color: "#0078d4" },
    { name: "Gemini", icon: <SiGoogle className="text-5xl" />, color: "#4285f4" },
    { name: "Claude", icon: <FaBrain className="text-5xl" />, color: "#d97757" },
  ];

  const features = [
    {
      icon: <FaCog className="text-5xl text-[#fb9c24]" />,
      title: "Cognitive AI",
      description: "Cognitive AI systems replicate human cognitive functions, enabling machines to reason, learn, and make decisions like humans. These systems excel in understanding context and adapting to new information."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-green-500" />,
      title: "Next-gen Solutions",
      description: "Next-gen solutions leverage cutting-edge AI technologies to provide innovative answers to modern business challenges. From automation to predictive analytics, we deliver future-ready systems."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-blue-500" />,
      title: "Virtual Assistance",
      description: "Virtual assistants powered by AI can handle customer queries, schedule appointments, and perform tasks autonomously. They provide 24/7 support, improving customer experience significantly."
    },
    {
      icon: <FaEye className="text-5xl text-purple-500" />,
      title: "Data Insights",
      description: "Data insights from AI help businesses understand patterns, trends, and anomalies in large datasets. By leveraging machine learning, we transform raw data into actionable intelligence for strategic decision-making."
    }
  ];

  const industries = {
    column1: [
      "Healthcare",
      "Travel & Hospitality",
      "Education",
      "Retail"
    ],
    column2: [
      "E-commerce",
      "Real Estate",
      "Finance",
      "Manufacturing"
    ],
    column3: [
      "Banking and Finance",
      "Automotive",
      "Logistics"
    ]
  };

  const whyChooseUs = [
    {
      title: "Experienced AI Experts",
      description: "Our team consists of highly skilled AI professionals with years of experience in delivering cutting-edge solutions.",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Client-Centric Approach",
      description: "We prioritize our clients' needs and work closely with them to ensure solutions align with their business goals.",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Proven Track Record",
      description: "We have successfully delivered AI projects across various industries, helping businesses achieve measurable results.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Affordable Pricing",
      description: "We offer competitive pricing without compromising on quality, making AI accessible to businesses of all sizes.",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const faqs = [
    {
      question: "What Security Measures Are you Implement While Offering AI ML Development Services?",
      answer: "We implement end-to-end encryption, secure data storage, regular security audits, compliance with GDPR and other regulations, and use industry-standard security protocols to protect your data and AI models."
    },
    {
      question: "What use AI & ML for My Business?",
      answer: "AI & ML can automate repetitive tasks, provide data-driven insights, improve customer experience, predict trends, reduce operational costs, and give you a competitive advantage in your industry."
    },
    {
      question: "How Long Does the AI and Machine Learning Services Development Typically Takes? Discussing and in Designing?",
      answer: "Project timelines vary based on complexity. Simple AI solutions may take 2-3 months, while complex enterprise systems can take 6-12 months. We provide detailed timeline estimates after understanding your requirements."
    },
    {
      question: "Can you Integrate the the existing software?",
      answer: "Yes, we specialize in seamless integration of AI/ML solutions with your existing software infrastructure, whether it's cloud-based, on-premise, or hybrid systems."
    },
    {
      question: "How can AI be the Technology for my Project Grow?",
      answer: "AI can scale with your business by automating processes, analyzing large datasets, personalizing user experiences, predicting future trends, and continuously learning from new data to improve performance."
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c438d] mb-6 leading-tight">
                AI & ML Software<br />
                Development<br />
                Company
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Get ahead of change. Seamlessly guided intelligent AI/ML that will elevate your business to new heights. With our advanced AI and ML solutions, we empower businesses to automate processes, gain actionable insights, and drive innovation in today's competitive landscape.
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
              <div className="relative w-full h-[400px] md:h-[500px]">
                {/* Animated Background Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse delay-100"></div>
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-cyan-200 rounded-full opacity-50 animate-pulse delay-200"></div>
                </div>
                
                {/* Central AI Brain Illustration */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <FaBrain className="text-[150px] md:text-[200px] text-[#1c438d] opacity-20 animate-pulse" />
                </div>

                {/* Floating Icons */}
                <div className="absolute top-10 left-10 bg-white p-4 rounded-lg shadow-lg animate-bounce">
                  <FaDatabase className="text-3xl text-[#fb9c24]" />
                </div>
                <div className="absolute top-10 right-10 bg-white p-4 rounded-lg shadow-lg animate-bounce delay-100">
                  <FaChartLine className="text-3xl text-green-500" />
                </div>
                <div className="absolute bottom-10 left-10 bg-white p-4 rounded-lg shadow-lg animate-bounce delay-200">
                  <FaRobot className="text-3xl text-blue-500" />
                </div>
                <div className="absolute bottom-10 right-10 bg-white p-4 rounded-lg shadow-lg animate-bounce delay-300">
                  <FaCog className="text-3xl text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elevate Your Business Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div data-aos="fade-right" className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaChartLine className="text-4xl text-[#fb9c24] mb-3" />
                    <h4 className="font-bold text-gray-800">Analytics</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaDatabase className="text-4xl text-blue-500 mb-3" />
                    <h4 className="font-bold text-gray-800">Big Data</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaBrain className="text-4xl text-purple-500 mb-3" />
                    <h4 className="font-bold text-gray-800">AI Models</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaRobot className="text-4xl text-green-500 mb-3" />
                    <h4 className="font-bold text-gray-800">Automation</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c438d] mb-6">
                Elevate Your Business with Our Premier AI Development Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Transform your business with our AI development services that leverage cutting-edge technologies. We specialize in building intelligent AI systems that learn, adapt, and provide actionable insights.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team of AI experts works closely with you to understand your unique challenges and develop custom AI solutions that drive innovation, improve efficiency, and deliver measurable business value.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Custom AI/ML model development tailored to your business needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Seamless integration with existing systems and workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Scalable solutions that grow with your business</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Ongoing support and continuous model optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Development Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c438d] mb-4">
              Our Core Artificial Intelligence Development Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Leverage our comprehensive AI development services to transform your business with intelligent automation and data-driven insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-4xl text-[#fb9c24] mb-4 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1c438d] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Models Expertise */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            We Have Expertise in Various AI Models
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {aiModels.map((model, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300"
              >
                <div 
                  className="p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all"
                  style={{ color: model.color }}
                >
                  {model.icon}
                </div>
                <span className="font-semibold text-gray-700">{model.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features of AI */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Features of AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex gap-6 bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1c438d] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific AI Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Industry-Specific AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div data-aos="fade-up" data-aos-delay="0">
              <ul className="space-y-3">
                {industries.column1.map((industry, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 hover:text-[#fb9c24] transition-colors cursor-pointer">
                    <FaCheckCircle className="text-[#fb9c24] flex-shrink-0" />
                    <span className="font-medium">{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <ul className="space-y-3">
                {industries.column2.map((industry, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 hover:text-[#fb9c24] transition-colors cursor-pointer">
                    <FaCheckCircle className="text-[#fb9c24] flex-shrink-0" />
                    <span className="font-medium">{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <ul className="space-y-3">
                {industries.column3.map((industry, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 hover:text-[#fb9c24] transition-colors cursor-pointer">
                    <FaCheckCircle className="text-[#fb9c24] flex-shrink-0" />
                    <span className="font-medium">{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Got An Idea? Let's Craft Brilliance Together
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Transform your vision into reality with our expert AI development team. Let's build something amazing together.
              </p>
            </div>
            <div data-aos="fade-left">
              <button
                onClick={openForm}
                className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Connect with Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Why BTJ Alpha Technology?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`bg-gradient-to-br ${item.color} text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
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
    </div>
  );
}

export default AIandML;
