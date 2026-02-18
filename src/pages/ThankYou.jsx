import { useEffect } from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 py-20 md:py-24">
      <div className="max-w-3xl w-full text-center">
        {/* Thank You Message */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12">
          Your message has been successfully sent.
        </p>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-12 mb-10 max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start text-left">
              <div className="flex-shrink-0 mr-5">
                <div className="w-12 h-12 bg-[#fb9c24] bg-opacity-10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#fb9c24]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  We've received your inquiry
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Our team will review your message and get back to you shortly.
                </p>
              </div>
            </div>

            <div className="flex items-start text-left">
              <div className="flex-shrink-0 mr-5">
                <div className="w-12 h-12 bg-[#fb9c24] bg-opacity-10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#fb9c24]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Response Time
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Typically within 24 hours during business days.
                </p>
              </div>
            </div>

            <div className="flex items-start text-left">
              <div className="flex-shrink-0 mr-5">
                <div className="w-12 h-12 bg-[#fb9c24] bg-opacity-10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#fb9c24]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Check Your Email
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  We'll send a confirmation email with next steps.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#fb9c24] text-white text-lg font-semibold rounded-xl hover:bg-[#e68b1a] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-[#fb9c24] hover:text-[#fb9c24] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            View Our Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
