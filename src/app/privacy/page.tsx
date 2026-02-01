import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'TrainerSim Privacy Policy — how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#EF5E33] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-blue-200 text-sm">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">1. Introduction</h2>
              <p>
                TrainerSim (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is operated by Pacific Wave Digital. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you use our 
                AI-powered training simulation platform at trainersim.com and app.trainersim.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-[#233C6F] mb-2">Account Information</h3>
              <p className="mb-4">
                When you create an account, we collect your name, email address, organization name, 
                and role. For paid plans, we collect payment information processed securely through Stripe.
              </p>
              <h3 className="text-lg font-semibold text-[#233C6F] mb-2">Training Session Data</h3>
              <p className="mb-4">
                We collect data from your training sessions, including conversation transcripts, 
                audio recordings (in audio mode), performance scores, and session metadata. This data 
                is used to provide scoring, analytics, and improvement tracking.
              </p>
              <h3 className="text-lg font-semibold text-[#233C6F] mb-2">Usage Data</h3>
              <p>
                We automatically collect information about how you interact with our platform, 
                including pages visited, features used, session duration, and device information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain the TrainerSim platform</li>
                <li>Generate performance scores and analytics</li>
                <li>Create session transcripts and PDF reports</li>
                <li>Improve our AI agents and training quality</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send important service updates and communications</li>
                <li>Provide customer support</li>
                <li>Analyze usage patterns to improve the platform</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">4. Third-Party Services</h2>
              <p className="mb-4">We use the following third-party services to power our platform:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Anam AI</strong> — Video avatar generation for premium video mode</li>
                <li><strong>ElevenLabs</strong> — Voice synthesis for audio conversations</li>
                <li><strong>OpenRouter</strong> — AI language models for conversation intelligence</li>
                <li><strong>Supabase</strong> — Database and authentication infrastructure</li>
                <li><strong>Stripe</strong> — Secure payment processing</li>
              </ul>
              <p className="mt-4">
                Each service processes only the minimum data necessary. Audio and video streams are 
                processed in real-time and not permanently stored by these third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">5. Data Retention</h2>
              <p>
                We retain your training session data for as long as your account is active. Session 
                transcripts and scores are stored to enable progress tracking and analytics. You may 
                request deletion of your data at any time by contacting us at{' '}
                <a href="mailto:hello@trainersim.com" className="text-[#EF5E33] hover:underline">
                  hello@trainersim.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">6. Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption in transit (TLS), 
                encryption at rest, role-based access controls, and regular security audits. Enterprise 
                customers can request additional security measures including dedicated infrastructure 
                and SSO/SAML integration.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">7. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your training data</li>
                <li>Opt out of non-essential communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">8. Cookies</h2>
              <p>
                We use essential cookies for authentication and session management. We may use 
                analytics cookies to understand how our platform is used. You can control cookie 
                preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">9. Children&apos;s Privacy</h2>
              <p>
                TrainerSim is designed for professional use and is not intended for individuals under 
                the age of 16. We do not knowingly collect data from children.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material 
                changes via email or through the platform. Continued use of TrainerSim after changes 
                constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#233C6F] mb-4">11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
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
