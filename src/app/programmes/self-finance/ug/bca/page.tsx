'use client';

import React, { useState, useEffect } from 'react';
import {
  Code,
  Terminal,
  Cloud,
  Database,
  Smartphone,
  Cpu,
  GitBranch,
  Server,
  Lock,
  Brain,
  GraduationCap,
  Users,
  TrendingUp,
  Award,
  Briefcase,
  CheckCircle,
  Calendar,
  Clock,
  FileText,
  ChevronDown,
  Zap,
  DollarSign,
  Building,
  Target,
  Lightbulb,
  Globe
} from 'lucide-react';

export default function BCAPage() {
  const [activeYear, setActiveYear] = useState<1 | 2 | 3>(1);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What programming languages are taught in BCA?",
      answer: "The BCA programme covers a comprehensive range of programming languages including C, C++, Java, Python, and JavaScript. You'll also learn modern frameworks like React, Node.js, Angular, and technologies such as HTML5, CSS3, and SQL. The curriculum is designed to make you proficient in both traditional and cutting-edge programming paradigms."
    },
    {
      question: "Can I pursue MCA or MBA after BCA?",
      answer: "Yes, absolutely! BCA graduates are eligible for MCA (Master of Computer Applications) which is a natural progression for software development careers. You can also pursue MBA specializing in IT Management, Data Analytics, or general management. Many students also opt for MS in Computer Science at universities abroad."
    },
    {
      question: "What is the average salary after BCA?",
      answer: "Fresh BCA graduates typically start with packages ranging from ₹3.5 to ₹6 LPA in IT companies. With cloud certifications (AWS/Azure) and full-stack skills, packages can go up to ₹8-15 LPA. Software developers with 2-3 years experience often earn ₹10-20 LPA in product companies and startups."
    },
    {
      question: "Are internships mandatory in BCA?",
      answer: "Yes, the BCA programme includes a mandatory software development internship in the final year. Students work on real projects at IT companies, startups, or product development firms. The internship provides hands-on experience in live coding environments, agile workflows, and professional development practices."
    },
    {
      question: "What certifications should I pursue alongside BCA?",
      answer: "We recommend cloud certifications like AWS Certified Solutions Architect, Azure Fundamentals, or Google Cloud Associate. Programming certifications from Oracle (Java), Microsoft (C#/.NET), or MongoDB are valuable. GitHub Student Pack provides free access to many professional tools and certifications."
    },
    {
      question: "Do I need prior coding experience for admission?",
      answer: "No prior coding experience is required for BCA admission. The programme starts with programming fundamentals and gradually builds to advanced topics. However, curiosity about technology, logical thinking, and willingness to learn are important. Students from any stream (Science/Commerce/Arts) can join and excel."
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
            "name": "Bachelor of Computer Applications (BCA)",
            "description": "A comprehensive 3-year undergraduate programme in software development, covering programming, full-stack development, cloud computing, DevOps, and modern software engineering practices.",
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
            "educationalCredentialAwarded": "Bachelor of Computer Applications",
            "timeToComplete": "P3Y",
            "occupationalCredentialAwarded": "UGC Recognized Degree"
          })
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[650px] flex items-center bg-[#eaf1e2] text-gray-800 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-white/10"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-6 py-20">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#0b6d41] px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-[#0b6d41] text-white">
                <GraduationCap className="w-4 h-4 text-white" />
                <span>UGC Recognized Programme</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0b6d41] leading-tight">
                Bachelor of Computer Applications<br />(BCA)
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 font-light">
                Build the Future with Code, Cloud, and Innovation
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-lg border border-gray-300 shadow-sm">
                  <Clock className="w-5 h-5 text-[#0b6d41]" />
                  <span className="font-medium text-gray-700">3 Years Duration</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-lg border border-gray-300 shadow-sm">
                  <Users className="w-5 h-5 text-[#0b6d41]" />
                  <span className="font-medium text-gray-700">Full-Time Programme</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-lg border border-gray-300 shadow-sm">
                  <Calendar className="w-5 h-5 text-[#0b6d41]" />
                  <span className="font-medium text-gray-700">6 Semesters</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                <button className="bg-[#0b6d41] hover:bg-[#085830] text-white px-8 py-3.5 rounded-lg font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Apply Now
                </button>
                <button className="bg-white border-2 border-[#0b6d41] hover:bg-[#0b6d41] hover:text-white text-[#0b6d41] px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center gap-2">
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
                    subtitle: "Accredited",
                    description: "Quality assured education",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: Cloud,
                    title: "Industry",
                    subtitle: "Tools",
                    description: "AWS, Azure, React, Node.js",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: Briefcase,
                    title: "90%+",
                    subtitle: "Placement",
                    description: "Software companies & IT firms",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: Code,
                    title: "Live",
                    subtitle: "Projects",
                    description: "Real-world development",
                    color: "bg-[#0b6d41]"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white text-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`
                    }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-1">{item.title}</h3>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.subtitle}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
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
                  <div className="w-16 h-1 bg-[#0b6d41] mb-8 rounded"></div>

                  <div className="space-y-4 mb-10">
                    <p className="text-gray-700 leading-relaxed">
                      The Bachelor of Computer Applications (BCA) is a comprehensive three-year undergraduate programme designed to transform you into a skilled software developer ready for the modern IT industry. This UGC-recognized programme offers an intensive curriculum covering programming fundamentals, full-stack web development, cloud computing, mobile app development, and cutting-edge technologies like DevOps, AI, and blockchain.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our industry-aligned curriculum ensures you master programming languages from C and Java to Python and JavaScript, while gaining hands-on experience with modern frameworks like React, Node.js, Angular, and cloud platforms including AWS and Azure. Through live coding projects, hackathons, collaborative development, and a mandatory software internship, you'll build a strong portfolio that makes you job-ready from day one.
                    </p>
                  </div>

                  {/* Feature Grid - 2x2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#0b6d41]">
                      <CheckCircle className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Industry-ready curriculum with latest tech stack (MERN, Cloud, DevOps)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#0b6d41]">
                      <CheckCircle className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Cloud platform training with AWS Academy & Azure certifications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#0b6d41]">
                      <CheckCircle className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Mandatory software development internship with IT companies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-[#0b6d41]">
                      <CheckCircle className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">Regular coding bootcamps, hackathons, and tech workshops</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-16 md:py-20 bg-[#0b6d41] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Highlights</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Core Programming</h3>
                  <p className="text-white/90">
                    Master C, C++, Java, Python, JavaScript with data structures, algorithms, and design patterns
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Full-Stack Development</h3>
                  <p className="text-white/90">
                    Build complete web applications with MERN/MEAN stack, React, Node.js, MongoDB, and REST APIs
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-[#0b6d41]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cloud & DevOps</h3>
                  <p className="text-white/90">
                    Deploy scalable apps on AWS, Azure with Docker, Kubernetes, CI/CD pipelines, and automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Admission Criteria */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-3">
                  Eligibility & Admission Criteria
                </h2>
                <p className="text-gray-600 text-lg">
                  Requirements and pathways to join our BCA programme
                </p>
              </div>

              {/* Grid of 6 Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1: Academic Qualification */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="h-1 bg-[#0b6d41]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Academic Qualification
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Higher Secondary (10+2) from recognized board in any stream</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Science stream with Mathematics preferred but not mandatory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Commerce and Arts stream students also eligible</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 2: Minimum Marks */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="h-1 bg-[#0b6d41]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Minimum Marks
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>General Category: 50% aggregate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>OBC Category: 45% aggregate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>SC/ST/DA Category: 40% aggregate</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 3: Age Criteria */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="h-1 bg-[#0b6d41]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Age Criteria
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>No upper age limit for admission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Minimum 17 years of age as on December 31st of admission year</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 4: Required Documents */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="h-1 bg-[#0b6d41]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Required Documents
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>10th & 12th Mark Sheets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Transfer Certificate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Community Certificate (if applicable)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Passport Size Photographs</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 5: Admission Process */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="h-1 bg-[#0b6d41]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Admission Process
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Online/Offline Application Submission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Aptitude Test (Basic Programming Logic)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Merit-based Selection & Counseling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Fee Payment & Enrollment</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 6: Scholarships Available */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="h-1 bg-[#0b6d41]"></div>
                  <div className="p-6">
                    <div className="bg-[#0b6d41] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <DollarSign className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                      Scholarships Available
                    </h3>
                    <ul className="space-y-2.5 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Merit Scholarships (Top 10% students)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Government Scholarships (SC/ST/OBC)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
                        <span>Financial Aid for EWS Students</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0b6d41] mt-1.5">•</span>
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
        <section className="py-16 md:py-20 bg-[#fbfbee]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-12 text-center">Course Curriculum</h2>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
                {[1, 2, 3].map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year as 1 | 2 | 3)}
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
                        { name: "Fundamentals of Information Technology", code: "BCA101" },
                        { name: "Programming in C", code: "BCA102" },
                        { name: "Digital Logic & Computer Organization", code: "BCA103" },
                        { name: "Mathematics I (Discrete Mathematics)", code: "MAT101" },
                        { name: "English Communication Skills", code: "ENG101" },
                        { name: "Environmental Studies", code: "EVS101" }
                      ].map((subject, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#0b6d41]"></div>
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
                        { name: "Data Structures using C++", code: "BCA104" },
                        { name: "Database Management Systems", code: "BCA105" },
                        { name: "Operating Systems Concepts", code: "BCA106" },
                        { name: "Mathematics II (Statistics & Probability)", code: "MAT102" },
                        { name: "Web Technologies (HTML, CSS, JavaScript)", code: "BCA107" },
                        { name: "Computer Organization & Architecture", code: "BCA108" }
                      ].map((subject, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#0b6d41]"></div>
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
                        { name: "Object-Oriented Programming with Java", code: "BCA201" },
                        { name: "RDBMS & SQL Programming", code: "BCA202" },
                        { name: "Software Engineering", code: "BCA203" },
                        { name: "Discrete Mathematics & Graph Theory", code: "MAT201" },
                        { name: "Web Technologies (Advanced JavaScript)", code: "BCA204" },
                        { name: "Computer Networks", code: "BCA205" }
                      ].map((subject, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#0b6d41]"></div>
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
                        { name: "Python Programming & Libraries", code: "BCA206" },
                        { name: "Web Frameworks (React/Angular)", code: "BCA207" },
                        { name: "Data Structures & Algorithms", code: "BCA208" },
                        { name: "Statistics for Data Analysis", code: "MAT202" },
                        { name: "Unix/Linux System Administration", code: "BCA209" },
                        { name: "Mobile Application Development", code: "BCA210" }
                      ].map((subject, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#0b6d41]"></div>
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
                        { name: "Full-Stack Development (MERN Stack)", code: "BCA301" },
                        { name: "Cloud Computing (AWS/Azure)", code: "BCA302" },
                        { name: "Machine Learning Fundamentals", code: "BCA303" },
                        { name: "NoSQL Databases (MongoDB)", code: "BCA304" },
                        { name: "DevOps & CI/CD Practices", code: "BCA305" },
                        { name: "Cyber Security Fundamentals", code: "BCA306" }
                      ].map((subject, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#0b6d41]"></div>
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
                        { name: "Advanced Web Development", code: "BCA307" },
                        { name: "Microservices Architecture", code: "BCA308" },
                        { name: "Artificial Intelligence & NLP", code: "BCA309" },
                        { name: "Blockchain Technology", code: "BCA310" },
                        { name: "Major Project Work & Internship", code: "BCA311" },
                        { name: "Elective (IoT/Big Data/AR-VR)", code: "BCA312" }
                      ].map((subject, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#0b6d41]"></div>
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
        <section className="py-16 md:py-20 bg-white">
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
                {/* Card 1: Software Development Skills */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">01</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Software Development Skills
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Master multiple programming paradigms (procedural, OOP, functional), design patterns, SOLID principles, and industry-standard coding best practices for scalable software.
                  </p>
                </div>

                {/* Card 2: Full-Stack Development */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">02</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Full-Stack Development
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Build complete web applications from scratch using MERN/MEAN stack, handling frontend (React/Angular), backend (Node.js/Express), and database integration.
                  </p>
                </div>

                {/* Card 3: Database Design & Management */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">03</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Database Design & Management
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Design normalized relational databases (SQL), work with NoSQL databases (MongoDB), understand ACID properties, indexing, query optimization, and cloud database services.
                  </p>
                </div>

                {/* Card 4: Cloud & DevOps */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">04</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Cloud & DevOps
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Deploy applications on AWS and Azure, implement CI/CD pipelines, containerize apps with Docker, orchestrate with Kubernetes, and automate infrastructure.
                  </p>
                </div>

                {/* Card 5: Problem Solving & Algorithms */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">05</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Problem Solving & Algorithms
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Apply algorithmic thinking, analyze time/space complexity, implement efficient data structures, solve competitive programming challenges, and optimize code performance.
                  </p>
                </div>

                {/* Card 6: Professional IT Skills */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0b6d41] text-sm font-bold">06</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0b6d41] mb-3">
                    Professional IT Skills
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Use Git version control, practice Agile/Scrum methodologies, write technical documentation, collaborate in teams, participate in code reviews, and work in professional development environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 md:py-20 bg-[#0b6d41] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Career Opportunities
                </h2>
                <p className="text-blue-100 text-lg">
                  Diverse career pathways await BCA graduates in the tech industry
                </p>
              </div>

              {/* Grid of 8 Career Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Card 1: Software Developer */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all text-center">
                  <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Software Developer
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Full-stack web & mobile development
                  </p>
                </div>

                {/* Card 2: Web Developer */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all text-center">
                  <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Web Developer
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Frontend/backend specialist
                  </p>
                </div>

                {/* Card 3: Mobile App Developer */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all text-center">
                  <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Mobile App Developer
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Android/iOS/React Native
                  </p>
                </div>

                {/* Card 4: Data Analyst */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all text-center">
                  <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Data Analyst
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Business intelligence & analytics
                  </p>
                </div>

                {/* Card 5: Cloud Engineer */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all text-center">
                  <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Cloud Engineer
                  </h3>
                  <p className="text-blue-100 text-sm">
                    AWS/Azure solutions architect
                  </p>
                </div>

                {/* Card 6: DevOps Engineer */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all text-center">
                  <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Server className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    DevOps Engineer
                  </h3>
                  <p className="text-blue-100 text-sm">
                    CI/CD & automation specialist
                  </p>
                </div>

                {/* Card 7: Database Administrator */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all text-center">
                  <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Database Administrator
                  </h3>
                  <p className="text-blue-100 text-sm">
                    SQL/NoSQL management
                  </p>
                </div>

                {/* Card 8: System Analyst */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all text-center">
                  <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    System Analyst
                  </h3>
                  <p className="text-blue-100 text-sm">
                    IT consulting & solutions
                  </p>
                </div>
              </div>

              {/* Recruiting Sectors */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Recruiting Sectors</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Product Companies",
                    "IT Services (TCS/Infosys/Wipro)",
                    "Startups & Unicorns",
                    "Banking & FinTech",
                    "E-commerce Platforms",
                    "Cloud Service Providers",
                    "Consulting Firms",
                    "Healthcare IT",
                    "EdTech Companies",
                    "Government IT Projects",
                    "Gaming Industry",
                    "Cyber Security Firms"
                  ].map((sector, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all"
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
                  <div className="bg-[#0b6d41] p-8 text-center">
                    <h3 className="text-2xl font-bold text-[#0b6d41]">Computer Lab</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Advanced Computing Lab
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      100+ high-performance workstations with latest IDEs (VS Code, IntelliJ, PyCharm), development tools, and 24/7 lab access for coding practice.
                    </p>
                  </div>
                </div>

                {/* Card 2: Cloud Lab */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-white p-8 text-center border-t-4 border-[#0b6d41]">
                    <h3 className="text-2xl font-bold text-[#0b6d41]">Cloud Lab</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Cloud Computing Lab
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      AWS Academy certified lab with Azure student access, hands-on training in Docker, Kubernetes, serverless computing, and cloud deployment.
                    </p>
                  </div>
                </div>

                {/* Card 3: Software Library */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-[#0b6d41] p-8 text-center">
                    <h3 className="text-2xl font-bold text-[#0b6d41]">Software Library</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Software & Dev Tools Access
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      GitHub Education Pack, JetBrains licenses, Microsoft Azure Dev Tools for Teaching, and access to premium learning platforms.
                    </p>
                  </div>
                </div>

                {/* Card 4: Innovation Center */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-[#0b6d41] p-8 text-center">
                    <h3 className="text-2xl font-bold text-[#0b6d41]">Innovation Center</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Innovation & Incubation Hub
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated space for hackathons, project incubation, startup ideation, maker activities, and collaborative coding sessions.
                    </p>
                  </div>
                </div>

                {/* Card 5: Tech Seminars */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-white p-8 text-center border-t-4 border-[#0b6d41]">
                    <h3 className="text-2xl font-bold text-[#0b6d41]">Tech Seminars</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Industry Expert Sessions
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Regular guest lectures by software architects, tech meetups, coding competitions, and workshops on emerging technologies.
                    </p>
                  </div>
                </div>

                {/* Card 6: Placement Cell */}
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-[#0b6d41] p-8 text-center">
                    <h3 className="text-2xl font-bold text-[#0b6d41]">Placement Cell</h3>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-lg font-bold text-[#0b6d41] mb-3">
                      Career Support & Placement
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated placement cell with job portal access, mock technical interviews, resume building, coding test preparation, and company connections.
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
                <div className="bg-[#0b6d41] rounded-2xl p-16 flex items-center justify-center min-h-[500px]">
                  <h3 className="text-4xl font-bold text-white text-center">
                    Why Choose JKKN
                  </h3>
                </div>

                {/* Right Side - Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-2">
                    Why Choose Our BCA Programme?
                  </h2>
                  <div className="w-16 h-1 bg-[#0b6d41] mb-8 rounded"></div>

                  <div className="space-y-6">
                    {/* Reason 1 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          70+ Years of Academic Excellence
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Part of J.K.K. Nattraja Educational Institutions with proven legacy in progressive education and technology training since 1954.
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
                          Industry-Aligned Curriculum
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Curriculum designed with input from software industry experts, covering latest technologies and market-demanded skills.
                        </p>
                      </div>
                    </div>

                    {/* Reason 3 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Expert Faculty & Mentors
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Learn from faculty with industry experience, research scholars, and visiting software architects from leading tech companies.
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
                          90%+ placement rate with top IT companies including TCS, Infosys, Wipro, Cognizant, startups, and product-based companies.
                        </p>
                      </div>
                    </div>

                    {/* Reason 5 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0b6d41] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0b6d41] mb-2">
                          Hands-on Project Experience
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Build 10+ live projects, participate in national hackathons, contribute to open-source, and develop a professional GitHub portfolio.
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
                          Industry Certifications
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Support for AWS, Azure, Oracle Java, MongoDB, Google Cloud certifications through training programs and exam preparation.
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
        <section className="py-16 md:py-20 bg-white">
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
                      className={`w-5 h-5 text-[#0b6d41] flex-shrink-0 transition-transform ${
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
        <section className="py-16 md:py-20 bg-[#0b6d41] text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Software Development Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join JKKN's BCA programme and build a successful career in software development, cloud computing, and technology innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white hover:bg-gray-100 text-[#0b6d41] px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:-translate-y-1">
                Apply Now
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0b6d41] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
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
