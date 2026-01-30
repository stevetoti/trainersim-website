'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    annual: '$39',
    period: '/month',
    description: 'Perfect for individuals and small teams getting started with AI training.',
    features: [
      '100 training credits per month',
      'Up to 5 scenarios',
      'Text and audio training modes',
      'Basic performance analytics',
      'Email support',
      '1 user seat',
      'Session recording & playback',
    ],
    cta: 'Start Free Trial',
    href: 'https://app.trainersim.com/auth',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$99',
    annual: '$79',
    period: '/month',
    description: 'For growing teams that need advanced training capabilities and analytics.',
    features: [
      '500 training credits per month',
      'All scenarios included',
      'Video, audio, and text modes',
      'Advanced analytics dashboard',
      'Team management (up to 25 users)',
      'Priority support',
      'Custom branding',
      'Learning pathways',
      'Leaderboards & badges',
      'CSV data export',
    ],
    cta: 'Start Free Trial',
    href: 'https://app.trainersim.com/auth',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    annual: 'Custom',
    period: '',
    description: 'For large organizations with custom requirements and dedicated support.',
    features: [
      'Unlimited training credits',
      'Custom scenario builder',
      'Unlimited users',
      'SSO / SAML authentication',
      'Full API access',
      'Dedicated success manager',
      'Custom integrations',
      'SLA guarantee (99.9%)',
      'On-premise deployment option',
      'Advanced security & compliance',
      'Custom analytics & reporting',
      'White-label option',
    ],
    cta: 'Contact Sales',
    href: '/contact/',
    popular: false,
  },
];

const faqs = [
  {
    question: 'What are training credits?',
    answer: 'Training credits are used each time a user completes a training session. One credit equals one training session, regardless of length. Credits reset monthly on your billing date.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! All plans include a 14-day free trial with full access to features. No credit card required to start. You can upgrade, downgrade, or cancel at any time.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, you get immediate access to new features. When downgrading, changes take effect at the next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual Enterprise plans. All payments are processed securely through Stripe.',
  },
  {
    question: 'Do you offer discounts for non-profits or education?',
    answer: 'Yes, we offer special pricing for non-profit organizations, educational institutions, and government agencies. Contact our sales team for details.',
  },
  {
    question: 'What happens if I run out of credits?',
    answer: 'You can purchase additional credit packs at any time, or upgrade to a higher plan. We\'ll notify you when you\'re approaching your credit limit so you\'re never caught off guard.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use enterprise-grade encryption (AES-256) for all data at rest and in transit. We\'re SOC 2 Type II compliant and GDPR ready. Your training data is never shared or used to train other models.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. You\'ll retain access to your plan features until the end of your current billing period.',
  },
];

const comparisonFeatures = [
  { feature: 'Training Credits', starter: '100/mo', pro: '500/mo', enterprise: 'Unlimited' },
  { feature: 'Scenarios', starter: '5', pro: 'All', enterprise: 'All + Custom' },
  { feature: 'Video Simulations', starter: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Audio Training', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Text Chat Training', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Basic Analytics', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Advanced Analytics', starter: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Team Management', starter: '—', pro: 'Up to 25', enterprise: 'Unlimited' },
  { feature: 'Learning Pathways', starter: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Gamification', starter: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Custom Scenarios', starter: '—', pro: '—', enterprise: '✓' },
  { feature: 'API Access', starter: '—', pro: '—', enterprise: '✓' },
  { feature: 'SSO / SAML', starter: '—', pro: '—', enterprise: '✓' },
  { feature: 'Custom Branding', starter: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Support', starter: 'Email', pro: 'Priority', enterprise: 'Dedicated' },
  { feature: 'SLA', starter: '—', pro: '—', enterprise: '99.9%' },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Pricing"
            title="Simple, Transparent Pricing"
            subtitle="Start your 14-day free trial today. No credit card required. Upgrade or cancel anytime."
          />

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? 'bg-coral-500' : 'bg-navy-600'}`}
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${isAnnual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-coral-500 font-semibold">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative rounded-2xl border ${
                  plan.popular
                    ? 'bg-navy-800 border-coral-500/50 shadow-xl shadow-coral-500/10 scale-105'
                    : 'bg-navy-800/50 border-white/5'
                } flex flex-col`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </span>
                )}
                <div className="p-6 lg:p-8 flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-bold text-white">
                      {plan.price === 'Custom' ? 'Custom' : (isAnnual ? plan.annual : plan.price)}
                    </span>
                    {plan.period && <span className="text-gray-400 text-sm">{plan.period}</span>}
                  </div>
                  {isAnnual && plan.price !== 'Custom' && (
                    <p className="text-coral-400 text-xs mb-3">Billed annually</p>
                  )}
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-coral-500 mt-0.5 flex-shrink-0">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 lg:px-8 lg:pb-8 pt-0">
                  <a
                    href={plan.href}
                    className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all ${
                      plan.popular
                        ? 'bg-coral-500 hover:bg-coral-600 text-white hover:shadow-lg hover:shadow-coral-500/25'
                        : 'bg-navy-700 hover:bg-navy-600 text-white'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-navy-950/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Compare Plans"
            title="Detailed Feature Comparison"
            subtitle="Find the perfect plan for your team's needs."
          />

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-400 font-medium text-sm py-4 pr-4">Feature</th>
                  <th className="text-center text-gray-300 font-semibold text-sm py-4 px-4">Starter</th>
                  <th className="text-center text-coral-500 font-semibold text-sm py-4 px-4">Professional</th>
                  <th className="text-center text-gray-300 font-semibold text-sm py-4 pl-4">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5">
                    <td className="text-gray-300 py-3 pr-4">{row.feature}</td>
                    <td className="text-center py-3 px-4 text-gray-400">{row.starter}</td>
                    <td className="text-center py-3 px-4 text-white font-medium">{row.pro}</td>
                    <td className="text-center py-3 pl-4 text-gray-400">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Got questions? We've got answers."
          />

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-xl border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-navy-800/50 hover:bg-navy-800 transition-colors"
                >
                  <span className="text-white font-medium text-sm">{faq.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 bg-navy-800/30">
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
