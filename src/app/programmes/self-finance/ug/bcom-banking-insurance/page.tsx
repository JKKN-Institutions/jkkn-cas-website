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
  CreditCard,
  TrendingDown,
  Activity
} from 'lucide-react';

export default function BComBankingInsurancePage() {
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
      question: "What is the duration and structure of the B.Com Banking and Insurance programme?",
      answer: "The B.Com Banking and Insurance programme is a 3-year full-time undergraduate degree comprising six semesters. Each year includes two semesters with a combination of core banking subjects, insurance papers, financial accounting, practical software training, and skill-based electives. The final semester includes a mandatory internship and project work component."
    },
    {
      question: "What are the higher education options after B.Com Banking and Insurance?",
      answer: "After completing B.Com Banking and Insurance, learners can pursue M.Com in Banking & Finance, MBA in Finance or Banking Management, Master in Financial Management (MFM), Chartered Accountancy (CA), Company Secretary (CS), CFA, or CAIIB certification. Post-graduation options also include specialized programmes in Risk Management, Investment Banking, and Actuarial Science."
    },
    {
      question: "What competitive exams can I appear for after B.Com Banking and Insurance?",
      answer: "B.Com Banking and Insurance graduates can appear for various competitive examinations including IBPS PO/Clerk, SBI PO/Clerk, RBI Grade B Officer, LIC AAO/ADO, SEBI Grade A, NABARD Grade A/B, Insurance Company recruitment exams, UPSC Civil Services, and State PSC examinations. The programme also prepares learners for professional certifications like IRDA Agent Exam, NISM certifications, and NCFM modules."
    },
    {
      question: "Are internships and practical training included in the curriculum?",
      answer: "Yes, the programme includes mandatory internships with banks, insurance companies, or financial institutions during the final year. Regular industrial visits to RBI, SEBI, NSE/BSE, insurance companies, and commercial banks are organized throughout the programme. The department also conducts banking software training, stock market simulation exercises, and workshops by industry professionals."
    },
    {
      question: "What makes this B.Com Banking and Insurance programme unique?",
      answer: "Our B.Com Banking and Insurance programme stands out due to its industry-aligned curriculum, strong bank and insurance company tie-ups for placements, integrated professional certification training (IRDA, NISM, NCFM), dedicated banking simulation lab, expert Learning Facilitators with industry experience, specialized coaching for bank competitive exams, and focus on fintech and digital banking trends. The programme also offers electives in emerging areas like mutual funds, derivatives, and micro-insurance."
    },
    {
      question: "What is the average salary package for B.Com Banking and Insurance graduates?",
      answer: "Entry-level positions for B.Com Banking and Insurance graduates typically offer packages ranging from ₹3 to ₹5 lakhs per annum depending on the employer and role. Bank Probationary Officers start at ₹4-6 lakhs, while insurance sector positions offer ₹3-4.5 lakhs initially. With experience and additional certifications like CA, CFA, or CAIIB, professionals can command packages of ₹10-20 lakhs per annum in senior roles."
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
            "name": "Bachelor of Commerce in Banking and Insurance",
            "description": "A comprehensive 3-year undergraduate programme in Banking and Insurance covering financial management, risk assessment, insurance principles, banking operations, and investment strategies designed to develop analytical thinking, financial expertise, and professional skills for the BFSI sector.",
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
            "educationalCredentialAwarded": "Bachelor of Commerce (B.Com) in Banking and Insurance",
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
                Bachelor of Commerce in<br />Banking and Insurance
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 font-light">
                Shape Your Future in the Financial Services Industry
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
                    icon: CreditCard,
                    title: "BFSI",
                    subtitle: "Industry Focus",
                    description: "Banking & insurance sector",
                    color: "bg-[#ffde59]"
                  },
                  {
                    icon: Briefcase,
                    title: "90%+",
                    subtitle: "Placement Record",
                    description: "Top BFSI recruiters",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: Award,
                    title: "Certifications",
                    subtitle: "IRDA, NISM, NCFM",
                    description: "Industry credentials",
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
                      The Bachelor of Commerce in Banking and Insurance is a specialized three-year undergraduate programme designed to equip learners with comprehensive knowledge of banking operations, insurance principles, financial management, and risk assessment. This UGC-recognized programme offers an ideal foundation for careers in the rapidly growing Banking, Financial Services, and Insurance (BFSI) sector.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our progressive education philosophy ensures that learners develop analytical thinking, financial acumen, and professional competencies through experiential learning. The curriculum integrates theoretical foundations with practical applications in banking technology, investment management, and regulatory compliance, preparing graduates for diverse roles in commercial banks, insurance companies, NBFCs, and financial institutions.
                    </p>
                  </div>

                  {/* Feature Grid - 2x2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Industry-aligned curriculum with banking software training</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Expert learning facilitators with industry background</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Industrial visits & mandatory internships</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">IRDA, NISM & NCFM certification training</p>
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
                  Requirements and pathways to join our B.Com Banking and Insurance programme
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
                        <span>Higher Secondary (10+2) from a recognized board in any stream. Commerce stream preferred but not mandatory.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Candidates from Science or Arts streams are also eligible to apply for the programme.</span>
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

                {/* Card 3: Accepted Streams */}
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
                        <span>Commerce with Accountancy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Science stream (PCM/PCB)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Arts and Humanities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Vocational Commerce courses</span>
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
                        { name: "Financial Accounting I", code: "BBI101" },
                        { name: "Principles of Banking", code: "BBI102" },
                        { name: "Business Economics I", code: "BBI103" },
                        { name: "Business Communication", code: "BBI104" },
                        { name: "Foundation Course I", code: "BBI105" },
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
                        { name: "Financial Accounting II", code: "BBI201" },
                        { name: "Principles of Insurance", code: "BBI202" },
                        { name: "Business Economics II", code: "BBI203" },
                        { name: "Quantitative Methods I", code: "BBI204" },
                        { name: "Foundation Course II", code: "BBI205" },
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
                        { name: "Corporate Accounting I", code: "BBI301" },
                        { name: "Banking Law & Operations", code: "BBI302" },
                        { name: "Life Insurance", code: "BBI303" },
                        { name: "Business Law", code: "BBI304" },
                        { name: "Information Technology in Banking", code: "BBI305" },
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
                        { name: "Corporate Accounting II", code: "BBI401" },
                        { name: "Central Banking (RBI)", code: "BBI402" },
                        { name: "General Insurance", code: "BBI403" },
                        { name: "Cost Accounting", code: "BBI404" },
                        { name: "Marketing in Banking & Insurance", code: "BBI405" },
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
                        { name: "Financial Management", code: "BBI501" },
                        { name: "International Banking", code: "BBI502" },
                        { name: "Risk Management in Insurance", code: "BBI503" },
                        { name: "Investment Management", code: "BBI504" },
                        { name: "Auditing & Taxation", code: "BBI505" },
                        { name: "Elective: Mutual Funds / Derivatives", code: "BBI506E" }
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
                        { name: "Financial Markets & Institutions", code: "BBI601" },
                        { name: "Retail Banking", code: "BBI602" },
                        { name: "Health & Motor Insurance", code: "BBI603" },
                        { name: "Rural & Agricultural Banking", code: "BBI604" },
                        { name: "Project Work & Viva", code: "BBI605P" },
                        { name: "Elective: Fintech / Micro-insurance", code: "BBI606E" }
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
                {/* Card 1: Banking Operations */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">01</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Banking Operations Expertise
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Master comprehensive banking operations including deposits, loans, credit management, foreign exchange, and treasury functions in commercial banking environments.
                  </p>
                </div>

                {/* Card 2: Insurance Knowledge */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">02</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Insurance Product Knowledge
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Develop thorough understanding of life, general, health, and motor insurance products, underwriting principles, claims processing, and actuarial concepts.
                  </p>
                </div>

                {/* Card 3: Financial Analysis */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <BarChart className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">03</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Financial Analysis Skills
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Acquire proficiency in financial statement analysis, ratio analysis, investment evaluation, portfolio management, and risk assessment techniques.
                  </p>
                </div>

                {/* Card 4: Risk Management */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">04</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Risk Management Competency
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Understand risk identification, measurement, mitigation strategies, and regulatory compliance requirements in the BFSI sector with practical applications.
                  </p>
                </div>

                {/* Card 5: Digital Banking */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">05</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Digital Banking Proficiency
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Gain hands-on experience with core banking systems, fintech applications, digital payment platforms, and emerging technologies transforming the financial industry.
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
                    Effectively communicate financial concepts, prepare professional reports, presentations, and engage with diverse stakeholders in banking and insurance contexts.
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
                  Diverse career pathways await B.Com Banking and Insurance graduates
                </p>
              </div>

              {/* Grid of 8 Career Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Card 1: Bank PO */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Bank Probationary Officer
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Public/private sector banks
                  </p>
                </div>

                {/* Card 2: Insurance Advisor */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Insurance Advisor
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Life & general insurance companies
                  </p>
                </div>

                {/* Card 3: Investment Analyst */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <LineChart className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Investment Analyst
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Mutual funds & stock broking
                  </p>
                </div>

                {/* Card 4: Credit Analyst */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Credit Analyst
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Loan processing & risk evaluation
                  </p>
                </div>

                {/* Card 5: Claims Officer */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Claims Officer
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Insurance claims processing
                  </p>
                </div>

                {/* Card 6: Financial Consultant */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Financial Consultant
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Wealth management services
                  </p>
                </div>

                {/* Card 7: Government Services */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Government Services
                  </h3>
                  <p className="text-gray-600 text-sm">
                    RBI, SEBI, IRDA, LIC, GIC
                  </p>
                </div>

                {/* Card 8: NBFC Executive */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    NBFC Executive
                  </h3>
                  <p className="text-gray-600 text-sm">
                    NBFCs & fintech firms
                  </p>
                </div>
              </div>

              {/* Recruiting Sectors */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-[#0b6d41]">Key Employment Sectors</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Commercial Banks",
                    "Insurance Companies",
                    "Investment Banking",
                    "Mutual Funds",
                    "Stock Broking",
                    "NBFCs & MFIs",
                    "Fintech Companies",
                    "Wealth Management",
                    "Credit Rating Agencies",
                    "Regulatory Bodies",
                    "Corporate Finance",
                    "Financial Consultancy"
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
                {/* Card 1: Banking Simulation Lab */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Banking Simulation Lab</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Banking Simulation Lab
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Fully equipped computer lab with core banking software, tally, and financial modeling tools for practical hands-on training.
                    </p>
                  </div>
                </div>

                {/* Card 2: Digital Finance Library */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#ffde59] to-[#f5d447] p-8 text-center">
                    <h3 className="text-2xl font-bold text-[#0b6d41]">Digital Library</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Digital Finance Library
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Extensive collection of banking, insurance, and finance journals, e-books, databases, and research materials with online access.
                    </p>
                  </div>
                </div>

                {/* Card 3: Seminar Hall */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Seminar Hall</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Seminar Hall
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Modern audio-visual equipped seminar hall for industry expert sessions, workshops, and certification programmes.
                    </p>
                  </div>
                </div>

                {/* Card 4: Stock Market Lab */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Stock Market Lab</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Stock Market Lab
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Live stock market terminals with trading simulation software for practical experience in securities trading and analysis.
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
                      Placement & Career Cell
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated placement cell with industry connections, interview preparation facilities, and career counseling services.
                    </p>
                  </div>
                </div>

                {/* Card 6: Smart Learning Studios */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Smart Studios</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Smart Learning Studios
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Technology-enabled learning studios with smart boards, video conferencing, and digital learning resources.
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
                    Why Choose Our B.Com Banking and Insurance Programme?
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
                          Expert Learning Facilitators
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Learn from experienced faculty with industry background in banking, insurance, and financial services.
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
                          Bank Industry Partnerships
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          MoUs with leading banks and insurance companies ensuring internships and placement opportunities.
                        </p>
                      </div>
                    </div>

                    {/* Reason 3 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-[#0b6d41]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Professional Certifications
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Integrated IRDA, NISM, and NCFM certification training programs enhancing employability.
                        </p>
                      </div>
                    </div>

                    {/* Reason 4 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Industrial Visits & Internships
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Regular visits to banks, insurance companies, stock exchanges, and mandatory industry internships.
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
                          Dedicated placement cell with 90%+ placement record in BFSI sector companies.
                        </p>
                      </div>
                    </div>

                    {/* Reason 6 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Competitive Exam Coaching
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Special coaching for bank exams (IBPS, SBI PO), insurance exams, and other competitive examinations.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b6d41]">Ready to Start Your Banking & Insurance Journey?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join JKKN's B.Com Banking and Insurance programme and build a successful career in the BFSI sector
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
