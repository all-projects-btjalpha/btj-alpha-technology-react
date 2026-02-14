import hero from "../../assets/images/seo/hero1.jpg";
import main from "../../assets/images/seo/main.jpg";
import app from "../../assets/images/seo/expect-icons/app.webp";
import brand from "../../assets/images/seo/expect-icons/brand-awareness.webp";
import revenue from "../../assets/images/seo/expect-icons/increase-revenue.webp";
import traffic from "../../assets/images/seo/expect-icons/more traffic.webp";
import smm from "../../assets/images/seo/expect-icons/smm.webp";
import user from "../../assets/images/seo/expect-icons/user-engagement.webp";
import {
  services,
  features,
  cities,
  service,
  specialised,
  stories,
  faqs,
} from "../../components/SeoData";
import { useState } from "react";
import { useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";

function SEO() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  
  const [answer, setAnswer] = useState(null);
  const handleToggle = (index) => {
    setAnswer(answer === index ? null : index);
  };
  
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 mt-20 max-md:mt-16 bg-gradient-to-br from-[#0A192F] via-[#0e2339] to-[#0A192F] overflow-hidden">
        {/* Background Elements */}
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
                  SEO SERVICES
                </span>
              </div>
              
              <p className="text-lg text-gray-300 mb-4">
                ⭐ Rated Excellent by 195+ Happy Customers
              </p>
              
              <h1 className="text-4xl max-md:text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                The Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">SEO Services</span> Agency in India
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-6"></div>
              
              <p className="text-base text-gray-300 leading-relaxed">
                Our team of 37 SEO experts is ready to help you increase your
                traffic and get your website to the top of Google. Let's work
                together to achieve your goals.
              </p>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-[45%]" data-aos="fade-left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 max-md:p-6 shadow-2xl border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <h2 className="text-2xl max-md:text-xl font-bold text-gray-900 mb-2">
                      Get a Free Website Audit
                    </h2>
                    <p className="text-sm text-gray-600">
                      From Our SEO Specialists
                    </p>
                  </div>
                  <UserForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SEO Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                WHY SEO
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold mb-4 text-gray-900">
              Why Does Your Business Need{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">SEO Services in Delhi</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Whether you are a small business or a medium-sized firm, without SEO
              services, you cannot present yourself in front of your targeted
              audience. Some more reasons have been given here:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative group" data-aos="fade-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              <img
                src={hero}
                alt="SEO Analysis"
                className="relative w-full rounded-3xl shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Points Section */}
            <div data-aos="fade-left">
              <div className="space-y-6">
                {[
                  {
                    title: "You need to be on the 1st page:",
                    text: "According to experts, 90% of people do not even go to the 2nd page. So, you need to be on the first page if you want to improve your ROI."
                  },
                  {
                    title: "Improve the online visibility of your business:",
                    text: "By getting better online visibility, you can get recognized as a reliable brand and generate high volumes of leads and sales."
                  },
                  {
                    title: "Target the right audience:",
                    text: "'Quality wins over Quantity'. It is even more relevant when it comes to website traffic. With our industry-focused SEO strategies, you can touch the untapped market and convert them into lifetime customers."
                  },
                  {
                    title: "Raise user experience:",
                    text: "SEO is more than using the right keywords. To remain a loyal brand, you must provide your users with enhanced experiences so that they can ask you for more."
                  },
                  {
                    title: "Affordable yet comprehensive marketing:",
                    text: "When compared to other traditional marketing methods, SEO is much more affordable and effective at the same time."
                  }
                ].map((point, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#fb9c24]"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                        {point.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 bg-gradient-to-br from-[#0073bf] via-[#0056b3] to-[#003d82] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center" data-aos="fade-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl"></div>
                <img
                  src={main}
                  alt="Laptop Graphic"
                  className="relative w-full max-w-md rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Section */}
            <div data-aos="fade-left">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 shadow-lg backdrop-blur-sm">
                <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                  WHAT TO EXPECT
                </span>
              </div>
              
              <h2 className="text-4xl max-md:text-2xl font-bold text-white mb-8 leading-tight">
                What Can You Expect From BTJ ALPHA TECHNOLOGY SEO Services!
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { img: traffic, text: "More Traffic" },
                  { img: revenue, text: "Increase Revenue" },
                  { img: user, text: "Brand Awareness" },
                  { img: smm, text: "Business Growth" },
                  { img: brand, text: "Trust and Authority" },
                  { img: app, text: "More Leads" }
                ].map((benefit, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className="group flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20"
                  >
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img src={benefit.img} alt={benefit.text} className="w-12 h-12" />
                    </div>
                    <p className="text-white font-semibold">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PPC Services Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12" data-aos="fade-up">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
                <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                  PPC SERVICES
                </span>
              </div>
              <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
                GET REAL RESULTS WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">COMMERCIAL ADS PPC SERVICES</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full"></div>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600 leading-relaxed">
                BTJ ALPHA TECHNOLOGY is a top pay-per-click agency in Delhi NCR that
                uses cutting-edge digital marketing techniques to get remarkable
                outcomes. We optimise your return on investment and propel notable
                expansion by utilizing cutting-edge technologies and industry best
                practices.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group flex items-center bg-white border-2 border-gray-200 hover:border-[#fb9c24] rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#fb9c24]/10 to-[#ff8c00]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={service.img} alt={service.text} className="w-10 h-10" />
                </div>
                <p className="ml-4 text-sm font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR APPROACH
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold mb-6 text-gray-900">
              How Can We Help You <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Grow Your Business</span> through SEO?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4">
              Just remember! Result-driven SEO does not just happen! It requires
              so many things including long-term commitment and robust strategies.
              But when you join your hands with BTJ ALPHA TECHNOLOGY – a top SEO
              company in Delhi-NCR, you can expect stable and better results.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Countless service providers are there charging a hefty amount but
              why pay even a single penny when the traffic is not relevant!! Our
              search engine optimisation services, on the other hand, are not just
              focused on keywords and helping people find you online but driving
              relevant traffic to your website. JUST THINK and decide what you
              want!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24] flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#fb9c24]/10 to-[#ff8c00]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img src={feature.img} alt={feature.alt} className="w-12 h-12" />
                </div>
                <h3 className="text-sm font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR REACH
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Our Presence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Other Cities</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group flex items-center bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#fb9c24]"
              >
                <div className="flex-shrink-0 w-14 h-14 mr-4">
                  <img src={city.img} alt={city.alt} className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-gray-800 font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {city.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hyperlocal Marketing Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                HYPERLOCAL MARKETING
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Our Hyperlocal Marketing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive Solutions for Local Growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.map((services, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
              >
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#fb9c24]/10 to-[#ff8c00]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <img src={services.img} alt={services.title} className="w-14 h-14" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                    {services.title}
                  </h3>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-4"></div>
                <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                  {services.description1}
                </p>
                {services.description2 && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {services.description2}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                SPECIALIZATION
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Specialized Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {specialised.map((service, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24] flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#fb9c24]/10 to-[#ff8c00]/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img src={service.img} alt={service.title} className="w-8 h-8" />
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Still Not Convinced?
            </h2>
            <p className="text-gray-600 text-lg">
              Check Out More <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] font-bold">Success Stories</span>
            </p>
          </div>

          <div className="space-y-8">
            {stories.map((story, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#fb9c24]"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 bg-gradient-to-br from-[#0056b3] to-[#003d82] p-8 flex flex-col items-center justify-center text-center text-white">
                    <h3 className="text-3xl font-bold mb-6">{story.title}</h3>
                    <div className="relative group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={story.img}
                        alt={story.title}
                        className="w-full max-w-xs rounded-xl shadow-2xl"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                      {story.subtitle}
                    </h4>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">{story.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                FAQs
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4" data-aos="fade-up">
            {faqs &&
              faqs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#fb9c24]"
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full bg-gradient-to-r from-[#0056b3] to-[#003d82] text-white p-5 text-left flex justify-between items-center hover:from-[#003d82] hover:to-[#0056b3] transition-all duration-300"
                  >
                    <span className="font-semibold pr-4">{item.question}</span>
                    <div className={`flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center transform transition-transform duration-300 ${answer === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {answer === index && (
                    <div className="bg-gray-50 p-5">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SEO;
