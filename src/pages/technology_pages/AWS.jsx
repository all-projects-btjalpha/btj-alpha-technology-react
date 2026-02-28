import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaAws, FaCloud, FaServer, FaShieldAlt, FaDatabase, FaRocket,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaUsers,
  FaLaptop, FaSync, FaChartLine, FaTools, FaCogs, FaCode, FaMobileAlt
} from "react-icons/fa";

function AWS() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const awsFeatures = [
    {
      icon: <FaAws className="text-5xl text-[#ff9900]" />,
      title: "Leading Cloud Platform",
      description: "AWS is the world’s most comprehensive and widely adopted cloud platform, offering 200+ fully featured services from global data centers."
    },
    {
      icon: <FaCloud className="text-5xl text-[#ff9900]" />,
      title: "Scalable Infrastructure",
      description: "Easily scale compute, storage, and networking resources based on demand. AWS allows businesses to grow without worrying about infrastructure limitations."
    },
    {
      icon: <FaServer className="text-5xl text-[#ff9900]" />,
      title: "EC2 & Lambda",
      description: "Flexible computing options with Amazon EC2 for virtual servers and AWS Lambda for serverless execution. Run applications efficiently without managing physical servers."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#ff9900]" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with IAM, encryption, and multiple compliance certifications to protect your data and applications."
    },
    {
      icon: <FaDatabase className="text-5xl text-[#ff9900]" />,
      title: "Database Services",
      description: "Fully managed database solutions like RDS, DynamoDB, and Aurora to handle any workload securely and efficiently."
    },
    {
      icon: <FaRocket className="text-5xl text-[#ff9900]" />,
      title: "Global Infrastructure",
      description: "Deploy applications worldwide using AWS’s extensive network of regions and availability zones for high availability and low latency."
    }
  ];

  const awsServices = [
    {
      icon: <FaCode className="text-5xl text-[#ff9900]" />,
      title: "Cloud Migration",
      description: "We help migrate your existing infrastructure and applications to AWS with minimal downtime and zero data loss."
    },
    {
      icon: <FaCloud className="text-5xl text-[#10B981]" />,
      title: "Infrastructure as Code",
      description: "Using AWS CloudFormation and Terraform, we automate provisioning and management of your cloud resources for better efficiency and control."
    },
    {
      icon: <FaServer className="text-5xl text-[#8B5CF6]" />,
      title: "Serverless Solutions",
      description: "We build cost-effective serverless applications using AWS Lambda and other AWS tools to reduce operational overhead."
    }
  ];

  const benefits = [
    {
      icon: <FaAws className="text-5xl text-[#ff9900]" />,
      title: "Cost Effective",
      description: "Pay only for the resources you use. No upfront costs or long-term commitments."
    },
    {
      icon: <FaRocket className="text-5xl text-[#fb9c24]" />,
      title: "Global Reach",
      description: "Deploy your applications globally with AWS’s vast cloud infrastructure network."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#10B981]" />,
      title: "Enterprise Security",
      description: "Advanced security features ensure data protection, compliance, and risk management."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#ff9900]" />,
      title: "Certified Experts",
      description: "Our AWS-certified professionals have strong experience in cloud architecture and deployment."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Best Practices",
      description: "We follow AWS best practices for secure, optimized, and high-performing cloud environments."
    },
    {
      icon: <FaClock className="text-5xl text-[#fb9c24]" />,
      title: "On-Time Delivery",
      description: "Agile methodologies ensure timely project completion."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#8B5CF6]" />,
      title: "Quality Assurance",
      description: "Agile methodologies ensure timely project completion."
    }
  ];

  const faqs = [
    {
      question: "What is AWS?",
      answer: "Amazon Web Services (AWS) is a comprehensive cloud computing platform offering over 200 services including computing, storage, networking, and databases."
    },
    {
      question: "Why use AWS?",
      answer: "AWS offers scalability, reliability, cost-effectiveness, global infrastructure, and a wide range of managed services."
    },
    {
      question: "Is AWS secure?",
      answer: "Yes, AWS provides enterprise-grade security with multiple layers of protection, encryption, and compliance certifications."
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                AWS Cloud
                Services
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
               At BTJ Alpha Technology, we deliver reliable and scalable AWS Cloud Services to help businesses build, deploy, and manage applications in the cloud. Our certified AWS experts help you leverage Amazon Web Services for secure, flexible, and cost-effective cloud solutions tailored to your needs.</p><br></br>
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
                {/* AWS Logo Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large AWS Icon with gradient background */}
                    <div className="bg-gradient-to-br from-yellow-100 to-orange-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaAws className="text-9xl text-[#ff9900]" />
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
                    <FaCloud className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaServer className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWS Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of AWS
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {awsFeatures.map((item, i) => (
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
              Our AWS Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">At BTJ Alpha Technology, our AWS Cloud Services are designed to help organizations transition smoothly to the cloud.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {awsServices.map((item, i) => (
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
              Benefits of AWS Cloud
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
            Ready to Migrate to AWS Cloud?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with BTJ Alpha Technology for trusted and scalable AWS Cloud Services that empower your business growth.
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

export default AWS;