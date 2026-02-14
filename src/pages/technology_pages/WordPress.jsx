import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaWordpress, FaCode, FaPuzzlePiece, FaPalette, FaRocket, FaSearch } from 'react-icons/fa';

const WordPress = () => {
  const features = [
    {
      icon: <FaWordpress className="text-4xl text-[#21759b]" />,
      title: "Easy Content Management",
      description: "User-friendly CMS interface for managing content without technical knowledge."
    },
    {
      icon: <FaPuzzlePiece className="text-4xl text-[#21759b]" />,
      title: "Vast Plugin Library",
      description: "50,000+ plugins for adding functionality - from SEO to e-commerce."
    },
    {
      icon: <FaPalette className="text-4xl text-[#21759b]" />,
      title: "Thousands of Themes",
      description: "Extensive theme library for customizing your website's appearance."
    },
    {
      icon: <FaCode className="text-4xl text-[#21759b]" />,
      title: "Highly Customizable",
      description: "Build custom themes and plugins for unique website functionality."
    },
    {
      icon: <FaSearch className="text-4xl text-[#21759b]" />,
      title: "SEO Friendly",
      description: "Built-in SEO features and plugins like Yoast for better search rankings."
    },
    {
      icon: <FaRocket className="text-4xl text-[#21759b]" />,
      title: "Quick Setup",
      description: "Get your website up and running quickly with WordPress's easy installation."
    }
  ];

  return (
    <GenericServicePage
      title="WordPress Development"
      description="Create powerful websites with WordPress. Our developers build custom themes, plugins, and WooCommerce stores using WordPress's flexible platform."
      features={features}
      ctaText="Build with WordPress Today!"
    />
  );
};

export default WordPress;
