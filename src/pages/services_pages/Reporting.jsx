import GenericServicePage from "../../components/GenericServicePage";
import { FaChartBar, FaTable, FaChartLine, FaFileAlt, FaChartPie, FaDatabase } from "react-icons/fa";

function Reporting() {
  const features = [
    {
      icon: <FaChartBar className="text-4xl text-[#fb9c24]" />,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with powerful BI dashboards.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Custom Reports",
      description: "Create tailored reports that match your specific business needs and KPIs.",
    },
    {
      icon: <FaTable className="text-4xl text-[#fb9c24]" />,
      title: "Data Visualization",
      description: "Interactive charts, graphs, and dashboards for better data understanding.",
    },
    {
      icon: <FaChartPie className="text-4xl text-[#fb9c24]" />,
      title: "Real-time Analytics",
      description: "Live data updates and real-time reporting for instant decision making.",
    },
    {
      icon: <FaDatabase className="text-4xl text-[#fb9c24]" />,
      title: "Data Integration",
      description: "Connect multiple data sources for comprehensive reporting.",
    },
    {
      icon: <FaFileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Automated Reports",
      description: "Schedule and automate report generation and distribution.",
    },
  ];

  return (
    <GenericServicePage
      title="Reporting & Analytics"
      description="Make data-driven decisions with comprehensive reporting solutions. Visualize your data, track KPIs, and gain actionable insights."
      features={features}
      ctaText="Get Your Reports"
    />
  );
}

export default Reporting;
