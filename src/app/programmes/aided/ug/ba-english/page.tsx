'use client';

import type { Metadata } from 'next';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe } from 'lucide-react';
import { useState } from 'react';

export default function BAEnglishPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-brand-green via-brand-green to-brand-green/90 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(255,222,89,0.15)_0%,_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(255,222,89,0.15)_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-white to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <GraduationCap className="w-4 h-4 text-brand-yellow" />
              UGC Recognized Programme
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Bachelor of Arts in English (Honours)
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-6 drop-shadow-md text-white/95">
              Master the Art of Language, Literature & Communication
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5" />
                <span>3 Years Duration</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <FileText className="w-5 h-5" />
                <span>6 Semesters</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-5 h-5" />
                <span>Full-Time Programme</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#admission" className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-green px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Apply Now
              </a>
              <a href="#curriculum" className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-brand-green border-2 border-white/80 px-7 py-3 rounded-lg font-semibold transition-all">
                View Curriculum
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="relative z-10 -mt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-brand-cream hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 mx-auto mb-4 bg-brand-yellow rounded-lg flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-brand-green" />
              </div>
              <span className="block text-3xl font-bold text-brand-green mb-1">NAAC</span>
              <h3 className="font-bold text-brand-green mb-1">Accredited Institution</h3>
              <p className="text-sm text-gray-600">Quality assured education</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-brand-cream hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 mx-auto mb-4 bg-brand-yellow rounded-lg flex items-center justify-center">
                <Users className="w-7 h-7 text-brand-green" />
              </div>
              <span className="block text-3xl font-bold text-brand-green mb-1">15:1</span>
              <h3 className="font-bold text-brand-green mb-1">Learner-Facilitator Ratio</h3>
              <p className="text-sm text-gray-600">Personalized attention</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-brand-cream hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 mx-auto mb-4 bg-brand-yellow rounded-lg flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-brand-green" />
              </div>
              <span className="block text-3xl font-bold text-brand-green mb-1">90%+</span>
              <h3 className="font-bold text-brand-green mb-1">Placement Record</h3>
              <p className="text-sm text-gray-600">Career opportunities assured</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-brand-cream hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 mx-auto mb-4 bg-brand-yellow rounded-lg flex items-center justify-center">
                <Award className="w-7 h-7 text-brand-green" />
              </div>
              <span className="block text-3xl font-bold text-brand-green mb-1">₹3.5L</span>
              <h3 className="font-bold text-brand-green mb-1">Average Package</h3>
              <p className="text-sm text-gray-600">Competitive starting salary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-6 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-brand-yellow after:mt-3 after:rounded">
                Programme Overview
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The Bachelor of Arts in English (Honours) is a comprehensive three-year undergraduate programme designed to develop proficient communicators, critical thinkers, and creative writers. This UGC-recognized programme offers an in-depth exploration of English literature spanning various periods, genres, and cultural contexts while building strong foundations in language studies, linguistics, and professional communication.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy ensures that Learners receive holistic development through experiential learning, industry exposure, and skill-based training. The curriculum integrates classical literary studies with contemporary communication needs, preparing graduates for diverse career pathways in education, media, corporate communications, and creative industries.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                  <span>Industry-Aligned Curriculum</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                  <span>Expert Learning Facilitators</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                  <span>Practical Skill Development</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                  <span>Research Opportunities</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/600x450/0b6d41/FFFFFF?text=English+Literature+Library"
                  alt="English Literature Library"
                  className="w-full h-auto"
                />
                <span className="absolute top-4 right-4 bg-brand-yellow text-brand-green px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Since 1954
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Admission Criteria */}
      <section className="py-16 bg-white" id="eligibility">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-brand-yellow after:mt-3 after:rounded after:mx-auto">
                Eligibility & Admission Criteria
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Requirements for joining the BA English (Honours) programme
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-brand-cream rounded-2xl p-8 border border-brand-yellow/20 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-brand-yellow rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green mb-4">Academic Qualification</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>Higher Secondary (10+2) from recognized board</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>English as a compulsory subject</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>Minimum 50% aggregate marks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>45% for reserved categories</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-cream rounded-2xl p-8 border border-brand-yellow/20 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-brand-yellow rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green mb-4">Accepted Streams</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>Arts / Humanities stream preferred</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>Science stream with English</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>Commerce stream with English</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>Vocational courses with English</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-cream rounded-2xl p-8 border border-brand-yellow/20 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-brand-yellow rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green mb-4">Documents Required</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>10th & 12th Mark Sheets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>Transfer Certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>Community Certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>Passport Size Photographs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>Aadhaar Card Copy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Curriculum */}
      <section className="py-16 bg-brand-cream" id="curriculum">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-brand-yellow after:mt-3 after:rounded after:mx-auto">
                Programme Curriculum
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive syllabus designed to build expertise in English language and literature
              </p>
            </div>

            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3].map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeYear === year
                      ? 'bg-brand-green text-white shadow-lg'
                      : 'bg-white text-brand-green hover:bg-brand-yellow/20'
                  }`}
                >
                  Year {year}
                </button>
              ))}
            </div>

            {activeYear === 1 && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-brand-green text-white px-6 py-4">
                    <h4 className="text-xl font-bold">Semester I</h4>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        'Introduction to Literary Studies',
                        'English Grammar & Usage',
                        'British Literature: Poetry',
                        'Communication Skills I',
                        'Indian Writing in English',
                        'Environmental Studies'
                      ].map((subject, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-brand-yellow mt-1">•</span>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-brand-green text-white px-6 py-4">
                    <h4 className="text-xl font-bold">Semester II</h4>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        'British Literature: Prose',
                        'Phonetics & Phonology',
                        'Social History of England',
                        'Communication Skills II',
                        'Women\'s Writing',
                        'Value Education'
                      ].map((subject, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-brand-yellow mt-1">•</span>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeYear === 2 && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-brand-green text-white px-6 py-4">
                    <h4 className="text-xl font-bold">Semester III</h4>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        'British Literature: Drama',
                        'American Literature',
                        'Linguistics I: Morphology & Syntax',
                        'Literary Criticism',
                        'Creative Writing',
                        'Soft Skills Development'
                      ].map((subject, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-brand-yellow mt-1">•</span>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-brand-green text-white px-6 py-4">
                    <h4 className="text-xl font-bold">Semester IV</h4>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        'British Literature: Fiction',
                        'Commonwealth Literature',
                        'Linguistics II: Semantics & Pragmatics',
                        'Literary Theory',
                        'Translation Studies',
                        'Professional Ethics'
                      ].map((subject, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-brand-yellow mt-1">•</span>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeYear === 3 && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-brand-green text-white px-6 py-4">
                    <h4 className="text-xl font-bold">Semester V</h4>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        'Shakespeare Studies',
                        'Postcolonial Literature',
                        'English Language Teaching',
                        'Journalism & Mass Communication',
                        'Research Methodology',
                        'Internship / Project Work'
                      ].map((subject, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-brand-yellow mt-1">•</span>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-brand-green text-white px-6 py-4">
                    <h4 className="text-xl font-bold">Semester VI</h4>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        'Modern & Contemporary Literature',
                        'World Literature',
                        'Business Communication',
                        'Film Studies',
                        'Digital Humanities',
                        'Dissertation / Project'
                      ].map((subject, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-brand-yellow mt-1">•</span>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Programme Learning Outcomes */}
      <section className="py-16 bg-white" id="outcomes">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-brand-yellow after:mt-3 after:rounded after:mx-auto">
                Programme Learning Outcomes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Skills and competencies you will develop through this programme
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  number: '01',
                  icon: <GraduationCap className="w-6 h-6 text-brand-green" />,
                  title: 'Critical Thinking',
                  description: 'Develop analytical abilities to evaluate literary texts, arguments, and cultural phenomena from multiple perspectives.'
                },
                {
                  number: '02',
                  icon: <Users className="w-6 h-6 text-brand-green" />,
                  title: 'Communication Excellence',
                  description: 'Master written and oral communication skills for professional, academic, and creative contexts.'
                },
                {
                  number: '03',
                  icon: <BookOpen className="w-6 h-6 text-brand-green" />,
                  title: 'Literary Knowledge',
                  description: 'Acquire comprehensive understanding of literature across periods, genres, cultures, and critical frameworks.'
                },
                {
                  number: '04',
                  icon: <Lightbulb className="w-6 h-6 text-brand-green" />,
                  title: 'Creative Writing',
                  description: 'Develop creative expression skills across various genres including fiction, poetry, drama, and digital content.'
                },
                {
                  number: '05',
                  icon: <FileText className="w-6 h-6 text-brand-green" />,
                  title: 'Language Proficiency',
                  description: 'Gain expertise in English language structure, usage, and evolution through linguistic study.'
                },
                {
                  number: '06',
                  icon: <Globe className="w-6 h-6 text-brand-green" />,
                  title: 'Global Perspective',
                  description: 'Understand diverse cultural contexts and develop intercultural competence through world literature studies.'
                }
              ].map((outcome, idx) => (
                <div key={idx} className="relative bg-brand-cream rounded-2xl p-6 border border-brand-yellow/20 hover:shadow-xl transition-all group">
                  <span className="absolute top-4 right-4 text-5xl font-bold text-brand-yellow/20 group-hover:text-brand-yellow/30 transition-colors">
                    {outcome.number}
                  </span>
                  <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mb-4">
                    {outcome.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">{outcome.title}</h3>
                  <p className="text-gray-600 text-sm">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-brand-cream" id="careers">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-brand-yellow after:mt-3 after:rounded after:mx-auto">
                Career Opportunities
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Diverse pathways await BA English graduates across industries
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Lightbulb className="w-6 h-6 text-brand-green" />, title: 'Content Writer', desc: 'Create engaging content for websites, blogs, and digital platforms' },
                { icon: <FileText className="w-6 h-6 text-brand-green" />, title: 'Journalist', desc: 'Report news, write articles for print and digital media' },
                { icon: <GraduationCap className="w-6 h-6 text-brand-green" />, title: 'English Teacher', desc: 'Teach English language and literature at schools' },
                { icon: <Users className="w-6 h-6 text-brand-green" />, title: 'Public Relations', desc: 'Manage communications for organizations and brands' },
                { icon: <BookOpen className="w-6 h-6 text-brand-green" />, title: 'Editor', desc: 'Edit and publish books, magazines, and online content' },
                { icon: <Globe className="w-6 h-6 text-brand-green" />, title: 'Translator', desc: 'Translate documents and literary works between languages' },
                { icon: <Briefcase className="w-6 h-6 text-brand-green" />, title: 'Corporate Communications', desc: 'Handle internal and external communications' },
                { icon: <Award className="w-6 h-6 text-brand-green" />, title: 'Civil Services', desc: 'Prepare for UPSC, TNPSC and other competitive exams' }
              ].map((career, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all border border-brand-yellow/20">
                  <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mb-4">
                    {career.icon}
                  </div>
                  <h3 className="font-bold text-brand-green mb-2">{career.title}</h3>
                  <p className="text-sm text-gray-600">{career.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Employment Sectors</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Publishing Houses', 'Media & Entertainment', 'Education Sector', 'IT & Software',
                  'Advertising Agencies', 'Government Departments', 'Banking & Finance', 'NGOs & Social Sector',
                  'E-commerce', 'Healthcare Communications'
                ].map((sector, idx) => (
                  <span key={idx} className="px-4 py-2 bg-brand-cream hover:bg-brand-yellow hover:text-brand-green text-brand-green rounded-full text-sm font-medium transition-all cursor-default border border-brand-yellow/20">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Facilities */}
      <section className="py-16 bg-white" id="facilities">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-brand-yellow after:mt-3 after:rounded after:mx-auto">
                Learning Facilities
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                State-of-the-art infrastructure to support your academic journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Dedicated English Library',
                  description: 'Over 15,000 books covering British, American, Indian, and World Literature with digital access to JSTOR and other academic databases.',
                  image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=English+Library'
                },
                {
                  title: 'Language Laboratory',
                  description: 'Advanced language lab with audio-visual equipment for phonetics training, accent improvement, and communication practice.',
                  image: 'https://placehold.co/400x200/ffde59/0b6d41?text=Language+Lab'
                },
                {
                  title: 'Digital Content Studio',
                  description: 'Equipped studio for podcasting, video creation, and multimedia content development for journalism and media courses.',
                  image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Digital+Studio'
                },
                {
                  title: 'Seminar Hall',
                  description: 'Air-conditioned seminar hall with modern presentation facilities for literary discussions, guest lectures, and workshops.',
                  image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Seminar+Hall'
                },
                {
                  title: 'Reading Room',
                  description: 'Peaceful reading spaces with current periodicals, literary magazines, and research journals for focused academic study.',
                  image: 'https://placehold.co/400x200/ffde59/0b6d41?text=Reading+Room'
                },
                {
                  title: 'Smart Learning Studios',
                  description: 'Technology-enabled learning studios with interactive boards, projectors, and high-speed internet connectivity.',
                  image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Smart+Classroom'
                }
              ].map((facility, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-brand-green mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-brand-cream" id="why-choose">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/600x500/0b6d41/FFFFFF?text=Campus+Life"
                alt="Campus Life"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-green/95 to-transparent p-8">
                <div className="grid grid-cols-3 gap-4 text-center text-white">
                  <div>
                    <h4 className="text-3xl font-bold text-brand-yellow mb-1">70+</h4>
                    <p className="text-xs">Years of Excellence</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-brand-yellow mb-1">5000+</h4>
                    <p className="text-xs">Active Learners</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-brand-yellow mb-1">500+</h4>
                    <p className="text-xs">Learning Facilitators</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-brand-yellow after:mt-3 after:rounded">
                Why Choose Our BA English Programme?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for success in academics and career.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'UGC Recognized & NAAC Accredited',
                    description: 'Quality-assured education meeting national standards with excellent academic reputation.'
                  },
                  {
                    title: 'Expert Learning Facilitators',
                    description: 'Highly qualified faculty with doctoral degrees, research publications, and industry experience.'
                  },
                  {
                    title: 'Strong Placement Support',
                    description: 'Dedicated placement cell with industry partnerships ensuring excellent career opportunities.'
                  },
                  {
                    title: 'Industry-Aligned Curriculum',
                    description: 'Regularly updated syllabus incorporating current industry trends and skill requirements.'
                  },
                  {
                    title: 'Research & Publication Support',
                    description: 'Opportunities for research projects, paper presentations, and academic publications.'
                  }
                ].map((reason, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl border border-brand-yellow/20 hover:shadow-lg transition-all">
                    <div className="w-11 h-11 bg-brand-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-1">{reason.title}</h4>
                      <p className="text-sm text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-white" id="faculty">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-brand-yellow after:mt-3 after:rounded after:mx-auto">
                Our Learning Facilitators
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet our experienced and dedicated department team
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Dr. Priya Sundaram',
                  designation: 'Head of Department',
                  qualification: 'Ph.D. in English Literature',
                  image: 'https://placehold.co/300x280/0b6d41/FFFFFF?text=HOD+English'
                },
                {
                  name: 'Dr. Rajesh Kumar',
                  designation: 'Associate Professor',
                  qualification: 'Ph.D. in Linguistics',
                  image: 'https://placehold.co/300x280/ffde59/0b6d41?text=Professor'
                },
                {
                  name: 'Ms. Anitha Ramachandran',
                  designation: 'Assistant Professor',
                  qualification: 'M.Phil., NET Qualified',
                  image: 'https://placehold.co/300x280/0b6d41/FFFFFF?text=Professor'
                },
                {
                  name: 'Mr. Vikram Subramanian',
                  designation: 'Assistant Professor',
                  qualification: 'M.A., SLET Qualified',
                  image: 'https://placehold.co/300x280/0b6d41/FFFFFF?text=Professor'
                }
              ].map((faculty, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h4 className="text-lg font-bold text-brand-green mb-1">{faculty.name}</h4>
                    <p className="text-sm font-semibold text-brand-yellow mb-1">{faculty.designation}</p>
                    <p className="text-xs text-gray-600">{faculty.qualification}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-brand-cream" id="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-brand-yellow after:mt-3 after:rounded after:mx-auto">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to common queries about the BA English programme
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'What is the duration of the BA English programme?',
                  answer: 'The BA English (Honours) programme is a 3-year full-time undergraduate degree comprising six semesters. Each academic year consists of two semesters, with examinations conducted at the end of each semester. The programme follows the Choice Based Credit System (CBCS) pattern as prescribed by the UGC.'
                },
                {
                  question: 'What are the career opportunities after BA English?',
                  answer: 'BA English graduates have diverse career opportunities including Content Writing and Copywriting, Journalism and Media, Publishing and Editing, Teaching (after B.Ed.), Public Relations and Corporate Communications, Translation and Interpretation, Civil Services (IAS, IPS, IFS), and Advertising and Marketing.'
                },
                {
                  question: 'What is the eligibility criteria for BA English admission?',
                  answer: 'Candidates must have completed Higher Secondary (10+2) from a recognized board with English as a compulsory subject. A minimum aggregate of 50% marks is required for general category candidates, while 45% is required for reserved categories (SC/ST/OBC). Candidates from any stream (Arts, Science, or Commerce) are eligible to apply.'
                },
                {
                  question: 'What is the fee structure for BA English?',
                  answer: 'The fee structure varies based on the category of admission. Please contact the admission office for the current academic year\'s detailed fee structure. The college offers various scholarship opportunities for meritorious students and those from economically weaker sections. Government scholarships are also facilitated through the institution.'
                },
                {
                  question: 'Can I pursue higher studies after BA English?',
                  answer: 'Yes, BA English opens multiple pathways for higher education including MA English (Literature/Linguistics), M.Phil. and Ph.D. in English, B.Ed. for teaching career, MBA (Management Studies), Mass Communication and Journalism, Law (LLB), and Diploma in Creative Writing.'
                },
                {
                  question: 'Does the college provide placement assistance?',
                  answer: 'Yes, our dedicated Placement Cell actively supports learners through campus recruitment drives, soft skills training, resume building workshops, mock interviews, and industry interaction sessions. We have partnerships with leading companies in media, publishing, IT, education, and corporate sectors. The placement rate for BA English graduates has consistently been above 85%.'
                },
                {
                  question: 'What makes this BA English programme unique?',
                  answer: 'Our BA English programme stands out due to its industry-aligned curriculum, emphasis on practical skills like digital content creation and journalism, dedicated language laboratory, expert learning facilitators with research experience, strong placement support, and focus on holistic development through co-curricular activities. The programme also offers specialization options in areas like Creative Writing, ELT, and Media Studies.'
                },
                {
                  question: 'Are internships mandatory in the BA English programme?',
                  answer: 'Yes, the programme includes a mandatory internship component in the fifth semester. Learners gain practical experience in fields such as journalism, content writing, publishing, teaching, or corporate communications. The department assists in securing internship placements with reputed organizations, newspapers, magazines, and educational institutions.'
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-brand-yellow/20 hover:border-brand-yellow transition-all overflow-hidden">
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === idx ? -1 : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-brand-cream/30 transition-colors"
                  >
                    <span className="font-semibold text-brand-green">{faq.question}</span>
                    <div className={`w-6 h-6 relative flex-shrink-0 transition-transform ${activeFAQ === idx ? 'rotate-45' : ''}`}>
                      <span className="absolute inset-0 flex items-center justify-center text-brand-yellow text-2xl font-light">+</span>
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ${activeFAQ === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-16 bg-brand-green text-white relative overflow-hidden" id="admission">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(255,222,89,0.1)_0%,_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(255,222,89,0.1)_0%,_transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Journey in English Studies</h2>
            <p className="text-lg mb-8 text-white/95">
              Join our BA English programme and unlock a world of opportunities in literature, language, and communication.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#" className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-green px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                Apply for Admission
              </a>
              <a href="#" className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-brand-green border-2 border-white px-8 py-4 rounded-lg font-semibold transition-all">
                Download Brochure
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-sm">
                <span>📧</span>
                <span>admissions@college.edu</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Admissions Open 2025-26</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programmes */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-brand-yellow after:mt-3 after:rounded after:mx-auto">
                Explore Related Programmes
              </h2>
              <p className="text-lg text-gray-600">
                Discover other arts and humanities programmes at our college
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'MA English',
                  description: 'Advanced postgraduate studies in English Literature and Linguistics',
                  duration: '2 Years',
                  image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=MA+English'
                },
                {
                  title: 'BA History',
                  description: 'Study of world civilizations, Indian history, and historiography',
                  duration: '3 Years',
                  image: 'https://placehold.co/400x180/ffde59/0b6d41?text=BA+History'
                },
                {
                  title: 'BA Economics',
                  description: 'Comprehensive study of micro and macroeconomics with statistical analysis',
                  duration: '3 Years',
                  image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BA+Economics'
                }
              ].map((programme, idx) => (
                <a key={idx} href="#" className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-yellow/20 group">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={programme.image}
                      alt={programme.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-green mb-2 group-hover:text-brand-yellow transition-colors">{programme.title}</h3>
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
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
