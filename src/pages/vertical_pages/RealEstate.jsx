import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaHome, FaSearch, FaKey, FaMapMarkerAlt, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const RealEstate = () => {
  const features = [
    {
      icon: <FaHome className="text-4xl text-[#fb9c24]" />,
      title: "Property Listings",
      description: "Comprehensive property listing platforms with photos, videos, and virtual tours."
    },
    {
      icon: <FaSearch className="text-4xl text-[#fb9c24]" />,
      title: "Advanced Search",
      description: "Smart search with filters for location, price, amenities, and property type."
    },
    {
      icon: <FaKey className="text-4xl text-[#fb9c24]" />,
      title: "Property Management",
      description: "Tenant management, rent collection, maintenance requests, and lease tracking."
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-[#fb9c24]" />,
      title: "Map Integration",
      description: "Interactive maps with property locations, nearby amenities, and neighborhood insights."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Mobile Apps",
      description: "Real estate apps for property search, virtual tours, and agent communication."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Market Analytics",
      description: "Real-time market trends, property valuations, and investment insights."
    }
  ];

  return (
    <GenericServicePage
      title="Real Estate Solutions"
      description="Transform real estate operations with our digital platforms. We build property portals, management systems, and mobile apps that connect buyers, sellers, and agents seamlessly."
      features={features}
      ctaText="Digitize Real Estate Today!"
    />
  );
};

export default RealEstate;
