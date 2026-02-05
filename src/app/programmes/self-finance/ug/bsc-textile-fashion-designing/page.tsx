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
  ExternalLink,
  Scissors,
  Palette,
  Ruler,
  Shirt,
  Sparkles,
  PenTool,
  Layers
} from 'lucide-react';

export default function BSCTextileFashionDesigningPage() {
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

  const curriculum = {
    year1: {
      semester1: [
        { name: "Elements of Fashion Design", code: "TFD101" },
        { name: "Textile Science Fundamentals", code: "TFD102" },
        { name: "Fashion Illustration I", code: "TFD103" },
        { name: "Pattern Making Basics", code: "TFD104" },
        { name: "Practical: Sewing Techniques", code: "TFD105P" },
        { name: "Environmental Studies", code: "EVS101" }
      ],
      semester2: [
        { name: "History of Costumes & Textiles", code: "TFD201" },
        { name: "Fabric Study & Analysis", code: "TFD202" },
        { name: "Fashion Illustration II", code: "TFD203" },
        { name: "Garment Construction I", code: "TFD204" },
        { name: "Practical: Draping Techniques", code: "TFD205P" },
        { name: "Value Education", code: "VAL101" }
      ]
    },
    year2: {
      semester3: [
        { name: "Surface Ornamentation I", code: "TFD301" },
        { name: "Traditional Indian Textiles", code: "TFD302" },
        { name: "Computer Aided Design (CAD)", code: "TFD303" },
        { name: "Garment Construction II", code: "TFD304" },
        { name: "Practical: Embroidery Techniques", code: "TFD305P" },
        { name: "Soft Skills Development", code: "SKL301" }
      ],
      semester4: [
        { name: "Surface Ornamentation II", code: "TFD401" },
        { name: "Textile Dyeing & Printing", code: "TFD402" },
        { name: "Fashion Merchandising", code: "TFD403" },
        { name: "Advanced Pattern Making", code: "TFD404" },
        { name: "Practical: Print Design Lab", code: "TFD405P" },
        { name: "Extension Activities", code: "EXT401" }
      ]
    },
    year3: {
      semester5: [
        { name: "Apparel Production Management", code: "TFD501" },
        { name: "Fashion Marketing & Branding", code: "TFD502" },
        { name: "Sustainable Fashion Design", code: "TFD503" },
        { name: "Costume Design for Media", code: "TFD504" },
        { name: "Practical: Portfolio Development", code: "TFD505P" },
        { name: "Elective: Accessory Design / Knitwear", code: "TFD506E" }
      ],
      semester6: [
        { name: "Fashion Entrepreneurship", code: "TFD601" },
        { name: "Visual Merchandising & Retail", code: "TFD602" },
        { name: "Fashion Forecasting & Trends", code: "TFD603" },
        { name: "Industry Internship", code: "TFD604" },
        { name: "Final Collection Project", code: "TFD605P" },
        { name: "Elective: Fashion Journalism / Styling", code: "TFD606E" }
      ]
    }
  };

  const faqs = [
    {
      question: "What is the scope of B.Sc Textile and Fashion Design in India?",
      answer: "The fashion and textile industry in India is booming with excellent career opportunities in fashion houses, export companies, textile mills, retail brands, and media. Graduates can work as fashion designers, textile designers, merchandisers, stylists, or start their own fashion ventures with growing demand in both domestic and international markets."
    },
    {
      question: "Can I pursue this course after Commerce or Arts stream?",
      answer: "Yes! While Science stream students are preferred, students from Commerce and Arts backgrounds can also apply if they have a genuine interest in design and creativity. The programme focuses on developing creative and technical skills rather than requiring advanced science knowledge."
    },
    {
      question: "What software and technical skills will I learn?",
      answer: "Students receive comprehensive training in industry-standard software including Adobe Photoshop, Adobe Illustrator, CorelDRAW for design, CAD software for pattern making, and 3D design tools. You'll also learn manual techniques like draping, pattern making, embroidery, and textile printing alongside digital skills."
    },
    {
      question: "What is the average salary package for B.Sc TFD graduates?",
      answer: "Entry-level salaries range from ₹2.5-4.5 lakhs per annum depending on the role and company. Fashion designers in established brands can earn ₹4-8 lakhs, while merchandisers and production managers earn ₹3-6 lakhs annually. Successful entrepreneurs and freelance designers can earn significantly higher based on their clientele and brand value."
    },
    {
      question: "Are there industry internship opportunities during the course?",
      answer: "Yes, the programme includes a mandatory industry internship in the final year. We have partnerships with leading fashion houses, textile mills, export companies, and retail brands. Students gain hands-on experience in design studios, production units, merchandising departments, and fashion events, which significantly enhances employability."
    },
    {
      question: "Can I start my own fashion business after this course?",
      answer: "Absolutely! The curriculum includes Fashion Entrepreneurship, Marketing & Branding, and Production Management modules specifically designed to equip students with business skills. Many of our graduates have successfully launched their own fashion labels, boutiques, online stores, and design studios. The college also provides incubation support for student entrepreneurs."
    },
    {
      question: "What are the options for higher studies after B.Sc TFD?",
      answer: "Graduates can pursue M.Sc in Fashion Design, MBA in Fashion Management, specialized courses in Fashion Technology, Textile Engineering, or Fashion Communication. International options include degrees from fashion institutes in Italy, France, UK, and USA. Some students also pursue certifications in specialized areas like sustainable fashion, luxury brand management, or fashion styling."
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
            "name": "Bachelor of Science in Textile and Fashion Design",
            "description": "A comprehensive 3-year undergraduate programme combining creative design thinking with technical textile knowledge, covering fashion illustration, garment construction, CAD, merchandising, and sustainable fashion practices.",
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
            "educationalCredentialAwarded": "Bachelor of Science in Textile and Fashion Design",
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
                Bachelor of Science in<br />Textile and Fashion Design
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 font-light">
                Design Your Future in Fashion & Textile Innovation
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
                    subtitle: "Accredited",
                    description: "Quality assured education",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: Palette,
                    title: "Design",
                    subtitle: "Studios",
                    description: "State-of-art facilities",
                    color: "bg-[#ffde59]"
                  },
                  {
                    icon: Briefcase,
                    title: "90%+",
                    subtitle: "Placement",
                    description: "Top fashion brands",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: Sparkles,
                    title: "Fashion",
                    subtitle: "Shows & Events",
                    description: "Annual exhibitions",
                    color: "bg-[#ffde59]"
                  }
                ].map((card, index) => (
                  <div
                    key={index}
                    className={`spotlight-card relative overflow-hidden ${card.color} ${
                      card.color === 'bg-[#ffde59]' ? 'text-[#0b6d41]' : 'text-white'
                    } p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.6s ease-out ${index * 0.1}s`
                    }}
                  >
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.15), transparent 50%)`
                      }}
                    />
                    <div className="relative z-10">
                      <card.icon className="w-8 h-8 mb-3 mx-auto" />
                      <h3 className="text-2xl font-bold mb-1">{card.title}</h3>
                      <p className="text-sm font-semibold mb-1 opacity-90">{card.subtitle}</p>
                      <p className="text-xs opacity-80">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programme Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
                  Programme Overview
                </h2>
                <div className="w-24 h-1 bg-[#ffde59] mx-auto"></div>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The B.Sc. in Textile and Fashion Design is a dynamic undergraduate programme that blends creative artistry with technical expertise in textile science and fashion innovation. This comprehensive course equips students with the skills to conceptualize, design, and create fashion garments while understanding the science behind fabrics, production processes, and sustainable practices.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Students gain hands-on experience through state-of-the-art design studios, CAD laboratories, and industry internships. The curriculum covers everything from fashion illustration and pattern making to merchandising, branding, and entrepreneurship, preparing graduates for diverse roles in the global fashion and textile industry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Creative & Technical Excellence",
                    description: "Master both artistic design principles and technical garment construction skills through integrated coursework and practical sessions."
                  },
                  {
                    title: "Industry-Standard Software Training",
                    description: "Proficiency in Adobe Creative Suite, CAD/CAM software, and 3D design tools used by leading fashion houses worldwide."
                  },
                  {
                    title: "Sustainable Fashion Focus",
                    description: "Learn eco-friendly design practices, ethical sourcing, and sustainable production methods aligned with global fashion trends."
                  },
                  {
                    title: "Real-World Industry Exposure",
                    description: "Mandatory internships, fashion shows, industry visits, and collaborative projects with fashion brands and textile manufacturers."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-[#eaf1e2] rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#0b6d41]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0b6d41] mb-2">{feature.title}</h3>
                      <p className="text-gray-700">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Admission */}
        <section className="py-16 bg-[#fbfbee]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
                  Eligibility & Admission
                </h2>
                <div className="w-24 h-1 bg-[#ffde59] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Basic Eligibility",
                    description: "10+2 or equivalent from a recognized board with minimum 50% aggregate marks"
                  },
                  {
                    icon: BookOpen,
                    title: "Stream Acceptance",
                    description: "Students from Science, Commerce, or Arts streams are eligible to apply"
                  },
                  {
                    icon: UserCheck,
                    title: "Age Criteria",
                    description: "Candidates should be 17-25 years old at the time of admission"
                  },
                  {
                    icon: FileText,
                    title: "Selection Process",
                    description: "Merit-based admission with portfolio review and personal interview"
                  },
                  {
                    icon: Target,
                    title: "Creative Aptitude",
                    description: "Interest in art, design, creativity, and fashion trends is essential"
                  },
                  {
                    icon: Calendar,
                    title: "Admission Timeline",
                    description: "Applications open from May to July with classes commencing in August"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#0b6d41]">
                    <item.icon className="w-10 h-10 text-[#0b6d41] mb-4" />
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-3">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Course Curriculum */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
                  Course Curriculum
                </h2>
                <div className="w-24 h-1 bg-[#ffde59] mx-auto mb-6"></div>
                <p className="text-gray-600 text-lg">
                  Comprehensive 6-semester curriculum covering design, technology, and business aspects
                </p>
              </div>

              {/* Year Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[1, 2, 3].map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-8 py-3 rounded-lg font-bold transition-all ${
                      activeYear === year
                        ? 'bg-[#0b6d41] text-white shadow-lg'
                        : 'bg-white text-[#0b6d41] border-2 border-[#0b6d41] hover:bg-[#0b6d41] hover:text-white'
                    }`}
                  >
                    Year {year}
                  </button>
                ))}
              </div>

              {/* Curriculum Content */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Semester 1 & 2 for Year 1, Semester 3 & 4 for Year 2, Semester 5 & 6 for Year 3 */}
                {activeYear === 1 && (
                  <>
                    <div className="bg-[#eaf1e2] p-8 rounded-xl shadow-md">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-[#0b6d41] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                          I
                        </div>
                        <h3 className="text-2xl font-bold text-[#0b6d41]">Semester I</h3>
                      </div>
                      <div className="space-y-3">
                        {curriculum.year1.semester1.map((subject, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                              <span className="font-medium text-gray-800">{subject.name}</span>
                              <span className="text-sm text-[#0b6d41] font-semibold ml-2 whitespace-nowrap">{subject.code}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#eaf1e2] p-8 rounded-xl shadow-md">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-[#ffde59] text-[#0b6d41] w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                          II
                        </div>
                        <h3 className="text-2xl font-bold text-[#0b6d41]">Semester II</h3>
                      </div>
                      <div className="space-y-3">
                        {curriculum.year1.semester2.map((subject, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                              <span className="font-medium text-gray-800">{subject.name}</span>
                              <span className="text-sm text-[#0b6d41] font-semibold ml-2 whitespace-nowrap">{subject.code}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {activeYear === 2 && (
                  <>
                    <div className="bg-[#eaf1e2] p-8 rounded-xl shadow-md">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-[#0b6d41] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                          III
                        </div>
                        <h3 className="text-2xl font-bold text-[#0b6d41]">Semester III</h3>
                      </div>
                      <div className="space-y-3">
                        {curriculum.year2.semester3.map((subject, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                              <span className="font-medium text-gray-800">{subject.name}</span>
                              <span className="text-sm text-[#0b6d41] font-semibold ml-2 whitespace-nowrap">{subject.code}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#eaf1e2] p-8 rounded-xl shadow-md">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-[#ffde59] text-[#0b6d41] w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                          IV
                        </div>
                        <h3 className="text-2xl font-bold text-[#0b6d41]">Semester IV</h3>
                      </div>
                      <div className="space-y-3">
                        {curriculum.year2.semester4.map((subject, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                              <span className="font-medium text-gray-800">{subject.name}</span>
                              <span className="text-sm text-[#0b6d41] font-semibold ml-2 whitespace-nowrap">{subject.code}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {activeYear === 3 && (
                  <>
                    <div className="bg-[#eaf1e2] p-8 rounded-xl shadow-md">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-[#0b6d41] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                          V
                        </div>
                        <h3 className="text-2xl font-bold text-[#0b6d41]">Semester V</h3>
                      </div>
                      <div className="space-y-3">
                        {curriculum.year3.semester5.map((subject, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                              <span className="font-medium text-gray-800">{subject.name}</span>
                              <span className="text-sm text-[#0b6d41] font-semibold ml-2 whitespace-nowrap">{subject.code}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#eaf1e2] p-8 rounded-xl shadow-md">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-[#ffde59] text-[#0b6d41] w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                          VI
                        </div>
                        <h3 className="text-2xl font-bold text-[#0b6d41]">Semester VI</h3>
                      </div>
                      <div className="space-y-3">
                        {curriculum.year3.semester6.map((subject, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                              <span className="font-medium text-gray-800">{subject.name}</span>
                              <span className="text-sm text-[#0b6d41] font-semibold ml-2 whitespace-nowrap">{subject.code}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Programme Learning Outcomes */}
        <section className="py-16 bg-[#fbfbee]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
                  Programme Learning Outcomes
                </h2>
                <div className="w-24 h-1 bg-[#ffde59] mx-auto mb-6"></div>
                <p className="text-gray-600 text-lg">
                  Skills and competencies you will develop
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Palette,
                    title: "Creative Design Thinking",
                    description: "Develop innovative design concepts and translate creative ideas into wearable fashion collections with aesthetic appeal and market relevance."
                  },
                  {
                    icon: Ruler,
                    title: "Technical Proficiency",
                    description: "Master garment construction, pattern making, draping techniques, and sewing skills to create professional-quality fashion products."
                  },
                  {
                    icon: Layers,
                    title: "Digital Design Skills",
                    description: "Gain expertise in CAD/CAM software, Adobe Creative Suite, and 3D design tools for digital fashion illustration and technical drawings."
                  },
                  {
                    icon: Sparkles,
                    title: "Textile Knowledge",
                    description: "Understand fiber science, fabric properties, textile testing, dyeing, printing techniques, and sustainable material sourcing."
                  },
                  {
                    icon: PenTool,
                    title: "Business Acumen",
                    description: "Learn fashion merchandising, marketing strategies, retail management, branding, and visual merchandising for commercial success."
                  },
                  {
                    icon: Users,
                    title: "Sustainable Practices",
                    description: "Apply eco-friendly design principles, ethical sourcing, zero-waste pattern making, and sustainable fashion business models."
                  }
                ].map((outcome, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-[#0b6d41]">
                    <div className="bg-[#eaf1e2] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                      <outcome.icon className="w-7 h-7 text-[#0b6d41]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-3">{outcome.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{outcome.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
                  Career Opportunities
                </h2>
                <div className="w-24 h-1 bg-[#ffde59] mx-auto mb-6"></div>
                <p className="text-gray-600 text-lg">
                  Diverse career paths in the fashion and textile industry
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    icon: Palette,
                    title: "Fashion Designer",
                    description: "Create original clothing and accessory designs for fashion houses and brands"
                  },
                  {
                    icon: Layers,
                    title: "Textile Designer",
                    description: "Design patterns, prints, and textures for fabrics and textile products"
                  },
                  {
                    icon: Ruler,
                    title: "Costume Designer",
                    description: "Design costumes for film, television, theater, and media productions"
                  },
                  {
                    icon: Briefcase,
                    title: "Fashion Stylist",
                    description: "Style outfits for photoshoots, celebrities, events, and editorial content"
                  },
                  {
                    icon: CheckCircle,
                    title: "Visual Merchandiser",
                    description: "Create attractive product displays and store layouts for retail brands"
                  },
                  {
                    icon: Sparkles,
                    title: "Apparel Merchandiser",
                    description: "Manage product development, sourcing, and supply chain for fashion brands"
                  },
                  {
                    icon: Shirt,
                    title: "Fashion Entrepreneur",
                    description: "Launch your own fashion label, boutique, or online fashion business"
                  },
                  {
                    icon: TrendingUp,
                    title: "Production Manager",
                    description: "Oversee garment manufacturing, quality control, and production processes"
                  }
                ].map((career, index) => (
                  <div key={index} className="bg-[#eaf1e2] p-6 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="bg-[#0b6d41] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <career.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0b6d41] mb-2">{career.title}</h3>
                    <p className="text-gray-700 text-sm">{career.description}</p>
                  </div>
                ))}
              </div>

              {/* Employment Sectors */}
              <div className="bg-[#eaf1e2] p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-[#0b6d41] mb-6 text-center">Employment Sectors</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    "Fashion Houses",
                    "Textile Mills",
                    "Export Houses",
                    "Retail Brands",
                    "E-commerce Platforms",
                    "Film & Television",
                    "Advertising Agencies",
                    "Fashion Magazines",
                    "Design Studios",
                    "Event Management",
                    "Bridal & Couture",
                    "Sustainable Fashion Brands"
                  ].map((sector, index) => (
                    <span
                      key={index}
                      className="bg-white text-[#0b6d41] px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
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
        <section className="py-16 bg-[#fbfbee]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
                  Department Facilities
                </h2>
                <div className="w-24 h-1 bg-[#ffde59] mx-auto mb-6"></div>
                <p className="text-gray-600 text-lg">
                  State-of-the-art infrastructure for hands-on learning
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Palette,
                    title: "Fashion Design Studio",
                    description: "Spacious design studio with professional mannequins, dress forms, design boards, and individual workstations for creative exploration and collection development.",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: Database,
                    title: "CAD/CAM Laboratory",
                    description: "Computer lab equipped with latest design software including Adobe Creative Suite, CorelDRAW, CAD pattern-making software, and 3D visualization tools.",
                    color: "bg-[#ffde59]"
                  },
                  {
                    icon: Scissors,
                    title: "Garment Construction Lab",
                    description: "Modern sewing lab with industrial sewing machines, overlock machines, button-hole machines, and specialized equipment for garment production.",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: LineChart,
                    title: "Textile Testing Lab",
                    description: "Well-equipped lab for fabric analysis, fiber identification, quality testing, and textile performance evaluation with industry-standard instruments.",
                    color: "bg-[#ffde59]"
                  },
                  {
                    icon: Sparkles,
                    title: "Embroidery & Print Studio",
                    description: "Specialized studio for surface ornamentation techniques including hand embroidery, machine embroidery, screen printing, and textile painting.",
                    color: "bg-[#0b6d41]"
                  },
                  {
                    icon: BookOpen,
                    title: "Fashion Resource Centre",
                    description: "Comprehensive library with fashion magazines, trend forecasting books, digital resources, fabric swatches, and industry publication subscriptions.",
                    color: "bg-[#ffde59]"
                  }
                ].map((facility, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className={`${facility.color} ${
                      facility.color === 'bg-[#ffde59]' ? 'text-[#0b6d41]' : 'text-white'
                    } p-6`}>
                      <facility.icon className="w-10 h-10 mb-2" />
                      <h3 className="text-xl font-bold">{facility.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700">{facility.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose JKKN */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
                  Why Choose JKKN for Fashion Design?
                </h2>
                <div className="w-24 h-1 bg-[#ffde59] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  {[
                    {
                      icon: Users,
                      title: "Industry-Experienced Learning Facilitators",
                      description: "Learn from faculty with extensive experience in fashion design, textile technology, and industry practices"
                    },
                    {
                      icon: Building,
                      title: "Strong Industry Partnerships",
                      description: "Collaborations with leading fashion brands, textile manufacturers, and export houses for internships and placements"
                    },
                    {
                      icon: Sparkles,
                      title: "Annual Fashion Shows",
                      description: "Showcase your creativity through college fashion shows, exhibitions, and participation in national design competitions"
                    },
                    {
                      icon: Globe,
                      title: "Global Design Exposure",
                      description: "Access to international fashion trends, guest lectures from industry experts, and exposure to global design practices"
                    },
                    {
                      icon: TrendingUp,
                      title: "Entrepreneurship Support",
                      description: "Incubation facilities and mentorship for students aspiring to launch their own fashion labels and businesses"
                    }
                  ].map((reason, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="bg-[#eaf1e2] w-12 h-12 rounded-full flex items-center justify-center">
                          <reason.icon className="w-6 h-6 text-[#0b6d41]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0b6d41] mb-2">{reason.title}</h3>
                        <p className="text-gray-700">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <div className="bg-[#eaf1e2] rounded-2xl p-8 shadow-xl">
                    <div className="aspect-square bg-gradient-to-br from-[#0b6d41] to-[#ffde59] rounded-xl flex items-center justify-center">
                      <div className="text-center text-white">
                        <Palette className="w-24 h-24 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Design Excellence</h3>
                        <p className="text-sm opacity-90">Creating Future Fashion Leaders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-[#fbfbee]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="w-24 h-1 bg-[#ffde59] mx-auto"></div>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#eaf1e2] transition-colors"
                    >
                      <span className="font-bold text-[#0b6d41] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#0b6d41] flex-shrink-0 transition-transform ${
                          activeFAQ === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeFAQ === index ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 py-4 bg-[#eaf1e2] text-gray-700">
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
        <section className="py-16 bg-gradient-to-r from-[#0b6d41] to-[#0a5a36]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Begin Your Fashion Journey?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join JKKN's B.Sc Textile and Fashion Design programme and turn your creative passion into a rewarding career
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#ffde59] hover:bg-[#f5d447] text-[#0b6d41] px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Apply Online
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Programmes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
                  Related Programmes
                </h2>
                <div className="w-24 h-1 bg-[#ffde59] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "B.Sc Costume Design & Fashion",
                    description: "Specialized programme focusing on costume design for performing arts and media",
                    duration: "3 Years"
                  },
                  {
                    title: "B.Des in Fashion Design",
                    description: "Advanced design programme with focus on innovation and creative leadership",
                    duration: "4 Years"
                  },
                  {
                    title: "Diploma in Fashion Technology",
                    description: "Short-term intensive course in garment technology and production management",
                    duration: "1 Year"
                  }
                ].map((programme, index) => (
                  <div key={index} className="bg-[#eaf1e2] rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="w-6 h-6 text-[#0b6d41]" />
                      <span className="text-sm font-semibold text-[#0b6d41]">{programme.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0b6d41] mb-3">{programme.title}</h3>
                    <p className="text-gray-700 mb-4">{programme.description}</p>
                    <button className="text-[#0b6d41] font-semibold hover:underline flex items-center gap-1">
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
