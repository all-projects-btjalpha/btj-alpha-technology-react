import GenericServicePage from "../../components/GenericServicePage";
import { FaMousePointer, FaAd, FaChartLine, FaGoogle, FaBullseye, FaMoneyCheckAlt } from "react-icons/fa";

function PPCAdvertising() {
  const features = [
    {
      icon: <FaGoogle className="text-4xl text-[#fb9c24]" />,
      title: "Google Ads Management",
      description: "Expert Google Ads campaigns with keyword research and bid optimization.",
    },
    {
      icon: <FaMousePointer className="text-4xl text-[#fb9c24]" />,
      title: "Keyword Strategy",
      description: "Comprehensive keyword research and targeting for maximum visibility.",
    },
    {
      icon: <FaAd className="text-4xl text-[#fb9c24]" />,
      title: "Ad Copy Creation",
      description: "Compelling ad copy that drives clicks and conversions.",
    },
    {
      icon: <FaBullseye className="text-4xl text-[#fb9c24]" />,
      title: "Landing Page Optimization",
      description: "Optimized landing pages for higher quality scores and conversions.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Campaign Analytics",
      description: "Detailed tracking and reporting on campaign performance and ROI.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-4xl text-[#fb9c24]" />,
      title: "Bid Management",
      description: "Strategic bid management to maximize clicks within your budget.",
    },
  ];

  return (
    <GenericServicePage
      title="PPC Advertising Services"
      description="Get instant visibility with Pay-Per-Click advertising. Drive targeted traffic, generate quality leads, and achieve measurable results with optimized PPC campaigns."
      features={features}
      ctaText="Start Your PPC Campaign"
    />
  );
}

export default PPCAdvertising;
