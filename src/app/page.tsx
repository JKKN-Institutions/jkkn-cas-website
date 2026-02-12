import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
  Briefcase,
  Code,
  BarChart,
  Cpu,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Fits exactly one screen */}
      <HeroSection />

      {/* Stats Section - Counting animation */}
      <StatsSection />

      {/* About JKKN Arts & Science Section */}
      <section className="py-16 md:py-24 bg-[#fbfbee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
                  alt="JKKN College Campus"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-yellow rounded-2xl -z-10 hidden lg:block"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-green/10 rounded-2xl -z-10 hidden lg:block"></div>
            </div>

            {/* Right - Content */}
            <div>
              {/* Section Label */}
              <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
                ABOUT JKKN ARTS &amp; SCIENCE
              </div>

              {/* Main Title */}
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] leading-[32px] sm:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-[#0b6d41] mb-6">
                Nurturing Future Leaders Through Progressive Education
              </h2>

              {/* Description Paragraphs - black color only */}
              <div className="space-y-4 text-[14px] sm:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[29.25px] lg:leading-[28px] text-black font-normal">
                <p>
                  JKKN College of Arts and Science, established in 1995, is a premier institution committed to transforming lives through accessible, progressive education. As part of J.K.K. Nattraja Educational Institutions&apos; 100-year legacy (JKKN100), we blend traditional values with modern, industry-ready curriculum.
                </p>
                <p>
                  Our NAAC accreditation and UGC recognition reflect our commitment to academic excellence. With experienced Learning Facilitators, state-of-the-art infrastructure, and strong industry partnerships, we prepare Learners not just for jobs, but for successful careers.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2.5 rounded-lg flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-[#0b6d41]" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] mb-0.5">18+ Programs</div>
                    <div className="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] text-black/60">Science, Commerce, IT &amp; Management</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2.5 rounded-lg flex-shrink-0">
                    <Users className="h-5 w-5 text-[#0b6d41]" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] mb-0.5">150+ Learning Facilitators</div>
                    <div className="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] text-black/60">PhD &amp; Industry Experts</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2.5 rounded-lg flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-[#0b6d41]" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] mb-0.5">Industry Partnerships</div>
                    <div className="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] text-black/60">TCS, Infosys, Wipro &amp; More</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2.5 rounded-lg flex-shrink-0">
                    <Globe className="h-5 w-5 text-[#0b6d41]" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] mb-0.5">Global Alumni</div>
                    <div className="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] text-black/60">25,000+ Successful Graduates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
              ACADEMIC PROGRAMS
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-[#0b6d41] mb-6">
              Industry-Integrated Programs for<br />
              Tomorrow's Leaders
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[29.25px] font-normal text-gray-600 max-w-3xl mx-auto">
              Choose from 18+ UGC approved undergraduate and postgraduate programs designed<br className="hidden md:block" />
              with industry input to ensure career readiness
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-6 py-2.5 bg-[#0b6d41] text-white rounded-full text-[14px] leading-[20px] font-semibold uppercase hover:bg-[#0b6d41] transition">
              All Programs
            </button>
            <button className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-full text-[14px] leading-[20px] font-semibold uppercase hover:bg-[#fbfbee] transition">
              Science
            </button>
            <button className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-full text-[14px] leading-[20px] font-semibold uppercase hover:bg-[#fbfbee] transition">
              Commerce & Management
            </button>
            <button className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-full text-[14px] leading-[20px] font-semibold uppercase hover:bg-[#fbfbee] transition">
              Computer Applications
            </button>
          </div>

          {/* Program Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* Card 1: B.Sc Computer Science */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-[#0b6d41] p-3 rounded-lg flex-shrink-0">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-1">B.Sc Computer Science</h3>
                  <p className="text-[12px] leading-[16px] font-normal text-gray-500">3 Years | 60 Seats</p>
                </div>
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600 mb-4">
                Comprehensive program covering programming, data structures, databases, AI/ML, web development, and software engineering with hands-on labs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Python</span>
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Java</span>
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">AI/ML</span>
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Cloud</span>
              </div>
              <button className="text-[#0b6d41] text-[14px] leading-[20px] font-semibold flex items-center hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Card 2: BCA - Computer Applications */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-[#0b6d41] p-3 rounded-lg flex-shrink-0">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-1">BCA - Computer Applications</h3>
                  <p className="text-[12px] leading-[16px] font-normal text-gray-500">3 Years | 60 Seats</p>
                </div>
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600 mb-4">
                Professional program focused on software development, programming languages, database management, networking, and IT project management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Full Stack</span>
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Mobile Apps</span>
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Networking</span>
              </div>
              <button className="text-[#0b6d41] text-[14px] leading-[20px] font-semibold flex items-center hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Card 3: B.Sc Data Science */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-[#ffde59] p-3 rounded-lg flex-shrink-0">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-1">B.Sc Data Science</h3>
                  <p className="text-[12px] leading-[16px] font-normal text-gray-500">3 Years | 60 Seats</p>
                </div>
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600 mb-4">
                Cutting-edge program covering statistics, machine learning, big data analytics, and data visualization with real-world industry projects.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-yellow-100 text-[#ffde59] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Machine Learning</span>
                <span className="px-3 py-1 bg-yellow-100 text-[#ffde59] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Big Data</span>
                <span className="px-3 py-1 bg-yellow-100 text-[#ffde59] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Analytics</span>
              </div>
              <button className="text-[#0b6d41] text-[14px] leading-[20px] font-semibold flex items-center hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Card 4: B.Com */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-[#0b6d41] p-3 rounded-lg flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-1">B.Com</h3>
                  <p className="text-[12px] leading-[16px] font-normal text-gray-500">3 Years | 60 Seats</p>
                </div>
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600 mb-4">
                Comprehensive commerce program covering accounting, taxation, corporate law, economics, and business management with CA/CMA/CS coaching.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Tally</span>
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">GST</span>
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">CA Foundation</span>
              </div>
              <button className="text-[#0b6d41] text-[14px] leading-[20px] font-semibold flex items-center hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Card 5: BBA - Business Administration */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-[#0b6d41] p-3 rounded-lg flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-1">BBA - Business Administration</h3>
                  <p className="text-[12px] leading-[16px] font-normal text-gray-500">3 Years | 60 Seats</p>
                </div>
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600 mb-4">
                Management program covering marketing, HR, finance, operations, and entrepreneurship with industry internships and live projects.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Marketing</span>
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Finance</span>
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">HR</span>
              </div>
              <button className="text-[#0b6d41] text-[14px] leading-[20px] font-semibold flex items-center hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Card 6: MBA */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-[#ffde59] p-3 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-1">MBA</h3>
                  <p className="text-sm text-gray-500">2 Years | 60 Seats</p>
                </div>
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600 mb-4">
                Postgraduate management program with specializations in Marketing, Finance, HR, Operations, Analytics, and International Business.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-yellow-100 text-[#ffde59] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">6 Specializations</span>
                <span className="px-3 py-1 bg-yellow-100 text-[#ffde59] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">SAP Training</span>
                <span className="px-3 py-1 bg-yellow-100 text-[#ffde59] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Internship</span>
              </div>
              <button className="text-[#0b6d41] text-[14px] leading-[20px] font-semibold flex items-center hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Card 7: MCA */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-[#ffde59] p-3 rounded-lg flex-shrink-0">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-1">MCA</h3>
                  <p className="text-sm text-gray-500">2 Years | 60 Seats</p>
                </div>
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600 mb-4">
                Advanced computing program covering software engineering, cloud computing, AI/ML, cybersecurity, and enterprise solutions development.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-yellow-100 text-[#ffde59] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Cloud</span>
                <span className="px-3 py-1 bg-yellow-100 text-[#ffde59] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">AI/ML</span>
                <span className="px-3 py-1 bg-yellow-100 text-[#ffde59] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Cybersecurity</span>
              </div>
              <button className="text-[#0b6d41] text-[14px] leading-[20px] font-semibold flex items-center hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Card 8: M.Sc Computer Science */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-[#0b6d41] p-3 rounded-lg flex-shrink-0">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-1">M.Sc Computer Science</h3>
                  <p className="text-sm text-gray-500">2 Years | 60 Seats</p>
                </div>
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600 mb-4">
                Research-oriented program focused on advanced algorithms, machine learning, data science, and emerging technologies with research projects.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Research</span>
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Deep Learning</span>
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">IoT</span>
              </div>
              <button className="text-[#0b6d41] text-[14px] leading-[20px] font-semibold flex items-center hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Card 9: B.Sc Mathematics */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-[#0b6d41] p-3 rounded-lg flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-1">B.Sc Mathematics</h3>
                  <p className="text-[12px] leading-[16px] font-normal text-gray-500">3 Years | 60 Seats</p>
                </div>
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600 mb-4">
                Rigorous program in pure and applied mathematics with applications in data science, finance, and competitive exam preparation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Applied Math</span>
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">Statistics</span>
                <span className="px-3 py-1 bg-green-100 text-[#0b6d41] text-[10px] leading-[13.33px] font-semibold rounded-full uppercase">UPSC Prep</span>
              </div>
              <button className="text-[#0b6d41] text-[14px] leading-[20px] font-semibold flex items-center hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button className="bg-[#0b6d41] text-white px-8 py-3.5 rounded-full text-[16px] leading-[24px] font-semibold hover:bg-[#095c37] transition shadow-lg">
              View All 18+ Programs
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose JKKN Section */}
      <section className="py-16 md:py-24 bg-[#fbfbee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
              WHY CHOOSE JKKN
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-[#0b6d41] mb-6">
              Your Success Is Our Mission
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[29.25px] font-normal text-gray-600 max-w-3xl mx-auto">
              Experience the JKKN advantage with industry-aligned education, modern infrastructure,<br className="hidden md:block" />
              and dedicated career support
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: NAAC A+ Accredited */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">NAAC A+ Accredited</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Nationally recognized excellence in teaching, infrastructure, and outcomes with UGC 2(f) & 12(B) status
              </p>
            </div>

            {/* Card 2: 95%+ Placement */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">95%+ Placement</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Exceptional placement record with 100+ recruiters including TCS, Infosys, Wipro, and leading MNCs
              </p>
            </div>

            {/* Card 3: Modern Labs */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">Modern Labs</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                State-of-the-art computer labs, language laboratories, IoT lab, and AI/ML research facilities
              </p>
            </div>

            {/* Card 4: Industry Partnerships */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">Industry Partnerships</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Collaborations with TCS, Infosys, NASSCOM, CII for internships, certifications, and placements
              </p>
            </div>

            {/* Card 5: Expert Learning Facilitators */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">Expert Learning Facilitators</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                150+ experienced Learning Facilitators with PhD qualifications and industry experience
              </p>
            </div>

            {/* Card 6: Skill Development */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">Skill Development</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Integrated soft skills, aptitude training, and professional certifications for career readiness
              </p>
            </div>

            {/* Card 7: Digital Library */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">Digital Library</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                50,000+ books, e-journals, NPTEL courses, and online learning resources accessible 24/7
              </p>
            </div>

            {/* Card 8: Hostel Facilities */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">Hostel Facilities</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Separate hostels for men and women with modern amenities, Wi-Fi, and 24/7 security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Success Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-[12px] leading-[16px] font-semibold tracking-wide uppercase px-4 py-2 bg-green-100 rounded-full border border-green-200 text-brand-green">
                CAREER SUCCESS
              </span>
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] mb-6 text-brand-green">
              Outstanding Placement Record
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[29.25px] font-normal text-gray-600 max-w-3xl mx-auto">
              Our dedicated Training and Placement Cell ensures every Learner is industry-ready with<br className="hidden md:block" />
              exceptional career opportunities.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {/* Stat 1: Placement Rate */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-[20px] md:text-[24px] lg:text-[30px] leading-[28px] md:leading-[32px] lg:leading-[36px] font-bold tracking-[-0.75px] text-[#0b6d41] mb-2">95%</div>
              <div className="text-[14px] leading-[20px] font-medium text-gray-600">Placement Rate</div>
            </div>

            {/* Stat 2: Highest Package */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-[20px] md:text-[24px] lg:text-[30px] leading-[28px] md:leading-[32px] lg:leading-[36px] font-bold tracking-[-0.75px] text-[#0b6d41] mb-2">₹18 LPA</div>
              <div className="text-[14px] leading-[20px] font-medium text-gray-600">Highest Package</div>
            </div>

            {/* Stat 3: Average Package */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-[20px] md:text-[24px] lg:text-[30px] leading-[28px] md:leading-[32px] lg:leading-[36px] font-bold tracking-[-0.75px] text-[#0b6d41] mb-2">₹4.5 LPA</div>
              <div className="text-[14px] leading-[20px] font-medium text-gray-600">Average Package</div>
            </div>

            {/* Stat 4: Recruiters */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-[20px] md:text-[24px] lg:text-[30px] leading-[28px] md:leading-[32px] lg:leading-[36px] font-bold tracking-[-0.75px] text-[#0b6d41] mb-2">50+</div>
              <div className="text-[14px] leading-[20px] font-medium text-gray-600">Recruiters</div>
            </div>
          </div>

          {/* Top Recruiters */}
          <div>
            <h3 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-center mb-8 text-brand-green">Our Top Recruiters</h3>

            {/* Recruiters Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-lg transition border border-gray-200">
                <span className="text-gray-900 font-semibold text-sm md:text-base">TCS</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-lg transition border border-gray-200">
                <span className="text-gray-900 font-semibold text-sm md:text-base">Infosys</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-lg transition border border-gray-200">
                <span className="text-gray-900 font-semibold text-sm md:text-base">Wipro</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-lg transition border border-gray-200">
                <span className="text-gray-900 font-semibold text-sm md:text-base">Cognizant</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-lg transition border border-gray-200">
                <span className="text-gray-900 font-semibold text-sm md:text-base">HCL</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-lg transition border border-gray-200">
                <span className="text-gray-900 font-semibold text-sm md:text-base">Accenture</span>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-lg transition border border-gray-200">
                <span className="text-gray-900 font-semibold text-sm md:text-base">Tech Mahindra</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-lg transition border border-gray-200">
                <span className="text-gray-900 font-semibold text-sm md:text-base">Zoho</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-lg transition border border-gray-200">
                <span className="text-gray-900 font-semibold text-sm md:text-base">Amazon</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-lg transition border border-gray-200">
                <span className="text-gray-900 font-semibold text-sm md:text-base">Flipkart</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-lg transition border border-gray-200">
                <span className="text-gray-900 font-semibold text-sm md:text-base">HDFC Bank</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-lg transition border border-gray-200">
                <span className="text-gray-900 font-semibold text-sm md:text-base">ICICI Bank</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Infrastructure Section */}
      <section className="py-16 md:py-24 bg-[#fbfbee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
              CAMPUS INFRASTRUCTURE
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-[#0b6d41] mb-6">
              World-Class Facilities for Holistic<br />
              Development
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[29.25px] font-normal text-gray-600 max-w-3xl mx-auto">
              Experience learning in a modern, technology-enabled campus designed for academic<br className="hidden md:block" />
              excellence and personal growth
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Advanced Computer Labs */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-10 w-10 text-[#0b6d41]" />
              </div>
              <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-[#0b6d41] mb-4">Advanced Computer Labs</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                500+ high-performance systems with latest software, high-speed internet, and 24/7 access for project work
              </p>
            </div>

            {/* Card 2: Science Laboratories */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-[#0b6d41]" />
              </div>
              <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-[#0b6d41] mb-4">Science Laboratories</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Well-equipped Physics, Chemistry, Microbiology, and Biotechnology labs with modern instruments
              </p>
            </div>

            {/* Card 3: AI & IoT Research Lab */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Code className="h-10 w-10 text-[#0b6d41]" />
              </div>
              <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-[#0b6d41] mb-4">AI & IoT Research Lab</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Dedicated lab for AI/ML, IoT projects with Raspberry Pi, Arduino, sensors, and cloud computing access
              </p>
            </div>

            {/* Card 4: Digital Library */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-[#0b6d41]" />
              </div>
              <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-[#0b6d41] mb-4">Digital Library</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                80,000+ books, e-journals, NPTEL courses, and online databases with comfortable reading space
              </p>
            </div>

            {/* Card 5: Smart Learning Studios */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-[#0b6d41]" />
              </div>
              <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-[#0b6d41] mb-4">Smart Learning Studios</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Technology-enabled classrooms with projectors, smart boards, and video conferencing facilities
              </p>
            </div>

            {/* Card 6: Sports Complex */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-[#0b6d41]" />
              </div>
              <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-[#0b6d41] mb-4">Sports Complex</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Indoor and outdoor sports facilities including cricket ground, basketball court, and yoga center
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
              LEARNER STORIES
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-gray-900 mb-4">
              What Our <span className="text-[#0b6d41]">Learners Say</span>
            </h2>
            <p className="text-[18px] md:text-[20px] leading-[29.25px] md:leading-[28px] font-normal text-gray-600 max-w-3xl mx-auto">
              Hear from our students about their transformative experiences at JKKN College
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b6d41] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                  RP
                </div>
                <div>
                  <h4 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900">Rajesh Patel</h4>
                  <p className="text-[14px] leading-[20px] font-normal text-gray-600">B.Sc Computer Science</p>
                </div>
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-gray-700 italic mb-4">
                "The faculty at JKKN College are exceptional. They not only teach but also mentor us, helping us develop both academically and professionally. The hands-on projects prepared me well for my career."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b6d41] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                  PS
                </div>
                <div>
                  <h4 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">B.Com Commerce</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "JKKN College provided me with excellent opportunities for internships and industry exposure. The placement support was outstanding, and I secured a great job even before graduation."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-purple-100 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#ffde59] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                  AK
                </div>
                <div>
                  <h4 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900">Arun Kumar</h4>
                  <p className="text-sm text-gray-600">BCA Computer Applications</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The infrastructure and facilities at JKKN are world-class. The computer labs, library, and sports facilities made my college experience memorable and enriching."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-[#fbfbee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
                ADMISSIONS 2025-26
              </div>
              <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-gray-900 mb-6">
                Begin Your Journey<br />
                to <span className="text-[#0b6d41]">Success</span>
              </h2>
              <p className="text-[18px] md:text-[20px] leading-[29.25px] md:leading-[28px] font-normal text-gray-600 mb-8">
                Join thousands of successful students who have transformed their careers through quality education at JKKN College
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#0b6d41] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-2">Choose Your Program</h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal text-gray-600">Select from our wide range of undergraduate and postgraduate programs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#0b6d41] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-2">Apply Online</h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal text-gray-600">Complete your application through our simple online admission process</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#ffde59] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-2">Get Admitted</h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal text-gray-600">Receive your admission confirmation and join our vibrant community</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#0b6d41] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-2">Start Learning</h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal text-gray-600">Begin your transformative educational journey with expert guidance</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.5px] md:tracking-[-0.6px] text-gray-900 mb-6">Request Information</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-[14px] leading-[20px] font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b6d41] focus:border-transparent" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-[14px] leading-[20px] font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b6d41] focus:border-transparent" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-[14px] leading-[20px] font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b6d41] focus:border-transparent" placeholder="Enter your phone" />
                  </div>
                  <div>
                    <label className="block text-[14px] leading-[20px] font-medium text-gray-700 mb-2">Program of Interest</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b6d41] focus:border-transparent">
                      <option>Select a program</option>
                      <option>B.Sc Computer Science</option>
                      <option>B.Com Commerce</option>
                      <option>B.A English</option>
                      <option>BCA Computer Applications</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-[#0b6d41] text-white py-4 rounded-lg text-[16px] leading-[24px] font-semibold hover:bg-[#095c37] transition">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-gray-900 mb-4">
              Have Questions? We Have <span className="text-[#0b6d41]">Answers</span>
            </h2>
            <p className="text-[18px] md:text-[20px] leading-[29.25px] md:leading-[28px] font-normal text-gray-600">
              Find answers to commonly asked questions about admissions, programs, and campus life
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-[#fbfbee] rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-left text-[16px] leading-[24px] font-semibold text-gray-900 hover:text-[#0b6d41] hover:no-underline">
                What are the admission requirements for undergraduate programs?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] leading-[20px] font-normal text-gray-600">
                Students must have completed their 12th standard with relevant subjects and minimum required percentage. Specific requirements vary by program. Please contact our admissions office for detailed eligibility criteria.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-[#fbfbee] rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-left text-[16px] leading-[24px] font-semibold text-gray-900 hover:text-[#0b6d41] hover:no-underline">
                Does JKKN College provide placement assistance?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] leading-[20px] font-normal text-gray-600">
                Yes, we have a dedicated placement cell that works year-round to connect students with top employers. We maintain strong industry partnerships and achieve a 95% placement rate across all programs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-[#fbfbee] rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-left text-[16px] leading-[24px] font-semibold text-gray-900 hover:text-[#0b6d41] hover:no-underline">
                What facilities are available on campus?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] leading-[20px] font-normal text-gray-600">
                Our campus features modern computer labs, a well-stocked library, smart classrooms, research centers, sports facilities, hostel accommodation, cafeteria, and much more to support your academic and personal development.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-[#fbfbee] rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-left text-[16px] leading-[24px] font-semibold text-gray-900 hover:text-[#0b6d41] hover:no-underline">
                Are scholarships available for students?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] leading-[20px] font-normal text-gray-600">
                Yes, we offer various merit-based and need-based scholarships to deserving students. Additionally, we assist students in applying for government scholarships and financial aid programs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="bg-[#fbfbee] rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-left text-[16px] leading-[24px] font-semibold text-gray-900 hover:text-[#0b6d41] hover:no-underline">
                How can I apply for admission?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] leading-[20px] font-normal text-gray-600">
                You can apply online through our website by filling out the admission form. Alternatively, you can visit our campus to complete the application process in person. Our admissions team is available to guide you through every step.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] mb-6 text-brand-green">
            Ready to Transform Your Future?
          </h2>
          <p className="text-[18px] md:text-[20px] leading-[29.25px] md:leading-[28px] font-normal mb-8 text-gray-700">
            Join JKKN College today and start your journey towards a successful career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-white px-8 py-4 rounded-full text-[16px] leading-[24px] font-semibold hover:bg-[#095c37] transition text-center"
            >
              Apply for Admission
            </a>
            <button className="bg-white text-brand-green px-8 py-4 rounded-full text-[16px] leading-[24px] font-semibold hover:bg-gray-100 transition border border-gray-300">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
