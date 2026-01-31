import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Users, Video, BarChart3, Settings, Shield, Trophy,
  ArrowRight, Check, Headphones, MessageSquare, Zap,
  Brain, FileText, UserCheck, Globe, Layers, Target,
  Monitor, Mic, Bot
} from 'lucide-react'

const APP_URL = 'https://app.trainersim.com'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore TrainerSim\'s AI-powered training features: video avatars, real-time scoring, custom scenarios, gamification, and more.',
}

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: <Bot className="w-7 h-7" />,
      title: '190 AI Training Agents',
      description: 'Each AI persona stays 100% in character with realistic responses, emotions, and adaptive conversation flow. Choose from 12 industry categories with difficulty levels from beginner to expert.',
      highlights: ['12 industry categories', 'Adaptive difficulty', 'Realistic emotions', 'Natural conversation flow'],
    },
    {
      icon: <Monitor className="w-7 h-7" />,
      title: 'Video Avatar Mode',
      description: 'Premium video avatars powered by Anam AI provide a face-to-face training experience. See realistic facial expressions, lip sync, and body language that responds to your conversation.',
      highlights: ['Anam AI technology', 'Realistic expressions', 'Lip-sync responses', 'Immersive experience'],
    },
    {
      icon: <Mic className="w-7 h-7" />,
      title: 'Audio & Text Modes',
      description: 'Cost-effective audio mode with ElevenLabs voices for natural spoken conversations. Or use text chat mode for quiet practice. Switch modes anytime during a session.',
      highlights: ['ElevenLabs voices', 'Natural speech', 'Text chat option', 'Switch modes freely'],
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: 'Real-Time Performance Scoring',
      description: 'Weighted scoring across five dimensions: Communication, Knowledge, Confidence, Problem Solving, and Professionalism. Time-based caps ensure genuine practice, not gaming the system.',
      highlights: ['5 scoring dimensions', 'Weighted metrics', 'Time-based validation', 'Actionable feedback'],
    },
    {
      icon: <Trophy className="w-7 h-7" />,
      title: 'Gamification & Pathways',
      description: 'Keep your team motivated with points, badges, and leaderboards. 12 structured learning pathways with certifications guide learners from beginner to expert in their field.',
      highlights: ['Points & badges', 'Team leaderboards', '12 learning pathways', 'Certifications'],
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: 'Custom Scenarios',
      description: 'Build custom training scenarios tailored to your organization. Create AI personas that match your exact customer profiles, product knowledge, and conversation types.',
      highlights: ['Custom AI personas', 'Product-specific', 'Organization tailored', 'Scenario builder'],
    },
  ]

  const additionalFeatures = [
    { icon: <Users className="w-5 h-5" />, title: 'Multi-Tenant Teams', desc: 'Role-based access control with manager dashboards and team analytics.' },
    { icon: <FileText className="w-5 h-5" />, title: 'Session Transcripts', desc: 'Full transcripts of every session with timestamps and scoring breakdowns.' },
    { icon: <Brain className="w-5 h-5" />, title: 'AI Coaching', desc: 'Post-session AI analysis with specific, actionable improvement suggestions.' },
    { icon: <Globe className="w-5 h-5" />, title: 'Credits-Based Billing', desc: 'Pay-as-you-train with credits. Scale up or down based on your team\'s needs.' },
    { icon: <FileText className="w-5 h-5" />, title: 'PDF Reports', desc: 'Download detailed PDF reports for any session. Share with managers or clients.' },
    { icon: <Layers className="w-5 h-5" />, title: 'Learning Analytics', desc: 'Track progress over time with detailed analytics dashboards per user and team.' },
    { icon: <Target className="w-5 h-5" />, title: 'Goal Setting', desc: 'Set performance targets for individuals and teams with progress tracking.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Enterprise Security', desc: 'SSO, SAML, SOC 2 compliance, and dedicated infrastructure options.' },
    { icon: <UserCheck className="w-5 h-5" />, title: 'Manager Dashboard', desc: 'Bird\'s eye view of team performance, session history, and improvement trends.' },
  ]

  const howItWorks = [
    {
      step: '01',
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Choose Your Scenario',
      desc: 'Browse 190+ AI agents across 12 industry categories. Select a persona, difficulty level, and conversation type that matches your training needs.',
    },
    {
      step: '02',
      icon: <Headphones className="w-8 h-8" />,
      title: 'Practice with AI',
      desc: 'Engage in realistic conversations via video avatars or audio mode. The AI stays 100% in character and adapts to your responses with human-like behavior.',
    },
    {
      step: '03',
      icon: <Zap className="w-8 h-8" />,
      title: 'Review & Improve',
      desc: 'Get detailed scoring across 5 dimensions, read full session transcripts, download PDF reports, and track your progress over time.',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#EF5E33] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-4">Platform Features</p>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              Powerful Features for{' '}
              <span className="text-[#EF5E33]">Modern Training</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              TrainerSim combines cutting-edge AI technology with proven training methodologies to deliver 
              a complete platform for practicing and perfecting professional conversations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-3">Core Platform</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#233C6F] mb-4">Core Platform Features</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to transform how your team trains and develops professional skills.
            </p>
          </div>
          <div className="space-y-16">
            {coreFeatures.map((feature, i) => (
              <div
                key={i}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-xl bg-[#EF5E33]/10 text-[#EF5E33] flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#233C6F] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.highlights.map((h, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-gray-700">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-[#233C6F]/5 to-[#EF5E33]/5 rounded-2xl p-10 flex items-center justify-center min-h-[280px] border border-gray-100 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="text-[#233C6F]/15 w-28 h-28">
                    {feature.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-3">Getting Started</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#233C6F] mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg leading-relaxed">Get started in minutes. No setup, no downloads.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#233C6F]/10 mb-5 relative">
                  <div className="text-[#233C6F]">{step.icon}</div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#EF5E33] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#233C6F] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-3">More Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#233C6F] mb-4">And Much More</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Every feature you need to run a world-class training program
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#233C6F]/10 text-[#233C6F] flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-[#233C6F] text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#EF5E33] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Experience TrainerSim Today</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Start your free trial and see why 500+ organizations trust TrainerSim for their training needs.
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
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all backdrop-blur-sm text-lg border border-white/20"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
