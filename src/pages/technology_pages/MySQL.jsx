import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { SiMysql } from 'react-icons/si';
import { FaDatabase, FaShieldAlt, FaServer, FaCode, FaRocket, FaLayerGroup } from 'react-icons/fa';

const MySQL = () => {
  const features = [
    {
      icon: <SiMysql className="text-4xl text-[#4479a1]" />,
      title: "Relational Database",
      description: "Proven RDBMS for structured data with strong ACID compliance."
    },
    {
      icon: <FaDatabase className="text-4xl text-[#4479a1]" />,
      title: "SQL Standard",
      description: "Industry-standard SQL language for querying and managing data."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#4479a1]" />,
      title: "Data Security",
      description: "Robust security features including encryption, authentication, and access control."
    },
    {
      icon: <FaServer className="text-4xl text-[#4479a1]" />,
      title: "High Performance",
      description: "Optimized for speed with powerful indexing and caching mechanisms."
    },
    {
      icon: <FaCode className="text-4xl text-[#4479a1]" />,
      title: "Easy Integration",
      description: "Seamless integration with PHP, Python, Java, Node.js, and other languages."
    },
    {
      icon: <FaLayerGroup className="text-4xl text-[#4479a1]" />,
      title: "Scalability",
      description: "Supports replication and clustering for handling high-traffic applications."
    }
  ];

  return (
    <GenericServicePage
      title="MySQL Development"
      description="Build reliable database solutions with MySQL. Our developers design efficient, secure, and scalable relational databases using MySQL's proven technology."
      features={features}
      ctaText="Build with MySQL Today!"
    />
  );
};

export default MySQL;
