import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { SiMongodb } from 'react-icons/si';
import { FaDatabase, FaRocket, FaLayerGroup, FaCode, FaServer } from 'react-icons/fa';

const MongoDB = () => {
  const features = [
    {
      icon: <SiMongodb className="text-4xl text-[#47a248]" />,
      title: "NoSQL Database",
      description: "Flexible document-based database for modern application development."
    },
    {
      icon: <FaDatabase className="text-4xl text-[#47a248]" />,
      title: "JSON-Like Documents",
      description: "Store data in flexible, JSON-like BSON documents for easy data modeling."
    },
    {
      icon: <FaRocket className="text-4xl text-[#47a248]" />,
      title: "High Performance",
      description: "Fast queries and indexing for excellent read and write performance."
    },
    {
      icon: <FaLayerGroup className="text-4xl text-[#47a248]" />,
      title: "Horizontal Scaling",
      description: "Easy horizontal scaling through sharding for handling large datasets."
    },
    {
      icon: <FaCode className="text-4xl text-[#47a248]" />,
      title: "Rich Query Language",
      description: "Powerful query language with aggregation framework and full-text search."
    },
    {
      icon: <FaServer className="text-4xl text-[#47a248]" />,
      title: "Replication & High Availability",
      description: "Built-in replication and automatic failover for high availability."
    }
  ];

  return (
    <GenericServicePage
      title="MongoDB Development"
      description="Build scalable applications with MongoDB. Our team designs and implements flexible, high-performance NoSQL database solutions using MongoDB's document-based architecture."
      features={features}
      ctaText="Start with MongoDB Today!"
    />
  );
};

export default MongoDB;
