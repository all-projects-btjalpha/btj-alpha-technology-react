import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaPython, FaCode, FaRocket, FaBrain, FaDatabase, FaServer } from 'react-icons/fa';

const Python = () => {
  const features = [
    {
      icon: <FaPython className="text-4xl text-[#3776ab]" />,
      title: "Simple & Readable",
      description: "Clean, easy-to-read syntax that emphasizes code readability and productivity."
    },
    {
      icon: <FaCode className="text-4xl text-[#3776ab]" />,
      title: "Versatile Language",
      description: "From web development to AI/ML, data science, automation, and more."
    },
    {
      icon: <FaBrain className="text-4xl text-[#3776ab]" />,
      title: "AI & Machine Learning",
      description: "Leading language for AI/ML with libraries like TensorFlow, PyTorch, and scikit-learn."
    },
    {
      icon: <FaDatabase className="text-4xl text-[#3776ab]" />,
      title: "Data Science",
      description: "Powerful data analysis and visualization with Pandas, NumPy, and Matplotlib."
    },
    {
      icon: <FaServer className="text-4xl text-[#3776ab]" />,
      title: "Web Frameworks",
      description: "Build robust web applications with Django, Flask, and FastAPI frameworks."
    },
    {
      icon: <FaRocket className="text-4xl text-[#3776ab]" />,
      title: "Rapid Development",
      description: "Extensive standard library and third-party packages for fast development."
    }
  ];

  return (
    <GenericServicePage
      title="Python Development"
      description="Build powerful applications with Python. Our developers leverage Python's versatility and extensive libraries to create everything from web apps to AI/ML solutions and data analytics."
      features={features}
      ctaText="Start Your Python Project!"
    />
  );
};

export default Python;
