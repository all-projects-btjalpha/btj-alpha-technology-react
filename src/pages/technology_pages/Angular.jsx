import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaAngular, FaCode, FaShieldAlt, FaRocket, FaCog, FaTools } from 'react-icons/fa';

const Angular = () => {
  const features = [
    {
      icon: <FaAngular className="text-4xl text-[#dd0031]" />,
      title: "Full-Featured Framework",
      description: "Complete MVC framework with everything needed for enterprise-grade application development."
    },
    {
      icon: <FaCode className="text-4xl text-[#dd0031]" />,
      title: "TypeScript Support",
      description: "Built with TypeScript for type safety, better tooling, and enhanced code quality."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#dd0031]" />,
      title: "Dependency Injection",
      description: "Powerful dependency injection system for better code organization and testability."
    },
    {
      icon: <FaRocket className="text-4xl text-[#dd0031]" />,
      title: "Angular CLI",
      description: "Command-line interface for scaffolding, building, and maintaining Angular applications."
    },
    {
      icon: <FaCog className="text-4xl text-[#dd0031]" />,
      title: "Two-Way Data Binding",
      description: "Automatic synchronization between model and view for simplified development."
    },
    {
      icon: <FaTools className="text-4xl text-[#dd0031]" />,
      title: "RxJS Integration",
      description: "Reactive programming with RxJS for handling asynchronous operations efficiently."
    }
  ];

  return (
    <GenericServicePage
      title="Angular Development"
      description="Build robust enterprise applications with Angular. Our experienced team delivers scalable, maintainable, and high-performance web applications using Angular's comprehensive framework."
      features={features}
      ctaText="Build with Angular Today!"
    />
  );
};

export default Angular;
