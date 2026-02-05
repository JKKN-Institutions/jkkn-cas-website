'use client';

import React, { useState } from 'react';
import { GraduationCap, Clock, Award, Users, BookOpen, FlaskConical, Microscope, TestTube, Atom, Building2, Beaker, Trophy, CheckCircle2, Calendar, FileText, School, Target, Brain, Lightbulb, TrendingUp } from 'lucide-react';

export default function BScChemistryPage() {
  const [activeYear, setActiveYear] = useState(1);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-brand-green via-emerald-700 to-teal-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">UGC Recognized Programme</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Bachelor of Science in<br />Chemistry
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/95">
              Exploring Matter, Reactions & Innovations
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5" />
                <span className="text-sm">3 Years / 6 Semesters</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm">Full-Time Programme</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <GraduationCap className="w-5 h-5" />
                <span className="text-sm">Aided Programme</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-brand-yellow text-brand-green px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all hover:shadow-lg hover:-translate-y-0.5">
                Apply Now
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold border-2 border-white/50 hover:bg-white/20 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="relative -mt-12 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Accredited Institution</h3>
              <p className="text-gray-600 text-sm">NAAC A+ Grade</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Faculty Ratio</h3>
              <p className="text-gray-600 text-sm">1:15 Student Ratio</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Placement Record</h3>
              <p className="text-gray-600 text-sm">85% Success Rate</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Average Package</h3>
              <p className="text-gray-600 text-sm">₹3.5 LPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-6">
                Programme Overview
              </h2>
              <div className="w-16 h-1 bg-brand-yellow mb-6"></div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                The Bachelor of Science in Chemistry programme offers a comprehensive study of chemical sciences, exploring the composition, structure, properties, and reactions of matter. Our curriculum combines theoretical knowledge with extensive practical training in modern laboratories.
              </p>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Students develop strong analytical, research, and problem-solving skills through hands-on experiments, project work, and industry exposure. The programme prepares graduates for diverse careers in chemical industries, pharmaceuticals, research, education, and environmental sciences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg border-l-4 border-brand-green">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">State-of-the-art Chemistry Labs</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg border-l-4 border-brand-green">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">Experienced Faculty Members</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg border-l-4 border-brand-green">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">Research Opportunities</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg border-l-4 border-brand-green">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">Industry Collaborations</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-brand-green rounded-2xl p-12 text-center shadow-xl">
                <FlaskConical className="w-24 h-24 text-brand-yellow mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Chemistry Laboratory</h3>
                <p className="text-white/90 text-lg">Modern equipment and facilities for hands-on learning</p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-yellow rounded-xl p-6 shadow-lg">
                <p className="text-brand-green font-bold text-2xl">50+</p>
                <p className="text-brand-green text-sm">Experiments & Practicals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Eligibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
              Eligibility & Admission Criteria
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-teal-500 mx-auto mb-3"></div>
            <p className="text-gray-600 text-lg">Requirements for joining the B.Sc Chemistry programme</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-teal-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <School className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-green mb-4">Academic Qualification</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pass in Higher Secondary (10+2) examination from a recognized board with minimum aggregate marks as per institution norms.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-teal-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-green mb-4">Subject Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mt-2 flex-shrink-0"></span>
                    <span>Chemistry as mandatory subject</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mt-2 flex-shrink-0"></span>
                    <span>Physics or Mathematics preferred</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mt-2 flex-shrink-0"></span>
                    <span>Science stream students</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-teal-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-green mb-4">Documents Required</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mt-2 flex-shrink-0"></span>
                    <span>10th & 12th Mark Sheets</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mt-2 flex-shrink-0"></span>
                    <span>Transfer Certificate</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mt-2 flex-shrink-0"></span>
                    <span>Community Certificate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Curriculum */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
              Programme Curriculum
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setActiveYear(1)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeYear === 1
                  ? 'bg-brand-green text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              Year 1
            </button>
            <button
              onClick={() => setActiveYear(2)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeYear === 2
                  ? 'bg-brand-green text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              Year 2
            </button>
            <button
              onClick={() => setActiveYear(3)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeYear === 3
                  ? 'bg-brand-green text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              Year 3
            </button>
          </div>

          {/* Year 1 Content */}
          {activeYear === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Semester I */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-brand-green to-emerald-600 text-white p-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <h4 className="text-lg font-bold">Semester I</h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Inorganic Chemistry I</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Organic Chemistry I</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Physical Chemistry I</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">General English</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Allied Mathematics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Environmental Studies</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Semester II */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-brand-green to-emerald-600 text-white p-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <h4 className="text-lg font-bold">Semester II</h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Inorganic Chemistry I (Continued)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Organic Chemistry I (Continued)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Physical Chemistry I (Continued)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Tamil/Hindi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Allied Physics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Year 2 Content */}
          {activeYear === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Semester III */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-brand-green to-emerald-600 text-white p-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <h4 className="text-lg font-bold">Semester III</h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Inorganic Chemistry II</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Organic Chemistry II</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Physical Chemistry II</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Analytical Chemistry</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Allied Subject III</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Semester IV */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-brand-green to-emerald-600 text-white p-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <h4 className="text-lg font-bold">Semester IV</h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Inorganic Chemistry II (Continued)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Organic Chemistry II (Continued)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Physical Chemistry II (Continued)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Environmental Science</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Allied Subject IV</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Year 3 Content */}
          {activeYear === 3 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Semester V */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-brand-green to-emerald-600 text-white p-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <h4 className="text-lg font-bold">Semester V</h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Spectroscopy & Molecular Structure</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Industrial Chemistry</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Biochemistry</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Green Chemistry</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Elective I</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Semester VI */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-brand-green to-emerald-600 text-white p-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <h4 className="text-lg font-bold">Semester VI</h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Advanced Organic Chemistry</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Advanced Inorganic Chemistry</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Research Project</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Elective II</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">Internship/Industrial Training</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
              Programme Learning Outcomes
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-brand-yellow hover:shadow-lg transition-all relative">
              <div className="absolute top-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-yellow font-bold">
                01
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <Atom className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3 pr-12">
                Chemical Knowledge
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive understanding of chemical principles, reactions, and molecular structures across all chemistry branches.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-brand-yellow hover:shadow-lg transition-all relative">
              <div className="absolute top-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-yellow font-bold">
                02
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <Microscope className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3 pr-12">
                Analytical Skills
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proficiency in using modern analytical instruments and techniques for chemical analysis and research.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-brand-yellow hover:shadow-lg transition-all relative">
              <div className="absolute top-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-yellow font-bold">
                03
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <TestTube className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3 pr-12">
                Laboratory Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hands-on experience with chemical experiments, safety protocols, and laboratory management practices.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-brand-yellow hover:shadow-lg transition-all relative">
              <div className="absolute top-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-yellow font-bold">
                04
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3 pr-12">
                Research Aptitude
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ability to design experiments, conduct research, and contribute to scientific knowledge in chemistry.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-brand-yellow hover:shadow-lg transition-all relative">
              <div className="absolute top-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-yellow font-bold">
                05
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3 pr-12">
                Problem Solving
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Critical thinking and analytical problem-solving skills for chemical and industrial challenges.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-brand-yellow hover:shadow-lg transition-all relative">
              <div className="absolute top-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-yellow font-bold">
                06
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3 pr-12">
                Industry Readiness
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Practical knowledge and skills needed for careers in chemical industries and pharmaceutical sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-gradient-to-br from-brand-green via-emerald-700 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Opportunities</h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto mb-4"></div>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Diverse career paths in chemical sciences, pharmaceuticals, research, and industry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold mb-2">Chemical Analyst</h3>
              <p className="text-white/75 text-sm">Quality control and analysis</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Beaker className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold mb-2">Research Scientist</h3>
              <p className="text-white/75 text-sm">R&D laboratories</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold mb-2">Production Chemist</h3>
              <p className="text-white/75 text-sm">Chemical industries</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold mb-2">Chemistry Teacher</h3>
              <p className="text-white/75 text-sm">Academic institutions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TestTube className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold mb-2">Pharmaceutical Analyst</h3>
              <p className="text-white/75 text-sm">Pharma companies</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold mb-2">Lab Technician</h3>
              <p className="text-white/75 text-sm">Testing laboratories</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold mb-2">Quality Controller</h3>
              <p className="text-white/75 text-sm">Manufacturing units</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold mb-2">Environmental Chemist</h3>
              <p className="text-white/75 text-sm">Environmental agencies</p>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-white/20">
            <h3 className="text-2xl font-bold text-center mb-8">Employment Sectors</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Pharmaceutical Companies',
                'Chemical Industries',
                'Research Institutions',
                'Quality Control Labs',
                'Environmental Agencies',
                'Food & Beverage Industry',
                'Cosmetics Industry',
                'Petroleum Sector',
                'Academic Institutions',
                'Forensic Laboratories',
                'Government Departments',
                'Biotechnology Firms'
              ].map((sector, index) => (
                <span
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
              Learning Facilities
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FlaskConical className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Advanced Laboratories</h3>
              <p className="text-gray-600 text-sm">Modern chemistry labs with latest equipment</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Digital Library</h3>
              <p className="text-gray-600 text-sm">Extensive chemistry research resources</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Microscope className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Research Center</h3>
              <p className="text-gray-600 text-sm">Dedicated research and project facilities</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Seminar Hall</h3>
              <p className="text-gray-600 text-sm">Modern halls for academic events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
              Why Choose Our B.Sc Chemistry Programme?
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-brand-yellow shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">
                    Comprehensive Curriculum with Practical Focus
                  </h3>
                  <p className="text-gray-600">
                    Balance of theoretical knowledge and hands-on laboratory experience with modern equipment and techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-brand-yellow shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">
                    Experienced and Qualified Faculty
                  </h3>
                  <p className="text-gray-600">
                    Learn from accomplished professors and researchers with extensive industry and academic experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-brand-yellow shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">
                    State-of-the-Art Laboratory Infrastructure
                  </h3>
                  <p className="text-gray-600">
                    Well-equipped labs with modern instruments for organic, inorganic, physical, and analytical chemistry.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-brand-yellow shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">
                    Industry Collaborations and Internships
                  </h3>
                  <p className="text-gray-600">
                    Partnerships with chemical and pharmaceutical companies providing real-world exposure and placement opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-brand-yellow shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">
                    Research Opportunities and Project Work
                  </h3>
                  <p className="text-gray-600">
                    Engage in research projects, publish papers, and present at conferences to build a strong academic profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all group">
              <summary className="font-bold text-brand-green cursor-pointer flex items-center justify-between">
                What is the duration of the B.Sc Chemistry programme?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                The B.Sc Chemistry programme is a 3-year full-time undergraduate degree comprising six semesters with both theoretical and practical components.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all group">
              <summary className="font-bold text-brand-green cursor-pointer flex items-center justify-between">
                What are the career opportunities after B.Sc Chemistry?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Graduates can pursue careers in pharmaceutical companies, chemical industries, quality control laboratories, research institutions, environmental agencies, teaching, and can also opt for higher studies like M.Sc, M.Phil, or Ph.D.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all group">
              <summary className="font-bold text-brand-green cursor-pointer flex items-center justify-between">
                What is the eligibility criteria for admission?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Candidates must have completed Higher Secondary (10+2) from a recognized board with Chemistry as a mandatory subject and preferably Physics or Mathematics. Science stream students with minimum aggregate marks are eligible to apply.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all group">
              <summary className="font-bold text-brand-green cursor-pointer flex items-center justify-between">
                What laboratory facilities are available?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                The department has well-equipped laboratories for Organic, Inorganic, Physical, and Analytical Chemistry with modern instruments including spectrophotometers, pH meters, centrifuges, and other advanced equipment for hands-on learning.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all group">
              <summary className="font-bold text-brand-green cursor-pointer flex items-center justify-between">
                Are there opportunities for research and projects?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Yes, students undertake research projects in the final year and are encouraged to participate in scientific research, paper presentations, and academic conferences to develop research aptitude and analytical skills.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-yellow via-yellow-400 to-brand-yellow">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
              Begin Your Journey in Chemical Sciences
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Join our B.Sc Chemistry programme and unlock exciting opportunities in research, industry, and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-brand-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition-all hover:shadow-lg hover:-translate-y-0.5">
                Apply for Admission
              </button>
              <button className="bg-white text-brand-green px-8 py-4 rounded-lg font-semibold border-2 border-brand-green hover:bg-gray-50 transition-all">
                Contact Department
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Related Programmes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
              Explore Related Programmes
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                <Atom className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-2">B.Sc Physics</h3>
              <p className="text-gray-600 mb-4">Explore the fundamental laws of nature and physical phenomena</p>
              <a href="/programmes/aided/ug/bsc-physics" className="text-brand-green font-semibold hover:text-emerald-700 inline-flex items-center gap-2">
                Learn More
                <span>→</span>
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                <Microscope className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-2">B.Sc Mathematics</h3>
              <p className="text-gray-600 mb-4">Master mathematical concepts and computational techniques</p>
              <a href="/programmes/aided/ug/bsc-mathematics" className="text-brand-green font-semibold hover:text-emerald-700 inline-flex items-center gap-2">
                Learn More
                <span>→</span>
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-2">B.Sc Biochemistry</h3>
              <p className="text-gray-600 mb-4">Study chemical processes within living organisms</p>
              <a href="/programmes/aided/ug/bsc-biochemistry" className="text-brand-green font-semibold hover:text-emerald-700 inline-flex items-center gap-2">
                Learn More
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
