import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShieldAlt, FaFileContract, FaUserShield, FaGavel } from "react-icons/fa";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Privacy Policy<br />
                (DPDP Act Compliant)
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                BTJ Alpha Technology Pvt. Ltd. acts as a Data Processor when developing applications for clients and a Data Fiduciary regarding our direct client information. This policy is aligned with the Digital Personal Data Protection (DPDP) Act, 2023.
              </p>
            </div>

            {/* Right Illustration */}
            <div data-aos="fade-left" className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
                {/* Privacy Policy Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Privacy Icon with gradient background */}
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaShieldAlt className="text-9xl text-[#fb9c24]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaFileContract className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaUserShield className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaGavel className="text-3xl text-[#10B981]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-aos="fade-up">
              Our Privacy Commitment
            </h2>

            <div className="space-y-8">
              <div data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-[#fb9c24] mt-6 mb-4 flex items-center">
                  <FaFileContract className="mr-3" />
                  1. Data Collection & Purpose
                </h3>
                <p className="mt-2 text-gray-700">
                  We collect personal identifiers (Name, PAN, Aadhaar for eKYC, Email,
                  Phone) solely for the purpose of business verification, invoicing, and
                  project communication. We do not process data for any purpose other
                  than what is explicitly consented to by the client.
                </p>
              </div>

              <div data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-[#fb9c24] mt-6 mb-4 flex items-center">
                  <FaUserShield className="mr-3" />
                  2. Data Processing on Behalf of Clients
                </h3>
                <p className="mt-2 text-gray-700">
                  For projects involving user data (e-commerce, apps), the Client is the
                  "Data Fiduciary" responsible for user consent. BTJ Alpha Technology
                  provides the technical infrastructure but does not "own" the end-user
                  data.
                </p>
              </div>

              <div data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-[#fb9c24] mt-6 mb-4 flex items-center">
                  <FaShieldAlt className="mr-3" />
                  3. Data Retention & Erasure
                </h3>
                <p className="mt-2 text-gray-700">
                  In compliance with Section 12 of the DPDP Act, we shall erase personal
                  data once the purpose of collection is fulfilled (i.e., project
                  completion and tax audit period), unless required otherwise by law.
                </p>
              </div>

              <div data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-[#fb9c24] mt-6 mb-4 flex items-center">
                  <FaGavel className="mr-3" />
                  4. Grievance Redressal
                </h3>
                <p className="mt-2 text-gray-700">
                  In accordance with the{" "}
                  <strong>Information Technology Act, 2000</strong> and the{" "}
                  <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>,
                  the contact details of the Grievance Officer for any complaints or
                  concerns regarding data processing and privacy are provided below:
                </p>
                
                <div className="mt-4 p-6 bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] border-l-4 border-[#fb9c24] shadow-sm rounded-lg">
                  <p className="mb-2">
                    <strong className="text-[#fb9c24]">Name:</strong> Tanya Gupta
                  </p>
                  <p className="mb-2">
                    <strong className="text-[#fb9c24]">Designation:</strong> Managing Director & Grievance Officer
                  </p>
                  <p className="mb-2">
                    <strong className="text-[#fb9c24]">Email:</strong> info@btjalphatechnology.com
                  </p>
                  <p className="mb-2">
                    <strong className="text-[#fb9c24]">Address:</strong> BTJ Alpha Technology Private Limited, D
                    Block, Sector-2, Noida, UP, 201301
                  </p>
                </div>
                
                <p className="mt-4 text-gray-600 italic">
                  Note: We will acknowledge any grievance within 24 hours and aim to
                  resolve all valid concerns within 15 days of receipt.
                </p>
              </div>

              <div data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-[#fb9c24] mt-6 mb-4 flex items-center">
                  <FaShieldAlt className="mr-3" />
                  5. Security Practices
                </h3>
                <p className="mt-2 text-gray-700">
                  We follow ISO 27001 standards and Section 43A of the IT Act 2000 to
                  ensure "Reasonable Security Practices." However, clients are advised
                  to implement their own security audits post-deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;