import { useState } from "react";
import { useEffect } from "react";
import UserForm from "../../components/UserForm";

function WebsiteDesigning() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);

  const features = [
    {
      img: "/website-design/icons/08.webp",
      title: "Responsive",
      description:
        "Adapts seamlessly to various devices, ensuring a consistent and enjoyable user experience across desktops, tablets, and mobile phones.",
    },
    {
      img: "/website-design/icons/09.webp",
      title: "Fast Loading Time",
      description:
        "Optimizes web pages to load quickly, reducing bounce rates and enhancing user satisfaction. Faster websites improve both SEO and conversions.",
    },
    {
      img: "/website-design/icons/10.webp",
      title: "SEO-Friendly Structure",
      description:
        "Incorporates the best practices for search engine optimization, ensuring better rankings, increased traffic, and higher visibility on search engines like Google.",
    },
    {
      img: "/website-design/icons/11.webp",
      title: "User-Friendly Navigation",
      description:
        "Provides clear and intuitive menus to help visitors easily find the information they need, creating a positive user experience.",
    },
    {
      img: "/website-design/icons/13.webp",
      title: "Google Speed Test Integration",
      description:
        "Leverages Google tools to test and improve site performance, ensuring quick response times and smooth operations.",
    },
    {
      img: "/website-design/icons/14.webp",
      title: "Clean & Modern Design",
      description:
        "Focuses on simplicity, aesthetic appeal, and functionality, providing users with a professional and engaging website experience.",
    },
    {
      img: "/website-design/icons/15.webp",
      title: "Enhanced Functionality",
      description:
        "Ensures all features work seamlessly, from forms and buttons to complex integrations, providing users with a smooth browsing experience.",
    },
    {
      img: "/website-design/icons/16.webp",
      title: "Improved Usability",
      description:
        "Analyzes and refines the ease of navigation and interaction, making the website accessible and enjoyable for all users.",
    },
    {
      img: "/website-design/icons/17.webp",
      title: "Compelling Calls-to-Action (CTA)",
      description:
        "Strategically placed CTAs encourage users to take desired actions, such as signing up, purchasing, or contacting your business.",
    },
    {
      img: "/website-design/icons/18.webp",
      title: "Cross-Browser Compatibility",
      description:
        "Guarantees flawless website performance across all major web browsers, such as Chrome, Firefox, Safari, and Edge.",
    },
    {
      img: "/website-design/icons/19.webp",
      title: "Social Media Integration",
      description:
        "Connect your website with social media platforms to boost engagement, share content, and grow your online presence.",
    },
    {
      img: "/website-design/icons/20.webp",
      title: "Secured HTTPS Protocol",
      description:
        "Protects your website and user data with HTTPS encryption, building trust and enhancing your credibility.",
    },
    {
      img: "/website-design/icons/22.webp",
      title: "Google Console Verification",
      description:
        "Validates website ownership and monitors its performance on Google Search, improving discoverability.",
    },
    {
      img: "/website-design/icons/23.webp",
      title: "Google Analytics Setup",
      description:
        "Tracks user behavior, traffic sources, and engagement metrics, providing valuable insights for data-driven decisions.",
    },
    {
      img: "/website-design/icons/24.webp",
      title: "Original & Engaging Content",
      description:
        "Delivers high-quality, unique content tailored to your audience, boosting engagement and ensuring a professional image.",
    },
    {
      img: "/website-design/icons/25.webp",
      title: "Brand-Aligned Color Scheme",
      description:
        "Develops a cohesive color palette that reflects your brand identity while creating an inviting and professional atmosphere.",
    },
  ];

  const cards = [
    {
      title: "Initial Consultation",
      description:
        "We begin by understanding your business needs, goals, and challenges. This initial conversation helps us gather key insights so we can offer tailored solutions that align with your vision.",
      image: "/website-design/cards-pic/initial_consultation.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Planning & Strategy",
      description:
        "Once we understand your goals, we craft a detailed strategy that outlines the approach, timeline, and resources required. We ensure the plan addresses every aspect of your project.",
      image: "/website-design/cards-pic/Planningstrategy.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Design Mockups",
      description:
        "Our design team creates mockups and prototypes, providing you with a visual representation of your website or app. This ensures it aligns with your brand’s identity and user needs.",
      image: "/website-design/cards-pic/Design_mockups.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Visual Design",
      description:
        "After finalizing the mockups, we move to visual design, focusing on colors, typography, images, and other visual elements to create an engaging and functional experience.",
      image: "/website-design/cards-pic/Visual Design.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Development",
      description:
        "Our developers bring the design to life. Using the latest technologies and best practices, we ensure your site or app is fast, secure, and scalable.",
      image: "/website-design/cards-pic/Development.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Content Integration",
      description:
        "We integrate your content seamlessly, ensuring it flows well with the design and enhances user experience. From text to images and videos, everything fits perfectly.",
      image: "/website-design/cards-pic/Content_Integration.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Testing and Quality Assurance",
      description:
        "Before launching, we rigorously test every aspect of the site or app to ensure it performs flawlessly. This includes functionality, compatibility, security, and usability checks.",
      image: "/website-design/cards-pic/Testing and Quality Assurance.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Launch and Deployment",
      description:
        "Once everything is ready and tested, we launch your website or app. Our team handles the deployment process, ensuring a smooth launch.",
      image: "/website-design/cards-pic/Launch.webp",
      buttonText: "Consult Now →",
    },
    {
      title: "Post-Launch Support and Maintenance",
      description:
        "Our job doesn’t end at launch. We offer ongoing support to keep your website or app updated, secure, and performing at its best.",
      image: "/website-design/cards-pic/Post-Launch.webp",
      buttonText: "Consult Now →",
    },
  ];

  return (
    <main>
      <section className="p-5 flex mt-20 ml-4 mb-10 max-md:mb-5 max-lg:block max-lg:ml-0 max-lg:p-0 max-lg:justify-center">
        <div className=" w-[50%] mr-20 max-lg:w-auto max-lg:mb-[30px] max-lg:pl-3 max-lg:flex max-lg:justify-center max-lg:mr-6">
          <img
            src="/website-design/web-design.jpg"
            alt=""
            className="w-[100%] mt-5 ml-4 rounded-[20px] z-0 max-lg:mt-9 border"
          />
        </div>
        <div className="w-[50%] max-lg:w-[100%] max-lg:ml-0 max-lg:p-3 mt-24 max-md:mt-8">
          <div>
            <h3 className="text-[22px] text-[#ffc422] font-semibold tracking-widest">
              OUR SERVICES
            </h3>
            <h1 className="text-[36px] max-md:text-[30px] font-semibold mb-4 mt-2 leading-[3.5rem] max-md:leading-[2.5rem] max-lg:text-[40px] max-lg:leading-[3rem]">
              Website Design Services Offered by BTJ ALPHA TECHNOLOGY PVT LTD
            </h1>
            <p className="leading-8 w-[95%] text-[18px] max-lg:w-[100%] max-lg:text-[16px]">
              Welcome to BTJ ALPHA TECHNOLOGY PVT LTD, where the art of website design comes to
              life. In the digital age, your website serves as the virtual
              storefront of your brand. At BTJ ALPHA TECHNOLOGY PVT LTD, we specialize in
              creating visually captivating and user-centric websites that not
              only showcase your brand but also engage and convert visitors.
            </p>
          </div>
        </div>
      </section>

      <section className="p-10 max-md:p-2">
        <div className="flex justify-between w-[95%] m-auto max-md:block">
          <div>
            <h2 className="text-xl max-md:text-lg text-[#ffc422] font-semibold tracking-widest mb-2">
              HOW DO WE WORK
            </h2>
            <h1 className="text-4xl font-semibold max-md:text-3xl">Our Work Process</h1>
          </div>
          <div className="text-lg w-[40%] mt-2 max-md:mt-4 max-md:w-[100%] ">
            Discover BTJ ALPHA TECHNOLOGY PVT LTD’s strategic approach to digital marketing and
            website design, crafted to boost engagement, visibility, and
            business growth.
          </div>
        </div>
        <div className="m-auto  pt-16 max-md:pt-6">
          <div className="absolute w-[90%] mt-12  ml-5 flex justify-center z-0">
            <img
              src="/website-design/process-line.webp"
              className="w-[80%] flex justify-center max-lg:hidden"
              alt=""
            />
          </div>
          <div className="relative grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="p-5 max-md:px-0 text-center">
              <div className="flex justify-center mb-5 z-50">
                <img
                  src="/website-design/process-icon1.webp"
                  className=" border border-gray-400 p-4  rounded-[12px]"
                  alt=""
                />
              </div>
              <h1 className="text-3xl font-[500] mb-5">Briefing</h1>
              <p className="px-5 text-lg text-gray-600">
                We start by understanding your goals and vision through a
                detailed briefing session. This step ensures that every solution
                is perfectly tailored to your unique needs.
              </p>
            </div>
            <div className="p-5  max-md:px-0 text-center">
              <div className="flex justify-center mb-5">
                <img
                  src="/website-design/process-icon1.webp"
                  className=" border border-gray-400 p-4 rounded-[12px]"
                  alt=""
                />
              </div>
              <h1 className="text-3xl font-[500] mb-5">Idea Generation</h1>
              <p className="px-3 text-lg text-gray-600">
                Our team brainstorms innovative concepts aligned with current
                trends, transforming ideas into actionable strategies for
                website design, digital marketing, and more.
              </p>
            </div>
            <div className="p-5  max-md:px-0 text-center">
              <div className="flex justify-center mb-5">
                <img
                  src="/website-design/process-icon1.webp"
                  className=" border border-gray-400 p-4 rounded-[12px]"
                  alt=""
                />
              </div>
              <h1 className="text-3xl font-[500] mb-5">Processing</h1>
              <p className="px-5 text-lg text-gray-600">
                We bring your project to life through precise development and
                design, ensuring each element is crafted for optimal performance
                and user experience.
              </p>
            </div>
            <div className="p-5  max-md:px-0 text-center">
              <div className="flex justify-center mb-5">
                <img
                  src="/website-design/process-icon1.webp"
                  className=" border border-gray-400 p-4 rounded-[12px]"
                  alt=""
                />
              </div>
              <h1 className="text-3xl font-[500] mb-5">Finishing</h1>
              <p className="px-5 text-lg text-gray-600">
                After meticulous testing and final touches, we deliver a
                polished, high-quality product that positions your brand
                effectively in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto py-8 px-4 mb-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card bg-white border rounded-lg p-4 shadow-md hover:shadow-xl transition pl-5 ${
              index >= 6 ? "hidden md:block" : ""
            }`}
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-12 h-12 mb-4"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col items-center mb-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex  flex-row max-lg:flex-col ${
              index % 2 != 0 ? "lg:flex-row-reverse" : ""
            } sticky top-[50px] w-[75%] max-md:w-[100%] bg-white border shadow-lg rounded-xl overflow-hidden px-8 max-md:px-2`}
          >
            <div className="p-8 w-[45%] max-lg:w-[100%] max-md:p-0">
              <img
                src={card.image}
                alt={`${card.title} Icon`}
                className=" w-[330px] max-md:w-[250px] mx-auto mt-14 max-lg:mt-12"
              />
            </div>
            <div className="flex flex-col justify-start text-left p-8 max-md:p-0 w-[55%] max-lg:w-[100%]">
              <h2 className="text-[40px] max-md:text-[30px] font-bold mb-4 mt-24 max-lg:mt-2">
                {card.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">{card.description}</p>
              <button
                onClick={openForm}
                className="bg-transparent border-2 border-black rounded-full text-black px-6 py-2 text-lg hover:bg-yellow-500 hover:text-white transition mb-28 w-[40%] max-md:w-[50%]"
              >
                Consult Now →
              </button>
            </div>
          </div>
        ))}

        {/* Popup Form */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg relative w-full max-w-md">
              <button
                onClick={closeForm}
                className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-gray-900"
              >
                ×
              </button>
              <h3 className="text-3xl font-semibold mb-4 text-center">
                Get a free consultation with our expert
              </h3>
              <UserForm/>
            </div>
          </div>
        )}
      </section>

      <section className="px-20 py-10 max-md:px-2 max-md:py-2">
        <div className="flex max-lg:flex-col justify-between  m-auto max-md:block">
          <div className="w-[55%] max-lg:w-[100%]">
            <h2 className="border w-[180px] p-2 pl-3 text-[20px] rounded-[12px] tracking-widest leading-7 bg-[#ecf1f1] text-[#191970] font-semibold mb-5">
              OUR SERVICES
            </h2>
            <h1 className="text-[35px] max-md:text-[25px] font-semibold leading-[4rem] max-md:leading-[2rem]">
              Why Choose BTJ ALPHA TECHNOLOGY PVT LTD for Website Design
            </h1>
          </div>
          <div className="text-lg w-[40%] max-lg:w-[100%] mt-24 max-lg:mt-6 max-md:w-[100%] max-md:mt-4">
            Join us on a journey where every pixel is purposeful, every click is
            intentional, and every visit is a step toward digital success.
          </div>
        </div>
        <div className=" flex mt-12 mb-10 max-lg:block max-lg:ml-0 max-lg:p-0 max-lg:justify-center">
          <div className=" w-[45%] mr-20 max-lg:w-auto max-lg:mb-[30px] max-lg:pl-3 max-lg:flex max-lg:justify-center max-lg:mr-6 mt-8">
            <img
              src="/website-design/about-two-image.webp"
              alt=""
              className="w-[100%] mt-5 ml-4 rounded-[20px] z-0 max-lg:mt-9 mb-6 "
            />
          </div>
          <div className="w-[55%] max-lg:w-[100%] max-lg:ml-0 max-lg:p-3  ">
            <div className="flex">
              <div className="flex items-center">
                <img
                  src="/website-design/about-icon1.webp"
                  className="w-[120px] h-[60px]"
                  alt=""
                />
              </div>
              <div className="ml-5">
                <h1 className="text-3xl font-semibold mb-4">
                  Custom Website Design
                </h1>
                <p className="leading-[1.6rem]">
                  Our designs are tailored to reflect your brand's unique
                  identity, ensuring a memorable user experience that resonates
                  with your target audience.
                </p>
              </div>
            </div>
            <hr className="h-[1.4px] bg-gray-400 mt-10 mb-10" />
            <div className="flex">
              <div className="flex items-center">
                <img
                  src="/website-design/about-icon2.webp"
                  className="w-[110px] h-[60px]"
                  alt=""
                />
              </div>
              <div className="ml-8">
                <h1 className="text-3xl font-semibold mb-4">
                  Responsive Design
                </h1>
                <p className="leading-[1.6rem]">
                  We create responsive websites that provide a seamless
                  experience across all devices, ensuring your visitors can
                  engage with your content anytime, anywhere.
                </p>
              </div>
            </div>
            <hr className="h-[1.4px] bg-gray-400 mt-10 mb-10" />
            <div className="flex">
              <div className="flex items-center">
                <img
                  src="/website-design/about-icon3.webp"
                  className="w-[110px] h-[60px]"
                  alt=""
                />
              </div>
              <div className="ml-6">
                <h1 className="text-3xl font-semibold mb-4">
                  SEO-Optimized Design
                </h1>
                <p className="leading-[1.6rem]">
                  Every website we build is optimized for search engines,
                  ensuring better visibility and higher rankings, driving
                  organic traffic to your site.
                </p>
              </div>
            </div>
            <hr className="h-[1.4px] bg-gray-400 mt-10 mb-10" />
            <div className="flex">
              <div className="flex items-center">
                <img
                  src="/website-design/about-icon4.webp"
                  className="w-[110px] h-[60px]"
                  alt=""
                />
              </div>
              <div className="ml-8">
                <h1 className="text-3xl font-semibold mb-4">
                  Ongoing Support and Maintenance
                </h1>
                <p className="leading-[1.6rem]">
                  We believe in long-term partnerships. Our team provides
                  continuous support and maintenance to ensure your website
                  evolves alongside your business needs.
                </p>
              </div>
            </div>
            <hr className="h-[1.4px] bg-gray-400 mt-10 mb-10" />
          </div>
        </div>
      </section>
    </main>
  );
}
export default WebsiteDesigning;
