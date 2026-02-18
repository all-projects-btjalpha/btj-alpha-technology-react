import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGavel, FaBalanceScale, FaFileAlt, FaShieldAlt, FaLandmark } from "react-icons/fa";

const TermsAndConditions = () => {
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
                Terms and<br />
                Conditions
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                BTJ Alpha Technology Pvt. Ltd. provides software development and digital marketing services. Our terms and conditions outline the framework for our business relationships and ensure legal compliance for all parties involved.
              </p>
            </div>

            {/* Right Illustration */}
            <div data-aos="fade-left" className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
                {/* Terms Conditions Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Terms Icon with gradient background */}
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaGavel className="text-9xl text-[#fb9c24]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaBalanceScale className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaFileAlt className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaShieldAlt className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaLandmark className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-aos="fade-up">
              Our Terms Framework
            </h2>

            <div className="space-y-8">
              <div data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-[#fb9c24] mt-6 mb-4 flex items-center">
                  <FaFileAlt className="mr-3" />
                  1. Nature of Service & Mandatory eKYC
                </h3>
                <p className="mt-2 text-gray-700">
                  BTJ Alpha Technology Pvt. Ltd. provides software development and
                  digital marketing services. Before project commencement, clients
                  must complete a <strong>Mandatory eKYC process</strong> by providing
                  Business PAN, GST, and Identity Proof of the Authorized Signatory.
                  We reserve the right to refuse service to any business that fails
                  verification or operates in prohibited industries.
                </p>
              </div>

              <div data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-[#fb9c24] mt-6 mb-4 flex items-center">
                  <FaShieldAlt className="mr-3" />
                  2. Client Responsibility & Legal Compliance
                </h3>
                <p className="mt-2 text-gray-700">
                  The Client warrants that the business model, content, and data
                  processed through the developed platform are legal under Indian Law
                  (including but not limited to the IT Act 2000, DPDP Act 2023, and
                  RBI guidelines). The Client is solely responsible for obtaining
                  necessary licenses for fintech, gaming, healthcare, or e-commerce
                  operations.
                </p>
              </div>

              <div data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-[#fb9c24] mt-6 mb-4 flex items-center">
                  <FaBalanceScale className="mr-3" />
                  3. Post-Deployment Liability Disclaimer (IMPORTANT)
                </h3>
                <div className="mt-2 p-6 bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] border-l-4 border-[#fb9c24] shadow-sm rounded-lg">
                  <p className="font-medium text-gray-800">
                    Upon the final deployment and hand-over of the source
                    code/credentials, BTJ Alpha Technology Pvt. Ltd. shall have NO
                    responsibility or liability for:
                  </p>
                  <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                    <li>
                      Any illegal activity conducted by the Client or its users on the
                      platform.
                    </li>
                    <li>
                      Data breaches caused by the Client's hosting environment or
                      third-party APIs.
                    </li>
                    <li>
                      Financial losses, business outcomes, or regulatory penalties faced
                      by the Client.
                    </li>
                    <li>
                      Unauthorized modifications made to the code by the Client or third
                      parties after hand-over.
                    </li>
                  </ul>
                </div>
              </div>

              <div data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-[#fb9c24] mt-6 mb-4 flex items-center">
                  <FaLandmark className="mr-3" />
                  4. Intellectual Property
                </h3>
                <p className="mt-2 text-gray-700">
                  Ownership of the source code is transferred to the Client only upon
                  100% clearance of the agreed project fees. The Agency retains the
                  right to showcase the project in its portfolio unless a
                  Non-Disclosure Agreement (NDA) is signed separately.
                </p>
              </div>

              <div data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-[#fb9c24] mt-6 mb-4 flex items-center">
                  <FaShieldAlt className="mr-3" />
                  5. Indemnification
                </h3>
                <p className="mt-2 text-gray-700">
                  The Client agrees to indemnify, defend, and hold harmless BTJ Alpha
                  Technology Pvt. Ltd. and its directors from any legal claims,
                  lawsuits, or government actions arising from the Client's use of the
                  software for fraudulent, defamatory, or illegal purposes.
                </p>
              </div>

              <div data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-[#fb9c24] mt-6 mb-4 flex items-center">
                  <FaGavel className="mr-3" />
                  6. Governing Law & Jurisdiction
                </h3>
                <p className="mt-2 text-gray-700">
                  These terms are governed by the laws of India. Any disputes shall be
                  subject to the exclusive jurisdiction of the courts in{" "}
                  <strong>Noida, Uttar Pradesh</strong>.
                </p>
              </div>

              <div data-aos="fade-up" className="mt-10 p-6 border-t border-gray-300 bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] rounded-lg">
                <p className="font-bold text-lg text-[#fb9c24]">Contact for Legal Inquiries:</p>
                <p className="text-gray-700">Legal Dept: info@btjalphatechnology.com | 0120-4525483</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;