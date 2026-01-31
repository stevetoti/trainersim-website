'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const APP_URL = 'https://app.trainersim.com/auth';

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Data ─── */
const stats = [
  { value: '10,000+', label: 'Training Sessions' },
  { value: '95%', label: 'Satisfaction Rate' },
  { value: '40%', label: 'Performance Improvement' },
  { value: '500+', label: 'Organizations' },
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'AI Simulations',
    desc: '380 AI agents across 12 categories. Each persona stays 100% in character with realistic responses, emotions, and adaptive conversation flow.',
    gradient: 'from-brand-orange to-amber-400',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Video & Audio Modes',
    desc: 'Premium video avatars powered by Anam AI or cost-effective audio mode with ElevenLabs voices. Choose the experience that fits your budget.',
    gradient: 'from-brand-blue to-brand-blue-light',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Real-Time Scoring',
    desc: 'Weighted scoring across Communication, Knowledge, Confidence, Problem Solving, and Professionalism. Time-based caps ensure genuine practice.',
    gradient: 'from-brand-orange to-brand-orange-light',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Custom Scenarios',
    desc: 'Build custom training scenarios for your organization. Create AI personas that match your exact customer profiles and conversation types.',
    gradient: 'from-brand-blue-light to-blue-400',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Team Management',
    desc: 'Multi-tenant platform with role-based access. Manager dashboards, team analytics, session transcripts, and PDF reports for every member.',
    gradient: 'from-brand-orange-dark to-brand-orange',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Safe Practice Environment',
    desc: '12 Learning Pathways with certifications and 52 modules. Practice difficult conversations risk-free before facing real-world situations.',
    gradient: 'from-brand-blue to-brand-orange',
  },
];

const useCases = [
  {
    icon: '💼',
    title: 'Sales',
    desc: 'Objection handling, discovery calls, and high-pressure deal closing with AI prospects.',
    color: 'from-brand-blue/20 to-brand-blue/5',
    border: 'border-brand-blue/20',
    iconBg: 'bg-brand-blue/10',
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    desc: 'Patient communication, clinical empathy, and bedside manner training with AI patients.',
    color: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/10',
  },
  {
    icon: '🎧',
    title: 'Customer Service',
    desc: 'De-escalation, empathy building, and first-call resolution with difficult AI customers.',
    color: 'from-brand-orange/20 to-brand-orange/5',
    border: 'border-brand-orange/20',
    iconBg: 'bg-brand-orange/10',
  },
  {
    icon: '⚖️',
    title: 'Legal',
    desc: 'Legal consultations, client intake, and complex case discussions in a controlled environment.',
    color: 'from-amber-500/20 to-amber-600/5',
    border: 'border-amber-500/20',
    iconBg: 'bg-amber-500/10',
  },
  {
    icon: '💰',
    title: 'Finance',
    desc: 'Investment advisory, financial planning, and sensitive money conversations with clients.',
    color: 'from-brand-blue-light/20 to-brand-blue-light/5',
    border: 'border-brand-blue-light/20',
    iconBg: 'bg-brand-blue-light/10',
  },
  {
    icon: '👥',
    title: 'HR',
    desc: 'Performance reviews, conflict resolution, and difficult employee conversations.',
    color: 'from-brand-orange-light/20 to-brand-orange-light/5',
    border: 'border-brand-orange-light/20',
    iconBg: 'bg-brand-orange-light/10',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Choose Your Scenario',
    desc: 'Browse 380+ AI agents across 12 industry categories. Select a persona, difficulty level, and conversation type that matches your training needs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Practice with AI',
    desc: 'Engage in realistic conversations via video avatars or audio mode. The AI stays 100% in character and adapts to your responses with human-like behavior.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Review & Improve',
    desc: 'Get detailed scoring across 5 dimensions, read full session transcripts, download PDF reports, and track your progress over time with actionable insights.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const pricing = [
  {
    name: 'Starter',
    price: '$49',
    period: '/user/mo',
    desc: 'Perfect for individuals and small teams getting started with AI training.',
    cta: 'Start Free Trial',
    popular: false,
    features: [
      'Up to 5 users',
      'Audio mode (ElevenLabs)',
      'All 12 industry categories',
      'Basic scoring & feedback',
      'Session transcripts',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/user/mo',
    desc: 'For growing teams that need video avatars and advanced analytics.',
    cta: 'Start Free Trial',
    popular: true,
    features: [
      'Up to 50 users',
      'Video mode (Anam AI avatars)',
      'Audio mode included',
      'All 380 AI agents',
      'Advanced analytics dashboard',
      'Team management & roles',
      'PDF reports & transcripts',
      'Priority support',
      'Custom scenarios',
      '12 Learning Pathways',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Unlimited training for large organizations with custom needs.',
    cta: 'Contact Sales',
    popular: false,
    features: [
      'Unlimited users',
      'Everything in Professional',
      'Custom AI personas',
      'SSO & SAML',
      'API access',
      'Dedicated success manager',
      'SLA guarantee',
      'Multi-tenant isolation',
      'On-premise option',
      'Custom integrations',
    ],
  },
];

const testimonials = [
  {
    quote: 'TrainerSim completely transformed our sales onboarding. New reps are hitting quota 40% faster. The AI agents feel remarkably real — our team actually enjoys training now.',
    name: 'Sarah Chen',
    role: 'VP of Sales, Meridian Tech',
    initials: 'SC',
    gradient: 'from-brand-orange to-amber-400',
  },
  {
    quote: 'We replaced expensive role-play workshops with TrainerSim. Patient satisfaction scores improved by 35% within 3 months. The scoring system gives actionable, specific feedback.',
    name: 'Dr. Maria Lopez',
    role: 'Director of Medical Education, Pacific Health',
    initials: 'ML',
    gradient: 'from-brand-blue to-brand-blue-light',
  },
  {
    quote: 'Our customer service team went from 60% to 92% first-call resolution. The safe practice environment lets agents build confidence before handling real escalations.',
    name: 'James Walker',
    role: 'Head of CX, NovaCorp',
    initials: 'JW',
    gradient: 'from-brand-orange-dark to-brand-orange-light',
  },
];

/* ─── Main Page Component ─── */
export default function Home() {
  return (
    <div className="bg-dark-900 min-h-screen overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════
                              HERO SECTION
         ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-dark-900" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-brand-orange/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              {/* Badge */}
              <motion.div 
                variants={fadeUp} 
                custom={0} 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-sm font-medium text-brand-orange-light">380 AI Agents · 12 Industries · Video & Audio</span>
              </motion.div>

              {/* Main headline */}
              <motion.h1 
                variants={fadeUp} 
                custom={1} 
                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white mb-5"
              >
                Master Every{' '}
                <span className="gradient-text">Conversation</span>
                <br />
                Before It Happens
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                variants={fadeUp} 
                custom={2} 
                className="text-lg leading-relaxed text-dark-200 max-w-3xl mx-auto mb-8"
              >
                AI-powered training simulations that let your team practice high-stakes conversations with realistic AI personas. 
                Real-time scoring, measurable improvement, and zero risk.
              </motion.p>

              {/* CTA buttons */}
              <motion.div 
                variants={fadeUp} 
                custom={3} 
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <a
                  href={APP_URL}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-orange text-white font-semibold text-base hover:bg-brand-orange-light transition-all shadow-xl shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:-translate-y-0.5"
                >
                  Start Training Free
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-base hover:bg-white/5 transition-all hover:-translate-y-0.5"
                >
                  <svg className="mr-2 w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                  See How It Works
                </a>
              </motion.div>

              {/* Trust signals */}
              <motion.div 
                variants={fadeUp} 
                custom={4} 
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-dark-300"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  14-day free trial
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Setup in minutes
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
                              STATS SECTION
         ═══════════════════════════════════════════════════════ */}
      <section className="py-12 lg:py-16 border-y border-brand-orange/10 bg-brand-blue/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <p className="text-4xl lg:text-5xl font-bold text-brand-orange mb-3">{s.value}</p>
                <p className="text-lg leading-relaxed text-dark-300">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />

      {/* ═══════════════════════════════════════════════════════
                            FEATURES SECTION
         ═══════════════════════════════════════════════════════ */}
      <section id="features" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-brand-orange uppercase tracking-widest mb-4">Features</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Everything You Need to{' '}
              <span className="gradient-text">Transform Training</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed text-dark-300 max-w-3xl mx-auto">
              A complete AI training platform with realistic simulations, intelligent scoring, and enterprise-grade team management.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                custom={i}
                className="group relative p-6 lg:p-8 rounded-2xl bg-dark-800/50 border border-white/5 hover:border-brand-orange/20 transition-all duration-300 hover:bg-dark-800/80"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{f.title}</h3>
                <p className="text-base leading-relaxed text-gray-400">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />

      {/* ═══════════════════════════════════════════════════════
                           USE CASES SECTION
         ═══════════════════════════════════════════════════════ */}
      <section id="use-cases" className="py-16 lg:py-20 bg-brand-blue/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-brand-orange uppercase tracking-widest mb-4">Use Cases</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Built for <span className="gradient-text">Every Industry</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed text-dark-300 max-w-3xl mx-auto">
              From healthcare to finance, TrainerSim adapts to the conversations that matter most in your field.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                variants={fadeUp}
                custom={i}
                className={`group relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br ${uc.color} border ${uc.border} hover:border-opacity-60 transition-all duration-300`}
              >
                <div className={`w-14 h-14 rounded-xl ${uc.iconBg} flex items-center justify-center text-3xl mb-5`}>
                  {uc.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{uc.title}</h3>
                <p className="text-base leading-relaxed text-dark-200 mb-5">{uc.desc}</p>
                <a
                  href={APP_URL}
                  className="inline-flex items-center gap-2 text-base font-medium text-brand-orange hover:text-brand-orange-light transition-colors"
                >
                  Try {uc.title} scenarios
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />

      {/* ═══════════════════════════════════════════════════════
                          HOW IT WORKS SECTION
         ═══════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-brand-orange uppercase tracking-widest mb-4">How It Works</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Three Steps to{' '}
              <span className="gradient-text">Better Performance</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed text-dark-300 max-w-3xl mx-auto">
              Get started in minutes. No setup, no downloads, no complexity.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative"
          >
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-24 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue" />

            {howItWorks.map((step, i) => (
              <motion.div key={step.step} variants={fadeUp} custom={i} className="text-center relative">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-orange/10 border border-brand-orange/20 mb-6 relative">
                  <div className="text-brand-orange">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-brand-orange/30">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-lg leading-relaxed text-dark-300">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-orange text-white font-semibold text-base hover:bg-brand-orange-light transition-all shadow-xl shadow-brand-orange/25"
            >
              Try Your First Simulation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />

      {/* ═══════════════════════════════════════════════════════
                           PRICING SECTION
         ═══════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-16 lg:py-20 bg-brand-blue/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-brand-orange uppercase tracking-widest mb-4">Pricing</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Simple, Transparent{' '}
              <span className="gradient-text">Pricing</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed text-dark-300 max-w-3xl mx-auto">
              Start free. Scale as you grow. No hidden fees, no surprises.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {pricing.map((plan, i) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                custom={i}
                className={`relative rounded-2xl p-6 lg:p-8 flex flex-col ${
                  plan.popular
                    ? 'bg-gradient-to-b from-brand-orange/10 via-brand-blue/5 to-dark-800/80 border-2 border-brand-orange/30 shadow-xl shadow-brand-orange/10 scale-[1.02]'
                    : 'bg-dark-800/50 border border-white/5'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-brand-orange text-white text-sm font-semibold shadow-lg shadow-brand-orange/30">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl lg:text-5xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-lg text-dark-400">{plan.period}</span>}
                  </div>
                  <p className="text-lg leading-relaxed text-dark-300">{plan.desc}</p>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-base text-dark-200 leading-relaxed">
                      <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={APP_URL}
                  className={`block w-full text-center px-6 py-4 rounded-xl font-semibold text-base transition-all ${
                    plan.popular
                      ? 'bg-brand-orange text-white hover:bg-brand-orange-light shadow-lg shadow-brand-orange/25'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-brand-orange/30'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />

      {/* ═══════════════════════════════════════════════════════
                         TESTIMONIALS SECTION
         ═══════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-brand-orange uppercase tracking-widest mb-4">Testimonials</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Loved by{' '}
              <span className="gradient-text">Training Leaders</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                className="p-6 lg:p-8 rounded-2xl bg-dark-800/50 border border-white/5 hover:border-brand-orange/20 transition-all"
              >
                {/* Quote marks */}
                <div className="text-4xl text-brand-orange mb-4">&ldquo;</div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-dark-200 mb-6 italic">
                  {t.quote}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-dark-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />

      {/* ═══════════════════════════════════════════════════════
                           FINAL CTA SECTION
         ═══════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden p-10 lg:p-14 text-center"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue animate-gradient" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,94,51,0.15),transparent)]" />
            <div className="absolute inset-0 bg-grid opacity-20" />

            <div className="relative">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Training?
              </h2>
              <p className="text-lg leading-relaxed text-white/80 max-w-2xl mx-auto mb-8">
                Join 500+ organizations using TrainerSim to build confident, skilled teams. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href={APP_URL}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-orange text-white font-semibold text-base hover:bg-brand-orange-light transition-all shadow-xl shadow-brand-orange/30 hover:-translate-y-0.5"
                >
                  Get Started Free
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
                <a
                  href="mailto:hello@trainersim.com"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  Talk to Sales
                </a>
              </div>
              <p className="text-base text-white/60">
                No credit card required · 14-day free trial · Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
