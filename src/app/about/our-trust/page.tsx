import React from 'react';
import { Calendar, Building2, GraduationCap, Users } from 'lucide-react';
import Image from 'next/image';

export default function OurTrust() {
  return (
    <div className="min-h-screen bg-[#fbfbee]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#fbfbee] via-[#f5f5e0] to-[#fbfbee]">
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#0b6d41]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#ffde59]/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs text-[#0b6d41] font-semibold tracking-widest uppercase">EST. 1952</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41] mb-4">
              OUR TRUST
            </h1>
            <div className="w-24 h-1 bg-[#ffde59] mx-auto mb-4"></div>
            <p className="text-[#0b6d41] text-lg font-medium">
              J.K.K. Rangammal Charitable Trust
            </p>
          </div>

          {/* Founder Card */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 md:p-10 mb-12 border border-[#0b6d41]/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image with Golden Border */}
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full relative">
                  {/* Golden decorative border */}
                  <div className="absolute inset-0 rounded-full border-4 border-[#ffde59] p-1">
                    <div className="w-full h-full rounded-full border-4 border-[#d4a829] overflow-hidden bg-white">
                      {/* Profile image placeholder */}
                      <div className="w-full h-full bg-gradient-to-br from-[#0b6d41]/20 to-[#0b6d41]/40"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-3">
                  <div className="inline-block px-4 py-1 bg-[#ffde59] rounded-full mb-3">
                    <span className="text-[#0b6d41] text-xs font-bold uppercase tracking-wide">Founder</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41] mb-2">
                  SHRI. J.K.K. NATARAJAH CHETTIAR
                </h2>
                <p className="text-black text-sm font-medium">
                  Founder of J.K.K. Rangammal Charitable Trust
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {/* Year Established */}
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 text-center border border-[#0b6d41]/20 hover:bg-white/80 transition shadow-xl">
              <div className="w-12 h-12 bg-[#ffde59] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-[#0b6d41]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b6d41] mb-2">1,952</h3>
              <p className="text-black text-xs uppercase tracking-wide font-semibold">Year Established</p>
            </div>

            {/* Institutions */}
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 text-center border border-[#0b6d41]/20 hover:bg-white/80 transition shadow-xl">
              <div className="w-12 h-12 bg-[#ffde59] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-[#0b6d41]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b6d41] mb-2">9</h3>
              <p className="text-black text-xs uppercase tracking-wide font-semibold">Institutions</p>
            </div>

            {/* Alumni */}
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 text-center border border-[#0b6d41]/20 hover:bg-white/80 transition shadow-xl">
              <div className="w-12 h-12 bg-[#ffde59] rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-[#0b6d41]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b6d41] mb-2">50,000+</h3>
              <p className="text-black text-xs uppercase tracking-wide font-semibold">Alumni</p>
            </div>

            {/* Faculty & Staff */}
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 text-center border border-[#0b6d41]/20 hover:bg-white/80 transition shadow-xl">
              <div className="w-12 h-12 bg-[#ffde59] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[#0b6d41]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b6d41] mb-2">7,000+</h3>
              <p className="text-black text-xs uppercase tracking-wide font-semibold">Current Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-[#fbfbee] relative overflow-hidden">
        {/* Decorative blur circles */}
        <div className="absolute top-0 left-20 w-96 h-96 bg-[#0b6d41]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-[#ffde59]/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-[#0b6d41] text-sm font-semibold">● Our Legacy</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41] mb-8">
              Our Story
            </h2>
          </div>

          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-[#0b6d41]/20 shadow-2xl">
            <div className="space-y-6 text-black text-base leading-relaxed">
              <p>
                In the 1960s, female children in Kumarapalayam had to walk 2.5 km to the nearby town of Bhavani for their schooling. Some families hesitated to send their daughters on such long journeys. Realizing the need for women's education, a visionary philanthropist of the zone, Shri. J.K.K. Natarajah Chettiar, initiated a girls' school in Kumarapalayam that started functioning. Recognizing the need for women's education, Shri. J.K.K. Natarajah, a visionary philanthropist, initiated a girls' school in the town.
              </p>

              <p>
                The Trust, J.K.K. Rangammal Charitable Trust (Regd.) No.21 was established in 1969. With the motto of providing literacy and an emphasis on women's empowerment, it was named after the mother of Shri. N. Mahalingam, Managing Trustee. Shri. N. Sendamaraai, his daughter and daughter of Shri. N. Mahalingam, Managing Trustee, expanded the service by providing multidisciplinary education to both genders so that rural India could also be competitive with the rest of the country. With each phase, with the support of like-minded people, under the umbrella of the Trust, now there are ten institutions, inclusive of Dental College, Pharmacy College, Nursing College, Diploma College, Engineering Colleges, and Arts and Science Colleges.
              </p>

              <p>
                Through these colleges, various health camps are also held in rural areas. Study tours to gain field experience in management and teaching fields are conducted. The students are provided with mentorship, training, and internship opportunities, and there exists a well-organized placement cell that works in coordination with the industry so that trained personnel are not lost but placed properly. Trust promotes research with industry interface and innovation and progress on account of that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones Section */}
      <section className="py-16 px-4 bg-[#fbfbee]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41] mb-4">
              Key Milestones
            </h2>
          </div>

          <div className="space-y-4">
            {/* Milestone 1 */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-[#0b6d41]/20 hover:bg-white/80 transition shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ffde59] rounded-full flex items-center justify-center">
                  <span className="text-[#0b6d41] font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0b6d41] mb-2">1952</h3>
                  <h4 className="text-lg font-semibold text-[#0b6d41] mb-2">Girls School Founded</h4>
                  <p className="text-black text-sm">
                    Shri. J.K.K. Natarajah Chettiar established the first girls' school in Kumarapalayam
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-[#0b6d41]/20 hover:bg-white/80 transition shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ffde59] rounded-full flex items-center justify-center">
                  <span className="text-[#0b6d41] font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0b6d41] mb-2">1969</h3>
                  <h4 className="text-lg font-semibold text-[#0b6d41] mb-2">Trust Established</h4>
                  <p className="text-black text-sm">
                    J.K.K. Rangammal Charitable Trust was officially registered
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-[#0b6d41]/20 hover:bg-white/80 transition shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ffde59] rounded-full flex items-center justify-center">
                  <span className="text-[#0b6d41] font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0b6d41] mb-2">1995</h3>
                  <h4 className="text-lg font-semibold text-[#0b6d41] mb-2">College Expansion</h4>
                  <p className="text-black text-sm">
                    Expanded to include Arts and Science College, providing multidisciplinary education
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 4 */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-[#0b6d41]/20 hover:bg-white/80 transition shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ffde59] rounded-full flex items-center justify-center">
                  <span className="text-[#0b6d41] font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0b6d41] mb-2">2025</h3>
                  <h4 className="text-lg font-semibold text-[#0b6d41] mb-2">Multi-Disciplinary Growth</h4>
                  <p className="text-black text-sm">
                    Now operating 9 institutions including Dental, Pharmacy, Nursing, Engineering, and more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
