import { MapPin, PhoneCall, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";
import UserForm from "../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";

// FAQ Data
const faqData = [
  {
    section: 1,
    items: [
      {
        question: "What is SEO and why is it important?",
        answer:
          "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results. It increases visibility, drives organic traffic, and helps build credibility for your brand.",
      },
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "SEO is a long-term strategy. Generally, noticeable improvements can be seen within 3 to 6 months depending on competition, keyword difficulty, and website authority.",
      },
      {
        question: "What services are included in SMM?",
        answer: (
          <>
            <p>Our Social Media Marketing (SMM) services include:</p>
            <ul className="list-disc list-inside">
              <li>Content creation and scheduling</li>
              <li>Paid ad campaigns (Facebook, Instagram, etc.)</li>
              <li>Audience engagement and growth</li>
              <li>Performance tracking and analytics</li>
            </ul>
          </>
        ),
      },
      {
        question: "Can you develop custom websites?",
        answer:
          "Yes, we offer fully custom website development services tailored to your business goals. We build responsive, fast, and SEO-friendly websites using modern technologies.",
      },
      {
        question: "Do you offer eCommerce website development?",
        answer:
          "Absolutely! We specialize in building feature-rich eCommerce websites with secure payment gateways, inventory management, user-friendly dashboards, and more.",
      },
      {
        question: "What technologies do you use for website development?",
        answer:
          "We use technologies such as React, Next.js, Laravel, WordPress, Tailwind CSS, and Node.js, depending on the requirements and scalability needs of the project.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Yes, all websites we develop are fully responsive, meaning they will work seamlessly on mobile devices, tablets, and desktops.",
      },
      {
        question: "Do you offer website maintenance services?",
        answer:
          "Yes, we provide ongoing website maintenance, including security updates, backups, performance optimization, and content updates.",
      },
      {
        question: "How do I get started with your services?",
        answer: (
          <p>
            Simply{" "}
            <a
              href="mailto:support@admirer.in"
              className="text-[#fb9c24] underline font-semibold"
            >
              contact us
            </a>{" "}
            or visit our office to discuss your requirements. We'll guide you
            through the process and recommend the best solutions for your goals.
          </p>
        ),
      },
    ],
  },
];

const Contact = () => {
  const [openIndexes, setOpenIndexes] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    setOpenIndexes({ "0-0": true });
  }, []);

  const toggleAccordion = (section, index) => {
    const key = `${section}-${index}`;
    setOpenIndexes((prev) => {
      const isAlreadyOpen = prev[key];
      return { [key]: !isAlreadyOpen };
    });
  };

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 px-6 max-md:px-4 mt-20 max-md:mt-16 bg-gradient-to-br from-orange-50 via-white to-orange-50/30 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-10 w-64 h-64 bg-[#fb9c24]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -right-10 w-80 h-80 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-4xl max-md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Help &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                Contact
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help! Reach out to us for any questions or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 px-6 max-md:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visit Us Card */}
            <a
              href="https://www.google.com/maps?q=Sector+2,+Noida,+UP,+201301"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="0"
              className="group bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24] text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                Visit Us
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sector 2, Noida, UP, 201301
              </p>
            </a>

            {/* Call Us Card */}
            <a
              href="tel:01204525483"
              data-aos="fade-up"
              data-aos-delay="100"
              className="group bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24] text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <PhoneCall className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                Call Us At
              </h3>
              <p className="text-gray-600 leading-relaxed">0120-4525483</p>
            </a>

            {/* Email Us Card */}
            <a
              href="mailto:info@btjalphatechnology.com"
              data-aos="fade-up"
              data-aos-delay="200"
              className="group bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24] text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                Write to Us
              </h3>
              <p className="text-gray-600 leading-relaxed break-words">
                info@btjalphatechnology.com
              </p>
            </a>
          </div>

          {/* Availability Info */}
          <div
            data-aos="fade-up"
            className="mt-8 text-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-[#fb9c24]/20"
          >
            <p className="text-gray-700 font-medium">
              📅 We're available Monday to Friday, from{" "}
              <span className="font-bold text-[#fb9c24]">9:30 AM to 6:30 PM</span>
            </p>
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div data-aos="fade-right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.430891875109!2d77.3130094!3d28.5868475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4589e66cd21%3A0x74986f30f963e27!2sSector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    allowFullScreen=""
                    loading="lazy"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Form */}
            <div data-aos="fade-left">
              <div className="bg-white rounded-2xl p-8 max-md:p-6 shadow-2xl border-2 border-gray-100">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
                  <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                    CONTACT FORM
                  </span>
                </div>
                <h2 className="text-3xl max-md:text-2xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-6"></div>
                <p className="mb-8 text-gray-600 leading-relaxed">
                  Our team would love to hear from you. Write your message to us!
                </p>
                <UserForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left column */}
            <div>
              {faqData[0].items
                .slice(0, Math.ceil(faqData[0].items.length / 2))
                .map((item, index) => {
                  const key = `0-${index}`;
                  const isOpen = openIndexes[key];
                  return (
                    <div
                      key={key}
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                      className={`bg-white mb-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 ${
                        isOpen ? "border-[#fb9c24]" : "border-gray-200 hover:border-[#fb9c24]/50"
                      }`}
                    >
                      <button
                        className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left text-gray-900 hover:text-[#fb9c24] transition-colors duration-300"
                        onClick={() => toggleAccordion(0, index)}
                      >
                        <span className="pr-4">{item.question}</span>
                        <div
                          className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full flex items-center justify-center text-white font-bold transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          {isOpen ? "−" : "+"}
                        </div>
                      </button>
                      <div
                        className={`grid transition-all duration-500 ease-in-out px-6 text-gray-700 leading-relaxed ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 pb-4"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          {typeof item.answer === "string" ? (
                            <p>{item.answer}</p>
                          ) : (
                            item.answer
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Right column */}
            <div>
              {faqData[0].items
                .slice(Math.ceil(faqData[0].items.length / 2))
                .map((item, index) => {
                  const actualIndex =
                    index + Math.ceil(faqData[0].items.length / 2);
                  const key = `0-${actualIndex}`;
                  const isOpen = openIndexes[key];
                  return (
                    <div
                      key={key}
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                      className={`bg-white mb-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 ${
                        isOpen ? "border-[#fb9c24]" : "border-gray-200 hover:border-[#fb9c24]/50"
                      }`}
                    >
                      <button
                        className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left text-gray-900 hover:text-[#fb9c24] transition-colors duration-300"
                        onClick={() => toggleAccordion(0, actualIndex)}
                      >
                        <span className="pr-4">{item.question}</span>
                        <div
                          className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full flex items-center justify-center text-white font-bold transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          {isOpen ? "−" : "+"}
                        </div>
                      </button>
                      <div
                        className={`grid transition-all duration-500 ease-in-out px-6 text-gray-700 leading-relaxed ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 pb-4"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          {typeof item.answer === "string" ? (
                            <p>{item.answer}</p>
                          ) : (
                            item.answer
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-md:px-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl max-md:text-2xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Our team is always ready to help you. Don't hesitate to reach out!
          </p>
          <a href="mailto:info@btjalphatechnology.com">
            <button className="bg-white text-[#fb9c24] font-bold py-4 px-10 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Contact Us Now
            </button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
