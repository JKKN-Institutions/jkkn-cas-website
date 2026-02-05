'use client';

import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Users,
  MapPin,
  Clock,
  Award,
  TrendingUp,
  CheckCircle,
  Microscope,
  FlaskConical,
  Building2,
  Fish,
  Database,
  Home as HomeIcon,
  Briefcase,
  Globe,
  Leaf,
  ChevronRight,
  Calendar,
  FileText,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

export default function BScZoologyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative min-h-[500px] md:min-h-[550px] flex items-center bg-gradient-to-br from-[#0b6d41] via-[#0d8251] to-[#0b6d41] overflow-hidden">
        {/* Background Pattern Overlays */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#ffde59] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffde59] rounded-full blur-3xl"></div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white py-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <Award className="w-4 h-4 text-[#ffde59]" />
              <span>UGC Recognized Programme</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white drop-shadow-lg">
              Bachelor of Science in Zoology
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/95 mb-6 drop-shadow-md tracking-wide">
              Explore the Fascinating World of Animal Sciences
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm">
                <Clock className="w-4 h-4" />
                <span>3 Years (6 Semesters)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm">
                <BookOpen className="w-4 h-4" />
                <span>Full-time</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm">
                <GraduationCap className="w-4 h-4" />
                <span>B.Sc Degree</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm">
                <MapPin className="w-4 h-4" />
                <span>On Campus</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#admission-heading"
                className="inline-flex items-center gap-2 bg-[#ffde59] text-[#0b6d41] px-7 py-3 rounded-lg font-semibold text-base hover:bg-[#ffd740] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#curriculum-heading"
                className="inline-flex items-center gap-2 bg-transparent text-white px-7 py-3 rounded-lg font-semibold text-base border-2 border-white/80 hover:bg-white hover:text-[#0b6d41] transition-all duration-300"
              >
                View Curriculum
                <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="relative z-20 -mt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickInfoCard
              icon={<Award />}
              title="Accredited Institution"
              description="NAAC A+ Accredited"
            />
            <QuickInfoCard
              icon={<Microscope />}
              title="Research Labs"
              description="6+ Specialized Labs"
            />
            <QuickInfoCard
              icon={<TrendingUp />}
              title="Placement Record"
              highlight="95%"
              description="Success Rate"
            />
            <QuickInfoCard
              icon={<MapPin />}
              title="Study Trips"
              description="Annual Field Visits"
            />
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section id="overview-heading" className="py-12 md:py-16 lg:py-20 bg-[#fbfbee]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-6">
                Programme Overview
                <span className="block w-16 h-1 bg-[#ffde59] mt-3 rounded"></span>
              </h2>

              <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  The <strong>Bachelor of Science (B.Sc) in Zoology</strong> is a comprehensive 3-year undergraduate programme designed to provide students with in-depth knowledge of animal biology, diversity, evolution, ecology, and conservation. The curriculum blends theoretical learning with extensive practical laboratory sessions, field studies, and research projects.
                </p>
                <p>
                  Students explore fascinating topics including animal physiology, genetics, biotechnology, entomology, wildlife conservation, and environmental biology. The programme emphasizes hands-on learning through modern laboratory facilities, research opportunities, and field excursions to wildlife sanctuaries and marine ecosystems.
                </p>
                <p>
                  Our department is equipped with state-of-the-art laboratories, a zoological museum, aquarium facilities, and molecular biology research units. Graduates are well-prepared for careers in research, healthcare, biotechnology, environmental consulting, wildlife conservation, and academic sectors.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <HighlightItem icon={<Microscope />} text="Advanced Laboratory Facilities" />
                <HighlightItem icon={<BookOpen />} text="Comprehensive Curriculum" />
                <HighlightItem icon={<Users />} text="Expert Faculty Members" />
                <HighlightItem icon={<Leaf />} text="Field Study Opportunities" />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#0b6d41] rounded-2xl p-8 text-white shadow-xl">
                <div className="text-center mb-6">
                  <Microscope className="w-16 h-16 mx-auto mb-4 text-[#ffde59]" />
                  <h3 className="text-2xl font-bold">Zoology Laboratory</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <LabFeature text="Advanced Microscopy Units" />
                  <LabFeature text="Specimen Collection & Museum" />
                  <LabFeature text="Molecular Biology Equipment" />
                  <LabFeature text="Research Project Support" />
                  <LabFeature text="Field Study Equipment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Admission */}
      <section id="eligibility-heading" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
              Eligibility & Admission Criteria
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple and transparent admission process for aspiring zoology students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EligibilityCard
              icon={<GraduationCap />}
              title="Academic Qualification"
              items={[
                "Passed Higher Secondary (10+2) or equivalent",
                "Minimum 50% aggregate marks (45% for reserved categories)",
                "Biology as a mandatory subject in 12th standard",
                "Physics and Chemistry preferred"
              ]}
            />
            <EligibilityCard
              icon={<BookOpen />}
              title="Accepted Streams"
              items={[
                "Biology with Maths (Bio-Maths group)",
                "Biology with Computer Science",
                "Pure Biology stream",
                "State/CBSE/ICSE board recognized"
              ]}
            />
            <EligibilityCard
              icon={<FileText />}
              title="Documents Required"
              items={[
                "10th & 12th mark sheets and certificates",
                "Transfer certificate (TC)",
                "Community certificate (if applicable)",
                "Passport-size photographs",
                "Aadhaar card & address proof",
                "Migration certificate (for other university students)"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Programme Curriculum */}
      <section id="curriculum-heading" className="py-12 md:py-16 lg:py-20 bg-[#fbfbee]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
              Programme Curriculum
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A well-structured six-semester curriculum covering all aspects of zoology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SemesterCard
              semester="Semester I"
              subjects={[
                { name: "Non-Chordates I", type: "Theory" },
                { name: "Non-Chordates I", type: "Practical" },
                { name: "Allied Paper I", type: "Theory" },
                { name: "Allied Paper I", type: "Practical" },
                { name: "Language Paper I", type: "Theory" },
                { name: "Environmental Studies", type: "Theory" }
              ]}
            />
            <SemesterCard
              semester="Semester II"
              subjects={[
                { name: "Non-Chordates II & Chordata", type: "Theory" },
                { name: "Non-Chordates II & Chordata", type: "Practical" },
                { name: "Allied Paper II", type: "Theory" },
                { name: "Allied Paper II", type: "Practical" },
                { name: "Language Paper II", type: "Theory" },
                { name: "Value Education", type: "Theory" }
              ]}
            />
            <SemesterCard
              semester="Semester III"
              subjects={[
                { name: "Animal Physiology", type: "Theory" },
                { name: "Animal Physiology", type: "Practical" },
                { name: "Allied Paper III", type: "Theory" },
                { name: "Allied Paper III", type: "Practical" },
                { name: "Core Elective", type: "Theory" },
                { name: "Skill-Based Course", type: "Practical" }
              ]}
            />
            <SemesterCard
              semester="Semester IV"
              subjects={[
                { name: "Genetics & Evolution", type: "Theory" },
                { name: "Genetics & Evolution", type: "Practical" },
                { name: "Cell Biology & Developmental Biology", type: "Theory" },
                { name: "Cell Biology & Developmental Biology", type: "Practical" },
                { name: "Core Elective", type: "Theory" },
                { name: "Extension Activities", type: "Practical" }
              ]}
            />
            <SemesterCard
              semester="Semester V"
              subjects={[
                { name: "Ecology & Ethology", type: "Theory" },
                { name: "Ecology & Ethology", type: "Practical" },
                { name: "Biotechnology & Microbiology", type: "Theory" },
                { name: "Biotechnology & Microbiology", type: "Practical" },
                { name: "Elective Paper", type: "Theory" },
                { name: "Project Work", type: "Practical" }
              ]}
            />
            <SemesterCard
              semester="Semester VI"
              subjects={[
                { name: "Applied Zoology & Immunology", type: "Theory" },
                { name: "Applied Zoology & Immunology", type: "Practical" },
                { name: "Molecular Biology & Bioinformatics", type: "Theory" },
                { name: "Molecular Biology & Bioinformatics", type: "Practical" },
                { name: "Elective Paper", type: "Theory" },
                { name: "Project & Viva-Voce", type: "Practical" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Programme Learning Outcomes */}
      <section id="outcomes-heading" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
              Programme Learning Outcomes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Skills and knowledge you will gain upon completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <OutcomeCard
              icon={<FlaskConical />}
              title="Scientific Methodology"
              description="Master scientific research methods, experimental design, data collection, statistical analysis, and critical evaluation of zoological literature."
            />
            <OutcomeCard
              icon={<Microscope />}
              title="Taxonomic Expertise"
              description="Identify, classify, and understand the diversity of animal species from invertebrates to vertebrates using modern taxonomic approaches."
            />
            <OutcomeCard
              icon={<FlaskConical />}
              title="Laboratory Proficiency"
              description="Gain hands-on experience with microscopy, dissection, molecular techniques, histological preparations, and advanced analytical instruments."
            />
            <OutcomeCard
              icon={<Leaf />}
              title="Ecological Understanding"
              description="Comprehend ecosystem dynamics, biodiversity conservation, wildlife management, and environmental impact assessment methodologies."
            />
            <OutcomeCard
              icon={<Database />}
              title="Biotechnological Skills"
              description="Apply biotechnology techniques including genetic engineering, tissue culture, PCR, gel electrophoresis, and bioinformatics tools."
            />
            <OutcomeCard
              icon={<FileText />}
              title="Professional Communication"
              description="Develop scientific writing, presentation skills, research documentation, and ability to communicate complex biological concepts effectively."
            />
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section id="careers-heading" className="py-12 md:py-16 lg:py-20 bg-[#fbfbee]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
              Career Opportunities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diverse career paths in research, healthcare, education, and conservation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <CareerCard
              icon={<Microscope />}
              title="Research Scientist"
              description="Universities, CSIR labs, ICMR, pharmaceutical R&D"
            />
            <CareerCard
              icon={<Leaf />}
              title="Wildlife Biologist"
              description="Forest departments, wildlife sanctuaries, NGOs"
            />
            <CareerCard
              icon={<FlaskConical />}
              title="Medical Lab Technician"
              description="Hospitals, diagnostic centers, pathology labs"
            />
            <CareerCard
              icon={<GraduationCap />}
              title="Educator / Lecturer"
              description="Schools, colleges, coaching institutes"
            />
            <CareerCard
              icon={<Building2 />}
              title="Pharmaceutical Researcher"
              description="Drug development, clinical trials, quality control"
            />
            <CareerCard
              icon={<Globe />}
              title="Environmental Consultant"
              description="Impact assessment, conservation projects"
            />
            <CareerCard
              icon={<Briefcase />}
              title="Government Services"
              description="Forest Service, UPSC, state PSC examinations"
            />
            <CareerCard
              icon={<Database />}
              title="Biotechnology Specialist"
              description="Biotech firms, genetic research, bioinformatics"
            />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0b6d41] mb-6 text-center">
              Key Employment Sectors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SectorTag text="Pharmaceutical Industry" />
              <SectorTag text="Biotechnology Firms" />
              <SectorTag text="Research Institutes" />
              <SectorTag text="Wildlife Conservation" />
              <SectorTag text="Healthcare Sector" />
              <SectorTag text="Academic Institutions" />
              <SectorTag text="Government Agencies" />
              <SectorTag text="Environmental NGOs" />
              <SectorTag text="Aquaculture Industry" />
              <SectorTag text="Forensic Laboratories" />
              <SectorTag text="Veterinary Services" />
              <SectorTag text="Biological Surveys" />
            </div>
          </div>
        </div>
      </section>

      {/* Department Facilities */}
      <section id="facilities-heading" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
              Department Facilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              State-of-the-art infrastructure for comprehensive learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FacilityCard
              color="bg-[#0b6d41]"
              icon={<Microscope />}
              title="Zoology Lab"
              features={[
                "Advanced compound microscopes",
                "Stereo microscopes for dissection",
                "Specimen preservation units",
                "Digital imaging systems"
              ]}
            />
            <FacilityCard
              color="bg-[#ffde59]"
              iconColor="text-[#0b6d41]"
              textColor="text-[#0b6d41]"
              icon={<Award />}
              title="Zoological Museum"
              features={[
                "Preserved animal specimens",
                "Taxidermy collections",
                "Skeletal displays",
                "Educational models"
              ]}
            />
            <FacilityCard
              color="bg-[#0b6d41]"
              icon={<FlaskConical />}
              title="Molecular Biology Lab"
              features={[
                "PCR & electrophoresis units",
                "Centrifuges and incubators",
                "Gel documentation systems",
                "Genetic analysis equipment"
              ]}
            />
            <FacilityCard
              color="bg-[#0ea5e9]"
              icon={<Fish />}
              title="Aquarium & Fish Culture Unit"
              features={[
                "Freshwater aquarium setups",
                "Marine ecosystem models",
                "Fish breeding facilities",
                "Water quality monitoring"
              ]}
            />
            <FacilityCard
              color="bg-[#0b6d41]"
              icon={<Database />}
              title="Bioinformatics Lab"
              features={[
                "High-speed computers",
                "Sequence analysis software",
                "Phylogenetic tools",
                "Protein modeling applications"
              ]}
            />
            <FacilityCard
              color="bg-[#ffde59]"
              iconColor="text-[#0b6d41]"
              textColor="text-[#0b6d41]"
              icon={<HomeIcon />}
              title="Animal House Facility"
              features={[
                "Small animal breeding",
                "Ethical research protocols",
                "CPCSEA guidelines followed",
                "Veterinary supervision"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Field Study Trip */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#0b6d41] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-[#ffde59]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Field Study Trip
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Annual educational excursions to wildlife sanctuaries, marine biology stations, zoos, biodiversity parks, and research institutes. Students gain practical field experience in animal behavior observation, ecological surveys, and conservation practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                Wildlife Sanctuaries
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                Marine Biology Stations
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                Biodiversity Parks
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                Research Institutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Programme */}
      <section id="why-heading" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
              Why Choose Our B.Sc Zoology Programme?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WhyChooseCard
              icon={<Users />}
              title="Expert Learning Facilitators"
              description="Learn from experienced faculty with Ph.D. qualifications, active research publications, and industry experience."
            />
            <WhyChooseCard
              icon={<FlaskConical />}
              title="Hands-on Laboratory Experience"
              description="Extensive practical sessions with modern equipment, microscopy, molecular techniques, and field instruments."
            />
            <WhyChooseCard
              icon={<MapPin />}
              title="Field Study Excursions"
              description="Annual trips to wildlife sanctuaries, research stations, marine ecosystems, and biodiversity conservation centers."
            />
            <WhyChooseCard
              icon={<Briefcase />}
              title="Industry Internships"
              description="Collaborate with pharmaceutical companies, biotech firms, research labs, and environmental organizations."
            />
            <WhyChooseCard
              icon={<TrendingUp />}
              title="Strong Placement Support"
              description="Dedicated placement cell, career counseling, competitive exam coaching, and recruitment assistance."
            />
            <WhyChooseCard
              icon={<Microscope />}
              title="Research Opportunities"
              description="Engage in faculty-guided research projects, present at conferences, and publish in peer-reviewed journals."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-heading" className="py-12 md:py-16 lg:py-20 bg-[#fbfbee]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem
              question="What is the duration of the B.Sc Zoology programme?"
              answer="The B.Sc Zoology programme is a 3-year full-time undergraduate degree comprising six semesters with practical laboratory sessions."
            />
            <FAQItem
              question="What are the career opportunities after B.Sc Zoology?"
              answer="Graduates can pursue careers in wildlife conservation, pharmaceutical research, biotechnology, environmental consulting, teaching, forensic science, healthcare, and government services including Forest Service and UPSC examinations."
            />
            <FAQItem
              question="What is the eligibility criteria for B.Sc Zoology admission?"
              answer="Candidates must have completed Higher Secondary (10+2) from a recognized board with Biology as a subject. Minimum aggregate marks requirement varies by institution, typically 50% for general category."
            />
            <FAQItem
              question="Can I pursue higher studies after B.Sc Zoology?"
              answer="Yes, graduates can pursue M.Sc in Zoology, Wildlife Biology, Marine Biology, Biotechnology, Environmental Science, or prepare for competitive exams like UPSC, NET, GATE for research and teaching positions."
            />
            <FAQItem
              question="Are there any field study trips included in the programme?"
              answer="Yes, the programme includes annual field trips to wildlife sanctuaries, marine biology stations, biodiversity parks, and research institutes to provide hands-on ecological and conservation experience."
            />
            <FAQItem
              question="What laboratory facilities are available for students?"
              answer="Students have access to advanced microscopy labs, molecular biology equipment, zoological museum, aquarium facilities, bioinformatics lab, and animal house with modern research instruments."
            />
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section id="admission-heading" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#ffde59] via-[#ffd740] to-[#ffde59]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-6">
              Begin Your Journey in Zoological Sciences
            </h2>
            <p className="text-lg text-[#0b6d41]/80 mb-8">
              Join our B.Sc Zoology programme and embark on an exciting career exploring the animal kingdom, contributing to scientific research, and making a difference in wildlife conservation and healthcare sectors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#0b6d41] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#094d31] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Online
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-[#0b6d41] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                Download Brochure
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programmes */}
      <section id="related-heading" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
              Explore Related Programmes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RelatedProgrammeCard
              color="bg-[#0b6d41]"
              title="M.Sc Zoology"
              description="Advanced postgraduate programme in zoological research and specialization"
              duration="2 Years"
              type="Postgraduate"
            />
            <RelatedProgrammeCard
              color="bg-[#ffde59]"
              textColor="text-[#0b6d41]"
              title="B.Sc Botany"
              description="Comprehensive study of plant sciences, ecology, and biotechnology"
              duration="3 Years"
              type="Undergraduate"
            />
            <RelatedProgrammeCard
              color="bg-[#0ea5e9]"
              title="B.Sc Biotechnology"
              description="Interdisciplinary programme combining biology, technology, and research"
              duration="3 Years"
              type="Undergraduate"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Component: Quick Info Card
function QuickInfoCard({ icon, title, highlight, description }: {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#ffde59] to-[#ffd740] rounded-lg flex items-center justify-center">
        <div className="text-[#0b6d41]">
          {React.cloneElement(icon, { className: 'w-7 h-7' })}
        </div>
      </div>
      <h3 className="text-base font-bold text-[#0b6d41] mb-2">{title}</h3>
      {highlight && (
        <div className="text-2xl font-bold text-[#ffde59] mb-1">{highlight}</div>
      )}
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

// Component: Highlight Item
function HighlightItem({ icon, text }: { icon: React.ReactElement<{ className?: string }>; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-[#0b6d41] rounded-lg flex items-center justify-center flex-shrink-0">
        <div className="text-white">
          {React.cloneElement(icon, { className: 'w-5 h-5' })}
        </div>
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}

// Component: Lab Feature
function LabFeature({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

// Component: Eligibility Card
function EligibilityCard({ icon, title, items }: {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-[#0b6d41] rounded-lg flex items-center justify-center mb-4">
        <div className="text-white">
          {React.cloneElement(icon, { className: 'w-6 h-6' })}
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#0b6d41] mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-[#ffde59] flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component: Semester Card
function SemesterCard({ semester, subjects }: {
  semester: string;
  subjects: Array<{ name: string; type: string }>;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#0b6d41]">
      <h4 className="text-xl font-bold text-[#0b6d41] mb-4">{semester}</h4>
      <div className="space-y-2">
        {subjects.map((subject, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
            <span className="text-sm text-gray-700">{subject.name}</span>
            <span className="text-xs px-3 py-1 bg-[#fbfbee] text-[#0b6d41] rounded-full font-medium">
              {subject.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Component: Outcome Card
function OutcomeCard({ icon, title, description }: {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 bg-[#ffde59] rounded-lg flex items-center justify-center mb-4">
        <div className="text-[#0b6d41]">
          {React.cloneElement(icon, { className: 'w-6 h-6' })}
        </div>
      </div>
      <h3 className="text-lg font-bold text-[#0b6d41] mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

// Component: Career Card
function CareerCard({ icon, title, description }: {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 bg-[#0b6d41] rounded-lg flex items-center justify-center mb-4">
        <div className="text-white">
          {React.cloneElement(icon, { className: 'w-6 h-6' })}
        </div>
      </div>
      <h3 className="text-lg font-bold text-[#0b6d41] mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

// Component: Sector Tag
function SectorTag({ text }: { text: string }) {
  return (
    <div className="px-4 py-2 bg-[#fbfbee] text-[#0b6d41] rounded-lg text-sm font-medium text-center hover:bg-[#0b6d41] hover:text-white transition-all duration-300 cursor-default">
      {text}
    </div>
  );
}

// Component: Facility Card
function FacilityCard({ color, icon, title, features, iconColor = 'text-white', textColor = 'text-white' }: {
  color: string;
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  features: string[];
  iconColor?: string;
  textColor?: string;
}) {
  return (
    <div className={`${color} rounded-xl p-6 ${textColor} shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
      <div className="text-center mb-4">
        <div className={iconColor}>
          {React.cloneElement(icon, { className: 'w-12 h-12 mx-auto mb-3' })}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${color === 'bg-[#ffde59]' ? 'text-[#0b6d41]' : 'text-[#ffde59]'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component: Why Choose Card
function WhyChooseCard({ icon, title, description }: {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#fbfbee] rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 bg-[#ffde59] rounded-lg flex items-center justify-center mb-4">
        <div className="text-[#0b6d41]">
          {React.cloneElement(icon, { className: 'w-6 h-6' })}
        </div>
      </div>
      <h4 className="text-lg font-bold text-[#0b6d41] mb-3">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

// Component: FAQ Item
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#0b6d41] pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#0b6d41] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#0b6d41] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

// Component: Related Programme Card
function RelatedProgrammeCard({ color, title, description, duration, type, textColor = 'text-white' }: {
  color: string;
  title: string;
  description: string;
  duration: string;
  type: string;
  textColor?: string;
}) {
  return (
    <div className={`${color} rounded-xl p-6 ${textColor} shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className={`text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3 ${
            color === 'bg-[#ffde59]' ? 'bg-[#0b6d41] text-white' : 'bg-white/20'
          }`}>
            {type}
          </div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
        </div>
      </div>
      <p className={`text-sm mb-4 ${color === 'bg-[#ffde59]' ? 'text-[#0b6d41]/80' : 'text-white/90'}`}>
        {description}
      </p>
      <div className="flex items-center gap-2 text-sm">
        <Clock className="w-4 h-4" />
        <span>{duration}</span>
      </div>
    </div>
  );
}
