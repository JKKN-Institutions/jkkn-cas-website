'use client';

import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Users,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Award,
  Briefcase,
  Target,
  Clock,
  Calendar,
  FileText,
  BarChart,
  DollarSign,
  Globe,
  Building,
  UserCheck,
  Brain,
  Lightbulb,
  PieChart,
  Camera,
  Video,
  Palette,
  Film,
  Monitor,
  Zap,
  ChevronDown,
  Download,
  ExternalLink
} from 'lucide-react';

export default function BScVisualCommunicationPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Spotlight effect for cards
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.spotlight-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
    };

    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove as EventListener);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove as EventListener);
      });
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the duration and structure of the B.Sc Visual Communication programme?",
      answer: "The B.Sc Visual Communication programme is a 3-year full-time undergraduate degree comprising six semesters. Each year includes two semesters with a combination of theoretical courses, practical studio sessions, and hands-on projects. The final semester includes a mandatory industry internship and a capstone project for comprehensive portfolio development."
    },
    {
      question: "What are the higher education options after B.Sc Visual Communication?",
      answer: "After completing B.Sc Visual Communication, learners can pursue M.Sc in Visual Communication, M.A. in Mass Communication, M.Des in Graphic Design, MBA in Marketing/Media Management, or specialized programmes in Animation, Film Studies, or Digital Media. Professional certifications in UI/UX Design, Motion Graphics, or Digital Marketing are also valuable additions."
    },
    {
      question: "Do I need to have artistic skills or a design background to join this course?",
      answer: "While having an interest in creative work is beneficial, prior artistic training or design experience is not mandatory. The programme is designed to develop your skills from foundational levels. We start with basic drawing, design principles, and software training, gradually progressing to advanced techniques. Your creativity, enthusiasm, and willingness to learn are more important than existing skills."
    },
    {
      question: "What software and tools will I learn during the programme?",
      answer: "The programme provides comprehensive training in industry-standard software including Adobe Creative Suite (Photoshop, Illustrator, InDesign, Premiere Pro, After Effects), 3D software (Maya, Blender), web design tools (Figma, Adobe XD), and video editing platforms. You'll also learn photography techniques using professional DSLR cameras and studio equipment."
    },
    {
      question: "What makes this B.Sc Visual Communication programme unique?",
      answer: "Our programme stands out due to its industry-aligned curriculum developed in consultation with creative professionals, emphasis on hands-on studio practice with professional equipment, mandatory industry internships, live client projects for portfolio building, expert learning facilitators with active industry experience, and strong placement support connecting graduates with leading creative agencies and media companies across India."
    },
    {
      question: "What is the average salary package for B.Sc Visual Communication graduates?",
      answer: "Entry-level positions for B.Sc Visual Communication graduates typically offer packages ranging from ₹3 to ₹5 lakhs per annum depending on the role and company. Positions in advertising agencies, UI/UX design, and video production often offer higher packages. With experience, strong portfolios, and specialization, salaries can increase significantly, with senior creative positions commanding ₹10-20 lakhs per annum."
    },
    {
      question: "Can I pursue freelance work after completing this programme?",
      answer: "Absolutely! The programme equips you with diverse skills that are highly suitable for freelance work. Many graduates successfully work as freelance graphic designers, photographers, video editors, and content creators. The portfolio developed during the programme and the practical project experience provide a strong foundation for building your freelance career and client base."
    }
  ];

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Bachelor of Science in Visual Communication",
            "description": "A comprehensive 3-year undergraduate programme in Visual Communication covering graphic design, photography, video production, animation, advertising, and digital media designed to develop creative thinking, technical proficiency, and professional skills for the modern media industry.",
            "provider": {
              "@type": "CollegeOrUniversity",
              "name": "J.K.K. Nattraja College of Arts and Science",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kumarapalayam",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "India"
              }
            },
            "educationalCredentialAwarded": "Bachelor of Science (B.Sc) in Visual Communication",
            "timeToComplete": "P3Y",
            "occupationalCredentialAwarded": "UGC Recognized Degree"
          })
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-[#eaf1e2] overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#0b6d41]/5"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#0b6d41]/10 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-[#0b6d41]/20">
                <GraduationCap className="w-4 h-4 text-[#0b6d41]" />
                <span className="text-[#0b6d41]">UGC Recognized Programme</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0b6d41] leading-tight">
                Bachelor of Science in<br />Visual Communication
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 font-light">
                Transform Ideas into Compelling Visual Stories
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-lg border border-[#0b6d41]/20 shadow-sm">
                  <Clock className="w-5 h-5 text-[#0b6d41]" />
                  <span className="font-medium text-gray-700">3 Years Duration</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-lg border border-[#0b6d41]/20 shadow-sm">
                  <Users className="w-5 h-5 text-[#0b6d41]" />
                  <span className="font-medium text-gray-700">Full-Time Programme</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-lg border border-[#0b6d41]/20 shadow-sm">
                  <Calendar className="w-5 h-5 text-[#0b6d41]" />
                  <span className="font-medium text-gray-700">6 Semesters</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button className="bg-[#ffde59] hover:bg-[#f5d447] text-[#0b6d41] px-8 py-3.5 rounded-lg font-bold transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Apply Now
                </button>
                <button className="bg-white border-2 border-[#0b6d41] hover:bg-[#0b6d41] hover:text-white text-[#0b6d41] px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center gap-2 shadow-sm">
                  <FileText className="w-5 h-5" />
                  View Curriculum
                </button>
              </div>

              {/* Highlight Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {[
                  {
                    icon: Camera,
                    title: "Professional",
                    subtitle: "Equipment",
                    description: "Industry-grade studios",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: Palette,
                    title: "Creative",
                    subtitle: "Excellence",
                    description: "Award-winning work",
                    color: "bg-[#ffde59]"
                  },
                  {
                    icon: Briefcase,
                    title: "Industry",
                    subtitle: "Internships",
                    description: "Top media houses",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: Monitor,
                    title: "Adobe",
                    subtitle: "Creative Suite",
                    description: "Professional training",
                    color: "bg-[#ffde59]"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="spotlight-card relative bg-white text-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`
                    }}
                  >
                    {/* Spotlight Effect - CSS Only */}
                    <div
                      className="spotlight-effect absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: item.color === 'bg-[#ffde59]'
                          ? 'radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 222, 89, 0.2), transparent 70%)'
                          : 'radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(11, 109, 65, 0.2), transparent 70%)'
                      }}
                    />

                    {/* Card Content */}
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4">
                        <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center shadow-lg`}>
                          <item.icon className={`w-7 h-7 ${item.color === 'bg-[#ffde59]' ? 'text-[#0b6d41]' : 'text-white'}`} />
                        </div>
                      </div>
                      <h3 className={`text-xl font-bold mb-1 ${item.color === 'bg-[#ffde59]' ? 'text-[#ffde59]' : 'text-[#0b6d41]'}`}>{item.title}</h3>
                      <h4 className="font-semibold text-gray-800 mb-2">{item.subtitle}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programme Overview */}
        <section className="py-16 md:py-20 bg-[#fbfbee]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-5xl mx-auto">
                {/* Main Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-2">Programme Overview</h2>
                  <div className="w-16 h-1 bg-[#ffde59] mb-8 rounded"></div>

                  <div className="space-y-4 mb-10">
                    <p className="text-gray-700 leading-relaxed">
                      The Bachelor of Science in Visual Communication is a dynamic three-year undergraduate programme designed to nurture creative professionals who can effectively communicate ideas through visual media. This UGC-recognized programme offers comprehensive training in graphic design, photography, videography, animation, advertising, and digital media production, preparing graduates for exciting careers in the rapidly evolving creative industry.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our progressive education philosophy emphasizes experiential learning through hands-on studio practice, industry projects, and creative collaboration. The curriculum integrates traditional design principles with cutting-edge digital technologies, equipping learners with both artistic sensibility and technical proficiency demanded by advertising agencies, media houses, film production companies, and digital marketing firms.
                    </p>
                  </div>

                  {/* Feature Grid - 2x2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Industry-aligned curriculum with Adobe Creative Suite training</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Expert learning facilitators with industry experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Professional studio training with state-of-the-art equipment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Industry internship programme with leading agencies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Admission Criteria */}
        <section className="py-16 md:py-20 bg-[#fbfbee]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-3">
                  Eligibility & Admission Criteria
                </h2>
                <p className="text-gray-600 text-lg">
                  Requirements for joining the B.Sc Visual Communication programme
                </p>
              </div>

              {/* Grid of 6 Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1: Academic Qualification */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-1 bg-gradient-to-r from-[#0b6d41] to-[#0d8a52]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Academic Qualification
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Higher Secondary (10+2) from recognized board</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Any stream (Arts/Science/Commerce)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Minimum 50% aggregate marks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>45% for reserved categories</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 2: Accepted Streams */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-1 bg-gradient-to-r from-[#0b6d41] to-[#0d8a52]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Accepted Streams
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Arts stream with any combination</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Science stream (PCM/PCB)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Commerce stream students</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Vocational courses with creative subjects</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 3: Age Criteria */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-1 bg-gradient-to-r from-[#0b6d41] to-[#0d8a52]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <UserCheck className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Age Criteria
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>No upper age limit for admission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Candidates who have completed 17 years of age as on December 31st of the admission year are eligible</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 4: Required Documents */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-1 bg-gradient-to-r from-[#0b6d41] to-[#0d8a52]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Required Documents
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>10th & 12th Mark Sheets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Transfer Certificate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Community Certificate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Passport Size Photographs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Aadhaar Card Copy</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 5: Admission Process */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-1 bg-gradient-to-r from-[#0b6d41] to-[#0d8a52]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Admission Process
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Online/Offline Application</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Document Verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Merit-based Selection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Fee Payment & Enrollment</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 6: Scholarships Available */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-1 bg-gradient-to-r from-[#0b6d41] to-[#0d8a52]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <DollarSign className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Scholarships Available
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Merit Scholarships (Top 10%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Government Scholarships</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Financial Aid for EWS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Sports Quota Benefits</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Curriculum with Tabs */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-12 text-center">Course Curriculum</h2>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
                {[1, 2, 3].map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                      activeYear === year
                        ? 'bg-[#0b6d41] text-white shadow-md'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-[#fbfbee]'
                    }`}
                  >
                    Year {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-7xl mx-auto">
              {/* Year 1 */}
              {activeYear === 1 && (
                <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
                  {/* Semester I */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-[#0b6d41] text-white px-6 py-4">
                      <h3 className="text-xl font-bold">Semester I</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { name: "Introduction to Visual Communication", code: "VCM101" },
                        { name: "Fundamentals of Design", code: "VCM102" },
                        { name: "Drawing & Illustration Basics", code: "VCM103" },
                        { name: "Photography Fundamentals", code: "VCM104" },
                        { name: "Computer Applications for Design", code: "VCM105" },
                        { name: "Communication Theory", code: "VCM106" }
                      ].map((subject, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#ffde59]"></div>
                            <span className="text-gray-700 font-medium">{subject.name}</span>
                          </div>
                          <span className="text-[#0b6d41] font-semibold text-sm">{subject.code}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Semester II */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-[#0b6d41] text-white px-6 py-4">
                      <h3 className="text-xl font-bold">Semester II</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { name: "Typography & Layout Design", code: "VCM201" },
                        { name: "Digital Imaging & Photo Editing", code: "VCM202" },
                        { name: "Color Theory & Application", code: "VCM203" },
                        { name: "Print Media Design", code: "VCM204" },
                        { name: "Mass Communication Basics", code: "VCM205" },
                        { name: "Studio Practice I", code: "VCM206P" }
                      ].map((subject, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#ffde59]"></div>
                            <span className="text-gray-700 font-medium">{subject.name}</span>
                          </div>
                          <span className="text-[#0b6d41] font-semibold text-sm">{subject.code}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Year 2 */}
              {activeYear === 2 && (
                <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
                  {/* Semester III */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-[#0b6d41] text-white px-6 py-4">
                      <h3 className="text-xl font-bold">Semester III</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { name: "Graphic Design & Branding", code: "VCM301" },
                        { name: "Video Production Fundamentals", code: "VCM302" },
                        { name: "Advertising & Campaign Design", code: "VCM303" },
                        { name: "Web Design Basics", code: "VCM304" },
                        { name: "2D Animation Principles", code: "VCM305" },
                        { name: "Studio Practice II", code: "VCM306P" }
                      ].map((subject, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#ffde59]"></div>
                            <span className="text-gray-700 font-medium">{subject.name}</span>
                          </div>
                          <span className="text-[#0b6d41] font-semibold text-sm">{subject.code}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Semester IV */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-[#0b6d41] text-white px-6 py-4">
                      <h3 className="text-xl font-bold">Semester IV</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { name: "Advanced Photography & Lighting", code: "VCM401" },
                        { name: "Motion Graphics & VFX Basics", code: "VCM402" },
                        { name: "Packaging Design", code: "VCM403" },
                        { name: "Digital Marketing Fundamentals", code: "VCM404" },
                        { name: "Film Studies & Appreciation", code: "VCM405" },
                        { name: "Industry Exposure Programme", code: "VCM406P" }
                      ].map((subject, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#ffde59]"></div>
                            <span className="text-gray-700 font-medium">{subject.name}</span>
                          </div>
                          <span className="text-[#0b6d41] font-semibold text-sm">{subject.code}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Year 3 */}
              {activeYear === 3 && (
                <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
                  {/* Semester V */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-[#0b6d41] text-white px-6 py-4">
                      <h3 className="text-xl font-bold">Semester V</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { name: "Advanced Video Editing & Post-Production", code: "VCM501" },
                        { name: "UI/UX Design Principles", code: "VCM502" },
                        { name: "Corporate Communication Design", code: "VCM503" },
                        { name: "3D Modeling & Animation", code: "VCM504" },
                        { name: "Social Media Content Strategy", code: "VCM505" },
                        { name: "Specialization Elective I", code: "VCM506E" }
                      ].map((subject, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#ffde59]"></div>
                            <span className="text-gray-700 font-medium">{subject.name}</span>
                          </div>
                          <span className="text-[#0b6d41] font-semibold text-sm">{subject.code}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Semester VI */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-[#0b6d41] text-white px-6 py-4">
                      <h3 className="text-xl font-bold">Semester VI</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { name: "Documentary & Short Film Production", code: "VCM601" },
                        { name: "Portfolio Development & Presentation", code: "VCM602" },
                        { name: "Media Law & Ethics", code: "VCM603" },
                        { name: "Specialization Elective II", code: "VCM604E" },
                        { name: "Industry Internship", code: "VCM605P" },
                        { name: "Capstone Project", code: "VCM606P" }
                      ].map((subject, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#ffde59]"></div>
                            <span className="text-gray-700 font-medium">{subject.name}</span>
                          </div>
                          <span className="text-[#0b6d41] font-semibold text-sm">{subject.code}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Programme Learning Outcomes */}
        <section className="py-16 md:py-20 bg-[#fbfbee]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-3">
                  Programme Learning Outcomes
                </h2>
                <p className="text-gray-600 text-lg">
                  Skills and competencies you will develop through this programme
                </p>
              </div>

              {/* Grid of 6 Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1: Design Thinking Mastery */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Palette className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">01</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Design Thinking Mastery
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Master systematic approaches to creative problem-solving, concept development, visual research, and design strategy for effective communication solutions.
                  </p>
                </div>

                {/* Card 2: Technical Proficiency */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">02</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Technical Proficiency
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Develop comprehensive expertise in industry-standard software including Adobe Creative Suite, video editing tools, 3D modeling applications, and web design platforms.
                  </p>
                </div>

                {/* Card 3: Visual Storytelling */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Camera className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">03</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Visual Storytelling
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Acquire expertise in crafting compelling narratives through photography, videography, animation, and multimedia content that engage and inspire audiences.
                  </p>
                </div>

                {/* Card 4: Brand Communication */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">04</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Brand Communication
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Understand principles of brand identity development, corporate communication strategies, and creating cohesive visual systems across multiple platforms.
                  </p>
                </div>

                {/* Card 5: Digital Media Production */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Video className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">05</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Digital Media Production
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Apply modern production techniques for video, animation, motion graphics, and interactive media creation for diverse digital platforms and channels.
                  </p>
                </div>

                {/* Card 6: Professional Practice */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">06</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Professional Practice
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Effectively present creative work through professional portfolios, client presentations, and industry-standard documentation while managing creative projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 md:py-20 bg-[#eaf1e2]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0b6d41]">
                  Career Opportunities
                </h2>
                <p className="text-gray-700 text-lg">
                  Exciting career pathways await B.Sc Visual Communication graduates
                </p>
              </div>

              {/* Grid of 8 Career Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Card 1: Graphic Designer */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Graphic Designer
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Branding, advertising, and marketing
                  </p>
                </div>

                {/* Card 2: Video Editor / Filmmaker */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Film className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Video Editor / Filmmaker
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Film production & streaming platforms
                  </p>
                </div>

                {/* Card 3: UI/UX Designer */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    UI/UX Designer
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Websites, apps & digital products
                  </p>
                </div>

                {/* Card 4: Photographer */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Photographer
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Commercial, fashion & editorial
                  </p>
                </div>

                {/* Card 5: Motion Graphics Artist */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Video className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Motion Graphics Artist
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Animation & broadcast media
                  </p>
                </div>

                {/* Card 6: Digital Marketing Specialist */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Digital Marketing Specialist
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Social media & brand communication
                  </p>
                </div>

                {/* Card 7: Art Director */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Art Director
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Advertising agencies & media
                  </p>
                </div>

                {/* Card 8: Web Designer */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Web Designer
                  </h3>
                  <p className="text-gray-600 text-sm">
                    IT companies & digital startups
                  </p>
                </div>
              </div>

              {/* Recruiting Sectors */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-[#0b6d41]">Employment Sectors</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Advertising Agencies",
                    "Film & Television",
                    "Digital Marketing",
                    "Animation Studios",
                    "Publishing Industry",
                    "Corporate Communications",
                    "E-commerce Companies",
                    "Gaming Industry",
                    "News Media",
                    "Photography Studios",
                    "Event Management",
                    "Freelance Creative Work"
                  ].map((sector, idx) => (
                    <span
                      key={idx}
                      className="bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:shadow-md transition-all"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Department Facilities */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-3">
                  Department Facilities
                </h2>
                <p className="text-gray-600 text-lg">
                  State-of-the-art infrastructure supporting world-class creative education
                </p>
              </div>

              {/* Grid of 6 Facility Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1: Digital Design Studio */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Design Studio</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Digital Design Studio
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Fully equipped computer lab with high-performance workstations running Adobe Creative Suite, Autodesk, and other industry-standard software.
                    </p>
                  </div>
                </div>

                {/* Card 2: Photography Studio */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#ffde59] to-[#f5d447] p-8 text-center">
                    <h3 className="text-2xl font-bold text-[#0b6d41]">Photography Studio</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Photography Studio
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Professional photography setup with DSLR cameras, studio lighting equipment, backdrops, and post-processing facilities for commercial shoots.
                    </p>
                  </div>
                </div>

                {/* Card 3: Video Production Lab */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Video Production</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Video Production Lab
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Equipped with professional cameras, green screen facilities, audio recording equipment, and non-linear editing suites for film production.
                    </p>
                  </div>
                </div>

                {/* Card 4: Animation & VFX Lab */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Animation Lab</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Animation & VFX Lab
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated workstations with 3D modeling, animation, and visual effects software including Maya, Blender, and After Effects.
                    </p>
                  </div>
                </div>

                {/* Card 5: Drawing & Illustration Studio */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#ffde59] to-[#f5d447] p-8 text-center">
                    <h3 className="text-2xl font-bold text-[#0b6d41]">Drawing Studio</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Drawing & Illustration Studio
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Spacious studio with drawing boards, lighting setups, reference materials, and digital tablets for traditional and digital illustration work.
                    </p>
                  </div>
                </div>

                {/* Card 6: Media Resource Library */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Media Library</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Media Resource Library
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Extensive collection of design books, magazines, journals, and digital resources including stock footage and image libraries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose JKKN */}
        <section className="py-16 md:py-20 bg-[#fbfbee]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Dark Box */}
                <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] rounded-2xl p-16 flex items-center justify-center min-h-[500px]">
                  <h3 className="text-4xl font-bold text-white text-center">
                    Why Choose JKKN
                  </h3>
                </div>

                {/* Right Side - Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-2">
                    Why Choose Our B.Sc Visual Communication Programme?
                  </h2>
                  <div className="w-16 h-1 bg-[#ffde59] mb-8 rounded"></div>

                  <div className="space-y-6">
                    {/* Reason 1 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-[#0b6d41]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Industry-Experienced Learning Facilitators
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Learn from creative professionals with extensive experience in advertising, film production, and digital media industries.
                        </p>
                      </div>
                    </div>

                    {/* Reason 2 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          State-of-the-Art Studios
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Access professional-grade equipment and software in our photography, video production, animation, and design studios.
                        </p>
                      </div>
                    </div>

                    {/* Reason 3 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-[#0b6d41]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Live Industry Projects
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Work on real client briefs and build your professional portfolio through collaboration with advertising agencies and media companies.
                        </p>
                      </div>
                    </div>

                    {/* Reason 4 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Mandatory Industry Internships
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Gain hands-on experience through internships at advertising agencies, production houses, design studios, and media companies.
                        </p>
                      </div>
                    </div>

                    {/* Reason 5 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-[#0b6d41]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Strong Placement Support
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Dedicated placement cell with connections to leading creative agencies, media houses, and digital companies across India.
                        </p>
                      </div>
                    </div>

                    {/* Reason 6 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Creative Competitions & Exhibitions
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Showcase your talent through inter-college competitions, exhibitions, film festivals, and industry award participations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with Accordion */}
        <section className="py-16 md:py-20 bg-[#fbfbee]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-12 text-center">Frequently Asked Questions</h2>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border-l-4 border-[#0b6d41] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-[#fbfbee] transition-colors"
                    aria-expanded={activeFAQ === index}
                  >
                    <h3 className="font-semibold text-[#0b6d41] pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[#ffde59] flex-shrink-0 transition-transform ${
                        activeFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFAQ === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b6d41]">Ready to Start Your Creative Journey?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join JKKN's B.Sc Visual Communication programme and transform your creative passion into a successful career
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#ffde59] hover:bg-[#f5d447] text-[#0b6d41] px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1">
                Apply Now
              </button>
              <button className="bg-white border-2 border-[#0b6d41] hover:bg-[#0b6d41] hover:text-white text-[#0b6d41] px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Schedule Campus Visit
              </button>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  );
}
