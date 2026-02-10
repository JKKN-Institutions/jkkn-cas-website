'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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
  Sparkles
} from 'lucide-react';

// Scroll reveal hook
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Reusable components
function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function GlassCard({ children, className = '', hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(11,109,65,0.08)] border border-white/60 ${hover ? 'hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(11,109,65,0.15)] hover:-translate-y-2' : ''} transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/90">
      <Sparkles className="w-4 h-4 text-brand-green" />
      <span className="text-gray-900">{children}</span>
    </div>
  );
}

export default function MComPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the duration of the M.Com programme?",
      answer: "The M.Com (Master of Commerce) programme is a 2-year full-time postgraduate degree comprising four semesters. The programme provides advanced knowledge in commerce, accounting, finance, and business research methodology, preparing graduates for senior management positions and academic careers."
    },
    {
      question: "Who is eligible for M.Com admission?",
      answer: "Candidates with a Bachelor's degree in Commerce (B.Com), Business Administration (BBA), Business Management (BBM), or equivalent from a recognized university are eligible. The minimum aggregate marks requirement is typically 50% (45% for reserved categories). Learners with B.Com (CA), B.Com (Honours), or related degrees are also eligible."
    },
    {
      question: "What career opportunities are available after M.Com?",
      answer: "M.Com graduates have diverse career options including Finance Manager, Investment Analyst, University Professor, Management Consultant, Chief Financial Officer (CFO), Tax Consultant, Research Analyst, and Corporate Strategist. Graduates can work in sectors like investment banking, consulting firms, academia, corporate finance, and research institutions with higher salary packages compared to undergraduate degree holders."
    },
    {
      question: "Can I pursue Ph.D. after M.Com?",
      answer: "Yes, M.Com is an excellent foundation for pursuing a Ph.D. in Commerce, Accounting, Finance, or related fields. After clearing the UGC NET examination, you become eligible for the position of Assistant Professor in colleges and universities. Many M.Com graduates pursue doctoral research in specialized areas like taxation, financial management, or business analytics."
    },
    {
      question: "What is the average salary after M.Com?",
      answer: "M.Com graduates typically command higher salaries than B.Com graduates. The average starting package ranges from ₹5-7 LPA for entry-level positions. With experience and additional certifications like CA, CFA, or CMA, professionals can earn ₹10-20 LPA or more. Senior roles like CFO and Finance Directors in large corporations can command packages exceeding ₹50 LPA."
    },
    {
      question: "Is dissertation/project mandatory in M.Com?",
      answer: "Yes, the programme includes a mandatory dissertation or project work in the final semester. Learners conduct research under the guidance of experienced Learning Facilitators on topics related to commerce, accounting, finance, or business management. This research component develops critical thinking, analytical skills, and prepares Learners for advanced academic pursuits or research-oriented careers."
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
            "name": "Master of Commerce (M.Com)",
            "description": "A comprehensive 2-year postgraduate programme in Advanced Commerce, Finance, Accounting, and Business Research designed to develop analytical expertise, research competencies, and leadership skills for senior management roles and academic careers.",
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
            "educationalCredentialAwarded": "Master of Commerce (M.Com)",
            "timeToComplete": "P2Y",
            "occupationalCredentialAwarded": "UGC Recognized Postgraduate Degree"
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-brand-cream via-white to-brand-cream">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden py-24" style={{ backgroundColor: '#eaf1e2' }}>
          <Image
            src="/images/programmes/mcom/hero.jpg"
            alt="M.Com programme"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-black/30 to-transparent"></div>

          <div className="container mx-auto px-4 relative z-10">
            <RevealSection>
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/90 text-gray-900">
                  <GraduationCap className="w-4 h-4 text-brand-green" />
                  UGC Recognized Postgraduate Programme
                </span>

                <h1 className="text-3xl md:text-3xl font-black mb-6 text-brand-green drop-shadow-2xl leading-tight">
                  Master of Commerce<br />(M.Com)
                </h1>

                <p className="text-xl md:text-2xl text-white/95 mb-10 font-light drop-shadow-lg">
                  Advance Your Expertise in Finance, Accounting & Business Research
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-10">
                  <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-white shadow-lg">
                    <Clock className="w-5 h-5 text-brand-green" />
                    <span className="font-semibold text-gray-900">2 Years Duration</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-white shadow-lg">
                    <Users className="w-5 h-5 text-brand-green" />
                    <span className="font-semibold text-gray-900">Full-Time Programme</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-white shadow-lg">
                    <Calendar className="w-5 h-5 text-brand-green" />
                    <span className="font-semibold text-gray-900">4 Semesters</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Apply Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-brand-green transition-all duration-300 shadow-lg">
                    <span className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      View Curriculum
                    </span>
                  </button>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Programme Overview */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <RevealSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <SectionBadge>Programme Overview</SectionBadge>
                  <h2 className="text-xl md:text-2xl font-black text-brand-green mb-6">
                    Advanced Postgraduate Excellence
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Develop expert-level knowledge in accounting, finance, taxation, and business research
                  </p>
                </div>

                <GlassCard className="p-10">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Master of Commerce (M.Com) is an advanced two-year postgraduate programme designed to develop expert professionals with comprehensive knowledge in accounting, finance, taxation, business research, and strategic management. This UGC-recognized programme builds upon undergraduate foundations to create industry-ready leaders capable of driving organizational excellence.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our progressive education philosophy ensures that Learners receive specialized training through research-oriented learning, advanced case studies, and industry partnerships. The curriculum is aligned with professional certifications such as CA, CMA, CS, CFA, and UGC NET, preparing graduates for senior management positions, academic careers, and research-based roles in diverse sectors.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-10">
                    {[
                      { icon: BookOpen, text: 'Research-Oriented Curriculum' },
                      { icon: GraduationCap, text: 'UGC NET Preparation Support' },
                      { icon: LineChart, text: 'Advanced Financial Analytics' },
                      { icon: Briefcase, text: 'Corporate Internship Programme' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-5 bg-white/50 rounded-xl border border-emerald-100">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-gray-700 font-medium pt-2">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Eligibility & Admission Criteria */}
        <section className="py-24 bg-gradient-to-b from-white to-brand-cream/30">
          <div className="container mx-auto px-4">
            <RevealSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <SectionBadge>Admission Information</SectionBadge>
                  <h2 className="text-xl md:text-2xl font-black text-brand-green mb-6">
                    Eligibility & Admission Criteria
                  </h2>
                  <p className="text-xl text-gray-600">
                    Requirements and pathways to join our M.Com programme
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: GraduationCap,
                      title: 'Academic Qualification',
                      items: [
                        "Bachelor's Degree from recognized university",
                        'B.Com / BBA / BBM / B.Com (CA)',
                        'Commerce or Business background preferred'
                      ]
                    },
                    {
                      icon: FileText,
                      title: 'Minimum Marks',
                      items: [
                        'General Category: 50% aggregate',
                        'OBC Category: 45% aggregate',
                        'SC/ST Category: 45% aggregate'
                      ]
                    },
                    {
                      icon: UserCheck,
                      title: 'Preferred Background',
                      items: [
                        'B.Com with Accounting specialization',
                        'BBA with Finance major',
                        'CA/CMA Foundation completed'
                      ]
                    },
                    {
                      icon: FileText,
                      title: 'Required Documents',
                      items: [
                        'All Degree Certificates & Mark Sheets',
                        'Transfer Certificate',
                        'Migration Certificate',
                        'Passport Size Photographs'
                      ]
                    },
                    {
                      icon: Calendar,
                      title: 'Admission Process',
                      items: [
                        'Online/Offline Application',
                        'Document Verification',
                        'Merit-based Selection',
                        'Fee Payment & Enrollment'
                      ]
                    },
                    {
                      icon: DollarSign,
                      title: 'Scholarships Available',
                      items: [
                        'Merit Scholarships (Top 10%)',
                        'Government Scholarships',
                        'Financial Aid for EWS',
                        'Research Assistantships'
                      ]
                    }
                  ].map((card, idx) => (
                    <GlassCard key={idx} className="p-8 group">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <card.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-green mb-5">{card.title}</h3>
                      <ul className="space-y-3">
                        {card.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Course Curriculum */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-5"></div>

          <div className="container mx-auto px-4 relative z-10">
            <RevealSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <SectionBadge>Academic Structure</SectionBadge>
                  <h2 className="text-xl md:text-2xl font-black text-brand-green mb-6">
                    Course Curriculum
                  </h2>
                  <p className="text-xl text-gray-600">
                    Advanced curriculum aligned with professional certifications and research excellence
                  </p>
                </div>

                {/* Year Tabs */}
                <div className="flex justify-center mb-12">
                  <GlassCard hover={false} className="inline-flex p-2 gap-2">
                    {[1, 2].map((year) => (
                      <button
                        key={year}
                        onClick={() => setActiveYear(year)}
                        className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                          activeYear === year
                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg scale-105'
                            : 'text-gray-600 hover:text-brand-green hover:bg-white/50'
                        }`}
                      >
                        Year {year}
                      </button>
                    ))}
                  </GlassCard>
                </div>

                {/* Year 1 */}
                {activeYear === 1 && (
                  <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
                    {[
                      {
                        title: 'Semester I',
                        subjects: [
                          { name: 'Advanced Financial Accounting', code: 'MCO101' },
                          { name: 'Managerial Economics', code: 'MCO102' },
                          { name: 'Organizational Behaviour', code: 'MCO103' },
                          { name: 'Business Research Methods', code: 'MCO104' },
                          { name: 'Statistical Analysis for Business', code: 'MCO105' },
                          { name: 'Corporate Governance & Ethics', code: 'MCO106' }
                        ]
                      },
                      {
                        title: 'Semester II',
                        subjects: [
                          { name: 'Advanced Cost & Management Accounting', code: 'MCO201' },
                          { name: 'Financial Management', code: 'MCO202' },
                          { name: 'Corporate Tax Planning', code: 'MCO203' },
                          { name: 'Strategic Management', code: 'MCO204' },
                          { name: 'E-Business & Digital Commerce', code: 'MCO205' },
                          { name: 'Advanced Business Law', code: 'MCO206' }
                        ]
                      }
                    ].map((semester, idx) => (
                      <GlassCard key={idx} hover={false} className="overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-5">
                          <h3 className="text-2xl font-bold">{semester.title}</h3>
                        </div>
                        <div className="p-8">
                          <div className="space-y-4">
                            {semester.subjects.map((subject, i) => (
                              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-200/50 last:border-0 group hover:bg-white/50 px-3 rounded-lg transition-all">
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:scale-150 transition-transform"></div>
                                  <span className="text-gray-700 font-medium group-hover:text-brand-green transition-colors">{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">{subject.code}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                )}

                {/* Year 2 */}
                {activeYear === 2 && (
                  <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
                    {[
                      {
                        title: 'Semester III',
                        subjects: [
                          { name: 'Advanced Auditing & Assurance', code: 'MCO301' },
                          { name: 'International Financial Management', code: 'MCO302' },
                          { name: 'Investment Analysis & Portfolio Management', code: 'MCO303' },
                          { name: 'Elective I: Banking & Financial Services', code: 'MCO304' },
                          { name: 'Elective II: GST & Indirect Taxation', code: 'MCO305' },
                          { name: 'Summer Internship / Field Study', code: 'INT301' }
                        ]
                      },
                      {
                        title: 'Semester IV',
                        subjects: [
                          { name: 'Financial Derivatives & Risk Management', code: 'MCO401' },
                          { name: 'Advanced Business Analytics', code: 'MCO402' },
                          { name: 'Elective III: Mergers & Acquisitions', code: 'MCO403' },
                          { name: 'Elective IV: Forensic Accounting', code: 'MCO404' },
                          { name: 'Comprehensive Viva-Voce', code: 'MCO405' },
                          { name: 'Dissertation / Project Work', code: 'PRJ401' }
                        ]
                      }
                    ].map((semester, idx) => (
                      <GlassCard key={idx} hover={false} className="overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-5">
                          <h3 className="text-2xl font-bold">{semester.title}</h3>
                        </div>
                        <div className="p-8">
                          <div className="space-y-4">
                            {semester.subjects.map((subject, i) => (
                              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-200/50 last:border-0 group hover:bg-white/50 px-3 rounded-lg transition-all">
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:scale-150 transition-transform"></div>
                                  <span className="text-gray-700 font-medium group-hover:text-brand-green transition-colors">{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">{subject.code}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                )}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Programme Learning Outcomes */}
        <section className="py-24 bg-gradient-to-b from-brand-cream/30 to-white">
          <div className="container mx-auto px-4">
            <RevealSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <SectionBadge>Skills Development</SectionBadge>
                  <h2 className="text-xl md:text-2xl font-black text-brand-green mb-6">
                    Programme Learning Outcomes
                  </h2>
                  <p className="text-xl text-gray-600">
                    Skills and competencies you will develop through this programme
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: BarChart,
                      title: 'Advanced Financial Analysis',
                      description: 'Master complex financial statements, ratio analysis, and strategic financial decision-making techniques.',
                      color: 'from-blue-500 to-blue-600'
                    },
                    {
                      icon: Brain,
                      title: 'Research Competency',
                      description: 'Develop strong research methodologies, statistical analysis skills, and academic writing capabilities.',
                      color: 'from-purple-500 to-purple-600'
                    },
                    {
                      icon: Target,
                      title: 'Leadership Excellence',
                      description: 'Build strategic thinking, team management, and organizational leadership capabilities.',
                      color: 'from-emerald-500 to-emerald-600'
                    },
                    {
                      icon: Globe,
                      title: 'Global Business Perspective',
                      description: 'Understand international financial systems, cross-border transactions, and global market dynamics.',
                      color: 'from-orange-500 to-orange-600'
                    },
                    {
                      icon: Database,
                      title: 'Technology Integration',
                      description: 'Leverage advanced accounting software, ERP systems, and business analytics tools effectively.',
                      color: 'from-pink-500 to-pink-600'
                    },
                    {
                      icon: Shield,
                      title: 'Ethical Decision Making',
                      description: 'Apply corporate governance principles, ethical standards, and professional responsibility in business.',
                      color: 'from-indigo-500 to-indigo-600'
                    }
                  ].map((outcome, idx) => (
                    <GlassCard key={idx} className="p-8 group">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${outcome.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <outcome.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-brand-green">{outcome.title}</h3>
                        <span className="text-3xl font-black text-gray-200 group-hover:text-emerald-200 transition-colors">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{outcome.description}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-blue-50"></div>

          <div className="container mx-auto px-4 relative z-10">
            <RevealSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <SectionBadge>Career Pathways</SectionBadge>
                  <h2 className="text-xl md:text-2xl font-black text-brand-green mb-6">
                    Career Opportunities
                  </h2>
                  <p className="text-xl text-gray-600">
                    Premium career pathways for M.Com graduates
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {[
                    { icon: DollarSign, title: 'Finance Manager', subtitle: '₹8-15 LPA', color: 'from-green-500 to-green-600' },
                    { icon: LineChart, title: 'Investment Analyst', subtitle: '₹7-12 LPA', color: 'from-blue-500 to-blue-600' },
                    { icon: GraduationCap, title: 'University Professor', subtitle: 'Academic Career', color: 'from-purple-500 to-purple-600' },
                    { icon: Award, title: 'Chief Financial Officer', subtitle: '₹20-50 LPA', color: 'from-emerald-500 to-emerald-600' },
                    { icon: FileText, title: 'Tax Consultant', subtitle: '₹6-10 LPA', color: 'from-orange-500 to-orange-600' },
                    { icon: Briefcase, title: 'Management Consultant', subtitle: '₹10-18 LPA', color: 'from-pink-500 to-pink-600' },
                    { icon: Target, title: 'Corporate Strategist', subtitle: '₹12-20 LPA', color: 'from-indigo-500 to-indigo-600' },
                    { icon: Brain, title: 'Research Analyst', subtitle: '₹5-9 LPA', color: 'from-red-500 to-red-600' }
                  ].map((career, idx) => (
                    <GlassCard key={idx} className="p-6 text-center group">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${career.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <career.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-brand-green mb-2 group-hover:text-emerald-600 transition-colors">
                        {career.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-semibold">{career.subtitle}</p>
                    </GlassCard>
                  ))}
                </div>

                <GlassCard className="p-10 text-center">
                  <h3 className="text-2xl font-bold text-brand-green mb-6">Recruiting Sectors</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      'Investment Banking',
                      'Asset Management',
                      'Big Four Accounting',
                      'Corporate Finance',
                      'Management Consulting',
                      'Higher Education',
                      'Research Institutions',
                      'Government Services',
                      'FinTech Companies',
                      'Multinational Corporations',
                      'Private Equity',
                      'Insurance Sector'
                    ].map((sector, idx) => (
                      <span
                        key={idx}
                        className="bg-white/60 backdrop-blur-sm border border-emerald-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Department Facilities */}
        <section className="py-24 bg-gradient-to-b from-white to-brand-cream/30">
          <div className="container mx-auto px-4">
            <RevealSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <SectionBadge>Infrastructure</SectionBadge>
                  <h2 className="text-xl md:text-2xl font-black text-brand-green mb-6">
                    Department Facilities
                  </h2>
                  <p className="text-xl text-gray-600">
                    State-of-the-art infrastructure for advanced learning
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Research Laboratory',
                      badge: 'Research Lab',
                      description: 'Equipped with SPSS, Stata, Bloomberg Terminal, and advanced statistical software for research projects.',
                      gradient: 'from-emerald-500 to-emerald-600'
                    },
                    {
                      title: 'Digital Library & E-Resources',
                      badge: 'Digital Library',
                      description: 'Access to JSTOR, EBSCO, Emerald, and premium academic databases with 24/7 e-resource availability.',
                      gradient: 'from-blue-500 to-blue-600'
                    },
                    {
                      title: 'Conference Hall & Seminar Room',
                      badge: 'Conference Hall',
                      description: 'Air-conditioned hall for research presentations, seminars, and corporate guest lectures.',
                      gradient: 'from-purple-500 to-purple-600'
                    },
                    {
                      title: 'Finance Laboratory',
                      badge: 'Finance Lab',
                      description: 'Real-time stock market tracking, trading simulation, and financial modeling workstations.',
                      gradient: 'from-pink-500 to-pink-600'
                    },
                    {
                      title: 'Career Development Center',
                      badge: 'Career Center',
                      description: 'Dedicated placement cell for premium corporate connections, interview coaching, and career counseling.',
                      gradient: 'from-orange-500 to-orange-600'
                    },
                    {
                      title: 'Smart Learning Studios',
                      badge: 'Smart Studios',
                      description: 'ICT-enabled learning studios with video conferencing for international guest lectures and webinars.',
                      gradient: 'from-indigo-500 to-indigo-600'
                    }
                  ].map((facility, idx) => (
                    <GlassCard key={idx} hover={false} className="overflow-hidden group">
                      <div className={`bg-gradient-to-br ${facility.gradient} p-8 text-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                        <h3 className="text-2xl font-bold text-white relative z-10">{facility.badge}</h3>
                      </div>
                      <div className="p-8">
                        <h4 className="text-xl font-bold text-brand-green mb-4 group-hover:text-emerald-600 transition-colors">
                          {facility.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Why Choose JKKN */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10"></div>

          <div className="container mx-auto px-4 relative z-10">
            <RevealSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30 text-white">
                    <Sparkles className="w-4 h-4" />
                    Our Advantages
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-white mb-6">
                    Why Choose Our M.Com Programme?
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Brain,
                      title: 'Research Excellence',
                      description: 'Strong focus on research methodology with dissertation guidance from expert Learning Facilitators'
                    },
                    {
                      icon: Briefcase,
                      title: 'Corporate Internships',
                      description: 'Mandatory internship programme with leading corporate houses and financial institutions'
                    },
                    {
                      icon: Users,
                      title: 'Industry Experts',
                      description: 'Guest lectures from CFOs, investment bankers, and senior finance professionals'
                    },
                    {
                      icon: GraduationCap,
                      title: 'UGC NET Coaching',
                      description: 'Comprehensive preparation support for UGC NET Commerce examination'
                    },
                    {
                      icon: TrendingUp,
                      title: 'Premium Placements',
                      description: 'Strong placement record with top companies offering competitive salary packages'
                    },
                    {
                      icon: Award,
                      title: 'Professional Certification',
                      description: 'Integrated support for CA, CMA, CFA, and other professional qualifications'
                    }
                  ].map((reason, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                        <reason.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                      <p className="text-white/80 leading-relaxed">{reason.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-white to-brand-cream/30">
          <div className="container mx-auto px-4">
            <RevealSection>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <SectionBadge>Got Questions?</SectionBadge>
                  <h2 className="text-xl md:text-2xl font-black text-brand-green mb-6">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <GlassCard key={index} hover={false} className="overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors group"
                        aria-expanded={activeFAQ === index}
                      >
                        <h3 className="font-bold text-brand-green pr-8 group-hover:text-emerald-600 transition-colors">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`w-6 h-6 text-emerald-500 flex-shrink-0 transition-transform duration-300 ${
                            activeFAQ === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeFAQ === index ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <Image
            src="/images/cta-background.jpg"
            alt="Join us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green/95 via-emerald-600/95 to-emerald-700/95"></div>

          <div className="container mx-auto px-4 relative z-10">
            <RevealSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-3xl font-black text-white mb-6 leading-tight">
                  Ready to Advance Your Career with M.Com?
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
                  Join JKKN's M.Com programme and become a leader in finance, accounting, and business research
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <button className="group relative px-10 py-5 bg-white text-brand-green rounded-full font-bold text-lg shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Apply Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-brand-green transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Schedule Campus Visit
                    </span>
                  </button>
                </div>
              </div>
            </RevealSection>
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
