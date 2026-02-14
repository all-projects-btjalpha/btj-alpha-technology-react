import GenericServicePage from "../../components/GenericServicePage";
import { FaEnvelope, FaBullhorn, FaChartLine, FaUsers, FaPaperPlane, FaMagic } from "react-icons/fa";

function EmailMarketing() {
  const features = [
    {
      icon: <FaEnvelope className="text-4xl text-[#fb9c24]" />,
      title: "Campaign Management",
      description: "End-to-end email campaign management from strategy to execution.",
    },
    {
      icon: <FaMagic className="text-4xl text-[#fb9c24]" />,
      title: "Email Design",
      description: "Beautiful, responsive email templates that work across all devices.",
    },
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "List Segmentation",
      description: "Target the right audience with smart segmentation and personalization.",
    },
    {
      icon: <FaPaperPlane className="text-4xl text-[#fb9c24]" />,
      title: "Automation",
      description: "Set up automated workflows for welcome series, abandoned carts, and more.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "A/B Testing",
      description: "Test subject lines, content, and CTAs to optimize open and click rates.",
    },
    {
      icon: <FaBullhorn className="text-4xl text-[#fb9c24]" />,
      title: "Deliverability Optimization",
      description: "Maximize inbox placement and avoid spam filters.",
    },
  ];

  return (
    <GenericServicePage
      title="Email Marketing Services"
      description="Build lasting relationships with your audience through strategic email marketing. Drive engagement, nurture leads, and boost conversions with personalized campaigns."
      features={features}
      ctaText="Start Email Campaign"
    />
  );
}

export default EmailMarketing;
