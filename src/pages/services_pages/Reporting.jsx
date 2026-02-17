import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaChartBar, FaTable, FaChartLine, FaFileAlt, FaChartPie, FaDatabase,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaShieldAlt, FaUsers,
  FaClock, FaLaptop, FaMobileAlt, FaCloudUploadAlt, FaSync, FaFilter
} from "react-icons/fa";
import { 
  SiTableau, SiGoogleanalytics, 
  SiApache, SiMongodb
} from "react-icons/si";

function Reporting() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const reportingServices = [
    {
      icon: <FaChartBar className="text-4xl text-purple-600" />,
      title: "Finance",
      description: "Comprehensive financial reporting including P&L statements, balance sheets, cash flow analysis, and budget tracking for informed financial decisions."
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "HR",
      description: "Employee analytics, attendance reports, performance metrics, recruitment tracking, and workforce planning dashboards."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-600" />,
      title: "Banking",
      description: "Transaction reporting, account statements, loan analytics, risk assessment, compliance reports, and regulatory reporting solutions."
    },
    {
      icon: <FaLaptop className="text-4xl text-orange-600" />,
      title: "IT",
      description: "Infrastructure monitoring, system performance analytics, incident reports, asset management, and IT service desk dashboards."
    },
    {
      icon: <FaChartPie className="text-4xl text-pink-600" />,
      title: "Healthcare",
      description: "Patient care analytics, medical records reporting, billing reports, appointment tracking, and clinical performance metrics."
    },
    {
      icon: <FaDatabase className="text-4xl text-cyan-600" />,
      title: "Retail",
      description: "Sales analytics, inventory reports, customer behavior analysis, supply chain tracking, and point-of-sale performance dashboards."
    }
  ];

  const toolsWeUse = [
    {
      icon: <FaChartBar className="text-5xl" style={{ color: "#F2C811" }} />,
      title: "Power BI",
      description: "Microsoft Power BI is a business analytics service that delivers insights to enable fast, informed decisions. We create interactive visualizations with self-service business intelligence capabilities where end users can create reports and dashboards by themselves. Power BI connects to hundreds of data sources, simplifies data prep, and drives ad hoc analysis.",
      features: [
        "Interactive dashboards and reports",
        "Real-time data streaming",
        "AI-powered insights",
        "Mobile app support",
        "Natural language queries",
        "Integration with Microsoft ecosystem"
      ]
    },
    {
      icon: <SiTableau className="text-5xl" style={{ color: "#E97627" }} />,
      title: "Tableau",
      description: "Tableau is a visual analytics platform transforming the way we use data to solve problems. We leverage Tableau to help people see and understand data with intuitive visual analytics. Tableau makes it easier to explore and manage data, and discover and share insights that can change businesses and the world.",
      features: [
        "Drag-and-drop interface",
        "Advanced data blending",
        "Powerful calculations",
        "Collaboration features",
        "Mobile optimization",
        "Enterprise scalability"
      ]
    },
    {
      icon: <FaTable className="text-5xl" style={{ color: "#217346" }} />,
      title: "Excel",
      description: "Microsoft Excel is the industry-leading spreadsheet program, a powerful data visualization and analysis tool. We use Excel to create sophisticated financial models, complex calculations, pivot tables, macros, and custom reporting solutions that integrate seamlessly with other business systems.",
      features: [
        "Advanced formulas and functions",
        "Pivot tables and charts",
        "VBA automation",
        "Data analysis tools",
        "Template customization",
        "Wide compatibility"
      ]
    },
    {
      icon: <SiGoogleanalytics className="text-5xl" style={{ color: "#E37400" }} />,
      title: "Google Analytics",
      description: "Google Analytics is the most popular web analytics service on the internet. We implement GA4 to track and report website traffic, user behavior, conversion funnels, and marketing campaign effectiveness. It provides valuable insights about your audience, their engagement patterns, and helps optimize digital marketing strategies.",
      features: [
        "Real-time traffic monitoring",
        "Audience segmentation",
        "Conversion tracking",
        "E-commerce analytics",
        "Custom event tracking",
        "Integration with Google Ads"
      ]
    },
    {
      icon: <SiApache className="text-5xl" style={{ color: "#D22128" }} />,
      title: "Apache Superset",
      description: "Apache Superset is a modern, enterprise-ready business intelligence web application. It's fast, lightweight, intuitive, and loaded with options that make it easy for users to explore and visualize their data. We deploy Superset for creating interactive dashboards and performing data exploration without writing code.",
      features: [
        "SQL Lab for data exploration",
        "Rich visualization library",
        "No-code chart builder",
        "Enterprise authentication",
        "Caching and async queries",
        "Cloud-native architecture"
      ]
    },
    {
      icon: <FaChartLine className="text-5xl text-blue-600" />,
      title: "Looker",
      description: "Looker is a modern data platform that provides real-time insights and embedded analytics. We use Looker's unique modeling layer (LookML) to define business metrics once and use them everywhere. It enables self-service analytics while maintaining data governance and consistency across the organization.",
      features: [
        "LookML modeling language",
        "Embedded analytics",
        "Git-based version control",
        "API-first architecture",
        "Data governance tools",
        "Real-time dashboards"
      ]
    },
    {
      icon: <SiMongodb className="text-5xl" style={{ color: "#47A248" }} />,
      title: "MongoDB Charts",
      description: "MongoDB Charts is the fastest and easiest way to create visualizations of MongoDB data. We utilize Charts to build real-time dashboards directly from MongoDB databases without complex ETL processes. It's perfect for operational reporting and monitoring application metrics in real-time.",
      features: [
        "Direct MongoDB integration",
        "Real-time data updates",
        "Aggregation pipeline support",
        "Embeddable charts",
        "Role-based access control",
        "Responsive design"
      ]
    },
    {
      icon: <FaDatabase className="text-5xl text-purple-600" />,
      title: "Metabase",
      description: "Metabase is an open-source business intelligence tool that lets anyone in your organization explore data and build interactive dashboards. We implement Metabase for its simplicity and powerful query builder that doesn't require SQL knowledge. It's perfect for teams wanting to become more data-driven.",
      features: [
        "Question-based interface",
        "Visual query builder",
        "SQL editor for power users",
        "Automated reporting via email",
        "Multi-database support",
        "Lightweight deployment"
      ]
    },
    {
      icon: <FaChartBar className="text-5xl text-indigo-600" />,
      title: "Grafana",
      description: "Grafana is the open-source analytics and interactive visualization web application. We use Grafana primarily for operational monitoring and observability, creating beautiful dashboards for time-series data from various data sources. It's excellent for DevOps, IoT, and infrastructure monitoring.",
      features: [
        "Multiple data source support",
        "Alerting and notifications",
        "Plugin ecosystem",
        "Template variables",
        "Annotation support",
        "Time-series optimization"
      ]
    },
    {
      icon: <FaFileAlt className="text-5xl text-red-600" />,
      title: "Crystal Reports",
      description: "Crystal Reports is a business intelligence application for designing and generating reports from a wide range of data sources. We leverage Crystal Reports for creating pixel-perfect, formatted reports required in enterprise environments. It excels at creating complex, paginated reports for printing and PDF generation.",
      features: [
        "Pixel-perfect formatting",
        "Cross-tab reports",
        "Sub-reports support",
        "Scheduled report delivery",
        "Export to multiple formats",
        "Parameter-driven reports"
      ]
    },
    {
      icon: <FaChartPie className="text-5xl text-teal-600" />,
      title: "Sisense",
      description: "Sisense is an end-to-end business analytics software that enables users to easily prepare and analyze complex datasets. We implement Sisense for its ability to handle large-scale data and provide AI-driven insights. It's ideal for embedded analytics and white-label solutions.",
      features: [
        "In-chip analytics engine",
        "AI-powered insights",
        "Embedded analytics SDK",
        "Data mashup capabilities",
        "White-label options",
        "Mobile-first design"
      ]
    },
    {
      icon: <FaTable className="text-5xl text-amber-600" />,
      title: "QlikView",
      description: "QlikView is a business intelligence and analytics platform that provides self-service BI for all business users. We use QlikView's associative data model to help users freely explore data and make discoveries that drive business value. It's powerful for ad-hoc analysis and data storytelling.",
      features: [
        "Associative data model",
        "In-memory processing",
        "Guided analytics",
        "Collaborative tools",
        "Mobile and offline access",
        "Script-based ETL"
      ]
    }
  ];

  const keyFeatures = [
    {
      title: "Real-Time Data Updates",
      items: [
        "Live data synchronization",
        "Automatic refresh schedules",
        "Real-time alerts and notifications",
        "Streaming data support"
      ]
    },
    {
      title: "Customization and Flexibility",
      items: [
        "Custom report templates",
        "Branded dashboards",
        "Flexible filtering options",
        "Personalized user views"
      ]
    },
    {
      title: "Graphical Report Management",
      items: [
        "Interactive charts and graphs",
        "Drill-down capabilities",
        "Heat maps and tree maps",
        "Geo-spatial visualizations"
      ]
    },
    {
      title: "Security and Compliance",
      items: [
        "Role-based access control",
        "Data encryption at rest and transit",
        "Audit trails and logging",
        "GDPR and compliance ready"
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: "Industry Expertise Across Domains",
      description: "Our team brings deep domain knowledge across finance, healthcare, retail, banking, and more, ensuring reports that truly matter to your business."
    },
    {
      title: "Certified BI Professionals",
      description: "Our analysts are certified in Power BI, Tableau, and other leading platforms, delivering professional-grade reporting solutions."
    },
    {
      title: "Scalable Architecture",
      description: "From small business dashboards to enterprise-wide reporting systems, we build solutions that scale with your growth."
    },
    {
      title: "Ongoing Support and Maintenance",
      description: "We provide continuous support, regular updates, and optimization to ensure your reporting infrastructure remains effective."
    }
  ];

  const faqs = [
    {
      question: "What are Reporting and Dashboard Services?",
      answer: "Reporting and Dashboard services involve creating interactive, visual representations of your business data. These services transform raw data from various sources into meaningful insights through charts, graphs, tables, and KPIs. Dashboards provide real-time monitoring of business metrics, while reports offer detailed analysis for decision-making. We design custom solutions that align with your specific business objectives and user needs."
    },
    {
      question: "Which Reporting Tool is Best for My Business?",
      answer: "The best tool depends on your specific needs. Power BI is excellent for Microsoft-centric environments with strong Excel integration. Tableau offers superior visualization capabilities and is ideal for complex data exploration. For web analytics, Google Analytics is unmatched. Metabase and Superset are great open-source options. We analyze your data sources, user base, budget, and technical requirements to recommend the most suitable platform."
    },
    {
      question: "How Long Does it Take to Develop a Custom Dashboard?",
      answer: "Development timelines vary based on complexity. A simple dashboard with basic visualizations takes 2-3 weeks. Medium complexity dashboards with multiple data sources and custom calculations take 4-6 weeks. Enterprise-level solutions with complex data integration, advanced analytics, and custom features can take 8-12 weeks or more. We provide detailed timelines after understanding your requirements."
    },
    {
      question: "Can You Integrate Multiple Data Sources?",
      answer: "Absolutely! We specialize in integrating data from various sources including databases (SQL Server, PostgreSQL, MySQL, MongoDB), cloud platforms (AWS, Azure, GCP), SaaS applications (Salesforce, HubSpot), spreadsheets, APIs, and legacy systems. We create unified dashboards that provide a comprehensive view of your business by connecting all relevant data sources."
    },
    {
      question: "What is the Cost of Reporting Services?",
      answer: "Costs depend on several factors: tool selection (commercial licenses vs open-source), complexity of reports, number of data sources, user count, customization level, and ongoing maintenance needs. Basic dashboards start from a few thousand dollars, while enterprise solutions can range higher. We offer flexible pricing models including one-time development, subscription-based, and managed services. Contact us for a detailed quote based on your requirements."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Reporting/Dashboard<br />
                Services for Better<br />
                Analysis
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Transform your raw data into actionable insights with our comprehensive reporting and dashboard solutions. We design interactive, real-time dashboards that help you monitor KPIs, track performance, and make data-driven decisions with confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openForm}
                  className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fb9c24] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Us
                </button>
                <button
                  onClick={openForm}
                  className="bg-gradient-to-r from-[#ff8c00] to-[#fb9c24] hover:from-[#fb9c24] hover:to-[#ff8c00] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Hire Now
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div data-aos="fade-left" className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
                {/* Dashboard Illustration */}
                <div className="relative">
                  {/* Monitor with Dashboard */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-all w-80">
                    <div className="bg-white rounded-lg p-4 h-64">
                      {/* Dashboard Content */}
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3 text-white">
                          <FaChartLine className="text-2xl mb-2" />
                          <div className="text-xs">Sales</div>
                          <div className="text-lg font-bold">$45K</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-3 text-white">
                          <FaUsers className="text-2xl mb-2" />
                          <div className="text-xs">Users</div>
                          <div className="text-lg font-bold">1.2K</div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3">
                        <div className="flex justify-between mb-2">
                          <FaChartBar className="text-white text-xl" />
                          <FaChartPie className="text-white text-xl" />
                        </div>
                        <div className="space-y-1">
                          <div className="h-2 bg-white/30 rounded"></div>
                          <div className="h-2 bg-white/20 rounded w-4/5"></div>
                          <div className="h-2 bg-white/20 rounded w-3/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Person Illustration */}
                  <div className="absolute -bottom-10 -right-10">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-24 h-32 relative">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-300 rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-blue-400 rounded-t-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leverage the Power Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div data-aos="fade-right" className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  {/* Dashboard Preview */}
                  <div className="flex items-center justify-between mb-4">
                    <FaChartBar className="text-4xl text-blue-600" />
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaChartPie className="text-2xl text-purple-600" />
                      <div className="flex-1 h-3 bg-gradient-to-r from-purple-400 to-purple-200 rounded"></div>
                      <span className="text-sm font-bold text-gray-700">85%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaChartLine className="text-2xl text-green-600" />
                      <div className="flex-1 h-3 bg-gradient-to-r from-green-400 to-green-200 rounded"></div>
                      <span className="text-sm font-bold text-gray-700">92%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaTable className="text-2xl text-orange-600" />
                      <div className="flex-1 h-3 bg-gradient-to-r from-orange-400 to-orange-200 rounded"></div>
                      <span className="text-sm font-bold text-gray-700">78%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leverage the Power of Data Visualization to Transform Your Business Growth
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Data visualization is the key to unlocking hidden patterns and trends in your business data. Our expertly designed dashboards transform complex datasets into intuitive visual stories that anyone in your organization can understand and act upon.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From real-time KPI monitoring to deep-dive analytical reports, we create visualization solutions that empower your team to make faster, smarter decisions. Track performance metrics, identify opportunities, and respond to challenges with confidence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you need financial dashboards, operational reports, or customer analytics, our solutions are tailored to your specific industry and business needs, driving measurable growth and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Services for Industries */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reporting and Analytics Services Curated for Different Industries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reportingServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tools We Use
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsWeUse.map((tool, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{tool.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{tool.description}</p>
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <FaCheckCircle className="text-[#fb9c24] flex-shrink-0 text-sm mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of Our Dashboard Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <FaCheckCircle className="text-[#fb9c24] flex-shrink-0 text-sm mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Started Now. We can help get your project delivered.
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Transform your data into actionable insights with our expert reporting and dashboard solutions.
          </p>
          <button
            onClick={openForm}
            className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Why Choose Step2gen */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Step2gen as Your Data Visualization and Reporting Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <FaChevronUp className="text-[#fb9c24] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isPopupOpen && <UserForm onClose={closeForm} />}
    </div>
  );
}

export default Reporting;
