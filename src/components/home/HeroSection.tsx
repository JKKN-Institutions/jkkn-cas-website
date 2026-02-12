'use client';

import { Award } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-green via-brand-green to-[#095c37] overflow-hidden h-[calc(100vh-80px)] md:h-[calc(100vh-112px)] flex items-center">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center w-full">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 mb-4 lg:mb-5 px-4 py-1.5 sm:px-5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 w-fit">
              <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-yellow" />
              <span className="text-[12px] sm:text-[14px] font-medium leading-4 sm:leading-5 text-white uppercase">
                NAAC Accredited | UGC Recognized | Periyar University Affiliated
              </span>
            </div>

            {/* Main Heading */}
            <div className="mb-3 lg:mb-5">
              <h1 className="font-bold leading-tight tracking-[-0.9px]">
                <span className="text-white text-[24px] sm:text-[30px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[45px] block">
                  JKKN College of
                </span>
                <span className="text-brand-yellow text-[24px] sm:text-[30px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[45px] block mt-1">
                  Arts &amp; Science
                </span>
                <span className="text-white/90 text-[20px] sm:text-[24px] lg:text-[30px] leading-[28px] sm:leading-[32px] lg:leading-[36px] italic block mt-1 tracking-[-0.75px]">
                  (Autonomous)
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-[14px] sm:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[29.25px] lg:leading-[28px] mb-4 lg:mb-6 text-white/90 font-normal max-w-xl">
              Empowering excellence since 1995. Unlock your potential with industry-integrated programs in Science, Commerce, Computer Applications, and Management. Join 3500+ Learners building successful careers with 95%+ placement at TCS, Infosys, Wipro &amp; more.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-yellow text-brand-green px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 rounded-full font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] hover:bg-brand-yellow/90 transition shadow-xl hover:shadow-2xl hover:scale-105 transform text-center"
              >
                Apply for 2026-27
              </a>
              <button className="bg-transparent border-2 border-white text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 rounded-full font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] hover:bg-white/10 transition backdrop-blur-sm">
                Explore Programs
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg xl:max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
                alt="JKKN College Campus"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
