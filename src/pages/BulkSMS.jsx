import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleItem = ({ title, price, features }) => (
  <div className="group bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#fb9c24] overflow-hidden">
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-3">
      <h2 className="text-base font-bold text-center text-gray-900 mb-1">
        {title}
      </h2>
      <p className="text-lg font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
        {price}
      </p>
    </div>
    <div className="p-3">
      <ul className="space-y-1">
        <li className="flex items-center justify-center gap-2 text-center font-semibold text-gray-900 bg-orange-50 py-1 rounded-lg text-xs">
          <span className="text-[#fb9c24]">✓</span>
          {features}
        </li>
        {[
          "Deliver between 24x7",
          "Delivery to DND numbers",
          "18% GST extra",
          "No API",
          "06 Alphabets SENDER ID",
          "Lifetime validity",
          "Send Text + images, Videos",
          "100% Advance Payment",
        ].map((feature, index) => (
          <li key={index} className="flex items-center justify-center gap-2 text-center text-gray-600 py-1 border-b border-gray-100 last:border-0 text-xs">
            <span className="text-[#fb9c24]">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link to="/contact">
        <button className="w-full mt-3 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] text-white font-bold py-2 px-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs">
          Buy Now
        </button>
      </Link>
    </div>
  </div>
);

const cardData = [
  {
    title: "10K Trans SMS",
    price: "INR 2,300",
    features: "10,000 SMS / 23p Per SMS",
  },
  {
    title: "25K Trans SMS",
    price: "INR 4,750",
    features: "25,000 SMS / 19p Per SMS",
  },
  {
    title: "50K Trans SMS",
    price: "INR 8,450",
    features: "50,000 SMS / 16.9p Per SMS",
  },
  {
    title: "01Lac Trans SMS",
    price: "INR 14,000",
    features: "1,00,000 SMS / 14p Per SMS",
  },
  {
    title: "10K High Promo/Trans SMS",
    price: "INR 2,500",
    features: "10,000 SMS / 25p Per SMS",
  },
  {
    title: "50K High Promo SMS Plan",
    price: "INR 11,000",
    features: "50,000 SMS / 22p Per SMS",
  },
  {
    title: "01Lac High Promo SMS plan",
    price: "INR 17,000",
    features: "1,00,000 SMS / 17p Per SMS",
  },
  {
    title: "05Lac High PromoDnd SMS plan",
    price: "INR 75,000",
    features: "5,00,000 SMS / 15p Per SMS",
  },
  {
    title: "10K API SMS",
    price: "INR 2,500",
    features: "10,000 SMS / 25p Per SMS",
  },
  {
    title: "50K API SMS",
    price: "INR 10,500",
    features: "50,000 SMS / 21p Per SMS",
  },
  {
    title: "01Lac API SMS Pack",
    price: "INR 20,000",
    features: "1,00,000 SMS / 20p Per SMS",
  },
  {
    title: "05Lac High API plan",
    price: "INR 90,000",
    features: "5,00,000 SMS / 18p Per SMS",
  },
];

const BulkSMS = () => {
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
      {/* Hero Section */}
      <section className="relative py-16 px-6 max-md:px-4 mt-20 max-md:mt-16 bg-gradient-to-br from-orange-50 via-white to-orange-50/30 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-10 w-64 h-64 bg-[#fb9c24]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -right-10 w-80 h-80 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                BULK SMS SERVICES
              </span>
            </div>
            <h1 className="text-4xl max-md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Reach Millions with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                Bulk SMS Marketing
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              India's Most Trusted Bulk SMS Provider - Send Transactional, Promotional, and WhatsApp Messages at Unbeatable Prices
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Why Choose BTJ ALPHA TECHNOLOGY
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "WhatsApp Bulk SMS Marketing",
                  description: "Most effective Marketing tool offered with Online Whatsapp Bulk SMS sending Portal. Send text, images, pdf & videos to lacs of mobile numbers within few Hrs without worrying about your number blacklisting.",
                },
                {
                  title: "Generate Traffic By Promotional SMS",
                  description: "Increase traffic on your website by drawing customer attention to new products and services and redirect end consumers to website through URLs.",
                },
                {
                  title: "Round the Clock Delivery",
                  description: "Send Transactional SMS regardless of time constraints and deliver important info to your customers 24/7/365 days.",
                },
                {
                  title: "Interactive SMS Panel UI",
                  description: "Handle Bulk SMS & Bulk Whatsapp delivery constraints with interactive and easy to use interface.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img src="/bulksms/ic.webp" className="w-8 h-8" alt="" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right - Image */}
            <div data-aos="fade-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <img
                  src="/bulksms/officer.png"
                  alt="Officer"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Our Bulk SMS Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Whatsapp Bulk SMS",
                description: "Send Bulk Whatsapp messages to thousands of Whatsapp numbers in just 1 click. Send with Text, Images, Pdf & Videos. Most effective Bulk Whatsapp SMS Portal.",
              },
              {
                title: "Transactional Bulk SMS",
                description: "Bulk SMS sent to customers to provide information necessary for using product or service. Can be sent to both DND & Non-DND Numbers with 06 alphabets sender ID.",
              },
              {
                title: "Promotional Bulk SMS",
                description: "Used for promotions or marketing your services or products. Contains sales & marketing SMS activity to promote products & services among potential prospects.",
              },
              {
                title: "Miss Call Alert",
                description: "Best and reliable way of providing engaging and interactive communications. Use for Lead generations, Opinion polls, Customer feedbacks, and more.",
              },
              {
                title: "Voice Call SMS",
                description: "Voice calls helps to enhance business. Used for Political Campaigns, Customer Surveys, Mobile Marketing, Meeting alerts, EMI Alerts, Medicine reminders etc.",
              },
              {
                title: "Website Development",
                description: "Website development packages starts from INR 50,000 onwards. We develop both CMS and HTML websites.",
              },
              {
                title: "Web Hosting",
                description: "Offering both windows and linux web hostings. We provide affordable hosting for both .NET and PHP.",
              },
              {
                title: "E-commerce Development",
                description: "Experienced development team who work on Magento, Open Cart, Prestashop, Woo commerce etc.",
              },
            ].map((service, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#fb9c24]/10 to-[#ff8c00]/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <img src="/bulksms/ic.webp" className="w-8 h-8" alt="" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transactional SMS Plans */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                PRICING PLANS
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Transactional SMS: No-API Standard Route
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.slice(0, 4).map((item, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <SingleItem
                  title={item.title}
                  price={item.price}
                  features={item.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional SMS Plans */}
      <section className="py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                PROMOTIONAL PLANS
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Promotional SMS - High Priority Route
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.slice(4, 8).map((item, index) => (
              <div key={index + 4} data-aos="fade-up" data-aos-delay={index * 100}>
                <SingleItem
                  title={item.title}
                  price={item.price}
                  features={item.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API SMS Plans */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                API PLANS
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4">
              Bulk SMS with API: Highest Priority Route
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.slice(8, 12).map((item, index) => (
              <div key={index + 8} data-aos="fade-up" data-aos-delay={index * 100}>
                <SingleItem
                  title={item.title}
                  price={item.price}
                  features={item.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-md:px-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl max-md:text-2xl font-bold text-white mb-6">
            Ready to Boost Your Business with Bulk SMS?
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Get started today and reach millions of customers instantly
          </p>
          <Link to="/contact">
            <button className="bg-white text-[#fb9c24] font-bold py-4 px-10 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BulkSMS;
