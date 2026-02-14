import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaGraduationCap, FaBook, FaVideo, FaCertificate, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const EdTech = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-4xl text-[#fb9c24]" />,
      title: "Learning Management Systems",
      description: "Complete LMS platforms for course creation, student enrollment, and progress tracking."
    },
    {
      icon: <FaBook className="text-4xl text-[#fb9c24]" />,
      title: "Online Course Platforms",
      description: "Build and sell online courses with video lessons, quizzes, and assessments."
    },
    {
      icon: <FaVideo className="text-4xl text-[#fb9c24]" />,
      title: "Live Classes",
      description: "Virtual classroom solutions with video conferencing, screen sharing, and interactive whiteboards."
    },
    {
      icon: <FaCertificate className="text-4xl text-[#fb9c24]" />,
      title: "Certification & Badges",
      description: "Automated certificate generation and digital badges for course completion."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Mobile Learning Apps",
      description: "iOS and Android apps for learning on-the-go with offline content support."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Student Analytics",
      description: "Track student performance, engagement, and learning outcomes with detailed analytics."
    }
  ];

  return (
    <GenericServicePage
      title="Ed-Tech Solutions"
      description="Revolutionize education with our digital learning platforms. We create engaging e-learning solutions, LMS systems, and educational apps that make learning accessible and effective."
      features={features}
      ctaText="Transform Education Today!"
    />
  );
};

export default EdTech;
