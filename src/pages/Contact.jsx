import { MapPin, PhoneCall, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";
import UserForm from "../components/UserForm";

const Contact = () => {
  const [openIndexes, setOpenIndexes] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    <>
      {/* Page Heading */}
      <div className="text-center px-4 py-10 pt-24 max-md:pt-20 bg-white">
        <h2 className="text-3xl max-md:text-2xl mt-3 mb-6 font-semibold">
          Help & Contact
        </h2>
      </div>

      {/* Map & Form Section */}
      <section className="py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps?q=Sector+2,+Noida,+UP,+201301&output=embed"
                  width="100%"
                  height="500"
                  loading="lazy"
                  style={{ border: 0 }}
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 max-md:p-6 shadow-2xl border-2 border-gray-100">
                <h2 className="text-3xl max-md:text-2xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="mb-8 text-gray-600 leading-relaxed">
                  Our team would love to hear from you. Write your message to
                  us!
                </p>
                <UserForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 max-md:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Visit Us */}
            <a
              href="https://www.google.com/maps?q=Sector+2,+Noida,+UP,+201301"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition"
            >
              <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <p className="text-xl font-semibold text-[#191970]">Visit Us</p>
              <p className="text-gray-700">Sector 2, Noida, UP, 201301</p>
            </a>

            {/* Call Us */}
            <a href="tel:+919310228489" className="hover:opacity-90 transition">
              <PhoneCall className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <p className="text-xl font-semibold text-[#191970]">Call Us At</p>
              <p className="text-gray-700">+91-9310228489</p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@btjalphatechnology.com"
              className="hover:opacity-90 transition"
            >
              <Mail className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <p className="text-xl font-semibold text-[#191970]">
                Write to Us
              </p>
              <p className="text-gray-700">info@btjalphatechnology.com</p>
            </a>
          </div>

          <p className="text-md text-gray-600 mt-8 text-center">
            We're available Monday to Friday, from 9:30 AM to 6:30 PM.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-10">
        <h3 className="text-3xl max-md:text-lg text-center font-semibold mb-12">
          Frequently Asked Questions (FAQs)
        </h3>
        {/* Your existing FAQ logic can remain here */}
      </section>
    </>
  );
};

export default Contact;
