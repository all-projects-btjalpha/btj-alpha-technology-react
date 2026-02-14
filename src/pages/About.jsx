import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import React, { useRef } from "react";
import team from "/Team1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useEffect } from "react";

function About() {
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);

  var setting = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const handleNext2 = () => {
    sliderRef2.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  const handlePrev2 = () => {
    sliderRef2.current.slickPrev();
  };

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Hero Section - Who We Are */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 mt-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={team}
                alt="BTJ Alpha Technology Team"
                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <div className="inline-block">
                <h3 className="text-base sm:text-lg font-bold text-[#ffc422] uppercase tracking-widest bg-[#ffc422]/10 px-4 py-2 rounded-full border-2 border-[#ffc422]/30">
                  WHO WE ARE?
                </h3>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Hey, We're A Team Of <span className="bg-gradient-to-r from-[#ffc422] to-orange-500 bg-clip-text text-transparent">Creators</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                At BTJ ALPHA TECHNOLOGY PVT LTD, we're a dynamic team of creators who
                breathe life into technology. Passionate about innovation, we
                design and develop tailored software and digital solutions that
                empower businesses to flourish in the ever-evolving digital
                landscape. With a focus on collaboration and creativity, we
                transform ideas into impactful realities, ensuring that our
                clients not only keep up but stand out. Let's build something
                extraordinary together!
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-6">
              <div className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#ffc422] hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffc422]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#ffc422] to-orange-500 bg-clip-text text-transparent mb-2">
                    50+
                  </h1>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold">Employees</p>
                </div>
              </div>
              <div className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                    378+
                  </h1>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold">Completed Projects</p>
                </div>
              </div>
              <div className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2">
                    326+
                  </h1>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold">Trusted Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <div className="inline-block mb-4">
            <h3 className="text-sm sm:text-base font-bold text-[#fb9c24] uppercase tracking-[0.2em] bg-[#fb9c24]/5 px-6 py-3 rounded-full border border-[#fb9c24]/20">
              ABOUT BTJ ALPHA TECHNOLOGY PVT LTD
            </h3>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight max-w-4xl mx-auto">
            Empowering Businesses Through Digital Innovation
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            At BTJ ALPHA TECHNOLOGY PVT LTD, we are passionate about helping businesses thrive in the digital era.
            We specialize in digital marketing, website design, and IT solutions that empower brands to stand out, engage their audience, and grow with confidence.
            Our team combines creativity, technology, and strategy to deliver results-driven solutions that make your online presence truly impactful.
          </p>
        </div>

        {/* Mission and Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Mission Card */}
          <div className="group relative bg-gradient-to-br from-orange-50 via-white to-white p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#fb9c24]/40 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fb9c24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#fb9c24]/10 via-orange-300/10 to-transparent blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-[#fb9c24] rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  M
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Our mission is simple yet powerful — to elevate your online presence.
                We aim to deliver innovative, results-oriented digital marketing and web design solutions that increase visibility, drive targeted traffic, and help you build meaningful connections with your customers.
                Every strategy we craft is tailored to your business goals, ensuring measurable success and long-term growth.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-gradient-to-br from-blue-50 via-white to-white p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-400/40 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/10 via-indigo-300/10 to-transparent blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  V
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Our vision is to be a leading force in digital transformation, guiding businesses of all sizes toward sustainable success.
                We strive to set new standards in digital strategy, creative web design, and customer-focused marketing — helping our clients stay ahead in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-base sm:text-lg font-semibold text-[#fb9c24] uppercase tracking-widest mb-4">
              TESTIMONIALS
            </h3>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              <span className="text-gray-900">What Our </span>
              <span className="text-gray-900">Clients</span>
              <span className="text-gray-900"> Say</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="max-w-4xl mx-auto relative">
            <Slider {...setting} ref={sliderRef2}>
              {/* Testimonial 1 */}
              <div className="px-4">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 relative overflow-hidden max-w-3xl mx-auto">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-8">
                    <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#fb9c24]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  {/* Content - Centered Layout */}
                  <div className="relative z-10 text-center">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-4">
                      <img
                        src="/about-page/m4.webp"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md ring-3 ring-[#fb9c24]/30"
                        alt="Rajesh Kumar"
                      />
                    </div>

                    {/* Name and Title */}
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                        Priya Sharma
                      </h3>
                      <p className="text-[#fb9c24] font-semibold text-sm sm:text-base mb-1">
                        Marketing Director
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Digital Solutions Agency
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      "BTJ ALPHA TECHNOLOGY PVT LTD has transformed our online presence with their
                      expertise. They understood our vision and delivered beyond our
                      expectations. The app includes real-time tracking, and user-friendly UI. It helped us launch our business successfully."
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="px-4">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 relative overflow-hidden max-w-3xl mx-auto">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-8">
                    <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#fb9c24]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  {/* Content - Centered Layout */}
                  <div className="relative z-10 text-center">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-4">
                      <img
                        src="/about-page/f2.jpg"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md ring-3 ring-[#fb9c24]/30"
                        alt="Priya Sharma"
                      />
                    </div>

                    {/* Name and Title */}
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                        Priya Sharma
                      </h3>
                      <p className="text-[#fb9c24] font-semibold text-sm sm:text-base mb-1">
                        Marketing Director
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Digital Solutions Agency
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      "Working with BTJ ALPHA TECHNOLOGY PVT LTD was one of the best decisions for our
                      business. Their targeted strategies significantly boosted our
                      customer engagement and helped us achieve remarkable growth in digital marketing."
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="px-4">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 relative overflow-hidden max-w-3xl mx-auto">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-8">
                    <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#fb9c24]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  {/* Content - Centered Layout */}
                  <div className="relative z-10 text-center">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-4">
                      <img
                        src="/about-page/m2.webp"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md ring-3 ring-[#fb9c24]/30"
                        alt="Sanjay Gupta"
                      />
                    </div>

                    {/* Name and Title */}
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                        Sanjay Gupta
                      </h3>
                      <p className="text-[#fb9c24] font-semibold text-sm sm:text-base mb-1">
                        CEO & Founder
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Tech Innovations Ltd
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                      <FaStar className="text-[#fb9c24] text-lg sm:text-xl" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      "BTJ ALPHA TECHNOLOGY PVT LTD has an excellent team that delivered a seamless
                      experience from start to finish. They've given us the digital
                      edge we needed to compete in today's market. Highly recommended!"
                    </p>
                  </div>
                </div>
              </div>
            </Slider>

            {/* Navigation Buttons */}
            {/* <div className="flex justify-center items-center gap-4 mt-10"> */}
              {/* <button
                onClick={handlePrev2}
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#ffc422] text-white shadow-lg hover:bg-orange-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <BsArrowLeft className="text-xl sm:text-2xl" />
              </button> */}
              {/* <div className="flex gap-2">
                <span className="w-3 h-1 rounded-full bg-[#ffc422]"></span>
                <span className="w-3 h-1 rounded-full bg-gray-300"></span>
                <span className="w-3 h-1 rounded-full bg-gray-300"></span>
                <span className="w-3 h-1 rounded-full bg-gray-300"></span>
                <span className="w-3 h-1 rounded-full bg-gray-300"></span>
                <span className="w-3 h-1 rounded-full bg-gray-300"></span>
              </div> */}
              {/* <button
                onClick={handleNext2}
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#ffc422] text-white shadow-lg hover:bg-orange-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <BsArrowRight className="text-xl sm:text-2xl" />
              </button> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
