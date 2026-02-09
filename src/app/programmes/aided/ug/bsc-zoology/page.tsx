'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Microscope, FlaskConical, Fish, Database, Leaf, MapPin, Calendar, TrendingUp } from 'lucide-react';
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

export default function BScZoologyPage() {
  const [activeSemester, setActiveSemester] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden py-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-[#0a5a36] to-[#0d8450]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,222,89,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(11,109,65,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-brand-cream to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center text-white">
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
                <Award className="w-4 h-4 text-brand-yellow" />
                UGC Recognized Programme
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
                Bachelor of Science in Zoology
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-white/95 drop-shadow-md tracking-wide">
                Explore the Fascinating World of Animal Sciences
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <Clock className="w-5 h-5" />
                  <span>3 Years (6 Semesters)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <FileText className="w-5 h-5" />
                  <span>Full-time</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <GraduationCap className="w-5 h-5" />
                  <span>B.Sc Degree</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="#admission" className="inline-flex items-center gap-2 bg-brand-yellow text-brand-green px-7 py-3 rounded-lg font-semibold shadow-[0_4px_14px_rgba(255,222,89,0.4)] hover:bg-[#ffd740] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,222,89,0.5)] transition-all duration-300">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#curriculum" className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/80 px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-green transition-all duration-300">
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
              { icon: <Award className="w-7 h-7" />, title: 'NAAC A+ Accredited', desc: 'Quality assured education' },
              { icon: <Microscope className="w-7 h-7" />, title: 'Research Labs', desc: '6+ Specialized Labs' },
              { icon: <TrendingUp className="w-7 h-7" />, stat: '95%', title: 'Placement Record', desc: 'Success Rate' },
              { icon: <MapPin className="w-7 h-7" />, title: 'Study Trips', desc: 'Annual Field Visits' },
            ].map((card, idx) => (
              <RevealSection key={idx} delay={idx * 100}>
                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-brand-green/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-brand-green/15 text-brand-green group-hover:text-emerald-600 transition-colors">
                    {card.icon}
                  </div>
                  {card.stat && <span className="block text-3xl font-bold text-brand-green mb-1">{card.stat}</span>}
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
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <SectionBadge text="About the Programme" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Programme{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Overview
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The <strong>Bachelor of Science (B.Sc) in Zoology</strong> is a comprehensive 3-year undergraduate programme designed to provide students with in-depth knowledge of animal biology, diversity, evolution, ecology, and conservation. The curriculum blends theoretical learning with extensive practical laboratory sessions, field studies, and research projects.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Students explore fascinating topics including animal physiology, genetics, biotechnology, entomology, wildlife conservation, and environmental biology. The programme emphasizes hands-on learning through modern laboratory facilities, research opportunities, and field excursions to wildlife sanctuaries and marine ecosystems.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our department is equipped with state-of-the-art laboratories, a zoological museum, aquarium facilities, and molecular biology research units. Graduates are well-prepared for careers in research, healthcare, biotechnology, environmental consulting, wildlife conservation, and academic sectors.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Advanced Laboratory Facilities', 'Comprehensive Curriculum', 'Expert Faculty Members', 'Field Study Opportunities'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Field Study Trip Section */}
      <section className="py-16 bg-gradient-to-r from-brand-green to-emerald-500">
        <div className="container mx-auto px-4">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center text-white">
              <MapPin className="w-16 h-16 mx-auto mb-6 text-brand-yellow" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Field Study Trip</h2>
              <p className="text-lg text-white/90 mb-8">
                Annual educational excursions to wildlife sanctuaries, marine biology stations, zoos, biodiversity parks, and research institutes. Students gain practical field experience in animal behavior observation, ecological surveys, and conservation practices.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {['Wildlife Sanctuaries', 'Marine Biology Stations', 'Biodiversity Parks', 'Research Institutes'].map((location, idx) => (
                  <GlassCard key={idx} className="p-4 text-center" hover={false}>
                    <span className="text-white font-medium text-sm">{location}</span>
                  </GlassCard>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Eligibility & Admission Criteria */}
      <section className="py-16 bg-white" id="eligibility">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Admissions" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Eligibility &{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Admission Criteria
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Simple and transparent admission process for aspiring zoology students
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Passed Higher Secondary (10+2) or equivalent', 'Minimum 50% aggregate marks (45% for reserved categories)', 'Biology as a mandatory subject in 12th standard', 'Physics and Chemistry preferred']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Accepted Streams',
                  items: ['Biology with Maths (Bio-Maths group)', 'Biology with Computer Science', 'Pure Biology stream', 'State/CBSE/ICSE board recognized']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['10th & 12th mark sheets and certificates', 'Transfer certificate (TC)', 'Community certificate (if applicable)', 'Passport-size photographs', 'Aadhaar card & address proof']
                }
              ].map((card, idx) => (
                <RevealSection key={idx} delay={idx * 150}>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Programme{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Curriculum
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  A well-structured six-semester curriculum covering all aspects of zoology
                </p>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2">
                {[1, 2, 3, 4, 5, 6].map((sem) => (
                  <button
                    key={sem}
                    onClick={() => setActiveSemester(sem)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${activeSemester === sem
                        ? 'bg-gradient-to-r from-brand-green to-emerald-500 text-white shadow-lg shadow-brand-green/25'
                        : 'bg-white text-brand-green hover:bg-brand-green/5'
                      }`}
                  >
                    Sem {sem}
                  </button>
                ))}
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-1 gap-6">
              {activeSemester === 1 && (
                <RevealSection>
                  <GlassCard className="overflow-hidden" hover={false}>
                    <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                      <h4 className="text-xl font-bold flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-brand-yellow" />
                        Semester I
                      </h4>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {['Non-Chordates I (Theory & Practical)', 'Allied Paper I (Theory & Practical)', 'Language Paper I', 'Environmental Studies'].map((subject, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </RevealSection>
              )}

              {activeSemester === 2 && (
                <RevealSection>
                  <GlassCard className="overflow-hidden" hover={false}>
                    <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                      <h4 className="text-xl font-bold flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-brand-yellow" />
                        Semester II
                      </h4>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {['Non-Chordates II & Chordata (Theory & Practical)', 'Allied Paper II (Theory & Practical)', 'Language Paper II', 'Value Education'].map((subject, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </RevealSection>
              )}

              {activeSemester === 3 && (
                <RevealSection>
                  <GlassCard className="overflow-hidden" hover={false}>
                    <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                      <h4 className="text-xl font-bold flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-brand-yellow" />
                        Semester III
                      </h4>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {['Animal Physiology (Theory & Practical)', 'Allied Paper III (Theory & Practical)', 'Core Elective', 'Skill-Based Course'].map((subject, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </RevealSection>
              )}

              {activeSemester === 4 && (
                <RevealSection>
                  <GlassCard className="overflow-hidden" hover={false}>
                    <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                      <h4 className="text-xl font-bold flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-brand-yellow" />
                        Semester IV
                      </h4>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {['Genetics & Evolution (Theory & Practical)', 'Cell Biology & Developmental Biology (Theory & Practical)', 'Core Elective', 'Extension Activities'].map((subject, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </RevealSection>
              )}

              {activeSemester === 5 && (
                <RevealSection>
                  <GlassCard className="overflow-hidden" hover={false}>
                    <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                      <h4 className="text-xl font-bold flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-brand-yellow" />
                        Semester V
                      </h4>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {['Ecology & Ethology (Theory & Practical)', 'Biotechnology & Microbiology (Theory & Practical)', 'Elective Paper', 'Project Work'].map((subject, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </RevealSection>
              )}

              {activeSemester === 6 && (
                <RevealSection>
                  <GlassCard className="overflow-hidden" hover={false}>
                    <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                      <h4 className="text-xl font-bold flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-brand-yellow" />
                        Semester VI
                      </h4>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {['Applied Zoology & Immunology (Theory & Practical)', 'Molecular Biology & Bioinformatics (Theory & Practical)', 'Elective Paper', 'Project & Viva-Voce'].map((subject, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </RevealSection>
              )}
            </div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Programme Learning{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Outcomes
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Skills and knowledge you will gain upon completion
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <FlaskConical className="w-6 h-6 text-white" />, title: 'Scientific Methodology', description: 'Master scientific research methods, experimental design, data collection, statistical analysis, and critical evaluation of zoological literature.' },
                { icon: <Microscope className="w-6 h-6 text-white" />, title: 'Taxonomic Expertise', description: 'Identify, classify, and understand the diversity of animal species from invertebrates to vertebrates using modern taxonomic approaches.' },
                { icon: <FlaskConical className="w-6 h-6 text-white" />, title: 'Laboratory Proficiency', description: 'Gain hands-on experience with microscopy, dissection, molecular techniques, histological preparations, and advanced analytical instruments.' },
                { icon: <Leaf className="w-6 h-6 text-white" />, title: 'Ecological Understanding', description: 'Comprehend ecosystem dynamics, biodiversity conservation, wildlife management, and environmental impact assessment methodologies.' },
                { icon: <Database className="w-6 h-6 text-white" />, title: 'Biotechnological Skills', description: 'Apply biotechnology techniques including genetic engineering, tissue culture, PCR, gel electrophoresis, and bioinformatics tools.' },
                { icon: <FileText className="w-6 h-6 text-white" />, title: 'Professional Communication', description: 'Develop scientific writing, presentation skills, research documentation, and ability to communicate complex biological concepts effectively.' }
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Career{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Opportunities
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Diverse career paths in research, healthcare, education, and conservation
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Microscope className="w-6 h-6" />, title: 'Research Scientist', desc: 'Universities, CSIR labs, ICMR, pharmaceutical R&D' },
                { icon: <Leaf className="w-6 h-6" />, title: 'Wildlife Biologist', desc: 'Forest departments, wildlife sanctuaries, NGOs' },
                { icon: <FlaskConical className="w-6 h-6" />, title: 'Medical Lab Technician', desc: 'Hospitals, diagnostic centers, pathology labs' },
                { icon: <GraduationCap className="w-6 h-6" />, title: 'Educator / Lecturer', desc: 'Schools, colleges, coaching institutes' },
                { icon: <Building2 className="w-6 h-6" />, title: 'Pharmaceutical Researcher', desc: 'Drug development, clinical trials, quality control' },
                { icon: <Globe className="w-6 h-6" />, title: 'Environmental Consultant', desc: 'Impact assessment, conservation projects' },
                { icon: <Briefcase className="w-6 h-6" />, title: 'Government Services', desc: 'Forest Service, UPSC, state PSC examinations' },
                { icon: <Database className="w-6 h-6" />, title: 'Biotechnology Specialist', desc: 'Biotech firms, genetic research, bioinformatics' }
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
                    'Pharmaceutical Industry', 'Biotechnology Firms', 'Research Institutes', 'Wildlife Conservation',
                    'Healthcare Sector', 'Academic Institutions', 'Government Agencies', 'Environmental NGOs',
                    'Aquaculture Industry', 'Forensic Laboratories', 'Veterinary Services', 'Biological Surveys'
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Department{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Facilities
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  State-of-the-art infrastructure for comprehensive learning
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Microscope className="w-10 h-10 text-brand-green" />, title: 'Zoology Lab', description: 'Advanced compound microscopes • Stereo microscopes for dissection • Specimen preservation units • Digital imaging systems' },
                { icon: <Award className="w-10 h-10 text-emerald-500" />, title: 'Zoological Museum', description: 'Preserved animal specimens • Taxidermy collections • Skeletal displays • Educational models' },
                { icon: <FlaskConical className="w-10 h-10 text-emerald-500" />, title: 'Molecular Biology Lab', description: 'PCR & electrophoresis units • Centrifuges and incubators • Gel documentation systems • Genetic analysis equipment' },
                { icon: <Fish className="w-10 h-10 text-emerald-500" />, title: 'Aquarium & Fish Culture Unit', description: 'Freshwater aquarium setups • Marine ecosystem models • Fish breeding facilities • Water quality monitoring' },
                { icon: <Database className="w-10 h-10 text-emerald-500" />, title: 'Bioinformatics Lab', description: 'High-speed computers • Sequence analysis software • Phylogenetic tools • Protein modeling applications' },
                { icon: <Building2 className="w-10 h-10 text-emerald-500" />, title: 'Animal House Facility', description: 'Small animal breeding • Ethical research protocols • CPCSEA guidelines followed • Veterinary supervision' }
              ].map((facility, idx) => (
                <RevealSection key={idx} delay={idx * 100}>
                  <GlassCard className="p-6 h-full">
                    <div className="mb-4">{facility.icon}</div>
                    <h3 className="text-lg font-bold text-brand-green mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm">{facility.description}</p>
                  </GlassCard>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-brand-cream" id="why-choose">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Why Us" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Our B.Sc{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Zoology Programme?
                  </span>
                </h2>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Users className="w-5 h-5 text-white" />, title: 'Expert Learning Facilitators', description: 'Learn from experienced faculty with Ph.D. qualifications, active research publications, and industry experience.' },
                { icon: <FlaskConical className="w-5 h-5 text-white" />, title: 'Hands-on Laboratory Experience', description: 'Extensive practical sessions with modern equipment, microscopy, molecular techniques, and field instruments.' },
                { icon: <MapPin className="w-5 h-5 text-white" />, title: 'Field Study Excursions', description: 'Annual trips to wildlife sanctuaries, research stations, marine ecosystems, and biodiversity conservation centers.' },
                { icon: <Briefcase className="w-5 h-5 text-white" />, title: 'Industry Internships', description: 'Collaborate with pharmaceutical companies, biotech firms, research labs, and environmental organizations.' },
                { icon: <TrendingUp className="w-5 h-5 text-white" />, title: 'Strong Placement Support', description: 'Dedicated placement cell, career counseling, competitive exam coaching, and recruitment assistance.' },
                { icon: <Microscope className="w-5 h-5 text-white" />, title: 'Research Opportunities', description: 'Engage in faculty-guided research projects, present at conferences, and publish in peer-reviewed journals.' }
              ].map((reason, idx) => (
                <RevealSection key={idx} delay={idx * 100}>
                  <div className="flex gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/80 hover:shadow-lg hover:-translate-y-0.5 transition-all h-full">
                    <div className="w-11 h-11 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-green/15">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-1">{reason.title}</h4>
                      <p className="text-sm text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-white" id="faculty">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Faculty" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Learning{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Facilitators
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Meet our experienced and dedicated department team
                </p>
              </div>
            </RevealSection>

            <Marquee pauseOnHover draggable speed={30} className="[--gap:1.5rem]">
              {[
                { name: 'Dr. Venkatesh Kumar', designation: 'Head of Department', qualification: 'Ph.D. in Animal Physiology' },
                { name: 'Dr. Lakshmi Devi', designation: 'Associate Professor', qualification: 'Ph.D. in Wildlife Biology' },
                { name: 'Mr. Prakash Rajan', designation: 'Assistant Professor', qualification: 'M.Sc., NET Qualified' },
                { name: 'Ms. Sangeetha Krishnan', designation: 'Assistant Professor', qualification: 'M.Phil., SLET Qualified' }
              ].map((faculty, idx) => (
                <div key={idx} className="w-[260px] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group flex flex-col h-[340px]">
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/faculties/placeholder-avatar.jpg"
                      alt={faculty.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5 text-center flex-1 flex flex-col justify-center">
                    <h4 className="text-lg font-bold text-brand-green mb-1">{faculty.name}</h4>
                    <p className="text-sm font-semibold text-emerald-500 mb-1">{faculty.designation}</p>
                    <p className="text-xs text-gray-600">{faculty.qualification}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-brand-cream" id="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="FAQ" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Questions
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  Find answers to common queries about the B.Sc Zoology programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the B.Sc Zoology programme?', answer: 'The B.Sc Zoology programme is a 3-year full-time undergraduate degree comprising six semesters with practical laboratory sessions.' },
                { question: 'What are the career opportunities after B.Sc Zoology?', answer: 'Graduates can pursue careers in wildlife conservation, pharmaceutical research, biotechnology, environmental consulting, teaching, forensic science, healthcare, and government services including Forest Service and UPSC examinations.' },
                { question: 'What is the eligibility criteria for B.Sc Zoology admission?', answer: 'Candidates must have completed Higher Secondary (10+2) from a recognized board with Biology as a subject. Minimum aggregate marks requirement varies by institution, typically 50% for general category.' },
                { question: 'Can I pursue higher studies after B.Sc Zoology?', answer: 'Yes, graduates can pursue M.Sc in Zoology, Wildlife Biology, Marine Biology, Biotechnology, Environmental Science, or prepare for competitive exams like UPSC, NET, GATE for research and teaching positions.' },
                { question: 'Are there any field study trips included in the programme?', answer: 'Yes, the programme includes annual field trips to wildlife sanctuaries, marine biology stations, biodiversity parks, and research institutes to provide hands-on ecological and conservation experience.' },
                { question: 'What laboratory facilities are available for students?', answer: 'Students have access to advanced microscopy labs, molecular biology equipment, zoological museum, aquarium facilities, bioinformatics lab, and animal house with modern research instruments.' }
              ].map((faq, idx) => (
                <RevealSection key={idx} delay={idx * 60}>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/80 hover:border-brand-green/20 transition-all overflow-hidden">
                    <button
                      onClick={() => setActiveFAQ(activeFAQ === idx ? -1 : idx)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-brand-green/5 transition-colors"
                    >
                      <span className="font-semibold text-brand-green">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-brand-green flex-shrink-0 transition-transform duration-300 ${activeFAQ === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-300 ${activeFAQ === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-16 bg-white relative overflow-hidden" id="admission">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 via-transparent to-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center">
              <SectionBadge text="Enroll Now" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Begin Your Journey in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Zoological Sciences
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our B.Sc Zoology programme and embark on an exciting career exploring the animal kingdom, contributing to scientific research, and making a difference in wildlife conservation and healthcare sectors.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-green to-emerald-500 hover:from-brand-green/90 hover:to-emerald-500/90 text-white px-8 py-4 rounded-lg font-semibold shadow-xl shadow-brand-green/25 hover:shadow-2xl transition-all hover:-translate-y-1">
                  Apply Online
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 bg-transparent hover:bg-brand-green text-brand-green hover:text-white border-2 border-brand-green px-8 py-4 rounded-lg font-semibold transition-all">
                  Download Brochure
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Related Programmes */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Explore More" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Explore Related{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Programmes
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  Discover other science programmes at our college
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <GraduationCap className="w-6 h-6 text-white" />, title: 'M.Sc Zoology', description: 'Advanced postgraduate programme in zoological research and specialization', duration: '2 Years' },
                { icon: <Leaf className="w-6 h-6 text-white" />, title: 'B.Sc Botany', description: 'Comprehensive study of plant sciences, ecology, and biotechnology', duration: '3 Years' },
                { icon: <Database className="w-6 h-6 text-white" />, title: 'B.Sc Biotechnology', description: 'Interdisciplinary programme combining biology, technology, and research', duration: '3 Years' }
              ].map((programme, idx) => (
                <RevealSection key={idx} delay={idx * 150}>
                  <a href="#" className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-brand-green/20 transition-all">
                      {programme.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-green mb-2 group-hover:text-emerald-500 transition-colors">{programme.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{programme.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{programme.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Full-time</span>
                      </div>
                    </div>
                  </a>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
