import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaServer, FaCloud, FaUsers, FaChartLine, FaCreditCard, FaRocket } from 'react-icons/fa';

const SaaS = () => {
  const features = [
    {
      icon: <FaServer className="text-4xl text-[#fb9c24]" />,
      title: "Multi-Tenant Architecture",
      description: "Scalable SaaS platforms with secure multi-tenant infrastructure and data isolation."
    },
    {
      icon: <FaCloud className="text-4xl text-[#fb9c24]" />,
      title: "Cloud Infrastructure",
      description: "Deploy on AWS, Azure, or GCP with auto-scaling and high availability."
    },
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "User Management",
      description: "Role-based access control, SSO, team collaboration, and user onboarding."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Analytics Dashboard",
      description: "Real-time analytics on user behavior, feature usage, and business metrics."
    },
    {
      icon: <FaCreditCard className="text-4xl text-[#fb9c24]" />,
      title: "Subscription Billing",
      description: "Automated billing with Stripe/PayPal integration, multiple plans, and invoicing."
    },
    {
      icon: <FaRocket className="text-4xl text-[#fb9c24]" />,
      title: "API Integration",
      description: "RESTful APIs and webhooks for third-party integrations and extensibility."
    }
  ];

  return (
    <GenericServicePage
      title="SaaS Solutions"
      description="Build scalable Software-as-a-Service platforms with our expertise. We create secure, multi-tenant SaaS applications with subscription billing, analytics, and seamless integrations."
      features={features}
      ctaText="Launch Your SaaS Today!"
    />
  );
};

export default SaaS;
