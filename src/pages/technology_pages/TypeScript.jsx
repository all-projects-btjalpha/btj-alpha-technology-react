import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { SiTypescript } from 'react-icons/si';
import { FaCode, FaShieldAlt, FaTools, FaBug, FaRocket } from 'react-icons/fa';

const TypeScript = () => {
  const features = [
    {
      icon: <SiTypescript className="text-4xl text-[#3178c6]" />,
      title: "Static Type Checking",
      description: "Catch errors during development with TypeScript's powerful static type system."
    },
    {
      icon: <FaCode className="text-4xl text-[#3178c6]" />,
      title: "Enhanced IDE Support",
      description: "Superior autocomplete, refactoring, and navigation with rich IDE integration."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#3178c6]" />,
      title: "Type Safety",
      description: "Write more reliable code with compile-time type checking and validation."
    },
    {
      icon: <FaTools className="text-4xl text-[#3178c6]" />,
      title: "Modern JavaScript Features",
      description: "Use latest ECMAScript features with TypeScript's excellent compatibility."
    },
    {
      icon: <FaBug className="text-4xl text-[#3178c6]" />,
      title: "Reduced Bugs",
      description: "Catch common errors before runtime, reducing production bugs significantly."
    },
    {
      icon: <FaRocket className="text-4xl text-[#3178c6]" />,
      title: "Better Maintainability",
      description: "Large codebases become easier to maintain and refactor with TypeScript."
    }
  ];

  return (
    <GenericServicePage
      title="TypeScript Development"
      description="Build robust and maintainable applications with TypeScript. Our developers leverage TypeScript's type safety and modern features to create scalable, error-free applications."
      features={features}
      ctaText="Go Type-Safe with TypeScript!"
    />
  );
};

export default TypeScript;
