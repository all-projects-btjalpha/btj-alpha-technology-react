import GenericServicePage from "../../components/GenericServicePage";
import { FaRobot, FaSearch, FaMicrophone, FaBrain, FaComments, FaLightbulb } from "react-icons/fa";

function AnswerEngineOptimization() {
  const features = [
    {
      icon: <FaRobot className="text-4xl text-[#fb9c24]" />,
      title: "AI-Powered Optimization",
      description: "Optimize for AI search engines like ChatGPT, Bard, and Bing AI.",
    },
    {
      icon: <FaMicrophone className="text-4xl text-[#fb9c24]" />,
      title: "Voice Search Ready",
      description: "Optimize for voice assistants like Alexa, Siri, and Google Assistant.",
    },
    {
      icon: <FaSearch className="text-4xl text-[#fb9c24]" />,
      title: "Featured Snippets",
      description: "Structure content to appear in featured snippets and answer boxes.",
    },
    {
      icon: <FaBrain className="text-4xl text-[#fb9c24]" />,
      title: "Natural Language Processing",
      description: "Optimize content for natural language queries and conversational search.",
    },
    {
      icon: <FaComments className="text-4xl text-[#fb9c24]" />,
      title: "Q&A Content Strategy",
      description: "Create question-answer format content that AI engines prefer.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#fb9c24]" />,
      title: "Entity Optimization",
      description: "Optimize for entity recognition and knowledge graph inclusion.",
    },
  ];

  return (
    <GenericServicePage
      title="Answer Engine Optimization (AEO)"
      description="Prepare for the future of search with AEO. Optimize your content for AI-powered answer engines and voice search to stay ahead of the curve."
      features={features}
      ctaText="Optimize for AI Search"
    />
  );
}

export default AnswerEngineOptimization;
