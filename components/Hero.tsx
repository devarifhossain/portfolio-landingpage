"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className=" min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20professional%20office%20workspace%20with%20digital%20marketing%20analytics%20dashboard%20screens%20showing%20colorful%20data%20visualizations%20charts%20and%20graphs%20in%20a%20bright%20clean%20contemporary%20office%20environment%20with%20natural%20lighting%20and%20minimalist%20design%20elements%20perfect%20for%20digital%20marketing%20professional&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex items-center min-h-screen">
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 font-medium">Hello, I'm</p>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Arif
                <br />
                <span className="text-blue-600">Hossain</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-700 font-medium">
                Digital Marketer & Web Analyst
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Link
                  href="https://www.upwork.com/freelancers/trackingbygtm"
                  target="_blank"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-center whitespace-nowrap cursor-pointer"
                >
                  Hire me on Upwork
                </Link>
                <Link
                  href="https://www.fiverr.com/tracking_by_gtm"
                  target="_blank"
                  className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors font-semibold text-center whitespace-nowrap cursor-pointer"
                >
                  Hire me on Fiverr
                </Link>
              </div>

              <div className="flex space-x-4 pt-6">
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
                  href="https://youtube.com/@marketerarifhossain"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors cursor-pointer"
                >
                  <i className="ri-youtube-fill text-xl"></i>
                </Link>
                <Link
                  href="https://wa.me/8801749827904"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors cursor-pointer"
                >
                  <i className="ri-whatsapp-fill text-xl"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
