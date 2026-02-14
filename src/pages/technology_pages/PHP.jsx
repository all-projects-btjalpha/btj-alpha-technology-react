import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaPhp, FaServer, FaDatabase, FaCode, FaRocket, FaWordpress } from 'react-icons/fa';

const PHP = () => {
  const features = [
    {
      icon: <FaPhp className="text-4xl text-[#777bb4]" />,
      title: "Server-Side Scripting",
      description: "Powerful server-side scripting language for dynamic web application development."
    },
    {
      icon: <FaServer className="text-4xl text-[#777bb4]" />,
      title: "Easy Deployment",
      description: "Runs on most web servers and hosting platforms with minimal configuration."
    },
    {
      icon: <FaDatabase className="text-4xl text-[#777bb4]" />,
      title: "Database Integration",
      description: "Seamless integration with MySQL, PostgreSQL, MongoDB, and other databases."
    },
    {
      icon: <FaCode className="text-4xl text-[#777bb4]" />,
      title: "Frameworks Available",
      description: "Robust frameworks like Laravel, Symfony, and CodeIgniter for rapid development."
    },
    {
      icon: <FaWordpress className="text-4xl text-[#777bb4]" />,
      title: "CMS Support",
      description: "Powers WordPress, Drupal, and other popular content management systems."
    },
    {
      icon: <FaRocket className="text-4xl text-[#777bb4]" />,
      title: "Large Community",
      description: "Extensive community support, libraries, and resources for developers."
    }
  ];

  return (
    <GenericServicePage
      title="PHP Development"
      description="Build dynamic web applications with PHP. Our developers create robust, scalable, and feature-rich websites using PHP's versatility and powerful frameworks."
      features={features}
      ctaText="Start Your PHP Project!"
    />
  );
};

export default PHP;
