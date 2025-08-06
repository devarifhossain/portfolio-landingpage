'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Founder TrackingbyGTM',
      period: 'June 2023 - Present',
      company: 'Tutor entrepreneur',
      description: 'As the founder of TrackingbyGTM, I specialize in teaching businesses and individuals how to leverage tools like Google Tag Manager (GTM) and Facebook Pixel to track user behavior and optimize digital marketing efforts. I design and deliver in-depth courses that simplify complex tracking systems, helping professionals implement data-driven strategies for better performance.',
      isActive: true
    },
    {
      title: 'Digital Marketing Course Tutor',
      period: 'Jan 2020 - December 2023',
      company: 'Skillupper & WebVisionsBD',
      description: 'I have been a lead tutor for digital marketing courses, covering core areas such as Google Ads, GA4, GTM, and Facebook Pixel. At Skillupper and WebVisionsBD, I\'ve helped students and businesses master the skills needed to run successful digital marketing campaigns and enhance their online presence. My courses focus on practical implementation and measurable results.',
      isActive: false
    },
    {
      title: 'Web Analytics Expert',
      period: 'Jan 2014 - December 2015',
      company: 'GA4, GTM, FB(CAPI), GMC, Google Ads',
      description: 'During this period, I worked as a Web Analytics Expert, providing data-driven insights to optimize online performance. I implemented advanced analytics setups using Google Analytics 4 (GA4), Google Tag Manager (GTM), Facebook Conversion API (CAPI), Google Merchant Center (GMC), and Google Ads. My expertise helped businesses track critical metrics, make informed decisions, and improve their digital marketing strategies.',
      isActive: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600">
            My professional journey in digital marketing and web analytics
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl mr-4">
              <i className="ri-briefcase-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
          </div>
          
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-200"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-6">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0 ${
                      exp.isActive 
                        ? 'bg-purple-600 ring-4 ring-purple-200' 
                        : 'bg-purple-500'
                    }`}>
                      <i className="ri-building-line text-white"></i>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {exp.title}
                          </h4>
                          <p className="text-lg font-medium text-purple-600 mb-1">
                            {exp.company}
                          </p>
                        </div>
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                          exp.isActive 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {exp.isActive && (
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          )}
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex items-center mt-6 pt-6 border-t border-gray-200">
                        <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-lg mr-3">
                          <i className="ri-trophy-line text-purple-600"></i>
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          Specialized in data-driven digital marketing strategies
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">9+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}