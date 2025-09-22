import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const industial_cards = [
  {
    title: "Tour & Travel Mobile Apps",
    description:
      "Our travel apps offer convenient itineraries, hotel bookings, navigation, and booking options, helping users plan and enjoy their trips with ease.",
    image: "/mobile-app/Tour and travel.png",
  },
  {
    title: "Agricultural Mobile Apps",
    description:
      "We build apps that support farmers and agricultural professionals by providing tools to manage crops, livestock, and daily farm operations—helping them grow and thrive.",
    image: "/mobile-app/Agricultural.png",
  },
  {
    title: "Music & Events Mobile Apps",
    description:
      "Our apps enhance your music and event experiences with smooth streaming, event details, and social sharing capabilities, keeping users connected and engaged.",
    image: "/mobile-app/music.png",
  },
  {
    title: "Health & Fitness Mobile Apps",
    description:
      "We develop health and fitness apps that help users track their fitness progress and monitor health parameters to stay on top of their well-being.",
    image: "/mobile-app/fitness.png",
  },
  {
    title: "E-commerce Mobile Apps",
    description:
      "We create e-commerce apps that integrate payment gateways, enable smooth transactions, user-friendly interfaces for a great shopping experience.",
    image: "/mobile-app/E commerce.png",
  },
  {
    title: "Lifestyle Mobile Apps",
    description:
      "Our lifestyle apps are designed to offer personalized experiences, entertainment, or daily life management—tailored to users' interests and needs.",
    image: "/mobile-app/life style.png",
  },
];

const images = [
  "/mobile-app/App-screens-1.png",
  "/mobile-app/App-screens-2.png",
  "/mobile-app/App-screens-3.png",
  "/mobile-app/App-screens-4.png",
  "/mobile-app/App-screens-5.png",
  "/mobile-app/App-screens-6.png",
  "/mobile-app/App-screens-7.png",
  "/mobile-app/App-screens-8.png",
];

const cards = [
  {
    bgColor: "bg-[#ffc0d9]",
    heading: "7+",
    text: "Tech experts on Board",
    image: "/mobile-app/teams work.png",
  },
  {
    bgColor: "bg-[#d0bfff]",
    heading: "15+",
    text: "Mobile App Developer",
    image: "/mobile-app/team.png",
  },
  {
    bgColor: "bg-[#b5f1cc]",
    heading: "220+",
    text: "Projects Developed",
    image: "/mobile-app/App screens.png",
  },
  {
    bgColor: "bg-[#ffd8c0]",
    heading: "",
    text: "Global Presence",
    image: "/mobile-app/global.png",
    customImageStyle: true,
  },
];

const statsData = [
  {
    img: "/mobile-app/1.png",
    value: "7+",
    label: "Years of Experience",
  },
  {
    img: "/mobile-app/2.png",
    value: "45+",
    label: "Mobile Apps Developed",
  },
  {
    img: "/mobile-app/3.png",
    value: "220+",
    label: "Websites Developed",
  },
  {
    img: "/mobile-app/4.png",
    value: "4.5",
    label: "Ratings on Google",
  },
  {
    img: "/mobile-app/5.png",
    value: "10 Lakh",
    label: "App Downloads",
  },
  {
    img: "/mobile-app/6.png",
    value: "120+",
    label: "Dedicated Developers",
  },
];

const cardData = [
  {
    title: "Mobile App",
    image: "/mobile-app/mobile app.png",
  },
  {
    title: "Website",
    image: "/mobile-app/web-design.png",
  },
  {
    title: "E-commerce",
    image: "/mobile-app/E-Commerce-Website.png",
  },
  {
    title: "Game App",
    image: "/mobile-app/games-app-icon-7.png",
  },
  {
    title: "AI & ML",
    image: "/mobile-app/ai-ml.png",
  },
  {
    title: "React Native",
    image: "/mobile-app/blockchain.png",
  },
];

const techList = [
  "Android App",
  "iPhone App",
  "Flutter",
  "Java",
  "React Native",
  "Kotlin",
];

const MobileAppDevelopment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <main className="bg-white">
      <section className="flex items-center justify-between px-32 max-md:px-4 py-0 bg-gradient-to-r from-gray-100 to-white text-gray-800 font-sans mt-[70px] max-w-[1500px] mx-auto max-md:flex-col-reverse lg:flex-nowrap">
        <div className="w-full lg:w-[60%]">
          <h1 className="text-[2.5rem] max-md:text-[2rem] max-md:w-full max-md:mt-4 leading-[3.5rem] max-md:leading-[3rem] text-gray-900 mb-8 max-md:mb-2 text-start font-semibold w-[80%]">
            Mobile App Development Services for Your Business
          </h1>
          <p className="text-base leading-6 mb-7 text-start">
            Ready to take your business to the next level? We specialize in
            crafting custom mobile apps for Android, iOS, and cross-platform
            solutions. With years of experience, we create user-friendly,
            high-performance apps that drive success.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#2f3d8f] text-white font-bold rounded-[15px] px-6 py-3 mb-8 w-[180px] text-center hover:bg-[#2f3d8f]"
          >
            Let's Connect →
          </Link>

          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-8 mt-4 ">
            <div className="text-justify">
              <h2 className="text-xl text-[#2f3d8f] font-semibold">75+</h2>
              <p className="text-sm text-[#2f3d8f]">Mobile Apps</p>
            </div>
            <div className="text-justify">
              <h2 className="text-xl text-[#2f3d8f] font-semibold">7+</h2>
              <p className="text-sm text-[#2f3d8f]">Years of developments</p>
            </div>
            <div className="text-justify">
              <h2 className="text-xl text-[#2f3d8f] font-semibold">90%</h2>
              <p className="text-sm text-[#2f3d8f]">Talent Retention Rate</p>
            </div>
            <div className="text-justify">
              <h2 className="text-xl text-[#2f3d8f] font-semibold">100%</h2>
              <p className="text-sm text-[#2f3d8f]">Refund Policy*</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[40%] mt-0 lg:mt-0">
          <img
            src="/mobile-app/mobile-banner.png"
            alt="Mobile App Development"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <section className="mt-[50px] w-[95%] max-md:w-full m-auto">
        <h1 className="text-[#2b4eff] text-[40px] max-md:text-[30px] mb-[30px]  text-center font-semibold">
          Mobile App Development for All Industries
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[30px] px-[30px]">
          {industial_cards.map((card, index) => (
            <div
              key={index}
              className="flex bg-white rounded-[10px] shadow-md p-[20px] text-left transition-transform duration-300 hover:-translate-y-2 flex-col md:flex-row"
            >
              <div className="w-full md:w-[50%]  flex justify-center md:justify-start">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[190px] h-[240px] object-contain"
                />
              </div>
              <div className="w-full md:w-[50%] mt-6 md:mt-0 md:pl-6">
                <h2 className="text-[20px] text-gray-800 font-semibold leading-[1.4rem] mb-2">
                  {card.title}
                </h2>
                <p className="text-[14px] text-gray-600 leading-[1.6]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center px-5 py-14 max-md:px-0">
        <h1 className="text-[35px] max-md:text-[30px] text-black mb-[30px] font-semibold">
          Our Mockup - Showcasing Breakthrough Projects
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] px-[50px] max-md:px-0">
          {images.map((src, index) => (
            <div key={index} className="rounded-[28px] overflow-hidden">
              <img
                src={src}
                alt={`Mockup ${index + 1}`}
                className="w-full h-auto object-cover rounded-[28px] transition-transform duration-300 hover:-translate-y-1 shadow-md"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-wrap gap-5 justify-center items-center  w-[85%] max-md:w-full mt-[10px] mb-[50px] mx-auto px-4">
        <div className="w-[300px] max-md:w-full">
          <div className="flex flex-col text-left">
            <h2 className="text-[26px] mb-1">Who We Are</h2>
            <p className="text-[16px] leading-[1.2rem]">
              We are passionate innovators, transforming mobile experiences
              across industries. Our cutting-edge solutions empower businesses
              to thrive in the digital world.
            </p>
          </div>
        </div>

        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-[390px] h-[160px] flex  justify-between items-center rounded-[10px] text-black font-bold text-left shadow-md p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${card.bgColor}`}
          >
            <div className="w-[70%]">
              <h2 className="text-[24px] mb-2">{card.heading}</h2>
              <p className="text-[#333] text-[16px]">{card.text}</p>
            </div>
            <div className="w-[30%] relative">
              <img
                src={card.image}
                alt="Card"
                className={`rounded-[10px] absolute right-0 ${
                  card.customImageStyle
                    ? "w-[140px] h-[120px] mt-[-60px]"
                    : "w-[140px] h-[140px] -mt-[70px] ml-[128px]"
                }`}
              />
            </div>
          </div>
        ))}

        <div className="w-[300px]  max-md:w-full ">
          <div className="flex flex-col text-left">
            <h2 className="text-[26px] mb-1">What Drives Us?</h2>
            <p className="text-[16px] leading-[1.2rem]">
              We are fueled by the desire to create impactful solutions that
              drive business growth. Our passion lies in helping brands succeed
              through innovative technology and seamless user experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap p-2  w-[85%] max-md:w-full m-auto">
        <div className="flex-1 min-w-[300px] max-w-[50%] max-md:max-w-full">
          <img
            src="/mobile-app/Untitled design.png"
            alt="Developer Working"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 max-w-[50%] max-md:max-w-full  bg-white p-5 max-md:px-0">
          <div className="grid grid-cols-3 gap-5 mb-5">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white border rounded-[16px] flex flex-col items-center p-3"
              >
                <img
                  src={stat.img}
                  alt={stat.label}
                  className="w-[50px] mt-2 mb-2"
                />
                <h3 className="text-gray text-xl font-semibold mt-1">
                  {stat.value}
                </h3>
                <p className="text-gray text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#f1f4ff] p-6 rounded-[10px] text-left">
            <h2 className="text-[#2b4eff] text-2xl font-semibold mb-2">
              Hire Dedicated Developers
            </h2>
            <p className="mb-3">
              Hire our developers to design, develop, and deliver futuristic
              development solutions by leveraging the experience of a top
              development company.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#2b4eff] hover:bg-[#1a34cc] text-white font-bold py-2 px-4 rounded"
            >
              Hire Developers
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap justify-between max-w-[1300px] w-[85%] max-md:w-full m-auto my-5 px-5 gap-5 mb-12 mt-12 max-md:mt-6">
        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 flex-2 w-full lg:w-[62%]">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`relative h-[300px] rounded-lg overflow-hidden cursor-pointer shadow-md hover:scale-[1.03] transition ${
                card.hidden ? "hidden lg:block" : ""
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-sm">Solutions</p>
              </div>
            </div>
          ))}
        </div>

        {/* Description Panel */}
        <div className="w-full lg:w-[35%] bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-4 text-start">
            Mobile App Development
          </h2>
          <hr className="w-[15%] border border-black mb-6" />
          <p className="text-base text-gray-600 leading-relaxed mb-6 text-start">
            We specialize in enhancing the mobile experience across various
            industries, niches, and products, helping businesses add value and
            stay ahead with innovative, future-focused solutions.
          </p>
          <ul className="grid grid-cols-1 gap-2 list-none text-start">
            {techList.map((tech, index) => (
              <li
                key={index}
                className="relative pl-6 text-lg text-gray-800 before:content-['○'] before:absolute before:left-0 before:text-gray-800"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default MobileAppDevelopment;
