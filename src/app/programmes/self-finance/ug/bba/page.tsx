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
  Rocket,
  ShoppingCart,
  Package
} from 'lucide-react';

export default function BBAPage() {
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
      question: "What is the duration of the BBA programme?",
      answer: "The BBA (Bachelor of Business Administration) programme is a 3-year full-time undergraduate degree comprising six semesters with practical projects, internships, and industry exposure."
    },
    {
      question: "What are the career opportunities after BBA?",
      answer: "BBA graduates can pursue careers in corporate management, marketing, finance, banking, human resources, entrepreneurship, business consulting, retail management, supply chain management, and can also pursue higher studies like MBA, CA, CMA, and other professional courses."
    },
    {
      question: "What is the eligibility criteria for BBA admission?",
      answer: "Candidates must have completed Higher Secondary (10+2) from any recognized board with a minimum of 50% aggregate marks. Students from any stream (Science, Commerce, or Arts) can apply for BBA admission."
    },
    {
      question: "Is BBA better than B.Com for a management career?",
      answer: "BBA offers a broader management-focused curriculum covering all business functions, making it ideal for those aiming for general management roles or entrepreneurship. B.Com is more focused on accounting and commerce. BBA provides better exposure to marketing, HR, and strategic management from the undergraduate level."
    },
    {
      question: "What is the average salary after completing BBA?",
      answer: "Entry-level positions for BBA graduates typically offer packages ranging from ₹3 to ₹6 lakhs per annum depending on the role and company. With experience and an MBA, salaries can significantly increase to ₹10-25 lakhs per annum in senior management positions."
    },
    {
      question: "Are internships part of the BBA programme?",
      answer: "Yes, internships are mandatory in the BBA programme. Students complete a summer internship project after the fourth semester and a final project in the sixth semester. The college has tie-ups with leading companies across various industries to provide quality internship opportunities."
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
            "name": "Bachelor of Business Administration (BBA)",
            "description": "A comprehensive 3-year undergraduate programme in Business Administration covering management principles, marketing, finance, human resources, entrepreneurship, and business analytics designed to develop leadership, strategic thinking, and professional management skills.",
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
            "educationalCredentialAwarded": "Bachelor of Business Administration (BBA)",
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
                Bachelor of Business Administration
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 font-light">
                Master the Art of Strategic Management and Business Leadership
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
                    subtitle: "Accredited",
                    description: "Quality assured education",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: Rocket,
                    title: "MBA",
                    subtitle: "Pathway Ready",
                    description: "Direct MBA preparation",
                    color: "bg-[#ffde59]"
                  },
                  {
                    icon: Briefcase,
                    title: "90%+",
                    subtitle: "Placement Rate",
                    description: "Top corporate recruiters",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: CheckCircle,
                    title: "Industry",
                    subtitle: "Internships",
                    description: "Real-world experience",
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
                      The Bachelor of Business Administration (BBA) is a comprehensive three-year undergraduate programme designed to provide Learners with a solid foundation in business management, leadership, and entrepreneurship. This UGC-recognized programme offers an ideal blend of theoretical knowledge and practical application, preparing graduates for successful careers in corporate management, startups, and business consulting.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our progressive education philosophy ensures that Learners develop strategic thinking, analytical capabilities, and leadership skills through experiential learning. The curriculum integrates core management disciplines with contemporary business practices including digital marketing, business analytics, e-commerce, and sustainable business strategies, equipping graduates with competencies demanded by multinational corporations, SMEs, and entrepreneurial ventures.
                    </p>
                  </div>

                  {/* Feature Grid - 2x2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Industry-integrated curriculum with live projects</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Expert learning facilitators with corporate experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Mandatory corporate internships and summer projects</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Guest lectures by industry leaders and entrepreneurs</p>
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
                  Requirements and pathways to join our BBA programme
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
                        <span>Higher Secondary (10+2) from any recognized board in any stream</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Students from Science, Commerce, or Arts are eligible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Equivalent qualifications recognized by UGC</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 2: Minimum Marks */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-1 bg-gradient-to-r from-[#0b6d41] to-[#0d8a52]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Minimum Marks
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>General Category: 50% aggregate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>OBC Category: 45% aggregate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>SC/ST Category: 40% aggregate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Differently Abled: 40% aggregate</span>
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
                        <span>Candidates must have completed 17 years of age as on December 31st of the admission year</span>
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
                        <span>10th & 12th Mark Sheets & Certificates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Transfer Certificate (TC)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Community Certificate (if applicable)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Passport Size Photographs</span>
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
                        <span>Online/Offline Application Submission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Merit-based Selection Process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Personal Interview (if required)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Document Verification & Enrollment</span>
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
                        { name: "Principles of Management", code: "BBA101" },
                        { name: "Business Economics", code: "BBA102" },
                        { name: "Financial Accounting", code: "BBA103" },
                        { name: "Business Communication", code: "BBA104" },
                        { name: "Business Mathematics", code: "BBA105" },
                        { name: "Computer Applications for Business", code: "BBA106" }
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
                        { name: "Organizational Behaviour", code: "BBA201" },
                        { name: "Business Environment", code: "BBA202" },
                        { name: "Cost Accounting", code: "BBA203" },
                        { name: "Business Statistics", code: "BBA204" },
                        { name: "Environmental Studies", code: "EVS201" },
                        { name: "Professional Communication Skills", code: "BBA206" }
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
                        { name: "Marketing Management", code: "BBA301" },
                        { name: "Human Resource Management", code: "BBA302" },
                        { name: "Financial Management", code: "BBA303" },
                        { name: "Production & Operations Management", code: "BBA304" },
                        { name: "Business Law", code: "BBA305" },
                        { name: "Management Information Systems", code: "BBA306" }
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
                        { name: "Consumer Behaviour & Marketing Research", code: "BBA401" },
                        { name: "Training & Development", code: "BBA402" },
                        { name: "Investment Management", code: "BBA403" },
                        { name: "Supply Chain Management", code: "BBA404" },
                        { name: "Corporate Law", code: "BBA405" },
                        { name: "Summer Internship Project", code: "BBA406P" }
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
                        { name: "Strategic Management", code: "BBA501" },
                        { name: "Entrepreneurship Development", code: "BBA502" },
                        { name: "Business Analytics", code: "BBA503" },
                        { name: "International Business Management", code: "BBA504" },
                        { name: "Digital Marketing", code: "BBA505" },
                        { name: "Elective: Banking & Insurance / Retail Management", code: "BBA506E" }
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
                        { name: "Corporate Governance & Ethics", code: "BBA601" },
                        { name: "E-Commerce & Digital Business", code: "BBA602" },
                        { name: "Business Research Methods", code: "BBA603" },
                        { name: "Leadership & Change Management", code: "BBA604" },
                        { name: "Project Report & Viva Voce", code: "BBA605P" },
                        { name: "Elective: Event Management / Startup Ecosystem", code: "BBA606E" }
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
                {/* Card 1: Strategic Leadership */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">01</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Strategic Leadership
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Develop visionary leadership capabilities with the ability to formulate and execute business strategies, lead diverse teams, and drive organizational success.
                  </p>
                </div>

                {/* Card 2: Analytical Decision Making */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <LineChart className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">02</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Analytical Decision Making
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Master data-driven decision making using business analytics, financial analysis, and market research to solve complex business problems.
                  </p>
                </div>

                {/* Card 3: Financial Acumen */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">03</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Financial Acumen
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Acquire comprehensive understanding of financial management, accounting principles, investment strategies, and corporate finance for business growth.
                  </p>
                </div>

                {/* Card 4: People Management */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">04</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    People Management
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Build expertise in human resource management, talent acquisition, employee development, and creating high-performance organizational cultures.
                  </p>
                </div>

                {/* Card 5: Marketing Excellence */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">05</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Marketing Excellence
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Develop proficiency in marketing strategies, consumer behavior analysis, digital marketing, brand management, and customer relationship building.
                  </p>
                </div>

                {/* Card 6: Entrepreneurial Mindset */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">06</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Entrepreneurial Mindset
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Cultivate innovative thinking, business planning skills, startup ecosystem knowledge, and the ability to identify and capitalize on market opportunities.
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
                  Diverse career pathways await BBA graduates
                </p>
              </div>

              {/* Grid of 8 Career Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Card 1: Business Manager */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Business Manager
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Lead business operations in MNCs
                  </p>
                </div>

                {/* Card 2: Marketing Executive */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Marketing Executive
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Drive brand growth & campaigns
                  </p>
                </div>

                {/* Card 3: Financial Analyst */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BarChart className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Financial Analyst
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Analyze investments & portfolios
                  </p>
                </div>

                {/* Card 4: HR Manager */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    HR Manager
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Manage talent & development
                  </p>
                </div>

                {/* Card 5: Entrepreneur */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Entrepreneur
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Start your own venture
                  </p>
                </div>

                {/* Card 6: Business Consultant */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Business Consultant
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Advise corporate clients
                  </p>
                </div>

                {/* Card 7: Sales Manager */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Sales Manager
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Drive revenue & growth
                  </p>
                </div>

                {/* Card 8: Operations Executive */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Package className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Operations Executive
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Optimize business processes
                  </p>
                </div>
              </div>

              {/* Recruiting Sectors */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-[#0b6d41]">Industry Sectors for BBA Graduates</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Banking & Finance",
                    "IT & Technology",
                    "FMCG",
                    "E-Commerce",
                    "Healthcare",
                    "Manufacturing",
                    "Retail",
                    "Consulting",
                    "Media & Advertising",
                    "Hospitality",
                    "Real Estate",
                    "Government Sector"
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
                  State-of-the-art infrastructure for comprehensive learning
                </p>
              </div>

              {/* Grid of 6 Facility Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1: Computer Lab */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Computer Lab</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Computer Lab with Business Software
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Fully equipped labs with MS Office Suite, business analytics tools, and ERP software for hands-on practical training.
                    </p>
                  </div>
                </div>

                {/* Card 2: Digital Library */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#ffde59] to-[#f5d447] p-8 text-center">
                    <h3 className="text-2xl font-bold text-[#0b6d41]">Digital Library</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Digital Library & E-Resources
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Access to business journals, case studies, e-books, and online databases for research and project work.
                    </p>
                  </div>
                </div>

                {/* Card 3: Smart Classroom */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Smart Classroom</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Smart Learning Studios
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Air-conditioned learning studios equipped with smart boards, projectors, and modern teaching aids for interactive learning.
                    </p>
                  </div>
                </div>

                {/* Card 4: Seminar Hall */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Seminar Hall</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Seminar Hall & Conference Room
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated spaces for seminars, guest lectures by industry experts, workshops, and business conferences.
                    </p>
                  </div>
                </div>

                {/* Card 5: Placement Cell */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#ffde59] to-[#f5d447] p-8 text-center">
                    <h3 className="text-2xl font-bold text-[#0b6d41]">Placement Cell</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Placement & Career Guidance Cell
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated placement cell facilitating campus recruitment, career counseling, resume building, and interview preparation.
                    </p>
                  </div>
                </div>

                {/* Card 6: Entrepreneurship Center */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Incubation Center</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Entrepreneurship & Incubation Center
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Support for budding entrepreneurs with mentorship, funding guidance, and resources to launch their startups.
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
                    Why Choose Our BBA Programme?
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
                          70+ Years of Academic Excellence
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Part of J.K.K. Nattraja Educational Institutions with proven legacy in progressive education since 1954.
                        </p>
                      </div>
                    </div>

                    {/* Reason 2 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Industry-Integrated Curriculum
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Curriculum designed in consultation with business leaders and corporate professionals for real-world relevance.
                        </p>
                      </div>
                    </div>

                    {/* Reason 3 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-[#0b6d41]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Expert Learning Facilitators
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Faculty with MBA qualifications and industry experience providing practical insights and mentorship.
                        </p>
                      </div>
                    </div>

                    {/* Reason 4 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Strong Placement Record
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          90%+ placement with leading MNCs, startups, and corporate giants recruiting from campus annually.
                        </p>
                      </div>
                    </div>

                    {/* Reason 5 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-[#0b6d41]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          MBA Preparation Support
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          In-house coaching for CAT, MAT, XAT, and other MBA entrance exams with dedicated preparation programs.
                        </p>
                      </div>
                    </div>

                    {/* Reason 6 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Industry Internships
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Mandatory internship program with leading companies providing hands-on business experience and networking opportunities.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b6d41]">Ready to Start Your Business Management Journey?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join JKKN's BBA programme and build a successful career in business, management, and entrepreneurship
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
