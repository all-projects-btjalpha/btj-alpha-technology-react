import GenericServicePage from "../../components/GenericServicePage";
import { FaChartLine, FaBullseye, FaAd, FaGoogle, FaUsers, FaMoneyBillWave } from "react-icons/fa";

function PerformanceMarketing() {
  const features = [
    {
      icon: <FaBullseye className="text-4xl text-[#fb9c24]" />,
      title: "ROI-Focused Campaigns",
      description: "Data-driven campaigns designed to maximize return on investment and revenue.",
    },
    {
      icon: <FaGoogle className="text-4xl text-[#fb9c24]" />,
      title: "Multi-Channel Strategy",
      description: "Integrated campaigns across Google, Facebook, Instagram, and LinkedIn.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Conversion Optimization",
      description: "A/B testing and optimization to improve conversion rates continuously.",
    },
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "Audience Targeting",
      description: "Precise targeting to reach your ideal customers at the right time.",
    },
    {
      icon: <FaAd className="text-4xl text-[#fb9c24]" />,
      title: "Retargeting Campaigns",
      description: "Re-engage visitors who didn't convert with strategic retargeting ads.",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-[#fb9c24]" />,
      title: "Budget Optimization",
      description: "Smart budget allocation across channels for maximum performance.",
    },
  ];

  return (
    <GenericServicePage
      title="Performance Marketing"
      description="Drive measurable results with data-driven performance marketing campaigns. Pay for results, not just impressions. Maximize ROI with our expert strategies."
      features={features}
      ctaText="Boost Your Performance"
    />
  );
}

export default PerformanceMarketing;
