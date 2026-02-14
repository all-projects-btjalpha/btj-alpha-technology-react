import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    { 
      src: "/admirer.png", 
      alt: "Admirer", 
      category: "web",
      title: "Admirer Platform",
      description: "Modern web application"
    },
    { 
      src: "/btjnonbrokerage.png", 
      alt: "BTJ Non Brokerage", 
      category: "web",
      title: "BTJ Non Brokerage",
      description: "Financial services platform"
    },
    { 
      src: "/portfolio/p4.webp", 
      alt: "Portfolio Project", 
      category: "design",
      title: "Creative Design",
      description: "UI/UX Design Project"
    },
    { 
      src: "/btjalphatechnology.png", 
      alt: "BTJ Alpha Technology", 
      category: "web",
      title: "BTJ Alpha Technology",
      description: "Corporate website"
    },
    { 
      src: "/portfolio/p5.webp", 
      alt: "Portfolio Project", 
      category: "app",
      title: "Mobile Application",
      description: "Cross-platform app"
    },
    { 
      src: "/portfolio/p6.webp", 
      alt: "Portfolio Project", 
      category: "design",
      title: "Brand Identity",
      description: "Complete branding solution"
    },
    { 
      src: "/portfolio/D.webp", 
      alt: "Portfolio Project", 
      category: "web",
      title: "E-Commerce Platform",
      description: "Online shopping solution"
    },
    { 
      src: "/portfolio/just2.webp", 
      alt: "Portfolio Project", 
      category: "app",
      title: "App Development",
      description: "Native mobile app"
    },
    { 
      src: "/portfolio/p3.webp", 
      alt: "Portfolio Project", 
      category: "design",
      title: "Digital Marketing",
      description: "Campaign design"
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: "🎯" },
    { id: "web", label: "Web Development", icon: "💻" },
    { id: "app", label: "Mobile Apps", icon: "📱" },
    { id: "design", label: "Design", icon: "🎨" },
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 px-6 max-md:px-4 mt-20 max-md:mt-16 bg-gradient-to-br from-orange-50 via-white to-orange-50/30 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-10 w-64 h-64 bg-[#fb9c24]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -right-10 w-80 h-80 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR PORTFOLIO
              </span>
            </div>
            <h1 className="text-4xl max-md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                Latest Work
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing our finest projects - from web applications to mobile apps and stunning designs
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up">
            {categories.map((category, index) => (
              <button
                key={category.id}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] text-white shadow-xl"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#fb9c24]"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          <div className="text-center mb-8" data-aos="fade-up">
            <p className="text-gray-600">
              Showing <span className="font-bold text-[#fb9c24]">{filteredItems.length}</span> {activeFilter === "all" ? "projects" : `${categories.find(c => c.id === activeFilter)?.label.toLowerCase()}`}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-12 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
              >
                {/* Image Container */}
                <div className="relative h-[350px] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 transform group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-center text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg">
                    {item.category}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 bg-gradient-to-br from-white to-gray-50">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20" data-aos="fade-up">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">😔</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No Projects Found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 max-md:px-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "300+", label: "Happy Clients" },
              { number: "50+", label: "Team Members" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="text-center"
              >
                <div className="text-4xl max-md:text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
            <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
              LET'S WORK TOGETHER
            </span>
          </div>
          <h2 className="text-3xl max-md:text-2xl font-bold text-gray-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We'd love to hear about your project and discuss how we can help bring your vision to life
          </p>
          <a href="/contact">
            <button className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] text-white font-bold py-4 px-10 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Your Project
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
