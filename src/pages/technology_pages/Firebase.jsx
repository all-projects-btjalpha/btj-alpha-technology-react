import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { SiFirebase } from 'react-icons/si';
import { FaDatabase, FaRocket, FaMobileAlt, FaCloud, FaSync, FaShieldAlt } from 'react-icons/fa';

const Firebase = () => {
  const features = [
    {
      icon: <SiFirebase className="text-4xl text-[#ffca28]" />,
      title: "Real-Time Database",
      description: "Cloud-hosted NoSQL database with real-time data synchronization."
    },
    {
      icon: <FaRocket className="text-4xl text-[#ffca28]" />,
      title: "Quick Development",
      description: "Build apps faster with Firebase's comprehensive backend services."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#ffca28]" />,
      title: "Mobile-First",
      description: "Perfect for mobile apps with offline support and automatic syncing."
    },
    {
      icon: <FaCloud className="text-4xl text-[#ffca28]" />,
      title: "Cloud Firestore",
      description: "Scalable NoSQL cloud database for web and mobile applications."
    },
    {
      icon: <FaSync className="text-4xl text-[#ffca28]" />,
      title: "Real-Time Sync",
      description: "Instant data synchronization across all connected clients."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#ffca28]" />,
      title: "Authentication",
      description: "Built-in authentication with email, social, and phone verification."
    }
  ];

  return (
    <GenericServicePage
      title="Firebase Development"
      description="Build real-time applications with Firebase. Our developers create fast, scalable, and real-time apps using Firebase's comprehensive backend-as-a-service platform."
      features={features}
      ctaText="Start with Firebase Today!"
    />
  );
};

export default Firebase;
