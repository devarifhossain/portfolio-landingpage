
'use client';

import Link from 'next/link';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <h3 className="text-2xl text-blue-600 font-semibold mb-6">
                Hi There! I'm Arif Hossain
              </h3>
              <h4 className="text-xl text-gray-700 font-medium mb-6">
                Web analyst expert
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                I specialize in leveraging data to optimize online performance and improve digital strategies. 
                With expertise in tools like Google Analytics 4 (GA4) and Google Tag Manager (GTM), I track 
                and analyze user behavior, offering actionable insights to enhance website functionality and 
                increase conversions. Whether it's fine-tuning ad campaigns or understanding key performance 
                metrics, I help businesses make data-driven decisions that lead to growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <Link 
                    href="tel:+8801749827904" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +88 0174-9827904
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-mail-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <Link 
                    href="mailto:hi@marketerarif.com" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    hi@marketerarif.com
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <span className="text-gray-600">Metlife, Motijhill Dhaka</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-global-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <span className="text-gray-600">English, Bangla</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-briefcase-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <span className="text-gray-600">Available</span>
                </div>
              </div>
            </div>
            
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer">
              Download CV
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=professional%20male%20digital%20marketing%20expert%20wearing%20business%20casual%20attire%20sitting%20at%20modern%20desk%20with%20multiple%20monitors%20displaying%20analytics%20dashboards%20and%20data%20visualizations%20in%20a%20bright%20contemporary%20office%20environment%20with%20clean%20professional%20lighting&width=600&height=800&seq=about-profile&orientation=portrait"
              alt="Arif Hossain - Digital Marketing Expert"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
