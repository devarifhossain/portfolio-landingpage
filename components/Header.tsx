
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/1e02f32095ebcf180cedc1d7fc61c20d/064c252fd5003de91b4326609ee545c3.png" 
              alt="Logo" 
              className="h-10 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/resume" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Resume
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="tel:+8801749827904" 
              className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
            >
              +88 0174-9827904
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-line text-xl text-gray-700"></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                About
              </Link>
              <Link href="/resume" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Resume
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Contact
              </Link>
            </nav>
            <div className="pt-4 border-t border-gray-200 mt-4">
              <Link 
                href="tel:+8801749827904" 
                className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                +88 0174-9827904
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
