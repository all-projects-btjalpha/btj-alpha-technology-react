import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaMousePointer, FaAd, FaChartLine, FaGoogle, FaBullseye, FaMoneyCheckAlt,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaCogs, FaCloud,
  FaLock, FaCode, FaTachometerAlt, FaClipboardCheck, FaSearchDollar
} from "react-icons/fa";

function PPCAdvertising() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const ppcServices = [
    {
      icon: <FaGoogle className="text-5xl text-blue-600" />,
      title: "Google Ads Management",
      description: "Expert Google Ads campaigns with keyword research, bid optimization, and continuous performance monitoring for maximum ROI."
    },
    {
      icon: <FaBullseye className="text-5xl text-green-600" />,
      title: "Targeted Campaigns",
      description: "Precise audience targeting based on demographics, interests, behaviors, and intent signals to reach your ideal customers."
    },
    {
      icon: <FaChartLine className="text-5xl text-orange-600" />,
      title: "Performance Analytics",
      description: "Comprehensive tracking and reporting to measure campaign effectiveness, optimize spend, and maximize conversion rates."
    },
    {
      icon: <FaAd className="text-5xl text-purple-600" />,
      title: "Ad Copy Optimization",
      description: "Compelling ad copy creation and A/B testing to improve click-through rates and drive more qualified traffic to your website."
    },
    {
      icon: <FaMoneyCheckAlt className="text-5xl text-cyan-600" />,
      title: "Budget Management",
      description: "Strategic budget allocation and bid management to maximize clicks and conversions within your advertising budget."
    }
  ];

  const ppcFeatures = [
    {
      icon: <FaCloud className="text-5xl text-blue-500" />,
      title: "Comprehensive PPC Advertising Solutions for Maximum ROI",
      description: "Our PPC advertising services help you get instant visibility with Pay-Per-Click campaigns that drive targeted traffic, generate quality leads, and achieve measurable results. We manage every aspect of your PPC strategy from keyword research and campaign setup to ongoing optimization and performance tracking. Our expert team uses data-driven approaches to maximize your advertising return on investment while minimizing wasted spend. We focus on creating high-converting campaigns that deliver real business results through strategic targeting, compelling ad copy, and continuous optimization based on performance data."
    }
  ];

  const faqs = [
    {
      question: "What is PPC advertising and how does it work?",
      answer: "PPC (Pay-Per-Click) advertising is a digital marketing model where advertisers pay a fee each time their ad is clicked. It's essentially buying visits to your website rather than earning them through organic search results. You only pay when someone actually clicks on your ad, making it a cost-effective way to drive targeted traffic to your website."
    },
    {
      question: "Which platforms do you manage PPC campaigns on?",
      answer: "We specialize in managing PPC campaigns across major platforms including Google Ads, Bing Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and YouTube Ads. We choose the platforms that best align with your target audience and business objectives to maximize your advertising effectiveness and ROI."
    },
    {
      question: "How much does PPC advertising typically cost?",
      answer: "PPC costs vary based on your industry, competition, and target keywords. On average, businesses spend between $9,000 to $10,000 per month on Google Ads, but we work with budgets ranging from a few hundred to tens of thousands of dollars per month. We focus on maximizing your ROI regardless of budget size through strategic optimization and smart bidding."
    },
    {
      question: "How quickly can I see results from PPC advertising?",
      answer: "PPC campaigns can start generating traffic immediately after launch, but optimal performance typically develops over 2-4 weeks as we refine targeting, optimize bids, and improve ad quality. Most clients see significant improvements in traffic and conversions within the first month of campaign management with continuous optimization."
    },
    {
      question: "What kind of results can I expect from your PPC services?",
      answer: "Results vary by industry and competition, but typical outcomes include: 20-50% increase in targeted traffic, 15-30% improvement in conversion rates, 25-40% better ROI compared to self-managed campaigns, and significant improvements in brand visibility and market share within your target demographics."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Pay-Per-Click<br />
                Advertising<br />
                Services
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Get instant visibility with Pay-Per-Click advertising. Drive targeted traffic, generate quality leads, and achieve measurable results with optimized PPC campaigns that maximize your return on investment.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openForm}
                  className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fb9c24] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Us
                </button>
                <button
                  onClick={openForm}
                  className="bg-gradient-to-r from-[#ff8c00] to-[#fb9c24] hover:from-[#fb9c24] hover:to-[#ff8c00] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Hire Now
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div data-aos="fade-left" className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
                {/* PPC Dashboard Illustration */}
                <div className="relative">
                  {/* Analytics Dashboard */}
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all w-72">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm font-bold text-gray-800">PPC Dashboard</div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Clicks</span>
                          <span className="text-sm font-bold text-blue-600">2,847</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Conversions</span>
                          <span className="text-sm font-bold text-green-600">156</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '65%'}}></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">ROI</span>
                          <span className="text-sm font-bold text-purple-600">342%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaChartLine className="text-3xl text-blue-600" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaGoogle className="text-3xl text-red-600" />
                  </div>
                  <div className="absolute top-0 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaBullseye className="text-3xl text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive PPC Solutions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive PPC Advertising Solutions for Maximum ROI
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div data-aos="fade-right" className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaGoogle className="text-4xl text-blue-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Google Ads</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaBullseye className="text-4xl text-green-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Targeting</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaChartLine className="text-4xl text-purple-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Analytics</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaMoneyCheckAlt className="text-4xl text-orange-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">ROI</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <p className="text-gray-600 leading-relaxed mb-6">
                Our PPC advertising services help you get instant visibility with Pay-Per-Click campaigns that drive targeted traffic, generate quality leads, and achieve measurable results. We manage every aspect of your PPC strategy from keyword research and campaign setup to ongoing optimization and performance tracking.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our expert team uses data-driven approaches to maximize your advertising return on investment while minimizing wasted spend. We focus on creating high-converting campaigns that deliver real business results through strategic targeting, compelling ad copy, and continuous optimization based on performance data.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With our comprehensive PPC management services, you can expect increased website traffic, higher conversion rates, improved brand visibility, and measurable return on your advertising investment. We provide transparent reporting and work closely with you to achieve your specific business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PPC Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ppcServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Maximize Your Advertising ROI?<br />
                Start Your PPC Campaign Today
              </h2>
            </div>
            <div data-aos="fade-left">
              <button
                onClick={openForm}
                className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <FaChevronUp className="text-[#fb9c24] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isPopupOpen && <UserForm onClose={closeForm} />}

      <style jsx>{`
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
}

export default PPCAdvertising;