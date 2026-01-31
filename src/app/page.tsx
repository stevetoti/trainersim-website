import Link from 'next/link'
import {
  Users, Video, BarChart3, Settings, Shield, Trophy,
  ArrowRight, Check, Play, Star, ChevronRight, Sparkles,
  Headphones, MessageSquare, Zap, Target, Heart, Scale,
  DollarSign, UserCheck
} from 'lucide-react'

const APP_URL = 'https://app.trainersim.com'

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EF5E33] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#EF5E33]" />
              <span>190 AI Agents · 12 Industries · Video &amp; Audio</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-8">
              Master Every{' '}
              <span className="text-[#EF5E33]">Conversation</span>
              <br />
              Before It Happens
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-lg leading-relaxed">
              AI-powered training simulations that let your team practice high-stakes conversations
              with realistic AI personas. Real-time scoring, measurable improvement, zero risk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`${APP_URL}/auth`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#EF5E33] hover:bg-[#d94e28] text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/25 text-lg hover:shadow-xl hover:scale-105"
              >
                Start Training Free
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all backdrop-blur-sm text-lg"
              >
                <Play className="w-5 h-5" />
                See How It Works
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>14-day free trial</span>
              </div>
            </div>
          </div>

          {/* Hero visual — Chat simulation preview */}
          <div className="relative hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-blue-200 font-medium">Sales Training Simulation</span>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EF5E33] flex items-center justify-center text-xs text-white font-bold shrink-0">AI</div>
                  <div className="bg-white/10 rounded-xl rounded-tl-none px-4 py-3 text-sm max-w-[280px]">
                    I&apos;m interested, but the price seems high compared to your competitors...
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-[#EF5E33]/20 rounded-xl rounded-tr-none px-4 py-3 text-sm max-w-[280px]">
                    Great question! Let me walk you through the ROI our clients typically see...
                  </div>
                  <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white font-bold shrink-0">You</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EF5E33] flex items-center justify-center text-xs text-white font-bold shrink-0">AI</div>
                  <div className="bg-white/10 rounded-xl rounded-tl-none px-4 py-3 text-sm max-w-[280px]">
                    That&apos;s compelling. What kind of timeline are we looking at? 🤔
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-[#EF5E33]">190+</p>
                  <p className="text-xs text-blue-200">AI Agents</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-[#EF5E33]">12</p>
                  <p className="text-xs text-blue-200">Industries</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-[#EF5E33]">95%</p>
                  <p className="text-xs text-blue-200">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Social Proof / Stats Bar ─── */
function StatsSection() {
  const stats = [
    { value: '10,000+', label: 'Training Sessions' },
    { value: '95%', label: 'Satisfaction Rate' },
    { value: '40%', label: 'Performance Improvement' },
    { value: '500+', label: 'Organizations' },
  ]

  return (
    <section className="bg-gradient-to-r from-[#EF5E33] to-[#d94e28] py-12 sm:py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Features ─── */
function FeaturesSection() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: '190 AI Training Agents',
      description: 'Each AI persona stays 100% in character with realistic responses, emotions, and adaptive conversation flow across 12 industry categories.',
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video & Audio Modes',
      description: 'Premium video avatars powered by Anam AI or cost-effective audio mode with ElevenLabs voices. Choose the experience that fits.',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-Time Scoring',
      description: 'Weighted scoring across Communication, Knowledge, Confidence, Problem Solving, and Professionalism with time-based validation.',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Custom Scenarios',
      description: 'Build custom training scenarios for your organization with AI personas that match your exact customer profiles.',
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Gamification & Pathways',
      description: 'Points, badges, leaderboards, and 12 learning pathways with certifications to keep your team motivated and progressing.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safe Practice Environment',
      description: 'Practice difficult conversations risk-free before facing real-world situations. Build confidence safely with zero consequences.',
    },
  ]

  return (
    <section id="features" className="py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#233C6F] mb-4">
            Everything You Need to Transform Training
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A complete AI training platform with realistic simulations, intelligent scoring, and enterprise-grade team management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#EF5E33]/10 text-[#EF5E33] flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#233C6F] mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-6 py-3 text-[#EF5E33] hover:text-[#d94e28] font-semibold border-2 border-[#EF5E33]/20 hover:border-[#EF5E33]/40 rounded-xl transition-all"
          >
            Explore all features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Use Cases ─── */
function UseCasesSection() {
  const useCases = [
    { icon: <Target className="w-6 h-6" />, title: 'Sales', desc: 'Objection handling, discovery calls, and high-pressure deal closing with AI prospects.' },
    { icon: <Heart className="w-6 h-6" />, title: 'Healthcare', desc: 'Patient communication, clinical empathy, and bedside manner training with AI patients.' },
    { icon: <MessageSquare className="w-6 h-6" />, title: 'Customer Service', desc: 'De-escalation, empathy building, and first-call resolution practice.' },
    { icon: <Scale className="w-6 h-6" />, title: 'Legal', desc: 'Client consultations, case discussions, and negotiation practice.' },
    { icon: <DollarSign className="w-6 h-6" />, title: 'Finance', desc: 'Investment advisory, financial planning, and sensitive money conversations.' },
    { icon: <UserCheck className="w-6 h-6" />, title: 'HR', desc: 'Performance reviews, conflict resolution, and difficult employee discussions.' },
  ]

  return (
    <section id="use-cases" className="py-28 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#233C6F] mb-4">
            Built for Every Industry
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From healthcare to finance, TrainerSim adapts to the conversations that matter most in your field.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#EF5E33]/10 text-[#EF5E33] flex items-center justify-center mb-5 group-hover:bg-[#EF5E33] group-hover:text-white transition-colors duration-300">
                {uc.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#233C6F] mb-3">{uc.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{uc.desc}</p>
              <a
                href={`${APP_URL}/auth`}
                className="inline-flex items-center gap-1 text-sm font-medium text-[#EF5E33] hover:text-[#d94e28] transition-colors"
              >
                Try {uc.title} scenarios
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/use-cases"
            className="inline-flex items-center gap-2 px-6 py-3 text-[#EF5E33] hover:text-[#d94e28] font-semibold border-2 border-[#EF5E33]/20 hover:border-[#EF5E33]/40 rounded-xl transition-all"
          >
            View all use cases
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works ─── */
function HowItWorksSection() {
  const steps = [
    {
      step: '1',
      icon: <MessageSquare className="w-7 h-7" />,
      title: 'Choose Your Scenario',
      desc: 'Browse 190+ AI agents across 12 industry categories. Select a persona, difficulty level, and conversation type.',
    },
    {
      step: '2',
      icon: <Headphones className="w-7 h-7" />,
      title: 'Practice with AI',
      desc: 'Engage in realistic conversations via video avatars or audio mode. The AI adapts to your responses in real-time.',
    },
    {
      step: '3',
      icon: <Zap className="w-7 h-7" />,
      title: 'Review & Improve',
      desc: 'Get detailed scoring across 5 dimensions, read transcripts, download PDF reports, and track progress over time.',
    },
  ]

  return (
    <section className="py-28 lg:py-32 bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EF5E33] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">Three simple steps to better performance</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div key={step.step} className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 text-center hover:bg-white/15 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#EF5E33] text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-orange-500/30">
                {step.step}
              </div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6 mt-2">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-blue-200 leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'TrainerSim completely transformed our sales onboarding. New reps are hitting quota 40% faster. The AI agents feel remarkably real.',
      name: 'Sarah Chen',
      role: 'VP of Sales, Meridian Tech',
    },
    {
      quote: 'Patient satisfaction scores improved by 35% within 3 months. The scoring system gives actionable, specific feedback every time.',
      name: 'Dr. Maria Lopez',
      role: 'Director of Medical Education, Pacific Health',
    },
    {
      quote: 'Our customer service team went from 60% to 92% first-call resolution. The safe practice environment builds real confidence.',
      name: 'James Walker',
      role: 'Head of CX, NovaCorp',
    },
  ]

  return (
    <section className="py-28 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#233C6F] mb-4">
            Loved by Training Leaders
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            See how organizations are transforming their training with TrainerSim
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic text-[15px]">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#233C6F] to-[#162849] text-white flex items-center justify-center text-sm font-bold shadow-sm">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-[#233C6F] text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing ─── */
function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/user/mo',
      description: 'Perfect for individuals and small teams getting started.',
      popular: false,
      features: ['Up to 5 users', 'Audio mode', 'All 12 categories', 'Basic scoring', 'Session transcripts'],
      cta: 'Start Free Trial',
      href: `${APP_URL}/auth`,
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/user/mo',
      description: 'For growing teams with video avatars and advanced analytics.',
      popular: true,
      features: ['Up to 50 users', 'Video + Audio modes', 'All 190 AI agents', 'Advanced analytics', 'Team management', 'PDF reports', '12 Learning Pathways'],
      cta: 'Start Free Trial',
      href: `${APP_URL}/auth`,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Unlimited training for large organizations.',
      popular: false,
      features: ['Unlimited users', 'Everything in Pro', 'Custom AI personas', 'SSO & SAML', 'API access', 'Dedicated success manager'],
      cta: 'Contact Sales',
      href: '/contact',
    },
  ]

  return (
    <section id="pricing" className="py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#233C6F] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Start free, scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'border-[#EF5E33] shadow-xl shadow-orange-100 scale-[1.02]'
                  : 'border-gray-100 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#EF5E33] text-white text-xs font-bold rounded-full shadow-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold text-[#233C6F]">{plan.name}</h3>
              <div className="mt-4 mb-4">
                <span className="text-4xl font-bold text-[#233C6F]">{plan.price}</span>
                {plan.period && <span className="text-gray-500 text-sm">{plan.period}</span>}
              </div>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#EF5E33] hover:bg-[#d94e28] text-white shadow-sm hover:shadow-md'
                    : 'bg-gray-50 hover:bg-[#233C6F] text-[#233C6F] hover:text-white border border-gray-200 hover:border-[#233C6F]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 text-[#EF5E33] hover:text-[#d94e28] font-semibold border-2 border-[#EF5E33]/20 hover:border-[#EF5E33]/40 rounded-xl transition-all"
          >
            Compare all plans
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Final CTA ─── */
function CTASection() {
  return (
    <section className="py-28 lg:py-32 bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#EF5E33] rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          Ready to Transform Your Training?
        </h2>
        <p className="text-blue-200 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
          Join 500+ organizations using TrainerSim to build confident, skilled teams.
        </p>
        <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
          Start your free trial today — no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${APP_URL}/auth`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#EF5E33] hover:bg-[#d94e28] text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/25 text-lg hover:shadow-xl hover:scale-105"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all backdrop-blur-sm text-lg border border-white/20"
          >
            Talk to Sales
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="flex -space-x-2">
            {['SC', 'ML', 'JW', 'TK', 'RB'].map((initials, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white/20 border-2 border-[#233C6F] flex items-center justify-center text-xs font-bold backdrop-blur-sm"
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="text-blue-200 text-sm">
            <span className="font-semibold text-white">500+</span> organizations already training
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <UseCasesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  )
}
