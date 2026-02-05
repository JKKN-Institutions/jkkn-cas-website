import React from 'react';
import { Building2, Grid3x3, GraduationCap, Users, Diamond } from 'lucide-react';
import Image from 'next/image';

export default function OurTrust() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-5xl">

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Diamond className="w-3 h-3 text-brand-green fill-brand-green" />
            <span className="text-xs text-brand-green font-semibold tracking-wider">EST. 1969</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-green mb-3">
            OUR TRUST
          </h1>
          <p className="text-gray-600 text-base">
            J.K.K. Rangammal Charitable Trust
          </p>
        </div>

        {/* Founder Profile Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-amber-100 via-amber-200 to-amber-100 flex items-center justify-center relative overflow-hidden">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-[10px] border-amber-400/60"></div>
                <div className="absolute inset-3 rounded-full border-[8px] border-amber-500/40"></div>

                {/* Profile image placeholder - circular gradient */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-700 to-teal-900 overflow-hidden">
                  {/* Placeholder for actual image */}
                </div>

                {/* Badge */}
                <div className="absolute -bottom-2 -right-2 w-11 h-11 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-brand-green font-bold text-lg">B</span>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                SHRI. J.K.K. NATARAJAH
              </h2>
              <p className="text-xs text-orange-600 font-medium uppercase tracking-wide mb-6">
                Founder of J.K.K. Rangammal Charitable Trust
              </p>

              <div className="space-y-3">
                <p className="text-sm leading-relaxed">
                  <span className="text-orange-500 italic">"In the sixties, female children in kammarapalayam had to walk 2-4 km for their schooling so</span>{' '}
                  <span className="text-teal-700">late elderly Shri.n of Bhavani, fetching the need for women's education, a visionary</span>{' '}
                  <span className="text-gray-900">philanthropist of the zone, Shri.J.K.K. Natarajah, initiated a girls' school in the town in 1965."</span>
                </p>

                <div className="flex justify-center md:justify-start">
                  <div className="inline-block">
                    <div className="text-2xl font-bold text-brand-green leading-none mb-1">JKKN</div>
                    <div className="text-[10px] text-pink-500 font-medium">One Inspiring Family</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy of Service Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-6">
            A Legacy of Service
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            <span className="text-brand-green">The J.K.K. Rangammal Charitable Trust was established in 1969</span>{' '}
            <span className="text-gray-900">
              with the motto of providing literacy and women's empowerment. Walking in the footsteps of her father, Smt. N. Sendamaraai, Managing Trustee, expanded the service by providing multi-disciplinary education to both genders.
            </span>{' '}
            <span className="text-brand-green">
              Now, under the umbrella, there are ten institutions, including Dental, Pharmacy, Nursing, Diploma, Engineering, Arts, and Science colleges.
            </span>
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Year Established */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5 text-brand-green" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">1,969</h3>
            <p className="text-gray-500 text-xs uppercase tracking-wide font-medium">Year Established</p>
          </div>

          {/* Card 2 - Institutions */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
              <Grid3x3 className="w-5 h-5 text-brand-green" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">10+</h3>
            <p className="text-gray-500 text-xs uppercase tracking-wide font-medium">Institutions</p>
          </div>

          {/* Card 3 - Alumni */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5 text-brand-green" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">50,000+</h3>
            <p className="text-gray-500 text-xs uppercase tracking-wide font-medium">Alumni</p>
          </div>

          {/* Card 4 - Current Students */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-brand-green" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">5,000+</h3>
            <p className="text-gray-500 text-xs uppercase tracking-wide font-medium">Current Students</p>
          </div>
        </div>

      </div>
    </div>
  );
}
