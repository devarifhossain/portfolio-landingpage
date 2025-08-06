
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1500);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
            <h3 className="text-2xl text-blue-400 mb-6">Just say Hello</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Your Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength="500"
                    rows="6"
                    className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                  />
                  <div className="text-right text-sm text-gray-400 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="text-green-400 text-center font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Contact Info</h4>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always here to assist you. Whether you have inquiries about our services, 
                  need support, or just want to get in touch, feel free to reach out via the methods below. 
                  Our team will respond promptly to ensure you have all the information and assistance you need.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="text-lg font-semibold text-blue-400 mb-3">Email</h5>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <i className="ri-mail-line w-5 h-5 flex items-center justify-center text-blue-400"></i>
                      <Link 
                        href="mailto:hi@marketerarif.com" 
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        hi@marketerarif.com
                      </Link>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-mail-line w-5 h-5 flex items-center justify-center text-blue-400"></i>
                      <Link 
                        href="mailto:info@trackingbygtm.com" 
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        info@trackingbygtm.com
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-blue-400 mb-3">Phone</h5>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-blue-400"></i>
                      <Link 
                        href="tel:+8801749827904" 
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        +88 0174-9827904
                      </Link>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-blue-400"></i>
                      <Link 
                        href="tel:+8801738612417" 
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        +88 0173-8612417
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-blue-400 mb-3">Address</h5>
                  <div className="flex items-start space-x-3">
                    <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-blue-400 mt-1"></i>
                    <span className="text-gray-300">
                      BangaBandhu Avenue Corporate, Gulistan<br />
                      Motijhill Dhaka 1000
                    </span>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-blue-400 mb-3">Visit my social profile and get connected</h5>
                  <div className="flex space-x-4">
                    <Link 
                      href="https://facebook.com/marketerarifhossain" 
                      target="_blank"
                      className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      <i className="ri-facebook-fill text-xl"></i>
                    </Link>
                    <Link 
                      href="https://www.linkedin.com/in/marketerarifhossain/" 
                      target="_blank"
                      className="w-12 h-12 flex items-center justify-center bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors cursor-pointer"
                    >
                      <i className="ri-linkedin-fill text-xl"></i>
                    </Link>
                    <Link 
                      href="https://wa.me/8801749827904" 
                      target="_blank"
                      className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors cursor-pointer"
                    >
                      <i className="ri-whatsapp-fill text-xl"></i>
                    </Link>
                    <Link 
                      href="https://youtube.com/@marketerarifhossain" 
                      target="_blank"
                      className="w-12 h-12 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors cursor-pointer"
                    >
                      <i className="ri-youtube-fill text-xl"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <img 
                  src="https://static.readdy.ai/image/1e02f32095ebcf180cedc1d7fc61c20d/064c252fd5003de91b4326609ee545c3.png" 
                  alt="Logo" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-gray-300 text-sm">
                Professional Digital Marketer & Web Analyst helping businesses grow through data-driven strategies.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
              <nav className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Home
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  About
                </Link>
                <Link href="/portfolio" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Portfolio
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </nav>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Arif Hossain. All rights reserved.<br />
                Built with passion for digital excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
