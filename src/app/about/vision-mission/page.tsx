import React from 'react';
import { Eye, Target } from 'lucide-react';

export default function VisionMission() {
  return (
    <div className="min-h-screen bg-brand-cream py-12 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-brand-green mb-16">
          Vision And Mission
        </h1>

        {/* Our Vision Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
            {/* Vision Text Content */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-6">
                Our Vision
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                To be a Leading Global Innovative Solutions provider for the ever-changing needs of the society
              </p>
            </div>

            {/* Vision Icon */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer eye shape - solid green */}
                  <path
                    d="M100 60C60 60 25 85 10 100C25 115 60 140 100 140C140 140 175 115 190 100C175 85 140 60 100 60Z"
                    fill="#0b6d41"
                  />
                  {/* White circle for iris/sclera */}
                  <circle
                    cx="100"
                    cy="100"
                    r="32"
                    fill="white"
                  />
                  {/* Outer ring of iris */}
                  <circle
                    cx="100"
                    cy="100"
                    r="26"
                    fill="#0b6d41"
                  />
                  {/* Inner dark pupil */}
                  <circle
                    cx="100"
                    cy="100"
                    r="12"
                    fill="#064428"
                  />
                  {/* Small highlight */}
                  <circle
                    cx="104"
                    cy="96"
                    r="4"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div>
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
            {/* Mission Text Content */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-6">
                Our Mission
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our goal is to encourage students to push the limits of their fields by promoting interdisciplinary collaboration and exploring the convergence of biology with other areas. We strive to nurture curiosity, creativity, and critical thinking in our learners, aiming for academic excellence and the development of innovative solutions to complex societal issues. We believe that by addressing these challenges, we can make a positive impact on our world.
              </p>
            </div>

            {/* Mission Icon */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer target circles */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#0b6d41"
                    strokeWidth="6"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="55"
                    fill="none"
                    stroke="#0b6d41"
                    strokeWidth="6"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="30"
                    fill="none"
                    stroke="#0b6d41"
                    strokeWidth="6"
                  />
                  {/* Center circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="12"
                    fill="#0b6d41"
                  />
                  {/* Arrow pointing to center */}
                  <path
                    d="M20 60L70 85L65 75L75 70Z"
                    fill="#0b6d41"
                    stroke="#0b6d41"
                    strokeWidth="3"
                  />
                  <line
                    x1="20"
                    y1="60"
                    x2="70"
                    y2="85"
                    stroke="#0b6d41"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
