import { useState, useEffect } from "react";
import n2 from "../../assets/images/google-ads/n2.svg";
import rect from "../../assets/images/google-ads/rect.webp";
import education from "../../assets/images/google-ads/icons/education.webp";
import food from "../../assets/images/google-ads/icons/food.webp";
import healthcare from "../../assets/images/google-ads/icons/healthcare.webp";
import hospitality from "../../assets/images/google-ads/icons/hospitality.webp";
import hotel from "../../assets/images/google-ads/icons/hotel.webp";
import real from "../../assets/images/google-ads/icons/real-estate.webp";
import retail from "../../assets/images/google-ads/icons/retail.webp";
import travel from "../../assets/images/google-ads/icons/travel.webp";
import first from "../../assets/images/google-ads/1.webp";
import second from "../../assets/images/google-ads/2.webp";
import third from "../../assets/images/google-ads/3.webp";
import flexibility from "../../assets/images/google-ads/flexibility.webp";
import laptop from "../../assets/images/google-ads/laptop.webp";
import laptop2 from "../../assets/images/google-ads/laptop2.webp";
import google from "../../assets/images/google-ads/google.webp";
import { Link } from "react-router-dom";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";

function GoogleAds() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      header: "For Lead Generation",
      body: "Google Ads are a powerful tool for generating high-quality leads. Search Ads work best for connecting with users actively searching for your services. You can also leverage YouTube Search Ads and Dynamic Search Ads for additional reach and engagement.",
    },
    {
      header: "For eCommerce Sites",
      body: "For eCommerce businesses, Shopping Ads (now part of Performance Max) are highly effective. These campaigns use Google's smart bidding and automation to optimize your ads, helping you drive more sales with less effort.",
    },
    {
      header: "For Mobile App Promotion",
      body: "Have a mobile app on Android or iOS? Universal App Campaigns are your go-to solution. These ads help you boost app installations and increase user engagement. They are cost-effective and deliver measurable results.",
    },
    {
      header: "For YouTube Video Ads",
      body: "If growing your YouTube channel is a priority, Video Ads can help you increase views, build your subscriber base, and boost brand awareness. With multiple ad formats available, you can customize campaigns based on your goals, budget, and target audience.",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner Section - Enhanced */}
      <section className="relative py-8 px-6 max-md:px-4 mt-20 max-md:mt-16 bg-gradient-to-br from-[#f7f0ff] via-[#fef5ff] to-[#f7f0ff] overflow-hidden">
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
                  GOOGLE ADS AGENCY
                </span>
              </div>

              <h1 className="text-4xl max-md:text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The Google Ads Agency for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                  Predictable ROIs.
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-6"></div>

              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Build Google Ads campaigns that are exceptional! Boundary helps
                you craft strategies that outperform the competition and drive
                sustainable growth and scale💸
              </p>

              <Link to="/contact">
                <button className="inline-block bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] text-white py-3 px-8 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  See How We Run Ads
                </button>
              </Link>
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl max-md:text-xl font-bold text-gray-900 mb-2">
                      Your Google Ads Success Starts Here
                    </h2>
                    <p className="text-sm text-gray-600">
                      Get your free consultation today
                    </p>
                  </div>
                  <UserForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start with Search Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <div data-aos="fade-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl p-8 border-8 border-white">
                  {/* Google Logo */}
                  <div className="text-center mb-6">
                    <div className="flex justify-center space-x-1">
                      <h1 className="text-4xl font-bold text-blue-500">G</h1>
                      <h1 className="text-4xl font-bold text-red-500">o</h1>
                      <h1 className="text-4xl font-bold text-yellow-500">o</h1>
                      <h1 className="text-4xl font-bold text-green-500">g</h1>
                      <h1 className="text-4xl font-bold text-blue-500">l</h1>
                      <h1 className="text-4xl font-bold text-red-500">e</h1>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="bg-white rounded-full shadow-md flex items-center justify-center h-12 px-4 mb-6">
                    <p className="text-gray-500">Modern furniture</p>
                    <i className="fa fa-microphone text-blue-500 ml-2"></i>
                  </div>

                  {/* Ad Card */}
                  <div className="bg-white rounded-xl p-5 shadow-lg border-2 border-[#fb9c24]/20 hover:border-[#fb9c24] transition-all duration-300">
                    <h3 className="text-gray-800 font-bold text-lg mb-2">
                      Modern Design & Co
                    </h3>
                    <p className="text-gray-600 text-sm">
                      The best modern furniture essentials for your home.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div data-aos="fade-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
                <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                  SEARCH ADS
                </span>
              </div>

              <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-6">
                Start with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                  Search
                </span>
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-6"></div>

              <p className="text-gray-600 text-lg leading-relaxed">
                Help drive sales, leads, or site traffic by getting your
                business in front of people who are actively searching Google
                for products or services you offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 bg-gradient-to-br from-[#191970] via-blue-800 to-blue-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div data-aos="fade-right">
              <img
                src={n2}
                alt="Google Ads"
                className="w-full max-w-md mx-auto"
              />
            </div>

            {/* Content */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold text-white mb-8">
                Your Google Ads management team will:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Research your industry",
                  "Plan your campaign",
                  "Write your ad copy",
                  "Design your conversion-optimized landing pages",
                  "Setup and launch your campaign",
                  "Proactively adjust your bids",
                  "Track your conversions",
                  "Report on your campaign performance",
                ].map((item, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full flex items-center justify-center">
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
                    <span className="text-white text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
                <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                  CHOOSE YOUR ADS
                </span>
              </div>

              <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-6">
                What Type of Google Ads is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                  Right for You?
                </span>
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-6"></div>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Your goals matter! Use Search Ads to connect with people
                actively searching, Display Ads to boost brand visibility, Video
                Ads to captivate with engaging content, and Shopping Ads to
                showcase your products directly to shoppers.
              </p>

              {/* Accordion */}
              <div className="space-y-3">
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#fb9c24]"
                  >
                    <div
                      className="flex justify-between items-center px-5 py-4 cursor-pointer bg-gradient-to-r from-gray-50 to-white hover:from-orange-50 hover:to-orange-50 transition-all duration-300"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="font-bold text-gray-900 text-base">
                        {item.header}
                      </span>
                      <div
                        className={`w-8 h-8 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full flex items-center justify-center text-white font-bold transform transition-transform duration-300 ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        {activeIndex === index ? "−" : "+"}
                      </div>
                    </div>
                    {activeIndex === index && (
                      <div className="px-5 py-4 bg-gray-50">
                        <p className="text-gray-600 leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div data-aos="fade-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <img
                  src={rect}
                  alt="Google Ads Services"
                  className="relative w-full rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                INDUSTRIES
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              { img: real, title: "Real Estate" },
              { img: healthcare, title: "Healthcare" },
              { img: food, title: "Food and Beverages" },
              { img: hospitality, title: "Hospitality" },
              { img: retail, title: "Retail" },
              { img: travel, title: "Travel" },
              { img: education, title: "Education and Learning" },
              { img: hotel, title: "Hotel" },
            ].map((industry, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24] flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#fb9c24]/10 to-[#ff8c00]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={industry.img}
                    alt={industry.title}
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-base font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {industry.title}
                </h3>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl flex flex-col lg:flex-row items-center gap-6 shadow-2xl"
          >
            <p className="text-xl lg:text-2xl font-bold flex-grow text-center lg:text-left">
              Ads That Propel Your Growth to New Heights
            </p>
            <Link to="/contact">
              <button className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] text-white font-bold px-8 py-4 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Connect With Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Stand Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Where Does Your Business Stand Right Now?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: third,
                title: "No Google Ads",
                subtitle: "Low Business:",
                description:
                  "Still relying on just networks and other channels?",
              },
              {
                img: first,
                title: "Weak Google Ads Strategy",
                subtitle: "Money Drain:",
                description:
                  "Don't let an ineffective strategy drain your budget.",
              },
              {
                img: second,
                title: "Strong Google Ads Strategy",
                subtitle: "Fast Track Your Business:",
                description:
                  "Optimize your journey with our expert strategy.",
              },
            ].map((card, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-gradient-to-br from-[#1a2a48] to-[#0d1524] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {card.title}
                </h3>
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <p className="text-gray-300">
                  <span className="font-bold text-[#fb9c24]">
                    {card.subtitle}
                  </span>{" "}
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexibility Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 uppercase">
              Flexibility Sets Us Apart: Explore Our Agency's "Flexi-Fast Offer"
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div data-aos="fade-right">
              <img
                src={flexibility}
                alt="Business Strategy"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Content */}
            <div data-aos="fade-left">
              <ul className="space-y-4">
                {[
                  "Powerful Google Ads Strategy",
                  "Achieve results in just 3 months",
                  "Zero retainer fees; retain us based on performance",
                  "No binding contracts, stop services anytime",
                  "Fixed Fee for Ad spends up to 10 Lac INR",
                  "Bi-weekly meetings",
                  "Creative Advertising Ideas",
                ].map((item, index) => (
                  <li
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full border-2 border-gray-300 hover:border-[#fb9c24] hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-[#fb9c24] text-xl">▶</span>
                    <span className="text-gray-800 text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              The Numbers Speak:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                Our Success Story
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              A glimpse into our experience, clientele, and performance metrics.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "image", src: laptop },
              { type: "stat", value: "115%", text: "INCREASE IN PPC ENGAGEMENT", color: "teal" },
              { type: "image", src: laptop2 },
              { type: "stat", value: "225%", text: "INCREASE IN PPC CONVERSIONS", color: "blue" },
              { type: "image", src: google },
              { type: "stat", value: "78%", text: "DECREASE IN PPC AD SPEND", color: "yellow" },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group"
              >
                {item.type === "image" ? (
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-[#fb9c24] transition-all duration-300">
                    <img
                      src={item.src}
                      alt="Success metrics"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div
                    className={`bg-gradient-to-br ${
                      item.color === "teal"
                        ? "from-teal-500 to-teal-600"
                        : item.color === "blue"
                        ? "from-blue-500 to-blue-600"
                        : "from-yellow-500 to-yellow-600"
                    } text-white text-center flex items-center justify-center rounded-2xl shadow-xl p-8 h-full group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div>
                      <span className="text-5xl font-bold block mb-2">
                        {item.value}
                      </span>
                      <span className="text-lg font-medium">{item.text}</span>
                    </div>
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

export default GoogleAds;
