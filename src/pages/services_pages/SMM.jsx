import React from "react";
import { FaCode, FaBullhorn, FaChartBar } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import UserForm from "../../components/UserForm";


function SocialMediaMarketing() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const services = [
    {
      icon: <FaCode className="text-orange-500 text-2xl" />,
      title: "Media Solutions",
      description:
        "Strategic media planning and data-driven execution for maximum brand impact with social media marketing services.",
      backContent:
        "Boost your brand’s reach with targeted campaigns and smart media planning.",
    },
    {
      icon: <MdEdit className="text-orange-500 text-2xl" />,
      title: "Brand Solutions",
      description:
        "Build a brand that stands out with strategic identity and design.",
      backContent:
        "Create a unique brand identity that resonates with your audience.",
    },
    {
      icon: <MdEdit className="text-orange-500 text-2xl" />,
      title: "Films & Photography",
      description:
        "A Video production company creating compelling visuals that captivate and connect.",
      backContent:
        "Produce captivating visuals that tell your brand’s story effectively.",
    },
    {
      icon: <FaBullhorn className="text-orange-500 text-2xl" />,
      title: "Brand PR",
      description:
        "Strengthening brand credibility with strategic PR and media coverage.",
      backContent:
        "Build trust and credibility through targeted PR and media outreach.",
    },
    {
      icon: <FaChartBar className="text-orange-500 text-2xl" />,
      title: "Tech Solutions",
      description:
        "Tech-driven solutions for seamless operations, with e-commerce website development.",
      backContent:
        "Deliver innovative tech solutions to streamline your business.",
    },
    {
      icon: <FaChartBar className="text-orange-500 text-2xl" />,
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
    "Client’s Satisfaction.",
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
      icon: "🟥", // Replace with actual image/icon if needed
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
      icon: "📢", // Replace with actual image/icon if needed
      title: "Tailored Strategies for Growth",
      description: (
        <>
          We provide <strong>best digital marketing services</strong> that align
          with your brand’s vision and goals. By leveraging data, creativity,
          and market expertise, we create impactful campaigns, making us one of
          the <strong>top digital marketing agencies in India</strong>.
        </>
      ),
    },
    {
      icon: "📊", // Replace with actual image/icon if needed
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
    <main>
      <section className="relative agency flex max-lg:flex-col max-lg:justify-center  items-center w-full overflow-hidden shadow-lg bg-gradient-to-t from-black/50 to-black/50 bg-cover mt-[60px]  ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/smm/smm-landing.jpg)`,
          }}
        >
          {/* Dull Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* Left Section */}
        <div className="relative left-section bg-transparent p-10 max-md:p-6 flex-1 max-md:pt-16 text-white mt-4">
          <p className="text-xl max-md:text-lg">Don’t Waste Money On Amateurs</p>
          <h1 className="text-5xl max-md:text-3xl font-semibold mb-5 mt-3">
            Your Expert Social Media Management Agency
          </h1>
          <p className="text-xl max-md:text-lg">
            We help you succeed online with proven social media marketing
            methods.
          </p>
          <div className="grid grid-cols-2 mt-10 gap-5 mb-10">
            <div className="items-start flex flex-col gap-2">
              <p className="text-2xl">25M+</p>
              <p className="text-xl">Monthly Organic Visitors</p>
            </div>
            <div className="items-start flex flex-col gap-2">
              <p className="text-2xl">20+</p>
              <p className="text-xl">Social media case studies</p>
            </div>
            <div className="items-start flex flex-col gap-2">
              <p className="text-2xl">20M</p>
              <p className="text-xl">Ecommerce Transactions</p>
            </div>
            <div className="items-start flex flex-col gap-2">
              <p className="text-2xl">6M+</p>
              <p className="text-xl">Qualified Leads</p>
            </div>
          </div>
          <a
            href="tel:01204525483"
            className="call-button inline-block bg-[#0000ff] text-white py-3 px-5 rounded-3xl font-bold text-lg hover:bg-blue-800"
          >
            Call 0120 4525483
          </a>
        </div>

        {/* Right Section */}
        <div className="relative right-section bg-gray-100 rounded-xl p-8 py-12 flex-1 max-w-[450px]  mr-10 mt-12 mb-16 max-lg:mx-2 ">
          <h2 className="text-2xl font-bold text-[#0000ff] mb-6">
            Get A Free Action Plan
          </h2>
          <UserForm/>
        </div>
      </section>

      <div className="py-12 px-4 md:px-16 bg-white text-gray-800">
        <div className="flex max-md:block gap-8 w-full items-center">
          {/* Left Content */}
          <div className="w-[40%] max-md:w-full">
            <h2 className="text-5xl font-semibold mb-4">How We Work</h2>
            <p className="text-gray-600 text-xl mb-6">
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
              <button className="bg-[#0000ff] text-white px-6 py-2 mb-6 rounded hover:bg-[#171769] transition">
                CONTACT US NOW
              </button>
            </Link>
          </div>

          {/* Right Cards */}
          <div className="grid w-[60%] max-md:w-full sm:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`relative w-full h-56 cursor-pointer ${
                  idx === 1 || idx === 4
                    ? "transform translate-y-8 max-md:translate-y-0 "
                    : ""
                }`}
                style={{ perspective: "1000px" }}
              >
                <div className="relative w-full h-full duration-500 transform-style-preserve-3d transition-transform hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute w-full h-full bg-white shadow-xl rounded-lg p-5 border border-gray-100 backface-hidden flex flex-col">
                    <div className="mb-3">{service.icon}</div>
                    <h3 className="font-semibold text-lg mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full bg-orange-100 rounded p-5  backface-hidden rotate-y-180 flex items-center justify-center text-center text-orange-700 font-semibold">
                    {service.backContent}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 max-md:mb-4">
          WE CAN HELP YOU WITH
        </h2>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-10 px-6 max-md:px-0 w-[90%] max-md:w-full mx-auto">
          {helpServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-row max-md:flex-col items-center w-[30%]  min-w-[200px] max-md:min-w-[160px]  justify-center"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-44 max-md:w-36 object-contain mb-2 mr-0"
              />
              <p className="text-lg font-semibold text-gray-800">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#2a2726] text-white text-center py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6">
          Build your business without hustling
        </h1>
        <p className="text-lg md:text-xl mb-4">
          We help you develop an effective Digital Strategy
        </p>

        {/* Decorative lines */}
        <div className="flex justify-center items-center gap-4 my-4">
          <div className="w-6 h-1 bg-orange-500 rounded-full"></div>
          <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
        </div>

        <p className="text-gray-300 text-base md:text-lg mb-8">
          Our team of ninjas is ready to hear from you. Get in touch with us!
        </p>

<Link to="/contact">
        <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0000ff] transition">
          GET A QUOTE
        </button>
        </Link>
      </div>

      <div className="py-16 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex-1">
              {/* Replace emoji with real image/icon as needed */}
              <div className="text-red-600 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-600 text-white py-16 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 uppercase">
          Why Choose Us
        </h2>
        <p className="text-lg md:text-xl mb-2">
          We are Amongst the Top <span className="font-bold">Agencies</span>{" "}
          that are part of a special
        </p>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between text-left gap-10 px-4">
          <ul className="space-y-2 list-disc list-inside">
            {leftPoints.map((point, index) => (
              <li key={index} className="text-white text-base md:text-lg">
                {point}
              </li>
            ))}
          </ul>
          <ul className="space-y-2 list-disc list-inside">
            {rightPoints.map((point, index) => (
              <li key={index} className="text-white text-base md:text-lg">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 uppercase">
          Service We Offer
        </h2>

        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 max-w-6xl mx-auto">
          {smmServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-28 h-28 mb-4"
              />
              <h3 className="font-bold text-lg mb-2 border-b border-white/50 pb-1">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
export default SocialMediaMarketing;
