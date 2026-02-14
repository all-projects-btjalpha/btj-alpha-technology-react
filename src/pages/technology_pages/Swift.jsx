import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { SiSwift } from 'react-icons/si';
import { FaApple, FaCode, FaRocket, FaShieldAlt, FaMobileAlt, FaLaptop } from 'react-icons/fa';

const Swift = () => {
  const features = [
    {
      icon: <SiSwift className="text-4xl text-[#fa7343]" />,
      title: "Official iOS Language",
      description: "Apple's modern programming language for iOS, macOS, watchOS, and tvOS."
    },
    {
      icon: <FaCode className="text-4xl text-[#fa7343]" />,
      title: "Clean Syntax",
      description: "Simple, expressive syntax that's easy to read and write for developers."
    },
    {
      icon: <FaRocket className="text-4xl text-[#fa7343]" />,
      title: "Fast Performance",
      description: "Optimized for performance - significantly faster than Objective-C."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#fa7343]" />,
      title: "Type Safety",
      description: "Strong type system prevents errors and crashes at compile time."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fa7343]" />,
      title: "iOS Development",
      description: "Build powerful iOS apps with SwiftUI and UIKit frameworks."
    },
    {
      icon: <FaLaptop className="text-4xl text-[#fa7343]" />,
      title: "Multi-Platform",
      description: "Develop for iPhone, iPad, Mac, Apple Watch, and Apple TV."
    }
  ];

  return (
    <GenericServicePage
      title="Swift Development"
      description="Build native Apple applications with Swift. Our team creates fast, secure, and elegant iOS and macOS applications using Swift's modern programming language."
      features={features}
      ctaText="Start Your iOS Project!"
    />
  );
};

export default Swift;
