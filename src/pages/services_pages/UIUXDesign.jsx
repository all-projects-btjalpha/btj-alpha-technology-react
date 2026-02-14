import GenericServicePage from "../../components/GenericServicePage";
import { FaPalette, FaUsers, FaMobileAlt, FaLightbulb, FaChartLine, FaPencilRuler } from "react-icons/fa";

function UIUXDesign() {
  const features = [
    {
      icon: <FaPalette className="text-4xl text-[#fb9c24]" />,
      title: "Visual Design",
      description: "Create stunning, modern interfaces that capture attention and reflect your brand identity.",
    },
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "User Research",
      description: "Understand your users through research, interviews, and data-driven insights.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Responsive Design",
      description: "Designs that work flawlessly across all devices and screen sizes.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#fb9c24]" />,
      title: "Prototyping",
      description: "Interactive prototypes to visualize and test your product before development.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Usability Testing",
      description: "Test and validate designs with real users to ensure optimal experience.",
    },
    {
      icon: <FaPencilRuler className="text-4xl text-[#fb9c24]" />,
      title: "Design Systems",
      description: "Consistent, scalable design systems for unified brand experience.",
    },
  ];

  return (
    <GenericServicePage
      title="UI/UX Design Services"
      description="Create delightful user experiences with intuitive interfaces that users love. From wireframes to pixel-perfect designs, we bring your vision to life."
      features={features}
      ctaText="Start Your Design Project"
    />
  );
}

export default UIUXDesign;
