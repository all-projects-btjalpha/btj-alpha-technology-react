import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="mt-24 pb-12">
      <div className="container mx-auto px-4 mt-10 text-gray-800">
        <h1 className="text-center text-3xl font-bold mt-20">
          Privacy Policy (DPDP Act Compliant)
        </h1>

        <p className="mt-4">
          BTJ Alpha Technology Pvt. Ltd. acts as a{" "}
          <strong>Data Processor</strong> when developing applications for
          clients and a <strong>Data Fiduciary</strong> regarding our direct
          client information. This policy is aligned with the{" "}
          <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>.
        </p>

        <h3 className="mt-6 text-xl font-semibold">
          1. Data Collection & Purpose
        </h3>
        <p className="mt-2">
          We collect personal identifiers (Name, PAN, Aadhaar for eKYC, Email,
          Phone) solely for the purpose of business verification, invoicing, and
          project communication. We do not process data for any purpose other
          than what is explicitly consented to by the client.
        </p>

        <h3 className="mt-6 text-xl font-semibold">
          2. Data Processing on Behalf of Clients
        </h3>
        <p className="mt-2">
          For projects involving user data (e-commerce, apps), the Client is the
          "Data Fiduciary" responsible for user consent. BTJ Alpha Technology
          provides the technical infrastructure but does not "own" the end-user
          data.
        </p>

        <h3 className="mt-6 text-xl font-semibold">
          3. Data Retention & Erasure
        </h3>
        <p className="mt-2">
          In compliance with Section 12 of the DPDP Act, we shall erase personal
          data once the purpose of collection is fulfilled (i.e., project
          completion and tax audit period), unless required otherwise by law.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-red-700">
          4. Grievance Redressal
        </h3>
        <p className="mt-2">
          In accordance with the{" "}
          <strong>Information Technology Act, 2000</strong> and the{" "}
          <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>,
          the contact details of the Grievance Officer for any complaints or
          concerns regarding data processing and privacy are provided below:
        </p>
        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-red-700 shadow-sm">
          <p className="mb-1">
            <strong>Name:</strong> Tanya Gupta
          </p>
          <p className="mb-1">
            <strong>Designation:</strong> Managing Director & Grievance Officer
          </p>
          <p className="mb-1">
            <strong>Email:</strong> info@btjalphatechnology.com
          </p>
          <p className="mb-1">
            <strong>Address:</strong> BTJ Alpha Technology Private Limited, D
            Block, Sector-2, Noida, UP, 201301
          </p>
        </div>
        <p className="mt-4 text-sm text-gray-600 italic">
          Note: We will acknowledge any grievance within 24 hours and aim to
          resolve all valid concerns within 15 days of receipt.
        </p>
        <h3 className="mt-6 text-xl font-semibold">5. Security Practices</h3>
        <p className="mt-2">
          We follow ISO 27001 standards and Section 43A of the IT Act 2000 to
          ensure "Reasonable Security Practices." However, clients are advised
          to implement their own security audits post-deployment.
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
