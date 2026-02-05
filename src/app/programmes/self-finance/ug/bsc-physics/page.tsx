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
  Calculator,
  Database,
  LineChart,
  Shield,
  Zap,
  ChevronDown,
  Download,
  ExternalLink,
  Atom,
  Microscope,
  FlaskConical,
  Waves
} from 'lucide-react';

export default function BScPhysicsPage() {
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
      question: "What is the duration of the B.Sc Physics programme?",
      answer: "The B.Sc Physics programme is a 3-year full-time undergraduate degree comprising six semesters. Each academic year consists of two semesters with comprehensive theoretical instruction and extensive practical laboratory sessions. The programme includes a mandatory project work component in the final semester."
    },
    {
      question: "What are the career opportunities after completing B.Sc Physics?",
      answer: "B.Sc Physics graduates have diverse career options including scientific research at organizations like ISRO, DRDO, and BARC, teaching and academia, electronics and semiconductor industries, IT and data science roles, medical physics in healthcare, aerospace industry, nuclear energy sector, and government services through UPSC and state PSC examinations."
    },
    {
      question: "What is the eligibility criteria for B.Sc Physics admission?",
      answer: "Candidates must have completed Higher Secondary (10+2) from a recognized board with Physics and Mathematics as compulsory subjects. A minimum aggregate of 50% marks is required for general category candidates and 45% for reserved categories. Chemistry or Computer Science as an additional subject is preferred but not mandatory."
    },
    {
      question: "What higher studies options are available after B.Sc Physics?",
      answer: "Graduates can pursue M.Sc Physics, M.Sc Applied Physics, M.Sc Electronics, Integrated PhD programmes at premier institutions like IITs and IISc, M.Tech in various specializations, MBA, and research positions. Competitive examinations like IIT-JAM, GATE, CSIR-NET/JRF, and JEST open doors to prestigious institutions and research fellowships."
    },
    {
      question: "What is the expected salary package for B.Sc Physics graduates?",
      answer: "Entry-level positions for B.Sc Physics graduates typically offer packages ranging from ₹3 to ₹5 lakhs per annum depending on the sector and role. Positions in research organizations, IT companies, and government services often offer higher packages. With experience and additional qualifications, salaries can increase significantly, with senior positions in research and technology commanding ₹10-20 lakhs per annum."
    },
    {
      question: "Is there scope for research during the B.Sc programme?",
      answer: "Yes, the department encourages research activities from the undergraduate level. Learners can participate in departmental research projects, present papers at seminars and conferences, and publish their work in academic journals. The final semester includes a mandatory project work component where Learners conduct independent research under faculty guidance. Summer research internship opportunities at national laboratories are also facilitated."
    },
    {
      question: "What makes JKKN's B.Sc Physics programme unique?",
      answer: "Our programme stands out through its industry-aligned curriculum, experienced Learning Facilitators with active research profiles, state-of-the-art laboratory facilities, strong placement support, and collaborations with research organizations. The progressive education philosophy ensures holistic development with emphasis on practical skills, computational proficiency, and research aptitude preparing Learners for both industry and academia."
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
            "name": "Bachelor of Science in Physics",
            "description": "A comprehensive 3-year undergraduate programme in Physics covering classical mechanics, quantum physics, electromagnetism, thermodynamics, nuclear physics, and electronics designed to develop scientific thinking, research aptitude, and practical laboratory skills.",
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
            "educationalCredentialAwarded": "Bachelor of Science (B.Sc) in Physics",
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
                Bachelor of Science in<br />Physics
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 font-light">
                Unlock the Mysteries of the Universe Through Science
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
                    icon: GraduationCap,
                    title: "NAAC",
                    subtitle: "Accredited Institution",
                    description: "Quality assured education",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: FlaskConical,
                    title: "Modern",
                    subtitle: "Physics Labs",
                    description: "State-of-the-art facilities",
                    color: "bg-[#ffde59]"
                  },
                  {
                    icon: Briefcase,
                    title: "90%+",
                    subtitle: "Placement Record",
                    description: "Career opportunities",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: Atom,
                    title: "ISRO",
                    subtitle: "Industry Connect",
                    description: "Research collaborations",
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
                      The Bachelor of Science in Physics is a comprehensive three-year undergraduate programme designed to provide Learners with in-depth knowledge of fundamental physics, quantum mechanics, electromagnetism, thermodynamics, and modern physics. This UGC-recognized programme offers a perfect blend of theoretical foundations and practical laboratory experience, preparing graduates for diverse career pathways in scientific research and technology.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our progressive education philosophy ensures that Learners develop scientific temperament, analytical thinking, and problem-solving skills through experiential learning. The curriculum integrates classical physics with modern computational techniques, electronics, and material science, equipping graduates with skills demanded by research institutions, technology industries, and academic organizations worldwide.
                    </p>
                  </div>

                  {/* Feature Grid - 2x2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Industry-Aligned Curriculum</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Expert Learning Facilitators</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Advanced Laboratory Training</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Research Project Experience</p>
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
                  Requirements for joining the B.Sc Physics programme
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
                        <span>Physics & Mathematics as compulsory subjects</span>
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
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Accepted Streams
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Science stream with Physics mandatory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Physics, Chemistry & Mathematics (PCM)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Physics, Chemistry, Mathematics & Computer Science</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Vocational Science courses with Physics</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 3: Documents Required */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-1 bg-gradient-to-r from-[#0b6d41] to-[#0d8a52]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Documents Required
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

                {/* Card 4: Admission Process */}
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

                {/* Card 5: Age Criteria */}
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
                        { name: "Mechanics & Properties of Matter", code: "PHY101" },
                        { name: "Mathematical Physics I", code: "PHY102" },
                        { name: "Electricity & Magnetism", code: "PHY103" },
                        { name: "Practical: Mechanics Lab", code: "PHY104P" },
                        { name: "Allied Mathematics I", code: "MAT101" },
                        { name: "Environmental Studies", code: "EVS101" }
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
                        { name: "Thermal Physics", code: "PHY201" },
                        { name: "Waves & Oscillations", code: "PHY202" },
                        { name: "Mathematical Physics II", code: "PHY203" },
                        { name: "Practical: Thermal & Electricity Lab", code: "PHY204P" },
                        { name: "Allied Mathematics II", code: "MAT102" },
                        { name: "Value Education", code: "VAL101" }
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
                        { name: "Optics", code: "PHY301" },
                        { name: "Electromagnetism", code: "PHY302" },
                        { name: "Digital Electronics", code: "PHY303" },
                        { name: "Practical: Optics Lab", code: "PHY304P" },
                        { name: "Allied Chemistry I", code: "CHE101" },
                        { name: "Soft Skills Development", code: "SKL301" }
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
                        { name: "Classical Mechanics", code: "PHY401" },
                        { name: "Analog Electronics", code: "PHY402" },
                        { name: "Statistical Mechanics", code: "PHY403" },
                        { name: "Practical: Electronics Lab", code: "PHY404P" },
                        { name: "Allied Chemistry II", code: "CHE102" },
                        { name: "Extension Activities", code: "EXT401" }
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
                        { name: "Quantum Mechanics I", code: "PHY501" },
                        { name: "Atomic & Molecular Physics", code: "PHY502" },
                        { name: "Solid State Physics", code: "PHY503" },
                        { name: "Computational Physics", code: "PHY504" },
                        { name: "Practical: Modern Physics Lab", code: "PHY505P" },
                        { name: "Elective: Astrophysics / Material Science", code: "PHY506E" }
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
                        { name: "Quantum Mechanics II", code: "PHY601" },
                        { name: "Nuclear & Particle Physics", code: "PHY602" },
                        { name: "Relativity & Cosmology", code: "PHY603" },
                        { name: "Research Methodology", code: "PHY604" },
                        { name: "Project Work & Viva", code: "PHY605P" },
                        { name: "Elective: Nanophysics / Renewable Energy", code: "PHY606E" }
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
                {/* Card 1: Analytical Thinking */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">01</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Analytical Thinking
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Master systematic approaches to physical problem-solving, mathematical modeling, experimental design, and data interpretation using statistical and computational tools.
                  </p>
                </div>

                {/* Card 2: Theoretical Foundation */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">02</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Theoretical Foundation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Develop comprehensive knowledge of classical and modern physics including mechanics, electromagnetism, quantum physics, and relativity with mathematical rigor.
                  </p>
                </div>

                {/* Card 3: Laboratory Proficiency */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <FlaskConical className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">03</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Laboratory Proficiency
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Acquire hands-on skills in experimental physics, precision measurements, instrumentation, electronics fabrication, and modern laboratory techniques.
                  </p>
                </div>

                {/* Card 4: Computational Skills */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">04</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Computational Skills
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Comprehend numerical methods, programming languages, simulation techniques, and data analysis methodologies essential for modern physics research.
                  </p>
                </div>

                {/* Card 5: Electronics Expertise */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">05</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Electronics Expertise
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Apply analog and digital electronics concepts including circuit design, microcontroller programming, and instrumentation for scientific applications.
                  </p>
                </div>

                {/* Card 6: Professional Communication */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">06</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Professional Communication
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Effectively communicate scientific findings through research papers, presentations, and technical reports while collaborating in multidisciplinary research teams.
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
                  Diverse career pathways in science, technology, and research sectors
                </p>
              </div>

              {/* Grid of 8 Career Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Card 1: Research Scientist */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Microscope className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Research Scientist
                  </h3>
                  <p className="text-gray-600 text-sm">
                    ISRO, DRDO, BARC, CSIR, and national laboratories
                  </p>
                </div>

                {/* Card 2: Educator / Lecturer */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Educator / Lecturer
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Schools, colleges, coaching institutes, and universities
                  </p>
                </div>

                {/* Card 3: Electronics Engineer */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Electronics Engineer
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Semiconductor industries, R&D labs, and tech companies
                  </p>
                </div>

                {/* Card 4: Data Scientist */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Data Scientist
                  </h3>
                  <p className="text-gray-600 text-sm">
                    IT companies, analytics firms, and research organizations
                  </p>
                </div>

                {/* Card 5: Medical Physicist */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Medical Physicist
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Hospitals, diagnostic centers, and radiotherapy units
                  </p>
                </div>

                {/* Card 6: Government Services */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Government Services
                  </h3>
                  <p className="text-gray-600 text-sm">
                    UPSC, State PSC, Indian Forest Service, and regulatory bodies
                  </p>
                </div>

                {/* Card 7: Aerospace Industry */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Aerospace Industry
                  </h3>
                  <p className="text-gray-600 text-sm">
                    HAL, Boeing, Airbus, and space technology companies
                  </p>
                </div>

                {/* Card 8: Energy Sector */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Atom className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Energy Sector
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Nuclear power, renewable energy, and power corporations
                  </p>
                </div>
              </div>

              {/* Recruiting Sectors */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-[#0b6d41]">Key Employment Sectors</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Aerospace & Space Research",
                    "Nuclear Energy",
                    "Electronics & Semiconductors",
                    "Information Technology",
                    "Telecommunications",
                    "Defence Research",
                    "Medical Physics",
                    "Renewable Energy",
                    "Nanotechnology",
                    "Education & Academia",
                    "Government Sector",
                    "Data Analytics"
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
                  State-of-the-art infrastructure supporting world-class education
                </p>
              </div>

              {/* Grid of 6 Facility Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1: Advanced Physics Laboratory */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Physics Lab</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Advanced Physics Laboratory
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Fully equipped laboratory with precision instruments, spectrometers, interferometers, and modern experimental setups for hands-on learning.
                    </p>
                  </div>
                </div>

                {/* Card 2: Electronics Laboratory */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#ffde59] to-[#f5d447] p-8 text-center">
                    <h3 className="text-2xl font-bold text-[#0b6d41]">Electronics Lab</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Electronics Laboratory
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Modern electronics lab with oscilloscopes, function generators, digital trainers, and microcontroller development boards for circuit design and analysis.
                    </p>
                  </div>
                </div>

                {/* Card 3: Computational Physics Lab */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Computer Lab</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Computational Physics Lab
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      High-performance computing facility with specialized software for numerical simulations, data analysis, and scientific programming.
                    </p>
                  </div>
                </div>

                {/* Card 4: Optics & Laser Laboratory */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Optics Lab</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Optics & Laser Laboratory
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Specialized lab equipped with lasers, optical benches, holography setups, and fiber optics equipment for advanced optical experiments.
                    </p>
                  </div>
                </div>

                {/* Card 5: Material Science Lab */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#ffde59] to-[#f5d447] p-8 text-center">
                    <h3 className="text-2xl font-bold text-[#0b6d41]">Material Science</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Material Science Lab
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Research facility for material characterization with XRD, spectroscopy equipment, and sample preparation facilities for advanced studies.
                    </p>
                  </div>
                </div>

                {/* Card 6: Departmental Library */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Library</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Departmental Library
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Well-stocked library with physics textbooks, research journals, e-resources, and access to international physics databases for reference and research.
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
                    Why Choose Our B.Sc Physics Programme?
                  </h2>
                  <div className="w-16 h-1 bg-[#ffde59] mb-8 rounded"></div>

                  <div className="space-y-6">
                    {/* Reason 1 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-[#0b6d41]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Expert Learning Facilitators
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Learn from experienced faculty with doctoral degrees and active research in specialized physics fields.
                        </p>
                      </div>
                    </div>

                    {/* Reason 2 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Microscope className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Research-Oriented Learning
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Engage in research projects with collaboration opportunities with national laboratories like ISRO and DRDO.
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
                          Excellent Placement Support
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Strong industry connections ensuring placement opportunities in leading technology and research organizations.
                        </p>
                      </div>
                    </div>

                    {/* Reason 4 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FlaskConical className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Modern Infrastructure
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Access to well-equipped laboratories, computational facilities, and latest scientific instruments.
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
                          Higher Education Pathways
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Strong foundation for M.Sc Physics, integrated PhD programmes, and competitive exams like IIT-JAM, GATE, and CSIR-NET.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b6d41]">Begin Your Journey in Physical Sciences</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join our B.Sc Physics programme and explore the fundamental laws that govern the universe with hands-on research experience
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#ffde59] hover:bg-[#f5d447] text-[#0b6d41] px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1">
                Apply for Admission
              </button>
              <button className="bg-white border-2 border-[#0b6d41] hover:bg-[#0b6d41] hover:text-white text-[#0b6d41] px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Download Brochure
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
