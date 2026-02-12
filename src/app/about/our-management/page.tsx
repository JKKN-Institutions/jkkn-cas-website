import React from 'react';
import Image from 'next/image';

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
    bio: "Leadership and Excellence is not merely our motto but the foundation of our values, a testament to our state-of-the-art infrastructure and unwavering commitment to quality education.",
    image: "/images/Our_Management-1.webp"
  },
  {
    name: "SHRI. S. OMMSHARRAVANA",
    position: "DIRECTOR",
    bio: "Our mission empowers students to contribute their best to society and the nation. We are committed to innovative education methodologies that enable quality learning.",
    image: "/images/Our_Management-2.webp"
  },
  {
    name: "MRS. O. ISVARYA LAKSHMI",
    position: "JOINT DIRECTOR",
    bio: "Together, we strive to create an environment where excellence thrives and every student achieves their fullest potential.",
    image: "/images/Our_Management-1.webp"
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

        {/* Management Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementTeam.map((member, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 flex flex-col items-center"
            >
              {/* Profile Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 flex items-center justify-center overflow-hidden relative">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="text-white text-4xl md:text-5xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                )}
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
