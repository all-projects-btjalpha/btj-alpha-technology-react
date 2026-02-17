import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
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
      title: "Choosing Suitable Cloud Services Based on Client Business Requirements",
      description: "At BTJ Alpha Technologies, we understand that every business has unique cloud requirements. Our team of cloud experts works closely with you to assess your specific needs, workload characteristics, compliance requirements, and budget constraints. We then recommend and implement the most suitable cloud solutions - whether it's AWS, Azure, Google Cloud, or a multi-cloud approach - ensuring optimal performance, cost-efficiency, and scalability for your business operations."
    }
  ];

  const cloudSolutions = [
    {
      icon: <SiAmazon className="text-5xl" />,
      title: "AWS",
      color: "#FF9900",
      description: "Amazon Web Services (AWS) is the world's most comprehensive cloud platform with over 200 services. We leverage AWS to build scalable, secure, and cost-effective solutions including EC2, S3, Lambda, RDS, and more for hosting, storage, computing, and database needs."
    },
    {
      icon: <FaCloud className="text-5xl" style={{ color: "#0078D4" }} />,
      title: "Azure",
      color: "#0078D4",
      description: "Microsoft Azure offers integrated cloud services for analytics, computing, databases, mobile, networking, storage, and web applications. We utilize Azure's powerful enterprise features including Azure Active Directory, Virtual Machines, App Services, and SQL Database for seamless integration."
    },
    {
      icon: <SiGooglecloud className="text-5xl" />,
      title: "Google Cloud Platform",
      color: "#4285F4",
      description: "Google Cloud Platform delivers secure, open, intelligent, and transformative cloud services. We harness GCP's strengths in BigQuery, Cloud Functions, Kubernetes Engine, and AI/ML services to build modern, data-driven applications with global reach."
    },
    {
      icon: <FaCloud className="text-5xl text-cyan-500" />,
      title: "AWS Cloud",
      description: "AWS Cloud provides on-demand computing resources with pay-as-you-go pricing. We design and implement AWS architectures that are highly available, fault-tolerant, and optimized for cost, leveraging services like EC2, S3, CloudFront, and Route 53."
    },
    {
      icon: <FaServer className="text-5xl text-blue-500" />,
      title: "IaaS",
      description: "Infrastructure as a Service (IaaS) gives you complete control over computing resources without managing physical servers. We provision and manage virtual machines, storage, networks, and operating systems tailored to your specific infrastructure requirements."
    },
    {
      icon: <FaCloud className="text-5xl text-purple-500" />,
      title: "Github Actions",
      description: "GitHub Actions enables CI/CD automation directly in your repository. We set up workflows for automated testing, building, and deployment to cloud platforms, streamlining your development pipeline and ensuring code quality with every commit."
    },
    {
      icon: <FaGlobe className="text-5xl text-green-500" />,
      title: "Kubernetes",
      description: "Kubernetes orchestrates containerized applications at scale. We design and deploy Kubernetes clusters on AWS EKS, Azure AKS, or Google GKE, managing container deployment, scaling, and operations with high availability and zero downtime updates."
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
      description: "Scale resources up or down instantly based on demand without infrastructure investment."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-green-600" />,
      title: "Reliability",
      description: "99.99% uptime SLA with redundancy and automatic failover capabilities."
    },
    {
      icon: <FaDollarSign className="text-5xl text-blue-600" />,
      title: "Cost Efficiency",
      description: "Pay only for what you use with no upfront costs or long-term commitments."
    },
    {
      icon: <FaGlobe className="text-5xl text-purple-600" />,
      title: "Global Reach",
      description: "Deploy applications in multiple regions worldwide for low-latency access."
    }
  ];

  const whyChooseUs = [
    {
      title: "Certified Cloud Experts",
      description: "Our team holds multiple cloud certifications from AWS, Azure, and Google Cloud, ensuring best practices implementation."
    },
    {
      title: "24/7 Support & Monitoring",
      description: "Round-the-clock monitoring and support to ensure your cloud infrastructure runs smoothly without interruptions."
    },
    {
      title: "Cost Optimization",
      description: "We continuously optimize your cloud spending through right-sizing, reserved instances, and spot instances strategies."
    },
    {
      title: "Security First Approach",
      description: "Implementation of industry-standard security practices including encryption, IAM policies, and compliance requirements."
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
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your One-Stop<br />
                Destination for Cloud<br />
                Services
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At BTJ Alpha Technologies, we offer comprehensive cloud computing solutions that help businesses migrate, manage, and optimize their infrastructure on AWS, Azure, and Google Cloud Platform. Our cloud experts ensure seamless deployment, robust security, and cost-effective scaling for your applications.
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
                Cloud services have revolutionized the way we build and deploy web applications. By leveraging cloud infrastructure, businesses can achieve unprecedented scalability, reliability, and performance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our cloud solutions enable you to focus on innovation while we handle the infrastructure complexity, ensuring your applications run smoothly and efficiently across global data centers.
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
            Let our cloud experts help you migrate, optimize, and scale your infrastructure on the cloud.
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
