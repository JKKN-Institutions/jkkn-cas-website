/**
 * ProgrammePage Template
 *
 * Reusable template for all programme pages with consistent mobile-first design.
 * Reduces code duplication across 31 programme pages.
 *
 * Usage:
 * import { ProgrammePage } from '@/components/templates/ProgrammePage';
 *
 * export default function BScChemistry() {
 *   return <ProgrammePage {...programmeData} />;
 * }
 */

'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  BookOpen, Users, Award, Briefcase, GraduationCap, CheckCircle2,
  Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, School,
  type LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { responsive } from '@/lib/responsive-utils';
import { DESIGN_TOKENS } from '@/lib/design-tokens';

// ============================================================================
// TYPES
// ============================================================================

export interface QuickInfoCard {
  icon: React.ReactNode;
  stat: string;
  title: string;
  desc: string;
}

export interface EligibilityCard {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export interface CurriculumYear {
  year: number;
  semesters: {
    number: number;
    subjects: string[];
  }[];
}

export interface OutcomeItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CareerPath {
  icon: React.ReactNode;
  title: string;
  roles: string[];
}

export interface Facility {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProgrammePageProps {
  // Hero Section
  badge?: string;
  title: string;
  subtitle: string;
  tagline: string;
  duration: string;
  semesters: string;
  type: string; // "Full-Time Programme", "Part-Time", etc.
  heroColor?: string; // Background color for hero

  // Quick Info Cards
  quickInfo: QuickInfoCard[];

  // Programme Overview
  overviewBadge?: string;
  overviewTitle: string;
  overviewDescription: string[];
  overviewHighlights: string[];
  overviewImage?: string;
  establishedYear?: string;

  // Eligibility
  eligibility: EligibilityCard[];

  // Curriculum
  curriculum: CurriculumYear[];

  // Learning Outcomes
  outcomes: OutcomeItem[];

  // Career Opportunities
  careers: CareerPath[];
  careerDescription?: string;

  // Facilities
  facilities: Facility[];

  // Why Choose
  whyChoose: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];

  // FAQ
  faq: FAQItem[];

  // Admission
  admissionUrl?: string;
}

// ============================================================================
// UTILITY COMPONENTS
// ============================================================================

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function RevealSection({
  children,
  className = '',
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function GlassCard({
  children,
  className = '',
  hover = true
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        'bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(11,109,65,0.08)] border border-white/60',
        hover && 'hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(11,109,65,0.15)] hover:-translate-y-2',
        responsive.transition('all', 'normal'),
        className
      )}
    >
      {children}
    </div>
  );
}

function SectionBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 bg-brand-green/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold border border-brand-green/15 text-brand-green mb-4">
      <Sparkles className="w-3.5 h-3.5" />
      {text}
    </span>
  );
}

// ============================================================================
// MAIN TEMPLATE COMPONENT
// ============================================================================

export function ProgrammePage(props: ProgrammePageProps) {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);

  const heroColor = props.heroColor || '#eaf1e2';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <HeroSection {...props} heroColor={heroColor} />

      {/* Quick Info Cards */}
      <QuickInfoSection cards={props.quickInfo} />

      {/* Programme Overview */}
      <OverviewSection {...props} />

      {/* Eligibility */}
      <EligibilitySection cards={props.eligibility} />

      {/* Curriculum */}
      <CurriculumSection
        curriculum={props.curriculum}
        activeYear={activeYear}
        setActiveYear={setActiveYear}
      />

      {/* Learning Outcomes */}
      <OutcomesSection outcomes={props.outcomes} />

      {/* Career Opportunities */}
      <CareersSection
        careers={props.careers}
        description={props.careerDescription}
      />

      {/* Facilities */}
      <FacilitiesSection facilities={props.facilities} />

      {/* Why Choose */}
      <WhyChooseSection items={props.whyChoose} />

      {/* FAQ */}
      <FAQSection
        faq={props.faq}
        activeFAQ={activeFAQ}
        setActiveFAQ={setActiveFAQ}
      />

      {/* Admission CTA */}
      <AdmissionSection
        title={props.title}
        admissionUrl={props.admissionUrl}
      />
    </div>
  );
}

// ============================================================================
// SECTION COMPONENTS
// ============================================================================

function HeroSection(props: ProgrammePageProps & { heroColor: string }) {
  return (
    <section
      className={cn(
        'relative min-h-[85vh] flex items-center overflow-hidden',
        responsive.section()
      )}
      style={{ backgroundColor: props.heroColor }}
    >
      <div className={cn('container mx-auto relative z-10', responsive.container())}>
        <RevealSection>
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            {props.badge && (
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/90 text-gray-900">
                <GraduationCap className="w-4 h-4 text-brand-green" />
                {props.badge}
              </span>
            )}

            {/* Title */}
            <h1 className={cn(responsive.heading('hero'), 'mb-4 text-brand-green')}>
              {props.title}
            </h1>

            {/* Subtitle */}
            <p className={cn(responsive.heading('h2'), 'font-medium mb-6 text-gray-700')}>
              {props.subtitle}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <MetaTag icon={<Clock className="w-5 h-5 text-brand-green" />} text={props.duration} />
              <MetaTag icon={<FileText className="w-5 h-5 text-brand-green" />} text={props.semesters} />
              <MetaTag icon={<Users className="w-5 h-5 text-brand-green" />} text={props.type} />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#admission"
                className={cn(
                  responsive.button(),
                  'bg-brand-green hover:bg-brand-green/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-1'
                )}
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#curriculum"
                className={cn(
                  responsive.button(),
                  'bg-white/70 hover:bg-brand-green text-gray-900 hover:text-white border-2 border-white/80 hover:border-brand-green backdrop-blur-sm'
                )}
              >
                View Curriculum
              </a>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

function MetaTag({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function QuickInfoSection({ cards }: { cards: QuickInfoCard[] }) {
  return (
    <section className="relative z-10 -mt-12 pb-8">
      <div className={cn('container mx-auto', responsive.container())}>
        <div className={cn(responsive.grid('cards', 'sm'), 'max-w-6xl mx-auto')}>
          {cards.map((card, idx) => (
            <RevealSection key={idx} delay={idx * 100}>
              <GlassCard className={cn(responsive.card(), 'text-center')}>
                <div className="w-14 h-14 mx-auto mb-4 bg-brand-green/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-brand-green/15 text-brand-green">
                  {card.icon}
                </div>
                <span className={cn(responsive.heading('h1'), 'block text-brand-green mb-1')}>{card.stat}</span>
                <h3 className="font-bold text-brand-green mb-1">{card.title}</h3>
                <p className={cn(responsive.text('small'), 'text-gray-600')}>{card.desc}</p>
              </GlassCard>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function OverviewSection(props: ProgrammePageProps) {
  return (
    <section className={cn(responsive.section(), 'bg-brand-cream')}>
      <div className={cn('container mx-auto', responsive.container())}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-center">
          <RevealSection className="lg:col-span-3">
            <SectionBadge text={props.overviewBadge || 'About the Programme'} />
            <h2 className={cn(responsive.heading('h1'), 'text-gray-900 mb-6')}>
              {props.overviewTitle}
            </h2>
            {props.overviewDescription.map((para, idx) => (
              <p key={idx} className={cn(responsive.text('body'), 'text-gray-700 mb-4')}>
                {para}
              </p>
            ))}

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {props.overviewHighlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </RevealSection>

          {props.overviewImage && (
            <RevealSection className="lg:col-span-2" delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={props.overviewImage}
                  alt={`${props.title} Laboratory`}
                  className="w-full h-auto"
                />
                {props.establishedYear && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    Since {props.establishedYear}
                  </span>
                )}
              </div>
            </RevealSection>
          )}
        </div>
      </div>
    </section>
  );
}

function EligibilitySection({ cards }: { cards: EligibilityCard[] }) {
  return (
    <section className={cn(responsive.section(), 'bg-white')} id="eligibility">
      <div className={cn('container mx-auto', responsive.container())}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <SectionBadge text="Admissions" />
              <h2 className={cn(responsive.heading('h1'), 'text-gray-900 mb-4')}>
                Eligibility & Admission Criteria
              </h2>
              <p className={cn(responsive.text('body'), 'text-gray-600 max-w-2xl mx-auto')}>
                Requirements for joining this programme
              </p>
            </div>
          </RevealSection>

          <div className={cn(responsive.grid('cards', 'md'))}>
            {cards.map((card, idx) => (
              <RevealSection key={idx} delay={idx * 150}>
                <GlassCard className={cn(responsive.card(), 'h-full')}>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-green/20">
                    {card.icon}
                  </div>
                  <h3 className={cn(responsive.heading('h3'), 'text-brand-green mb-4')}>{card.title}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CurriculumSection({
  curriculum,
  activeYear,
  setActiveYear
}: {
  curriculum: CurriculumYear[];
  activeYear: number;
  setActiveYear: (year: number) => void;
}) {
  return (
    <section className={cn(responsive.section(), 'bg-brand-cream')} id="curriculum">
      <div className={cn('container mx-auto', responsive.container())}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <SectionBadge text="Curriculum" />
              <h2 className={cn(responsive.heading('h1'), 'text-gray-900 mb-4')}>
                Course Structure
              </h2>
            </div>
          </RevealSection>

          {/* Year Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {curriculum.map((year) => (
              <button
                key={year.year}
                onClick={() => setActiveYear(year.year)}
                className={cn(
                  responsive.button(),
                  activeYear === year.year
                    ? 'bg-brand-green text-white'
                    : 'bg-white/70 text-gray-700 hover:bg-white',
                  'border border-brand-green/20'
                )}
              >
                Year {year.year}
              </button>
            ))}
          </div>

          {/* Semester Content */}
          {curriculum.map((year) => year.year === activeYear && (
            <div key={year.year} className={cn(responsive.grid('features', 'lg'))}>
              {year.semesters.map((semester, idx) => (
                <RevealSection key={semester.number} delay={idx * 100}>
                  <GlassCard className={cn(responsive.card())}>
                    <h3 className={cn(responsive.heading('h3'), 'text-brand-green mb-4')}>
                      Semester {semester.number}
                    </h3>
                    <ul className="space-y-2">
                      {semester.subjects.map((subject, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </RevealSection>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection({ outcomes }: { outcomes: OutcomeItem[] }) {
  return (
    <section className={cn(responsive.section(), 'bg-white')} id="outcomes">
      <div className={cn('container mx-auto', responsive.container())}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <SectionBadge text="Learning Outcomes" />
              <h2 className={cn(responsive.heading('h1'), 'text-gray-900 mb-4')}>
                What You Will Learn
              </h2>
            </div>
          </RevealSection>

          <div className={cn(responsive.grid('cards', 'md'))}>
            {outcomes.map((outcome, idx) => (
              <RevealSection key={idx} delay={idx * 100}>
                <GlassCard className={cn(responsive.card(), 'text-center')}>
                  <div className="w-14 h-14 mx-auto mb-4 bg-brand-green/10 rounded-lg flex items-center justify-center text-brand-green">
                    {outcome.icon}
                  </div>
                  <h3 className={cn(responsive.heading('h4'), 'text-brand-green mb-3')}>{outcome.title}</h3>
                  <p className={cn(responsive.text('small'), 'text-gray-600')}>{outcome.description}</p>
                </GlassCard>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CareersSection({
  careers,
  description
}: {
  careers: CareerPath[];
  description?: string;
}) {
  return (
    <section className={cn(responsive.section(), 'bg-brand-cream')} id="careers">
      <div className={cn('container mx-auto', responsive.container())}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <SectionBadge text="Career Opportunities" />
              <h2 className={cn(responsive.heading('h1'), 'text-gray-900 mb-4')}>
                Build Your Future
              </h2>
              {description && (
                <p className={cn(responsive.text('body'), 'text-gray-600 max-w-3xl mx-auto')}>
                  {description}
                </p>
              )}
            </div>
          </RevealSection>

          <div className={cn(responsive.grid('cards', 'md'))}>
            {careers.map((career, idx) => (
              <RevealSection key={idx} delay={idx * 100}>
                <GlassCard className={cn(responsive.card())}>
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-500 rounded-xl flex items-center justify-center mb-6 text-white">
                    {career.icon}
                  </div>
                  <h3 className={cn(responsive.heading('h3'), 'text-brand-green mb-4')}>{career.title}</h3>
                  <ul className="space-y-2">
                    {career.roles.map((role, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <ArrowRight className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{role}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FacilitiesSection({ facilities }: { facilities: Facility[] }) {
  return (
    <section className={cn(responsive.section(), 'bg-white')} id="facilities">
      <div className={cn('container mx-auto', responsive.container())}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <SectionBadge text="Facilities" />
              <h2 className={cn(responsive.heading('h1'), 'text-gray-900 mb-4')}>
                World-Class Infrastructure
              </h2>
            </div>
          </RevealSection>

          <div className={cn(responsive.grid('cards', 'md'))}>
            {facilities.map((facility, idx) => (
              <RevealSection key={idx} delay={idx * 100}>
                <GlassCard className={cn(responsive.card(), 'text-center')}>
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-brand-green/10 to-emerald-50 rounded-2xl flex items-center justify-center text-brand-green">
                    {facility.icon}
                  </div>
                  <h3 className={cn(responsive.heading('h3'), 'text-brand-green mb-4')}>{facility.title}</h3>
                  <p className={cn(responsive.text('small'), 'text-gray-600')}>{facility.description}</p>
                </GlassCard>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection({ items }: { items: { icon: React.ReactNode; title: string; description: string; }[] }) {
  return (
    <section className={cn(responsive.section(), 'bg-brand-cream')} id="why-choose">
      <div className={cn('container mx-auto', responsive.container())}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <SectionBadge text="Why Choose Us" />
              <h2 className={cn(responsive.heading('h1'), 'text-gray-900 mb-4')}>
                Why This Programme?
              </h2>
            </div>
          </RevealSection>

          <div className={cn(responsive.grid('cards', 'md'))}>
            {items.map((item, idx) => (
              <RevealSection key={idx} delay={idx * 100}>
                <GlassCard className={cn(responsive.card())}>
                  <div className="w-12 h-12 mb-4 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green">
                    {item.icon}
                  </div>
                  <h3 className={cn(responsive.heading('h4'), 'text-brand-green mb-3')}>{item.title}</h3>
                  <p className={cn(responsive.text('small'), 'text-gray-600')}>{item.description}</p>
                </GlassCard>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection({
  faq,
  activeFAQ,
  setActiveFAQ
}: {
  faq: FAQItem[];
  activeFAQ: number;
  setActiveFAQ: (idx: number) => void;
}) {
  return (
    <section className={cn(responsive.section(), 'bg-white')} id="faq">
      <div className={cn('container mx-auto', responsive.container())}>
        <div className="max-w-4xl mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <SectionBadge text="FAQ" />
              <h2 className={cn(responsive.heading('h1'), 'text-gray-900 mb-4')}>
                Frequently Asked Questions
              </h2>
            </div>
          </RevealSection>

          <div className="space-y-4">
            {faq.map((item, idx) => (
              <RevealSection key={idx} delay={idx * 50}>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === idx ? -1 : idx)}
                    className={cn(
                      'w-full px-6 py-4 text-left flex items-center justify-between',
                      'hover:bg-brand-cream/50',
                      responsive.transition('colors', 'fast')
                    )}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-brand-green flex-shrink-0',
                        responsive.transition('transform', 'fast'),
                        activeFAQ === idx && 'rotate-180'
                      )}
                    />
                  </button>
                  {activeFAQ === idx && (
                    <div className="px-6 py-4 bg-brand-cream/30 border-t border-gray-200">
                      <p className={cn(responsive.text('body'), 'text-gray-700')}>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AdmissionSection({
  title,
  admissionUrl
}: {
  title: string;
  admissionUrl?: string;
}) {
  const defaultUrl = 'https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8';

  return (
    <section className={cn(responsive.section(), 'bg-brand-cream')} id="admission">
      <div className={cn('container mx-auto text-center', responsive.container())}>
        <RevealSection>
          <div className="max-w-3xl mx-auto">
            <h2 className={cn(responsive.heading('h1'), 'text-brand-green mb-6')}>
              Ready to Begin Your Journey?
            </h2>
            <p className={cn(responsive.text('body'), 'text-gray-700 mb-8')}>
              Join {title} and transform your future with quality education and industry exposure.
            </p>
            <a
              href={admissionUrl || defaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                responsive.button(),
                'bg-brand-green hover:bg-brand-green/90 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1'
              )}
            >
              Apply Now for 2026-27
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
