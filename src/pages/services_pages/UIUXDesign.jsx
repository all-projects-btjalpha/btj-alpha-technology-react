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
      description: "We conduct comprehensive user research and analysis to understand your target audience, their behaviors, pain points, and expectations. Our data-driven approach ensures designs that truly resonate with users."
    },
    {
      icon: <FaBox className="text-5xl text-yellow-500" />,
      title: "Branding and Identity",
      description: "Create a distinctive brand identity that sets you apart. We craft unique visual languages including logos, color palettes, typography, and brand guidelines that consistently represent your business values."
    },
    {
      icon: <FaHome className="text-5xl text-purple-500" />,
      title: "Information Architecture",
      description: "We organize and structure your content and features in a logical, intuitive manner. Our information architecture ensures users can easily navigate and find what they need without confusion."
    }
  ];

  const designTechnologies = [
    {
      icon: <SiAdobexd className="text-5xl text-pink-500" />,
      name: "Adobe XD",
      description: "Adobe XD is a phenomenal software package that is a part of Creative cloud. It comes with a powerful suite of prototyping tools, vector-based designs, and extensive collaboration features allowing our designers and developers to work together seamlessly."
    },
    {
      icon: <SiSketch className="text-5xl text-orange-400" />,
      name: "Sketch",
      description: "Sketch is a vector design tool that is specifically built for interface and web design. We have found it to be flexible & intuitive perfect for designers to easily prototype as well as develop prototypes with it."
    },
    {
      icon: <SiFigma className="text-5xl text-purple-600" />,
      name: "Figma",
      description: "Figma is a cloud-based design tool which is collaborative in nature and doesn't need to be installed on computers to begin working. We use Figma because it enables our entire team to work together in real-time making collaborative work easier than with other platforms."
    },
    {
      icon: <SiAdobeillustrator className="text-5xl text-orange-600" />,
      name: "Adobe Illustrator",
      description: "Illustrator is vector Adobe tool no.1 choice for creating logos, icons & typography. It is most preferred by our team to make scalable assets which guarantee they perform well at every size and device size."
    },
    {
      icon: <SiAdobephotoshop className="text-5xl text-blue-600" />,
      name: "Adobe Photoshop",
      description: "Photoshop should always be in edition to design software that a designer should have. That's why we use this industry-standard for creating high-quality visuals and for manipulating images, adjusting colors, and adding unique effects that enhance the overall design aesthetic."
    },
    {
      icon: <SiHtml5 className="text-5xl text-orange-500" />,
      name: "HTML",
      description: "HTML is the framework that holds all web content in place. Our HTML code development to create web pages ensures that your designs run properly on any browser. This way your vision is reflected in reality."
    },
    {
      icon: <SiCss3 className="text-5xl text-blue-500" />,
      name: "CSS3",
      description: "We use the latest CSS3 standards to design websites that look stunning with modern animations, transitions, and responsive layouts to ensure your website looks good on any device."
    },
    {
      icon: <SiBlender className="text-5xl text-orange-400" />,
      name: "Blender",
      description: "Blender is an open source 3D modeling and animation tool. We use Blender to create engaging, immersive visual experiences that help your product stand out, whether that's product visualization, 3D illustrations, or animated graphics."
    },
    {
      icon: <SiTailwindcss className="text-5xl text-cyan-500" />,
      name: "Tailwind",
      description: "Tailwind CSS is a utility first CSS framework that is used by our team and helps in building responsive custom designs with minimal effort. Using Tailwind, we can quickly prototype and iterate on designs making the development faster."
    },
    {
      icon: <SiBootstrap className="text-5xl text-purple-600" />,
      name: "Bootstrap",
      description: "Bootstrap is one of the popular frontend frameworks in the world. Our use of Bootstrap ensures that we build responsive, mobile friendly web applications quickly with a consistent look and feel across all devices."
    }
  ];

  const designProcess = [
    {
      icon: <FaMobileAlt className="text-5xl text-blue-500" />,
      title: "Wireframe Creation",
      description: "We create wireframes that provide a clear blueprint of your website or app's structure, showing the placement of elements, navigation flow, and content hierarchy before moving to visual design."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-green-500" />,
      title: "Prototyping",
      description: "We transform wireframes into interactive prototypes that simulate the final product's functionality. This allows stakeholders to test and validate the user experience before development begins."
    },
    {
      icon: <FaSync className="text-5xl text-orange-500" />,
      title: "Revisions and Updates",
      description: "We value your feedback and work iteratively to refine designs. Our flexible approach ensures your vision is realized through continuous collaboration and adjustments based on your input."
    }
  ];

  const workflowPhases = [
    {
      title: "Research",
      description: "We conduct thorough research to understand your business goals, target audience, and competitive landscape to inform our design strategy."
    },
    {
      title: "Visualisation",
      description: "We create mood boards, style guides, and visual concepts that establish the aesthetic direction and design language for your project."
    },
    {
      title: "Prototyping",
      description: "We develop interactive prototypes that bring designs to life, allowing you to experience and test the user journey before development."
    },
    {
      title: "Testing and Refinement",
      description: "We conduct usability testing with real users to identify issues and opportunities for improvement, then refine the design based on insights."
    }
  ];

  const whyWorkWithUs = [
    {
      title: "All the features, none of the bloat",
      description: "Our designs focus on essential features that add value, eliminating unnecessary complexity for cleaner, more efficient user experiences."
    },
    {
      title: "Working style as per client needs",
      description: "We adapt our workflow and communication style to match your preferences, ensuring seamless collaboration throughout the project."
    },
    {
      title: "Update, upgrade and move fast with maintenance",
      description: "We provide ongoing support to keep your designs current, implementing updates and enhancements as your business evolves."
    },
    {
      title: "Affordable and competitive in the market",
      description: "We offer high-quality design services at competitive rates, making professional UI/UX design accessible for businesses of all sizes."
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
                At BTJ Alpha Technology, we create exceptional user experiences through intuitive, beautiful designs. Our UI/UX design services combine creativity with user research to deliver interfaces that not only look stunning but also provide seamless interactions. From wireframes to final designs, we ensure every pixel serves a purpose in enhancing user satisfaction and achieving your business goals.
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
              Strategy for your business with expert creative guidance and right approaches. Get Services Strategy.
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our design strategy aligns with your business objectives, ensuring every design decision contributes to your success. 
              We combine market research, user insights, and creative expertise to deliver designs that drive results.
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
              Our open software developer with multiple design technology languages 
              & frameworks that make our designs technically feasible and visually appealing
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
            Starting a New Project or Want to<br />Collaborate With Us?
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
              We don't just create designs; we craft experiences that drive engagement, increase conversions, 
              and build lasting relationships with your users. Let us help you achieve your business goals through exceptional design.
            </p>
          </div>

          <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-full mb-4">
              <FaPalette className="text-5xl text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Creative Design</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine creativity and technical expertise to create stunning interfaces that not only look beautiful but also provide intuitive user experiences. 
              Our designs are crafted to reflect your brand identity while ensuring maximum usability.
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
              BTJ Alpha Technology brings extensive experience, proven methodologies, and commitment to excellence in every project.
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
