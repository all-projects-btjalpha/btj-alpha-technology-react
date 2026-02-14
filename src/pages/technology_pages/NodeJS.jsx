import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaNodeJs, FaServer, FaRocket, FaDatabase, FaCode, FaLayerGroup } from 'react-icons/fa';

const NodeJS = () => {
  const features = [
    {
      icon: <FaNodeJs className="text-4xl text-[#339933]" />,
      title: "JavaScript Everywhere",
      description: "Use JavaScript on both frontend and backend for seamless full-stack development."
    },
    {
      icon: <FaServer className="text-4xl text-[#339933]" />,
      title: "Non-Blocking I/O",
      description: "Event-driven architecture for handling thousands of concurrent connections efficiently."
    },
    {
      icon: <FaRocket className="text-4xl text-[#339933]" />,
      title: "Fast Performance",
      description: "Built on Chrome's V8 engine for exceptional speed and performance."
    },
    {
      icon: <FaDatabase className="text-4xl text-[#339933]" />,
      title: "NPM Ecosystem",
      description: "Access to world's largest package registry with thousands of reusable modules."
    },
    {
      icon: <FaCode className="text-4xl text-[#339933]" />,
      title: "RESTful APIs",
      description: "Build scalable REST APIs and microservices with Express.js and other frameworks."
    },
    {
      icon: <FaLayerGroup className="text-4xl text-[#339933]" />,
      title: "Real-Time Applications",
      description: "Perfect for real-time apps like chat, gaming, and collaborative tools with WebSockets."
    }
  ];

  return (
    <GenericServicePage
      title="Node.js Development"
      description="Build scalable server-side applications with Node.js. Our developers create fast, efficient, and real-time applications using Node.js's non-blocking architecture and vast ecosystem."
      features={features}
      ctaText="Build with Node.js Today!"
    />
  );
};

export default NodeJS;
