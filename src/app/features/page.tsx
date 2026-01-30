'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

const features = [
  {
    id: 'video-simulation',
    title: 'AI Video Simulations',
    subtitle: 'Powered by Anam AI Avatars',
    description: 'Engage in face-to-face conversations with photorealistic AI avatars. Our video simulations capture facial expressions, body language cues, and natural speech patterns to create an immersive training experience that mirrors real-world interactions.',
    benefits: [
      'Photorealistic AI avatars with natural expressions',
      'Real-time lip sync and emotional responses',
      'Multiple avatar personas for diverse scenarios',
      'Record and replay sessions for review',
    ],
    icon: '🎥',
    color: 'from-coral-500/20 to-red-500/20',
  },
  {
    id: 'audio-training',
    title: 'Audio Training',
    subtitle: 'Powered by ElevenLabs Voices',
    description: 'Practice phone conversations, cold calls, and verbal communication with ultra-realistic AI voices. Perfect for sales teams, call centers, and any role that requires strong verbal skills.',
    benefits: [
      'Natural-sounding AI voices in multiple languages',
      'Phone call simulation with realistic audio quality',
      'Voice tone and pace analysis',
      'Perfect for remote and phone-based roles',
    ],
    icon: '🎙️',
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 'text-chat',
    title: 'Text Chat Practice',
    subtitle: 'Conversational AI Training',
    description: 'Sharpen your written communication skills with AI-powered chat simulations. Practice email responses, live chat support, messaging, and any text-based customer interaction.',
    benefits: [
      'Real-time chat interface with AI responses',
      'Email and messaging scenario support',
      'Writing quality and tone analysis',
      'Response time tracking and optimization',
    ],
    icon: '💬',
    color: 'from-green-500/20 to-teal-500/20',
  },
  {
    id: 'ai-coaching',
    title: 'AI Coaching & Scoring',
    subtitle: 'Intelligent Performance Analysis',
    description: 'Receive instant, detailed feedback after every training session. Our AI analyzes your communication across multiple dimensions — empathy, clarity, technique, and professionalism — providing actionable coaching tips.',
    benefits: [
      'Multi-dimensional scoring (empathy, clarity, technique)',
      'Personalized improvement recommendations',
      'Session-by-session progress tracking',
      'Benchmarking against top performers',
    ],
    icon: '🧠',
    color: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    id: 'analytics',
    title: 'Performance Analytics',
    subtitle: 'Data-Driven Training Insights',
    description: 'Comprehensive dashboards give managers and trainees complete visibility into performance trends, skill development, and training ROI. Make data-driven decisions about your training programs.',
    benefits: [
      'Real-time performance dashboards',
      'Team and individual progress tracking',
      'Skill gap identification and analysis',
      'ROI measurement and reporting',
    ],
    icon: '📊',
    color: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    id: 'team-management',
    title: 'Team Management',
    subtitle: 'Enterprise-Grade Administration',
    description: 'Manage your entire training program from a single dashboard. Assign scenarios, track completion, set goals, and monitor team performance across departments and locations.',
    benefits: [
      'Role-based access and permissions',
      'Assign and schedule training programs',
      'Department and location management',
      'Automated progress reports and alerts',
    ],
    icon: '👥',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'learning-pathways',
    title: 'Learning Pathways',
    subtitle: 'Structured Skill Development',
    description: 'Guide your team through structured learning paths that progressively build skills from beginner to expert. Each pathway includes a sequence of scenarios, assessments, and milestones.',
    benefits: [
      'Pre-built industry-specific pathways',
      'Progressive difficulty levels',
      'Milestone tracking and certifications',
      'Custom pathway builder for admins',
    ],
    icon: '🛤️',
    color: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    id: 'gamification',
    title: 'Gamification',
    subtitle: 'Leaderboards, Badges & Rewards',
    description: 'Motivate your team with gamified training experiences. Leaderboards, achievement badges, streak tracking, and rewards keep trainees engaged and coming back for more practice.',
    benefits: [
      'Team and global leaderboards',
      'Achievement badges and milestones',
      'Practice streak tracking',
      'Customizable rewards and incentives',
    ],
    icon: '🏆',
    color: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    id: 'scenario-builder',
    title: 'Custom Scenario Builder',
    subtitle: 'Create Your Own Training',
    description: 'Build custom training scenarios tailored to your organization\'s specific needs. Define personas, conversation flows, evaluation criteria, and difficulty levels — no coding required.',
    benefits: [
      'Drag-and-drop scenario editor',
      'Custom AI persona configuration',
      'Flexible scoring rubrics',
      'Template library for quick creation',
    ],
    icon: '🔧',
    color: 'from-rose-500/20 to-coral-500/20',
  },
  {
    id: 'api-access',
    title: 'API Access',
    subtitle: 'Integrate Everywhere',
    description: 'Integrate TrainerSim into your existing LMS, HR systems, or custom applications via our comprehensive REST API. Automate training workflows and sync data across your tech stack.',
    benefits: [
      'RESTful API with full documentation',
      'Webhooks for real-time events',
      'LMS integration (SCORM, xAPI)',
      'SSO support (SAML, OAuth)',
    ],
    icon: '🔌',
    color: 'from-gray-500/20 to-slate-500/20',
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Platform Features"
            title="Powerful Features for Modern Training"
            subtitle="Everything you need to create, manage, and measure world-class training programs. Built for teams of all sizes."
          />
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feature, i) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`py-16 lg:py-24 ${i % 2 === 0 ? '' : 'bg-navy-950/50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={i % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <span className="text-5xl mb-4 block">{feature.icon}</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-coral-400 font-medium text-sm mb-4">{feature.subtitle}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-coral-500 mt-0.5 flex-shrink-0">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={i % 2 !== 0 ? 'lg:order-1' : ''}
              >
                <div className={`rounded-2xl bg-gradient-to-br ${feature.color} p-8 lg:p-12 border border-white/5`}>
                  <div className="bg-navy-900/80 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-coral-500" />
                      <span className="text-gray-400 text-xs">{feature.title}</span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-navy-700 rounded-full w-full" />
                      <div className="h-3 bg-navy-700 rounded-full w-4/5" />
                      <div className="h-3 bg-navy-700 rounded-full w-3/5" />
                      <div className="h-8 bg-coral-500/20 rounded-lg w-1/3 mt-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Feature Comparison */}
      <section className="py-24 lg:py-32 bg-navy-950/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Compare"
            title="TrainerSim vs. Traditional Training"
            subtitle="See how AI-powered simulations stack up against conventional training methods."
          />

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-400 font-medium text-sm py-4 pr-4">Feature</th>
                  <th className="text-center text-coral-500 font-semibold text-sm py-4 px-4">TrainerSim</th>
                  <th className="text-center text-gray-400 font-medium text-sm py-4 pl-4">Traditional</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { feature: 'Available 24/7', trainersim: true, traditional: false },
                  { feature: 'Instant feedback', trainersim: true, traditional: false },
                  { feature: 'Scalable to thousands', trainersim: true, traditional: false },
                  { feature: 'Consistent quality', trainersim: true, traditional: false },
                  { feature: 'Cost per session < $1', trainersim: true, traditional: false },
                  { feature: 'Performance analytics', trainersim: true, traditional: false },
                  { feature: 'Safe to fail', trainersim: true, traditional: false },
                  { feature: 'Customizable scenarios', trainersim: true, traditional: true },
                  { feature: 'Multi-language support', trainersim: true, traditional: false },
                  { feature: 'No scheduling needed', trainersim: true, traditional: false },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-white/5">
                    <td className="text-gray-300 py-3 pr-4">{row.feature}</td>
                    <td className="text-center py-3 px-4">
                      {row.trainersim ? (
                        <span className="text-green-400">✓</span>
                      ) : (
                        <span className="text-gray-600">✗</span>
                      )}
                    </td>
                    <td className="text-center py-3 pl-4">
                      {row.traditional ? (
                        <span className="text-green-400">✓</span>
                      ) : (
                        <span className="text-gray-600">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
