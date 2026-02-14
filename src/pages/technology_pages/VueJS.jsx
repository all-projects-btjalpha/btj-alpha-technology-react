import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaVuejs, FaCode, FaRocket, FaPuzzlePiece, FaTools, FaLayerGroup } from 'react-icons/fa';

const VueJS = () => {
  const features = [
    {
      icon: <FaVuejs className="text-4xl text-[#42b883]" />,
      title: "Progressive Framework",
      description: "Incrementally adoptable framework that scales between a library and a full-featured framework."
    },
    {
      icon: <FaCode className="text-4xl text-[#42b883]" />,
      title: "Simple & Intuitive",
      description: "Easy to learn with clear documentation and gentle learning curve for developers."
    },
    {
      icon: <FaRocket className="text-4xl text-[#42b883]" />,
      title: "Fast Performance",
      description: "Lightweight and optimized for excellent runtime performance and fast rendering."
    },
    {
      icon: <FaPuzzlePiece className="text-4xl text-[#42b883]" />,
      title: "Component System",
      description: "Powerful component-based architecture for building reusable UI elements."
    },
    {
      icon: <FaTools className="text-4xl text-[#42b883]" />,
      title: "Vue CLI",
      description: "Feature-rich development tooling with instant prototyping and zero-config setup."
    },
    {
      icon: <FaLayerGroup className="text-4xl text-[#42b883]" />,
      title: "Vuex State Management",
      description: "Centralized state management with Vuex for complex application data flow."
    }
  ];

  return (
    <GenericServicePage
      title="Vue.js Development"
      description="Create elegant and performant web applications with Vue.js. Our developers leverage Vue's simplicity and flexibility to build modern, reactive user interfaces with ease."
      features={features}
      ctaText="Start Your Vue.js Journey!"
    />
  );
};

export default VueJS;
