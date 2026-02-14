import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import React, { useRef } from "react";
import team from "/Team1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useEffect } from "react";

function About() {
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);

  var setting = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNext = () => {
    sliderRef.current.slickNext(); // Move to the next slide
  };
  const handleNext2 = () => {
    sliderRef2.current.slickNext(); // Move to the next slide
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev(); // Move to the previous slide
  };
  const handlePrev2 = () => {
    sliderRef2.current.slickPrev(); // Move to the previous slide
  };
  // const teamMembers = [
  //   {
  //     name: "MOHD ZAID",
  //     role: "Android Developer",
  //     image: "/team-members/zaid.webp",
  //   },
  //   {
  //     name: "Vibudh Rathore",
  //     role: "Front End Developer",
  //     image: "/team-members/vibudh.webp",
  //   },
  //   {
  //     name: "Rohan",
  //     role: "Back  End Developer",
  //     image: "/team-members/rohan.webp",
  //   },
    // {
    //   name: "Anshu Shyanda",
    //   role: "Graphic Designer",
    //   image: "/team-members/nishant.webp",
    // },
    // {
    //   name: "Nishant",
    //   role: "Digital Marketer",
    //   image: "/team-members/nishant.webp",
    // },
    // {
    //   name: "Dhruv Prajapati",
    //   role: "Digital Marketer",
    //   image: "/team-members/nishant.webp",
    // },
  // ];
  return (
    <main>
      {/* Who-we-are Section Start here */}

      <section className="p-5 flex mt-20 ml-4 mb-10 max-lg:block max-lg:ml-0 max-lg:p-0 max-lg:justify-center">
        <div className=" w-[50%] mr-10 max-lg:w-auto max-lg:mb-[30px] max-lg:pl-3 max-lg:flex max-lg:justify-center max-lg:mr-6">
          <img
            src={team}
            alt=""
            className="w-[100%] mt-5 ml-4 rounded-[20px] z-0 max-lg:mt-9"
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
              <p className="leading-8 max-md:leading-6 w-[95%] text-[17px] max-lg:w-[100%] max-lg:text-[14px]">
                At BTJ ALPHA TECHNOLOGY PVT LTD, we’re a dynamic team of creators who
                breathe life into technology. Passionate about innovation, we
                design and develop tailored software and digital solutions that
                empower businesses to flourish in the ever-evolving digital
                landscape. With a focus on collaboration and creativity, we
                transform ideas into impactful realities, ensuring that our
                clients not only keep up but stand out. Let’s build something
                extraordinary together!{" "}
                {/* <Link to="about">
                  <span className="font-bold">Read More</span>
                </Link> */}
              </p>
            </div>
            <div className="flex gap-10 mt-5 justify-between w-[95%] max-lg:w-[100%]">
              <div>
                <h1 className="text-[38px] font-semibold max-md:text-[40px]">
                  50+
                </h1>
                <p className="text-[18px]">Employees</p>
              </div>
              <div>
                <h1 className="text-[38px] font-semibold max-md:text-[40px]">
                  378+
                </h1>
                <p className="text-[18px]">Completed Projects</p>
              </div>
              <div>
                <h1 className="text-[38px] font-semibold max-md:text-[40px]">
                  326+
                </h1>
                <p className="text-[18px]">Trusted Customers</p>
              </div>
            </div>
          </div>
      </section>

      {/* Who-we-are Section End here */}

      <section className="mx-14 mb-12 max-md:mx-3">
      
        {/* <h1 className="mt-6 text-[30px] max-md:text-[22px] font-semibold  mb-10">
          At BTJ ALPHA TECHNOLOGY PVT LTD, we specialize in digital marketing and website design,
          crafting solutions that empower businesses to stand out, engage, and
          grow in the digital world.
        </h1> */}



        <div className="mb-5">
              <h3 className="text-[20px] text-[#ffc422]  font-semibold">
               About BTJ ALPHA TECHNOLOGY PVT LTD
              </h3>
              <h1 className="text-[42px] font-semibold mb-4 mt-0 leading-[4rem] max-lg:text-[36px] max-lg:leading-[3rem]">
                Empowering Businesses Through Digital Innovation
              </h1>
              <p className="leading-8 max-md:leading-6 w-[95%] text-[17px] max-lg:w-[100%] max-lg:text-[14px]">
               At BTJ ALPHA TECHNOLOGY PVT LTD, we are passionate about helping businesses thrive in the digital era.
We specialize in digital marketing, website design, and IT solutions that empower brands to stand out, engage their audience, and grow with confidence.
Our team combines creativity, technology, and strategy to deliver results-driven solutions that make your online presence truly impactful.{" "}
                {/* <Link to="about">
                  <span className="font-bold">Read More</span>
                </Link> */}
              </p>
            </div>
        <div className="flex max-md:flex-col">
          <div className="flex flex-col w-1/2 pr-8 max-md:w-full max-md:pr-0">
            <h1 className="text-[35px] font-semibold mb-5">Our Mission</h1>
            <p className="text-[18px] leading-8">
             Our mission is simple yet powerful — to elevate your online presence.
We aim to deliver innovative, results-oriented digital marketing and web design solutions that increase visibility, drive targeted traffic, and help you build meaningful connections with your customers.
Every strategy we craft is tailored to your business goals, ensuring measurable success and long-term growth.
            </p>
          </div>
          <div className="flex flex-col w-1/2 max-md:w-full">
            <h1 className="text-[35px] font-semibold mb-5">Our Vision</h1>
            <p className="text-[18px] leading-8">
              Our vision is to be a leading force in digital transformation, guiding businesses of all sizes toward sustainable success.
We strive to set new standards in digital strategy, creative web design, and customer-focused marketing — helping our clients stay ahead in an ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="team-area py-12 px-6 max-md:py-2 max-md:px-3">
        <div className="container mx-auto text-center">
          <div className="text-center mb-10">
            <h5 className="text-yellow-500 text-lg uppercase">
              Exceptional Team
            </h5>
            <h2 className="text-4xl font-bold mt-2">Meet with our team</h2>
            <p className="text-gray-600 mt-4">
              Discover the driving force behind Marketing. Working collaboratively
              to deliver innovative digital marketing solutions that elevate
              your brand.
            </p>
          </div> */}

          {/* Slider */}
          {/* <Slider {...settings} ref={sliderRef}>
            {teamMembers.map((member, index) => (
              <div key={index} className="flex-shrink-0 p-4">
              <div className="bg-white shadow-lg rounded-lg text-center pb-5 overflow-hidden">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto w-full transition-transform duration-300 transform hover:scale-110 object-cover"
                  />
                </div>
            
                <h5 className="text-lg font-bold text-start ml-2 mt-4">
                  {member.name}
                </h5>
                <h6 className="text-gray-500 text-start ml-2">{member.role}</h6>
              </div>
            </div>
            
            ))}
          </Slider> */}

          {/* Navigation Buttons */}
          {/* <div className="flex justify-center  mt-8">
            <button
              onClick={handlePrev}
              className="text-3xl rounded text-slate-600 hover:text-slate-950"
            >
              <BsArrowLeft />
            </button>
            <div className="tracking-[10px] font-extrabold text-[25px] text-orange-400 pl-5 pr-3 pb-2 mb-2">
              ....
            </div>
            <button
              onClick={handleNext}
              className="text-3xl rounded text-slate-600 hover:text-slate-950"
            >
              <BsArrowRight />
            </button>
          </div>
        </div>
      </section> */}

      <section className="p-10 flex max-lg:block max-md:p-4">
        <div className="w-1/2 max-lg:w-full">
          <h3 className="text-[22px] max-md:text-[20px] tracking-widest text-[#ffc422] font-semibold ">
            CLIENT TESTIMONIALS
          </h3>
          <h1 className="text-[35px] max-md:text-[25px] font-semibold w-[80%] max-md:mt-3 max-md:w-full mb-5">
            What Our Clients Say About BTJ ALPHA TECHNOLOGY PVT LTD
          </h1>
          <p className="text-[18px]">
            Discover how BTJ ALPHA TECHNOLOGY PVT LTD has empowered businesses across India with
            innovative, customized digital solutions.
          </p>
          <Link to="/contact">
            


            <button 
               className="w-[170px] mb-12  flex font-semibold mt-5 bg-[#fb9c24]  text-xl justify-center h-12 rounded-lg text-white  items-center ">
                   Get Started <FaRegArrowAltCircleRight className="ml-2 text-lg" />
            </button>
          </Link>
          <hr className="h-[1px] bg-black mb-10 w-[90%]" />
          <div className="flex">
            <img src="/about-page/user.webp" className=" w-[100px]" alt="" />
            <h1 className="mt-1 text-lg ml-3">Happy Clients of BTJ ALPHA TECHNOLOGY PVT LTD</h1>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full max-lg:mt-10">
          <Slider {...setting} ref={sliderRef2}>
            <div className="p-8 max-md:p-4 rounded-[12px]  bg-[#f7f7f7]">
              <h1 className="text-[28px] mb-10">
                "BTJ ALPHA TECHNOLOGY PVT LTD has transformed our online presence with their
                expertise. They understood our vision and delivered beyond our
                expectations."
              </h1>
              <hr className="h-[1.2px] bg-black" />
              <div className="flex max-md:block justify-between">
                <div className="flex mt-8">
                  <img
                    src="/about-page/m4.webp"
                    className="w-[100px] rounded-full"
                    alt=""
                  />
                  <h1 className="text-2xl mt-8 ml-5 font-semibold">
                    Rajesh Kumar
                  </h1>
                </div>
                <div className="flex items-center mt-8 text-xl ">
                  <FaStar className="text-orange-400 mr-1" />
                  <FaStar className="text-orange-400 mr-1" />
                  <FaStar className="text-orange-400 mr-1" />
                  <FaStar className="text-orange-400 mr-1" />
                  <FaStar className="text-orange-400 mr-1" />
                </div>
              </div>
            </div>
            <div className="p-8 max-md:p-4 rounded-[12px] bg-[#f7f7f7]">
              <h1 className="text-[28px] mb-10">
                "Working with BTJ ALPHA TECHNOLOGY PVT LTD was one of the best decisions for our
                business. Their targeted strategies significantly boosted our
                customer engagement."
              </h1>
              <hr className="h-[1.2px] bg-black" />
              <div className="flex max-md:block justify-between">
                <div className="flex mt-8">
                  <img
                    src="/about-page/f2.jpg"
                    className="w-[100px] rounded-full object-cover object-center"
                    alt=""
                  />
                  <h1 className="text-2xl mt-8 ml-5 font-semibold">
                    Priya Sharma
                  </h1>
                </div>
                <div className="flex items-center mt-8 text-xl ">
                  <FaStar className="text-orange-400 mr-1" />
                  <FaStar className="text-orange-400 mr-1" />
                  <FaStar className="text-orange-400 mr-1" />
                  <FaStar className="text-orange-400 mr-1" />
                  <FaStar className="text-orange-400 mr-1" />
                </div>
              </div>
            </div>
            <div className="p-8 max-md:p-4 rounded-[12px] bg-[#f7f7f7]">
              <h1 className="text-[28px] mb-10">
                "BTJ ALPHA TECHNOLOGY PVT LTD has an excellent team that delivered a seamless
                experience from start to finish. They’ve given us the digital
                edge we needed."
              </h1>
              <hr className="h-[1.2px] bg-black" />
              <div className="flex max-md:block justify-between">
                <div className="flex mt-8">
                  <img
                    src="/about-page/m2.webp"
                    className="w-[100px] rounded-full"
                    alt=""
                  />
                  <h1 className="text-2xl mt-8 ml-5 font-semibold">
                    Sanjay Gupta
                  </h1>
                </div>
                <div className="flex items-center mt-8 text-xl ">
                  <FaStar className="text-orange-400 mr-1" />
                  <FaStar className="text-orange-400 mr-1" />
                  <FaStar className="text-orange-400 mr-1" />
                  <FaStar className="text-orange-400 mr-1" />
                  <FaStar className="text-orange-400 mr-1" />
                </div>
              </div>
            </div>
          </Slider>
          {/* Navigation Buttons */}
          <div className="flex justify-center  mt-8">
            <button
              onClick={handlePrev2}
              className="text-3xl rounded text-slate-600 hover:text-slate-950"
            >
              <BsArrowLeft />
            </button>
            <div className="tracking-[10px] font-extrabold text-[25px] text-orange-400 pl-5 pr-3 pb-2 mb-2">
              ...
            </div>
            <button
              onClick={handleNext2}
              className="text-3xl rounded text-slate-600 hover:text-slate-950"
            >
              <BsArrowRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;
