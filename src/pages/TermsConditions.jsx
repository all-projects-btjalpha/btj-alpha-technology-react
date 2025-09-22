import React from 'react';
import { useEffect } from "react";


const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <main className="mt-[100px] px-4 md:px-0 pb-8">
      <div className="container mx-auto mt-10">
        <h1 className="text-center text-3xl font-semibold mb-6">Terms and Conditions</h1>
        <p className="mb-4">
          BTJ Alpha Technology Pvt. Ltd. respects your privacy and is committed to protecting your personal data.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
          you use our services, including our website, applications, and other offerings.
        </p>
        <p className="mb-6">
          By accessing or using our services, you agree to the practices described in this Privacy Policy. If
          you do not agree with the terms, please refrain from using our services.
        </p>

        <h3 className="text-xl font-semibold mt-6">1. Information We Collect</h3>
        <p className="mt-2">We may collect the following types of information:</p>
        <p className="mt-2"><strong>Personal Information:</strong> Name, email address, phone number, mailing address, payment details, and other contact details.</p>
        <p className="mt-2"><strong>Technical Data:</strong> IP address, browser type, device information, and usage statistics when you visit our website or use our applications.</p>
        <p className="mt-2"><strong>Cookies & Tracking Technologies:</strong> We use cookies and similar technologies to enhance user experience and analyze site traffic.</p>

        <h3 className="text-xl font-semibold mt-6">2. How We Use Your Information</h3>
        <p className="mt-2">We collect and use your data for the following purposes:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>To provide, operate, and maintain our services.</li>
          <li>To personalize and improve user experience.</li>
          <li>To process transactions and send important communications.</li>
          <li>To comply with legal obligations and enforce our policies.</li>
          <li>To prevent fraud and enhance security.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">3. Sharing Your Information</h3>
        <p className="mt-2">We do not sell or rent your personal information. However, we may share your data with:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Service Providers: For payment processing, hosting, analytics, or customer support.</li>
          <li>Legal Authorities: If required by law or to protect our legal rights.</li>
          <li>Business Transfers: In case of a merger, acquisition, or sale of assets.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">4. Data Security</h3>
        <p className="mt-2">We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

        <h3 className="text-xl font-semibold mt-6">5. Your Rights & Choices</h3>
        <p className="mt-2">Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Access, correction, or deletion of your information.</li>
          <li>Opt-out of marketing communications.</li>
          <li>Restrict or object to data processing.</li>
          <li>Withdraw consent where applicable.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">6. Third-Party Links & Services</h3>
        <p className="mt-2">Our website or applications may contain links to third-party websites. We are not responsible for their privacy practices, and we encourage you to review their policies before sharing any personal data.</p>

        <h3 className="text-xl font-semibold mt-6">7. Changes to This Policy</h3>
        <p className="mt-2">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date." Continued use of our services after changes are made constitutes your acceptance of the revised policy.</p>

        <h3 className="text-xl font-semibold mt-6">8. Contact Us</h3>
        <p className="mt-2">If you have questions about this policy, contact us at:</p>
        <p className="mt-1">BTJ Alpha Technology Private Limited</p>
        <p className="mt-1">Sector-2, Noida, UP, 201301</p>
        <p className="mt-1">info@btjalphatechnology.com</p>
        <p className="mt-1">0120-4525483</p>
      </div>
    </main>
  );
};

export default TermsAndConditions;
