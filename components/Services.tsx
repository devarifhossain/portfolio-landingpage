'use client';

export default function Services() {
  const services = [
    {
      icon: 'ri-bar-chart-line',
      title: 'GA4 Implementation & Optimization',
      description: 'Upgrade your analytics with Google Analytics 4 (GA4) implementation, offering powerful insights into user journeys and events across your website and apps.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Web Analytics & Reporting',
      description: 'Unlock insights from your website\'s data with detailed web analytics and reporting, helping you track user behavior, identify trends, and make informed decisions to improve performance.'
    },
    {
      icon: 'ri-advertisement-line',
      title: 'Google Ads Campaign Management',
      description: 'Maximize your ad spend with expertly managed Google Ads campaigns, including keyword research, ad creation, and performance tracking to drive quality traffic.'
    },
    {
      icon: 'ri-facebook-line',
      title: 'Facebook Pixel Integration',
      description: 'Ensure accurate tracking of Facebook Ads performance by setting up and optimizing Facebook Pixel on your website for precise event tracking and better ad targeting.'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Google Tag Manager Setup',
      description: 'Streamline your website\'s tracking with professional Google Tag Manager (GTM) setup, allowing seamless integration for all your tags, events, and third-party tools.'
    },
    {
      icon: 'ri-code-line',
      title: 'WordPress & Shopify Development',
      description: 'Create high-performing, SEO-friendly websites on WordPress and Shopify that are tailored for user experience and optimized for conversions.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600">
            Professional digital marketing and web analytics services to grow your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-2xl mb-6">
                <i className={`${service.icon} text-2xl text-blue-600`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}