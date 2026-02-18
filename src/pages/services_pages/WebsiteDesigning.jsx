import { useState } from "react";
import { useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";

function WebsiteDesigning() {
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
      img: "/website-design/icons/08.webp",
      title: "Responsive",
      description:
        "Adapts seamlessly to various devices, ensuring a consistent and enjoyable user experience across desktops, tablets, and mobile phones.",
    },
    {
      img: "/website-design/icons/09.webp",
      title: "Fast Loading Time",
      description:
        "Optimizes web pages to load quickly, reducing bounce rates and enhancing user satisfaction. Faster websites improve both SEO and conversions.",
    },
    {
      img: "/website-design/icons/10.webp",
      title: "SEO-Friendly Structure",
      description:
        "Incorporates the best practices for search engine optimization, ensuring better rankings, increased traffic, and higher visibility on search engines like Google.",
    },
    {
      img: "/website-design/icons/11.webp",
      title: "User-Friendly Navigation",
      description:
        "Provides clear and intuitive menus to help visitors easily find the information they need, creating a positive user experience.",
    },
    {
      img: "/website-design/icons/13.webp",
      title: "Google Speed Test Integration",
      description:
        "Leverages Google tools to test and improve site performance, ensuring quick response times and smooth operations.",
    },
    {
      img: "/website-design/icons/14.webp",
      title: "Clean & Modern Design",
      description:
        "Focuses on simplicity, aesthetic appeal, and functionality, providing users with a professional and engaging website experience.",
    },
    {
      img: "/website-design/icons/15.webp",
      title: "Enhanced Functionality",
      description:
        "Ensures all features work seamlessly, from forms and buttons to complex integrations, providing users with a smooth browsing experience.",
    },
    {
      img: "/website-design/icons/16.webp",
      title: "Improved Usability",
      description:
        "Analyzes and refines the ease of navigation and interaction, making the website accessible and enjoyable for all users.",
    },
    {
      img: "/website-design/icons/17.webp",
      title: "Compelling Calls-to-Action (CTA)",
      description:
        "Strategically placed CTAs encourage users to take desired actions, such as signing up, purchasing, or contacting your business.",
    },
    {
      img: "/website-design/icons/18.webp",
      title: "Cross-Browser Compatibility",
      description:
        "Guarantees flawless website performance across all major web browsers, such as Chrome, Firefox, Safari, and Edge.",
    },
    {
      img: "/website-design/icons/19.webp",
      title: "Social Media Integration",
      description:
        "Connect your website with social media platforms to boost engagement, share content, and grow your online presence.",
    },
    {
      img: "/website-design/icons/20.webp",
      title: "Secured HTTPS Protocol",
      description:
        "Protects your website and user data with HTTPS encryption, building trust and enhancing your credibility.",
    },
    {
      img: "/website-design/icons/22.webp",
      title: "Google Console Verification",
      description:
        "Validates website ownership and monitors its performance on Google Search, improving discoverability.",
    },
    {
      img: "/website-design/icons/23.webp",
      title: "Google Analytics Setup",
      description:
        "Tracks user behavior, traffic sources, and engagement metrics, providing valuable insights for data-driven decisions.",
    },
    {
      img: "/website-design/icons/24.webp",
      title: "Original & Engaging Content",
      description:
        "Delivers high-quality, unique content tailored to your audience, boosting engagement and ensuring a professional image.",
    },
    {
      img: "/website-design/icons/25.webp",
      title: "Brand-Aligned Color Scheme",
      description:
        "Develops a cohesive color palette that reflects your brand identity while creating an inviting and professional atmosphere.",
    },
  ];

  const cards = [
    {
      title: "Initial Consultation",
      description:
        "We begin by understanding your business needs, goals, and challenges. This initial conversation helps us gather key insights so we can offer tailored solutions that align with your vision.",
      image: "/website-design/cards-pic/initial_consultation.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Planning & Strategy",
      description:
        "Once we understand your goals, we craft a detailed strategy that outlines the approach, timeline, and resources required. We ensure the plan addresses every aspect of your project.",
      image: "/website-design/cards-pic/Planningstrategy.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Design Mockups",
      description:
        "Our design team creates mockups and prototypes, providing you with a visual representation of your website or app. This ensures it aligns with your brand’s identity and user needs.",
      image: "/website-design/cards-pic/Design_mockups.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Visual Design",
      description:
        "After finalizing the mockups, we move to visual design, focusing on colors, typography, images, and other visual elements to create an engaging and functional experience.",
      image: "/website-design/cards-pic/Visual Design.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Development",
      description:
        "Our developers bring the design to life. Using the latest technologies and best practices, we ensure your site or app is fast, secure, and scalable.",
      image: "/website-design/cards-pic/Development.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Content Integration",
      description:
        "We integrate your content seamlessly, ensuring it flows well with the design and enhances user experience. From text to images and videos, everything fits perfectly.",
      image: "/website-design/cards-pic/Content_Integration.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Testing and Quality Assurance",
      description:
        "Before launching, we rigorously test every aspect of the site or app to ensure it performs flawlessly. This includes functionality, compatibility, security, and usability checks.",
      image: "/website-design/cards-pic/Testing and Quality Assurance.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Launch and Deployment",
      description:
        "Once everything is ready and tested, we launch your website or app. Our team handles the deployment process, ensuring a smooth launch.",
      image: "/website-design/cards-pic/Launch.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Post-Launch Support and Maintenance",
      description:
        "Our job doesn’t end at launch. We offer ongoing support to keep your website or app updated, secure, and performing at its best.",
      image: "/website-design/cards-pic/Post-Launch.webp",
      buttonText: "Consult Now →",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      <section className="py-16 px-4 max-md:py-10 mt-20 max-md:mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex max-lg:flex-col items-center gap-12 max-lg:gap-8">
            <div className="w-full lg:w-[50%]" data-aos="fade-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <img
                  src="/website-design/web-design.jpg"
                  alt="Website Design Services"
                  className="relative w-full rounded-3xl shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="w-full lg:w-[50%] space-y-4" data-aos="fade-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full shadow-md">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                  OUR SERVICES
                </span>
              </div>
              <h1 className="text-3xl max-md:text-2xl lg:text-4xl font-bold text-gray-800 leading-snug">
                Website Design Services Offered by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">BTJ ALPHA TECHNOLOGY</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full"></div>
              <p className="text-base max-md:text-sm text-gray-600 leading-relaxed">
                Welcome to BTJ ALPHA TECHNOLOGY, where the art of website
                design comes to life. In the digital age, your website serves as
                the virtual storefront of your brand. We specialize in creating visually captivating and
                user-centric websites that not only showcase your brand but also
                engage and convert visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="p-10 max-md:p-2">
        <div className="flex justify-between w-[95%] m-auto max-md:block">
          <div>
            <h2 className="text-xl max-md:text-lg text-[#ffc422] font-semibold tracking-widest mb-2">
              HOW DO WE WORK
            </h2>
            <h1 className="text-4xl font-semibold max-md:text-3xl">
              Our Work Process
            </h1>
          </div>
          <div className="text-lg w-[40%] mt-2 max-md:mt-4 max-md:w-[100%] ">
            Discover BTJ ALPHA TECHNOLOGY PVT LTD’s strategic approach to
            digital marketing and website design, crafted to boost engagement,
            visibility, and business growth.
          </div>
        </div>
        <div className="m-auto  pt-16 max-md:pt-6">
          <div className="absolute w-[90%] mt-12  ml-5 flex justify-center z-0">
            <img
              src="/website-design/process-line.webp"
              className="w-[80%] flex justify-center max-lg:hidden"
              alt=""
            />
          </div>
          <div className="relative grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="p-5 max-md:px-0 text-center">
              <div className="flex justify-center mb-5 z-50">
                <img
                  src="/website-design/process-icon1.webp"
                  className=" border border-gray-400 p-4  rounded-[12px]"
                  alt=""
                />
              </div>
              <h1 className="text-3xl font-[500] mb-5">Briefing</h1>
              <p className="px-5 text-lg text-gray-600">
                We start by understanding your goals and vision through a
                detailed briefing session. This step ensures that every solution
                is perfectly tailored to your unique needs.
              </p>
            </div>
            <div className="p-5  max-md:px-0 text-center">
              <div className="flex justify-center mb-5">
                <img
                  src="/website-design/process-icon1.webp"
                  className=" border border-gray-400 p-4 rounded-[12px]"
                  alt=""
                />
              </div>
              <h1 className="text-3xl font-[500] mb-5">Idea Generation</h1>
              <p className="px-3 text-lg text-gray-600">
                Our team brainstorms innovative concepts aligned with current
                trends, transforming ideas into actionable strategies for
                website design, digital marketing, and more.
              </p>
            </div>
            <div className="p-5  max-md:px-0 text-center">
              <div className="flex justify-center mb-5">
                <img
                  src="/website-design/process-icon1.webp"
                  className=" border border-gray-400 p-4 rounded-[12px]"
                  alt=""
                />
              </div>
              <h1 className="text-3xl font-[500] mb-5">Processing</h1>
              <p className="px-5 text-lg text-gray-600">
                We bring your project to life through precise development and
                design, ensuring each element is crafted for optimal performance
                and user experience.
              </p>
            </div>
            <div className="p-5  max-md:px-0 text-center">
              <div className="flex justify-center mb-5">
                <img
                  src="/website-design/process-icon1.webp"
                  className=" border border-gray-400 p-4 rounded-[12px]"
                  alt=""
                />
              </div>
              <h1 className="text-3xl font-[500] mb-5">Finishing</h1>
              <p className="px-5 text-lg text-gray-600">
                After meticulous testing and final touches, we deliver a
                polished, high-quality product that positions your brand
                effectively in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Enhanced Work Process Section - Ultra Premium Design */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-orange-50/30 py-20 px-6 max-md:py-12 max-md:px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#fb9c24]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff8c00]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#fb9c24]/5 to-[#ff8c00]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex justify-between items-start max-lg:flex-col gap-8 mb-16" data-aos="fade-up">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-5 py-2 rounded-full mb-5 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                <span className="text-xs font-bold text-white tracking-[0.25em] uppercase">
                  HOW DO WE WORK
                </span>
              </div>
              <h1 className="text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Work</span> Process
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full shadow-md"></div>
            </div>
            <div className="max-w-lg">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-[#fb9c24]/20">
                  <p className="text-base text-gray-700 leading-relaxed">
                    Discover BTJ ALPHA TECHNOLOGY PVT LTD's strategic approach to
                    digital marketing and website design, crafted to boost engagement,
                    visibility, and business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="absolute top-24 left-0 right-0 hidden lg:block pointer-events-none z-0">
              <div className="max-w-[90%] mx-auto">
                <svg className="w-full h-20" viewBox="0 0 1200 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="processLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fb9c24" stopOpacity="0.3">
                        <animate attributeName="stop-opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="50%" stopColor="#ff8c00" stopOpacity="0.7">
                        <animate attributeName="stop-opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#fb9c24" stopOpacity="0.3">
                        <animate attributeName="stop-opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M 100,40 Q 400,20 600,40 T 1100,40"
                    stroke="url(#processLine)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="15,10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Process Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-md:gap-10 relative z-10">
              {[
                {
                  number: "01",
                  title: "Briefing",
                  description: "We start by understanding your goals and vision through a detailed briefing session. This step ensures that every solution is perfectly tailored to your unique needs.",
                  icon: (
                    <svg className="w-20 h-20 max-md:w-16 max-md:h-16" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15" y="10" width="50" height="60" rx="3" fill="url(#grad1)" opacity="0.2"/>
                      <path d="M22 20h36M22 28h36M22 36h28M22 44h24" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round"/>
                      <circle cx="60" cy="60" r="12" fill="url(#grad1)"/>
                      <path d="M56 60l3 3 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fb9c24"/>
                          <stop offset="100%" stopColor="#ff8c00"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  ),
                  color: "from-orange-400 to-orange-600"
                },
                {
                  number: "02",
                  title: "Idea Generation",
                  description: "Our team brainstorms innovative concepts aligned with current trends, transforming ideas into actionable strategies for website design, digital marketing, and more.",
                  icon: (
                    <svg className="w-20 h-20 max-md:w-16 max-md:h-16" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="40" cy="35" r="14" stroke="url(#grad2)" strokeWidth="2.5"/>
                      <path d="M40 21v-10M40 49v10M54 35h10M26 35h-10M49 26l7-7M31 44l-7 7M49 44l7 7M31 26l-7-7" stroke="url(#grad2)" strokeWidth="2.5" strokeLinecap="round"/>
                      <rect x="35" y="53" width="10" height="6" rx="1.5" fill="url(#grad2)"/>
                      <path d="M32 59h16" stroke="url(#grad2)" strokeWidth="2.5" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fb9c24"/>
                          <stop offset="100%" stopColor="#ff8c00"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  ),
                  color: "from-amber-400 to-orange-500"
                },
                {
                  number: "03",
                  title: "Processing",
                  description: "We bring your project to life through precise development and design, ensuring each element is crafted for optimal performance and user experience.",
                  icon: (
                    <svg className="w-20 h-20 max-md:w-16 max-md:h-16" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="15" width="60" height="50" rx="3" stroke="url(#grad3)" strokeWidth="2.5"/>
                      <path d="M10 25h60" stroke="url(#grad3)" strokeWidth="2.5"/>
                      <circle cx="18" cy="20" r="2" fill="url(#grad3)"/>
                      <circle cx="26" cy="20" r="2" fill="url(#grad3)"/>
                      <circle cx="34" cy="20" r="2" fill="url(#grad3)"/>
                      <path d="M26 42l8 8 16-16" stroke="url(#grad3)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fb9c24"/>
                          <stop offset="100%" stopColor="#ff8c00"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  ),
                  color: "from-orange-500 to-orange-700"
                },
                {
                  number: "04",
                  title: "Finishing",
                  description: "After meticulous testing and final touches, we deliver a polished, high-quality product that positions your brand effectively in the digital landscape.",
                  icon: (
                    <svg className="w-20 h-20 max-md:w-16 max-md:h-16" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40 10L48 30L68 32L54 46L57 66L40 56L23 66L26 46L12 32L32 30L40 10z" fill="url(#grad4)" opacity="0.2" stroke="url(#grad4)" strokeWidth="2.5" strokeLinejoin="round"/>
                      <path d="M40 26v22M34 42l6 6 6-6" stroke="url(#grad4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="40" cy="42" r="3" fill="url(#grad4)"/>
                      <defs>
                        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fb9c24"/>
                          <stop offset="100%" stopColor="#ff8c00"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  ),
                  color: "from-orange-600 to-red-600"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Floating Number Badge */}
                  <div className="absolute -top-5 -left-3 z-20">
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                      <span className="text-white font-black text-xl">{step.number}</span>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping group-hover:animate-none"></div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="relative bg-white rounded-3xl p-8 max-md:p-6 h-full flex flex-col items-center text-center shadow-xl border-2 border-transparent group-hover:border-[#fb9c24] transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3">
                    
                    {/* Gradient Glow on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                    
                    {/* Icon Container */}
                    <div className="relative z-10 mb-6 p-5 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 text-2xl max-xl:text-xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                      {step.title}
                    </h3>

                    {/* Animated Divider */}
                    <div className="relative w-20 h-1 bg-gray-200 rounded-full mb-5 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}></div>
                    </div>

                    {/* Description */}
                    <p className="relative z-10 text-sm leading-relaxed text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {step.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#fb9c24] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
                    
                    {/* Corner Decoration */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${step.color} opacity-0 group-hover:opacity-10 rounded-tr-3xl rounded-bl-full transition-opacity duration-500`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Decorative Dots */}
          <div className="flex justify-center items-center gap-3 mt-16 max-md:mt-10">
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] shadow-lg"
                style={{ 
                  animation: 'bounce 1.5s infinite',
                  animationDelay: `${i * 0.2}s` 
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl text-[#fb9c24] font-bold tracking-wider mb-3">
              FEATURES & BENEFITS
            </h2>
            <h1 className="text-4xl max-md:text-3xl font-bold text-gray-800">
              Why Our Website Design Stands Out
            </h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className={`group bg-white hover:bg-gradient-to-br hover:from-[#fb9c24] hover:to-[#ff8c00] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  index >= 6 ? "hidden md:block" : ""
                }`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] group-hover:from-white group-hover:to-white rounded-xl mb-4 shadow-md transition-all duration-300">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-8 h-8 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-white mb-3 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Cards Section with Header */}
      <section className="relative py-20 px-6 max-md:px-4 bg-gradient-to-br from-white via-gray-50 to-orange-50/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#fb9c24]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#ff8c00]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 max-md:mb-10" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR PROCESS
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold mb-4 text-gray-900">
              Our Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Development Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial consultation to post-launch support, we guide you through every step of your website journey
            </p>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col items-center gap-8 max-md:gap-6">
            {cards.map((card, index) => {
              const animations = [
                "fade-up",
                "fade-right",
                "fade-left",
                "zoom-in",
                "flip-left",
                "fade-up",
                "zoom-in-up",
                "fade-right",
                "flip-right"
              ];
              
              return (
              <div
                key={index}
                data-aos={animations[index]}
                data-aos-duration="1000"
                className={`flex flex-row max-lg:flex-col ${
                  index % 2 != 0 ? "lg:flex-row-reverse" : ""
                } w-[85%] max-md:w-[95%] bg-white border-2 border-gray-100 hover:border-[#fb9c24] shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="p-8 w-[45%] max-lg:w-[100%] max-md:p-4">
                  <img
                    src={card.image}
                    alt={`${card.title} Icon`}
                    className="w-[330px] max-md:w-[250px] mx-auto transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-center text-left p-8 max-md:p-6 w-[55%] max-lg:w-[100%]">
                  <h2 className="text-3xl max-md:text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                    {card.title}
                  </h2>
                  <div className="w-16 h-1 bg-gray-200 rounded-full mb-4 group-hover:w-24 group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300"></div>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">{card.description}</p>
                  <button
                    onClick={openForm}
                    className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fb9c24] rounded-lg text-white py-3 px-6 text-base font-semibold w-fit hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Consult Now →
                  </button>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* Popup Form */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg relative w-full max-w-md">
              <button
                onClick={closeForm}
                className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-gray-900"
              >
                ×
              </button>
              <h3 className="text-3xl font-semibold mb-4 text-center">
                Get a free consultation with our expert
              </h3>
              <UserForm />
            </div>
          </div>
        )}
      </section>

      {/* OUR SERVICES Section - Premium Design */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-orange-50/20 py-20 px-6 max-md:py-12 max-md:px-4 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-10 w-64 h-64 bg-[#fb9c24]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -right-10 w-80 h-80 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-5 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.25em] uppercase">
                OUR SERVICES
              </span>
            </div>
            <h1 className="text-4xl max-xl:text-4xl max-lg:text-4xl max-md:text-1xl font-bold text-gray-900 mb-4 leading-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">BTJ ALPHA TECHNOLOGY</span>
            </h1>
            <h2 className="text-3xl max-lg:text-2xl max-md:text-xl font-semibold text-gray-700 mb-6">
              for Website Design
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg max-md:text-base text-gray-600 leading-relaxed">
                Join us on a journey where every pixel is purposeful, every click is
                intentional, and every visit is a step toward digital success.
              </p>
            </div>
          </div>

          {/* Content Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-lg:gap-8 items-center mt-16">
            {/* Image Section */}
            <div className="relative group order-2 lg:order-1" data-aos="fade-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              <div className="relative">
                <img
                  src="/website-design/verticals.jpg"
                  alt="Our Services"
                  className="relative w-full rounded-3xl shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] text-white px-6 py-4 rounded-2xl shadow-2xl max-md:hidden">
                  <div className="text-center">
                    <div className="text-3xl font-black">100+</div>
                    <div className="text-sm font-semibold">Projects Done</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services List Section */}
            <div className="space-y-6 order-1 lg:order-2">
              {[
                {
                  icon: "/website-design/about-icon1.webp",
                  title: "Custom Website Design",
                  description: "Our designs are tailored to reflect your brand's unique identity, ensuring a memorable user experience that resonates with your target audience.",
                  color: "from-orange-400 to-orange-600"
                },
                {
                  icon: "/website-design/about-icon2.webp",
                  title: "Responsive Design",
                  description: "We create responsive websites that provide a seamless experience across all devices, ensuring your visitors can engage with your content anytime, anywhere.",
                  color: "from-amber-400 to-orange-500"
                },
                {
                  icon: "/website-design/about-icon3.webp",
                  title: "SEO-Optimized Design",
                  description: "Every website we build is optimized for search engines, ensuring better visibility and higher rankings, driving organic traffic to your site.",
                  color: "from-orange-500 to-orange-700"
                },
                {
                  icon: "/website-design/about-icon4.webp",
                  title: "Ongoing Support and Maintenance",
                  description: "We believe in long-term partnerships. Our team provides continuous support and maintenance to ensure your website evolves alongside your business needs.",
                  color: "from-orange-600 to-red-600"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="flex items-start gap-6 max-md:gap-4 relative z-10">
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-xl blur-md group-hover:opacity-40 transition-opacity duration-300`}></div>
                        <div className={`relative w-20 h-20 max-md:w-16 max-md:h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <img
                            src={service.icon}
                            alt={service.title}
                            className="w-12 h-12 max-md:w-10 max-md:h-10 object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-2xl max-lg:text-xl max-md:text-lg font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                        {service.title}
                      </h3>
                      <div className="w-16 h-1 bg-gray-200 rounded-full mb-3 group-hover:w-24 group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-500"></div>
                      <p className="text-base max-md:text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fb9c24] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats or Call to Action */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-md:gap-4">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="relative group bg-white rounded-2xl p-6 max-md:p-4 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl max-md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export default WebsiteDesigning;
