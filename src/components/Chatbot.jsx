import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const faqData = [
  {
    q: "IT & Software Development",
    a: "Great choice!🚀 We specialize in custom software development, enterprise solutions, and cutting-edge technology implementations. Our expert team delivers scalable, secure, and high-performance applications tailored to your business needs.",
  },
  {
    q: "Website Design & Development",
    a: "Perfect!🎨 web design and development services create stunning, responsive websites that drive engagement and conversions. We build modern, user-friendly websites with the latest technologies and SEO best practices.",
  },
  {
    q: "Digital Marketing Services",
    a: "Excellent choice!📈 digital marketing experts help you reach your target audience through SEO, social media marketing, Google Ads, content marketing, and data-driven strategies that boost your online visibility and ROI.",
  },
  {
    q: "Cloud & DevOps Solutions",
    a: "Smart decision!☁ We provide comprehensive cloud migration, infrastructure management, and DevOps services. Scale your operations efficiently with AWS, Azure, or Google Cloud solutions and automated deployment pipelines.",
  },
  {
    q: "Mobile App Development",
    a: "Great pick!📱 Our mobile app development team creates intuitive, high-performance apps for iOS and Android platforms. From concept to launch, we deliver engaging mobile experiences that connect with your users.",
  },
  {
    q: "Talk to an Expert",
    a: "Wonderful!🤝 Let's connect you with our technology expert who can understand your specific requirements and provide a customized solution. You can reach us at info@btjalphatechnology.com or call +91-9310228489.",
  },
];

export default function FAQChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [currentStep, setCurrentStep] = useState('question'); // 'question', 'name', 'name-thanks', 'email', 'email-thanks', 'phone', 'phone-thanks'
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 max-sm:bottom-2 right-4 max-sm:right-2 z-50 bg-[#fb9c24] text-white rounded-full p-4 max-sm:p-2 shadow-lg transition-transform duration-300 hover:scale-105"
      >
        💬
      </button>

      {/* Chatbot Window with animation */}
      <div
          className={`fixed bottom-2 z-[9999] max-sm:bottom-0 right-2 max-sm:right-0 w-96 max-sm:w-full bg-white rounded-lg shadow-xl border flex flex-col overflow-hidden transform transition-all duration-300 origin-bottom-right ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          }`}
        >
          {/* Header */}
          <div className="flex w-full z-50 justify-between items-start text-center p-3 bg-gradient-to-r from-blue-900 to-blue-700">
            <div className="text-white font-semibold py-2">BTJ Alpha Technology Assistant</div>
            <IoIosArrowDown
              className="text-white font-semibold text-[20px] mt-2 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Content */}
          <div className="p-3 flex-1 overflow-auto z-50">
            {/* Welcome message */}

            {!selectedQuestion ? (
              <>
                <div className="flex flex-row space-y-2 mb-4 z-50">
                  <img
                    src="/logo.jpg"
                    className="w-5 self-end mb-2 mr-2"
                    alt=""
                  />
                  <div className="flex gap-2 flex-col">
                    <div className="bg-gray-100 rounded-lg px-4 py-4 w-fit">
                      <p>👋 Hello! Welcome to BTJ Alpha Technology</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg px-4 py-4 w-fit">
                      <p>We provide IT Development, Web Solutions & Digital Marketing Services.</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg px-4 py-4 w-fit">
                      <p>How can we help you today?</p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2.5 h-[240px] text-start flex flex-col items-end">
                  {faqData.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedQuestion(item);
                        setCurrentStep('name');
                        setInputValue('');
                      }}
                      className="p-2.5 pl-3 bg-white border border-blue-700 font-semibold rounded-[20px] w-[280px] max-sm:w-[80%] text-blue-700 leading-5 cursor-pointer hover:bg-blue-700 hover:text-white transition-colors"
                    >
                      {item.q}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="text-start space-y-4">
                <div className="flex flex-row space-y-2 mb-4">
                  <img
                    src="/logo.jpg"
                    className="w-5 self-end mb-2 mr-2"
                    alt=""
                  />
                  <div className="flex gap-2 flex-col">
                    <div className="bg-gray-100 rounded-lg px-4 py-4 w-fit">
                      <p>👋 Hello! Welcome to BTJ Alpha Technology</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg px-4 py-4 w-fit">
                      <p>We provide IT Development, Web Solutions & Digital Marketing Services.</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg px-4 py-4 w-fit">
                      <p>How can we help you today?</p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3  max-sm:h-[70%] text-start flex flex-col items-end">
                  <li
                    key={1}
                    className="p-2.5 pl-3 bg-white border border-blue-700 font-semibold rounded-[20px] w-[280px] max-sm:w-[80%] text-blue-700 leading-5 cursor-pointer hover:bg-blue-700 hover:text-white transition-colors"
                  >
                    {selectedQuestion.q}
                  </li>
                </ul>
                <div className="flex flex-row mb-4">
                  <img
                    src="/logo.jpg"
                    className="w-5 self-end mb-3 mr-2"
                    alt=""
                  />
                  <div className="bg-gray-100 rounded-lg px-4 py-4 w-[85%]">
                    <p className="leading-5">{selectedQuestion.a}</p>
                  </div>
                </div>
                
                {/* Step-based user input */}
                {currentStep === 'name' && (
                  <div className="flex flex-row mb-4">
                    <img
                      src="/logo.jpg"
                      className="w-5 self-end mb-3 mr-2"
                      alt=""
                    />
                    <div className="bg-gray-100 rounded-lg px-4 py-4 w-[85%]">
                      <p className="leading-5">What is your name?</p>
                    </div>
                  </div>
                )}
                
                {currentStep === 'name' && (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter your name"
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    />
                    <button
                      onClick={() => {
                        setUserData({...userData, name: inputValue});
                        setInputValue('');
                        setCurrentStep('name-thanks');
                      }}
                      disabled={!inputValue.trim()}
                      className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm disabled:opacity-50"
                    >
                      Submit
                    </button>
                  </div>
                )}
                
                {currentStep === 'name-thanks' && (
                  <div className="flex flex-row mb-4">
                    <img
                      src="/logo.jpg"
                      className="w-5 self-end mb-3 mr-2"
                      alt=""
                    />
                    <div className="bg-gray-100 rounded-lg px-4 py-4 w-[85%]">
                      <p className="leading-5">Thank you {userData.name}!</p>
                    </div>
                  </div>
                )}
                
                {currentStep === 'name-thanks' && (
                  <div className="flex flex-row mb-4">
                    <img
                      src="/logo.jpg"
                      className="w-5 self-end mb-3 mr-2"
                      alt=""
                    />
                    <div className="bg-gray-100 rounded-lg px-4 py-4 w-[85%]">
                      <p className="leading-5">What is your email ID?</p>
                    </div>
                  </div>
                )}
                
                {currentStep === 'name-thanks' && (
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    />
                    <button
                      onClick={() => {
                        setUserData({...userData, email: inputValue});
                        setInputValue('');
                        setCurrentStep('email-thanks');
                      }}
                      disabled={!inputValue.trim()}
                      className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm disabled:opacity-50"
                    >
                      Submit
                    </button>
                  </div>
                )}
                
                {currentStep === 'email-thanks' && (
                  <div className="flex flex-row mb-4">
                    <img
                      src="/logo.jpg"
                      className="w-5 self-end mb-3 mr-2"
                      alt=""
                    />
                    <div className="bg-gray-100 rounded-lg px-4 py-4 w-[85%]">
                      <p className="leading-5">Thank you for your email {userData.email}!</p>
                    </div>
                  </div>
                )}
                
                {currentStep === 'email-thanks' && (
                  <div className="flex flex-row mb-4">
                    <img
                      src="/logo.jpg"
                      className="w-5 self-end mb-3 mr-2"
                      alt=""
                    />
                    <div className="bg-gray-100 rounded-lg px-4 py-4 w-[85%]">
                      <p className="leading-5">What is your mobile number?</p>
                    </div>
                  </div>
                )}
                
                {currentStep === 'email-thanks' && (
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter your phone number"
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    />
                    <button
                      onClick={() => {
                        setUserData({...userData, phone: inputValue});
                        setInputValue('');
                        setCurrentStep('phone-thanks');
                      }}
                      disabled={!inputValue.trim()}
                      className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm disabled:opacity-50"
                    >
                      Submit
                    </button>
                  </div>
                )}
                
                {currentStep === 'phone-thanks' && (
                  <div className="flex flex-row mb-4">
                    <img
                      src="/logo.jpg"
                      className="w-5 self-end mb-3 mr-2"
                      alt=""
                    />
                    <div className="bg-gray-100 rounded-lg px-4 py-4 w-[85%]">
                      <p className="leading-5">Thank you for your information {userData.name}! We will contact you soon.</p>
                    </div>
                  </div>
                )}
                
                {/* <button
                  onClick={() => {
                    setSelectedQuestion(null);
                    setCurrentStep('question');
                    setUserData({ name: '', email: '', phone: '' });
                    setInputValue('');
                  }}
                  className="text-sm text-blue-700 underline"
                >
                  ← Return to Menu
                </button> */}
                
                <button
                  onClick={() => {
                    setSelectedQuestion(null);
                    setCurrentStep('question');
                    setUserData({ name: '', email: '', phone: '' });
                    setInputValue('');
                  }}
                  className="text-sm text-blue-700 underline"
                >
                  ← Return to Menu
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-2 text-xs text-gray-500 border-t text-center">
            Powered by BTJ Alpha Technology Pvt. Ltd.
          </div>
        </div>
    </>
  );
}
