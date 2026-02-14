import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaHeartbeat, FaUserMd, FaMobileAlt, FaShieldAlt, FaChartLine, FaStethoscope } from 'react-icons/fa';

const Healthcare = () => {
  const features = [
    {
      icon: <FaHeartbeat className="text-4xl text-[#fb9c24]" />,
      title: "Patient Management Systems",
      description: "Comprehensive EMR/EHR systems for efficient patient data management and care coordination."
    },
    {
      icon: <FaUserMd className="text-4xl text-[#fb9c24]" />,
      title: "Telemedicine Solutions",
      description: "Video consultation platforms connecting patients with healthcare providers remotely."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Health Monitoring Apps",
      description: "Mobile applications for tracking vitals, medications, and health metrics in real-time."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#fb9c24]" />,
      title: "HIPAA Compliance",
      description: "Secure, compliant solutions protecting patient data with encryption and access controls."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Healthcare Analytics",
      description: "Data analytics and reporting tools for improving patient outcomes and operations."
    },
    {
      icon: <FaStethoscope className="text-4xl text-[#fb9c24]" />,
      title: "Practice Management",
      description: "Complete practice management software for scheduling, billing, and administration."
    }
  ];

  return (
    <GenericServicePage
      title="Healthcare Solutions"
      description="Transform healthcare delivery with our cutting-edge digital solutions. We build HIPAA-compliant, secure, and scalable healthcare applications that improve patient care, streamline operations, and enhance medical outcomes."
      features={features}
      ctaText="Transform Healthcare with Us!"
    />
  );
};

export default Healthcare;
