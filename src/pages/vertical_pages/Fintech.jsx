import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaWallet, FaMobileAlt, FaShieldAlt, FaChartLine, FaUniversity, FaCreditCard } from 'react-icons/fa';

const Fintech = () => {
  const features = [
    {
      icon: <FaWallet className="text-4xl text-[#fb9c24]" />,
      title: "Digital Wallets",
      description: "Secure digital wallet solutions for seamless money management and transactions."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Mobile Banking Apps",
      description: "Feature-rich mobile banking applications with UPI, bill payments, and transfers."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#fb9c24]" />,
      title: "Secure Payments",
      description: "PCI-DSS compliant payment gateways with multi-layer security and fraud detection."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Investment Platforms",
      description: "Trading and investment platforms for stocks, mutual funds, and cryptocurrency."
    },
    {
      icon: <FaUniversity className="text-4xl text-[#fb9c24]" />,
      title: "Lending Solutions",
      description: "Digital lending platforms with credit scoring, KYC verification, and loan management."
    },
    {
      icon: <FaCreditCard className="text-4xl text-[#fb9c24]" />,
      title: "Payment Processing",
      description: "Fast, reliable payment processing systems supporting multiple payment methods."
    }
  ];

  return (
    <GenericServicePage
      title="Fintech Solutions"
      description="Build the future of finance with our innovative fintech solutions. We create secure, scalable, and user-friendly financial applications that revolutionize banking, payments, and investment experiences."
      features={features}
      ctaText="Innovate Finance with Us!"
    />
  );
};

export default Fintech;
