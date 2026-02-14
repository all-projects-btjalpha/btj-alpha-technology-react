import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { SiFlutter } from 'react-icons/si';
import { FaMobileAlt, FaRocket, FaPalette, FaCode, FaAndroid } from 'react-icons/fa';

const Flutter = () => {
  const features = [
    {
      icon: <SiFlutter className="text-4xl text-[#02569b]" />,
      title: "Beautiful UI",
      description: "Create stunning, highly customized UIs with Flutter's rich widget library."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#02569b]" />,
      title: "Cross-Platform",
      description: "Single codebase for iOS, Android, Web, and Desktop applications."
    },
    {
      icon: <FaRocket className="text-4xl text-[#02569b]" />,
      title: "Fast Performance",
      description: "Compiled to native ARM code for exceptional performance on mobile."
    },
    {
      icon: <FaPalette className="text-4xl text-[#02569b]" />,
      title: "Material & Cupertino",
      description: "Pre-built widgets following Material Design and iOS design guidelines."
    },
    {
      icon: <FaCode className="text-4xl text-[#02569b]" />,
      title: "Hot Reload",
      description: "Instant updates during development without losing app state."
    },
    {
      icon: <FaAndroid className="text-4xl text-[#02569b]" />,
      title: "Native Features",
      description: "Easy access to native platform features through platform channels."
    }
  ];

  return (
    <GenericServicePage
      title="Flutter Development"
      description="Build beautiful multi-platform apps with Flutter. Our team creates fast, expressive, and flexible mobile, web, and desktop applications using Flutter's powerful framework."
      features={features}
      ctaText="Start Your Flutter Project!"
    />
  );
};

export default Flutter;
