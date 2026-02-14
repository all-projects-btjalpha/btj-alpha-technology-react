import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaMicrochip, FaChartBar, FaWarehouse, FaUsers, FaMoneyBillWave, FaCog } from 'react-icons/fa';

const ERP = () => {
  const features = [
    {
      icon: <FaMicrochip className="text-4xl text-[#fb9c24]" />,
      title: "Integrated Systems",
      description: "Unified ERP platform integrating finance, HR, inventory, and operations modules."
    },
    {
      icon: <FaChartBar className="text-4xl text-[#fb9c24]" />,
      title: "Business Intelligence",
      description: "Real-time dashboards, reports, and analytics for data-driven decision making."
    },
    {
      icon: <FaWarehouse className="text-4xl text-[#fb9c24]" />,
      title: "Inventory Management",
      description: "Complete inventory tracking with stock levels, reordering, and supply chain management."
    },
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "HR Management",
      description: "Employee management, payroll, attendance, performance reviews, and recruitment."
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-[#fb9c24]" />,
      title: "Financial Management",
      description: "Accounting, invoicing, expense tracking, and financial reporting modules."
    },
    {
      icon: <FaCog className="text-4xl text-[#fb9c24]" />,
      title: "Process Automation",
      description: "Automate workflows, approvals, and business processes for improved efficiency."
    }
  ];

  return (
    <GenericServicePage
      title="ERP Solutions"
      description="Streamline your entire business with our comprehensive ERP systems. We build customized enterprise resource planning solutions that integrate all aspects of your operations into one unified platform."
      features={features}
      ctaText="Implement ERP Today!"
    />
  );
};

export default ERP;
