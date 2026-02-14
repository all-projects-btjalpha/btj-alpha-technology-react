import GenericServicePage from "../../components/GenericServicePage";
import { FaCloud, FaAws, FaServer, FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa";

function CloudServices() {
  const features = [
    {
      icon: <FaAws className="text-4xl text-[#fb9c24]" />,
      title: "AWS Solutions",
      description: "Deploy, manage, and scale applications on Amazon Web Services cloud platform.",
    },
    {
      icon: <FaCloud className="text-4xl text-[#fb9c24]" />,
      title: "Azure & GCP",
      description: "Multi-cloud expertise across Microsoft Azure and Google Cloud Platform.",
    },
    {
      icon: <FaServer className="text-4xl text-[#fb9c24]" />,
      title: "Cloud Migration",
      description: "Seamless migration from on-premise to cloud infrastructure.",
    },
    {
      icon: <FaRocket className="text-4xl text-[#fb9c24]" />,
      title: "Auto Scaling",
      description: "Automatic scaling to handle traffic spikes and optimize costs.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#fb9c24]" />,
      title: "Cloud Security",
      description: "Implement IAM, encryption, and security best practices for cloud resources.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Monitoring & Analytics",
      description: "Real-time monitoring, logging, and performance analytics for cloud infrastructure.",
    },
  ];

  return (
    <GenericServicePage
      title="Cloud Services"
      description="Leverage the power of cloud computing with AWS, Azure, and GCP. Scale infinitely, pay only for what you use, and focus on innovation."
      features={features}
      ctaText="Move to the Cloud"
    />
  );
}

export default CloudServices;
