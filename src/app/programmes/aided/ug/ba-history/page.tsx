"use client";

import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  Users,
  Award,
  GraduationCap,
  CheckCircle,
  FileText,
  Calendar,
  Briefcase,
  Library,
  MapPin,
  Monitor,
  Building2,
  TrendingUp,
  Target,
  Globe,
  MessageCircle,
  Landmark,
  UserCheck,
  ChevronDown,
  ArrowRight,
  Download,
  Phone
} from 'lucide-react';

export default function BAHistoryPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[550px] flex items-center bg-gradient-to-br from-brand-green via-[#0a5a36] to-[#0d8450] overflow-hidden">
        {/* Decorative gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,222,89,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(11,109,65,0.15)_0%,transparent_50%)]"></div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-brand-cream to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white py-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Award className="w-[18px] h-[18px] text-brand-yellow" />
            <span>UGC Recognized Programme</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 drop-shadow-lg">
            Bachelor of Arts in History (Honours)
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-medium mb-6 text-white/95 drop-shadow-md tracking-wide">
            Kumarapalayam, Tamil Nadu
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-lg text-sm">
              <Clock className="w-[18px] h-[18px]" />
              <span>3 Years</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-lg text-sm">
              <BookOpen className="w-[18px] h-[18px]" />
              <span>Full Time</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-lg text-sm">
              <GraduationCap className="w-[18px] h-[18px]" />
              <span>Undergraduate</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#admission"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-green px-7 py-3.5 rounded-lg font-semibold text-[0.95rem] shadow-[0_4px_14px_rgba(255,222,89,0.4)] hover:bg-[#ffd740] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,222,89,0.5)] transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="w-[18px] h-[18px]" />
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 bg-transparent text-white px-7 py-3.5 rounded-lg font-semibold text-[0.95rem] border-2 border-white/80 hover:bg-white hover:text-brand-green transition-all duration-300"
            >
              View Curriculum
              <Download className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="relative z-10 -mt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] border border-gray-200 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-brand-green to-[#0d8450] rounded-lg flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-bold text-brand-green mb-2">Accredited Institution</h3>
              <p className="text-sm text-gray-500 m-0">Quality assured education</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] border border-gray-200 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-brand-green to-[#0d8450] rounded-lg flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-bold text-brand-green mb-2">Learner-Facilitator Ratio</h3>
              <p className="text-sm text-gray-500 m-0">Personalized attention</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] border border-gray-200 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-brand-green to-[#0d8450] rounded-lg flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-bold text-brand-green mb-2">Placement Record</h3>
              <p className="text-sm text-gray-500 m-0">Career opportunities assured</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] border border-gray-200 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-brand-green to-[#0d8450] rounded-lg flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-bold text-brand-green mb-2">Average Package</h3>
              <p className="text-sm text-gray-500 m-0">Competitive starting salary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 relative inline-block">
                Programme Overview
                <span className="absolute -bottom-2 left-0 w-[60px] h-[3px] bg-brand-yellow rounded"></span>
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-gray-700 space-y-4">
              <p>
                The Bachelor of Arts in History (Honours) is a comprehensive 3-year undergraduate programme designed to develop critical thinking, analytical skills, and deep understanding of historical events, civilizations, and their impact on contemporary society. This programme offers an in-depth study of ancient, medieval, and modern history with special focus on Indian and World History.
              </p>
              <p>
                Students engage with primary sources, archaeological evidence, and historiographical debates while developing research methodologies essential for historical scholarship. The curriculum combines theoretical knowledge with practical fieldwork, heritage site visits, and archival research training.
              </p>
              <p>
                Our programme prepares students for competitive examinations like UPSC Civil Services, state public service commissions, and careers in teaching, research, museums, archaeology, heritage management, and cultural tourism. Emphasis is placed on writing skills, presentation abilities, and digital humanities competencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 inline-block relative">
              Eligibility & Admission Criteria
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-gradient-to-r from-brand-yellow to-brand-green rounded"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Academic Qualification */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-4">Academic Qualification</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Higher Secondary (10+2) from recognized board</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Any subject combination accepted</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Minimum 50% aggregate marks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>45% for reserved categories</span>
                </li>
              </ul>
            </div>

            {/* Accepted Streams */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-4">Accepted Streams</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Arts / Humanities stream preferred</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Science stream eligible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Commerce stream eligible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Vocational courses accepted</span>
                </li>
              </ul>
            </div>

            {/* Documents Required */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-4">Documents Required</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>10th & 12th Mark Sheets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Transfer Certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Community Certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Passport Size Photographs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Aadhaar Card Copy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Archive Library Section */}
      <section className="py-12 md:py-16 bg-brand-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Library className="w-16 h-16 mx-auto mb-6 text-brand-yellow" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">History Archive Library</h2>
            <p className="text-lg text-white/90 mb-6">
              Access our extensive collection of historical texts, research papers, and digital archives
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-brand-yellow">20,000+</div>
                <div className="text-sm">Books</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-brand-yellow">5,000+</div>
                <div className="text-sm">Journals</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-brand-yellow">100+</div>
                <div className="text-sm">Digital Databases</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Curriculum */}
      <section id="curriculum" className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 inline-block relative">
              Programme Curriculum
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-gradient-to-r from-brand-yellow to-brand-green rounded"></span>
            </h2>
          </div>

          {/* Year Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[1, 2, 3].map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeYear === year
                    ? 'bg-brand-green text-white shadow-lg'
                    : 'bg-white text-brand-green hover:bg-brand-cream border border-gray-200'
                }`}
              >
                Year {year}
              </button>
            ))}
          </div>

          {/* Curriculum Content */}
          <div className="max-w-5xl mx-auto">
            {activeYear === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Semester I */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold text-brand-green mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-brand-yellow" />
                    Semester I
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Ancient Indian History & Culture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>World History: Renaissance to Industrial Revolution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Introduction to Historical Methods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Archaeology & Epigraphy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Language Paper I</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Environmental Studies</span>
                    </li>
                  </ul>
                </div>

                {/* Semester II */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold text-brand-green mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-brand-yellow" />
                    Semester II
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Medieval Indian History</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>World History: World Wars & Post-War Era</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Historiography</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Art & Architecture in India</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Language Paper II</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Value Education</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeYear === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Semester III */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold text-brand-green mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-brand-yellow" />
                    Semester III
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Modern Indian History (1757-1947)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>History of USA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Social & Economic History of India</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Heritage Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Allied Paper I</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Skill Enhancement Course I</span>
                    </li>
                  </ul>
                </div>

                {/* Semester IV */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold text-brand-green mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-brand-yellow" />
                    Semester IV
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Contemporary India (1947-Present)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>History of China & Japan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Women in History</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Museum & Archive Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Allied Paper II</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Skill Enhancement Course II</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeYear === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Semester V */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold text-brand-green mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-brand-yellow" />
                    Semester V
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>History of Tamil Nadu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Research Methodology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Public History & Digital Humanities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>History of Science & Technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Elective Paper I</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Extension Activities</span>
                    </li>
                  </ul>
                </div>

                {/* Semester VI */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold text-brand-green mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-brand-yellow" />
                    Semester VI
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Indian Freedom Movement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>International Relations (20th Century)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Tourism & Cultural Heritage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Project Work / Dissertation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Elective Paper II</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Internship / Field Study</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Programme Learning Outcomes */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 inline-block relative">
              Programme Learning Outcomes
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-gradient-to-r from-brand-yellow to-brand-green rounded"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Outcome 1 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3">Critical Analysis</h3>
              <p className="text-gray-700">
                Develop analytical abilities to evaluate historical sources, events, and interpretations from multiple perspectives and theoretical frameworks.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3">Research Competence</h3>
              <p className="text-gray-700">
                Master primary and secondary source analysis, archival research methods, and academic writing for historical scholarship.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3">Global Perspective</h3>
              <p className="text-gray-700">
                Understand diverse civilizations, cultural exchanges, and interconnections between local, national, and global historical developments.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3">Communication Skills</h3>
              <p className="text-gray-700">
                Articulate complex historical arguments effectively through written essays, oral presentations, and digital media.
              </p>
            </div>

            {/* Outcome 5 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                <Landmark className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3">Heritage Appreciation</h3>
              <p className="text-gray-700">
                Develop understanding of archaeological sites, monuments, museums, and heritage conservation practices for cultural preservation.
              </p>
            </div>

            {/* Outcome 6 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3">Civic Engagement</h3>
              <p className="text-gray-700">
                Apply historical knowledge to understand contemporary issues, democratic values, and informed citizenship responsibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 inline-block relative">
              Career Opportunities
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-gradient-to-r from-brand-yellow to-brand-green rounded"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {/* Career 1 */}
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-green to-[#0d8450] rounded-xl flex items-center justify-center">
                <Landmark className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Civil Services</h3>
              <p className="text-sm text-gray-600">IAS, IPS, IFS, and State Civil Services through UPSC/TNPSC</p>
            </div>

            {/* Career 2 */}
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-green to-[#0d8450] rounded-xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">History Teacher</h3>
              <p className="text-sm text-gray-600">Teach history at schools after completing B.Ed.</p>
            </div>

            {/* Career 3 */}
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-green to-[#0d8450] rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Museum Curator</h3>
              <p className="text-sm text-gray-600">Manage collections and exhibitions in museums</p>
            </div>

            {/* Career 4 */}
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-green to-[#0d8450] rounded-xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Archaeologist</h3>
              <p className="text-sm text-gray-600">Excavate and analyze historical sites and artifacts</p>
            </div>

            {/* Career 5 */}
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-green to-[#0d8450] rounded-xl flex items-center justify-center">
                <Library className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Archivist</h3>
              <p className="text-sm text-gray-600">Preserve and organize historical records and documents</p>
            </div>

            {/* Career 6 */}
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-green to-[#0d8450] rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Journalist</h3>
              <p className="text-sm text-gray-600">Historical research and writing for media houses</p>
            </div>

            {/* Career 7 */}
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-green to-[#0d8450] rounded-xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Heritage Manager</h3>
              <p className="text-sm text-gray-600">Manage cultural heritage sites and tourism</p>
            </div>

            {/* Career 8 */}
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-green to-[#0d8450] rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-green mb-2">Research Analyst</h3>
              <p className="text-sm text-gray-600">Historical research for think tanks and policy institutes</p>
            </div>
          </div>

          {/* Employment Sectors */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Employment Sectors</h3>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="flex flex-wrap justify-center gap-3">
                {['Government Services', 'Educational Institutions', 'Museums & Archives', 'Archaeological Survey', 'Media & Publishing', 'Tourism Industry', 'Heritage Conservation', 'Research Organizations', 'Cultural Institutions', 'NGOs', 'Documentary Production', 'Digital Humanities'].map((sector, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Facilities */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 inline-block relative">
              Learning Facilities
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-gradient-to-r from-brand-yellow to-brand-green rounded"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Facility 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <Library className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="text-xl font-bold text-brand-green mb-3">Historical Archives & Library</h3>
              <p className="text-gray-700">
                Over 20,000 books covering Indian, World, and Regional History with digital access to JSTOR, Project MUSE, and historical databases.
              </p>
            </div>

            {/* Facility 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <Building2 className="w-10 h-10 text-[#FF6B35] mb-4" />
              <h3 className="text-xl font-bold text-brand-green mb-3">Departmental Museum</h3>
              <p className="text-gray-700">
                Mini museum housing replicas, artifacts, numismatic collections, and historical models for hands-on learning experiences.
              </p>
            </div>

            {/* Facility 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <MapPin className="w-10 h-10 text-[#FF6B35] mb-4" />
              <h3 className="text-xl font-bold text-brand-green mb-3">Map Room & Resource Centre</h3>
              <p className="text-gray-700">
                Extensive collection of historical maps, charts, and geographical resources for spatial understanding of historical events.
              </p>
            </div>

            {/* Facility 4 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <Users className="w-10 h-10 text-[#FF6B35] mb-4" />
              <h3 className="text-xl font-bold text-brand-green mb-3">Seminar Hall</h3>
              <p className="text-gray-700">
                Air-conditioned seminar hall with modern presentation facilities for historical discussions, guest lectures, and workshops.
              </p>
            </div>

            {/* Facility 5 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <Monitor className="w-10 h-10 text-[#FF6B35] mb-4" />
              <h3 className="text-xl font-bold text-brand-green mb-3">Digital History Lab</h3>
              <p className="text-gray-700">
                Computer lab with specialized historical software, GIS mapping tools, and access to digitized archival collections worldwide.
              </p>
            </div>

            {/* Facility 6 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <Award className="w-10 h-10 text-[#FF6B35] mb-4" />
              <h3 className="text-xl font-bold text-brand-green mb-3">Smart Learning Studios</h3>
              <p className="text-gray-700">
                Technology-enabled learning studios with interactive boards, documentary screening facilities, and high-speed internet connectivity.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center bg-gradient-to-br from-[#003D5B] to-[#00A7E1] text-white rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">70+</div>
              <p className="text-sm">Years of Excellence</p>
            </div>
            <div className="text-center bg-gradient-to-br from-[#003D5B] to-[#00A7E1] text-white rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-sm">UPSC Selections</p>
            </div>
            <div className="text-center bg-gradient-to-br from-[#003D5B] to-[#00A7E1] text-white rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-sm">Heritage Sites Visited</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 inline-block relative">
              Why Choose Our BA History Programme?
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-gradient-to-r from-brand-yellow to-brand-green rounded"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Our progressive education approach ensures holistic development, preparing you for success in civil services, academics, and heritage careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Reason 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#FF6B35] hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="w-8 h-8 text-brand-green mb-3" />
              <h4 className="text-lg font-bold text-[#003D5B] mb-2">UGC Recognized & NAAC Accredited</h4>
              <p className="text-gray-700">
                Quality-assured education meeting national standards with excellent academic reputation.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#FF6B35] hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="w-8 h-8 text-brand-green mb-3" />
              <h4 className="text-lg font-bold text-[#003D5B] mb-2">Expert Learning Facilitators</h4>
              <p className="text-gray-700">
                Highly qualified faculty with doctoral degrees, archaeological experience, and research publications.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#FF6B35] hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="w-8 h-8 text-brand-green mb-3" />
              <h4 className="text-lg font-bold text-[#003D5B] mb-2">UPSC & Competitive Exam Coaching</h4>
              <p className="text-gray-700">
                Dedicated coaching for civil services with proven track record of successful candidates.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#FF6B35] hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="w-8 h-8 text-brand-green mb-3" />
              <h4 className="text-lg font-bold text-[#003D5B] mb-2">Heritage Tours & Fieldwork</h4>
              <p className="text-gray-700">
                Regular excursions to archaeological sites, museums, and historical monuments across India.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#FF6B35] hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="w-8 h-8 text-brand-green mb-3" />
              <h4 className="text-lg font-bold text-[#003D5B] mb-2">Research & Publication Support</h4>
              <p className="text-gray-700">
                Opportunities for archival research, paper presentations, and academic publications in reputed journals.
              </p>
            </div>

            {/* Reason 6 */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#FF6B35] hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="w-8 h-8 text-brand-green mb-3" />
              <h4 className="text-lg font-bold text-[#003D5B] mb-2">Industry-Academia Collaboration</h4>
              <p className="text-gray-700">
                Partnerships with museums, archives, and heritage organizations for practical exposure and internships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 inline-block relative">
              Frequently Asked Questions
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-gradient-to-r from-brand-yellow to-brand-green rounded"></span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-[#003D5B] pr-4">
                  What is the duration of the BA History programme?
                </span>
                <ChevronDown className={`w-5 h-5 text-[#FF6B35] flex-shrink-0 transition-transform duration-300 ${openFaq === 0 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">
                    The BA History (Honours) programme is a 3-year full-time undergraduate degree comprising six semesters.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-[#003D5B] pr-4">
                  What are the career opportunities after BA History?
                </span>
                <ChevronDown className={`w-5 h-5 text-[#FF6B35] flex-shrink-0 transition-transform duration-300 ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-3">
                    Graduates can pursue careers in:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Civil Services (IAS, IPS, IFS through UPSC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>State Public Service Commission Jobs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Museum Curator and Archivist</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Teaching (after B.Ed.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Archaeology and Heritage Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Journalism and Historical Research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Tourism and Travel Industry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Documentary Film Production</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-[#003D5B] pr-4">
                  What is the eligibility criteria for BA History admission?
                </span>
                <ChevronDown className={`w-5 h-5 text-[#FF6B35] flex-shrink-0 transition-transform duration-300 ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">
                    Candidates must have completed Higher Secondary (10+2) from a recognized board. Minimum aggregate marks requirement is 50% (45% for reserved categories). All streams are eligible.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-[#003D5B] pr-4">
                  Is there coaching available for UPSC preparation?
                </span>
                <ChevronDown className={`w-5 h-5 text-[#FF6B35] flex-shrink-0 transition-transform duration-300 ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">
                    Yes, our college provides dedicated UPSC coaching and guidance with experienced faculty. We have a proven track record with 500+ UPSC selections from our alumni.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-[#003D5B] pr-4">
                  What are the higher education options after BA History?
                </span>
                <ChevronDown className={`w-5 h-5 text-[#FF6B35] flex-shrink-0 transition-transform duration-300 ${openFaq === 4 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-3">
                    After completing BA History, students can pursue:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>MA History (Ancient/Medieval/Modern)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>M.Phil. and Ph.D. in History</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>B.Ed. for teaching career</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>MA Archaeology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>MBA (Management Studies)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Diploma in Museology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Diploma in Archives & Records Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>Law (LLB)</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="admission" className="py-12 md:py-16 bg-gradient-to-r from-[#FF6B35] via-[#ff8c5a] to-[#00A7E1] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Journey in Historical Studies</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/95">
            Join our BA History programme and unlock a world of opportunities in civil services, heritage management, and academic research.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-[#FF6B35] px-8 py-4 rounded-lg font-semibold text-base shadow-lg hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-base border-2 border-white hover:bg-white hover:text-[#FF6B35] transition-all duration-300"
            >
              Download Brochure
              <Download className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Related Programmes */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 inline-block relative">
              Explore Related Programmes
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-gradient-to-r from-brand-yellow to-brand-green rounded"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Programme 1 */}
            <a
              href="#"
              className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#003D5B] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FF6B35] transition-colors duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#003D5B] mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">
                MA History
              </h3>
              <p className="text-gray-700 mb-4">
                Advanced postgraduate studies in Indian and World History
              </p>
              <span className="inline-flex items-center gap-2 text-[#FF6B35] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Programme 2 */}
            <a
              href="#"
              className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#003D5B] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FF6B35] transition-colors duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#003D5B] mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">
                BA English
              </h3>
              <p className="text-gray-700 mb-4">
                Study of English literature, language, and communication skills
              </p>
              <span className="inline-flex items-center gap-2 text-[#FF6B35] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Programme 3 */}
            <a
              href="#"
              className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#003D5B] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FF6B35] transition-colors duration-300">
                <Landmark className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#003D5B] mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">
                BA Political Science
              </h3>
              <p className="text-gray-700 mb-4">
                Comprehensive study of governance, political theory, and international relations
              </p>
              <span className="inline-flex items-center gap-2 text-[#FF6B35] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
