import React from 'react';
import Image from 'next/image';

interface ManagementMember {
  name: string;
  position: string;
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
    <main className="min-h-screen bg-brand-cream py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider text-brand-green font-semibold">
              LEADERSHIP
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green mb-4">
            OUR MANAGEMENT
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Visionary Leadership Guiding JKKN
          </p>
          {/* Decorative underline */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-16 bg-brand-green rounded"></div>
            <div className="h-1 w-8 bg-brand-yellow rounded"></div>
          </div>
        </header>

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

              {/* Name */}
              <h2 className="text-xl md:text-2xl font-bold text-brand-green mb-2 text-center">
                {member.name}
              </h2>

              {/* Position */}
              <p className="text-sm uppercase text-brand-green tracking-wide font-semibold mb-4">
                {member.position}
              </p>

              {/* Bio */}
              <p className="text-gray-700 leading-relaxed text-center">
                {member.bio}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
