import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import UserForm from "../../components/UserForm";


const techStacks = [
  {
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    bg: "bg-blue-50",
    title: "React Js",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.prod.website-files.com/64a6644c2958e73937035816/678debad90f45434f015c310_1__bJ2z2NRfTncHAv5UjUxwA-removebg-preview.png",
    bg: "bg-green-50",
    title: "Next Js",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.prod.website-files.com/64a6644c2958e73937035816/678dec5887c259a4fd6ee726_download__4_-removebg-preview.png",
    bg: "bg-orange-50",
    title: "Node JS",
  },
  {
    name: "PHP",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYV3Y_2motOFqas3nzN6kGztBlJyXOSg-u1g&s",
    bg: "bg-slate-100",
    title: "PHP",
  },
  {
    name: "Laravel",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    bg: "bg-red-50",
    title: "Laravel",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.prod.website-files.com/64a6644c2958e73937035816/678ded0442765c1db5a4fcc9_download__6_-removebg-preview.png",
    bg: "bg-pink-50",
    title: "MongoDB",
  },
];

const features = [
  {
    title: "Core Web Vitals",
    description:
      "By keeping an eye on all the important metrics, our design & development team creates a user journey.",
    icon: "https://www.digivendtechnologies.com/public/frontend/landingpage/seo-img/seo-img-1.png",
  },
  {
    title: "Modern Coding",
    description:
      "Our team has expertise in HTML, CSS, and JavaScript and creates websites that perform.",
    icon: "https://www.digivendtechnologies.com/public/frontend/landingpage/seo-img/seo-img-2.png",
  },
  {
    title: "Optimized Speed",
    description:
      "Good website speed = Good user experience. And Google prefers websites that load speedily.",
    icon: "https://www.digivendtechnologies.com/public/frontend/landingpage/seo-img/seo-img-3.png",
  },
  {
    title: "Mobile-Friendly",
    description:
      "We create websites that look and perform well on all devices. A mobile-friendly website helps more customers.",
    icon: "https://www.digivendtechnologies.com/public/frontend/landingpage/seo-img/seo-img-4.png",
  },
];

const websites = [
  {
    title: "Business Websites",
    icon: "https://img.icons8.com/color/96/businesswoman.png",
  },
  {
    title: "E-commerce Websites",
    icon: "https://img.icons8.com/color/96/online-store.png",
  },
  {
    title: "Portfolio Websites",
    icon: "https://img.icons8.com/color/96/source-code.png",
  },
  {
    title: "Blog or Content Management Systems",
    icon: "https://img.icons8.com/color/96/news.png",
  },
  {
    title: "Social Networking Websites",
    icon: "https://img.icons8.com/color/96/conference-call.png",
  },
  {
    title: "Educational Websites",
    icon: "https://img.icons8.com/color/96/classroom.png",
  },
  {
    title: "Travel Websites",
    icon: "https://img.icons8.com/color/96/beach.png",
  },
  {
    title: "Booking and Reservation Websites",
    icon: "https://img.icons8.com/color/96/calendar.png",
  },
  {
    title: "Non-profit or Charity Websites",
    icon: "https://img.icons8.com/color/96/heart-health.png",
  },
  {
    title: "Personal Websites",
    icon: "https://img.icons8.com/color/96/user-folder.png",
  },
];

const industries = [
  {
    title: "E-Commerce",
    icon: "https://img.icons8.com/color/96/online-store.png",
  },
  {
    title: "Real Estate",
    icon: "https://img.icons8.com/color/96/real-estate.png",
  },
  { title: "Blogging", icon: "https://img.icons8.com/color/96/blog.png" },
  {
    title: "Support",
    icon: "https://img.icons8.com/color/96/customer-support.png",
  },
  {
    title: "Food & Beverage",
    icon: "https://img.icons8.com/color/96/french-fries.png",
  },
  {
    title: "School",
    icon: "https://img.icons8.com/color/96/school-building.png",
  },
  { title: "Dentist", icon: "https://img.icons8.com/color/96/dentist.png" },
  {
    title: "Production line",
    icon: "https://img.icons8.com/color/96/factory.png",
  },
  { title: "Law", icon: "https://img.icons8.com/color/96/law.png" },
  { title: "Hospital", icon: "https://img.icons8.com/color/96/hospital.png" },
  { title: "Logistics", icon: "https://img.icons8.com/color/96/delivery.png" },
  {
    title: "Software",
    icon: "https://img.icons8.com/color/96/source-code.png",
  },
];

const portfolioItems = [
  { image: "/admirer.png", alt: "Portfolio 1" },
  { image: "/btjnonbrokerage.png", alt: "Portfolio 2" },
  { image: "/portfolio/p4.webp", alt: "Portfolio 3" },
  { image: "/portfolio/p5.webp", alt: "Portfolio 4" },
  { image: "/portfolio/p6.webp", alt: "Portfolio 5" },
  { image: "/portfolio/D.webp", alt: "Portfolio 6" },
  { image: "/portfolio/just2.webp", alt: "Portfolio 7" },
  { image: "/portfolio/p3.webp", alt: "Portfolio 8" },
];

const steps = [
  {
    number: "01",
    title: "Consult your idea",
    answer: "Set the right direction with our web development consultants.",
  },
  {
    number: "02",
    title: "Choose a technology",
    answer:
      "Together, we’ll decide on the tech stack and the overall approach.",
  },
  {
    number: "03",
    title: "Design",
    answer:
      "We’ll create a UI/UX that’s intuitive, engaging, and user-focused.",
  },
  {
    number: "04",
    title: "Develop",
    answer: "We’ll build the solution using agile practices and modern tools.",
  },
  {
    number: "05",
    title: "Reach the market",
    answer: "Launch your product with confidence and ongoing support.",
  },
];
function WebsiteDevelopment() {
  const [hoverIndex, setHoverIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <main>
      <section className="relative w-full h-screen overflow-hidden flex items-end bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source
              src="/website-development/hero-background.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 w-full max-w-6xl px-8 max-md:px-6 py-12 md:py-20 text-white ml-4 md:ml-10 max-md:ml-0">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Web Development Services
            </h1>
            <p className="text-lg md:text-xl mb-8">
              We design and build industry-leading web-based products that
              delight your customers.
            </p>
            <Link to="/contact">
              <button className="bg-[#0000FF] hover:bg-blue-800 transition-all duration-300 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-lg">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-white text-gray-800 px-6 max-md:px-4 py-12 lg:flex lg:justify-between lg:items-start max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl max-md:text-2.5xl font-semibold leading-tight">
            Transform your Business with the Best{" "}
            <span className="text-black font-bold max-md:mt-2 ">
              Website Development Company in Delhi
            </span>
          </h1>
          <p className="text-gray-600">
            Let your first impression be the impression that lasts. This
            statement has become a crucial part of web design and development,
            as a website’s first appearance determines whether a user will visit
            again.
          </p>
          <p className="text-gray-600">
            With this rising need for expert development services, BTJ ALPHA
            TECHNOLOGY PVT LTD has become the Best website development company
            in Delhi NCR. In a survey, we found that the Indian website
            development services market is projected to grow at a CAGR of 18–20%
            between 2021–2026, reaching a value of ₹262.4 billion to ₹287
            billion by 2025.
          </p>
          <p className="text-gray-600">
            To make this possible, our expert team of developers and designers
            works in collaboration and gives rise to exceptional ideas. Our
            ultimate goal is to help companies embrace new technology and
            harness the unique value of creativity and design in their websites.
          </p>
          <p className="text-gray-600">
            As a professional web development company in Delhi NCR, we
            specialize in building custom website development, UI/UX design,
            creating responsive and user-friendly sites, E-Commerce website
            development, and Content management systems (CMS) integration. Our
            primary focus is on client satisfaction, quality assurance, timely
            delivery, cost-effective solutions, and building trust and
            reliability with clients.
          </p>
        </div>

        {/* Right Form */}
        <div className="lg:w-2/5 bg-blue-900 text-white rounded-xl p-6 mt-10 lg:mt-0">
          <h2 className="text-xl font-bold text-center mb-4">
            Connect With Our Professional Website Developers And Build Your
            Dream Website Today!
          </h2>
          <UserForm/>
        </div>
      </div>

      <div className="py-16 max-md:pt-2 px-4 w-[85%] max-md:w-full max-md:px-2 mx-auto text-center">
        <h2 className="text-3xl max-md:text-2xl font-bold mb-2">
          Next-Gen Tech Stacks We Use
        </h2>
        <p className="text-gray-600 mb-10 max-md:mb-6">
          We use cutting-edge technologies to make sure we deliver the best.
        </p>
        <div className="grid  grid-cols-6 max-md:grid-cols-3 gap-2 justify-items-center">
          {techStacks.map((tech) => (
            <div
              key={tech.name}
              title={tech.title}
              className={`w-full h-40 flex items-center justify-center  rounded  ${tech.bg}`}
            >
              <img src={tech.image} alt={tech.name} className="h-16" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[87%] max-md:w-full mx-auto px-4 py-16 pt-8 max-md:pt-0">
        <div className="flex justify-between max-md:block ">
          <h2 className="text-3xl font-semibold leading-normal  w-[40%] max-md:w-full">
            Leverage our proven{" "}
            <span className="text-black font-bold">
              web{" "}
              <span className="relative inline-block px-2 py-1 rounded-md overflow-hidden">
                <span className="absolute rounded-3xl inset-0 bg-gradient-to-r from-white to-green-200 animate-slide" />
                <span className="relative text-black">development process</span>
              </span>
            </span>
          </h2>
          <p className="w-[40%] max-md:w-full mt-1 font-semibold text-gray-600 text-lg">
            We’ve delivered over 2500 projects – we know what it takes to
            execute a seamless and optimized web-based software development
            process.
          </p>
        </div>
        {/* desktop view */}
        <div className="max-md:hidden">
          <div className="grid grid-cols-6 w-full mt-24">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                {/* Number Section */}
                <div
                  onMouseEnter={() => setHoverIndex(i)}
                  className="flex flex-col justify-between items-start pl-4 border-l h-[170px] border-gray-200 cursor-pointer"
                >
                  <div className="text-5xl font-semibold">{step.number}</div>
                  <div className="mt-3 text-lg font-semibold text-start w-[90%]">
                    {step.title}
                  </div>
                </div>

                {/* Answer Section */}
                {hoverIndex === i && (
                  <div className="flex flex-col items-end pr-4 justify-end pt-6 transition-all duration-300 ease-in-out transform opacity-100 translate-x-0 h-full">
                    <p className="text-gray-600 text-sm">{step.answer}</p>
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* If answer is not in last column, fill extra to maintain 6 columns */}
            {hoverIndex < 5 && <div className="col-span-1" />}
          </div>
        </div>
        {/* mobile view */}
        <div className="hidden max-md:block">
          <div className="w-full overflow-x-auto">
            <div className="flex mt-16 mb-4 ml-16">
              {steps.map((step, i) => (
                <React.Fragment key={i}>
                  {/* Number Section */}
                  <div
                    onMouseEnter={() => setHoverIndex(i)}
                    className="flex flex-col justify-between items-start pl-4 pr-2 border-r gap-2 border-gray-200 cursor-pointer min-w-[200px]"
                  >
                    <div className="text-5xl font-semibold">{step.number}</div>
                    <div className="mt-3 text-base font-semibold text-start">
                      {step.title}
                    </div>
                    <div className="text-gray-600 text-xs ">{step.answer}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-16 max-md:pt-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">
          SEO- <span className="text-blue-800">Friendly Web Design</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Our clients nurture a passion for digital growth, and it shows in
          their success. Brands that believe in outperforming the market love to
          associate with us. Greatest success lies in the success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="text-center space-y-4">
              <div className="flex justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-36 w-40"
                />
              </div>
              <h3 className="font-semibold text-lg text-[#0b0b3f]">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 max-md:py-8 px-4 max-md:px-2 bg-white text-center">
        <h2 className="text-3xl max-md:text-2xl font-bold mb-12 max-md:mb-6">
          Types of website{" "}
          <span className="text-black">BTJ ALPHA TECHNOLOGY deal with</span> –
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-md:gap-2 max-w-6xl mx-auto">
          {websites.map((site) => (
            <div
              key={site.title}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <img
                src={site.icon}
                alt={site.title}
                className="h-16 w-16 mb-4"
              />
              <p className="text-sm font-semibold text-gray-800 text-center">
                {site.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 pt-2 px-4 max-md:px-2 bg-white text-center">
        <h2 className="text-3xl max-md:text-2xl font-bold mb-12 max-md:mb-8">
          Industries{" "}
          <span className="text-black">
            We <span className="text-black font-bold">Served</span>
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-md:gap-2 max-w-6xl mx-auto">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <img
                src={industry.icon}
                alt={industry.title}
                className="h-16 w-16 mb-4"
              />
              <p className="text-sm font-semibold text-gray-800 text-center">
                {industry.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className=" py-12 text-center"
        style={{
          backgroundImage: `url(/website-development/bussiness-mask.png)`,
        }}
      >
        <h2 className="text-4xl max-md:text-3xl font-bold mb-2">
          Our Portfolio
        </h2>
        <p className="text-black max-w-3xl max-md:text-base  mx-auto mb-10 px-2">
          We speak from experience and a proven track record for years of
          service to our esteemed clients. Take a glance at some of the recent
          work that has got us a huge round of applause.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-96 object-cover object-top transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
export default WebsiteDevelopment;
