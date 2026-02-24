import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaPalette, FaUsers, FaMobileAlt, FaLightbulb, FaChartLine, FaPencilRuler,
  FaChevronDown, FaChevronUp, FaChartBar, FaBox, FaHome, FaCheckCircle,
  FaCode, FaPaintBrush, FaLayerGroup, FaFileAlt, FaSync, FaRocket,
  FaCogs, FaUserCheck, FaSearch, FaBullseye, FaEdit
} from "react-icons/fa";
import { 
  SiAdobexd, SiSketch, SiFigma, SiAdobephotoshop, SiAdobeillustrator,
  SiHtml5, SiCss3, SiBlender, SiTailwindcss, SiBootstrap
} from "react-icons/si";

function UIUXDesign() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const mainServices = [
    {
      icon: <FaChartBar className="text-5xl text-red-500" />,
      title: "Research and Analysis",
      description: "We study your target audience, market trends, and user needs. This helps us create designs based on real data and clear understanding."
    },
    {
      icon: <FaBox className="text-5xl text-yellow-500" />,
      title: "Branding and Identity",
      description: "We build a strong and unique brand identity for your business. This includes logo design, color selection, typography, and brand guidelines that reflect your values."
    },
    {
      icon: <FaHome className="text-5xl text-purple-500" />,
      title: "Information Architecture",
      description: "We organize your content and features in a clear and logical way. This makes it easy for users to navigate and find information without confusion."
    }
  ];

  const designTechnologies = [
    {
      icon: <SiAdobexd className="text-5xl text-pink-500" />,
      name: "Adobe XD",
      description: "Adobe XD is a powerful design tool used for UI/UX design. It helps us create wireframes, prototypes, and interactive designs easily."
    },
    {
      icon: <SiSketch className="text-5xl text-orange-400" />,
      name: "Sketch",
      description: "Sketch is a popular design tool for web and app interfaces. It allows us to quickly create and test design ideas."
    },
    {
      icon: <SiFigma className="text-5xl text-purple-600" />,
      name: "Figma",
      description: "Figma is a cloud-based design tool. It allows our team to work together in real-time and collaborate easily."
    },
    {
      icon: <SiAdobeillustrator className="text-5xl text-orange-600" />,
      name: "Adobe Illustrator",
      description: "Illustrator is used to create logos, icons, and vector graphics. It helps us design scalable graphics that look sharp on all devices."
    },
    {
      icon: <SiAdobephotoshop className="text-5xl text-blue-600" />,
      name: "Adobe Photoshop",
      description: "Photoshop is used for image editing and visual design. It helps us improve graphics, adjust colors, and create stunning visuals."
    },
    {
      icon: <SiHtml5 className="text-5xl text-orange-500" />,
      name: "HTML",
      description: "HTML is used to structure web pages. It helps turn design layouts into working web pages."
    },
    {
      icon: <SiCss3 className="text-5xl text-blue-500" />,
      name: "CSS3",
      description: "CSS3 is used to style websites. It adds colors, animations, layouts, and makes websites responsive."
    },
    {
      icon: <SiBlender className="text-5xl text-orange-400" />,
      name: "Blender",
      description: "Blender is a 3D design and animation tool. It is used for creating 3D models, illustrations, and animations."
    },
    {
      icon: <SiTailwindcss className="text-5xl text-cyan-500" />,
      name: "Tailwind",
      description: "Tailwind CSS is a modern framework for building responsive designs. It helps us create clean and fast-loading websites."
    },
    {
      icon: <SiBootstrap className="text-5xl text-purple-600" />,
      name: "Bootstrap",
      description: "Bootstrap is a popular front-end framework. It helps us build responsive and mobile-friendly websites quickly."
    }
  ];

  const designProcess = [
    {
      icon: <FaMobileAlt className="text-5xl text-blue-500" />,
      title: "Wireframe Creation",
      description: "We create wireframes that show the basic structure of your website or app. It shows layout, navigation, and content placement before the final design"
    },
    {
      icon: <FaCheckCircle className="text-5xl text-green-500" />,
      title: "Prototyping",
      description: "We turn wireframes into interactive prototypes. This allows you to see how the product will work and test the user experience before development."
    },
    {
      icon: <FaSync className="text-5xl text-orange-500" />,
      title: "Revisions and Updates",
      description: "We improve the design based on your feedback. We work closely with you and make changes until the final design meets your needs."
    }
  ];

  const workflowPhases = [
    {
      title: "Research",
      description: "We study your business goals, target audience, and competitors. This helps us create the right design strategy."
    },
    {
      title: "Visualisation",
      description: "We create mood boards, style guides, and visual concepts. This defines the look and feel of your project."
    },
    {
      title: "Prototyping",
      description: "We build interactive designs so you can see and test how everything works."
    },
    {
      title: "Testing and Refinement",
      description: "We test the design with users to find improvements. We refine the design to ensure the best user experience."
    }
  ];

  const whyWorkWithUs = [
    {
      title: "All the Features, No Extra Complexity",
      description: "We focus on useful and important features. Our designs are simple, clean, and easy to use without unnecessary elements."
    },
    {
      title: "Work Style Based on Your Needs",
      description: "We adjust our design and communication style to match your preferences. We ensure smooth collaboration from start to finish."
    },
    {
      title: "Fast Updates and Improvements",
      description: "We provide ongoing support and regular updates. We help improve your design as your business grows."
    },
    {
      title: "Affordable and Competitive Pricing",
      description: "We offer high-quality UI/UX design services at fair prices. Our services are suitable for businesses of all sizes."
    }
  ];

  const faqs = [
    {
      question: "What is UI/UX Design important for Businesses?",
      answer: "UI/UX design is crucial for businesses because it directly impacts user satisfaction, engagement, and conversion rates. Good design creates intuitive, enjoyable experiences that keep users coming back, reduces support costs, builds brand loyalty, and gives you a competitive advantage. In today's digital landscape, users expect seamless experiences, and poor design can drive them to competitors. Investment in UI/UX design delivers measurable ROI through increased conversions, reduced bounce rates, and improved customer retention."
    },
    {
      question: "Can you Design a Custom Interface for my Business?",
      answer: "Absolutely! We specialize in creating custom interfaces tailored to your specific business needs, brand identity, and target audience. Our design process begins with understanding your business goals, user requirements, and competitive landscape. We then create unique design solutions that reflect your brand personality while ensuring optimal usability. Every element is crafted specifically for your project, from color schemes and typography to layouts and interactions."
    },
    {
      question: "How do you Ensure the Security of User Data in your Design Process?",
      answer: "We prioritize data security throughout the design process by following industry best practices and compliance standards (GDPR, CCPA, etc.). We implement secure design patterns, ensure encrypted data transmission, design clear privacy controls for users, incorporate secure authentication flows, follow the principle of least privilege in access design, and work closely with development teams to ensure security measures are properly implemented. All design files and client information are handled with strict confidentiality."
    },
    {
      question: "How Long Does it take to Complete a UI/UX Design Project?",
      answer: "Project timelines vary based on scope and complexity. A simple website redesign might take 4-6 weeks, while a comprehensive mobile app design could take 8-12 weeks or more. The timeline includes research (1-2 weeks), wireframing and information architecture (1-2 weeks), visual design (2-4 weeks), prototyping and testing (1-2 weeks), and revisions (ongoing). We provide detailed timelines during the proposal phase and maintain transparent communication throughout to ensure timely delivery."
    },
    {
      question: "How much does it Cost and Charges for the UI/UX Design Process?",
      answer: "Design costs vary based on project complexity, scope, timeline, and deliverables. Factors affecting pricing include: project size (number of screens/pages), design complexity and customization level, research and testing requirements, revision rounds, and additional services needed. We offer flexible pricing models including fixed-price projects, hourly rates for ongoing work, and retainer arrangements for continuous support. Contact us for a detailed quote tailored to your specific requirements and budget."
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
                UI/UX<br />
                Design Company
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At BTJ Alpha Technology, we create simple and beautiful user experiences. 
                Our UI/UX design services combine creativity with user research to build 
                easy-to-use and attractive digital products.<br></br>
                We design websites, mobile apps, and software interfaces that not only look
                good but also work smoothly. From wireframes to final designs, every detail is planned to 
                improve user satisfaction and help your business grow.

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
                {/* Mobile Design Illustration */}
                <div className="relative animate-float">
                  {/* Main Phone */}
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-4 shadow-2xl w-64 h-96">
                    {/* Phone Screen */}
                    <div className="bg-white rounded-2xl h-full p-4 space-y-3">
                      {/* Header */}
                      <div className="flex items-center gap-2 pb-2 border-b">
                        <div className="w-8 h-8 bg-blue-400 rounded-lg"></div>
                        <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                      </div>
                      {/* Image Section */}
                      <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl h-32 flex items-center justify-center">
                        <FaPalette className="text-4xl text-white" />
                      </div>
                      {/* Content Bars */}
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                      {/* Buttons */}
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div className="h-8 bg-blue-400 rounded-lg"></div>
                        <div className="h-8 bg-purple-400 rounded-lg"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Design Elements */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-xl shadow-lg animate-bounce">
                    <FaPencilRuler className="text-3xl text-blue-600" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-lg animate-bounce delay-100">
                    <FaPalette className="text-3xl text-purple-600" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg animate-bounce delay-200">
                    <FaChartLine className="text-3xl text-pink-600" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-xl shadow-lg animate-bounce delay-300">
                    <FaUsers className="text-3xl text-cyan-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy for your business */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategy for Your Business with Expert Creative Guidance
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We create design strategies that match your business goals.
              Our team uses market research, user insights, and creative ideas to deliver designs that bring real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
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

      {/* Our open software developer */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Tools and Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designTechnologies.map((tech, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designProcess.map((process, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {process.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our UI/UX Design Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowPhases.map((phase, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-[#fb9c24] mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Starting a New Project or Want to<br />Work With Us?
          </h2>
          <button
            onClick={openForm}
            className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Let's Get Started
          </button>
        </div>
      </section>

      {/* Transform your Business */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our UI/UX Design Services can Transform your<br />Business!
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We do more than just design. We create user experiences that increase engagement, improve conversions, and build strong relationships with your customers.
              Our goal is to help your business grow through smart and creative design.

            </p>
          </div>

          <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-full mb-4">
              <FaPalette className="text-5xl text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Creative Design</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine creativity and technical skills to build beautiful and easy-to-use interfaces.
              Our designs reflect your brand identity while ensuring the best user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work with us */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work with us?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              BTJ Alpha Technology brings strong experience, proven methods, and a commitment to quality in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithUs.map((reason, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
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

export default UIUXDesign;
