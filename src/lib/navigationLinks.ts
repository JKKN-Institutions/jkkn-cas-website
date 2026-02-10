import {
  Home,
  Info,
  GraduationCap,
  Building2,
  FileCheck,
  Warehouse,
  UserPlus,
  FileText,
  LayoutGrid,
  Phone,
  LucideIcon
} from 'lucide-react';
import { BottomNavGroup, FlatMenuItem } from '@/components/BottomNav/types';

// Navigation structure for CAS website
export function getNavigationGroups(pathname: string): BottomNavGroup[] {
  return [
    // Group 1: Home
    {
      id: 'home',
      groupLabel: 'Home',
      icon: Home,
      menus: [
        {
          href: '/',
          label: 'Home',
          icon: Home,
          active: pathname === '/'
        }
      ]
    },

    // Group 2: About
    {
      id: 'about',
      groupLabel: 'About',
      icon: Info,
      menus: [
        {
          href: '/about/our-institution',
          label: 'Our Institution',
          icon: Info,
          active: pathname === '/about/our-institution'
        },
        {
          href: '/about/our-trust',
          label: 'Our Trust',
          icon: Info,
          active: pathname === '/about/our-trust'
        },
        {
          href: '/about/vision-mission',
          label: 'Vision & Mission',
          icon: Info,
          active: pathname === '/about/vision-mission'
        },
        {
          href: '/about/our-management',
          label: 'Our Management',
          icon: Info,
          active: pathname === '/about/our-management'
        }
      ]
    },

    // Group 3: Programmes
    {
      id: 'programmes',
      groupLabel: 'Programmes',
      icon: GraduationCap,
      menus: [
        // Aided UG
        {
          href: '/programmes/aided/ug/ba-english',
          label: 'B.A. English',
          icon: GraduationCap,
          parentLabel: 'Aided UG',
          active: pathname === '/programmes/aided/ug/ba-english'
        },
        {
          href: '/programmes/aided/ug/ba-history',
          label: 'B.A. History',
          icon: GraduationCap,
          parentLabel: 'Aided UG',
          active: pathname === '/programmes/aided/ug/ba-history'
        },
        {
          href: '/programmes/aided/ug/bsc-chemistry',
          label: 'B.Sc. Chemistry',
          icon: GraduationCap,
          parentLabel: 'Aided UG',
          active: pathname === '/programmes/aided/ug/bsc-chemistry'
        },
        {
          href: '/programmes/aided/ug/bsc-maths',
          label: 'B.Sc. Maths',
          icon: GraduationCap,
          parentLabel: 'Aided UG',
          active: pathname === '/programmes/aided/ug/bsc-maths'
        },
        {
          href: '/programmes/aided/ug/bsc-zoology',
          label: 'B.Sc. Zoology',
          icon: GraduationCap,
          parentLabel: 'Aided UG',
          active: pathname === '/programmes/aided/ug/bsc-zoology'
        },
        {
          href: '/programmes/aided/ug/bcom',
          label: 'B.Com',
          icon: GraduationCap,
          parentLabel: 'Aided UG',
          active: pathname === '/programmes/aided/ug/bcom'
        },
        // Aided PG
        {
          href: '/programmes/aided/pg/mca',
          label: 'MCA',
          icon: GraduationCap,
          parentLabel: 'Aided PG',
          active: pathname === '/programmes/aided/pg/mca'
        },
        {
          href: '/programmes/aided/pg/ma-english',
          label: 'M.A. English',
          icon: GraduationCap,
          parentLabel: 'Aided PG',
          active: pathname === '/programmes/aided/pg/ma-english'
        },
        {
          href: '/programmes/aided/pg/msc-chemistry',
          label: 'M.Sc. Chemistry',
          icon: GraduationCap,
          parentLabel: 'Aided PG',
          active: pathname === '/programmes/aided/pg/msc-chemistry'
        },
        {
          href: '/programmes/aided/pg/msc-maths',
          label: 'M.Sc. Maths',
          icon: GraduationCap,
          parentLabel: 'Aided PG',
          active: pathname === '/programmes/aided/pg/msc-maths'
        },
        {
          href: '/programmes/aided/pg/mcom',
          label: 'M.Com',
          icon: GraduationCap,
          parentLabel: 'Aided PG',
          active: pathname === '/programmes/aided/pg/mcom'
        },
        // Aided PhD
        {
          href: '/programmes/aided/phd/commerce',
          label: 'Commerce',
          icon: GraduationCap,
          parentLabel: 'Aided PhD',
          active: pathname === '/programmes/aided/phd/commerce'
        },
        {
          href: '/programmes/aided/phd/computer-science',
          label: 'Computer Science',
          icon: GraduationCap,
          parentLabel: 'Aided PhD',
          active: pathname === '/programmes/aided/phd/computer-science'
        },
        {
          href: '/programmes/aided/phd/english',
          label: 'English',
          icon: GraduationCap,
          parentLabel: 'Aided PhD',
          active: pathname === '/programmes/aided/phd/english'
        },
        {
          href: '/programmes/aided/phd/mathematics',
          label: 'Mathematics',
          icon: GraduationCap,
          parentLabel: 'Aided PhD',
          active: pathname === '/programmes/aided/phd/mathematics'
        },
        // Self-Finance UG
        {
          href: '/programmes/self-finance/ug/bba',
          label: 'BBA',
          icon: GraduationCap,
          parentLabel: 'Self-Finance UG',
          active: pathname === '/programmes/self-finance/ug/bba'
        },
        {
          href: '/programmes/self-finance/ug/bca',
          label: 'BCA',
          icon: GraduationCap,
          parentLabel: 'Self-Finance UG',
          active: pathname === '/programmes/self-finance/ug/bca'
        },
        {
          href: '/programmes/self-finance/ug/bsc-it',
          label: 'B.Sc. IT',
          icon: GraduationCap,
          parentLabel: 'Self-Finance UG',
          active: pathname === '/programmes/self-finance/ug/bsc-it'
        },
        {
          href: '/programmes/self-finance/ug/bsc-cs',
          label: 'B.Sc. CS',
          icon: GraduationCap,
          parentLabel: 'Self-Finance UG',
          active: pathname === '/programmes/self-finance/ug/bsc-cs'
        },
        {
          href: '/programmes/self-finance/ug/bcom-ca',
          label: 'B.Com CA',
          icon: GraduationCap,
          parentLabel: 'Self-Finance UG',
          active: pathname === '/programmes/self-finance/ug/bcom-ca'
        },
        // Self-Finance PG
        {
          href: '/programmes/self-finance/pg/mba',
          label: 'MBA',
          icon: GraduationCap,
          parentLabel: 'Self-Finance PG',
          active: pathname === '/programmes/self-finance/pg/mba'
        },
        {
          href: '/programmes/self-finance/pg/msc-it',
          label: 'M.Sc. IT',
          icon: GraduationCap,
          parentLabel: 'Self-Finance PG',
          active: pathname === '/programmes/self-finance/pg/msc-it'
        },
        {
          href: '/programmes/self-finance/pg/msc-cs',
          label: 'M.Sc. CS',
          icon: GraduationCap,
          parentLabel: 'Self-Finance PG',
          active: pathname === '/programmes/self-finance/pg/msc-cs'
        }
      ]
    },

    // Group 3: Departments
    {
      id: 'departments',
      groupLabel: 'Departments',
      icon: Building2,
      menus: [
        // Aided Departments
        {
          href: '/departments/aided/english',
          label: 'English',
          icon: Building2,
          parentLabel: 'Aided',
          active: pathname === '/departments/aided/english'
        },
        {
          href: '/departments/aided/tamil',
          label: 'Tamil',
          icon: Building2,
          parentLabel: 'Aided',
          active: pathname === '/departments/aided/tamil'
        },
        {
          href: '/departments/aided/history',
          label: 'History',
          icon: Building2,
          parentLabel: 'Aided',
          active: pathname === '/departments/aided/history'
        },
        {
          href: '/departments/aided/chemistry',
          label: 'Chemistry',
          icon: Building2,
          parentLabel: 'Aided',
          active: pathname === '/departments/aided/chemistry'
        },
        {
          href: '/departments/aided/mathematics',
          label: 'Mathematics',
          icon: Building2,
          parentLabel: 'Aided',
          active: pathname === '/departments/aided/mathematics'
        },
        {
          href: '/departments/aided/zoology',
          label: 'Zoology',
          icon: Building2,
          parentLabel: 'Aided',
          active: pathname === '/departments/aided/zoology'
        },
        {
          href: '/departments/aided/commerce',
          label: 'Commerce',
          icon: Building2,
          parentLabel: 'Aided',
          active: pathname === '/departments/aided/commerce'
        },
        {
          href: '/departments/aided/computer-science',
          label: 'Computer Science',
          icon: Building2,
          parentLabel: 'Aided',
          active: pathname === '/departments/aided/computer-science'
        },
        // Self-Finance Departments
        {
          href: '/departments/self-finance/bba',
          label: 'BBA',
          icon: Building2,
          parentLabel: 'Self-Finance',
          active: pathname === '/departments/self-finance/bba'
        },
        {
          href: '/departments/self-finance/bca',
          label: 'BCA',
          icon: Building2,
          parentLabel: 'Self-Finance',
          active: pathname === '/departments/self-finance/bca'
        },
        {
          href: '/departments/self-finance/it',
          label: 'IT',
          icon: Building2,
          parentLabel: 'Self-Finance',
          active: pathname === '/departments/self-finance/it'
        },
        {
          href: '/departments/self-finance/commerce-ca',
          label: 'Commerce CA',
          icon: Building2,
          parentLabel: 'Self-Finance',
          active: pathname === '/departments/self-finance/commerce-ca'
        }
      ]
    },

    // Group 4: IQAC & Quality
    {
      id: 'iqac',
      groupLabel: 'IQAC',
      icon: FileCheck,
      menus: [
        {
          href: '/iqac/composition',
          label: 'IQAC Composition',
          icon: FileCheck,
          active: pathname === '/iqac/composition'
        },
        {
          href: '/iqac/minutes',
          label: 'Meeting Minutes',
          icon: FileCheck,
          active: pathname === '/iqac/minutes'
        },
        {
          href: '/iqac/iiqa',
          label: 'IIQA',
          icon: FileCheck,
          active: pathname === '/iqac/iiqa'
        },
        {
          href: '/iqac/ssr',
          label: 'SSR',
          icon: FileCheck,
          active: pathname === '/iqac/ssr'
        },
        {
          href: '/iqac/aqar',
          label: 'AQAR',
          icon: FileCheck,
          active: pathname === '/iqac/aqar'
        },
        {
          href: '/iqac/best-practices',
          label: 'Best Practices',
          icon: FileCheck,
          active: pathname === '/iqac/best-practices'
        },
        {
          href: '/iqac/college-calendar',
          label: 'College Calendar',
          icon: FileCheck,
          active: pathname === '/iqac/college-calendar'
        }
      ]
    },

    // Group 5: Facilities (More menu)
    {
      id: 'facilities',
      groupLabel: 'Facilities',
      icon: Warehouse,
      menus: [
        {
          href: '/facilities/library',
          label: 'Library',
          icon: Warehouse,
          active: pathname === '/facilities/library'
        },
        {
          href: '/facilities/hostel',
          label: 'Hostel',
          icon: Warehouse,
          active: pathname === '/facilities/hostel'
        },
        {
          href: '/facilities/sports',
          label: 'Sports',
          icon: Warehouse,
          active: pathname === '/facilities/sports'
        },
        {
          href: '/facilities/nss',
          label: 'NSS',
          icon: Warehouse,
          active: pathname === '/facilities/nss'
        },
        {
          href: '/facilities/ncc',
          label: 'NCC',
          icon: Warehouse,
          active: pathname === '/facilities/ncc'
        },
        {
          href: '/facilities/placement-cell',
          label: 'Placement Cell',
          icon: Warehouse,
          active: pathname === '/facilities/placement-cell'
        }
      ]
    },

    // Group 6: Admissions & Exams (More menu)
    {
      id: 'admissions',
      groupLabel: 'Admissions',
      icon: UserPlus,
      menus: [
        {
          href: '/documents/examinations/Autonomous_Semester-Timetable_AprilMay-_2025.pdf',
          label: 'Exam Timetable',
          icon: UserPlus,
          active: false
        }
      ]
    },

    // Group 7: RTI & Transparency (More menu)
    {
      id: 'rti',
      groupLabel: 'RTI',
      icon: FileText,
      menus: [
        {
          href: '/documents/rti/RTI-2024.pdf',
          label: 'RTI 2024',
          icon: FileText,
          active: false
        }
      ]
    },

    // Group 8: Others (More menu)
    {
      id: 'others',
      groupLabel: 'Others',
      icon: LayoutGrid,
      menus: [
        {
          href: '/aicte',
          label: 'AICTE',
          icon: LayoutGrid,
          active: pathname === '/aicte'
        },
        {
          href: '/committees',
          label: 'Committees',
          icon: LayoutGrid,
          active: pathname === '/committees'
        },
        {
          href: '/documents/nirf/NIRF-2024-COLLEGE.pdf',
          label: 'NIRF 2024',
          icon: LayoutGrid,
          active: false
        },
        {
          href: '/documents/nirf/NIRF-2025-COLLEGE.pdf',
          label: 'NIRF 2025',
          icon: LayoutGrid,
          active: false
        }
      ]
    },

    // Group 9: Contact (More menu)
    {
      id: 'contact',
      groupLabel: 'Contact',
      icon: Phone,
      menus: [
        {
          href: '/contact',
          label: 'Contact Us',
          icon: Phone,
          active: pathname === '/contact'
        }
      ]
    }
  ];
}
