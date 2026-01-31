import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, HelpCircle, ArrowRight } from 'lucide-react'

const APP_URL = 'https://app.trainersim.com'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for TrainerSim AI training simulations. Start free, scale as you grow.',
}

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/user/mo',
    description: 'Perfect for individuals and small teams getting started with AI training simulations.',
    popular: false,
    cta: 'Start Free Trial',
    href: `${APP_URL}/auth`,
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
    description: 'For growing teams that need video avatars, advanced analytics, and learning pathways.',
    popular: true,
    cta: 'Start Free Trial',
    href: `${APP_URL}/auth`,
    features: [
      'Up to 50 users',
      'Video mode (Anam AI avatars)',
      'Audio mode included',
      'All 190 AI agents',
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
    description: 'Unlimited training for large organizations with custom integration needs.',
    popular: false,
    cta: 'Contact Sales',
    href: '/contact',
    features: [
      'Unlimited users',
      'Everything in Professional',
      'Custom AI personas',
      'SSO & SAML integration',
      'API access',
      'Dedicated success manager',
      'SLA guarantee',
      'Multi-tenant isolation',
      'On-premise option',
      'Custom integrations',
    ],
  },
]

const comparisonFeatures = [
  { feature: 'Users', starter: 'Up to 5', professional: 'Up to 50', enterprise: 'Unlimited' },
  { feature: 'AI Agents', starter: 'All categories', professional: 'All 190 agents', enterprise: 'All + Custom' },
  { feature: 'Video Avatars', starter: false, professional: true, enterprise: true },
  { feature: 'Audio Mode', starter: true, professional: true, enterprise: true },
  { feature: 'Text Chat Mode', starter: true, professional: true, enterprise: true },
  { feature: 'Real-Time Scoring', starter: 'Basic', professional: 'Advanced', enterprise: 'Advanced + Custom' },
  { feature: 'Session Transcripts', starter: true, professional: true, enterprise: true },
  { feature: 'PDF Reports', starter: false, professional: true, enterprise: true },
  { feature: 'Team Management', starter: false, professional: true, enterprise: true },
  { feature: 'Analytics Dashboard', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
  { feature: 'Learning Pathways', starter: false, professional: '12 pathways', enterprise: '12 + Custom' },
  { feature: 'Certifications', starter: false, professional: true, enterprise: true },
  { feature: 'Custom Scenarios', starter: false, professional: true, enterprise: true },
  { feature: 'Custom AI Personas', starter: false, professional: false, enterprise: true },
  { feature: 'Gamification', starter: 'Basic', professional: 'Full', enterprise: 'Full + Custom' },
  { feature: 'SSO & SAML', starter: false, professional: false, enterprise: true },
  { feature: 'API Access', starter: false, professional: false, enterprise: true },
  { feature: 'Support', starter: 'Email', professional: 'Priority', enterprise: 'Dedicated' },
]

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes! Every plan comes with a 14-day free trial. No credit card required to start. You can explore all features and cancel anytime.',
  },
  {
    q: 'How does credits-based billing work?',
    a: 'Each plan includes a monthly credit allocation. Credits are consumed per training session based on mode (video uses more credits than audio/text). Unused credits roll over for one month.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Absolutely. You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards through Stripe. Enterprise customers can also pay via invoice or bank transfer.',
  },
  {
    q: 'Do you offer discounts for annual billing?',
    a: 'Yes, we offer a 20% discount when you pay annually. Contact sales for enterprise volume discounts.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes, there are no long-term contracts. Cancel anytime and your access continues until the end of your billing period.',
  },
]

export default function PricingPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#EF5E33] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-4">Pricing</p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Start free, scale as you grow. No hidden fees, no surprises. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-gray-50 py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Plan cards - overlap into hero */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24 -mt-16 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-[#EF5E33] shadow-xl shadow-orange-100 scale-[1.03] z-10'
                    : 'border-gray-100 shadow-lg hover:shadow-xl'
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
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={`block text-center py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#EF5E33] hover:bg-[#d94e28] text-white shadow-sm hover:shadow-md'
                      : 'bg-[#233C6F] hover:bg-[#1A2D54] text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-[#233C6F]">Compare Plans</h2>
              <p className="text-gray-600 text-sm mt-1">See which plan is right for your team</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Feature</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-gray-600">Starter</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-[#EF5E33]">Professional</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-gray-600">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {comparisonFeatures.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3.5 text-sm text-gray-700 font-medium">{row.feature}</td>
                      {(['starter', 'professional', 'enterprise'] as const).map((plan) => (
                        <td key={plan} className="px-4 py-3.5 text-sm text-center">
                          {row[plan] === true ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : row[plan] === false ? (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          ) : (
                            <span className="text-gray-700">{row[plan]}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#233C6F] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">Everything you need to know about our pricing</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-[#233C6F] mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#EF5E33] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#EF5E33] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Our team is ready to help you find the perfect plan for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#EF5E33] hover:bg-[#d94e28] text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/25 text-lg hover:shadow-xl hover:scale-105"
            >
              Talk to Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`${APP_URL}/auth`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all backdrop-blur-sm text-lg border border-white/20"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
