'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10L19.553 7.724C19.7054 7.64784 19.8748 7.61188 20.045 7.6195C20.2152 7.62712 20.3806 7.67808 20.5256 7.76765C20.6706 7.85722 20.7902 7.98233 20.873 8.13113C20.9557 8.27993 20.9988 8.44756 21 8.618V15.382C20.9988 15.5524 20.9557 15.7201 20.873 15.8689C20.7902 16.0177 20.6706 16.1428 20.5256 16.2324C20.3806 16.3219 20.2152 16.3729 20.045 16.3805C19.8748 16.3881 19.7054 16.3522 19.553 16.276L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'AI-Powered Video Simulations',
    description: 'Practice with lifelike AI avatars powered by cutting-edge technology. Experience realistic facial expressions, emotions, and natural conversation flow.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Real-Time Performance Scoring',
    description: 'Get instant feedback on empathy, communication clarity, professionalism, and technique. AI-powered scoring helps you improve with every session.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9V5Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 5C14 4.44772 14.4477 4 15 4H19C19.5523 4 20 4.44772 20 5V9C20 9.55228 19.5523 10 19 10H15C14.4477 10 14 9.55228 14 9V5Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 15C4 14.4477 4.44772 14 5 14H9C9.55228 14 10 14.4477 10 15V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V15Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 15C14 14.4477 14.4477 14 15 14H19C19.5523 14 20 14.4477 20 15V19C20 19.5523 19.5523 20 19 20H15C14.4477 20 14 19.5523 14 19V15Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: '100+ Industry Scenarios',
    description: 'From healthcare patient conversations to high-pressure sales calls. Pre-built scenarios across 12+ industries, ready to use immediately.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Team Management & Analytics',
    description: 'Track team performance, identify skill gaps, and measure training ROI. Manager dashboards give you complete visibility into your team\'s growth.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Learning Pathways & Certifications',
    description: 'Structured learning paths guide trainees from beginner to expert. Issue certificates upon completion to validate professional competency.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Multi-Modal Training',
    description: 'Train via video, audio, or text chat — whatever suits your learning style. Switch between modes seamlessly within any scenario.',
  },
];

const industries = [
  { name: 'Healthcare', icon: '🏥', desc: 'Patient communication & clinical training' },
  { name: 'Sales', icon: '📈', desc: 'Deal closing & objection handling' },
  { name: 'Customer Service', icon: '🎧', desc: 'De-escalation & satisfaction' },
  { name: 'Hospitality', icon: '🏨', desc: 'Guest experience & service excellence' },
  { name: 'Real Estate', icon: '🏠', desc: 'Client negotiations & showings' },
  { name: 'Finance', icon: '💰', desc: 'Advisory & compliance conversations' },
  { name: 'Legal', icon: '⚖️', desc: 'Client consultations & depositions' },
  { name: 'Education', icon: '🎓', desc: 'Student engagement & parent meetings' },
  { name: 'HR & Management', icon: '👥', desc: 'Difficult conversations & reviews' },
  { name: 'Tech Support', icon: '💻', desc: 'Troubleshooting & user guidance' },
  { name: 'Trade Skills', icon: '🔧', desc: 'Safety protocols & client interactions' },
  { name: 'Coaching', icon: '🎯', desc: 'Professional development & mentoring' },
];

const testimonials = [
  {
    quote: "TrainerSim completely transformed our sales onboarding. New reps are closing deals 35% faster than before. The AI simulations feel incredibly real.",
    name: "Sarah Chen",
    role: "VP of Sales",
    company: "Meridian Tech Solutions",
  },
  {
    quote: "We reduced our training costs by 60% while improving quality scores across the board. The real-time feedback is a game-changer for our support team.",
    name: "James Rodriguez",
    role: "Director of Learning & Development",
    company: "Pacific Health Group",
  },
  {
    quote: "Our customer satisfaction scores jumped 28% after implementing TrainerSim. The ability to practice difficult conversations safely makes all the difference.",
    name: "Emily Watson",
    role: "Chief People Officer",
    company: "Horizon Financial Services",
  },
  {
    quote: "The analytics dashboard gives us unprecedented insight into team readiness. We can identify and address skill gaps before they become problems.",
    name: "Michael Park",
    role: "Training Manager",
    company: "Atlas Hospitality Group",
  },
];

const stats = [
  { value: '10,000+', label: 'Training Sessions Completed' },
  { value: '95%', label: 'Satisfaction Rate' },
  { value: '500+', label: 'Organizations Trust Us' },
  { value: '60%', label: 'Average Cost Reduction' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral-500/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-coral-500/10 text-coral-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-coral-500/20">
                🚀 AI-Powered Training Platform
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Master High-Stakes{' '}
              <span className="gradient-text">Conversations</span>{' '}
              with AI
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Practice critical conversations with AI-powered video, audio, and text simulations. 
              Build confidence, sharpen skills, and drive measurable outcomes — without the risk of real-world mistakes.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <a
                href="https://app.trainersim.com/auth"
                className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:shadow-xl hover:shadow-coral-500/25 inline-flex items-center justify-center gap-2"
              >
                Start Free Trial
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#demo"
                className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:bg-white/5 inline-flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <polygon points="10,8 16,12 10,16" fill="currentColor"/>
                </svg>
                Watch Demo
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-gray-500"
            >
              14-day free trial · No credit card required · Cancel anytime
            </motion.p>
          </div>

          {/* Hero Image / Mock UI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 lg:mt-24 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-navy-800/50 backdrop-blur-sm shadow-2xl shadow-coral-500/5">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-gray-500 text-xs ml-2">app.trainersim.com</span>
              </div>
              <div className="p-6 md:p-10">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Sim Video Area */}
                  <div className="md:col-span-2 bg-navy-900 rounded-xl p-6 border border-white/5">
                    <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-950 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto bg-coral-500/20 rounded-full flex items-center justify-center mb-3">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="10,8 16,12 10,16" fill="#EF5E33"/>
                          </svg>
                        </div>
                        <p className="text-gray-400 text-sm">AI Avatar Simulation</p>
                        <p className="text-gray-600 text-xs mt-1">Healthcare Patient Intake</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center text-white text-xs font-bold">AI</div>
                        <div>
                          <p className="text-white text-sm font-medium">Dr. Sarah Williams</p>
                          <p className="text-gray-500 text-xs">Patient intake scenario</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">Live</div>
                        <div className="px-3 py-1 bg-navy-700 text-gray-400 text-xs rounded-full">04:23</div>
                      </div>
                    </div>
                  </div>
                  {/* Score Panel */}
                  <div className="bg-navy-900 rounded-xl p-6 border border-white/5">
                    <h4 className="text-white font-semibold text-sm mb-4">Performance Score</h4>
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative w-28 h-28">
                        <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#222a46" strokeWidth="8"/>
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#EF5E33" strokeWidth="8" strokeDasharray="226" strokeDashoffset="34" strokeLinecap="round"/>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">85</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: 'Empathy', value: 92, color: 'bg-green-500' },
                        { label: 'Clarity', value: 88, color: 'bg-blue-500' },
                        { label: 'Technique', value: 78, color: 'bg-coral-500' },
                        { label: 'Professionalism', value: 82, color: 'bg-purple-500' },
                      ].map((metric) => (
                        <div key={metric.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400">{metric.label}</span>
                            <span className="text-white">{metric.value}%</span>
                          </div>
                          <div className="h-1.5 bg-navy-700 rounded-full overflow-hidden">
                            <div className={`h-full ${metric.color} rounded-full`} style={{ width: `${metric.value}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow effect below the card */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-coral-500/20 blur-2xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Features"
            title="Everything You Need to Build World-Class Teams"
            subtitle="TrainerSim combines AI, immersive simulations, and data-driven insights to deliver training that actually works."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 lg:p-8 rounded-2xl bg-navy-800/50 border border-white/5 hover:border-coral-500/30 transition-all hover:bg-navy-800"
              >
                <div className="w-12 h-12 bg-coral-500/10 rounded-xl flex items-center justify-center text-coral-500 mb-5 group-hover:bg-coral-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="Get Started in Minutes"
            subtitle="No complex setup. No technical skills required. Just sign up and start training."
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '01',
                title: 'Choose Your Scenario',
                description: 'Pick from 100+ pre-built scenarios across 12 industries, or create your own custom training scenario in minutes.',
              },
              {
                step: '02',
                title: 'Practice with AI',
                description: 'Engage in realistic conversations with AI avatars via video, audio, or text. The AI adapts to your responses in real time.',
              },
              {
                step: '03',
                title: 'Get Instant Feedback',
                description: 'Receive detailed performance scores, personalized coaching tips, and actionable insights to improve with every session.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="text-6xl font-bold text-coral-500/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Use Cases"
            title="Built for Every Industry"
            subtitle="From healthcare to hospitality, TrainerSim adapts to your industry's unique challenges and conversation scenarios."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {industries.map((industry, i) => (
              <motion.a
                key={industry.name}
                href="/use-cases/"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="p-5 rounded-xl bg-navy-800/50 border border-white/5 hover:border-coral-500/30 transition-all hover:bg-navy-800 group cursor-pointer"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-coral-400 transition-colors">{industry.name}</h4>
                <p className="text-gray-500 text-xs">{industry.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="Trusted by Industry Leaders"
            subtitle="See why hundreds of organizations choose TrainerSim to develop their teams."
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 lg:p-8 rounded-2xl bg-navy-800/50 border border-white/5"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#EF5E33" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-coral-500 to-coral-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Pricing"
            title="Simple, Transparent Pricing"
            subtitle="Start free. Scale as you grow. No hidden fees."
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$49',
                period: '/month',
                description: 'Perfect for individuals and small teams getting started.',
                features: ['100 training credits/mo', '5 scenarios', 'Basic analytics', 'Email support', 'Text & audio modes'],
                cta: 'Start Free Trial',
                popular: false,
              },
              {
                name: 'Professional',
                price: '$99',
                period: '/month',
                description: 'For growing teams that need advanced training capabilities.',
                features: ['500 training credits/mo', 'All scenarios', 'Advanced analytics', 'Team management', 'Priority support', 'Video simulations', 'Custom branding'],
                cta: 'Start Free Trial',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'For organizations with custom needs and scale requirements.',
                features: ['Unlimited credits', 'Custom scenarios', 'SSO & SAML', 'API access', 'Dedicated success manager', 'SLA guarantee', 'On-premise option'],
                cta: 'Contact Sales',
                popular: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative p-6 lg:p-8 rounded-2xl border ${
                  plan.popular
                    ? 'bg-navy-800 border-coral-500/50 shadow-xl shadow-coral-500/10'
                    : 'bg-navy-800/50 border-white/5'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-coral-500 flex-shrink-0">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.name === 'Enterprise' ? '/contact/' : 'https://app.trainersim.com/auth'}
                  className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-coral-500 hover:bg-coral-600 text-white hover:shadow-lg hover:shadow-coral-500/25'
                      : 'bg-navy-700 hover:bg-navy-600 text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
