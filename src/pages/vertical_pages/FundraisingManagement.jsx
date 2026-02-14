import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaDonate, FaHandHoldingUsd, FaUsers, FaChartLine, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const FundraisingManagement = () => {
  const features = [
    {
      icon: <FaDonate className="text-4xl text-[#fb9c24]" />,
      title: "Donation Management",
      description: "Complete donation processing with recurring gifts, donor profiles, and receipts."
    },
    {
      icon: <FaHandHoldingUsd className="text-4xl text-[#fb9c24]" />,
      title: "Crowdfunding Platforms",
      description: "Build crowdfunding campaigns with goal tracking, social sharing, and updates."
    },
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "Donor CRM",
      description: "Manage donor relationships with engagement tracking and communication tools."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Campaign Analytics",
      description: "Track fundraising performance, donor retention, and campaign effectiveness."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Mobile Giving",
      description: "Mobile-optimized donation forms and apps for on-the-go contributions."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#fb9c24]" />,
      title: "Secure Payments",
      description: "PCI-compliant payment processing with multiple payment method support."
    }
  ];

  return (
    <GenericServicePage
      title="Fundraising Management Solutions"
      description="Empower nonprofits and causes with our fundraising platforms. We build donation management systems, crowdfunding platforms, and donor engagement tools that maximize fundraising impact."
      features={features}
      ctaText="Boost Fundraising Today!"
    />
  );
};

export default FundraisingManagement;
