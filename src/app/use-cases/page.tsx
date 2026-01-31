import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'

const APP_URL = 'https://app.trainersim.com'

export const metadata: Metadata = {
  title: 'Use Cases',
  description: 'Discover how TrainerSim AI training simulations work across industries: sales, healthcare, customer service, HR, finance, legal, education, and more.',
}

const industries = [
  {
    id: 'sales',
    icon: '💼',
    title: 'Sales Training',
    subtitle: 'Close more deals with confident, skilled reps',
    description: 'Practice objection handling, discovery calls, product demos, and high-pressure deal closing with AI prospects that push back realistically.',
    scenarios: ['Cold calling objection handling', 'Enterprise discovery calls', 'Product demo presentations', 'Price negotiation & closing', 'Upselling & cross-selling', 'Account renewal conversations'],
    stat: '40% faster ramp time',
    result: 'Sales teams report 40% faster onboarding and 25% higher close rates after TrainerSim training.',
    color: 'bg-blue-50',
    iconBg: 'bg-blue-100',
  },
  {
    id: 'healthcare',
    icon: '🏥',
    title: 'Healthcare Communication',
    subtitle: 'Better patient outcomes through better communication',
    description: 'Train doctors, nurses, and staff on patient communication, clinical empathy, bedside manner, and sensitive conversations with AI patients.',
    scenarios: ['Breaking difficult news', 'Patient intake interviews', 'Treatment plan explanations', 'Medication adherence counseling', 'Family conference discussions', 'End-of-life conversations'],
    stat: '35% improvement',
    result: 'Healthcare teams see 35% improvement in patient satisfaction scores within 3 months.',
    color: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
  },
  {
    id: 'customer-service',
    icon: '🎧',
    title: 'Customer Service',
    subtitle: 'Resolve issues faster, delight customers consistently',
    description: 'Practice de-escalation techniques, empathy building, and first-call resolution with difficult AI customers that simulate real-world frustrations.',
    scenarios: ['Angry customer de-escalation', 'Complex technical support', 'Billing dispute resolution', 'Service recovery scenarios', 'Multi-issue conversations', 'VIP customer handling'],
    stat: '92% FCR rate',
    result: 'Customer service teams achieve up to 92% first-call resolution rates after TrainerSim practice.',
    color: 'bg-orange-50',
    iconBg: 'bg-orange-100',
  },
  {
    id: 'hr',
    icon: '👥',
    title: 'HR & Management',
    subtitle: 'Navigate difficult workplace conversations with confidence',
    description: 'Practice performance reviews, conflict resolution, termination conversations, and sensitive employee discussions in a safe environment.',
    scenarios: ['Performance improvement plans', 'Conflict mediation', 'Termination conversations', 'Salary negotiation responses', 'Harassment complaint handling', 'Return-to-office discussions'],
    stat: 'Zero-risk practice',
    result: 'HR professionals build confidence handling sensitive situations before they encounter them in real life.',
    color: 'bg-purple-50',
    iconBg: 'bg-purple-100',
  },
  {
    id: 'finance',
    icon: '💰',
    title: 'Financial Services',
    subtitle: 'Build trust through better client conversations',
    description: 'Train advisors on investment discussions, financial planning conversations, risk disclosure, and sensitive money topics with AI clients.',
    scenarios: ['Investment advisory meetings', 'Retirement planning sessions', 'Risk tolerance assessment', 'Market downturn communication', 'Fee disclosure conversations', 'Estate planning discussions'],
    stat: 'Higher trust scores',
    result: 'Financial advisors report significantly higher client trust scores and retention rates.',
    color: 'bg-amber-50',
    iconBg: 'bg-amber-100',
  },
  {
    id: 'legal',
    icon: '⚖️',
    title: 'Legal Consultations',
    subtitle: 'Perfect your client communication skills',
    description: 'Practice client intake interviews, case discussions, settlement negotiations, and courtroom preparation with AI clients and opposing counsel.',
    scenarios: ['Initial client consultations', 'Case update discussions', 'Settlement negotiations', 'Mediation practice', 'Expert witness preparation', 'Client expectation management'],
    stat: 'Better outcomes',
    result: 'Legal professionals improve client communication and case preparation effectiveness.',
    color: 'bg-slate-50',
    iconBg: 'bg-slate-100',
  },
  {
    id: 'education',
    icon: '🎓',
    title: 'Education & Training',
    subtitle: 'Prepare educators for every classroom scenario',
    description: 'Practice parent-teacher conferences, student counseling, classroom management scenarios, and administrative conversations.',
    scenarios: ['Parent-teacher conferences', 'Student behavioral counseling', 'IEP meeting facilitation', 'Classroom disruption management', 'College admissions interviews', 'Academic probation discussions'],
    stat: 'Confident educators',
    result: 'Educators feel significantly more prepared for challenging parent and student interactions.',
    color: 'bg-teal-50',
    iconBg: 'bg-teal-100',
  },
  {
    id: 'tech-support',
    icon: '🖥️',
    title: 'Technical Support',
    subtitle: 'Resolve complex issues with clarity and patience',
    description: 'Train support engineers on troubleshooting conversations, explaining technical concepts to non-technical users, and escalation handling.',
    scenarios: ['Tier 1 troubleshooting', 'Complex escalation handling', 'Explaining technical concepts', 'Outage communication', 'SLA violation discussions', 'Product bug reporting'],
    stat: 'Faster resolution',
    result: 'Technical support teams resolve issues faster with improved customer communication.',
    color: 'bg-cyan-50',
    iconBg: 'bg-cyan-100',
  },
]

export default function UseCasesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#EF5E33] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-4">Use Cases</p>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              Built for{' '}
              <span className="text-[#EF5E33]">Every Industry</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              From healthcare to finance, TrainerSim adapts to the conversations that matter most 
              in your field. Explore how organizations across industries are using AI-powered 
              simulations to transform their training.
            </p>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="text-sm font-medium text-gray-600 hover:text-[#233C6F] whitespace-nowrap px-4 py-2 rounded-full hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
              >
                {ind.icon} {ind.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Industries */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((ind) => (
              <div key={ind.id} id={ind.id} className="scroll-mt-32">
                <div className={`rounded-2xl ${ind.color} p-8 sm:p-10 lg:p-12 border border-gray-100`}>
                  <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <div>
                      <div className={`w-16 h-16 rounded-2xl ${ind.iconBg} flex items-center justify-center text-3xl mb-5 shadow-sm`}>
                        {ind.icon}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#233C6F] mb-2">{ind.title}</h2>
                      <p className="text-[#233C6F]/70 font-medium mb-4">{ind.subtitle}</p>
                      <p className="text-gray-700 leading-relaxed mb-6">{ind.description}</p>
                      <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm mb-6">
                        <p className="text-2xl font-bold text-[#EF5E33] mb-1">{ind.stat}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{ind.result}</p>
                      </div>
                      <a
                        href={`${APP_URL}/auth`}
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#EF5E33] hover:bg-[#d94e28] text-white font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:scale-105"
                      >
                        Try {ind.title} Scenarios
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#233C6F] mb-4 text-lg">Available Scenarios</h3>
                      <div className="grid gap-3">
                        {ind.scenarios.map((s, j) => (
                          <div key={j} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                            <span className="text-gray-700 text-sm font-medium">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EF5E33] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Don&apos;t See Your Industry?</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            TrainerSim supports custom scenarios for any industry. Contact us to build training simulations tailored to your exact needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${APP_URL}/auth`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#EF5E33] hover:bg-[#d94e28] text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/25 text-lg hover:shadow-xl hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all text-lg border border-white/20"
            >
              Contact Us
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
