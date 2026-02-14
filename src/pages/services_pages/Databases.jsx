import GenericServicePage from "../../components/GenericServicePage";
import { FaDatabase, FaServer, FaChartBar, FaShieldAlt, FaBolt, FaSync } from "react-icons/fa";

function Databases() {
  const features = [
    {
      icon: <FaDatabase className="text-4xl text-[#fb9c24]" />,
      title: "Database Design",
      description: "Efficient database schema design for optimal performance and scalability.",
    },
    {
      icon: <FaServer className="text-4xl text-[#fb9c24]" />,
      title: "SQL & NoSQL",
      description: "Expertise in MySQL, PostgreSQL, MongoDB, Redis, and more.",
    },
    {
      icon: <FaBolt className="text-4xl text-[#fb9c24]" />,
      title: "Query Optimization",
      description: "Optimize queries for faster response times and better performance.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#fb9c24]" />,
      title: "Data Security",
      description: "Implement encryption, access controls, and security best practices.",
    },
    {
      icon: <FaSync className="text-4xl text-[#fb9c24]" />,
      title: "Backup & Recovery",
      description: "Automated backups and disaster recovery solutions for data safety.",
    },
    {
      icon: <FaChartBar className="text-4xl text-[#fb9c24]" />,
      title: "Database Migration",
      description: "Seamless migration from legacy systems to modern databases.",
    },
  ];

  return (
    <GenericServicePage
      title="Database Services"
      description="Build robust, scalable, and secure database solutions that power your applications with reliable data management and optimal performance."
      features={features}
      ctaText="Optimize Your Database"
    />
  );
}

export default Databases;
