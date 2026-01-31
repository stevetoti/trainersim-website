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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises. Cancel anytime.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Plan cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16 -mt-20 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-xl p-6 border-2 shadow-lg ${
                plan.popular
                  ? 'border-brand-orange shadow-xl shadow-orange-100 scale-105 z-10'
                  : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-orange text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold text-brand-blue">{plan.name}</h3>
              <div className="mt-4 mb-4">
                <span className="text-4xl font-bold text-brand-blue">{plan.price}</span>
                {plan.period && <span className="text-gray-500">{plan.period}</span>}
              </div>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
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
                className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-brand-orange hover:bg-brand-orange-dark text-white'
                    : 'bg-brand-blue hover:bg-brand-blue-dark text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-brand-blue">Compare Plans</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Feature</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-600">Starter</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-brand-orange">Professional</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-600">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-3 text-sm text-gray-700">{row.feature}</td>
                    {(['starter', 'professional', 'enterprise'] as const).map((plan) => (
                      <td key={plan} className="px-4 py-3 text-sm text-center">
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

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brand-blue text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-brand-blue mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-orange shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-xl transition-all"
          >
            Talk to our team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
