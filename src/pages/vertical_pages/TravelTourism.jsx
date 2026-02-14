import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaPlane, FaHotel, FaMapMarkedAlt, FaTicketAlt, FaMobileAlt, FaStar } from 'react-icons/fa';

const TravelTourism = () => {
  const features = [
    {
      icon: <FaPlane className="text-4xl text-[#fb9c24]" />,
      title: "Booking Systems",
      description: "Integrated booking platforms for flights, hotels, and tour packages with real-time availability."
    },
    {
      icon: <FaHotel className="text-4xl text-[#fb9c24]" />,
      title: "Hotel Management",
      description: "Property management systems with reservations, check-in/out, and room allocation."
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-[#fb9c24]" />,
      title: "Itinerary Planning",
      description: "Smart itinerary builders with destination guides, activities, and customized travel plans."
    },
    {
      icon: <FaTicketAlt className="text-4xl text-[#fb9c24]" />,
      title: "Online Travel Portals",
      description: "Complete OTA platforms with search, compare, booking, and payment integration."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Travel Mobile Apps",
      description: "iOS and Android apps for bookings, trip management, and travel assistance."
    },
    {
      icon: <FaStar className="text-4xl text-[#fb9c24]" />,
      title: "Reviews & Ratings",
      description: "User-generated reviews, ratings, and recommendations for destinations and services."
    }
  ];

  return (
    <GenericServicePage
      title="Travel & Tourism Solutions"
      description="Transform travel experiences with our digital platforms. We build booking systems, travel portals, hotel management software, and mobile apps for the tourism industry."
      features={features}
      ctaText="Digitize Travel Today!"
    />
  );
};

export default TravelTourism;
