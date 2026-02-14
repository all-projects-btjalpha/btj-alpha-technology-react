import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaTruck, FaMapMarkedAlt, FaWarehouse, FaRoute, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const LogisticsTransport = () => {
  const features = [
    {
      icon: <FaTruck className="text-4xl text-[#fb9c24]" />,
      title: "Fleet Management",
      description: "Real-time fleet tracking, vehicle maintenance scheduling, and driver management."
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-[#fb9c24]" />,
      title: "GPS Tracking",
      description: "Live GPS tracking with geofencing, route optimization, and location history."
    },
    {
      icon: <FaWarehouse className="text-4xl text-[#fb9c24]" />,
      title: "Warehouse Management",
      description: "Inventory management, order fulfillment, and warehouse automation systems."
    },
    {
      icon: <FaRoute className="text-4xl text-[#fb9c24]" />,
      title: "Route Optimization",
      description: "AI-powered route planning for cost reduction and faster delivery times."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Driver Mobile Apps",
      description: "Mobile apps for drivers with delivery instructions, navigation, and proof of delivery."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Logistics Analytics",
      description: "Comprehensive analytics on delivery performance, fuel consumption, and efficiency."
    }
  ];

  return (
    <GenericServicePage
      title="Logistics & Transport Solutions"
      description="Optimize your logistics operations with our smart transportation management systems. We build solutions for fleet tracking, route optimization, warehouse management, and last-mile delivery."
      features={features}
      ctaText="Optimize Logistics Today!"
    />
  );
};

export default LogisticsTransport;
