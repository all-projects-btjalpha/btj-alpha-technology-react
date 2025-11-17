import video from "../assets/video/banner-video.mp4";
import about from "../assets/images/Home-page/about.jpg";
import SEO from "/SEO.jpg";
import SMO from "/SMM.jpg";
import CM from "/CONTENT.jpg";
import PPC from "/PPC_.jpg";
import step from "../assets/images/Home-page/step.webp";
import agency from "../assets/images/Home-page/agency.webp";
import { GoArrowRight } from "react-icons/go";
import about_team from "/WEBSITE_WORK.jpg";
import icon1 from "../assets/images/Home-page/14.webp";
import icon2 from "../assets/images/Home-page/19.webp";
import icon4 from "../assets/images/Home-page/22.webp";
import ecommerce from "../assets/images/Home-page/ecommerce.png";
import responsive from "../assets/images/Home-page/responsive.png";
import settings from "../assets/images/Home-page/settings.png";
import web from "../assets/images/Home-page/web-design.png";
import programming from "../assets/images/Home-page/programming.webp";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import { items } from "../components/HomePageData";
import { technologies } from "../components/HomePageData";
import { RiArrowRightSLine } from "react-icons/ri";
import { useEffect } from "react";
import UserForm from "../components/UserForm";

function Home() {
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseOver = (id) => {
    setHoveredId(id);
  };

  const handleMouseOut = () => {
    setHoveredId(null);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [activeTab, setActiveTab] = useState("SEO");
  const handleTabClick = (service) => {
    setActiveTab(service);
  };

  return (
    <>
      <main className=" w-[100%]  mt-[65px]">
        {/* Banner Section Start here */}

        <div className="relative h-full bg-cover bg-center overflow-hidden  max-md:pb-[10px]">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              preload="auto"
              poster="/fallback_img.png"
              className="w-full h-[100vh] object-cover"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dull Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative flex flex-col md:flex-row py-[80px] items-center justify-center h-full text-white">
            <div className="text-white p-8 max-md:px-6 md:w-1/2">
              <h2 className="text-[#fb9c24] text-lg max-md:text-base  font-semibold ">
                GET STARTED WITH US
              </h2>
              <h1 className="text-5xl max-md:text-4xl font-bold mt-2">
                Grow Smarter, Not Harder
              </h1>
              <p className="mt-4 text-lg w-[80%] max-md:leading-6">
                Partner with experts who ensure your business connects, the
                right audience and thrives faster.
              </p>
              <Link to="contact">
                <button 
                className="w-[170px] flex font-semibold mt-5 bg-[#fb9c24]   justify-center h-12 rounded-lg text-white text-xl  items-center ">
                  Contact Us{" "}
                  <FaRegArrowAltCircleRight className="ml-2 text-lg" />
                </button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-[20px] shadow-lg md:w-1/3 w-full mt-8 md:mt-0">
              <h2 className="text-2xl font-semibold mb-6 text-black flex justify-center text-center">
                Get A Free Consultation With Our Marketing Expert
              </h2>
              <UserForm />
            </div>
          </div>
        </div>

        {/* Banner Section End here  */}

        {/* Who-we-are Section Start here */}

        <div className="p-5 flex mt-16 ml-4 mb-10 max-lg:block max-lg:ml-0 max-lg:p-0 max-lg:justify-center">
          <div className=" w-[50%] mr-20 max-lg:w-auto max-lg:mb-[30px] max-lg:pl-3 max-lg:flex max-lg:justify-center max-lg:mr-6">
            <img
              src="/Team1.jpg"
              alt=""
              className="w-full h-[90%] mt-12 ml-4 rounded-[20px]  z-0 max-lg:mt-0"
            />
          </div>
          <div className="w-[50%] ml-6 max-lg:w-[100%] max-lg:ml-0 max-lg:p-3">
            <div>
              <h3 className="text-[20px] text-[#ffc422] font-semibold">
                WHO WE ARE?
              </h3>
              <h1 className="text-[42px] font-semibold mb-4 mt-0 leading-[4rem] max-lg:text-[36px] max-lg:leading-[3rem]">
                Hey, We're A Team Of Creators
              </h1>
              <p className="leading-8 w-[95%] text-[17px] max-lg:w-[100%] max-md:leading-6 max-lg:text-[14px]">
                At BTJ ALPHA TECHNOLOGY PVT LTD, we’re a dynamic team of
                creators who breathe life into technology. Passionate about
                innovation, we design and develop tailored software and digital
                solutions that empower businesses to flourish in the
                ever-evolving digital landscape. With a focus on collaboration
                and creativity, we transform ideas into impactful realities,
                ensuring that our clients not only keep up but stand out. Let’s
                build something extraordinary together!
              </p>
                <Link to="about">
                   {/* <span className="font-bold">About Us</span> */}
                    <button 
                      className="w-[170px]  flex font-semibold mt-5 bg-[#fb9c24]  text-xl justify-center h-12 rounded-lg text-white  items-center ">
                      About Us
                    </button>
               
                </Link>
              
            </div>
            <div className="flex gap-10 max-md:gap-4 mt-5 justify-between w-[95%] max-lg:w-[100%]">
              <div>
                <h1 className="text-[38px] font-semibold max-md:text-[30px]">
                  50+
                </h1>
                <p className="text-[18px] max-md:text-[14px]">Employees</p>
              </div>
              <div>
                <h1 className="text-[38px] font-semibold max-md:text-[30px]">
                  378+
                </h1>
                <p className="text-[18px] max-md:text-[14px]">
                  Completed Projects
                </p>
              </div>
              <div>
                <h1 className="text-[38px] font-semibold max-md:text-[30px]">
                  326+
                </h1>
                <p className="text-[18px] max-md:text-[14px]">
                  Trusted Customers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who-we-are Section End here */}

        {/* Services Section Start here */}

        <div className="flex flex-col text-center">
          <h1 className="text-[3rem] font-semibold mb-4 max-md:text-[2.5rem]">
            Areas of Expertise
          </h1>
          <p className="text-[1.5rem] max-md:text-[1.3rem] max-md:px-1 font-medium mb-4">
            #1 Affordable{" "}
            <span className="text-[#fb9c24]">
              Digital Marketing Agency In India
            </span>{" "}
            - An Extended Team
          </p>
          <p className="p-3 max-md:px-1 w-[77%] m-auto text-[1.1rem] max-md:w-[100%]">
            BTJ ALPHA TECHNOLOGY PVT LTD is a professionally managed full
            service web design & development company in Noida, India. We have
            been helping businesses to adapt and grow in an ever-changing online
            world by offering fully functional mobile-friendly responsive, cheap
            Website Designing, Web Development, App Development, SEO Services,
            SMM Services etc.
          </p>
          <div className="m-10 grid grid-cols-3 gap-0 relative max-md:grid-cols-1 max-md:m-2">
            <div className="absolute inset-0">
              <img
                src={step}
                alt="image"
                className="w-full h-full object-cover object-center"
              />
              {/* Dull Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {items.map((item, index) => (
              <div
                key={index}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
                className="relative z-10 h-[300px] border flex flex-col justify-center text-center hover:bg-[#191970] brightness-[100%] text-white transition-all duration-300 ease-in "
              >
                <h1 className="text-[1.6rem] mb-3">{item.heading}</h1>
                {hoveredId === index && (
                  <>
                    <p className="ml-5 mr-5 text-[1rem]">{item.content}</p>
                    <Link to={item.url}>
                      <button className="border w-[150px] h-[50px] self-center mt-4 text-[20px] rounded-lg bg-[#191970]   hover:bg-[#fb9c24] text-white">
                        Learn More
                      </button>
                    </Link>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services Section End here */}

        {/* About Section Start here */}

        <div className=" relative">
          <div className="absolute inset-0">
            <img
              src={about}
              alt="image"
              className="w-full h-full object-cover object-center"
            />
            {/* Dull Overlay */}
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          </div>
          <div className="relative flex flex-col m-10 max-lg:m-2">
            <h1 className="self-center text-[50px] max-md:text-[40px] font-semibold mb-5 max-md:mb-1 mt-10">
              About Us
            </h1>
            <div className="flex max-lg:flex-col-reverse">
              <div className=" w-[50%] ml-8 max-lg:w-[100%] max-lg:ml-0 max-lg:mr-1">
                <h1 className="text-[2rem]  text-[#fb9c24] mb-4">
                  What We Do Is
                </h1>
                <p className="text-[18px] mb-6">
                  BTJ ALPHA TECHNOLOGY PVT LTD is a professionally managed full
                  service web design & development company in Noida, India. We
                  have been helping businesses to adapt and grow in an
                  ever-changing online world.
                </p>
                <div>
                  <div className="flex border p-5 rounded-xl bg-white mb-5">
                    <img src={icon2} alt="" className="w-[60px] h-[60px]" />
                    <div className="ml-5 ">
                      <h1 className="text-[20px] font-medium mb-1">
                        Digital Marketing Services
                      </h1>
                      <p>
                        We build custom software solutions that will help your
                        business optimise operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex border p-5 rounded-xl bg-white mb-5">
                    <img src={icon1} alt="" className="w-[60px] h-[60px]" />
                    <div className="ml-5 ">
                      <h1 className="text-[20px] font-medium mb-1">
                        Web Designing Services
                      </h1>
                      <p>
                        We build custom software solutions that will help your
                        business optimise operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex border p-5 rounded-xl bg-white mb-8">
                    <img src={icon4} alt="" className="w-[60px] h-[60px]" />
                    <div className="ml-5 ">
                      <h1 className="text-[20px] font-medium mb-1">
                        Web Development Services
                      </h1>
                      <p>
                        We build custom software solutions that will help your
                        business optimise operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-5 w-[50%] max-lg:w-[100%] flex  max-lg:self-center max-lg:p-4 max-lg:m-0">
                <img
                  src={about_team}
                  alt="image"
                  className="w-[auto] ml-8 mt-10 rounded-[16px] h-[90%] max-lg:m-[auto]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Section End here */}

        {/* Marketing Section Start here */}

        <div className="m-16 max-lg:m-2 ">
          <div className="flex justify-between items-center max-lg:block ">
            <div className="w-[70%] max-lg:w-[100%]">
              <h1 className="text-[2.5rem] font-semibold mb-4 max-md:text-[2rem]">
                Digital Marketing Services
              </h1>
              <p className="text-[1.1rem] mb-6">
                We understand that no two businesses can be the same and so is
                there website usage and therefore they will need a different CMS
                solution. We do Your business in your way.
              </p>
            </div>
            {/* <button className="w-[160px] h-[60px] bg-red-600 text-white max-lg:mb-5">
              GET A QUOTE
            </button> */}
          </div>
          <hr className="h-[1.5px] bg-black" />


             


          <div className="w-full bg-[#191970] rounded-md flex flex-wrap justify-around items-center ">
  {[
    { id: "SEO", label: "Search Engine Optimization" },
    { id: "SMO", label: "Social Media Optimization" },
    { id: "CM", label: "Content Marketing" },
    { id: "PPC", label: "PPC Management Services" },
  ].map((tab) => (
    <div
      key={tab.id}
      onClick={() => handleTabClick(tab.id)}
      className={`cursor-pointer font-semibold text-[16px] md:text-[18px] px-4 md:px-6 py-3 rounded-md transition-colors duration-200 
        ${
          activeTab === tab.id
            ? "text-[#fb9c24]"
            : "text-white hover:text-[#fb9c24]"
        }`}
    >
      {tab.label}
    </div>
  ))}
</div>


          <div className="mt-10 flex  max-lg:block ">
            
            <div className="w-[100%] max-lg:w-[100%]  items-center ">
              {activeTab === "SEO" && (
                <div className="flex justify-between px-10 max-md:block">
                  <img
                    src={SEO}
                    alt=""
                    className="w-[40%]  rounded-tl-[150px] mr-8  max-md:w-[100%] max-md:mb-5"
                  />
                  <div className="w-[50%] max-md:w-[100%]">
                    <h2 className="text-[2rem] max-md:text-[1.8rem] font-semibold mb-3">
                      Search Engine Optimization
                    </h2>
                    <h4 className="text-[1.2rem] font-semibold mb-3">
                      BTJ ALPHA TECHNOLOGY PVT LTD SEO Services In India -
                      Trusted By Over 1000+ Companies
                    </h4>
                    <p className="mb-3 text text-[1.0rem] leading-6">
                      SEO is the most efficient and effective method increase
                      your search engine visibility and drive traffic to your
                      website. With our SEO services we can help you get top
                      ranking on major search engines (Google, yahoo, Bing)
                      using our propertiory techniques developed with years of
                      experience using white hat SEO practices and bringing an
                      increase in organic search engine ranking.
                    </p>
                    <Link to={"/search-engine-optimization"}>
                      <p className="w-[300px] inline-flex items-center text-[1.4rem] hover:text-[#191970] text-[#fb9c24]">
                        {" "}
                        Learn More <GoArrowRight className="ml-1" />
                      </p>
                    </Link>
                  </div>
                </div>
              )}
              {activeTab === "SMO" && (
                <div className="flex justify-between px-10 max-md:block">
                  <img
                    src={SMO}
                    alt=""
                    className="w-[40%] h-50 rounded-tl-[150px] mr-8 max-md:w-[100%] max-md:mb-5"
                  />
                  <div className="w-[50%] max-md:w-[100%]">
                    <h2 className="text-[2rem] max-md:text-[1.8rem] font-semibold mb-3">
                      Social Media Optimization
                    </h2>
                    <h4 className="text-[1.2rem] font-semibold mb-3">
                      Top Rated SEO Company in India
                    </h4>
                    <p className="mb-3 text text-[1.0rem] leading-6">
                      Affiliate Marketing is the term used to describe a form of
                      online advertising which consists of rewarding an
                      affiliate for referring a visitor or rewarding a customer
                      for performing a desired action, such as making a purchase
                      or subscribing to a newsletter. In a way, Affiliate
                      Marketing can be regarded as free publicity for your
                      page—a network of related websites directing customers to
                      purchase from yours Affiliate campaigns have the best
                      results when they are combined with Search Engine
                      Optimization (SEO), Pay Per Click (PPC) campaigns, email
                      marketing support and are well-suited for travel, retail,
                      and service industries due to their timely research
                      process/large-volume sales.
                    </p>
                    <Link to={"/social-media-marketing"}>
                      <p className="w-[300px] inline-flex items-center text-[1.4rem] hover:text-[#191970] text-[#fb9c24]">
                        {" "}
                        Learn More <GoArrowRight className="ml-1" />
                      </p>
                    </Link>
                  </div>
                </div>
              )}
              {activeTab === "CM" && (
                <div className="flex justify-between px-10 max-md:block">
                  <img
                    src={CM}
                    alt=""
                    className="w-[40%] h-[400px] rounded-tl-[150px] mr-8 max-md:w-[100%] max-md:mb-5"
                  />
                  <div className="w-[50%] max-md:w-[100%]">
                    <h2 className="text-[2rem] max-md:text-[1.8rem] font-semibold mb-3">
                      Content Marketing
                    </h2>
                    <h4 className="text-[1.2rem] font-semibold mb-3">
                      Tell your Brand Story Better, Engage better with your
                      Audience
                    </h4>
                    <p className="mb-3 text text-[1.0rem] leading-6">
                      Affiliate Marketing is the term used to describe a form of
                      online advertising which consists of rewarding an
                      affiliate for referring a visitor or rewarding a customer
                      for performing a desired action, such as making a purchase
                      or subscribing to a newsletter. In a way, Affiliate
                      Marketing can be regarded as free publicity for your
                      page—a network of related websites directing customers to
                      purchase from yours Affiliate campaigns have the best
                      results when they are combined with Search Engine
                      Optimization (SEO), Pay Per Click (PPC) campaigns, email
                      marketing support and are well-suited for travel, retail,
                      and service industries due to their timely research
                      process/large-volume sales.
                    </p>
                    <Link to={"/meta-ads"}>
                      <p className="w-[300px] inline-flex items-center text-[1.4rem] hover:text-[#191970] text-[#fb9c24]">
                        {" "}
                        Learn More <GoArrowRight className="ml-1" />
                      </p>
                    </Link>
                  </div>
                </div>
              )}
              {activeTab === "PPC" && (
                <div className="flex justify-between px-10 max-md:block">
                  <img
                    src={PPC}
                    alt=""
                    className="w-[40%] h-[400px] rounded-tl-[150px]  mr-8 max-md:w-[100%] max-md:mb-5"
                  />
                  <div className="w-[50%] max-md:w-[100%]">
                    <h2 className="text-[2rem] max-md:text-[1.8rem] font-semibold mb-3">
                      PPC Management Services
                    </h2>
                    <h4 className="text-[1.2rem] font-semibold mb-3">
                      BTJ ALPHA TECHNOLOGY PVT LTD is an innovative PPC
                      management company
                    </h4>
                    <p className="mb-3 text text-[1.0rem] leading-6">
                      BTJ ALPHA TECHNOLOGY PVT LTD is an innovative digital
                      marketing, AdWords management, remarketing and PPC
                      management company with proven track record to take your
                      PPC campaigns to the next level and provide you with
                      integrated, adverting and marketing solution.
                      Pay-per-click(PPC) advertising allows you to reach your
                      target customers searching for your products and services
                      online by using target keywords. Pay per click represent a
                      model of internet marketing where an advertiser run an ad
                      and he will get charged if there will be a click on his
                      ad. Advertiser pay a fees every time on his ad whenever he
                      will get clicked. The most popular type of pay per click
                      ad is search engine advertisement.
                    </p>
                    <Link to={"/google-ads"}>
                      <p className="w-[300px] inline-flex items-center text-[1.4rem] hover:text-[#191970] text-[#fb9c24]">
                        {" "}
                        Learn More <GoArrowRight className="ml-1" />
                      </p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Marketing Section End here */}

        {/* Agency Section Start here */}

        <div className="relative">
          {/* Fixed Background */}
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{
              backgroundImage: `url(${agency})`,
            }}
          >
            {/* Dull Overlay */}
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
          <div className=" relative text-center text-black mb-12 pt-44 pb-10">
            <marquee class="marq" scrollamount="18" direction="left" loop="">
              <h1 className="text-[40px] font-bold text-white mb-3">
                DIGITAL MARKETING & WEB DESIGNING
              </h1>
            </marquee>
            <marquee class="marq" scrollamount="18" direction="right" loop="">
              <h2 className="text-[40px] font-bold text-white">
                WEBSITE DEVELOPMENT & SEO AGENCY
              </h2>
            </marquee>
          </div>

          <div className=" relative grid grid-cols-8 max-sm:grid-cols-2 max-lg:grid-cols-4 gap-4 px-10 pb-12 pt-4 ">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center border-[0.1px] border-neutral-400 p-4 hover:bg-opacity-20 transition h-[150px]"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-14 w-14 mb-5 mt-4"
                />
                <span className="text-white font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Agency Section Start here */}

        {/* Offering Section Start here             mt-5 pb-10           mb-5 max-md:mb-0      */}    

        <div className="bg-gray-100 py-10 pt-16 max-sm:py-5 max-sm:pt-10 pb-14">
          <div className="container mx-auto px-4 flex max-lg:flex-col-reverse">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-6 w-[66%] max-lg:w-[100%] ">
              <div className="bg-white shadow-md rounded-lg p-6 ">
                <div className="flex  w-[100px] h-[100px] bg-zinc-100 rounded-full items-center justify-center mb-4">
                  <img
                    src={ecommerce}
                    alt="Website Designing"
                    className="h-16 w-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Website Development
                </h3>
                <p className="text-gray-600 mt-2">
                  Build robust and scalable websites that deliver seamless
                  performance and exceptional user experience.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex  w-[100px] h-[100px] bg-zinc-100 rounded-full  items-center justify-center mb-4">
                  <img
                    src={web}
                    alt="Custom Website Designing"
                    className="h-16 w-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Bulk SMS</h3>
                <p className="text-gray-600 mt-2">
                  Bulk SMS is a service to send large volumes of messages
                  simultaneously for marketing, alerts, or notifications.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex  w-[100px] h-[100px] bg-zinc-100 rounded-full  items-center justify-center mb-4">
                  <img
                    src={responsive}
                    alt="Responsive Website Designing"
                    className="h-16 w-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Responsive Website Designing
                </h3>
                <p className="text-gray-600 mt-2">
                  Your website is your home on the internet. The Website Design
                  is the first and foremost area to focus on as it represents
                  the virtual face of a company.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6 ">
                <div className="flex  w-[100px] h-[100px] bg-zinc-100 rounded-full  items-center justify-center mb-4">
                  <img
                    src={settings}
                    alt="E-commerce Website"
                    className="h-16 w-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Social Media Marketing (SMM)
                </h3>
                <p className="text-gray-600 mt-2">
                  Boost your brand visibility and engagement across platforms
                  like Instagram, Facebook, and LinkedIn. Reach your target
                  audience with tailored content and paid campaigns.
                </p>
              </div>
            </div>
            
            
            {/* image Part */}
            <div className="w-[34%] pl-10 max-lg:w-[100%] m-auto max-sm:pl-0">
              <div className="mt-8 flex justify-center">
                <img
                  src={programming}
                  alt="Website Design Illustration"
                  className="h-96 w-auto"
                />
              </div>
              <div className="text-center mb-8 ">
                <h1 className="text-3xl font-bold text-gray-800 flex justify-start">
                  Website Design Services
                </h1>
                <p className="text-gray-600 mt-4 flex text-start">
                  We use the latest technology and design innovations to develop
                  creative, smart & user-friendly websites to successfully
                  connect users with brands. Empower yourself with the best
                  website design company in India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Offering Section End here */}
      </main>
    </>
  );
}
export default Home;
