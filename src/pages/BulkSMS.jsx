import { Link } from "react-router-dom";
import { useEffect } from "react";


const SingleItem = ({ title, price, features }) => (
  <div className="border rounded-lg shadow-md bg-white">
    <div className="bg-gray-200">
      <h2 className="text-lg font-bold text-center pt-4 mb-2 bg-gray-200">
        {title}
      </h2>
      <p className="text-lg font-semibold text-center pb-4">{price}</p>
    </div>
    <hr />
    <ul className="space-y-3 mt-4">
      <li className="text-center">{features}</li>
      <hr />
      <li className="text-center">Deliver between 24x7</li>
      <hr />
      <li className="text-center">Delivery to DND numbers</li>
      <hr />
      <li className="text-center">18% GST extra</li>
      <hr />
      <li className="text-center">No API</li>
      <hr />
      <li className="text-center">06 Alphabets SENDER ID</li>
      <hr />
      <li className="text-center">Lifetime validity</li>
      <hr />
      <li className="text-center">Send Text + images, Videos</li>
      <hr />
      <li className="text-center">100% Advance Payment</li>
      <hr />
    </ul>
    <Link to="/contact">
      <button className="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 rounded mt-4 w-[35%] max-md:w-[50%] flex m-auto justify-center">
        Buy Now
      </button>
    </Link>
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
    price: "IINR 8,450",
    features: "50,000 SMS / 16.9p Per SMS",
  },
  {
    title: "01Lac Trans SMS",
    price: "INR 14,000",
    features: "1,00,000 SMS / 14p Per SMS",
  },
  {
    title: "10K High Promo/Trans SMS",
    price: "INR 2500",
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
    price: "INR 75000",
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
}, []);

  return (
    <section className="p-10 max-lg:p-2">
      <div className="mt-24">
        <h1 className="text-[40px] max-md:text-[30px] font-semibold flex justify-center max-md:text-center mb-10 max-md:mb-2">
          Why Choose BTJ ALPHA TECHNOLOGY PVT LTD
        </h1>
        <div className="flex p-5 max-md:p-0 max-lg:flex-col-reverse ">
          <div className="w-[70%] max-lg:w-[100%] grid grid-cols-2 max-md:grid-cols-1 max-lg:gap-10">
            <div className="flex flex-col text-center items-center">
              <img src="/bulksms/ic.webp" className="w-[50px] mb-2" alt="" />
              <h3 className="text-[20px] text-[#959494] font-bold mb-2">
                WhatsApp Bulk SMS Marketing
              </h3>
              <p className="text-[#959494] w-[95%]">
                Most effective Marketing tool offered with Online Whatsapp Bulk
                SMS sending Portal. An online portal using which you can send
                text, images, pdf & videos to lacs of mobile numbers within few
                Hrs without worrying about your number blacklisting.
              </p>
            </div>
            <div className="flex flex-col text-center items-center">
              <img src="/bulksms/ic.webp" className="w-[50px] mb-2" alt="" />
              <h3 className="text-[20px] text-[#959494] font-bold mb-2">
                Generate Traffic By Promotional SMS
              </h3>
              <p className="text-[#959494] w-[95%]">
                Increase traffic on your website by drawing customer attention
                to new products and services and redirect end consumers to
                website through URLs by our online Bulk SMS, bulk whatsapp &
                voice call service.
              </p>
            </div>
            <div className="flex flex-col text-center items-center">
              <img src="/bulksms/ic.webp" className="w-[50px] mb-2" alt="" />
              <h3 className="text-[20px] text-[#959494] font-bold mb-2">
                Round the Clock Delivery by Transactional SMS
              </h3>
              <p className="text-[#959494] w-[90%]">
                Send Transactional SMS regardless of time constraints and
                deliver important info to your customers 24/7/365 days.
              </p>
            </div>
            <div className="flex flex-col text-center items-center">
              <img src="/bulksms/ic.webp" className="w-[50px] mb-2" alt="" />
              <h3 className="text-[20px] text-[#959494] font-bold mb-2">
                Interactive SMS Panel UI
              </h3>
              <p className="text-[#959494] w-[90%]">
                Handle Bulk SMS & Bulk Whatsapp delivery constraints with
                interactive and easy to use interface.
              </p>
            </div>
          </div>
          <div className="m-auto mb-5 ">
            <img src="/bulksms/banner.webp" alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[40px] max-md:text-[30px] font-semibold flex justify-center max-md:text-center mb-10 max-md:mb-6">
          Our Bulk SMS Services
        </h1>
        <div className=" max-lg:w-[100%] grid grid-cols-4 max-md:grid-cols-2 gap-10">
          <div className="flex flex-col text-center items-center">
            <img src="/bulksms/ic.webp" className="w-[50px] mb-2" alt="" />
            <h3 className="text-[20px] text-[#959494] font-bold mb-2">
              Whatsapp Bulk SMS
            </h3>
            <p className="text-[#959494] w-[95%]">
              Send Bulk Whatsapp messages to thousands of Whatsapp numbers in
              just 1 click. The only Whatsapp marketing company offers sending
              bulk whatsapp with LIVE links and click to Call buttons. Send
              Whatsapp Bulk SMS with Text, Images, Pdf & Videos. Most effective
              Bulk Whatsapp SMS Portal.
            </p>
          </div>
          <div className="flex flex-col text-center items-center">
            <img src="/bulksms/ic.webp" className="w-[50px] mb-2" alt="" />
            <h3 className="text-[20px] text-[#959494] font-bold mb-2">
              Transactional Bulk SMS
            </h3>
            <p className="text-[#959494] w-[95%]">
              Bulk SMS sent to customers to provide information necessary for
              using product or service to keep customers informed. Such SMS can
              be sent to both DND & Non-DND Numbers along with a 06 alpbhabets
              sender ID.
            </p>
          </div>
          <div className="flex flex-col text-center items-center">
            <img src="/bulksms/ic.webp" className="w-[50px] mb-2" alt="" />
            <h3 className="text-[20px] text-[#959494] font-bold mb-2">
              Promotional Bulk SMS
            </h3>
            <p className="text-[#959494] w-[90%]">
              Promotional SMS are being used for the promotions or marketing
              your services or products. Such Promotional SMS contains sales &
              marketing SMS activity. Such messages can be used to promote
              products & services among potential prospects clients.
            </p>
          </div>
          <div className="flex flex-col text-center items-center">
            <img src="/bulksms/ic.webp" className="w-[50px] mb-2" alt="" />
            <h3 className="text-[20px] text-[#959494] font-bold mb-2">
              Miss Call Alert
            </h3>
            <p className="text-[#959494] w-[90%]">
              Missed Call Services are best and reliable way of providing
              engaging and interactive communications to customers and
              prospects. This can use for Lead generations, Opinion polls,
              Customer feedbacks, Information pulling and many more.
            </p>
          </div>
          <div className="flex flex-col text-center items-center">
            <img src="/bulksms/ic.webp" className="w-[50px] mb-2" alt="" />
            <h3 className="text-[20px] text-[#959494] font-bold mb-2">
              Voice Call SMS
            </h3>
            <p className="text-[#959494] w-[90%]">
              Voice calls helps to enhance business. Voice can be used for a
              wide range of applications like Political Campaigns, Election
              Promotions, Customer Surveys, Mobile Marketing , Meeting alerts,
              Wake up calls, EMI Alerts, Medicine reminders etc.
            </p>
          </div>
          <div className="flex flex-col text-center items-center">
            <img src="/bulksms/ic.webp" className="w-[50px] mb-2" alt="" />
            <h3 className="text-[20px] text-[#959494] font-bold mb-2">
              Website Development
            </h3>
            <p className="text-[#959494] w-[90%]">
              Our Website development packages starts from INR 50,000 onwards.
              We develop CMS and HTML both websites.
            </p>
          </div>
          <div className="flex flex-col text-center items-center">
            <img src="/bulksms/ic.webp" className="w-[50px] mb-2" alt="" />
            <h3 className="text-[20px] text-[#959494] font-bold mb-2">
              Web Hosting
            </h3>
            <p className="text-[#959494] w-[90%]">
              We are offereing both windows and linux web hostings. We provide
              affordable hosting for both .NET and PHP
            </p>
          </div>
          <div className="flex flex-col text-center items-center">
            <img src="/bulksms/ic.webp" className="w-[50px] mb-2" alt="" />
            <h3 className="text-[20px] text-[#959494] font-bold mb-2">
              E-commerce Development
            </h3>
            <p className="text-[#959494] w-[90%]">
              We are having experience development team who work on Magento,
              Open Cart, Prestashop, Woo commerce etc.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-[40px] max-md:text-[30px] font-semibold text-center mt-10 mb-6">
          Transactional SMS: No-API Standard Route
        </h1>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-2 gap-4 max-md:gap-2 p-8 max-md:p-0">
          {cardData.slice(0, 4).map((item, index) => (
            <SingleItem
              key={index}
              title={item.title}
              price={item.price}
              features={item.features}
            />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-[40px] max-md:text-[30px] font-semibold text-center mt-10 mb-6">
          Promotional SMS - High Priority Route
        </h1>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-2 gap-4 max-md:gap-2 p-8 max-md:p-0">
          {cardData.slice(4, 8).map((item, index) => (
            <SingleItem
              key={index + 4}
              title={item.title}
              price={item.price}
              features={item.features}
            />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-[40px] max-md:text-[30px] font-semibold text-center mt-10 mb-6">
          Bulk SMS with API : With API Highest Priority Route
        </h1>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-2 gap-4 max-md:gap-2 p-8 max-md:p-0">
          {cardData.slice(8, 12).map((item, index) => (
            <SingleItem
              key={index + 8}
              title={item.title}
              price={item.price}
              features={item.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default BulkSMS;
