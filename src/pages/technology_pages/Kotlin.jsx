import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { SiKotlin } from 'react-icons/si';
import { FaAndroid, FaCode, FaShieldAlt, FaRocket, FaJava, FaMobileAlt } from 'react-icons/fa';

const Kotlin = () => {
  const features = [
    {
      icon: <SiKotlin className="text-4xl text-[#7f52ff]" />,
      title: "Official Android Language",
      description: "Google's preferred language for Android app development since 2019."
    },
    {
      icon: <FaCode className="text-4xl text-[#7f52ff]" />,
      title: "Concise Syntax",
      description: "Modern, expressive syntax that reduces boilerplate code significantly."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#7f52ff]" />,
      title: "Null Safety",
      description: "Built-in null safety to eliminate null pointer exceptions at compile time."
    },
    {
      icon: <FaJava className="text-4xl text-[#7f52ff]" />,
      title: "Java Interoperability",
      description: "100% interoperable with Java - use existing Java libraries seamlessly."
    },
    {
      icon: <FaRocket className="text-4xl text-[#7f52ff]" />,
      title: "Coroutines",
      description: "Simplified asynchronous programming with Kotlin's powerful coroutines."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#7f52ff]" />,
      title: "Multiplatform",
      description: "Share code across Android, iOS, web, and desktop with Kotlin Multiplatform."
    }
  ];

  return (
    <GenericServicePage
      title="Kotlin Development"
      description="Build modern Android apps with Kotlin. Our developers create robust, efficient, and maintainable Android applications using Kotlin's modern features and concise syntax."
      features={features}
      ctaText="Build with Kotlin Today!"
    />
  );
};

export default Kotlin;
