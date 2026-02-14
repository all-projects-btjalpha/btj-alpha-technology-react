import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaCalendarAlt, FaTicketAlt, FaUsers, FaMobileAlt, FaQrcode, FaChartBar } from 'react-icons/fa';

const EventManagement = () => {
  const features = [
    {
      icon: <FaCalendarAlt className="text-4xl text-[#fb9c24]" />,
      title: "Event Planning Tools",
      description: "Comprehensive event planning software for scheduling, venue management, and coordination."
    },
    {
      icon: <FaTicketAlt className="text-4xl text-[#fb9c24]" />,
      title: "Ticketing Systems",
      description: "Online ticketing platforms with QR codes, seat selection, and payment integration."
    },
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "Attendee Management",
      description: "Registration, check-in, and attendee tracking systems for seamless event experiences."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Event Mobile Apps",
      description: "Custom event apps with schedules, maps, networking, and real-time updates."
    },
    {
      icon: <FaQrcode className="text-4xl text-[#fb9c24]" />,
      title: "Digital Check-In",
      description: "Fast QR code-based check-in systems for efficient event entry management."
    },
    {
      icon: <FaChartBar className="text-4xl text-[#fb9c24]" />,
      title: "Analytics & Reporting",
      description: "Real-time analytics and reports on attendance, engagement, and event performance."
    }
  ];

  return (
    <GenericServicePage
      title="Event Management Solutions"
      description="Streamline your events with our powerful event management platforms. From planning to execution, we provide end-to-end solutions for conferences, concerts, corporate events, and more."
      features={features}
      ctaText="Manage Events Better!"
    />
  );
};

export default EventManagement;
