import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaHtml5, FaCode, FaMobileAlt, FaSearch, FaAccessibleIcon, FaRocket } from 'react-icons/fa';

const HTML5 = () => {
  const features = [
    {
      icon: <FaHtml5 className="text-4xl text-[#e34f26]" />,
      title: "Semantic HTML",
      description: "Modern semantic elements for better structure, accessibility, and SEO optimization."
    },
    {
      icon: <FaCode className="text-4xl text-[#e34f26]" />,
      title: "Multimedia Support",
      description: "Native audio and video support without plugins for rich media experiences."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#e34f26]" />,
      title: "Responsive Design",
      description: "Built-in features for creating responsive, mobile-friendly websites."
    },
    {
      icon: <FaSearch className="text-4xl text-[#e34f26]" />,
      title: "SEO Friendly",
      description: "Semantic markup improves search engine visibility and ranking."
    },
    {
      icon: <FaAccessibleIcon className="text-4xl text-[#e34f26]" />,
      title: "Accessibility",
      description: "Better accessibility features for inclusive web experiences."
    },
    {
      icon: <FaRocket className="text-4xl text-[#e34f26]" />,
      title: "Modern APIs",
      description: "Powerful APIs like Canvas, Geolocation, Web Storage, and more."
    }
  ];

  return (
    <GenericServicePage
      title="HTML5 Development"
      description="Build modern, semantic web pages with HTML5. Our developers create well-structured, accessible, and SEO-friendly websites using the latest HTML5 standards and best practices."
      features={features}
      ctaText="Build with HTML5 Today!"
    />
  );
};

export default HTML5;
