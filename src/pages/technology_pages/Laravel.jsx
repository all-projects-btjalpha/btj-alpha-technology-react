import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaLaravel, FaRocket, FaShieldAlt, FaCode, FaDatabase, FaTools } from 'react-icons/fa';

const Laravel = () => {
  const features = [
    {
      icon: <FaLaravel className="text-4xl text-[#ff2d20]" />,
      title: "Elegant Syntax",
      description: "Beautiful, expressive syntax that makes PHP development enjoyable and creative."
    },
    {
      icon: <FaRocket className="text-4xl text-[#ff2d20]" />,
      title: "MVC Architecture",
      description: "Clean Model-View-Controller architecture for organized and maintainable code."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#ff2d20]" />,
      title: "Built-in Security",
      description: "Protection against SQL injection, XSS, CSRF, and other security vulnerabilities."
    },
    {
      icon: <FaCode className="text-4xl text-[#ff2d20]" />,
      title: "Artisan CLI",
      description: "Powerful command-line interface for automating repetitive tasks."
    },
    {
      icon: <FaDatabase className="text-4xl text-[#ff2d20]" />,
      title: "Eloquent ORM",
      description: "Beautiful, simple ActiveRecord implementation for working with databases."
    },
    {
      icon: <FaTools className="text-4xl text-[#ff2d20]" />,
      title: "Rich Ecosystem",
      description: "Extensive packages like Passport, Horizon, Sanctum for enhanced functionality."
    }
  ];

  return (
    <GenericServicePage
      title="Laravel Development"
      description="Build modern PHP applications with Laravel. Our team creates elegant, scalable web applications using Laravel's expressive syntax and powerful features."
      features={features}
      ctaText="Build with Laravel Today!"
    />
  );
};

export default Laravel;
