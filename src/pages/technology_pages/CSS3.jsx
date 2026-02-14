import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaCss3Alt, FaPalette, FaMobileAlt, FaLayerGroup, FaRocket, FaCode } from 'react-icons/fa';

const CSS3 = () => {
  const features = [
    {
      icon: <FaCss3Alt className="text-4xl text-[#1572b6]" />,
      title: "Advanced Styling",
      description: "Modern CSS features like Grid, Flexbox, and custom properties for powerful layouts."
    },
    {
      icon: <FaPalette className="text-4xl text-[#1572b6]" />,
      title: "Animations & Transitions",
      description: "Create smooth animations and transitions without JavaScript for engaging UIs."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#1572b6]" />,
      title: "Responsive Design",
      description: "Media queries and responsive units for perfect display on all devices."
    },
    {
      icon: <FaLayerGroup className="text-4xl text-[#1572b6]" />,
      title: "CSS Grid & Flexbox",
      description: "Powerful layout systems for complex, responsive page structures."
    },
    {
      icon: <FaRocket className="text-4xl text-[#1572b6]" />,
      title: "Performance",
      description: "Optimized CSS for fast loading and rendering across browsers."
    },
    {
      icon: <FaCode className="text-4xl text-[#1572b6]" />,
      title: "Custom Properties",
      description: "CSS variables for maintainable, reusable styles and theming."
    }
  ];

  return (
    <GenericServicePage
      title="CSS3 Development"
      description="Create stunning, responsive designs with CSS3. Our designers and developers craft pixel-perfect, animated, and cross-browser compatible stylesheets using modern CSS3 features."
      features={features}
      ctaText="Style with CSS3 Today!"
    />
  );
};

export default CSS3;
