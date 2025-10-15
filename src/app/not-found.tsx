'use client';

import Link from 'next/link';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary mb-4">404</div>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          The page might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-800 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            <FaHome className="text-lg" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all border-2 border-primary shadow-lg inline-flex items-center gap-2"
          >
            <FaArrowLeft className="text-lg" />
            Go Back
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Need Help?
          </h2>
          <p className="text-gray-600 mb-4">
            If you&apos;re looking for something specific, try these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="text-primary hover:text-purple-800 transition-colors font-medium">
              Home
            </Link>
            <Link href="/#services" className="text-primary hover:text-purple-800 transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-primary hover:text-purple-800 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-primary hover:text-purple-800 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-8">
          <p className="text-gray-600 mb-4">
            Still can&apos;t find what you&apos;re looking for?
          </p>
          <a
            href="https://wa.me/6284563903?text=Hi!%20I%E2%80%99m%20having%20trouble%20finding%20a%20page%20on%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-full font-bold hover:bg-lime-400 transition-all shadow-lg"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
