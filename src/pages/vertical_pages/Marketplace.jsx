import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaShoppingCart, FaStore, FaCreditCard, FaSearch, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const Marketplace = () => {
  const features = [
    {
      icon: <FaShoppingCart className="text-4xl text-[#fb9c24]" />,
      title: "Multi-Vendor Platforms",
      description: "Build marketplaces connecting multiple sellers with buyers on a single platform."
    },
    {
      icon: <FaStore className="text-4xl text-[#fb9c24]" />,
      title: "Vendor Management",
      description: "Complete vendor onboarding, inventory management, and commission systems."
    },
    {
      icon: <FaCreditCard className="text-4xl text-[#fb9c24]" />,
      title: "Payment Integration",
      description: "Secure payment gateways with escrow, split payments, and multi-currency support."
    },
    {
      icon: <FaSearch className="text-4xl text-[#fb9c24]" />,
      title: "Advanced Search & Filters",
      description: "Powerful search functionality with filters, categories, and personalized recommendations."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#fb9c24]" />,
      title: "Trust & Safety",
      description: "Review systems, seller verification, and fraud prevention mechanisms."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Seller Analytics",
      description: "Comprehensive dashboards for sellers to track sales, orders, and performance."
    }
  ];

  return (
    <GenericServicePage
      title="Marketplace Solutions"
      description="Launch your multi-vendor marketplace with our robust e-commerce platforms. We build scalable marketplaces like Amazon, Etsy, and Airbnb that connect buyers and sellers seamlessly."
      features={features}
      ctaText="Build Your Marketplace!"
    />
  );
};

export default Marketplace;
