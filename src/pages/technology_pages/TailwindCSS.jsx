import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { SiTailwindcss } from 'react-icons/si';
import { FaRocket, FaPalette, FaMobileAlt, FaCode, FaCog } from 'react-icons/fa';

const TailwindCSS = () => {
  const features = [
    {
      icon: <SiTailwindcss className="text-4xl text-[#06b6d4]" />,
      title: "Utility-First Approach",
      description: "Build designs rapidly with pre-built utility classes without writing custom CSS."
    },
    {
      icon: <FaRocket className="text-4xl text-[#06b6d4]" />,
      title: "Rapid Development",
      description: "Accelerate development with intuitive class names and instant styling."
    },
    {
      icon: <FaPalette className="text-4xl text-[#06b6d4]" />,
      title: "Customizable",
      description: "Fully customizable design system with Tailwind configuration file."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#06b6d4]" />,
      title: "Responsive Design",
      description: "Mobile-first responsive utilities for all screen sizes."
    },
    {
      icon: <FaCode className="text-4xl text-[#06b6d4]" />,
      title: "Component Friendly",
      description: "Perfect for component-based frameworks like React, Vue, and Angular."
    },
    {
      icon: <FaCog className="text-4xl text-[#06b6d4]" />,
      title: "PurgeCSS Integration",
      description: "Automatically remove unused CSS for optimal production bundle size."
    }
  ];

  return (
    <GenericServicePage
      title="Tailwind CSS Development"
      description="Build modern, responsive UIs with Tailwind CSS. Our team creates fast, maintainable, and beautiful interfaces using Tailwind's utility-first approach and powerful design system."
      features={features}
      ctaText="Start Building with Tailwind!"
    />
  );
};

export default TailwindCSS;
