import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaCar, FaTools, FaMobileAlt, FaShoppingCart, FaMapMarkedAlt, FaChartLine } from 'react-icons/fa';

const Automotive = () => {
  const features = [
    {
      icon: <FaCar className="text-4xl text-[#fb9c24]" />,
      title: "Vehicle Management",
      description: "Comprehensive vehicle inventory, sales, and customer management systems for dealerships."
    },
    {
      icon: <FaTools className="text-4xl text-[#fb9c24]" />,
      title: "Service & Maintenance",
      description: "Service booking, maintenance tracking, and repair history management platforms."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Connected Car Apps",
      description: "IoT-enabled apps for vehicle diagnostics, remote control, and driver assistance."
    },
    {
      icon: <FaShoppingCart className="text-4xl text-[#fb9c24]" />,
      title: "Online Car Marketplace",
      description: "Digital platforms for buying, selling, and comparing vehicles with virtual showrooms."
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-[#fb9c24]" />,
      title: "Fleet Tracking",
      description: "Real-time GPS tracking and fleet management for commercial vehicle operations."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Analytics & Insights",
      description: "Data analytics on vehicle performance, customer behavior, and sales trends."
    }
  ];

  return (
    <GenericServicePage
      title="Automotive Solutions"
      description="Drive innovation in the automotive industry with our digital solutions. We build platforms for dealerships, service centers, connected cars, and automotive marketplaces."
      features={features}
      ctaText="Accelerate Automotive Digital!"
    />
  );
};

export default Automotive;
