import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'TrainerSim Terms of Service — the rules and guidelines for using our AI training simulation platform.',
}

export default function TermsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#EF5E33] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-blue-200 text-sm">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using TrainerSim (&quot;the Platform&quot;), operated by Pacific Wave Digital 
                (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service. If you 
                do not agree to these terms, please do not use the Platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">2. Description of Service</h2>
              <p>
                TrainerSim is an AI-powered training simulation platform that enables users to practice 
                professional conversations with AI agents across multiple industries. The Platform 
                provides video, audio, and text-based training modes with real-time scoring and analytics.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">3. Account Registration</h2>
              <p className="mb-4">To use TrainerSim, you must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be at least 16 years of age</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly notify us of any unauthorized access</li>
              </ul>
              <p className="mt-4">
                You are responsible for all activity that occurs under your account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">4. Subscription & Billing</h2>
              <p className="mb-4">
                TrainerSim offers multiple subscription tiers. By subscribing to a paid plan:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You authorize us to charge your payment method on a recurring basis</li>
                <li>Subscriptions auto-renew unless cancelled before the renewal date</li>
                <li>All plans include a 14-day free trial for new users</li>
                <li>Prices are in USD and may be updated with 30 days&apos; notice</li>
                <li>Refunds are handled on a case-by-case basis within 30 days of purchase</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">5. Credits System</h2>
              <p>
                Training sessions consume credits based on the mode used (video, audio, or text). 
                Credit allocations are determined by your subscription plan. Unused credits may roll 
                over for one billing cycle. Credits have no cash value and are non-transferable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">6. Acceptable Use</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Platform for any unlawful purpose</li>
                <li>Attempt to extract, reverse-engineer, or copy our AI models or training data</li>
                <li>Share account credentials with unauthorized users</li>
                <li>Abuse, harass, or use inappropriate language with AI agents</li>
                <li>Use automated tools to interact with the Platform without authorization</li>
                <li>Resell or redistribute access to the Platform</li>
                <li>Interfere with the Platform&apos;s infrastructure or other users&apos; experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">7. Intellectual Property</h2>
              <p className="mb-4">
                All content, AI agents, scoring algorithms, training scenarios, and platform design 
                are the intellectual property of Pacific Wave Digital. Your training data (transcripts, 
                scores, reports) belongs to you and your organization.
              </p>
              <p>
                You may download and share your session transcripts and PDF reports within your 
                organization. You may not reproduce or distribute TrainerSim&apos;s proprietary content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">8. AI Training Disclaimer</h2>
              <p>
                TrainerSim provides AI-powered simulations for training purposes only. AI agent responses 
                are generated by artificial intelligence and do not constitute professional advice. 
                Performance scores are algorithmic assessments and should be used as one component of a 
                comprehensive training program. Results may vary based on usage and individual factors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">9. Service Availability</h2>
              <p>
                We strive for high availability but do not guarantee uninterrupted access to the Platform. 
                We may perform maintenance, updates, or experience outages. Enterprise customers with 
                SLA agreements are covered under their specific terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Pacific Wave Digital shall not be liable for 
                any indirect, incidental, special, consequential, or punitive damages arising from your 
                use of TrainerSim. Our total liability shall not exceed the amount you paid for the 
                Platform in the twelve months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">11. Termination</h2>
              <p>
                You may cancel your subscription at any time. We reserve the right to suspend or 
                terminate accounts that violate these Terms. Upon termination, you may request export 
                of your training data within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">12. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. Material changes will be communicated via email 
                or platform notification at least 30 days in advance. Continued use after changes take 
                effect constitutes acceptance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">13. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the Republic of Vanuatu. Any disputes shall 
                be resolved through binding arbitration in Port Vila, Vanuatu, unless otherwise agreed 
                in an Enterprise agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">14. Contact</h2>
              <p>
                For questions about these Terms, please contact us:
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="font-semibold text-[#233C6F]">Pacific Wave Digital</p>
                <p>Email: <a href="mailto:hello@trainersim.com" className="text-[#EF5E33] hover:underline">hello@trainersim.com</a></p>
                <p>Location: Port Vila, Vanuatu</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#EF5E33] hover:text-[#d94e28] font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
