import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { 
  FaCloud, FaAws, FaServer, FaRocket, FaShieldAlt, FaChartLine,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaCogs, FaDatabase,
  FaLock, FaCode, FaGlobe, FaTachometerAlt, FaUsers, FaDollarSign
} from "react-icons/fa";
import { SiAmazon, SiGooglecloud, SiKubernetes, SiDocker, SiTerraform } from "react-icons/si";

function CloudServices() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const transformServices = [
    {
      title: "Transform Your Web Application Quality with Cloud Services",
      description: "Cloud services have revolutionized the way we build and deploy web applications. By leveraging cloud infrastructure, businesses can achieve unprecedented scalability, reliability, and performance. Our cloud solutions enable you to focus on innovation while we handle the infrastructure complexity, ensuring your applications run smoothly and efficiently across global data centers."
    }
  ];

  const choosingServices = [
    {
      title: "Choosing the Right Cloud Services for Your Business",
      description: "At BTJ Alpha Technologies, we know that every business has different cloud needs.Our cloud experts work closely with you to understand:  Your business goals,Your workload and performance needs,Security and compliance requirements,Your budget"
    }
  ];

  const cloudSolutions = [
    {
      icon: <SiAmazon className="text-5xl" />,
      title: "AWS",
      color: "#FF9900",
      description: "AWS is one of the most comprehensive cloud platforms in the world, offering over 200 services.We use AWS to build:  Secure and scalable applications,Reliable hosting and storage solutions,High-performance computing systems,Managed databases"
    },
    {
      icon: <FaCloud className="text-5xl" style={{ color: "#0078D4" }} />,
      title: " Microsoft Azure",
      color: "#0078D4",
      description: "Azure provides integrated cloud services for businesses of all sizes.We use Azure for:  Virtual machines and infrastructure,Data storage and databases,Networking solutions,Enterprise integration"
    },
    {
      icon: <SiGooglecloud className="text-5xl" />,
      title: "Google Cloud Platform",
      color: "#4285F4",
      description: "Google Cloud Platform delivers secure and intelligent cloud solutions.We use GCP to build:  Data-driven applications,AI and machine learning solutions,Scalable web services,Global cloud deployments"
    },
    {
      icon: <FaCloud className="text-5xl text-cyan-500" />,
      title: "AWS Cloud Architecture",
      description: "We design AWS cloud environments that are: Cost-effective,Highly available,Fault-tolerant,Optimized for performance"
    },
    {
      icon: <FaServer className="text-5xl text-blue-500" />,
      title: "IaaS",
      description: "IaaS gives you full control over your infrastructure without managing physical hardware.We provide: Virtual machines,Storage solutions,Networking setup,Operating system management"
    },
    {
      icon: <FaCloud className="text-5xl text-purple-500" />,
      title: "Github Actions",
      description: "GitHub Actions helps automate your development process.We set up:  CI/CD pipelines,Automated testing,Application builds,Cloud deployments"
    },
    {
      icon: <FaGlobe className="text-5xl text-green-500" />,
      title: "Kubernetes",
      description: "Kubernetes manages containerized applications at scale.We design and deploy Kubernetes clusters to: Automate container deployment,Scale applications easily,Ensure high availability,Enable zero-downtime updates"
    }
  ];

  const cloudOfferings = [
    {
      icon: <FaRocket className="text-5xl text-yellow-500" />,
      title: "Consulting",
      description: "Our cloud consulting services help you navigate the complex cloud landscape. We assess your current infrastructure, identify opportunities for cloud adoption, and create a comprehensive cloud strategy aligned with your business goals and technical requirements."
    },
    {
      icon: <FaCogs className="text-5xl text-blue-600" />,
      title: "Migration",
      description: "Seamlessly migrate your applications, databases, and workloads to the cloud with minimal downtime. We follow proven migration methodologies including assessment, planning, execution, and optimization to ensure a smooth transition from on-premise to cloud."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-green-600" />,
      title: "Hosting",
      description: "Reliable, secure, and scalable cloud hosting solutions for websites, applications, and databases. We manage server configuration, load balancing, auto-scaling, backups, and monitoring to ensure your applications are always available and performing optimally."
    },
    {
      icon: <FaTachometerAlt className="text-5xl text-purple-600" />,
      title: "DevOps",
      description: "Implement DevOps practices with CI/CD pipelines, infrastructure as code, and automated deployments. We use tools like Jenkins, GitLab CI, Terraform, and Ansible to streamline development workflows and accelerate time to market."
    }
  ];

  const platformsTechnologies = [
    {
      title: "Containerization and Orchestration",
      items: ["Docker", "Kubernetes", "AWS ECS", "Azure Container Instances"]
    },
    {
      title: "Infrastructure as Code",
      items: ["Terraform", "AWS CloudFormation", "Azure Resource Manager"]
    },
    {
      title: "Identity and Access Management",
      items: ["AWS IAM", "Azure Active Directory", "Google Cloud IAM"]
    },
    {
      title: "Serverless Computing",
      items: ["AWS Lambda", "Azure Functions", "Google Cloud Functions"]
    },
    {
      title: "Database Consulting",
      items: ["AWS RDS", "Azure SQL Database", "Google Cloud SQL"]
    },
    {
      title: "Storage Solutions",
      items: ["AWS S3", "Azure Blob Storage", "Google Cloud Storage"]
    }
  ];

  const benefits = [
    {
      icon: <FaTachometerAlt className="text-5xl text-[#fb9c24]" />,
      title: "Scalability",
      description: "Easily increase or decrease resources based on demand.No need to invest in expensive hardware upfront."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-green-600" />,
      title: "Reliability",
      description: "Enjoy high availability (up to 99.99% uptime).Built-in redundancy and automatic failover keep systems running smoothly."
    },
    {
      icon: <FaDollarSign className="text-5xl text-blue-600" />,
      title: "Cost Efficiency",
      description: "Pay only for what you use. No large upfront investments or long-term commitments required."
    },
    {
      icon: <FaGlobe className="text-5xl text-purple-600" />,
      title: "Global Reach",
      description: "Deploy applications in multiple regions worldwide.Provide fast and low-latency access to users across the globe."
    }
  ];

  const whyChooseUs = [
    {
      title: "Certified Cloud Experts",
      description: "Our team holds certifications across AWS, Azure, and Google Cloud. We follow industry best practices to deliver secure and optimized solutions."

    },
    {
      title: "24/7 Support & Monitoring",
      description: "Round-the-clock monitoring ensures your cloud infrastructure runs without interruption.Quick issue resolution minimizes downtime."
    },
    {
      title: "Cost Optimization",
      description: "We continuously optimize your cloud spending.This includes right-sizing resources, using reserved instances, and leveraging spot instances."
    },
    {
      title: "Security First Approach",
      description: "We implement strong security measures such as:  Data encryption,Identity and Access Management (IAM) policies,Compliance with industry standards"
    }
  ];

  const faqs = [
    {
      question: "What are Cloud Services?",
      answer: "Cloud services are computing services delivered over the internet, including servers, storage, databases, networking, software, analytics, and intelligence. Cloud computing offers faster innovation, flexible resources, and economies of scale. You typically pay only for cloud services you use, helping lower operating costs, run infrastructure more efficiently, and scale as your business needs change."
    },
    {
      question: "Which Cloud Platform should I Choose for My Business?",
      answer: "The choice depends on your specific requirements. AWS is ideal for startups and enterprises with its vast service catalog. Azure is preferred for Microsoft-centric environments. Google Cloud excels in data analytics and machine learning. We assess your workload, budget, compliance needs, and technical requirements to recommend the best fit or a multi-cloud strategy."
    },
    {
      question: "How do you Ensure Cloud Security?",
      answer: "We implement multi-layered security including network security (VPC, Security Groups, Firewalls), identity management (IAM, MFA), data encryption (at rest and in transit), regular security audits, compliance monitoring (GDPR, HIPAA), DDoS protection, and automated backup solutions. We follow the shared responsibility model and ensure all security best practices are implemented."
    },
    {
      question: "What is the Cost of Cloud Migration?",
      answer: "Cloud migration costs vary based on application complexity, data volume, current infrastructure, downtime tolerance, and security requirements. Costs include assessment, planning, migration tools, testing, and post-migration optimization. We provide detailed cost estimates after evaluating your environment and can implement cost-saving strategies throughout the migration process."
    },
    {
      question: "How Long Does Cloud Migration Take?",
      answer: "Migration timelines depend on complexity and scale. Simple applications may take 2-4 weeks, while enterprise systems can take 3-6 months or more. Our phased approach includes: Assessment (1-2 weeks), Planning (2-3 weeks), Migration (varies), Testing (1-2 weeks), and Optimization (ongoing). We ensure minimal disruption to your business operations during the transition."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right" className="lg:pl-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your One-Stop Destination for Cloud Services
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At BTJ Alpha Technologies, we provide complete cloud computing solutions to help businesses move, manage, and optimize their infrastructure with confidence.
                We support leading cloud platforms like AWS, Microsoft Azure, and Google Cloud Platform to ensure secure, scalable, and high-performing environments for your applications.
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
                {/* Cloud Illustration */}
                <div className="relative">
                  {/* Main Cloud Servers */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all w-72">
                      <div className="space-y-4">
                        <FaServer className="text-5xl text-white mb-4" />
                        <div className="space-y-2">
                          <div className="h-3 bg-white/30 rounded"></div>
                          <div className="h-3 bg-white/20 rounded w-4/5"></div>
                          <div className="h-3 bg-white/20 rounded w-3/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Cloud Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <SiAmazon className="text-3xl" style={{ color: "#FF9900" }} />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaCloud className="text-3xl" style={{ color: "#0078D4" }} />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <SiGooglecloud className="text-3xl" style={{ color: "#4285F4" }} />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaCloud className="text-3xl text-cyan-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Web Application */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div data-aos="fade-right" className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaCloud className="text-4xl text-blue-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Cloud Storage</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaServer className="text-4xl text-green-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Servers</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaDatabase className="text-4xl text-orange-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Databases</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaLock className="text-4xl text-purple-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Security</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Web Application Quality with Cloud Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Cloud services have changed the way businesses build and manage web applications. With the right cloud infrastructure, you can improve scalability, reliability, and overall performance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our cloud solutions help you focus on innovation while we manage the technical infrastructure. We ensure your applications run smoothly, securely, and efficiently across global data centers.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing Suitable Cloud Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choosing Suitable Cloud Services Based on Client Business Requirements
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At BTJ Alpha Technologies, we understand that every business has unique cloud requirements. Our team of cloud experts works closely with you to assess your specific needs, workload characteristics, compliance requirements, and budget constraints. We then recommend and implement the most suitable cloud solutions ensuring optimal performance, cost-efficiency, and scalability for your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Solutions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Solutions
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">We provide reliable, secure, and scalable cloud solutions to help your business grow. Our team works with leading cloud platforms and modern tools to deliver the best results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudSolutions.map((solution, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0" style={{ color: solution.color }}>
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services Offerings */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Services Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudOfferings.map((offering, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  {offering.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms and Technologies */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platforms and Technologies
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">This section highlights key platforms and tools used for building, deploying, and managing modern cloud applications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformsTechnologies.map((platform, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{platform.title}</h3>
                <ul className="space-y-2">
                  {platform.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <FaCheckCircle className="text-[#fb9c24] flex-shrink-0 text-sm" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Cloud Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Cloud Services
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">Cloud services help businesses grow faster, reduce costs, and improve performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Step2gen */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BTJ Alpha Technologies for Cloud Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
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
            Ready to Take your Business to the Next Level?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let our cloud experts help you migrate, optimize, and scale your infrastructure in the cloud.We provide:  Smooth cloud migration,Infrastructure optimization,Scalable and secure cloud solutions

          </p>
          <button
            onClick={openForm}
            className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Get Started Today
          </button>
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
                  className={`transition-all duration-300 overflow-hidden ${openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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

export default CloudServices;
