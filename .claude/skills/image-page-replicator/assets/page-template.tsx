/**
 * Template for creating pages from image designs
 * This template shows the standard structure for a page component
 * with brand colors applied
 */

import React from 'react';
import { Button } from '@/components/ui/button';

export default function PageTemplate() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-brand-green">
              Logo
            </div>
            <ul className="hidden md:flex space-x-8">
              <li>
                <a href="#" className="text-brand-green hover:text-brand-green/80">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-green hover:text-brand-green/80">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-green hover:text-brand-green/80">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-green hover:text-brand-green/80">
                  Contact
                </a>
              </li>
            </ul>
            <button className="bg-brand-green text-white px-6 py-2 rounded-lg hover:bg-brand-green/90 transition">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-brand-cream py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green mb-6">
              Your Main Heading Here
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Your compelling subheading or description goes here. Make it engaging and clear.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-green text-white px-8 py-3 rounded-lg hover:bg-brand-green/90 transition">
                Primary CTA
              </button>
              <button className="bg-brand-yellow text-brand-green px-8 py-3 rounded-lg hover:bg-brand-yellow/90 transition">
                Secondary CTA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green text-center mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white border-2 border-brand-green rounded-lg p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
                {/* Icon placeholder */}
                <span className="text-brand-green text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-green mb-2">
                Feature Title 1
              </h3>
              <p className="text-gray-600">
                Description of the feature goes here. Keep it concise and benefit-focused.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white border-2 border-brand-green rounded-lg p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-green text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-green mb-2">
                Feature Title 2
              </h3>
              <p className="text-gray-600">
                Description of the feature goes here. Keep it concise and benefit-focused.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white border-2 border-brand-green rounded-lg p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-green text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-green mb-2">
                Feature Title 3
              </h3>
              <p className="text-gray-600">
                Description of the feature goes here. Keep it concise and benefit-focused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-green py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of satisfied customers and start your journey today.
            </p>
            <button className="bg-brand-yellow text-brand-green px-8 py-3 rounded-lg hover:bg-brand-yellow/90 transition font-semibold">
              Start Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-green text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Company Name</h3>
              <p className="text-white/80">
                Your company description or tagline goes here.
              </p>
            </div>

            {/* Links Column 1 */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-brand-yellow hover:text-brand-yellow/80">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brand-yellow hover:text-brand-yellow/80">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brand-yellow hover:text-brand-yellow/80">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-brand-yellow hover:text-brand-yellow/80">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brand-yellow hover:text-brand-yellow/80">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brand-yellow hover:text-brand-yellow/80">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-brand-yellow hover:text-brand-yellow/80">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brand-yellow hover:text-brand-yellow/80">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brand-yellow hover:text-brand-yellow/80">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/80">
              © 2026 Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
