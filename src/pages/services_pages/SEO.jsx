import hero from "../../assets/images/seo/Hero.webp";
import main from "../../assets/images/seo/main section.webp";
import app from "../../assets/images/seo/expect-icons/app.webp";
import brand from "../../assets/images/seo/expect-icons/brand-awareness.webp";
import revenue from "../../assets/images/seo/expect-icons/increase-revenue.webp";
import traffic from "../../assets/images/seo/expect-icons/more traffic.webp";
import smm from "../../assets/images/seo/expect-icons/smm.webp";
import user from "../../assets/images/seo/expect-icons/user-engagement.webp";
import {
  services,
  features,
  cities,
  service,
  specialised,
  stories,
  faqs,
} from "../../components/SeoData";
import { useState } from "react";
import { useEffect } from "react";
import UserForm from "../../components/UserForm";


function SEO() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [answer, setAnswer] = useState(null);
  const handleToggle = (index) => {
    setAnswer(answer === index ? null : index);
  };
  return (
    <main>
      {/* Banner section start here */}

      <section className="flex flex-wrap justify-between items-center p-10 max-md:px-1 bg-[#0A192F] text-white mt-[65px] pt-20 pb-28">
        {/* Content Section */}
        <div className="w-full lg:w-[45%] mb-8 lg:mb-0 px-4 ml-5 max-lg:ml-0">
          <p className="text-lg lg:text-xl mb-6 max-md:mb-1">
            Rated Excellent by 195+ Happy Customers
          </p>
          <h1 className="text-3xl lg:text-6xl font-bold leading-relaxed max-md:leading-snug mb-5">
            The Best SEO Services Agency in India
          </h1>
          <p className="text-base lg:text-lg leading-relaxed">
            Our team of 37 SEO experts is ready to help you increase your
            traffic and get your website to the top of Google. Let's work
            together to achieve your goals.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-2/5 bg-[#0A192F] p-6 max-md:px-0 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Get a Free Website Audit From Our SEO Specialists
          </h2>
          <UserForm/>
        </div>
      </section>

      {/* Banner section end here */}

      {/* Business section start here */}

      <section className="max-w-7xl mx-auto my-12 py-5 px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold mb-6">
            Why Does Your Business Need{" "}
            <span className="text-orange-500">SEO Services in Delhi</span>
          </h1>
          <p className="text-base text-gray-600 px-4">
            Whether you are a small business or a medium-sized firm, without SEO
            services, you cannot present yourself in front of your targeted
            audience. Some more reasons have been given here:
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-wrap gap-8 items-center max-lg:block">
          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={hero}
              alt="SEO Analysis"
              className="max-w-4/5 rounded-lg max-lg:mb-8"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center">
            <ul className="space-y-4">
              <li className="flex items-start text-lg">
                <i className="fa fa-check-square text-orange-500 mr-3"></i>
                <span>
                  <strong>You need to be on the 1st page:</strong> According to
                  experts, 90% of people do not even go to the 2nd page. So, you
                  need to be on the first page if you want to improve your ROI.
                </span>
              </li>
              <li className="flex items-start text-lg">
                <i className="fa fa-check-square text-orange-500 mr-3"></i>
                <span>
                  <strong>
                    Improve the online visibility of your business:
                  </strong>{" "}
                  By getting better online visibility, you can get recognized as
                  a reliable brand and generate high volumes of leads and sales.
                </span>
              </li>
              <li className="flex items-start text-lg">
                <i className="fa fa-check-square text-orange-500 mr-3"></i>
                <span>
                  <strong>Target the right audience:</strong> ‘Quality wins over
                  Quantity’. It is even more relevant when it comes to website
                  traffic. With our industry-focused SEO strategies, you can
                  touch the untapped market and convert them into lifetime
                  customers.
                </span>
              </li>
              <li className="flex items-start text-lg">
                <i className="fa fa-check-square text-orange-500 mr-3"></i>
                <span>
                  <strong>Raise user experience:</strong> SEO is more than using
                  the right keywords. To remain a loyal brand, you must provide
                  your users with enhanced experiences so that they can ask you
                  for more.
                </span>
              </li>
              <li className="flex items-start text-lg">
                <i className="fa fa-check-square text-orange-500 mr-3"></i>
                <span>
                  <strong>Affordable yet comprehensive marketing:</strong> When
                  compared to other traditional marketing methods, SEO is much
                  more affordable and effective at the same time.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business section end here */}

      {/* Expect section start here */}

      <section className="bg-[#0073bf] flex flex-col lg:flex-row text-center lg:text-left py-12 px-4">
        {/* Image Section */}
        <div className="flex justify-center items-center w-full  lg:w-[50%]">
          <img
            src={main}
            alt="Laptop Graphic"
            className="w-80 lg:w-[500px] lg:mb-0"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-[50%] ml-5 mt-5 max-lg:ml-0">
          <h1 className="text-white text-2xl lg:text-[2.6rem] font-semibold leading-tight mb-8 max-w-xl flex text-center">
            What Can You Expect From BTJ ALPHA TECHNOLOGY PVT LTD SEO Services!
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl ml-5 max-lg:ml-0">
            {/* Benefits */}
            <div className="flex flex-col items-center text-center text-white">
              <img
                src={traffic}
                alt="Traffic Icon"
                className="w-20 h-20 mb-4"
              />
              <p className="text-lg">More Traffic</p>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <img
                src={revenue}
                alt="Revenue Icon"
                className="w-20 h-20 mb-4"
              />
              <p className="text-lg">Increase Revenue</p>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <img src={user} alt="Brand Icon" className="w-20 h-20 mb-4" />
              <p className="text-lg w-[200px]">Brand Awareness</p>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <img src={smm} alt="Growth Icon" className="w-20 h-20 mb-4" />
              <p className="text-lg w-[200px]">Business Growth</p>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <img src={brand} alt="Trust Icon" className="w-20 h-20 mb-4" />
              <p className="text-lg ">Trust and Authority</p>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <img src={app} alt="Leads Icon" className="w-20 h-20 mb-4" />
              <p className="text-lg">More Leads</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expect section end here */}

      {/* Result section start here */}

      <section className="px-4 py-8 max-w-[1300px] mx-auto text-center mt-6 pb-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row mb-8 lg:px-5">
          <h1 className="text-3xl font-semibold leading-relaxed text-start lg:w-1/2 lg:pr-8 max-sm:mb-5">
            GET REAL RESULTS WITH COMMERCIAL ADS PPC SERVICES
          </h1>
          <p className="text-base lg:text-lg leading-6 lg:w-1/2 text-center max-lg:text-start">
            BTJ ALPHA TECHNOLOGY PVT LTD is a top pay-per-click agency in Delhi NCR that
            uses cutting-edge digital marketing techniques to get remarkable
            outcomes. We optimise your return on investment and propel notable
            expansion by utilizing cutting-edge technologies and industry best
            practices.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max- gap-6 max-w-[800px] mx-auto">
          {/* Service Items */}
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-md hover:scale-105 hover:bg-[#0073bf] hover:text-white transition-transform duration-300"
            >
              <img src={service.img} alt={service.text} className="w-12 h-12" />
              <p className="ml-4 text-sm font-medium text-start">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Result section end here */}

      {/* Grow section start here */}

      <section className="grow-section py-8 w-4/5 max-lg:w-full max-lg:p-6 mx-auto mb-10">
        <div className="header text-center">
          <h1 className="text-4xl font-semibold mb-6">
            How Can We Help You Grow Your Business through SEO?
          </h1>
          <p className="text-gray-600 mb-4">
            Just remember! Result-driven SEO does not just happen! It requires
            so many things including long-term commitment and robust strategies.
            But when you join your hands with Digital Markitors – a top SEO
            company in Delhi-NCR, you can expect stable and better results.
          </p>
          <p className="text-gray-600">
            Countless service providers are there charging a hefty amount but
            why pay even a single penny when the traffic is not relevant!! Our
            search engine optimisation services, on the other hand, are not just
            focused on keywords and helping people find you online but driving
            relevant traffic to your website. JUST THINK and decide what you
            want!
          </p>
        </div>
        <div className="features flex flex-wrap justify-center gap-5 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item bg-white border border-gray-300 rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-md transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={feature.img}
                alt={feature.alt}
                className="w-16 h-16 mb-2"
              />
              <h3 className="text-[13px] font-medium text-gray-800">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Grow section end here */}

      {/* Presence section start here */}

      <section className="presence py-8 mx-auto bg-[#ececec] mb-10 w-[85%] max-lg:w-[100%]">
        <h1 className="text-3xl font-semibold text-start text-[#0068a1] mb-8 ml-5">
          Our Presence in Other Cities
        </h1>
        <div className="city-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-white m-5">
          {cities.map((city, index) => (
            <div
              key={index}
              className="city-item flex items-center bg-white p-4 border border-[#ececec]"
            >
              <img src={city.img} alt={city.alt} className="w-16 h-16 mr-4" />
              <p className="text-[#0068a1] text-lg font-normal">{city.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Presence section start here */}

      {/* Marketing section start here */}

      <section className="marketing py-10 mx-auto bg-gradient-to-b from-[#e0f7fa] to-white mb-8 w-[85%] max-lg:w-[100%]">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Our Hyperlocal Marketing Services <br /> Comprehensive Solutions for
          Local Growth
        </h2>
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {service.map((services, index) => (
            <div
              key={index}
              className="service-item bg-white m-5 p-5 border border-gray-300 rounded-lg shadow-lg hover:shadow-lg transition-transform transform hover:translate-y-[-5px]"
            >
              <div className="header flex items-center mb-4">
                <img
                  src={services.img}
                  alt={services.title}
                  className="h-20 w-20 mr-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {services.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-2 font-semibold">
                {services.description1}
              </p>
              {services.description2 && (
                <p className="text-gray-600 font-semibold">
                  {services.description2}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Marketing section start here */}

      {/* specialised section start here */}

      <section className="services mx-auto  w-[85%] max-lg:w-[100%] text-center bg-white p-6 max-md:px-2 rounded-lg shadow-md mb-16">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Our Specialized Services
        </h1>
        <hr className="w-1/12 mx-auto h-1 bg-black mb-8" />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-md:gap-2">
          {specialised.map((service, index) => (
            <div
              key={index}
              className="service flex flex-col items-center border border-gray-400 p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-12 h-12 mb-3"
              />
              <p className="text-sm text-gray-700">{service.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* specialised section start here */}

      {/* Convinced section start here */}

      <section className="convinced mx-auto max-w-5xl p-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Still Not Convinced?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Check Out More Success Stories
        </p>
        <div className="stories-grid space-y-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="story-item flex flex-col lg:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-lg border border-gray-300"
            >
              <div className="story-left flex max-lg:flex-col items-center text-center bg-[#0056b3] text-white p-6 rounded-lg w-1/2 max-md:w-full">
                <h3 className="text-2xl m-1 font-semibold mb-4">
                  {story.title}
                </h3>
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-[240px] rounded-lg"
                />
              </div>
              <div className="story-right flex-1 text-left">
                <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                  {story.subtitle}
                </h4>
                <p className="text-gray-600 text-base">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Convinced section start here */}

      {/* Faq Section start here */}

      <section className="faq mx-auto max-w-5xl p-6 max-md:px-2 bg-white rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">FAQs</h2>
        {faqs &&
          faqs.map((item, index) => (
            <div className="faq-item border-t border-gray-300" key={index}>
              <button
                onClick={() => handleToggle(index)}
                className="faq-question w-full bg-[#0056b3] text-white p-4 text-left text-[16px] flex justify-between items-center"
              >
                {item.question}
                {answer === index ? (
                  <span className="ml-2 text-xs">▲</span>
                ) : (
                  <span className="ml-2 text-xs">▼</span>
                )}
              </button>
              {answer === index && (
                <div
                  className="faq-answer overflow-hidden bg-gray-100 px-4"
                >
                  <p className="text-[14px] text-gray-700 py-3 leading-7">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
      </section>

      {/* Faq Section start here */}
    </main>
  );
}
export default SEO;
