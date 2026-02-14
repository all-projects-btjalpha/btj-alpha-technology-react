import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaAws, FaCloud, FaServer, FaShieldAlt, FaDatabase, FaRocket } from 'react-icons/fa';

const AWS = () => {
  const features = [
    {
      icon: <FaAws className="text-4xl text-[#ff9900]" />,
      title: "Leading Cloud Platform",
      description: "World's most comprehensive and widely adopted cloud platform with 200+ services."
    },
    {
      icon: <FaCloud className="text-4xl text-[#ff9900]" />,
      title: "Scalable Infrastructure",
      description: "Auto-scaling compute, storage, and networking resources on demand."
    },
    {
      icon: <FaServer className="text-4xl text-[#ff9900]" />,
      title: "EC2 & Lambda",
      description: "Flexible compute options with EC2 instances and serverless Lambda functions."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#ff9900]" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with IAM, encryption, and compliance certifications."
    },
    {
      icon: <FaDatabase className="text-4xl text-[#ff9900]" />,
      title: "Database Services",
      description: "RDS, DynamoDB, Aurora, and more for any database workload."
    },
    {
      icon: <FaRocket className="text-4xl text-[#ff9900]" />,
      title: "Global Infrastructure",
      description: "Deploy applications globally with AWS's extensive network of data centers."
    }
  ];

  return (
    <GenericServicePage
      title="AWS Cloud Services"
      description="Build and deploy on AWS Cloud. Our certified AWS experts help you leverage Amazon Web Services for scalable, secure, and cost-effective cloud solutions."
      features={features}
      ctaText="Migrate to AWS Today!"
    />
  );
};

export default AWS;
