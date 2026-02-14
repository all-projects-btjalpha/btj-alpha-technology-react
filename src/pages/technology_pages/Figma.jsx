import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaFigma, FaPalette, FaUsers, FaPuzzlePiece, FaMobileAlt, FaCode } from 'react-icons/fa';

const Figma = () => {
  const features = [
    {
      icon: <FaFigma className="text-4xl text-[#f24e1e]" />,
      title: "Collaborative Design",
      description: "Real-time collaboration with team members for seamless design workflow."
    },
    {
      icon: <FaPalette className="text-4xl text-[#f24e1e]" />,
      title: "Vector Design Tools",
      description: "Powerful vector editing tools for creating pixel-perfect designs."
    },
    {
      icon: <FaUsers className="text-4xl text-[#f24e1e]" />,
      title: "Design Systems",
      description: "Build and maintain consistent design systems with components and styles."
    },
    {
      icon: <FaPuzzlePiece className="text-4xl text-[#f24e1e]" />,
      title: "Prototyping",
      description: "Interactive prototypes with animations and transitions for user testing."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#f24e1e]" />,
      title: "Responsive Design",
      description: "Design responsive interfaces that adapt to different screen sizes."
    },
    {
      icon: <FaCode className="text-4xl text-[#f24e1e]" />,
      title: "Developer Handoff",
      description: "Seamless handoff to developers with CSS, iOS, and Android code snippets."
    }
  ];

  return (
    <GenericServicePage
      title="Figma Design"
      description="Create stunning UI/UX designs with Figma. Our designers use Figma's collaborative platform to create beautiful, functional, and user-friendly interfaces for web and mobile."
      features={features}
      ctaText="Design with Figma Today!"
    />
  );
};

export default Figma;
