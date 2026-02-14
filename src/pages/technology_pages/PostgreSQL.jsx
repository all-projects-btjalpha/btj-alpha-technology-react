import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { SiPostgresql } from 'react-icons/si';
import { FaDatabase, FaCode, FaShieldAlt, FaLayerGroup, FaServer, FaTools } from 'react-icons/fa';

const PostgreSQL = () => {
  const features = [
    {
      icon: <SiPostgresql className="text-4xl text-[#336791]" />,
      title: "Advanced RDBMS",
      description: "Most advanced open-source relational database with enterprise features."
    },
    {
      icon: <FaDatabase className="text-4xl text-[#336791]" />,
      title: "ACID Compliance",
      description: "Full ACID compliance ensuring data integrity and reliability."
    },
    {
      icon: <FaCode className="text-4xl text-[#336791]" />,
      title: "Complex Queries",
      description: "Support for complex queries, joins, and advanced SQL features."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#336791]" />,
      title: "Data Types",
      description: "Rich set of data types including JSON, arrays, and custom types."
    },
    {
      icon: <FaLayerGroup className="text-4xl text-[#336791]" />,
      title: "Extensibility",
      description: "Highly extensible with support for custom functions and extensions."
    },
    {
      icon: <FaServer className="text-4xl text-[#336791]" />,
      title: "Performance",
      description: "Excellent performance for read-heavy and complex analytical queries."
    }
  ];

  return (
    <GenericServicePage
      title="PostgreSQL Development"
      description="Build enterprise-grade databases with PostgreSQL. Our team creates robust, scalable, and feature-rich database solutions using PostgreSQL's advanced capabilities."
      features={features}
      ctaText="Start with PostgreSQL Today!"
    />
  );
};

export default PostgreSQL;
