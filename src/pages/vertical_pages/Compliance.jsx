import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaShieldAlt, FaFileAlt, FaCheckCircle, FaExclamationTriangle, FaChartBar, FaLock } from 'react-icons/fa';

const Compliance = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl text-[#fb9c24]" />,
      title: "Regulatory Compliance",
      description: "Ensure compliance with GDPR, HIPAA, SOC 2, ISO, and industry-specific regulations."
    },
    {
      icon: <FaFileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Document Management",
      description: "Centralized repository for compliance documents, policies, and audit trails."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-[#fb9c24]" />,
      title: "Audit Management",
      description: "Streamlined audit workflows with automated scheduling and evidence collection."
    },
    {
      icon: <FaExclamationTriangle className="text-4xl text-[#fb9c24]" />,
      title: "Risk Assessment",
      description: "Identify, assess, and mitigate compliance risks with automated risk management tools."
    },
    {
      icon: <FaChartBar className="text-4xl text-[#fb9c24]" />,
      title: "Compliance Reporting",
      description: "Real-time dashboards and reports for compliance status and regulatory requirements."
    },
    {
      icon: <FaLock className="text-4xl text-[#fb9c24]" />,
      title: "Data Security",
      description: "Encryption, access controls, and security measures to protect sensitive compliance data."
    }
  ];

  return (
    <GenericServicePage
      title="Compliance Management Solutions"
      description="Stay compliant with confidence using our comprehensive compliance management systems. We help organizations meet regulatory requirements, reduce risks, and maintain audit readiness."
      features={features}
      ctaText="Ensure Compliance Today!"
    />
  );
};

export default Compliance;
