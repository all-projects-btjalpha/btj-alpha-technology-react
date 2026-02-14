import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaReact, FaCode, FaMobileAlt, FaRocket, FaPuzzlePiece, FaUsers } from 'react-icons/fa';

const ReactJS = () => {
  const features = [
    {
      icon: <FaPuzzlePiece className="text-4xl text-[#61dafb]" />,
      title: "Component-Based Architecture",
      description: "Build encapsulated components that manage their own state for better code reusability and maintainability."
    },
    {
      icon: <FaRocket className="text-4xl text-[#61dafb]" />,
      title: "Virtual DOM",
      description: "Efficient rendering with React's Virtual DOM for blazing-fast performance and optimal user experience."
    },
    {
      icon: <FaCode className="text-4xl text-[#61dafb]" />,
      title: "JSX Syntax",
      description: "Write HTML-like syntax in JavaScript for intuitive and readable component development."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#61dafb]" />,
      title: "React Native Integration",
      description: "Use React skills to build native mobile apps for iOS and Android with React Native."
    },
    {
      icon: <FaUsers className="text-4xl text-[#61dafb]" />,
      title: "Large Community",
      description: "Benefit from extensive community support, libraries, and resources for rapid development."
    },
    {
      icon: <FaRocket className="text-4xl text-[#61dafb]" />,
      title: "Fast Development",
      description: "Accelerate development with hot reloading, rich ecosystem, and powerful developer tools."
    }
  ];

  return (
    <GenericServicePage
      title="React.js Development"
      description="Build modern, interactive, and scalable web applications with React.js. Our expert developers create high-performance single-page applications using the power of React's component-based architecture."
      features={features}
      ctaText="Start Your React.js Project Today!"
    />
  );
};

export default ReactJS;
