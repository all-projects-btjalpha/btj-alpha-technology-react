import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { FaTasks, FaProjectDiagram, FaUsers, FaChartLine, FaMobileAlt, FaCog } from 'react-icons/fa';

const WorkflowManagement = () => {
  const features = [
    {
      icon: <FaTasks className="text-4xl text-[#fb9c24]" />,
      title: "Task Automation",
      description: "Automate repetitive tasks and workflows with triggers, actions, and conditional logic."
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-[#fb9c24]" />,
      title: "Process Design",
      description: "Visual workflow builder with drag-and-drop interface for creating custom processes."
    },
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "Team Collaboration",
      description: "Collaborative workflows with task assignment, approvals, and team communication."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Performance Tracking",
      description: "Monitor workflow efficiency, bottlenecks, and completion times with analytics."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "Mobile Workflows",
      description: "Approve, review, and manage workflows on mobile devices from anywhere."
    },
    {
      icon: <FaCog className="text-4xl text-[#fb9c24]" />,
      title: "Integration Hub",
      description: "Connect with third-party apps and services for seamless workflow automation."
    }
  ];

  return (
    <GenericServicePage
      title="Workflow Management Solutions"
      description="Streamline business processes with our workflow automation platforms. We build systems that automate tasks, improve efficiency, and eliminate manual bottlenecks in your operations."
      features={features}
      ctaText="Automate Workflows Today!"
    />
  );
};

export default WorkflowManagement;
