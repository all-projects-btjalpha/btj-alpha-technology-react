import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="mt-[100px] px-4 md:px-0 pb-12">
      <div className="container mx-auto mt-10 text-gray-800 leading-relaxed">
        <h1 className="text-center text-3xl font-bold mb-8">
          Terms and Conditions
        </h1>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">
            1. Nature of Service & Mandatory eKYC
          </h3>
          <p className="mt-2">
            BTJ Alpha Technology Pvt. Ltd. provides software development and
            digital marketing services. Before project commencement, clients
            must complete a <strong>Mandatory eKYC process</strong> by providing
            Business PAN, GST, and Identity Proof of the Authorized Signatory.
            We reserve the right to refuse service to any business that fails
            verification or operates in prohibited industries.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">
            2. Client Responsibility & Legal Compliance
          </h3>
          <p className="mt-2">
            The Client warrants that the business model, content, and data
            processed through the developed platform are legal under Indian Law
            (including but not limited to the IT Act 2000, DPDP Act 2023, and
            RBI guidelines). The Client is solely responsible for obtaining
            necessary licenses for fintech, gaming, healthcare, or e-commerce
            operations.
          </p>
        </section>

        <section className="mb-6 bg-yellow-50 p-4 border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold text-yellow-800">
            3. Post-Deployment Liability Disclaimer (IMPORTANT)
          </h3>
          <p className="mt-2 font-medium">
            Upon the final deployment and hand-over of the source
            code/credentials, BTJ Alpha Technology Pvt. Ltd. shall have NO
            responsibility or liability for:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
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
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">4. Intellectual Property</h3>
          <p className="mt-2">
            Ownership of the source code is transferred to the Client only upon
            100% clearance of the agreed project fees. The Agency retains the
            right to showcase the project in its portfolio unless a
            Non-Disclosure Agreement (NDA) is signed separately.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">5. Indemnification</h3>
          <p className="mt-2">
            The Client agrees to indemnify, defend, and hold harmless BTJ Alpha
            Technology Pvt. Ltd. and its directors from any legal claims,
            lawsuits, or government actions arising from the Client's use of the
            software for fraudulent, defamatory, or illegal purposes.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">
            6. Governing Law & Jurisdiction
          </h3>
          <p className="mt-2">
            These terms are governed by the laws of India. Any disputes shall be
            subject to the exclusive jurisdiction of the courts in{" "}
            <strong>Noida, Uttar Pradesh</strong>.
          </p>
        </section>

        <div className="mt-10 p-4 border-t border-gray-300">
          <p className="font-bold">Contact for Legal Inquiries:</p>
          <p>Legal Dept: info@btjalphatechnology.com | 0120-4525483</p>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
