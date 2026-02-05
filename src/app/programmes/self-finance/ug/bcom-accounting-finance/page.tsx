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
  ExternalLink
} from 'lucide-react';

export default function BComAccountingFinancePage() {
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
      question: "What is the difference between B.Com and B.Com Accounting and Finance?",
      answer: "B.Com Accounting and Finance is a specialized commerce programme with deeper focus on financial accounting, corporate finance, taxation, and auditing compared to general B.Com. It includes advanced subjects like Financial Statement Analysis, Investment Management, and Strategic Financial Management, providing stronger foundation for CA/CMA and finance careers."
    },
    {
      question: "Can I pursue CA after B.Com Accounting and Finance?",
      answer: "Yes, B.Com Accounting and Finance graduates are well-prepared for CA (Chartered Accountancy). The programme curriculum aligns with CA Foundation syllabus, and our department provides additional coaching support. Graduates can directly appear for CA Intermediate after completing their degree, with exemptions available for certain papers."
    },
    {
      question: "What software training is provided during the programme?",
      answer: "The programme includes hands-on training in Tally Prime (with GST), Advanced Microsoft Excel, SAP FICO basics, financial modeling using Excel, and data analysis tools. Learners also get exposure to e-filing portals for Income Tax and GST returns, making them industry-ready from day one."
    },
    {
      question: "What is the average placement package for graduates?",
      answer: "Entry-level positions for B.Com Accounting and Finance graduates typically offer packages ranging from ₹3 to ₹5 lakhs per annum depending on the sector and role. Positions in Big 4 firms, investment banks, and top corporates offer higher packages. With CA/CMA qualification and experience, salaries can range from ₹10-25 lakhs per annum."
    },
    {
      question: "Is internship mandatory in the programme?",
      answer: "Yes, the programme includes mandatory internship during the final year. The department facilitates internship placements with CA firms, corporate finance departments, banks, and financial institutions. This provides practical exposure to real-world accounting and finance operations, enhancing employability."
    },
    {
      question: "What competitive exams can I prepare for alongside the degree?",
      answer: "Learners can simultaneously prepare for CA Foundation, CMA Foundation, CFA Level 1, banking examinations (IBPS, SBI PO), RBI Grade B, SSC CGL, and UPSC. The department provides guidance and study materials for these examinations through its dedicated coaching center."
    },
    {
      question: "What are the higher education options after this programme?",
      answer: "Graduates can pursue M.Com, MBA (Finance), M.Phil, Ph.D. in Commerce, or specialized programmes like Master in Financial Management (MFM). Professional qualifications include CA, CMA, CFA, ACCA, CFP, and CAIA. Many graduates also pursue dual specializations combining finance with analytics or fintech."
    },
    {
      question: "Are scholarships available for this programme?",
      answer: "Yes, multiple scholarship options are available including merit scholarships for top performers (covering up to 50% tuition), government scholarships for SC/ST/OBC categories, financial aid for economically weaker sections, and sports quota benefits. The college also has tie-ups with various scholarship foundations for deserving learners."
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
            "name": "Bachelor of Commerce in Accounting and Finance",
            "description": "A comprehensive 3-year undergraduate programme in Accounting and Finance covering financial accounting, corporate finance, taxation, auditing, cost accounting, and financial management designed to develop analytical thinking, professional competence, and practical business skills.",
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
            "educationalCredentialAwarded": "Bachelor of Commerce in Accounting and Finance",
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
                Bachelor of Commerce in<br />Accounting and Finance
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 font-light">
                Master the Art of Financial Excellence and Strategic Business Management
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
                    icon: DollarSign,
                    title: "CA/CMA",
                    subtitle: "Foundation Ready",
                    description: "Professional exam preparation",
                    color: "bg-[#ffde59]"
                  },
                  {
                    icon: Briefcase,
                    title: "90%+",
                    subtitle: "Placement Record",
                    description: "Top corporate recruiters",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: CheckCircle,
                    title: "Industry",
                    subtitle: "Internships",
                    description: "Real-world exposure",
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
                      The Bachelor of Commerce in Accounting and Finance is a comprehensive three-year undergraduate programme designed to provide learners with in-depth knowledge of financial accounting, corporate finance, taxation, auditing, and financial management. This UGC-recognized programme offers a perfect blend of theoretical foundations and practical business experience, preparing graduates for diverse career pathways in the financial sector.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our progressive education philosophy ensures that learners develop analytical thinking, professional competence, and ethical values through experiential learning. The curriculum integrates classical accounting principles with modern financial technologies including Tally, SAP, and financial modeling software, equipping graduates with skills demanded by accounting firms, banks, corporations, and financial institutions.
                    </p>
                  </div>

                  {/* Feature Grid - 2x2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Industry-aligned curriculum with Tally & SAP training</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">CA/CMA/CFA foundation preparation support</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Mandatory internship with leading firms</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#ffde59]">
                      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Guest lectures by industry professionals</p>
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
                  Requirements and pathways to join our B.Com Accounting and Finance programme
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
                        <span>Higher Secondary (10+2) from a recognized board in any stream. Commerce background preferred but not mandatory.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Candidates from Science or Arts streams with basic mathematics are also eligible.</span>
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
                        <span>No upper age limit for admission.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ffde59] mt-1.5">•</span>
                        <span>Candidates who have completed 17 years of age as on December 31st of the admission year are eligible to apply for the programme.</span>
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
                        { name: "Financial Accounting I", code: "ACC101" },
                        { name: "Business Economics", code: "ECO101" },
                        { name: "Business Mathematics", code: "MAT101" },
                        { name: "Business Communication", code: "ENG101" },
                        { name: "Principles of Management", code: "MGT101" },
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
                        { name: "Financial Accounting II", code: "ACC102" },
                        { name: "Business Statistics", code: "STA101" },
                        { name: "Banking Theory & Practice", code: "BNK101" },
                        { name: "Business Law", code: "LAW101" },
                        { name: "Organizational Behaviour", code: "MGT102" },
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
                        { name: "Corporate Accounting I", code: "ACC201" },
                        { name: "Cost Accounting I", code: "COS201" },
                        { name: "Income Tax Law & Practice", code: "TAX201" },
                        { name: "Financial Management", code: "FIN201" },
                        { name: "Computer Applications (Tally)", code: "COM201" },
                        { name: "Soft Skills Development", code: "SKL201" }
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
                        { name: "Corporate Accounting II", code: "ACC202" },
                        { name: "Cost Accounting II", code: "COS202" },
                        { name: "Goods & Services Tax (GST)", code: "TAX202" },
                        { name: "Investment Management", code: "FIN202" },
                        { name: "E-Commerce & Digital Marketing", code: "COM202" },
                        { name: "Extension Activities", code: "EXT201" }
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
                        { name: "Advanced Financial Accounting", code: "ACC301" },
                        { name: "Auditing & Assurance", code: "AUD301" },
                        { name: "Management Accounting", code: "MGA301" },
                        { name: "Financial Markets & Services", code: "FIN301" },
                        { name: "Corporate Law", code: "LAW301" },
                        { name: "Elective: International Finance", code: "FIN302E" }
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
                        { name: "Advanced Auditing", code: "AUD302" },
                        { name: "Financial Statement Analysis", code: "FIN303" },
                        { name: "Strategic Financial Management", code: "FIN304" },
                        { name: "Research Methodology", code: "RES301" },
                        { name: "Project Work & Viva", code: "PRJ301" },
                        { name: "Elective: Financial Modeling", code: "FIN305E" }
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
                {/* Card 1: Financial Expertise */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">01</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Financial Expertise
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Master comprehensive accounting principles, financial reporting standards, and advanced bookkeeping techniques following Indian Accounting Standards (Ind AS) and IFRS.
                  </p>
                </div>

                {/* Card 2: Analytical Proficiency */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <BarChart className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">02</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Analytical Proficiency
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Develop strong analytical skills for financial statement analysis, ratio analysis, budgeting, forecasting, and strategic financial decision-making.
                  </p>
                </div>

                {/* Card 3: Taxation Knowledge */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">03</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Taxation Knowledge
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Acquire comprehensive understanding of direct and indirect taxation including Income Tax, GST, tax planning strategies, and compliance requirements.
                  </p>
                </div>

                {/* Card 4: Auditing Competence */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">04</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Auditing Competence
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Learn systematic approaches to internal and external auditing, risk assessment, internal controls, and audit documentation as per auditing standards.
                  </p>
                </div>

                {/* Card 5: Technology Proficiency */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#ffde59] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <span className="text-[#ffde59] text-sm font-bold">05</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Technology Proficiency
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Apply modern accounting software including Tally Prime, SAP, Excel advanced functions, and financial modeling tools for efficient financial management.
                  </p>
                </div>

                {/* Card 6: Professional Ethics */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">06</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Professional Ethics
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Develop strong ethical foundation, professional communication skills, and leadership qualities essential for finance professionals and chartered accountants.
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
                  Diverse career pathways await B.Com Accounting and Finance graduates
                </p>
              </div>

              {/* Grid of 8 Career Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Card 1: Chartered Accountant */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Chartered Accountant
                  </h3>
                  <p className="text-gray-600 text-sm">
                    CA Foundation & Intermediate preparation
                  </p>
                </div>

                {/* Card 2: Banking Professional */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Banking Professional
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Public & Private sector banks
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
                    Investment research & analysis
                  </p>
                </div>

                {/* Card 4: Tax Consultant */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Tax Consultant
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Income Tax & GST advisory
                  </p>
                </div>

                {/* Card 5: Auditor */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Auditor
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Internal & External auditing
                  </p>
                </div>

                {/* Card 6: Cost Accountant */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Cost Accountant
                  </h3>
                  <p className="text-gray-600 text-sm">
                    CMA professional pathway
                  </p>
                </div>

                {/* Card 7: Corporate Finance */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#ffde59] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-7 h-7 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Corporate Finance
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Finance manager roles in MNCs
                  </p>
                </div>

                {/* Card 8: Academia */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                  <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b6d41]">
                    Academia
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Teaching & Research positions
                  </p>
                </div>
              </div>

              {/* Recruiting Sectors */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-[#0b6d41]">Recruiting Sectors</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Big 4 Accounting Firms",
                    "Commercial Banks",
                    "Investment Banks",
                    "Insurance Companies",
                    "Mutual Fund Houses",
                    "Stock Broking Firms",
                    "Manufacturing Industries",
                    "IT & ITeS Companies",
                    "Government Sector (PSUs)",
                    "Consulting Firms",
                    "E-commerce Companies",
                    "Healthcare Sector"
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
                      Computer Lab with Accounting Software
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Fully equipped labs with Tally Prime, SAP, Advanced Excel, and financial modeling software for hands-on practical training.
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
                      Access to ICAI study materials, financial databases, e-journals, and online resources for research and competitive exam preparation.
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
                      Dedicated spaces for seminars, guest lectures by industry experts, workshops, and professional development programs.
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

                {/* Card 6: CA Study Center */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0b6d41] to-[#085830] p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">CA Study Center</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      CA/CMA Study Center
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated coaching facility for CA Foundation, CMA Foundation, and other professional certification examinations.
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
                    Why Choose Our B.Com Accounting and Finance Programme?
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
                          Curriculum designed in consultation with CA/CMA professionals and corporate finance experts.
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
                          Experienced Learning Facilitators
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Faculty with CA/CMA qualifications and industry experience providing practical insights.
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
                          90%+ placement with top recruiters including Big 4 firms, banks, and MNCs visiting campus annually.
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
                          Professional Certification Support
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          In-house coaching for CA, CMA, CFA, and banking examinations with dedicated study center.
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
                          Mandatory internship program with leading accounting firms and corporate finance departments.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b6d41]">Ready to Start Your Accounting & Finance Journey?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join JKKN&apos;s B.Com Accounting and Finance programme and build a successful career in accounting, finance, and business management
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
