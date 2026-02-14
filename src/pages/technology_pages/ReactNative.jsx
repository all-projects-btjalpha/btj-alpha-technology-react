import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaReact, FaMobileAlt, FaCode, FaRocket, FaAndroid, FaApple } from 'react-icons/fa';

const ReactNative = () => {
  const features = [
    {
      icon: <FaReact className="text-4xl text-[#61dafb]" />,
      title: "Cross-Platform Development",
      description: "Build iOS and Android apps simultaneously with a single codebase."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#61dafb]" />,
      title: "Native Performance",
      description: "True native performance with React Native's bridge to platform APIs."
    },
    {
      icon: <FaCode className="text-4xl text-[#61dafb]" />,
      title: "JavaScript & React",
      description: "Use React skills to build mobile apps with familiar JavaScript syntax."
    },
    {
      icon: <FaRocket className="text-4xl text-[#61dafb]" />,
      title: "Fast Development",
      description: "Hot reloading and live updates for rapid development and testing."
    },
    {
      icon: <FaAndroid className="text-4xl text-[#61dafb]" />,
      title: "Android Support",
      description: "Full support for Android with access to native modules and features."
    },
    {
      icon: <FaApple className="text-4xl text-[#61dafb]" />,
      title: "iOS Support",
      description: "Complete iOS development with native UI components and APIs."
    }
  ];

  return (
    <GenericServicePage
      title="React Native Development"
      description="Build native mobile apps with React Native. Our developers create high-performance iOS and Android applications using React Native's cross-platform framework."
      features={features}
      ctaText="Build Your Mobile App Today!"
    />
  );
};

export default ReactNative;
