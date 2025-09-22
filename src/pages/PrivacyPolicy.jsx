// PrivacyPolicy.jsx
import React from 'react';
import { useEffect } from "react";

const PrivacyPolicy = () => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <main className="mt-24 pb-8">
      <div className="container mx-auto px-4 mt-10">
        <div className="mt-10">
          <h1 className="text-center text-3xl font-semibold mt-20">Privacy Policy</h1>
          <p className="mt-4">
            BTJ Alpha Technology Pvt. Ltd. respects your privacy and is committed to protecting
            your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you use our services, including our website, applications, and other offerings.
          </p>

          <h3 className="mt-6 text-xl font-semibold">1. Information We Collect</h3>
          <p className="mt-2">We may collect and process the following types of information:</p>
          <p className="mt-2">
            <strong>Personal Information:</strong> Name, email address, phone number, billing
            details, etc., provided during account creation or communication with us.
          </p>
          <p className="mt-2">
            <strong>Technical Data:</strong> IP address, browser type, operating system, device information, and
            usage data collected automatically.
          </p>
          <p className="mt-2">
            <strong>Transactional Data:</strong> Details of payments and purchases, if applicable.
          </p>
          <p className="mt-2">
            <strong>Other Information:</strong> Any additional data provided by you through forms, surveys, or customer support.
          </p>

          <h3 className="mt-6 text-xl font-semibold">2. How We Use Your Information</h3>
          <p className="mt-2">We use your information for the following purposes:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>To provide, operate, and maintain our services.</li>
            <li>To process transactions and send related information.</li>
            <li>To personalize your experience and improve our services.</li>
            <li>To send you marketing and promotional communications, where permitted.</li>
            <li>To respond to your inquiries and provide customer support.</li>
            <li>To detect and prevent fraud, abuse, or other harmful activities.</li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold">3. Sharing Your Information</h3>
          <p className="mt-2">We do not sell or rent your personal information. However, we may share your data with:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Service Providers:</strong> For payment processing, hosting, analytics, or customer support.</li>
            <li><strong>Legal Authorities:</strong> If required by law or to protect our legal rights.</li>
            <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or sale of assets.</li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold">4. Data Security</h3>
          <p className="mt-2">
            We implement industry-standard security measures to protect your data
            from unauthorized access, disclosure, alteration, or destruction. However, no method
            of transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="mt-6 text-xl font-semibold">5. Your Rights</h3>
          <p className="mt-2">Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Access, correction, or deletion of your information.</li>
            <li>Restriction or objection to processing.</li>
            <li>Data portability.</li>
            <li>Withdrawal of consent where processing is based on consent.</li>
          </ul>
          <p className="mt-2">To exercise your rights, contact us at: 0120-4525483, info@btjalphatechnology.com</p>

          <h3 className="mt-6 text-xl font-semibold">6. Cookies and Tracking Technologies</h3>
          <p className="mt-2">
            We use cookies and similar technologies to enhance user experience, analyze traffic, and for advertising purposes.
            You can manage your cookie preferences through your browser settings.
          </p>

          <h3 className="mt-6 text-xl font-semibold">7. Third-Party Links</h3>
          <p className="mt-2">
            Our services may contain links to third-party websites. We are not responsible for
            the privacy practices of such sites. Please review their policies separately.
          </p>

          <h3 className="mt-6 text-xl font-semibold">8. Changes to This Privacy Policy</h3>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. Changes will be notified via BTJ Alpha Technology Pvt. Ltd.
            and the updated policy will be effective upon posting.
          </p>

          <h3 className="mt-6 text-xl font-semibold">9. Contact Us</h3>
          <p className="mt-2">If you have questions about this policy, contact us at:</p>
          <p className="mt-2 font-medium">BTJ Alpha Technology Private Limited</p>
          <p className="mt-1">Sector-2, Noida, UP, 201301</p>
          <p className="mt-1">info@btjalphatechnology.com</p>
          <p className="mt-1">0120-4525483</p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
