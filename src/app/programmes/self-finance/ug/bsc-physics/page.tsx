'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, GraduationCap, Building2, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Atom, Microscope, FlaskConical, Database, Zap, Brain, Calendar, UserCheck, DollarSign, TrendingUp } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';
import Marquee from '@/components/ui/Marquee';

/* ─── Scroll-reveal hook ─── */
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/* ─── Reveal wrapper ─── */
function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── GlassCard component ─── */
function GlassCard({ children, className = '', hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(11,109,65,0.08)] border border-white/60 ${hover ? 'hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(11,109,65,0.15)] hover:-translate-y-2' : ''} transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

/* ─── Section badge ─── */
function SectionBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 bg-brand-green/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold border border-brand-green/15 text-brand-green mb-4">
      <Sparkles className="w-3.5 h-3.5" />
      {text}
    </span>
  );
}

export default function BScPhysicsPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);

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
      answer: "Candidates must have completed Higher Secondary (10+2) from a recognized board with Physics,Chemistry and Mathematics as compulsory subjects. A minimum aggregate of 50% marks is required for general category candidates and 45% for reserved categories. "
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
        {/* Hero Banner Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden py-12" style={{ backgroundColor: '#eaf1e2' }}>
          <div className="container mx-auto px-4 relative z-10">
            <RevealSection>
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/90 text-gray-900">
                  <GraduationCap className="w-4 h-4 text-brand-green" />
                  UGC Recognized Programme
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-brand-green">
                  Bachelor of Science in{' '}
                  <span className="text-brand-green">
                    Physics
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                  Unlock the Mysteries of the Universe Through Science
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                    <Clock className="w-5 h-5 text-brand-green" />
                    <span>3 Years Duration</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                    <FileText className="w-5 h-5 text-brand-green" />
                    <span>6 Semesters</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                    <Users className="w-5 h-5 text-brand-green" />
                    <span>Full-Time Programme</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#admission" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#curriculum" className="inline-flex items-center gap-2 bg-white/70 hover:bg-brand-green text-gray-900 hover:text-white border-2 border-white/80 hover:border-brand-green px-7 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all">
                    View Curriculum
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="relative z-10 -mt-12 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                { icon: <GraduationCap className="w-7 h-7" />, stat: 'NAAC', title: 'Accredited Institution', desc: 'Quality assured education' },
                { icon: <FlaskConical className="w-7 h-7" />, stat: 'Modern', title: 'Physics Labs', desc: 'State-of-the-art facilities' },
                { icon: <Briefcase className="w-7 h-7" />, stat: '90%+', title: 'Placement Record', desc: 'Career opportunities assured' },
                { icon: <Atom className="w-7 h-7" />, stat: 'ISRO', title: 'Industry Connect', desc: 'Research collaborations' },
              ].map((card, idx) => (
                <RevealSection key={idx} delay={idx * 100}>
                  <GlassCard className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 bg-brand-green/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-brand-green/15 text-brand-green group-hover:text-emerald-600 transition-colors">
                      {card.icon}
                    </div>
                    <span className="block text-3xl font-bold text-brand-green mb-1">{card.stat}</span>
                    <h3 className="font-bold text-brand-green mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.desc}</p>
                  </GlassCard>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Programme Overview */}
        <section className="py-16 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-center">
              <RevealSection className="lg:col-span-3">
                <SectionBadge text="About the Programme" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Programme{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Overview
                  </span>
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  The Bachelor of Science in Physics is a comprehensive three-year undergraduate programme designed to provide Learners with in-depth knowledge of fundamental physics, quantum mechanics, electromagnetism, thermodynamics, and modern physics. This UGC-recognized programme offers a perfect blend of theoretical foundations and practical laboratory experience, preparing graduates for diverse career pathways in scientific research and technology.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our progressive education philosophy ensures that Learners develop scientific temperament, analytical thinking, and problem-solving skills through experiential learning. The curriculum integrates classical physics with modern computational techniques, electronics, and material science, equipping graduates with skills demanded by research institutions, technology industries, and academic organizations worldwide.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {['Industry-Aligned Curriculum', 'Expert Learning Facilitators', 'Advanced Laboratory Training', 'Research Project Experience'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </RevealSection>

              <RevealSection className="lg:col-span-2" delay={200}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://placehold.co/600x450/0b6d41/FFFFFF?text=Physics+Laboratory"
                    alt="Physics Laboratory"
                    className="w-full h-auto"
                  />
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    Since 1954
                  </span>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Eligibility & Admission Criteria */}
        <section className="py-16 bg-white" id="eligibility">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection>
                <div className="text-center mb-12">
                  <SectionBadge text="Admissions" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Eligibility &{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Admission Criteria
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Requirements for joining the B.Sc Physics programme
                  </p>
                </div>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <GraduationCap className="w-8 h-8 text-white" />,
                    title: 'Academic Qualification',
                    items: ['Higher Secondary (10+2) from recognized board', 'Physics,Chemistry & Mathematics as compulsory subjects', 'Minimum 50% aggregate marks', '45% for reserved categories']
                  },
                  {
                    icon: <BookOpen className="w-8 h-8 text-white" />,
                    title: 'Accepted Streams',
                    items: ['Science stream with Physics mandatory', 'Physics,Biology, Chemistry & Mathematics (PCM)', 'Physics, Chemistry, Mathematics & Computer Science', 'Vocational Science courses with Physics']
                  },
                  {
                    icon: <FileText className="w-8 h-8 text-white" />,
                    title: 'Documents Required',
                    items: ['10th & 12th Mark Sheets', 'Transfer Certificate', 'Community Certificate', 'Passport Size Photographs', 'Aadhaar Card Copy']
                  },
                  {
                    icon: <Calendar className="w-8 h-8 text-white" />,
                    title: 'Admission Process',
                    items: ['Online/Offline Application', 'Document Verification', 'Merit-based Selection', 'Fee Payment & Enrollment']
                  },
                  {
                    icon: <UserCheck className="w-8 h-8 text-white" />,
                    title: 'Age Criteria',
                    items: ['No upper age limit for admission', 'Candidates who have completed 17 years of age as on December 31st of the admission year are eligible']
                  },
                  {
                    icon: <DollarSign className="w-8 h-8 text-white" />,
                    title: 'Scholarships Available',
                    items: ['Merit Scholarships (Top 10%)', 'Government Scholarships', 'Financial Aid for EWS', 'Sports Quota Benefits']
                  }
                ].map((card, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="p-8 h-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-green/20">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold text-brand-green mb-4">{card.title}</h3>
                      <ul className="space-y-2 text-gray-700">
                        {card.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programme Curriculum */}
        <section className="py-16 bg-brand-cream" id="curriculum">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection>
                <div className="text-center mb-12">
                  <SectionBadge text="Curriculum" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Programme{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Curriculum
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Comprehensive syllabus covering classical and modern physics with hands-on laboratory experience
                  </p>
                </div>
              </RevealSection>

              <RevealSection>
                <div className="flex justify-center gap-2 mb-8">
                  {[1, 2, 3].map((year) => (
                    <button
                      key={year}
                      onClick={() => setActiveYear(year)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeYear === year
                        ? 'bg-gradient-to-r from-brand-green to-emerald-500 text-white shadow-lg shadow-brand-green/25'
                        : 'bg-white text-brand-green hover:bg-brand-green/5'
                        }`}
                    >
                      Year {year}
                    </button>
                  ))}
                </div>
              </RevealSection>

              {activeYear === 1 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Semester I',
                      subjects: [
                        { name: 'Mechanics & Properties of Matter', code: 'PHY101' },
                        { name: 'Mathematical Physics I', code: 'PHY102' },
                        { name: 'Electricity & Magnetism', code: 'PHY103' },
                        { name: 'Practical: Mechanics Lab', code: 'PHY104P' },
                        { name: 'Allied Mathematics I', code: 'MAT101' },
                        { name: 'Environmental Studies', code: 'EVS101' }
                      ]
                    },
                    {
                      title: 'Semester II',
                      subjects: [
                        { name: 'Thermal Physics', code: 'PHY201' },
                        { name: 'Waves & Oscillations', code: 'PHY202' },
                        { name: 'Mathematical Physics II', code: 'PHY203' },
                        { name: 'Practical: Thermal & Electricity Lab', code: 'PHY204P' },
                        { name: 'Allied Mathematics II', code: 'MAT102' },
                        { name: 'Value Education', code: 'VAL101' }
                      ]
                    }
                  ].map((sem, idx) => (
                    <RevealSection key={idx} delay={idx * 150}>
                      <GlassCard className="overflow-hidden" hover={false}>
                        <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                          <h4 className="text-xl font-bold">{sem.title}</h4>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            {sem.subjects.map((subject, i) => (
                              <li key={i} className="flex items-center justify-between text-gray-700">
                                <div className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span>{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-semibold text-sm ml-2">{subject.code}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </GlassCard>
                    </RevealSection>
                  ))}
                </div>
              )}

              {activeYear === 2 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Semester III',
                      subjects: [
                        { name: 'Optics', code: 'PHY301' },
                        { name: 'Electromagnetism', code: 'PHY302' },
                        { name: 'Digital Electronics', code: 'PHY303' },
                        { name: 'Practical: Optics Lab', code: 'PHY304P' },
                        { name: 'Allied Chemistry I', code: 'CHE101' },
                        { name: 'Soft Skills Development', code: 'SKL301' }
                      ]
                    },
                    {
                      title: 'Semester IV',
                      subjects: [
                        { name: 'Classical Mechanics', code: 'PHY401' },
                        { name: 'Analog Electronics', code: 'PHY402' },
                        { name: 'Statistical Mechanics', code: 'PHY403' },
                        { name: 'Practical: Electronics Lab', code: 'PHY404P' },
                        { name: 'Allied Chemistry II', code: 'CHE102' },
                        { name: 'Extension Activities', code: 'EXT401' }
                      ]
                    }
                  ].map((sem, idx) => (
                    <RevealSection key={idx} delay={idx * 150}>
                      <GlassCard className="overflow-hidden" hover={false}>
                        <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                          <h4 className="text-xl font-bold">{sem.title}</h4>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            {sem.subjects.map((subject, i) => (
                              <li key={i} className="flex items-center justify-between text-gray-700">
                                <div className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span>{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-semibold text-sm ml-2">{subject.code}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </GlassCard>
                    </RevealSection>
                  ))}
                </div>
              )}

              {activeYear === 3 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Semester V',
                      subjects: [
                        { name: 'Quantum Mechanics I', code: 'PHY501' },
                        { name: 'Atomic & Molecular Physics', code: 'PHY502' },
                        { name: 'Solid State Physics', code: 'PHY503' },
                        { name: 'Computational Physics', code: 'PHY504' },
                        { name: 'Practical: Modern Physics Lab', code: 'PHY505P' },
                        { name: 'Elective: Astrophysics / Material Science', code: 'PHY506E' }
                      ]
                    },
                    {
                      title: 'Semester VI',
                      subjects: [
                        { name: 'Quantum Mechanics II', code: 'PHY601' },
                        { name: 'Nuclear & Particle Physics', code: 'PHY602' },
                        { name: 'Relativity & Cosmology', code: 'PHY603' },
                        { name: 'Research Methodology', code: 'PHY604' },
                        { name: 'Project Work & Viva', code: 'PHY605P' },
                        { name: 'Elective: Nanophysics / Renewable Energy', code: 'PHY606E' }
                      ]
                    }
                  ].map((sem, idx) => (
                    <RevealSection key={idx} delay={idx * 150}>
                      <GlassCard className="overflow-hidden" hover={false}>
                        <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                          <h4 className="text-xl font-bold">{sem.title}</h4>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            {sem.subjects.map((subject, i) => (
                              <li key={i} className="flex items-center justify-between text-gray-700">
                                <div className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span>{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-semibold text-sm ml-2">{subject.code}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </GlassCard>
                    </RevealSection>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Programme Learning Outcomes */}
        <section className="py-16 bg-white" id="outcomes">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection>
                <div className="text-center mb-12">
                  <SectionBadge text="Outcomes" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Programme Learning{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Outcomes
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Skills and competencies you will develop through this programme
                  </p>
                </div>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <Brain className="w-6 h-6 text-white" />, title: 'Analytical Thinking', description: 'Master systematic approaches to physical problem-solving, mathematical modeling, experimental design, and data interpretation using statistical and computational tools.' },
                  { icon: <BookOpen className="w-6 h-6 text-white" />, title: 'Theoretical Foundation', description: 'Develop comprehensive knowledge of classical and modern physics including mechanics, electromagnetism, quantum physics, and relativity with mathematical Physics.' },
                  { icon: <FlaskConical className="w-6 h-6 text-white" />, title: 'Laboratory Proficiency', description: 'Acquire hands-on skills in experimental physics, precision measurements, instrumentation, electronics fabrication, and modern laboratory techniques.' },
                  { icon: <Database className="w-6 h-6 text-white" />, title: 'Computational Skills', description: 'Comprehend numerical methods, programming languages, simulation techniques, and data analysis methodologies essential for modern physics research.' },
                  { icon: <Zap className="w-6 h-6 text-white" />, title: 'Electronics Expertise', description: 'Apply analog and digital electronics concepts including circuit design, microcontroller programming, and instrumentation for scientific applications.' },
                  { icon: <Users className="w-6 h-6 text-white" />, title: 'Professional Communication', description: 'Effectively communicate scientific findings through research papers, presentations, and technical reports while collaborating in multidisciplinary research teams.' }
                ].map((outcome, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="relative p-6 group h-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-brand-green/20 group-hover:shadow-brand-green/30 transition-shadow">
                        {outcome.icon}
                      </div>
                      <h3 className="text-lg font-bold text-brand-green mb-2">{outcome.title}</h3>
                      <p className="text-gray-600 text-sm">{outcome.description}</p>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 bg-brand-cream" id="careers">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection>
                <div className="text-center mb-12">
                  <SectionBadge text="Careers" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Career{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Opportunities
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Diverse career pathways in science, technology, and research sectors
                  </p>
                </div>
              </RevealSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: <Microscope className="w-6 h-6" />, title: 'Research Scientist', desc: 'ISRO, DRDO, BARC, CSIR, and national laboratories' },
                  { icon: <GraduationCap className="w-6 h-6" />, title: 'Educator / Lecturer', desc: 'Schools, colleges, coaching institutes, and universities' },
                  { icon: <Zap className="w-6 h-6" />, title: 'Electronics Engineer', desc: 'Semiconductor industries, R&D labs, and tech companies' },
                  { icon: <Database className="w-6 h-6" />, title: 'Data Scientist', desc: 'IT companies, analytics firms, and research organizations' },
                  { icon: <Target className="w-6 h-6" />, title: 'Medical Physicist', desc: 'Hospitals, diagnostic centers, and radiotherapy units' },
                  { icon: <Building2 className="w-6 h-6" />, title: 'Government Services', desc: 'UPSC, State PSC, Indian Forest Service, and regulatory bodies' },
                  { icon: <Globe className="w-6 h-6" />, title: 'Aerospace Industry', desc: 'HAL, Boeing, Airbus, and space technology companies' },
                  { icon: <Atom className="w-6 h-6" />, title: 'Energy Sector', desc: 'Nuclear power, renewable energy, and power corporations' }
                ].map((career, idx) => (
                  <RevealSection key={idx} delay={idx * 80}>
                    <GlassCard className="p-6 group h-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 text-white group-hover:shadow-lg group-hover:shadow-brand-green/20 transition-all">
                        {career.icon}
                      </div>
                      <h3 className="font-bold text-brand-green mb-2">{career.title}</h3>
                      <p className="text-sm text-gray-600">{career.desc}</p>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>

              <RevealSection>
                <GlassCard className="p-8" hover={false}>
                  <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Key Employment Sectors</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      'Aerospace & Space Research', 'Nuclear Energy', 'Electronics & Semiconductors',
                      'Information Technology', 'Telecommunications', 'Defence Research',
                      'Medical Physics', 'Renewable Energy', 'Nanotechnology',
                      'Education & Academia', 'Government Sector', 'Data Analytics'
                    ].map((sector, idx) => (
                      <span key={idx} className="px-4 py-2 bg-brand-green/5 hover:bg-gradient-to-r hover:from-brand-green hover:to-emerald-500 hover:text-white text-brand-green rounded-full text-sm font-medium transition-all cursor-default border border-brand-green/15">
                        {sector}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Department Facilities */}
        <section className="py-16 bg-white" id="facilities">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection>
                <div className="text-center mb-12">
                  <SectionBadge text="Infrastructure" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Department{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Facilities
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    State-of-the-art infrastructure supporting world-class education
                  </p>
                </div>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Advanced Physics Laboratory', description: 'Fully equipped laboratory with precision instruments, spectrometers, interferometers, and modern experimental setups for hands-on learning.' },
                  { title: 'Electronics Laboratory', description: 'Modern electronics lab with oscilloscopes, function generators, digital trainers, and microcontroller development boards for circuit design and analysis.' },
                  { title: 'Computational Physics Lab', description: 'High-performance computing facility with specialized software for numerical simulations, data analysis, and scientific programming.' },
                  { title: 'Optics & Laser Laboratory', description: 'Specialized lab equipped with lasers, optical benches, holography setups, and fiber optics equipment for advanced optical experiments.' },
                  { title: 'Material Science Lab', description: 'Research facility for material characterization with XRD, spectroscopy equipment, and sample preparation facilities for advanced studies.' },
                  { title: 'Departmental Library', description: 'Well-stocked library with physics textbooks, research journals, e-resources, and access to international physics databases for reference and research.' }
                ].map((facility, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="p-6 group h-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 text-white shadow-lg shadow-brand-green/20 group-hover:shadow-brand-green/30 transition-shadow">
                        <FlaskConical className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-brand-green mb-2">{facility.title}</h3>
                      <p className="text-gray-600 text-sm">{facility.description}</p>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose JKKN */}
        <section className="py-16 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection>
                <div className="text-center mb-12">
                  <SectionBadge text="Why JKKN" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Why Choose Our{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      B.Sc Physics Programme?
                    </span>
                  </h2>
                </div>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <GraduationCap className="w-6 h-6 text-white" />, title: 'Expert Learning Facilitators', description: 'Learn from experienced faculty with doctoral degrees and active research in specialized physics fields.' },
                  { icon: <Microscope className="w-6 h-6 text-white" />, title: 'Research-Oriented Learning', description: 'Engage in research projects with collaboration opportunities with national laboratories like ISRO and DRDO.' },
                  { icon: <Briefcase className="w-6 h-6 text-white" />, title: 'Excellent Placement Support', description: 'Strong industry connections ensuring placement opportunities in leading technology and research organizations.' },
                  { icon: <FlaskConical className="w-6 h-6 text-white" />, title: 'Modern Infrastructure', description: 'Access to well-equipped laboratories, computational facilities, and latest scientific instruments.' },
                  { icon: <TrendingUp className="w-6 h-6 text-white" />, title: 'Higher Education Pathways', description: 'Strong foundation for M.Sc Physics, integrated PhD programmes, and competitive exams like IIT-JAM, GATE, and CSIR-NET,M.Sc. Electronics,M.Sc. NanoScience,MBA,MCA,AstroPhysics,M.Sc. Medical Physics.' },
                  { icon: <Award className="w-6 h-6 text-white" />, title: 'NAAC Accreditation', description: 'Quality-assured education with government recognition and industry partnerships ensuring excellent learning outcomes.' }
                ].map((reason, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="p-6 group h-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-brand-green/20 group-hover:shadow-brand-green/30 transition-shadow">
                        {reason.icon}
                      </div>
                      <h3 className="text-lg font-bold text-brand-green mb-2">{reason.title}</h3>
                      <p className="text-gray-600 text-sm">{reason.description}</p>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white" id="faq">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealSection>
                <div className="text-center mb-12">
                  <SectionBadge text="FAQs" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Frequently Asked{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Questions
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600">
                    Common queries about the B.Sc Physics programme
                  </p>
                </div>
              </RevealSection>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <RevealSection key={idx} delay={idx * 50}>
                    <GlassCard hover={false} className="overflow-hidden">
                      <button
                        onClick={() => setActiveFAQ(activeFAQ === idx ? -1 : idx)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/20 transition-colors"
                      >
                        <span className="font-semibold text-brand-green pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-emerald-500 flex-shrink-0 transition-transform duration-300 ${activeFAQ === idx ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${activeFAQ === idx ? 'max-h-96' : 'max-h-0'
                          }`}
                      >
                        <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-brand-cream" id="admission">
          <div className="container mx-auto px-4">
            <RevealSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Begin Your Journey in{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Physical Sciences
                  </span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Join our B.Sc Physics programme and explore the fundamental laws that govern the universe with hands-on research experience
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    Apply for Admission
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-green border-2 border-brand-green px-8 py-4 rounded-lg font-semibold transition-all">
                    Download Brochure
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>
      </div>
    </>
  );
}
