'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

const useCases = [
  {
    id: 'healthcare',
    icon: '🏥',
    title: 'Healthcare Training',
    description: 'Train medical professionals in patient communication, bedside manner, difficult diagnosis conversations, and interdisciplinary team collaboration.',
    scenarios: [
      'Breaking bad news to patients',
      'Patient intake and assessment',
      'Insurance and billing discussions',
      'Emergency triage communication',
      'Mental health crisis intervention',
    ],
    benefits: [
      'Reduce communication-related medical errors by 40%',
      'Improve patient satisfaction scores',
      'Ensure HIPAA-compliant communication practices',
      'Train on rare but critical scenarios safely',
    ],
    stat: '40%',
    statLabel: 'Fewer communication errors',
  },
  {
    id: 'sales',
    icon: '📈',
    title: 'Sales Enablement',
    description: 'Empower your sales team to handle objections, deliver compelling pitches, and close deals with confidence. Practice discovery calls, demos, and negotiations.',
    scenarios: [
      'Cold call opening techniques',
      'Discovery call questioning',
      'Product demo presentations',
      'Objection handling mastery',
      'Closing and negotiation tactics',
    ],
    benefits: [
      'Increase close rates by 35%',
      'Reduce new rep ramp time by 50%',
      'Standardize winning sales playbooks',
      'Practice high-value deal scenarios',
    ],
    stat: '35%',
    statLabel: 'Higher close rates',
  },
  {
    id: 'customer-service',
    icon: '🎧',
    title: 'Customer Service',
    description: 'Build exceptional customer service teams that can handle complaints, de-escalate situations, and turn frustrated customers into loyal advocates.',
    scenarios: [
      'Angry customer de-escalation',
      'Product return and refund handling',
      'Technical troubleshooting support',
      'Upselling and cross-selling',
      'VIP customer management',
    ],
    benefits: [
      'Improve CSAT scores by 28%',
      'Reduce average handle time',
      'Lower customer churn rates',
      'Consistent service quality across shifts',
    ],
    stat: '28%',
    statLabel: 'Higher CSAT scores',
  },
  {
    id: 'hospitality',
    icon: '🏨',
    title: 'Hospitality',
    description: 'Train front desk, concierge, and service staff to deliver five-star guest experiences. Handle complaints, special requests, and create memorable moments.',
    scenarios: [
      'Guest check-in and welcome',
      'Handling room complaints',
      'Concierge recommendations',
      'Event coordination discussions',
      'VIP guest management',
    ],
    benefits: [
      'Boost guest satisfaction ratings',
      'Reduce complaint escalation rates',
      'Increase positive online reviews',
      'Train seasonal staff quickly',
    ],
    stat: '4.8★',
    statLabel: 'Average guest rating',
  },
  {
    id: 'real-estate',
    icon: '🏠',
    title: 'Real Estate',
    description: 'Help agents master client consultations, property showings, negotiation tactics, and closing conversations that build trust and drive transactions.',
    scenarios: [
      'Buyer consultation meetings',
      'Listing presentation pitches',
      'Price negotiation conversations',
      'Open house follow-ups',
      'First-time buyer guidance',
    ],
    benefits: [
      'Close more listings per quarter',
      'Improve client retention rates',
      'Handle price objections confidently',
      'Build stronger referral networks',
    ],
    stat: '2x',
    statLabel: 'More listings closed',
  },
  {
    id: 'finance',
    icon: '💰',
    title: 'Finance & Insurance',
    description: 'Train advisors and agents in compliant client communication, product explanations, risk discussions, and relationship-building conversations.',
    scenarios: [
      'Financial planning consultations',
      'Insurance claim discussions',
      'Investment risk conversations',
      'Compliance-sensitive discussions',
      'Client onboarding processes',
    ],
    benefits: [
      'Ensure regulatory compliance in communication',
      'Increase client trust and retention',
      'Improve product knowledge delivery',
      'Reduce compliance violations',
    ],
    stat: '95%',
    statLabel: 'Compliance rate',
  },
  {
    id: 'legal',
    icon: '⚖️',
    title: 'Legal',
    description: 'Prepare attorneys, paralegals, and legal staff for client consultations, depositions, mediations, and courtroom communication.',
    scenarios: [
      'Initial client consultations',
      'Deposition preparation',
      'Mediation and negotiation',
      'Delivering case updates',
      'Fee and billing discussions',
    ],
    benefits: [
      'Improve client communication quality',
      'Better deposition preparation',
      'Stronger negotiation outcomes',
      'Reduce client complaints',
    ],
    stat: '90%',
    statLabel: 'Client satisfaction',
  },
  {
    id: 'education',
    icon: '🎓',
    title: 'Education',
    description: 'Help educators and administrators communicate effectively with students, parents, and colleagues. Practice difficult conversations and parent-teacher conferences.',
    scenarios: [
      'Parent-teacher conferences',
      'Student behavioral discussions',
      'IEP meeting facilitation',
      'Academic advising sessions',
      'Conflict resolution with colleagues',
    ],
    benefits: [
      'Improve parent engagement',
      'Handle sensitive topics with confidence',
      'Better student outcomes',
      'Reduce teacher burnout',
    ],
    stat: '45%',
    statLabel: 'Better engagement',
  },
  {
    id: 'hr-management',
    icon: '👥',
    title: 'HR & Management',
    description: 'Train managers and HR professionals in performance reviews, disciplinary conversations, hiring interviews, and team leadership communication.',
    scenarios: [
      'Performance review delivery',
      'Termination conversations',
      'Conflict mediation',
      'Behavioral interview techniques',
      'Change management communication',
    ],
    benefits: [
      'Reduce wrongful termination risk',
      'Improve employee retention',
      'Better hiring decisions',
      'Stronger team leadership',
    ],
    stat: '60%',
    statLabel: 'Cost savings',
  },
  {
    id: 'tech-support',
    icon: '💻',
    title: 'Tech Support',
    description: 'Train support engineers and technical staff to communicate complex solutions clearly, manage frustrated users, and resolve issues efficiently.',
    scenarios: [
      'Technical troubleshooting calls',
      'Escalation management',
      'SLA communication',
      'Product outage notifications',
      'User onboarding assistance',
    ],
    benefits: [
      'Reduce average resolution time',
      'Improve first-contact resolution',
      'Better technical communication',
      'Higher customer satisfaction',
    ],
    stat: '50%',
    statLabel: 'Faster resolution',
  },
  {
    id: 'trade-safety',
    icon: '🔧',
    title: 'Trade Skills & Safety',
    description: 'Train tradespeople and field workers in safety protocols, client communication, jobsite coordination, and compliance conversations.',
    scenarios: [
      'Safety briefing delivery',
      'Client project scoping',
      'Incident reporting conversations',
      'Subcontractor coordination',
      'Change order discussions',
    ],
    benefits: [
      'Reduce workplace incidents',
      'Improve client satisfaction',
      'Better safety compliance',
      'Stronger project communication',
    ],
    stat: '70%',
    statLabel: 'Fewer incidents',
  },
  {
    id: 'coaching',
    icon: '🎯',
    title: 'Professional Coaching',
    description: 'Help coaches, mentors, and trainers practice their coaching conversations, develop questioning techniques, and master active listening skills.',
    scenarios: [
      'Initial coaching sessions',
      'Goal-setting conversations',
      'Accountability check-ins',
      'Career transition guidance',
      'Executive coaching scenarios',
    ],
    benefits: [
      'Sharpen coaching techniques',
      'Practice diverse client situations',
      'Improve active listening skills',
      'Build coaching confidence',
    ],
    stat: '3x',
    statLabel: 'More practice hours',
  },
];

export default function UseCasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Use Cases"
            title="Training Solutions for Every Industry"
            subtitle="From healthcare to hospitality, TrainerSim adapts to your industry's unique challenges with pre-built scenarios and customizable training paths."
          />
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.id}
                id={useCase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-navy-800/50 border border-white/5 overflow-hidden hover:border-coral-500/20 transition-all"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left - Info */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <span className="text-4xl">{useCase.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-semibold text-coral-400 mb-3 uppercase tracking-wide">Example Scenarios</h4>
                        <ul className="space-y-2">
                          {useCase.scenarios.map((scenario) => (
                            <li key={scenario} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="text-coral-500 mt-1">•</span>
                              {scenario}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-coral-400 mb-3 uppercase tracking-wide">Key Benefits</h4>
                        <ul className="space-y-2">
                          {useCase.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2 text-sm text-gray-300">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400 mt-0.5 flex-shrink-0">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right - Stat */}
                  <div className="lg:col-span-2 bg-navy-900/50 p-8 lg:p-10 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-white/5">
                    <div className="text-5xl lg:text-6xl font-bold text-coral-500 mb-2">{useCase.stat}</div>
                    <div className="text-gray-400 text-sm text-center">{useCase.statLabel}</div>
                    <a
                      href="https://app.trainersim.com/auth"
                      className="mt-6 bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-coral-500/25 inline-flex items-center gap-2"
                    >
                      Try {useCase.title.split(' ')[0]} Scenarios
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
