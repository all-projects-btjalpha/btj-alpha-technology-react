import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { SiNextdotjs } from 'react-icons/si';
import { FaServer, FaRocket, FaSearch, FaImage, FaCode } from 'react-icons/fa';

const NextJS = () => {
  const features = [
    {
      icon: <FaServer className="text-4xl text-[#000000]" />,
      title: "Server-Side Rendering",
      description: "Deliver fast, SEO-friendly pages with built-in server-side rendering and static generation."
    },
    {
      icon: <FaRocket className="text-4xl text-[#000000]" />,
      title: "Hybrid Rendering",
      description: "Combine SSR, SSG, and CSR for optimal performance based on your needs."
    },
    {
      icon: <FaSearch className="text-4xl text-[#000000]" />,
      title: "SEO Optimized",
      description: "Built-in SEO features with automatic optimization for search engines."
    },
    {
      icon: <FaImage className="text-4xl text-[#000000]" />,
      title: "Image Optimization",
      description: "Automatic image optimization with Next.js Image component for faster load times."
    },
    {
      icon: <FaCode className="text-4xl text-[#000000]" />,
      title: "API Routes",
      description: "Build full-stack applications with built-in API routes support."
    },
    {
      icon: <SiNextdotjs className="text-4xl text-[#000000]" />,
      title: "Zero Config",
      description: "Start building immediately with automatic compilation and bundling."
    }
  ];

  return (
    <GenericServicePage
      title="Next.js Development"
      description="Build production-ready React applications with Next.js. Our experts create fast, SEO-friendly, and scalable web applications using Next.js's powerful features and hybrid rendering."
      features={features}
      ctaText="Build with Next.js Today!"
    />
  );
};

export default NextJS;
