import React, { useEffect } from "react";
import { FaCode, FaBullhorn, FaChartBar } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";

function SocialMediaMarketing() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const services = [
    {
      icon: <FaCode className="text-orange-500 text-3xl" />,
      title: "Media Solutions",
      description:
        "Strategic media planning and data-driven execution for maximum brand impact with social media marketing services.",
      backContent:
        "Boost your brand's reach with targeted campaigns and smart media planning.",
    },
    {
      icon: <MdEdit className="text-orange-500 text-3xl" />,
      title: "Brand Solutions",
      description:
        "Build a brand that stands out with strategic identity and design.",
      backContent:
        "Create a unique brand identity that resonates with your audience.",
    },
    {
      icon: <MdEdit className="text-orange-500 text-3xl" />,
      title: "Films & Photography",
      description:
        "A Video production company creating compelling visuals that captivate and connect.",
      backContent:
        "Produce captivating visuals that tell your brand's story effectively.",
    },
    {
      icon: <FaBullhorn className="text-orange-500 text-3xl" />,
      title: "Brand PR",
      description:
        "Strengthening brand credibility with strategic PR and media coverage.",
      backContent:
        "Build trust and credibility through targeted PR and media outreach.",
    },
    {
      icon: <FaChartBar className="text-orange-500 text-3xl" />,
      title: "Tech Solutions",
      description:
        "Tech-driven solutions for seamless operations, with e-commerce website development.",
      backContent:
        "Deliver innovative tech solutions to streamline your business.",
    },
    {
      icon: <FaChartBar className="text-orange-500 text-3xl" />,
      title: "Research Solutions",
      description:
        "Market research services delivering insights to drive strategic business decisions.",
      backContent:
        "Gain valuable insights to make informed business decisions.",
    },
  ];

  const helpServices = [
    {
      title: "LEAD GENERATION",
      img: "/smm/help_extra.png",
    },
    {
      title: "BRAND VISIBILITY",
      img: "/smm/seo.png",
    },
    {
      title: "INCREASE TRAFFIC",
      img: "/smm/help_com.png",
    },
    {
      title: "INCREASE SALES",
      img: "/smm/arrow.png",
    },
    {
      title: "PUBLIC PERCEPTION",
      img: "/smm/con_optima.png",
    },
  ];

  const leftPoints = [
    "Everything In-House.",
    "Certified Experts.",
    "Customized, Growth-Oriented Plans for Every Type of Business.",
    "Dedicated Account Managers.",
    "Client's Satisfaction.",
  ];

  const rightPoints = [
    "On-Time Delivery.",
    "Skilled Research Team.",
    "Complete Transparency.",
    "Performance Tracking.",
    "Unparalleled Portfolio of Clients and Brands.",
  ];

  const features = [
    {
      icon: "🟥",
      title: "Innovative Branding & Marketing",
      description: (
        <>
          We are a leading <strong>social media marketing agency</strong> and{" "}
          <strong>website designing company in India</strong>, offering
          innovative branding and{" "}
          <strong>social media marketing services</strong> to drive engagement
          and growth.
        </>
      ),
    },
    {
      icon: "📢",
      title: "Tailored Strategies for Growth",
      description: (
        <>
          We provide <strong>best digital marketing services</strong> that align
          with your brand's vision and goals. By leveraging data, creativity,
          and market expertise, we create impactful campaigns, making us one of
          the <strong>top digital marketing agencies in India</strong>.
        </>
      ),
    },
    {
      icon: "📊",
      title: "Performance-Driven Insights",
      description: (
        <>
          At BrandThink, we help brands achieve measurable success. As a{" "}
          <strong>top digital marketing company in India</strong>, we combine
          data-driven strategies with creative excellence to optimize campaigns,
          enhance brand visibility, and drive growth.
        </>
      ),
    },
  ];

  const smmServices = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "We are one of the leading SEO companies in India offering cost-effective SEO with competitive analysis for your business",
      image: "/smm/seo2.png",
    },
    {
      title: "Social Media Management (SMO)",
      description:
        "Our offer strategic plans for all social media initiatives. Connect with your customers & grow your business with our exclusive SMO services.",
      image: "/smm/smo.png",
    },
    {
      title: "Pay per Click Advertising (PPC)",
      description:
        "We are Amongst the Top 70 Agencies that are part of a special Google Managed Partner Program",
      image: "/smm/ppc.png",
    },
    {
      title: "Email Marketing",
      description:
        "Elixir Web Solutions Give the best ROI through the Email Marketing.",
      image: "/smm/email.png",
    },
    {
      title: "Online Reputation Management",
      description:
        "Create a positive image about your brand, products & services.",
      image: "/smm/reputation.png",
    },
    {
      title: "Affiliate Marketing",
      description:
        "We are partner with all the Top Affiliate company to deliver the best result",
      image: "/smm/affiliate.png",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 mt-20 max-md:mt-16 bg-gradient-to-br from-[#0A192F] via-[#0e2339] to-[#0A192F] overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/smm/smm-landing.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-10 w-64 h-64 bg-[#fb9c24]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -right-10 w-80 h-80 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between max-lg:flex-col gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-[52%]" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                  SMM SERVICES
                </span>
              </div>

              <p className="text-lg text-gray-300 mb-4">
                Don't Waste Money On Amateurs
              </p>

              <h1 className="text-4xl max-md:text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Your Expert{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                  Social Media Management
                </span>{" "}
                Agency
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-6"></div>

              <p className="text-base text-gray-300 leading-relaxed mb-8">
                We help you succeed online with proven social media marketing
                methods.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "25M+", label: "Monthly Organic Visitors" },
                  { value: "20+", label: "Social media case studies" },
                  { value: "20M", label: "Ecommerce Transactions" },
                  { value: "6M+", label: "Qualified Leads" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/20 hover:border-[#fb9c24] transition-all duration-300 hover:-translate-y-1"
                  >
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="tel:01204525483"
                className="inline-block bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] text-white py-3 px-8 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Call 0120 4525483
              </a>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-[45%]" data-aos="fade-left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 max-md:p-6 shadow-2xl border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full mb-4 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl max-md:text-xl font-bold text-gray-900 mb-2">
                      Get A Free Action Plan
                    </h2>
                    <p className="text-sm text-gray-600">
                      Start Your Digital Journey Today
                    </p>
                  </div>
                  <UserForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
                <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                  HOW WE WORK
                </span>
              </div>

              <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-6">
                Our Strategic{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                  Approach
                </span>
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-6"></div>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                For seamless collaboration, our dedicated account manager crafts
                tailored strategies, ensuring measurable impact with{" "}
                <span className="font-semibold text-gray-800">
                  digital marketing services
                </span>{" "}
                and{" "}
                <span className="font-semibold text-gray-800">
                  online reputation management services
                </span>
                .
              </p>

              <Link to="/contact">
                <button className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  CONTACT US NOW
                </button>
              </Link>
            </div>

            {/* Right Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-left">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  data-aos="flip-left"
                  data-aos-delay={idx * 100}
                  className={`group relative h-64 cursor-pointer ${
                    idx === 1 || idx === 4 ? "lg:translate-y-8" : ""
                  }`}
                  style={{ perspective: "1000px" }}
                >
                  <div className="relative w-full h-full duration-500 [transform-style:preserve-3d] transition-transform group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute w-full h-full bg-white shadow-lg rounded-2xl p-6 border-2 border-gray-100 [backface-visibility:hidden] flex flex-col hover:border-[#fb9c24] transition-all duration-300">
                      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#fb9c24]/10 to-[#ff8c00]/10 rounded-xl mb-4">
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Back */}
                    <div className="absolute w-full h-full bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-2xl p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center text-center shadow-2xl">
                      <p className="text-white font-semibold text-base">
                        {service.backContent}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* We Can Help Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              WE CAN HELP YOU WITH
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {helpServices.map((service, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <p className="text-sm font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 bg-gradient-to-br from-[#2a2726] via-[#1a1514] to-[#2a2726] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#fb9c24]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Build your business without hustling
          </h2>

          <p className="text-xl text-gray-300 mb-6">
            We help you develop an effective Digital Strategy
          </p>

          {/* Decorative lines */}
          <div className="flex justify-center items-center gap-4 my-6">
            <div className="w-6 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full"></div>
          </div>

          <p className="text-gray-400 text-lg mb-8">
            Our team of ninjas is ready to hear from you. Get in touch with us!
          </p>

          <Link to="/contact">
            <button className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] text-white font-bold px-10 py-4 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg">
              GET A QUOTE
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {feature.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-4"></div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 bg-gradient-to-br from-[#fb9c24] via-[#ff8c00] to-[#fb9c24] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 shadow-lg backdrop-blur-sm">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-white mb-4">
              We are Amongst the Top Agencies
            </h2>
            <p className="text-white/90 text-lg">
              that are part of a special program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
            {/* Left Points */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <ul className="space-y-4">
                {leftPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-[#fb9c24]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Points */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <ul className="space-y-4">
                {rightPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-[#fb9c24]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Service We Offer
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {smmServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-[#fb9c24] hover:bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center"
              >
                <div className="w-28 h-28 bg-gradient-to-br from-[#fb9c24]/10 to-[#ff8c00]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {service.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-4"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SocialMediaMarketing;
