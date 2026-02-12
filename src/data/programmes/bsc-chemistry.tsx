/**
 * B.Sc Chemistry Programme Data
 *
 * Centralized data for the B.Sc Chemistry programme page.
 * Used with ProgrammePage template.
 */

import {
  GraduationCap, Users, Award, Briefcase, BookOpen, FileText,
  School, FlaskConical, Microscope, TestTube, Atom, Beaker,
  Brain, Lightbulb, Building2, Globe, Target
} from 'lucide-react';
import type { ProgrammePageProps } from '@/components/templates/ProgrammePage';

export const bscChemistryData: ProgrammePageProps = {
  // Hero Section
  badge: 'UGC Recognized Programme',
  title: 'Bachelor of Science in Chemistry',
  subtitle: 'Aided Programme',
  tagline: 'Exploring Matter, Reactions & Innovations',
  duration: '3 Years Duration',
  semesters: '6 Semesters',
  type: 'Full-Time Programme',
  heroColor: '#eaf1e2',

  // Quick Info Cards
  quickInfo: [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      stat: 'NAAC',
      title: 'Accredited Institution',
      desc: 'Quality assured education'
    },
    {
      icon: <Users className="w-7 h-7" />,
      stat: '15:1',
      title: 'Learner-Facilitator Ratio',
      desc: 'Personalized attention'
    },
    {
      icon: <Briefcase className="w-7 h-7" />,
      stat: '85%+',
      title: 'Placement Record',
      desc: 'Career opportunities assured'
    },
    {
      icon: <Award className="w-7 h-7" />,
      stat: '₹3.5L',
      title: 'Average Package',
      desc: 'Competitive starting salary'
    }
  ],

  // Programme Overview
  overviewBadge: 'About the Programme',
  overviewTitle: 'Programme Overview',
  overviewDescription: [
    'The Bachelor of Science in Chemistry programme offers a comprehensive study of chemical sciences, exploring the composition, structure, properties, and reactions of matter. Our curriculum combines theoretical knowledge with extensive practical training in modern laboratories equipped with advanced instrumentation and research facilities.',
    'Students develop strong analytical, research, and problem-solving skills through hands-on experiments, project work, and industry exposure. The programme prepares graduates for diverse careers in chemical industries, pharmaceuticals, research institutions, environmental sciences, quality control, and education sectors.'
  ],
  overviewHighlights: [
    'State-of-the-art Labs',
    'Expert Learning Facilitators',
    'Research Opportunities',
    'Industry Collaborations'
  ],
  overviewImage: 'https://placehold.co/600x450/0b6d41/FFFFFF?text=Chemistry+Laboratory',
  establishedYear: '1954',

  // Eligibility
  eligibility: [
    {
      icon: <School className="w-8 h-8 text-white" />,
      title: 'Academic Qualification',
      items: [
        'Higher Secondary (10+2) from recognized board',
        'Minimum aggregate marks as per norms',
        '45% for reserved categories',
        'Science stream students'
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: 'Subject Requirements',
      items: [
        'Chemistry as mandatory subject',
        'Physics or Mathematics preferred',
        'Science stream with Chemistry',
        'Laboratory experience beneficial'
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'Documents Required',
      items: [
        '10th & 12th Mark Sheets',
        'Transfer Certificate',
        'Community Certificate',
        'Passport Size Photographs',
        'Aadhaar Card Copy'
      ]
    }
  ],

  // Curriculum
  curriculum: [
    {
      year: 1,
      semesters: [
        {
          number: 1,
          subjects: [
            'Inorganic Chemistry I',
            'Physical Chemistry I',
            'Mathematics for Chemistry',
            'Environmental Studies',
            'Practical Lab I'
          ]
        },
        {
          number: 2,
          subjects: [
            'Organic Chemistry I',
            'Analytical Chemistry',
            'Biochemistry Basics',
            'Computer Applications',
            'Practical Lab II'
          ]
        }
      ]
    },
    {
      year: 2,
      semesters: [
        {
          number: 3,
          subjects: [
            'Inorganic Chemistry II',
            'Physical Chemistry II',
            'Instrumental Methods',
            'Green Chemistry',
            'Practical Lab III'
          ]
        },
        {
          number: 4,
          subjects: [
            'Organic Chemistry II',
            'Industrial Chemistry',
            'Medicinal Chemistry',
            'Research Methodology',
            'Practical Lab IV'
          ]
        }
      ]
    },
    {
      year: 3,
      semesters: [
        {
          number: 5,
          subjects: [
            'Advanced Inorganic Chemistry',
            'Quantum Chemistry',
            'Polymer Chemistry',
            'Elective I',
            'Project Work I'
          ]
        },
        {
          number: 6,
          subjects: [
            'Advanced Organic Chemistry',
            'Spectroscopy',
            'Nanochemistry',
            'Elective II',
            'Project Work II'
          ]
        }
      ]
    }
  ],

  // Learning Outcomes
  outcomes: [
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'Laboratory Excellence',
      description: 'Master advanced laboratory techniques and safety protocols'
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Analytical Skills',
      description: 'Develop strong analytical and research capabilities'
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'Practical Knowledge',
      description: 'Apply theoretical concepts to real-world scenarios'
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Chemical Understanding',
      description: 'Deep understanding of chemical principles and reactions'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Problem Solving',
      description: 'Critical thinking and scientific problem-solving abilities'
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: 'Research Skills',
      description: 'Conduct independent research and experiments'
    }
  ],

  // Career Opportunities
  careerDescription: 'Graduates can pursue diverse career paths in chemical industries, pharmaceuticals, research, quality control, and academia with excellent growth prospects.',
  careers: [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Chemical Industries',
      roles: [
        'Chemical Engineer',
        'Process Chemist',
        'Production Supervisor',
        'Quality Control Manager'
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Research & Development',
      roles: [
        'Research Scientist',
        'Laboratory Analyst',
        'R&D Associate',
        'Chemical Researcher'
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Other Opportunities',
      roles: [
        'Pharmaceutical Chemist',
        'Environmental Analyst',
        'Food Chemist',
        'Forensic Scientist',
        'Teaching & Academia'
      ]
    }
  ],

  // Facilities
  facilities: [
    {
      icon: <FlaskConical className="w-10 h-10" />,
      title: 'Advanced Laboratories',
      description: 'Modern chemistry labs with latest equipment and safety measures'
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      title: 'Research Center',
      description: 'Dedicated research facility for student projects and innovation'
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: 'Digital Library',
      description: 'Extensive collection of chemistry journals and research papers'
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'Industry Tie-ups',
      description: 'Partnerships with leading chemical companies for internships'
    }
  ],

  // Why Choose
  whyChoose: [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'NAAC Accredited',
      description: 'Quality education with national recognition and standards'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Faculty',
      description: 'Learn from experienced PhD holders and industry professionals'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Placement Support',
      description: 'Dedicated placement cell with 85%+ success rate'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Practical Focus',
      description: 'Hands-on training with state-of-the-art laboratory facilities'
    }
  ],

  // FAQ
  faq: [
    {
      question: 'What is the duration of the B.Sc Chemistry programme?',
      answer: 'The programme is 3 years (6 semesters) full-time undergraduate course.'
    },
    {
      question: 'What are the career opportunities after B.Sc Chemistry?',
      answer: 'Graduates can work in chemical industries, pharmaceuticals, research labs, quality control, environmental agencies, or pursue higher education like M.Sc or PhD.'
    },
    {
      question: 'Is this programme UGC recognized?',
      answer: 'Yes, the programme is fully recognized by UGC and affiliated to Periyar University with NAAC accreditation.'
    },
    {
      question: 'What is the fee structure?',
      answer: 'As an aided programme, the fees are subsidized by the government. Please contact the admission office for current fee details.'
    },
    {
      question: 'Are there research opportunities for students?',
      answer: 'Yes, students can participate in research projects, present papers at conferences, and work on innovative chemistry projects.'
    }
  ],

  // Admission
  admissionUrl: 'https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8'
};
