import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaVuejs, FaCode, FaRocket, FaPuzzlePiece, FaTools, FaLayerGroup,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaShieldAlt,
  FaLaptop, FaSync, FaDatabase, FaChartLine, FaPlug, FaCog, FaUsers
} from "react-icons/fa";

function VueJS() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const vueServices = [
    {
      icon: <FaShieldAlt className="text-4xl text-[#42b883]" />,
      title: "E-commerce and Retail",
      description: "We build secure and user-friendly online stores with smooth payment systems and inventory management. Our Vue.js solutions handle high traffic and provide a seamless shopping experience."
    },
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "Healthcare and Telemedicine",
      description: "We develop secure healthcare applications with features like appointment booking, patient records, and real-time updates. Our solutions focus on privacy, safety, and easy access for both patients and doctors."
    },
    {
      icon: <FaLaptop className="text-4xl text-[#4285F4]" />,
      title: "Education and Learning",
      description: "We create modern e-learning platforms, virtual classrooms, and student management systems. Our Vue.js applications make learning interactive and easy to manage."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#10B981]" />,
      title: "Finance and Banking",
      description: "We build secure fintech applications with safe transactions, reporting systems, and account management features. Our solutions ensure data security and smooth financial operations."
    },
    {
      icon: <FaRocket className="text-4xl text-[#8B5CF6]" />,
      title: "Travel and Hospitality",
      description: "We develop booking systems, travel portals, and customer management platforms. Our applications provide real-time updates and simple user interfaces for travelers."
    },
    {
      icon: <FaDatabase className="text-4xl text-[#EF4444]" />,
      title: "Real Estate and Property",
      description: "We create property listing websites, virtual tour platforms, and CRM systems for real estate businesses. Our solutions help manage properties and increase sales efficiently."
    }
  ];

  const developmentServices = [
    {
      icon: <FaPuzzlePiece className="text-5xl text-[#42b883]" />,
      title: "Vue.js Application Development",
      description: "We build powerful and feature-rich web applications using Vue.js. Our team creates fast, secure, and scalable apps with clean design and smooth performance."
    },
    {
      icon: <FaCode className="text-5xl text-[#fb9c24]" />,
      title: "Vue.js Plugin Development",
      description: "We develop custom Vue.js plugins to improve functionality and performance. Our plugins are easy to use, reusable, and built following best practices."
    },
    {
      icon: <FaSync className="text-5xl text-[#4285F4]" />,
      title: "Vue.js Migration and Porting",
      description: "We help move your existing website or application to Vue.js smoothly. Our migration process ensures better performance with minimal downtime."
    },
    {
      icon: <FaPlug className="text-5xl text-[#10B981]" />,
      title: "API Integration",
      description: "We integrate third-party APIs and services into your Vue.js application. This includes REST APIs, payment gateways, and other backend systems for better functionality."
    },
    {
      icon: <FaTools className="text-5xl text-[#8B5CF6]" />,
      title: "Vue.js Maintenance and Support",
      description: "We provide ongoing support, updates, bug fixes, and performance improvements to keep your Vue.js application secure and up to date."
    },
    {
      icon: <FaLaptop className="text-5xl text-[#EF4444]" />,
      title: "Single Page Development",
      description: "We create fast and responsive Single Page Applications (SPAs) using Vue.js. These apps provide smooth navigation and a better user experience."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#42b883]" />,
      title: "Progressive Web Apps",
      description: "We develop Progressive Web Apps (PWAs) that work offline, send notifications, and provide an app-like experience on mobile and desktop devices."
    }
  ];

  const whyVue = [
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Reactive Data Binding",
      description: "Vue.js automatically updates the user interface when data changes. This makes development simple and reduces extra coding work."
    },
    {
      icon: <FaPuzzlePiece className="text-4xl text-[#42b883]" />,
      title: "Component-Based Architecture",
      description: "Vue.js uses reusable components. This helps keep the code clean, organized, and easy to manage in large projects."
    },
    {
      icon: <FaRocket className="text-4xl text-[#4285F4]" />,
      title: "Virtual DOM",
      description: "Vue.js uses Virtual DOM for faster rendering. It improves performance by updating only the necessary parts of the page."
    },
    {
      icon: <FaCode className="text-4xl text-[#10B981]" />,
      title: "Directives",
      description: "Vue.js provides simple directives like v-if, v-for, and v-model. These make it easy to control content, loops, and user input."
    },
    {
      icon: <FaSync className="text-4xl text-[#8B5CF6]" />,
      title: "Composition API",
      description: "The Composition API helps organize code better. It allows developers to reuse logic and manage complex applications easily."
    },
    {
      icon: <FaLayerGroup className="text-4xl text-[#EF4444]" />,
      title: "Vuex",
      description: "Vuex helps manage application data in one central place. It makes handling complex data and state changes simple and organized."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#42b883]" />,
      title: "Team of Skilled Developers",
      description: "Our team includes experienced Vue.js developers who build reliable and high-quality applications based on your business needs."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#fb9c24]" />,
      title: "Quality Assurance",
      description: "We focus on quality at every stage. Our testing process ensures your application is secure, smooth, and error-free."
    },
    {
      icon: <FaClock className="text-5xl text-[#4285F4]" />,
      title: "On-time Delivery",
      description: "We respect deadlines and deliver projects on time without compromising on quality."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Competitive Pricing",
      description: "We offer affordable and transparent pricing with no hidden costs. You get the best value for your investment."
    },
    {
      icon: <FaSync className="text-5xl text-[#8B5CF6]" />,
      title: "Agile Methodology",
      description: "We follow an agile development process with regular updates and feedback to keep the project flexible and aligned with your goals."
    },
    {
      icon: <FaTools className="text-5xl text-[#EF4444]" />,
      title: "Post-Launch Support",
      description: "We provide ongoing support after launch, including updates, bug fixes, and performance improvements."
    },
    {
      icon: <FaLaptop className="text-5xl text-[#42b883]" />,
      title: "Transparent Communication",
      description: "We maintain clear and regular communication throughout the project to ensure everything runs smoothly."
    }
  ];

  const technologies = [
    { name: "Vue.js", description: "A progressive JavaScript framework for building interactive user interfaces." },
    { name: "Nuxt.js", description: "A Vue.js framework used for server-side rendering and better performance." },
    { name: "Vuex", description: "A state management tool that helps manage application data easily." },
    { name: "Vue Router", description: "The official routing library for creating smooth page navigation." },
    { name: "Element", description: "A UI component library for building clean and modern designs." },
    { name: "Vuetify", description: "A Material Design framework for creating attractive user interfaces." },
    { name: "Quasar", description: "A powerful framework for building web, mobile, and desktop applications." },
    { name: "Gridsome", description: "A static site generator for fast and SEO-friendly websites." },
    { name: "Vite", description: "A fast and modern build tool for Vue.js projects." },
    { name: "Pinia", description: "A simple and flexible state management solution for Vue 3." },
    { name: "VueUse", description: "A collection of useful utility functions for Vue applications." },
    { name: "NuxtJS", description: "A hybrid Vue framework for building dynamic and high-performance apps." }
  ];

  const developmentProcess = [
    {
      title: "Requirement Gathering",
      description: "We first understand your business needs, target users, and project goals through detailed discussions."
    },
    {
      title: "Design",
      description: "Our design team creates simple and user-friendly UI/UX designs and wireframes that match your brand and user expectations."
    },
    {
      title: "Development",
      description: "Our developers build your application using clean and organized code, following Vue.js best practices for better performance and scalability."
    },
    {
      title: "Testing",
      description: "We carefully test the application to make sure it works smoothly, is error-free, and performs well."
    },
    {
      title: "Deployment",
      description: "We deploy your application to production servers with proper configuration, monitoring, and documentation for smooth operations."
    }
  ];

  const faqs = [
    {
      question: "How Much Does it Cost to Develop a Vue.js Web Application?",
      answer: "The cost of developing a Vue.js web application varies based on several factors including project complexity, features required, design requirements, team size, and development timeline. Simple applications may start from a few thousand dollars, while complex enterprise solutions can cost significantly more. We offer flexible pricing models including fixed price for well-defined projects, time & material for evolving requirements, and dedicated team for long-term engagements. Contact us with your project details for an accurate cost estimate tailored to your specific needs."
    },
    {
      question: "How Much Time is Required for Developing a Vue.js Web Application?",
      answer: "Development timeline depends on project scope and complexity. A basic Vue.js application typically takes 4-6 weeks, medium complexity projects with custom features take 8-12 weeks, and large enterprise applications can take 3-6 months or more. Our development process includes: Requirement gathering (1-2 weeks), Design phase (2-3 weeks), Development (varies by features), Testing and QA (2-3 weeks), and Deployment (1 week). We follow agile methodology with iterative sprints to ensure timely delivery and provide detailed timeline estimates after understanding your requirements."
    },
    {
      question: "What is the Process for Hiring a Vue.js Development Team?",
      answer: "Our hiring process is straightforward: 1) Initial Consultation - Discuss your project requirements, goals, and expectations via call or email. 2) Proposal - We provide a detailed proposal with scope of work, technology stack, timeline, and cost breakdown. 3) Team Assignment - We assign skilled Vue.js developers based on your project needs. You can interview team members if needed. 4) Contract - Sign agreement with clear terms, milestones, deliverables, and payment schedule. 5) Project Kickoff - Begin development with sprint planning and regular communication. 6) Development - Agile development with regular updates and demos. 7) Delivery - Final delivery with documentation, training, and ongoing support."
    },
    {
      question: "Can You Help with Migration from Other Frameworks to Vue.js?",
      answer: "Yes, we specialize in migrating applications from other frameworks like Angular, React, or jQuery to Vue.js. Our migration process includes: Assessment of existing application architecture and codebase, Migration strategy planning with risk analysis, Gradual migration approach to minimize disruption, Component-by-component conversion ensuring functionality preservation, Data migration and API integration, Comprehensive testing to ensure feature parity, Performance optimization, and Post-migration support. We ensure zero data loss and minimal downtime during the migration process. Our team has successfully migrated numerous applications to Vue.js, improving performance and maintainability."
    },
    {
      question: "Do You Provide Post-Launch Support and Maintenance?",
      answer: "Absolutely! We provide comprehensive post-launch support and maintenance services including: Bug fixes and issue resolution with quick turnaround, Regular updates to latest Vue.js versions, Security patches and vulnerability fixes, Performance monitoring and optimization, Feature enhancements and new functionality development, Server and infrastructure maintenance, Backup and disaster recovery, 24/7 emergency support for critical issues, Technical consultation and best practices guidance, Documentation updates, and Training for your team. We offer flexible support packages - monthly retainers, pay-per-incident, or dedicated support teams based on your needs."
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
                Vue.js Development<br />
                Company
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Step2gen Technologies is a leading Vue.js development company offering comprehensive Vue.js development services to build dynamic, interactive, and scalable web applications. Our team of experienced Vue.js developers leverages the power of this progressive framework to create high-performance solutions that drive business growth and deliver exceptional user experiences.
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
                {/* Vue Logo Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Vue Icon with gradient background */}
                    <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaVuejs className="text-9xl text-[#42b883]" />
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
                    <FaPuzzlePiece className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaLayerGroup className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We work with different industries and provide customized Vue.js development solutions based on their business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vueServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Develop High-Performance, Interactive, and Dynamic Web Applications through Vue.js Development Services.
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At BTJ Alpha Technology, We are a professional Vue.js development company providing complete Vue.js development services to build fast, interactive, and scalable web applications.
              Our experienced developers use the power of Vue.js to create high-performance websites and web apps that help businesses grow and deliver smooth user experiences. </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vue.js */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vue.js for Web Development
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vue.js is a powerful and flexible framework that helps build fast, interactive, and modern web applications.

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyVue.map((reason, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Step2gen */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Step2gen as Your Vue.js Development Partner
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to delivering high-quality Vue.js solutions that help your business grow and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{reason.description}</p>
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
            Have a Project in Mind? Let's Discuss Your Ideas.
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Work with us to build powerful and modern Vue.js applications that help your business grow.
          </p>
          <button
            onClick={openForm}
            className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center"
              >
                <FaVuejs className="text-4xl text-[#42b883] mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 text-sm mb-1">{tech.name}</h4>
                <p className="text-xs text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vue.js Development Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a clear and simple process to build high-quality Vue.js applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {developmentProcess.map((process, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
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

export default VueJS;
