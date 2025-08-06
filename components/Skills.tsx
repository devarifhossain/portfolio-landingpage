
'use client';

import Link from 'next/link';

export default function Skills() {
  const skills = [
    { name: 'Google Analytics (GA4)', percentage: 90 },
    { name: 'Google Tag Manager (GTM)', percentage: 95 },
    { name: 'Facebook Pixel Integration (CAPI)', percentage: 90 },
    { name: 'Google Ads Campaigns', percentage: 85 },
    { name: 'Website Development', percentage: 80 },
    { name: 'Ecommerce Boost', percentage: 90 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Skills
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                All the skills I have in my field of work are highlighted below. With years of experience 
                in digital marketing, web development, and analytics, I've gained proficiency in tools and 
                techniques that drive measurable results. From optimizing websites to setting up advanced 
                tracking mechanisms, I possess the expertise to enhance user experience and improve business 
                performance through data-driven strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="https://www.upwork.com/freelancers/trackingbygtm" 
                  target="_blank"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold text-center whitespace-nowrap cursor-pointer"
                >
                  Hire me on Upwork
                </Link>
                <Link 
                  href="https://www.fiverr.com/tracking_by_gtm" 
                  target="_blank"
                  className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold text-center whitespace-nowrap cursor-pointer"
                >
                  Hire me on Fiverr
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=professional%20digital%20marketing%20expert%20working%20with%20multiple%20computer%20monitors%20displaying%20colorful%20analytics%20dashboards%20charts%20and%20data%20visualizations%20in%20a%20modern%20bright%20office%20workspace%20with%20clean%20contemporary%20design%20and%20professional%20lighting%20setup%20showing%20expertise%20in%20web%20analytics%20and%20digital%20marketing%20tools&width=600&height=700&seq=skills-workspace&orientation=portrait"
              alt="Skills and Analytics Workspace"
              className="w-full h-auto rounded-2xl shadow-xl object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
