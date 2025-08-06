
'use client';

export default function Resume() {
  const education = [
    {
      degree: 'Master of Computer Science',
      period: '2023 - 2025 (expected)',
      institution: 'Jahangirnagar University',
      description: 'Jahangirnagar University is a fully residential public research university located in Savar, Dhaka, Bangladesh. Known for its beautiful campus and vibrant academic environment, it offers a wide range of programs across various disciplines. The university is recognized for its strong emphasis on research and education.'
    },
    {
      degree: 'Bachelor of Computer Science',
      period: '2018 - 2022',
      institution: 'Dhaka University of Engineering and Technology',
      description: 'Dhaka University of Engineering & Technology (DUET), Gazipur, commonly known as DUET and formerly BIT Dhaka, is a public engineering and technological research university located in Gazipur, Bangladesh. DUET specializes in offering undergraduate and postgraduate degrees in engineering.'
    },
    {
      degree: 'Diploma in Computer Science',
      period: '2014 - 2018',
      institution: 'Dinajpur Polytechnic Institute',
      description: 'DINAJPUR Polytechnic institute a largest and reputed Government polytechnic institute in Bangladesh which was established in 1964.'
    }
  ];

  const certifications = [
    'Google Ads Display Certification',
    'Google Ads Search Certification',
    'Google Analytics Individual Qualification',
    'Google Ads Measurement Certification',
    'Google Ads Video Certification',
    'Fundamentals of Digital Marketing',
    'Google Ads Fundamentals'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-xl text-gray-600">
            My educational background and professional certifications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mr-4">
                <i className="ri-graduation-cap-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {index !== education.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-24 bg-blue-200"></div>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full flex-shrink-0">
                      <i className="ri-book-line text-white"></i>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 font-semibold mb-2">
                        {edu.period}
                      </p>
                      <p className="text-lg font-medium text-gray-800 mb-3">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-xl mr-4">
                <i className="ri-award-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Google%20company%20logo%20icon%20on%20clean%20white%20background%20with%20professional%20corporate%20styling%20and%20official%20brand%20colors%20representing%20Google%20certification%20and%20training%20programs&width=60&height=60&seq=google-logo&orientation=squarish"
                  alt="Google"
                  className="w-12 h-12 rounded-lg mr-4 object-cover"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Provider: Google</h4>
                  <p className="text-gray-600">Official Google Certifications</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                      <i className="ri-check-line text-green-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20digital%20certificates%20and%20awards%20displayed%20on%20modern%20office%20desk%20with%20Google%20certification%20badges%20and%20documents%20arranged%20neatly%20in%20bright%20clean%20workspace%20environment%20showcasing%20professional%20achievements%20and%20qualifications&width=500&height=300&seq=certifications-display&orientation=landscape"
                alt="Professional Certifications"
                className="w-full h-auto rounded-2xl shadow-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
