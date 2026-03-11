import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { FaTimes, FaCheckCircle, FaChevronDown, FaChevronUp, FaPhone, FaWhatsapp, FaGlobe, FaArrowRight } from "react-icons/fa";
import { 
  FaLaptopCode, FaMobileAlt, FaChartLine, FaSearch, FaStar, FaRocket, FaClock, FaDollarSign 
} from "react-icons/fa";

function BusinessLanding() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);

  const handleExploreWebsite = () => {
    navigate('/home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      category: "Website Design & Development",
      icon: <FaLaptopCode className="text-4xl" />,
      items: ["Business Website", "E-commerce Website", "Portfolio Website", "Landing Pages"],
      bgImage: "/WEBSITE_WORK.jpg"
    },
    {
      category: "Custom Software Development",
      icon: <FaMobileAlt className="text-4xl" />,
      items: ["School Management Software", "Hospital Management Software", "CRM Software", "Billing Software"],
      bgImage: "/website1.avif"
    },
    {
      category: "Digital Growth Services",
      icon: <FaChartLine className="text-4xl" />,
      items: ["SEO Optimization", "Google Ads Management", "Website Maintenance", "Social Media Marketing"],
      bgImage: "/SEO.jpg"
    }
  ];

  const whyChooseUs = [
    { icon: <FaClock />, text: "5+ Years Experience" },
    { icon: <FaRocket />, text: "100+ Websites Developed" },
    { icon: <FaSearch />, text: "SEO Friendly Development" },
    { icon: <FaMobileAlt />, text: "Mobile Responsive Design" },
    { icon: <FaChartLine />, text: "Fast Loading Speed" },
    { icon: <FaDollarSign />, text: "Affordable Pricing" }
  ];

  const portfolio = [
    { title: "Business Website", image: "/website1.avif" },
    { title: "E-commerce Website", image: "/khan web.png" },
    { title: "School Website", image: "/unbox web.png" },
    { title: "Software Dashboard", image: "/workzen web.png" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Great service! My website was completed within 7 days and now I get online inquiries daily."
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Very professional team. Highly recommended for website and software development."
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Website",
      // price: "₹7,999",
      features: ["5 Pages Website", "Mobile Responsive", "Contact Form", "Basic SEO", "1 Month Support"]
    },
    {
      name: "Business Website",
      // price: "₹14,999",
      features: ["10 Pages", "SEO Friendly", "Admin Panel", "Email Integration", "3 Months Support"],
      popular: true
    },
    {
      name: "E-commerce Website",
      // price: "₹24,999",
      features: ["Product Management", "Payment Gateway", "Order Management", "Customer Dashboard", "6 Months Support"]
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Usually 5-10 days depending on the project complexity and requirements."
    },
    {
      question: "Will my website be mobile friendly?",
      answer: "Yes, all our websites are fully responsive and optimized for all devices including mobile, tablet, and desktop."
    },
    {
      question: "Do you provide SEO services?",
      answer: "Yes, we provide complete SEO optimization and Google Ads management services to help your business grow online."
    },
    {
      question: "What is included in website maintenance?",
      answer: "Website maintenance includes regular updates, security patches, content updates, and technical support."
    },
    {
      question: "Do you provide after-sales support?",
      answer: "Yes, we provide dedicated support based on your selected plan. We ensure your website runs smoothly."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Form */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="w-full px-4 md:px-8 lg:px-12 mx-auto relative z-10 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 mt-16 md:mb-6 leading-tight">
                Professional Website Design & Custom Software Development
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-balck/90 mb-6 md:mb-8">
                Get a fast, SEO-friendly website or business software to grow your business online.
              </p>

              {/* 3 Key Points */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
                  <FaCheckCircle className="text-black text-lg md:text-2xl flex-shrink-0" />
                  <span className="text-black text-sm sm:text-base md:text-lg font-medium">Responsive Website Design</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
                  <FaCheckCircle className="text-black text-lg md:text-2xl flex-shrink-0" />
                  <span className="text-black text-sm sm:text-base md:text-lg font-medium">Custom Business Software</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
                  <FaCheckCircle className="text-black text-lg md:text-2xl flex-shrink-0" />
                  <span className="text-black text-sm sm:text-base md:text-lg font-medium">Affordable Pricing</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                <button
                  onClick={openForm}
                  className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-3 px-6 md:py-4 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
                >
                  Get Free Consultation
                </button>
                {/* <button
                  onClick={openForm}
                  className="bg-transparent border-2 border-black text-black hover:bg-white hover:text-[#fb9c24] font-bold py-3 px-6 md:py-4 md:px-8 rounded-full transition-all duration-300 text-sm md:text-base"
                >
                  Request a Quote
                </button> */}
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
                Get Free Quote
              </h2>
              <UserForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-[#fb9c24]">Services</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              We provide complete digital solutions for your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
              >
                {/* Background Image - Hidden by default, visible on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={service.bgImage} 
                    alt={service.category}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 md:mb-6 text-[#fb9c24] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-white mb-4 md:mb-6 transition-colors duration-300">
                    {service.category}
                  </h3>
                  <ul className="space-y-2 md:space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 md:gap-3">
                        <FaCheckCircle className="text-[#fb9c24] group-hover:text-white mt-1 flex-shrink-0 transition-colors duration-300 text-sm md:text-base" />
                        <span className="text-gray-700 group-hover:text-white transition-colors duration-300 text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={openForm}
              className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:opacity-90 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-opacity duration-200 shadow-lg text-sm md:text-base"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Why <span className="text-[#fb9c24]">Choose Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 md:gap-4 bg-gradient-to-br from-orange-50 to-white p-4 md:p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-3xl md:text-4xl text-[#fb9c24]">{item.icon}</div>
                <span className="text-base md:text-lg font-semibold text-gray-900">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={openForm}
              className="bg-[#fb9c24] hover:opacity-90 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-opacity duration-200 shadow-lg text-sm md:text-base"
            >
              Get Your Website Today
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-[#fb9c24]">Work</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">Check out some of our recent projects</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <button className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:opacity-90 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-opacity duration-200 shadow-lg text-sm md:text-base">
                View More Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Client <span className="text-[#fb9c24]">Testimonials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg md:text-xl" />
                  ))}
                </div>
                <p className="text-gray-700 text-base md:text-lg mb-3 md:mb-4 italic">"{testimonial.text}"</p>
                <p className="text-gray-900 font-bold text-sm md:text-base">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Affordable <span className="text-[#fb9c24]">Pricing</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">Choose a plan that fits your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 ${
                  plan.popular ? "border-4 border-[#fb9c24] relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#fb9c24] text-white px-4 py-1 rounded-full text-xs md:text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{plan.name}</h3>
                <div className="mb-4 md:mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-[#fb9c24]">{plan.price}</span>
                </div>
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3">
                      <FaCheckCircle className="text-[#fb9c24] mt-1 flex-shrink-0 text-sm md:text-base" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openForm}
                  className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#fb9c24] text-white hover:bg-[#ff8c00]"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={openForm}
              className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:opacity-90 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-opacity duration-200 shadow-lg text-sm md:text-base"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Second Form Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Get Free Consultation
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Share your requirements and our expert will get back to you within 24 hours
              </p>
            </div>
            <UserForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Frequently Asked <span className="text-[#fb9c24]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-orange-50 transition-colors duration-300"
                >
                  <span className="text-base md:text-lg font-semibold text-gray-900 pr-3 md:pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <FaChevronUp className="text-[#fb9c24] text-lg md:text-xl flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-lg md:text-xl flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-3 md:pt-4 text-sm md:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-[#fb9c24] via-[#ff8c00] to-[#fb9c24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
            Get a professional website or custom software today and take your business to the next level.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8">
            <button 
              onClick={openForm}
              className="bg-white text-[#fb9c24] hover:opacity-90 font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-opacity duration-200 shadow-lg text-sm md:text-base"
            >
              Contact Us Now
            </button>
            <a href="tel:+919310228489">
              <button className="bg-gradient-to-r from-[#1c438d] to-[#0d2552] text-white hover:opacity-90 font-semibold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all duration-300 flex items-center gap-2 md:gap-3 shadow-lg text-sm md:text-base">
                <FaPhone className="text-lg md:text-xl" /> 
                <span>+91 93102 28489</span>
              </button>
            </a>

            <a
              href="https://wa.me/919310228489"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#25D366] text-white hover:bg-[#20BA5A] font-semibold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all duration-300 flex items-center gap-2 md:gap-3 shadow-lg text-sm md:text-base">
                <FaWhatsapp className="text-lg md:text-xl" />
                <span>WhatsApp</span>
              </button>
            </a>
            {/* <a href="tel:+919310228489">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#fb9c24] font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all duration-300 flex items-center gap-2 text-sm md:text-base">
                <FaPhone /> Call Now
              </button>
            </a> */}
          </div>
        </div>
      </section>

      {/* Popup Form Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-3 md:p-4 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-gray-800 z-10 bg-white rounded-full p-2 shadow-md"
            >
              <FaTimes className="text-lg md:text-xl" />
            </button>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-8">
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                  Get A Free Consultation With Our Expert
                </h2>
                <div className="w-16 h-1 bg-[#fb9c24] rounded-full mb-4 md:mb-6"></div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
                  Fill out the form and our expert will get in touch with you shortly to discuss your project requirements.
                </p>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 font-bold text-sm md:text-base">1</span>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">Share your project requirements</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 font-bold text-sm md:text-base">2</span>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">Get a free consultation</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 font-bold text-sm md:text-base">3</span>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">Receive custom solutions</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 bg-white p-4 md:p-8 rounded-2xl shadow-lg">
                <UserForm />
              </div>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}

export default BusinessLanding;
