import React from 'react';
import {
  Award,
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  Clock,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  BarChart3,
  Code,
  Brain,
  Database,
  FileText,
  Briefcase,
  Building2,
  School,
  LineChart,
  Calculator,
  Atom,
  FlaskConical,
  PenTool,
  Target
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bachelor of Science in Mathematics | B.Sc Mathematics Programme',
  description: 'A comprehensive 3-year undergraduate programme in Mathematics covering Pure Mathematics, Applied Mathematics, and Computational Methods designed to develop analytical thinking, problem-solving abilities, and quantitative reasoning skills.',
};

export default function BScMathematicsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative min-h-[500px] md:min-h-[550px] flex items-center bg-gradient-to-br from-[#003D5B] via-[#004d6d] to-[#00A7E1] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00A7E1] rounded-full filter blur-3xl"></div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Award className="w-4 h-4 text-[#FF6B35]" />
            <span className="text-white">UGC Recognized Programme</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Bachelor of Science in Mathematics
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/95 mb-6 font-medium drop-shadow-md">
            Master Mathematical Sciences for a Quantitative Career
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Calendar className="w-5 h-5 text-white" />
              <span className="text-white text-sm">3 Years</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-white text-sm">Full Time</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <BookOpen className="w-5 h-5 text-white" />
              <span className="text-white text-sm">6 Semesters</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <GraduationCap className="w-5 h-5 text-white" />
              <span className="text-white text-sm">UG Degree</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#e55a2b] transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
              Apply Now
              <CheckCircle2 className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center gap-2 bg-transparent text-white px-7 py-3 rounded-lg font-semibold border-2 border-white/80 hover:bg-white hover:text-[#003D5B] transition-all">
              Download Brochure
              <FileText className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="relative z-20 -mt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <article className="bg-white rounded-2xl p-6 text-center shadow-xl border border-gray-200 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#FF6B35] to-[#ff8c5a] rounded-xl flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#003D5B] mb-2">Accredited Institution</h3>
              <p className="text-sm text-gray-600">Quality assured education</p>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-2xl p-6 text-center shadow-xl border border-gray-200 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#FF6B35] to-[#ff8c5a] rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#003D5B] mb-2">Learner-Facilitator Ratio</h3>
              <p className="text-sm text-gray-600">Personalized attention</p>
            </article>

            {/* Card 3 */}
            <article className="bg-white rounded-2xl p-6 text-center shadow-xl border border-gray-200 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#FF6B35] to-[#ff8c5a] rounded-xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#003D5B] mb-2">Placement Record</h3>
              <p className="text-sm text-gray-600">Career opportunities assured</p>
            </article>

            {/* Card 4 */}
            <article className="bg-white rounded-2xl p-6 text-center shadow-xl border border-gray-200 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#FF6B35] to-[#ff8c5a] rounded-xl flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#003D5B] mb-2">Average Package</h3>
              <p className="text-sm text-gray-600">Competitive starting salary</p>
            </article>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Content - 60% */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003D5B] mb-6">
                Programme Overview
                <span className="block w-16 h-1 bg-[#FF6B35] mt-3 rounded"></span>
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  The <strong>Bachelor of Science in Mathematics</strong> programme is a comprehensive 3-year undergraduate degree designed to develop strong analytical thinking, problem-solving abilities, and quantitative reasoning skills essential for success in today's data-driven world.
                </p>

                <p className="text-lg">
                  Our curriculum combines <strong>Pure Mathematics</strong>, <strong>Applied Mathematics</strong>, and <strong>Computational Methods</strong>, providing learners with a solid foundation in mathematical theory while emphasizing practical applications in science, technology, finance, and research.
                </p>

                <p className="text-lg">
                  The programme prepares learners for diverse career paths including data science, actuarial science, teaching, research, financial analysis, and software development. With expert learning facilitators, modern computational facilities, and strong industry connections, we ensure holistic development of every learner.
                </p>

                <p className="text-lg">
                  Learners gain proficiency in mathematical software tools like MATLAB, Mathematica, Python, and R, making them industry-ready upon graduation. The programme also provides a strong foundation for pursuing higher studies like M.Sc Mathematics, MCA, MBA, or research programmes.
                </p>
              </div>
            </div>

            {/* Right Sidebar - 40% */}
            <div className="lg:col-span-2">
              <div className="bg-[#003D5B] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Mathematics Learning Guide</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                    <Calculator className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Pure Mathematics</h4>
                      <p className="text-sm text-white/90">Algebra, Analysis, Geometry</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                    <LineChart className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Applied Mathematics</h4>
                      <p className="text-sm text-white/90">Differential Equations, Optimization</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                    <Code className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Computational Methods</h4>
                      <p className="text-sm text-white/90">Programming, Numerical Analysis</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                    <BarChart3 className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Statistics & Probability</h4>
                      <p className="text-sm text-white/90">Data Analysis, Statistical Inference</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Box */}
              <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-[#003D5B] mb-4 text-lg">Eligibility & Admission Criteria</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>Higher Secondary (10+2) with Mathematics</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>Minimum 50% aggregate marks</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>Merit-based admission process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Curriculum */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003D5B] mb-4">
              Programme Curriculum
            </h2>
            <div className="w-16 h-1 bg-[#FF6B35] mx-auto rounded mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A well-structured curriculum covering fundamental to advanced topics in mathematics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Year 1 Semester 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#003D5B] rounded-lg flex items-center justify-center text-white font-bold">
                  I
                </div>
                <h4 className="text-xl font-bold text-[#003D5B]">Semester I</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Calculus & Analytical Geometry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Algebra & Number Theory</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Programming in C</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Environmental Studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Tamil/Hindi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>English</span>
                </li>
              </ul>
            </div>

            {/* Year 1 Semester 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#003D5B] rounded-lg flex items-center justify-center text-white font-bold">
                  II
                </div>
                <h4 className="text-xl font-bold text-[#003D5B]">Semester II</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Differential Equations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Vector Calculus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Data Structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Value Education</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Tamil/Hindi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>English</span>
                </li>
              </ul>
            </div>

            {/* Year 2 Semester 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#003D5B] rounded-lg flex items-center justify-center text-white font-bold">
                  III
                </div>
                <h4 className="text-xl font-bold text-[#003D5B]">Semester III</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Real Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Linear Algebra</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Operations Research</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Statistics I</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Python Programming</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>English</span>
                </li>
              </ul>
            </div>

            {/* Year 2 Semester 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#003D5B] rounded-lg flex items-center justify-center text-white font-bold">
                  IV
                </div>
                <h4 className="text-xl font-bold text-[#003D5B]">Semester IV</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Complex Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Abstract Algebra</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Numerical Methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Statistics II</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Database Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>English</span>
                </li>
              </ul>
            </div>

            {/* Year 3 Semester 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#003D5B] rounded-lg flex items-center justify-center text-white font-bold">
                  V
                </div>
                <h4 className="text-xl font-bold text-[#003D5B]">Semester V</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Topology</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Graph Theory</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Mechanics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Elective I</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Research Methodology</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Soft Skills</span>
                </li>
              </ul>
            </div>

            {/* Year 3 Semester 6 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#003D5B] rounded-lg flex items-center justify-center text-white font-bold">
                  VI
                </div>
                <h4 className="text-xl font-bold text-[#003D5B]">Semester VI</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Differential Geometry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Mathematical Modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Fuzzy Set Theory</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Elective II</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Project Work</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span>Comprehensive Viva</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003D5B] mb-4">
              Learning Outcomes
            </h2>
            <div className="w-16 h-1 bg-[#FF6B35] mx-auto rounded mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Competencies and skills developed through the programme
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold text-[#003D5B] mb-3">Analytical Thinking</h3>
              <p className="text-gray-700">
                Develop rigorous logical reasoning and analytical skills to approach complex mathematical problems systematically.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold text-[#003D5B] mb-3">Mathematical Proficiency</h3>
              <p className="text-gray-700">
                Master fundamental concepts in algebra, calculus, analysis, and applied mathematics with deep understanding.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold text-[#003D5B] mb-3">Computational Skills</h3>
              <p className="text-gray-700">
                Gain expertise in programming languages and mathematical software for numerical computation and data analysis.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold text-[#003D5B] mb-3">Problem Solving</h3>
              <p className="text-gray-700">
                Apply mathematical techniques to solve real-world problems in science, engineering, finance, and technology.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold text-[#003D5B] mb-3">Statistical Analysis</h3>
              <p className="text-gray-700">
                Understand statistical methods and probability theory for data-driven decision making and research.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold text-[#003D5B] mb-3">Research Aptitude</h3>
              <p className="text-gray-700">
                Develop research skills and scientific temperament for pursuing higher studies and academic careers.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003D5B] mb-4">
              Career Opportunities
            </h2>
            <div className="w-16 h-1 bg-[#FF6B35] mx-auto rounded mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diverse career paths for mathematics graduates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#003D5B]/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-[#003D5B]" />
              </div>
              <h3 className="text-lg font-bold text-[#003D5B] mb-2">Data Scientist</h3>
              <p className="text-gray-700 text-sm">
                Analyze complex data sets using statistical and ML techniques
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#003D5B]/10 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-[#003D5B]" />
              </div>
              <h3 className="text-lg font-bold text-[#003D5B] mb-2">Actuarial Analyst</h3>
              <p className="text-gray-700 text-sm">
                Assess financial risks for insurance and pension sectors
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#003D5B]/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-[#003D5B]" />
              </div>
              <h3 className="text-lg font-bold text-[#003D5B] mb-2">Mathematics Teacher</h3>
              <p className="text-gray-700 text-sm">
                Teach mathematics at schools and coaching institutes
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#003D5B]/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-[#003D5B]" />
              </div>
              <h3 className="text-lg font-bold text-[#003D5B] mb-2">Quantitative Analyst</h3>
              <p className="text-gray-700 text-sm">
                Develop mathematical models for financial markets
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#003D5B]/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-[#003D5B]" />
              </div>
              <h3 className="text-lg font-bold text-[#003D5B] mb-2">Banking Officer</h3>
              <p className="text-gray-700 text-sm">
                Work in financial institutions and banking sector
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#003D5B]/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-[#003D5B]" />
              </div>
              <h3 className="text-lg font-bold text-[#003D5B] mb-2">Software Developer</h3>
              <p className="text-gray-700 text-sm">
                Build applications using programming and logic skills
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#003D5B]/10 rounded-lg flex items-center justify-center mb-4">
                <Atom className="w-6 h-6 text-[#003D5B]" />
              </div>
              <h3 className="text-lg font-bold text-[#003D5B] mb-2">Research Scientist</h3>
              <p className="text-gray-700 text-sm">
                Conduct research in academic and R&D institutions
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#003D5B]/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#003D5B]" />
              </div>
              <h3 className="text-lg font-bold text-[#003D5B] mb-2">Civil Services</h3>
              <p className="text-gray-700 text-sm">
                Prepare for UPSC, TNPSC and other competitive exams
              </p>
            </article>
          </div>

          {/* Employment Sectors */}
          <div className="bg-gradient-to-br from-[#003D5B] to-[#004d6d] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Employment Sectors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Building2 className="w-10 h-10 mx-auto mb-3 text-[#FF6B35]" />
                <p className="font-semibold">IT Companies</p>
              </div>
              <div className="text-center">
                <Briefcase className="w-10 h-10 mx-auto mb-3 text-[#FF6B35]" />
                <p className="font-semibold">Financial Services</p>
              </div>
              <div className="text-center">
                <School className="w-10 h-10 mx-auto mb-3 text-[#FF6B35]" />
                <p className="font-semibold">Education</p>
              </div>
              <div className="text-center">
                <FlaskConical className="w-10 h-10 mx-auto mb-3 text-[#FF6B35]" />
                <p className="font-semibold">Research Labs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Facilities */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003D5B] mb-4">
              Learning Facilities
            </h2>
            <div className="w-16 h-1 bg-[#FF6B35] mx-auto rounded mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art infrastructure for mathematical learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-[#003D5B] to-[#00A7E1] flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003D5B] mb-3">Mathematics Library</h3>
                <p className="text-gray-700">
                  Extensive collection of mathematical journals, textbooks, reference materials, and access to digital resources including MathSciNet and JSTOR.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-[#003D5B] to-[#00A7E1] flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003D5B] mb-3">Computational Lab</h3>
                <p className="text-gray-700">
                  Advanced computer lab with MATLAB, Mathematica, R, Python, and LaTeX software for numerical analysis and mathematical computing.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-[#003D5B] to-[#00A7E1] flex items-center justify-center">
                <PenTool className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003D5B] mb-3">Smart Learning Studios</h3>
                <p className="text-gray-700">
                  Technology-enabled learning spaces with interactive displays, graphing calculators, and multimedia tools for enhanced understanding.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-[#003D5B] to-[#00A7E1] flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003D5B] mb-3">Seminar Hall</h3>
                <p className="text-gray-700">
                  Air-conditioned seminar hall with modern presentation facilities for mathematical discussions, guest lectures, and research presentations.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-[#003D5B] to-[#00A7E1] flex items-center justify-center">
                <FlaskConical className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003D5B] mb-3">Research Center</h3>
                <p className="text-gray-700">
                  Dedicated research facility for Learners and Learning Facilitators engaged in mathematical research with access to global research networks.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-[#003D5B] to-[#00A7E1] flex items-center justify-center">
                <Target className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003D5B] mb-3">Tutorial Rooms</h3>
                <p className="text-gray-700">
                  Dedicated spaces for small group discussions, problem-solving sessions, and peer-to-peer learning with whiteboard facilities.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Institution Stats */}
      <section className="py-16 bg-[#003D5B]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold text-[#FF6B35] mb-2">70+</div>
              <p className="text-xl">Years of Excellence</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#FF6B35] mb-2">5000+</div>
              <p className="text-xl">Active Learners</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#FF6B35] mb-2">500+</div>
              <p className="text-xl">Learning Facilitators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003D5B] mb-4">
              Why Choose Our B.Sc Mathematics Programme?
            </h2>
            <div className="w-16 h-1 bg-[#FF6B35] mx-auto rounded mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our progressive education approach ensures holistic development, preparing you for success in academics and career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-[#003D5B] mb-2">UGC Recognized & NAAC Accredited</h4>
                <p className="text-gray-700">
                  Quality-assured education meeting national standards with excellent academic reputation.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-[#003D5B] mb-2">Expert Learning Facilitators</h4>
                <p className="text-gray-700">
                  Highly qualified faculty with doctoral degrees, research publications, and industry experience in mathematics.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-[#003D5B] mb-2">Strong Placement Support</h4>
                <p className="text-gray-700">
                  Dedicated placement cell with tie-ups with leading companies for internships and career opportunities.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-[#003D5B] mb-2">Industry-Academia Collaboration</h4>
                <p className="text-gray-700">
                  Regular workshops, seminars, and guest lectures by industry experts and renowned mathematicians.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-[#003D5B] mb-2">Modern Infrastructure</h4>
                <p className="text-gray-700">
                  Well-equipped computational labs, mathematics library, and research facilities with latest software and resources.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-[#003D5B] mb-2">Research Opportunities</h4>
                <p className="text-gray-700">
                  Encouragement for undergraduate research projects and participation in national/international conferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003D5B] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#FF6B35] mx-auto rounded"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="text-lg font-bold text-[#003D5B] mb-3">
                What is the duration of the B.Sc Mathematics programme?
              </h4>
              <p className="text-gray-700">
                The B.Sc Mathematics programme is a 3-year full-time undergraduate degree comprising six semesters.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="text-lg font-bold text-[#003D5B] mb-3">
                What are the career opportunities after B.Sc Mathematics?
              </h4>
              <p className="text-gray-700">
                Graduates can pursue careers in data science, actuarial science, banking, teaching, research, financial analysis, software development, civil services, and quantitative analysis in various industries.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="text-lg font-bold text-[#003D5B] mb-3">
                What is the eligibility criteria for B.Sc Mathematics admission?
              </h4>
              <p className="text-gray-700">
                Candidates must have completed Higher Secondary (10+2) from a recognized board with Mathematics as a subject. Minimum aggregate marks requirement varies by institution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#FF6B35] via-[#ff8c5a] to-[#FF6B35]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Begin Your Journey in Mathematics Sciences
          </h2>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Join our prestigious B.Sc Mathematics programme and unlock endless career opportunities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center gap-2 bg-white text-[#FF6B35] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-xl">
              Apply Now
              <CheckCircle2 className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white hover:bg-white hover:text-[#FF6B35] transition-all">
              Contact Admissions
              <Users className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Explore Related Programmes */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003D5B] mb-4">
              Explore Related Programmes
            </h2>
            <div className="w-16 h-1 bg-[#FF6B35] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#003D5B] rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#003D5B] mb-2">B.Sc Physics</h3>
              <p className="text-gray-700 mb-4">
                Explore the fundamental principles of matter, energy, and the universe
              </p>
              <a href="#" className="text-[#FF6B35] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#003D5B] rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#003D5B] mb-2">B.Sc Computer Science</h3>
              <p className="text-gray-700 mb-4">
                Master programming, algorithms, and software development
              </p>
              <a href="#" className="text-[#FF6B35] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#003D5B] rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#003D5B] mb-2">B.Sc Statistics</h3>
              <p className="text-gray-700 mb-4">
                Dive into data analysis, probability, and statistical modeling
              </p>
              <a href="#" className="text-[#FF6B35] font-semibold hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
