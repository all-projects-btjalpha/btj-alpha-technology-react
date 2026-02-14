import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaBootstrap, FaLayerGroup, FaMobileAlt, FaPuzzlePiece, FaRocket, FaCode } from 'react-icons/fa';

const Bootstrap = () => {
  const features = [
    {
      icon: <FaBootstrap className="text-4xl text-[#7952b3]" />,
      title: "Pre-built Components",
      description: "Extensive library of ready-to-use components for rapid UI development."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#7952b3]" />,
      title: "Responsive Grid System",
      description: "12-column responsive grid system for flexible, mobile-first layouts."
    },
    {
      icon: <FaPuzzlePiece className="text-4xl text-[#7952b3]" />,
      title: "Rich Component Library",
      description: "Buttons, forms, modals, carousels, and more pre-styled components."
    },
    {
      icon: <FaLayerGroup className="text-4xl text-[#7952b3]" />,
      title: "Cross-Browser Compatible",
      description: "Consistent appearance and functionality across all modern browsers."
    },
    {
      icon: <FaRocket className="text-4xl text-[#7952b3]" />,
      title: "Quick Development",
      description: "Build professional websites quickly with Bootstrap's framework."
    },
    {
      icon: <FaCode className="text-4xl text-[#7952b3]" />,
      title: "Customizable",
      description: "Easily customize Bootstrap with Sass variables and custom themes."
    }
  ];

  return (
    <GenericServicePage
      title="Bootstrap Development"
      description="Create responsive, mobile-first websites with Bootstrap. Our developers build professional, consistent, and fast-loading web applications using Bootstrap's powerful framework."
      features={features}
      ctaText="Build with Bootstrap Today!"
    />
  );
};

export default Bootstrap;
