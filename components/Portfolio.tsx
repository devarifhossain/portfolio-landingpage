'use client';

import { useState } from 'react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const googleAdsProjects = [
    {
      id: 1,
      title: "E-commerce Google Ads Campaign",
      category: "Google Ads",
      image: "https://readdy.ai/api/search-image?query=professional%20google%20ads%20dashboard%20interface%20showing%20campaign%20performance%20metrics%20with%20charts%20graphs%20and%20conversion%20data%20on%20computer%20screen%20modern%20clean%20business%20analytics%20workspace&width=400&height=300&seq=portfolio1&orientation=landscape",
      description: "Comprehensive Google Ads campaign management for an e-commerce client, achieving 300% ROAS with strategic keyword targeting and ad optimization.",
      results: "300% ROAS, 45% increase in conversions"
    },
    {
      id: 2,
      title: "Local Business Google Ads Setup",
      category: "Google Ads",
      image: "https://readdy.ai/api/search-image?query=google%20ads%20campaign%20interface%20showing%20local%20business%20advertising%20setup%20with%20location%20targeting%20maps%20and%20performance%20metrics%20professional%20marketing%20workspace&width=400&height=300&seq=portfolio2&orientation=landscape",
      description: "Local service business Google Ads campaign focusing on geo-targeting and local search optimization, resulting in increased local leads and brand visibility.",
      results: "250% increase in local leads, 60% cost reduction"
    },
    {
      id: 3,
      title: "SaaS Google Ads Optimization",
      category: "Google Ads",
      image: "https://readdy.ai/api/search-image?query=saas%20google%20ads%20campaign%20dashboard%20showing%20b2b%20software%20advertising%20metrics%20with%20lead%20generation%20data%20and%20conversion%20tracking%20professional%20workspace&width=400&height=300&seq=portfolio3&orientation=landscape",
      description: "B2B SaaS company Google Ads campaign optimization with focus on lead quality and conversion rate improvement through advanced audience targeting.",
      results: "180% improvement in lead quality, 40% lower CPA"
    }
  ];

  const facebookAdsProjects = [
    {
      id: 4,
      title: "Fashion Brand Facebook Campaign",
      category: "Facebook Ads",
      image: "https://readdy.ai/api/search-image?query=facebook%20ads%20manager%20interface%20showing%20fashion%20brand%20advertising%20campaign%20with%20audience%20insights%20pixel%20tracking%20and%20conversion%20data%20professional%20marketing%20workspace&width=400&height=300&seq=portfolio4&orientation=landscape",
      description: "Complete Facebook Ads strategy for fashion e-commerce brand including Pixel setup, audience research, and conversion optimization campaigns.",
      results: "400% increase in online sales, 2.8 ROAS"
    },
    {
      id: 5,
      title: "Restaurant Facebook Marketing",
      category: "Facebook Ads",
      image: "https://readdy.ai/api/search-image?query=facebook%20ads%20dashboard%20showing%20restaurant%20food%20business%20advertising%20campaign%20with%20local%20targeting%20engagement%20metrics%20and%20conversion%20tracking%20professional%20workspace&width=400&height=300&seq=portfolio5&orientation=landscape",
      description: "Local restaurant Facebook marketing campaign with advanced targeting, custom audiences, and conversion API implementation for accurate tracking.",
      results: "70% increase in reservations, 85% engagement rate"
    },
    {
      id: 6,
      title: "Tech Startup Facebook Ads",
      category: "Facebook Ads",
      image: "https://readdy.ai/api/search-image?query=facebook%20ads%20manager%20showing%20tech%20startup%20b2b%20lead%20generation%20campaign%20with%20lookalike%20audiences%20conversion%20tracking%20and%20performance%20analytics%20professional%20workspace&width=400&height=300&seq=portfolio6&orientation=landscape",
      description: "B2B tech startup lead generation campaign on Facebook with lookalike audiences, lead forms, and comprehensive conversion tracking setup.",
      results: "320% increase in qualified leads, 55% lower CPL"
    }
  ];

  const allProjects = [...googleAdsProjects, ...facebookAdsProjects];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <h3 className="text-2xl text-blue-600 mb-6">My Recent Work</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my recent projects showcasing successful Google Ads and Facebook Ads campaigns. 
            Each project demonstrates strategic thinking, data-driven optimization, and measurable results 
            that have helped businesses achieve their digital marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover object-top hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.category === 'Google Ads' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-600">{project.results}</span>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-96 object-cover object-top"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  selectedProject.category === 'Google Ads' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-blue-500 text-white'
                }`}>
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{selectedProject.description}</p>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-2">Results Achieved</h4>
                <p className="text-green-700 font-medium">{selectedProject.results}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}