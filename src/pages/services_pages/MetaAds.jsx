import React, { useEffect } from "react";
import metabg from "../../assets/images/meta-ads/hero/metabg.png";
import meta from "../../assets/images/meta-ads/hero/meta.png";
import lead from "../../assets/images/meta-ads/lead.webp";
import trends from "../../assets/images/meta-ads/trends.webp";
import partner from "../../assets/images/meta-ads/partner.webp";
import dedicated from "../../assets/images/meta-ads/hirringg.png";
import audience from "../../assets/images/meta-ads/audience.webp";
import growth from "../../assets/images/meta-ads/growth.webp";
import target from "../../assets/images/meta-ads/target.webp";
import arrow from "../../assets/images/meta-ads/arrow.webp";
import marketing from "../../assets/images/meta-ads/marketing.webp";
import Strategy from "../../assets/images/meta-ads/Strategy.webp";
import { workItems, cards, progressItems } from "../../components/MetaAdsData";
import { Link } from "react-router-dom";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";

function MetaAds() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner Section - Enhanced */}
      <section className="relative py-8 px-6 max-md:px-4 mt-20 max-md:mt-16 bg-gradient-to-br from-[#0A192F] via-[#0e2339] to-[#0A192F] overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${metabg})`,
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
                  META ADS AGENCY
                </span>
              </div>

              <h1 className="text-4xl max-md:text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Results-Driven Meta Ads{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                   Agency in India for Maximum ROI
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-8"></div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {[
                  "Advanced Audience Targeting",
                  "High-Converting Ad Creatives",
                  "AI-Based Campaign Optimization",
                  "Proven ROI-Focused Strategies",
                  "25M+ Reach Generated",
                  "200+ Active Campaigns Managed",
                ].map((item, index) => (
                  <li
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    className="flex items-center text-base text-gray-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-white"
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
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="tel:01204525483"
                className="inline-block bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] text-white py-3 px-8 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-8"
              >
                Call 0120 4525483
              </a>

              {/* Certifications */}
              <div className="flex gap-4 flex-wrap">
                {[
                  "Media Buying Professional",
                  "Media Planning Professional",
                  "Digital Marketing Associate",
                ].map((cert, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className="group bg-[#0000ff] rounded-2xl p-4 flex flex-col items-center text-center w-28 hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                    <div className="bg-white rounded-t-full w-20 h-12 flex items-center justify-center mb-2 -mt-8">
                      <img src={meta} alt="Meta Certified" className="h-10 w-16" />
                    </div>
                    <p className="text-white text-xs font-semibold">{cert}</p>
                  </div>
                ))}
              </div>
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
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl max-md:text-xl font-bold text-gray-900 mb-2">
                      How can we help you?
                    </h2>
                    <p className="text-sm text-gray-600">
                      Let's discuss your Meta Ads strategy
                    </p>
                  </div>
                  <UserForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
                <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                  WHO WE ARE
                </span>
              </div>

              <h2 className="text-4xl max-md:text-2xl font-bold text-white mb-6 leading-tight">
                Your Trusted Meta Ads Partner in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                  Digital Growth
                </span>
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-6"></div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                With increasing competition on social platforms, running ads without strategy can waste budget quickly. 
                As an experienced Meta Ads Agency in India, we create performance-driven campaigns backed by research, audience insights, and real-time analytics.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    img: lead,
                    title: "Industry Insights & Trends",
                  },
                  {
                    img: trends,
                    title: "Focus on Core Business Activities",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 border border-white/20 hover:border-[#fb9c24] hover:bg-white/20 transition-all duration-300"
                  >
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <p className="text-white font-semibold text-sm">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Details List */}
              <ul className="space-y-3">
                {[
                  "Facebook Lead Generation Ads",
                  "Instagram Conversion Campaigns",
                  "Remarketing & Retargeting",
                  "Lookalike Audience Targeting",
                  "Sales Funnel Optimization",
                ].map((detail, index) => (
                  <li
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    className="flex items-start text-gray-300"
                  >
                    <span className="text-[#fb9c24] text-2xl mr-3 flex-shrink-0">
                      ↗
                    </span>
                    <span className="text-base">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Content */}
            <div data-aos="fade-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <img
                  src={partner}
                  alt="Team Presentation"
                  className="relative w-full rounded-3xl shadow-2xl border-4 border-white/10 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {card.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-3"></div>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#fb9c24]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section */}
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
                <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                  WHY CHOOSE US
                </span>
              </div>

              <h2 className="text-4xl max-md:text-2xl font-bold text-white mb-6 leading-tight">
              Commitment, Quality & Measurable{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                  Results
                </span>
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-6"></div>

              <p className="text-xl text-gray-300 mb-4 font-semibold">
                We're passionate about driving your business performance through
                smart strategies.
              </p>

              <p className="text-lg text-gray-400 italic">
                "Using data to create personalized, seamless experiences that
                lead to meaningful business growth."
              </p>
            </div>

            {/* Right Section - Progress Bars */}
            <div data-aos="fade-left">
              <div className="space-y-6">
                {progressItems.map((item, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="group bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#fb9c24] hover:bg-white/10 transition-all duration-300"
                  >
                    <p className="text-white mb-3 font-medium">{item.text}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-white/20 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] h-full rounded-full transition-all duration-1000"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-bold text-sm w-12 text-right">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Work For Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR EXPERTISE
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
             Industries We Scale with Meta Ads
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Do you have a website in mind? Then, we're here for you! We work
              around the clock to transform your ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {workItems.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className="group flex flex-col items-center text-center bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-24 h-24 mb-3 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-sm font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Dedicated Team Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Hire Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                Dedicated Meta Ads Team

              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div data-aos="fade-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <img
                  src={dedicated}
                  alt="Team working"
                  className="relative w-full rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div data-aos="fade-left">
              <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] font-bold mb-6 leading-tight">
                We'll deploy a skilled team to build your product.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Experienced Media Buyers",
                  "Creative Designers",
                   "Conversion Tracking Experts",
                   " Funnel Strategists",
                   " Performance Analysts",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 text-lg"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
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
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <button className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] text-white px-8 py-3 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Know More
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Ads Services Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
             Our Comprehensive Meta Ads Management Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Harness the full spectrum of advertising opportunities within the
              Meta ecosystem. Dive deep into the various facets of Meta
              advertising, tailored to engage, resonate, and deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                img: audience,
                title: "Campaign Strategy & Execution",
                description:
                   " We create data-driven ad strategies including funnel mapping, budget allocation, audience targeting, and performance optimization.",
                points: [
                  "Campaign Strategy & Execution: Tailored strategies built around your unique goals.",
                  "Ad Creative Design: Stunning visuals paired with compelling narratives.",
                  "Performance Tracking & Reporting: Real-time insights to stay ahead of the curve.",
                ],
              },
              {
                img: growth,
                title: "Content & Creative Optimization",
                description:
                  "High-quality creatives including carousel ads, reels ads, video ads, and dynamic product ads designed for maximum engagement.",
                points: [
                  "Ad Creative A/B Testing: Determine the most effective visuals and messages.",
                  "Multimedia Content Guidance: Leverage visuals, videos, and interactive elements for deeper engagement.",
                  "Ad Copywriting & Refinement: Words that inspire action and build brand loyalty.",
                ],
              },
              {
                img: target,
                title: "Advanced Targeting & Retargeting",
                description:
                  "Custom audiences, lookalike audiences, remarketing campaigns, and interest-based targeting for higher conversion rates.",
                points: [
                  "Audience Segmentation: Precise targeting based on behavior, interests, and more.",
                  "Dynamic Retargeting: Reconnect with potential customers using data-driven strategies.",
                  "Lookalike Audience Creation: Expand your reach to potential customers similar to your best ones.",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-gradient-to-br from-[#1c438d] to-[#0d2552] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-40 h-40 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-4"></div>
                <p className="text-gray-300 mb-6 text-sm">{service.description}</p>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="text-gray-300 text-sm leading-relaxed">
                      <strong className="text-[#fb9c24]">
                        {point.split(":")[0]}:
                      </strong>
                      {point.split(":")[1]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center" data-aos="fade-up">
            <Link to="/contact">
              <button className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Three Boxes Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: arrow,
                text: "Improved Target Audience, Increased Brand Awareness, And Targeted Drip Funnel Strategies: a Killer ROI",
              },
              {
                img: marketing,
                text: "Out-of-the-box Strategies, Compelling Ad Copy, High-Quality Ads, and Landing Pages: Skyrocket Conversions",
              },
              {
                img: Strategy,
                text: "A/B Testing, Data-based Optimization, Tracking and Reporting: Scalable Growth and Profits",
              },
            ].map((box, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group bg-gradient-to-br from-[#0073bf] to-[#0056b3] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24] flex flex-col items-center text-center"
              >
                <div className="w-36 h-36 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src={box.img} alt="" className="w-28 h-28" />
                </div>
                <p className="text-white text-base leading-relaxed">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MetaAds;
