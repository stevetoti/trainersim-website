import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, Clock, MessageSquare, Phone, ArrowRight } from 'lucide-react'

const APP_URL = 'https://app.trainersim.com'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the TrainerSim team. We\'re here to help with enterprise plans, custom scenarios, and any questions about AI training simulations.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Have questions about TrainerSim? Want to discuss enterprise plans or custom scenarios? 
            We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-brand-blue mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-blue mb-1">Email</h3>
                  <a href="mailto:hello@trainersim.com" className="text-gray-600 hover:text-brand-orange transition-colors">
                    hello@trainersim.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-blue mb-1">Sales Inquiries</h3>
                  <a href="mailto:sales@trainersim.com" className="text-gray-600 hover:text-brand-orange transition-colors">
                    sales@trainersim.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-blue mb-1">Location</h3>
                  <p className="text-gray-600">
                    Pacific Wave Digital<br />
                    Port Vila, Vanuatu<br />
                    Serving organizations worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-blue mb-1">Response Time</h3>
                  <p className="text-gray-600">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="mt-10 p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-brand-blue mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/pricing" className="block text-sm text-gray-600 hover:text-brand-orange transition-colors">
                  → View Pricing Plans
                </Link>
                <Link href="/features" className="block text-sm text-gray-600 hover:text-brand-orange transition-colors">
                  → Explore Features
                </Link>
                <Link href="/use-cases" className="block text-sm text-gray-600 hover:text-brand-orange transition-colors">
                  → Browse Use Cases
                </Link>
                <a href={`${APP_URL}/auth`} className="block text-sm text-brand-orange font-medium hover:text-brand-orange-dark transition-colors">
                  → Start Free Trial
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">Send Us a Message</h2>
              <form action="mailto:hello@trainersim.com" method="POST" encType="text/plain">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors text-sm"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors text-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors text-sm"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors text-sm text-gray-700"
                  >
                    <option value="">Select a topic...</option>
                    <option value="demo">Request a Demo</option>
                    <option value="enterprise">Enterprise Pricing</option>
                    <option value="custom">Custom Scenarios</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Team Size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors text-sm text-gray-700"
                  >
                    <option value="">Select team size...</option>
                    <option value="1-5">1–5 people</option>
                    <option value="6-20">6–20 people</option>
                    <option value="21-50">21–50 people</option>
                    <option value="51-200">51–200 people</option>
                    <option value="200+">200+ people</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors text-sm resize-none"
                    placeholder="Tell us about your training needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-xl transition-all shadow-sm"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-blue mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Skip the form and jump right in. Start your free trial today — no credit card required.
          </p>
          <a
            href={`${APP_URL}/auth`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-xl transition-all shadow-lg text-lg"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
