import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Globe, Heart, Users, BarChart3, Award, Zap, ArrowRight, Target, Lightbulb } from 'lucide-react'

const APP_URL = 'https://app.trainersim.com'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about TrainerSim — the AI-powered training simulation platform built by Pacific Wave Digital to transform how teams practice professional conversations.',
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#EF5E33] rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-4">About Us</p>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              Transforming Professional Training with{' '}
              <span className="text-[#EF5E33]">AI</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              TrainerSim was built on a simple belief: the best way to master any conversation is to 
              practice it. We use AI to create realistic training simulations that help professionals 
              build confidence and skills at a fraction of the traditional cost.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-[#EF5E33] to-[#d94e28] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-6 h-6" />, number: '500+', label: 'Organizations' },
              { icon: <BarChart3 className="w-6 h-6" />, number: '10,000+', label: 'Training Sessions' },
              { icon: <Globe className="w-6 h-6" />, number: '12', label: 'Industries' },
              { icon: <Award className="w-6 h-6" />, number: '190+', label: 'AI Agents' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center mx-auto mb-3">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-white">{stat.number}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-3">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#233C6F] mb-6">Democratizing Professional Training</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We&apos;re on a mission to democratize professional training. Traditional role-play 
                workshops are expensive, inconsistent, and hard to scale. TrainerSim gives every 
                team member access to 24/7 AI trainers that provide realistic, measurable practice.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether it&apos;s a sales rep practicing objection handling, a doctor improving 
                bedside manner, or a customer service agent learning de-escalation — TrainerSim 
                provides a safe space to practice, fail, learn, and improve.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#233C6F]/5 to-[#EF5E33]/5 rounded-2xl p-10 border border-gray-100">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: <Users className="w-8 h-8" />, number: '500+', label: 'Organizations' },
                  { icon: <BarChart3 className="w-8 h-8" />, number: '10,000+', label: 'Training Sessions' },
                  { icon: <Globe className="w-8 h-8" />, number: '12', label: 'Industries' },
                  { icon: <Award className="w-8 h-8" />, number: '190+', label: 'AI Agents' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#233C6F]/10 text-[#233C6F] flex items-center justify-center mx-auto mb-3">
                      {stat.icon}
                    </div>
                    <p className="text-2xl font-bold text-[#233C6F]">{stat.number}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#233C6F] mb-4">What Drives Us</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our core values shape every feature we build and every decision we make
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: 'Measurable Impact',
                content: 'Every training session produces real data — scores, transcripts, and improvement trends. We believe training should be measurable, not just felt.',
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: 'Innovation First',
                content: 'We combine the latest in AI — video avatars, voice synthesis, and LLM technology — to create the most realistic training simulations possible.',
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: 'Accessible Training',
                content: 'Great training shouldn\'t be reserved for companies with big budgets. TrainerSim makes professional development accessible at a fraction of the traditional cost.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-xl bg-[#EF5E33]/10 text-[#EF5E33] flex items-center justify-center mb-5 group-hover:bg-[#EF5E33] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#233C6F] text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-3">Technology</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#233C6F] mb-4">Powered by Cutting-Edge AI</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              TrainerSim integrates best-in-class AI technologies to deliver an unmatched training experience
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Anam AI',
                desc: 'Photorealistic video avatars with natural facial expressions and lip sync.',
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'ElevenLabs',
                desc: 'Natural, expressive voice synthesis for realistic audio conversations.',
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'OpenRouter',
                desc: 'Access to the best LLMs for intelligent, contextual AI responses.',
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Supabase',
                desc: 'Enterprise-grade infrastructure for secure, scalable data management.',
              },
            ].map((tech, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#233C6F]/10 text-[#233C6F] flex items-center justify-center mx-auto mb-4">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-[#233C6F] text-lg mb-2">{tech.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pacific Wave Digital */}
      <section className="bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#EF5E33] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Image
            src="/trainersim-logo-white.png"
            alt="TrainerSim"
            width={80}
            height={80}
            className="rounded-xl mx-auto mb-8"
          />
          <h3 className="text-3xl font-bold mb-6">Built by Pacific Wave Digital</h3>
          <p className="text-blue-100 text-lg max-w-lg mx-auto mb-4 leading-relaxed">
            TrainerSim is built by Pacific Wave Digital, a technology company focused on 
            creating innovative AI-powered solutions for professional development and education.
          </p>
          <p className="text-blue-200 text-sm mb-10">
            Based in Vanuatu · Serving organizations worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${APP_URL}/auth`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#EF5E33] hover:bg-[#d94e28] text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/25 text-lg hover:shadow-xl hover:scale-105"
            >
              Start Training Today
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all text-lg border border-white/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
