import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBrain, FaRobot, FaChartLine, FaDatabase, FaCog, FaLightbulb } from "react-icons/fa";

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
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);

  const features = [
    {
      icon: <FaBrain className="text-4xl text-[#fb9c24]" />,
      title: "Machine Learning Models",
      description: "Custom ML models tailored to your business needs, from predictive analytics to pattern recognition.",
    },
    {
      icon: <FaRobot className="text-4xl text-[#fb9c24]" />,
      title: "AI Chatbots",
      description: "Intelligent conversational agents powered by NLP for enhanced customer support and engagement.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Predictive Analytics",
      description: "Leverage data-driven insights to forecast trends, behavior patterns, and business outcomes.",
    },
    {
      icon: <FaDatabase className="text-4xl text-[#fb9c24]" />,
      title: "Data Processing",
      description: "Advanced data cleaning, transformation, and preparation for accurate AI model training.",
    },
    {
      icon: <FaCog className="text-4xl text-[#fb9c24]" />,
      title: "Model Deployment",
      description: "Seamless integration of AI models into production environments with continuous monitoring.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#fb9c24]" />,
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI solutions that drive innovation and business value.",
    },
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenAI", "Hugging Face",
    "Python", "R", "Azure AI", "AWS SageMaker", "Google Cloud AI", "OpenCV"
  ];

  const useCases = [
    {
      title: "Healthcare",
      description: "Disease prediction, medical image analysis, and patient care optimization.",
    },
    {
      title: "E-Commerce",
      description: "Personalized recommendations, demand forecasting, and inventory management.",
    },
    {
      title: "Finance",
      description: "Fraud detection, risk assessment, and algorithmic trading systems.",
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1c438d] to-[#0d2552] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI & Machine Learning Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Transform your business with intelligent automation, predictive insights, and cutting-edge AI technology.
              We build custom ML models that learn from your data and deliver measurable results.
            </p>
            <button
              onClick={openForm}
              className="bg-[#fb9c24] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your AI Journey
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Our AI & ML Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#1c438d] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-[#fb9c24] text-[#1c438d] font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Industry Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-[#1c438d] to-[#0d2552] text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-white/90 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#fb9c24] to-orange-600">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how AI and Machine Learning can transform your business and give you a competitive edge.
          </p>
          <button
            onClick={openForm}
            className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Popup Form */}
      {isPopupOpen && <UserForm onClose={closeForm} />}
    </div>
  );
}

export default AIandML;
