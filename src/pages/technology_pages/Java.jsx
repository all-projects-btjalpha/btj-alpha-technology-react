import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaJava, FaServer, FaShieldAlt, FaMobileAlt, FaCode, FaLayerGroup } from 'react-icons/fa';

const Java = () => {
  const features = [
    {
      icon: <FaJava className="text-4xl text-[#007396]" />,
      title: "Platform Independent",
      description: "Write once, run anywhere with Java's platform-independent bytecode execution."
    },
    {
      icon: <FaServer className="text-4xl text-[#007396]" />,
      title: "Enterprise Applications",
      description: "Industry standard for building large-scale enterprise applications and systems."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#007396]" />,
      title: "Robust & Secure",
      description: "Strong type checking, exception handling, and security features for reliable applications."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#007396]" />,
      title: "Android Development",
      description: "Primary language for native Android app development with Android Studio."
    },
    {
      icon: <FaCode className="text-4xl text-[#007396]" />,
      title: "Object-Oriented",
      description: "Pure OOP language for clean, modular, and maintainable code architecture."
    },
    {
      icon: <FaLayerGroup className="text-4xl text-[#007396]" />,
      title: "Rich Ecosystem",
      description: "Vast collection of frameworks like Spring, Hibernate, and Java EE."
    }
  ];

  return (
    <GenericServicePage
      title="Java Development"
      description="Build enterprise-grade applications with Java. Our experienced developers create robust, scalable, and secure applications using Java's powerful features and extensive ecosystem."
      features={features}
      ctaText="Build with Java Today!"
    />
  );
};

export default Java;
