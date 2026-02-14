import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaBoxes, FaUsers, FaChartLine, FaEnvelope, FaTasks, FaMobileAlt } from 'react-icons/fa';

const CRM = () => {
  const features = [
    {
      icon: <FaBoxes className="text-4xl text-[#fb9c24]" />,
      title: "Contact Management",
      description: "Centralize customer data with 360-degree views of interactions and history."
    },
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "Sales Pipeline",
      description: "Visual sales pipeline with lead tracking, deal management, and forecasting."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Analytics & Insights",
      description: "Data-driven insights on sales performance, customer behavior, and trends."
    },
    {
      icon: <FaEnvelope className="text-4xl text-[#fb9c24]" />,
      title: "Email Integration",
      description: "Seamless email integration with templates, automation, and tracking."
    },
    {
      icon: <FaTasks className="text-4xl text-[#fb9c24]" />,
      title: "Task & Activity Management",
      description: "Automated task assignment, reminders, and follow-up scheduling."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Mobile CRM",
      description: "Access customer data and manage relationships on-the-go with mobile apps."
    }
  ];

  return (
    <GenericServicePage
      title="CRM Solutions"
      description="Transform customer relationships with our powerful CRM platforms. We build custom CRM systems that help businesses manage leads, automate sales processes, and improve customer satisfaction."
      features={features}
      ctaText="Boost Customer Relations!"
    />
  );
};

export default CRM;
