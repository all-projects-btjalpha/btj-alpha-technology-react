import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaDumbbell, FaHeartbeat, FaMobileAlt, FaChartLine, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const Fitness = () => {
  const features = [
    {
      icon: <FaDumbbell className="text-4xl text-[#fb9c24]" />,
      title: "Workout Tracking",
      description: "Track exercises, sets, reps, and progress with personalized workout plans."
    },
    {
      icon: <FaHeartbeat className="text-4xl text-[#fb9c24]" />,
      title: "Health Monitoring",
      description: "Monitor heart rate, calories, steps, and other health metrics in real-time."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Fitness Mobile Apps",
      description: "iOS and Android apps with workout videos, nutrition guides, and progress tracking."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Progress Analytics",
      description: "Visual analytics on fitness goals, achievements, and performance improvements."
    },
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "Trainer Platforms",
      description: "Connect trainers with clients for virtual training, scheduling, and communication."
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-[#fb9c24]" />,
      title: "Class Scheduling",
      description: "Book fitness classes, manage memberships, and schedule personal training sessions."
    }
  ];

  return (
    <GenericServicePage
      title="Fitness Solutions"
      description="Empower fitness journeys with our digital platforms. We build fitness apps, trainer management systems, gym software, and health tracking solutions that motivate and engage users."
      features={features}
      ctaText="Build Fitness Apps Today!"
    />
  );
};

export default Fitness;
