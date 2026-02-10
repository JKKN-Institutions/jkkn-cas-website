import React from 'react';
import { Crown, Building2, GraduationCap, MapPin } from 'lucide-react';

interface ManagementMember {
  name: string;
  position: string;
  organization: string;
  bio: string;
  image?: string;
}

const managementTeam: ManagementMember[] = [
  {
    name: "SMT. N. SENDAMARAAI",
    position: "CHAIRPERSON",
    organization: "JKKN INSTITUTIONS",
    bio: "As the Chairperson of JKKN Institutions, I am honoured to shoulder this immense responsibility, and I take great pride in our exceptional progress. We have earned the status of one of the most prestigious colleges in the region. 'Leadership and Excellence' is not merely our motto but the foundation of our values, a testament to our state-of-the-art infrastructure, distinguished faculty, and unwavering commitment to quality education."
  },
  {
    name: "SHRI. S. OMMSHARRAVANA",
    position: "DIRECTOR",
    organization: "JKKN INSTITUTIONS",
    bio: "I extend my heartfelt congratulations to the college for its fervent and focused dedication to shaping future engineers of distinction. At JKKN, we are committed to innovative education methodologies that enable quality learning, foster independent thinking, and facilitate the development of well-rounded personalities. Our mission empowers students to contribute their best to society and the nation."
  }
];

export default function OurManagementPage() {
  return (
    <main className="min-h-screen bg-[#e1e9d4]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#c8d9b8] rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d1e0c0] rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41] mb-4">
              OUR MANAGEMENT
            </h1>
            <div className="w-24 h-1 bg-[#ffde59] mx-auto mb-4"></div>
            <p className="text-[#0b6d41]/80 text-lg md:text-xl">
              Leadership Team of JKKN Institutions
            </p>
          </div>

          {/* Management Cards - 2 Column Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {managementTeam.map((member, index) => (
              <article
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-[#0b6d41]/10 shadow-2xl hover:bg-white/90 transition"
              >
                {/* Profile Image with Golden Border */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6">
                    {/* Golden decorative border - multiple layers */}
                    <div className="absolute inset-0 rounded-full border-[6px] border-[#ffde59]">
                      <div className="absolute inset-2 rounded-full border-[6px] border-[#d4a829]">
                        <div className="absolute inset-2 rounded-full border-[4px] border-[#ffde59]/60">
                          <div className="w-full h-full rounded-full overflow-hidden bg-white">
                            {/* Profile image placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41] mb-3 text-center">
                    {member.name}
                  </h2>

                  {/* Position with Icon */}
                  <div className="flex items-center gap-2 mb-6">
                    <Crown className="w-4 h-4 text-[#ffde59]" />
                    <p className="text-[#ffde59] text-sm font-semibold uppercase tracking-wide">
                      {member.position} - {member.organization}
                    </p>
                  </div>
                </div>

                {/* Bio with Quote Marks */}
                <div className="relative">
                  {/* Opening quote */}
                  <div className="absolute -top-2 -left-2 text-3xl text-[#ffde59]/30 font-serif leading-none">
                    "
                  </div>

                  {/* Bio text */}
                  <p className="text-[#0b6d41]/90 text-sm md:text-base leading-relaxed text-center px-4 relative z-10">
                    {member.bio}
                  </p>

                  {/* Closing quote */}
                  <div className="absolute -bottom-8 -right-2 text-3xl text-[#ffde59]/30 font-serif leading-none">
                    "
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
