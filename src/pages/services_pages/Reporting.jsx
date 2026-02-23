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
      description: "Detailed financial reporting including profit and loss (P&L) statements, balance sheets, cash flow analysis, and budget tracking to support better financial decisions."
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "HR",
      description: "Employee analytics such as attendance reports, performance tracking, recruitment monitoring, and workforce planning dashboards."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-600" />,
      title: "Banking",
      description: "Transaction reports, account statements, loan analytics, risk assessment, compliance reporting, and regulatory reporting solutions."
    },
    {
      icon: <FaLaptop className="text-4xl text-orange-600" />,
      title: "IT",
      description: "Infrastructure monitoring, system performance analytics, incident reporting, asset management, and IT service desk dashboards."
    },
    {
      icon: <FaChartPie className="text-4xl text-pink-600" />,
      title: "Healthcare",
      description: "Patient care analytics, medical records reporting, billing reports, appointment tracking, and clinical performance metrics."
    },
    {
      icon: <FaDatabase className="text-4xl text-cyan-600" />,
      title: "Retail",
      description: "Sales analytics, inventory management reports, customer behavior analysis, supply chain tracking, and point-of-sale performance dashboards."
    }
  ];

  const toolsWeUse = [
    {
      icon: <FaChartBar className="text-5xl" style={{ color: "#F2C811" }} />,
      title: "Power BI",
      description: "A powerful business analytics tool from Microsoft that helps create interactive dashboards and reports.",
      features: [
        "Interactive dashboards and reports",
        "Real-time data streaming",
        "AI-powered insights",
        "Mobile app support",
        "Natural language queries",
        "Seamless integration with Microsoft tools"
      ]
    },
    {
      icon: <SiTableau className="text-5xl" style={{ color: "#E97627" }} />,
      title: "Tableau",
      description: "A popular data visualization tool that makes it easy to analyze and understand data.",
      features: [
        "Drag-and-drop interface",
        "Advanced data blending",
        "Strong calculation engine",
        "Collaboration tools",
        "Mobile-friendly dashboards",
        "Enterprise scalability"
      ]
    },
    {
      icon: <FaTable className="text-5xl" style={{ color: "#217346" }} />,
      title: "Excel",
      description: "A widely used spreadsheet tool for data analysis and reporting.",
      features: [
        "Advanced formulas and functions",
        "Pivot tables and charts",
        "VBA automation",
        "Data analysis tools",
        "Custom templates",
        "Broad compatibility"
      ]
    },
    {
      icon: <SiGoogleanalytics className="text-5xl" style={{ color: "#E37400" }} />,
      title: "Google Analytics",
      description: "A web analytics tool used to track website traffic and user behavior.",
      features: [
        "Real-time traffic monitoring",
        "Audience insights",
        "Conversion tracking",
        "E-commerce tracking",
        "Custom event tracking",
        "Integration with Google Ads"
      ]
    },
    {
      icon: <SiApache className="text-5xl" style={{ color: "#D22128" }} />,
      title: "Apache Superset",
      description: "An open-source business intelligence tool for interactive dashboards and data exploration.",
      features: [
        "SQL-based data exploration",
        "Rich visualization library",
        "No-code chart builder",
        "Enterprise authentication",
        "Caching and async queries",
        "Cloud-ready architecture"
      ]
    },
    {
      icon: <FaChartLine className="text-5xl text-blue-600" />,
      title: "Looker",
      description: "A modern data platform that provides real-time insights and embedded analytics.",
      features: [
        "LookML data modeling",
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
      description: "A visualization tool for creating dashboards directly from MongoDB data.",
      features: [
        "Direct MongoDB integration",
        "Real-time updates",
        "Aggregation support",
        "Embeddable charts",
        "Role-based access control",
        "Responsive design"
      ]
    },
    {
      icon: <FaDatabase className="text-5xl text-purple-600" />,
      title: "Metabase",
      description: "An open-source BI tool that helps teams explore and visualize data easily.",
      features: [
        "Simple question-based interface",
        "Visual query builder",
        "SQL editor for advanced users",
        "Automated reports",
        "Multi-database support",
        "Lightweight setupt"
      ]
    },
    {
      icon: <FaChartBar className="text-5xl text-indigo-600" />,
      title: "Grafana",
      description: "An open-source tool for monitoring and visualizing time-series data.",
      features: [
        "Multiple data source support",
        "Alerting and notifications",
        "Plugin ecosystem",
        "Template variables",
        "Annotation support",
        "Optimized for time-series data"
      ]
    },
    {
      icon: <FaFileAlt className="text-5xl text-red-600" />,
      title: "Crystal Reports",
      description: "A reporting tool used to design and generate detailed business reports.",
      features: [
        "Pixel-perfect formatting",
        "Cross-tab reports",
        "Sub-reports",
        "Scheduled report delivery",
        "Export to multiple formats",
        "Parameter-driven reports"
      ]
    },
    {
      icon: <FaChartPie className="text-5xl text-teal-600" />,
      title: "Sisense",
      description: "A BI platform that helps prepare and analyze complex datasets.",
      features: [
        "In-chip analytics engine",
        "AI-powered insights",
        "Embedded analytics SDK",
        "Data mashup capabilities",
        "White-label options",
        "Mobile-first dashboards"
      ]
    },
    {
      icon: <FaTable className="text-5xl text-amber-600" />,
      title: "QlikView",
      description: "A business intelligence and analytics platform for interactive data exploration.",
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
        "Automatic data refresh",
        "Real-time alerts and notifications",
        "Support for streaming data"
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
        "Drill-down analysis",
        "Heat maps and trend maps",
        "Geo-spatial visualizations"
      ]
    },
    {
      title: "Security and Compliance",
      items: [
        "Role-based access control",
        "Data encryption at rest and transit",
        "Audit logs and tracking",
        "GDPR and compliance-ready solutions"
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: "Industry Expertise Across Domains",
      description: "Our team has strong experience across multiple industries such as finance, healthcare, retail, banking, and more.We create reports and dashboards that truly fit your business needs."
    },
    {
      title: "Certified BI Professionals",
      description: "Our analysts are certified in leading tools like Power BI and Tableau. We deliver high-quality, professional reporting solutions."
    },
    {
      title: "Scalable Architecture",
      description: "From small business dashboards to enterprise-level reporting systems, we build solutions that grow with your business."
    },
    {
      title: "Ongoing Support and Maintenance",
      description: "We provide continuous support, regular updates, and performance optimization to ensure your reporting systems run smoothly at all times."
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
                Reporting & Dashboard<br></br>
                 Services for Better Analysis
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Turn your raw data into meaningful insights with our professional reporting and dashboard solutions.We create interactive, real-time dashboards that help you:  Monitor key performance indicators (KPIs),Track business performance,Analyze trends and patterns,Make confident, data-driven decisions</p>

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
                Data visualization helps you uncover hidden patterns and trends in your business data. Our expertly designed dashboards turn complex datasets into simple and easy-to-understand visual stories that anyone in your organization can use.</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From real-time KPI monitoring to detailed analytical reports, we build visualization solutions that help your team make faster and smarter decisions. Track performance metrics, identify new opportunities, and respond to challenges with confidence. </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you need financial dashboards, operational reports, or customer analytics, our solutions are customized to fit your industry and business goals — helping you achieve measurable growth and a strong competitive advantage.
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
            <p className="text-gray-600 leading-relaxed mb-6">We provide customized reporting and dashboard solutions designed to meet the specific needs of various industries.</p>
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
            <p className="text-gray-600 max-w-2xl mx-auto">Our dashboard solutions are designed to be powerful, flexible, and secure.</p>
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
              Why Choose Step2gen as Your Data Visualization & Reporting Partner
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We combine experience, technical expertise, and long-term support to help your business make better data-driven decisions.</p>
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
