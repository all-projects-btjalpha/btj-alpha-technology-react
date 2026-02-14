import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaFootballBall, FaUsers, FaCalendarAlt, FaChartLine, FaMobileAlt, FaTrophy } from 'react-icons/fa';

const SportsManagement = () => {
  const features = [
    {
      icon: <FaFootballBall className="text-4xl text-[#fb9c24]" />,
      title: "League Management",
      description: "Manage sports leagues with team rosters, schedules, standings, and statistics."
    },
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "Team Management",
      description: "Player profiles, performance tracking, attendance, and communication tools."
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-[#fb9c24]" />,
      title: "Event Scheduling",
      description: "Schedule matches, practices, tournaments with automated notifications and reminders."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Performance Analytics",
      description: "Track player statistics, team performance, and game analytics with detailed reports."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Sports Mobile Apps",
      description: "Mobile apps for players, coaches, and fans with live scores and updates."
    },
    {
      icon: <FaTrophy className="text-4xl text-[#fb9c24]" />,
      title: "Tournament Management",
      description: "Organize tournaments with brackets, scoring, and real-time results tracking."
    }
  ];

  return (
    <GenericServicePage
      title="Sports Management Solutions"
      description="Elevate sports management with our comprehensive platforms. We build solutions for leagues, teams, tournaments, and sports facilities that streamline operations and engage fans."
      features={features}
      ctaText="Manage Sports Better!"
    />
  );
};

export default SportsManagement;
