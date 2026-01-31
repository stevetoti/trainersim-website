import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react'

const APP_URL = 'https://app.trainersim.com'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the TrainerSim team. We\'re here to help with enterprise plans, custom scenarios, and any questions about AI training simulations.',
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-[#EF5E33] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#EF5E33] font-semibold text-sm uppercase tracking-wider mb-4">Contact</p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about TrainerSim? Want to discuss enterprise plans or custom scenarios? 
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#233C6F] mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EF5E33]/10 text-[#EF5E33] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#233C6F] mb-1">Email</h3>
                    <a href="mailto:hello@trainersim.com" className="text-gray-600 hover:text-[#EF5E33] transition-colors">
                      hello@trainersim.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EF5E33]/10 text-[#EF5E33] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#233C6F] mb-1">Sales Inquiries</h3>
                    <a href="mailto:sales@trainersim.com" className="text-gray-600 hover:text-[#EF5E33] transition-colors">
                      sales@trainersim.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EF5E33]/10 text-[#EF5E33] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#233C6F] mb-1">Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Pacific Wave Digital<br />
                      Port Vila, Vanuatu<br />
                      Serving organizations worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EF5E33]/10 text-[#EF5E33] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#233C6F] mb-1">Response Time</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="mt-10 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-semibold text-[#233C6F] mb-5 text-lg">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/pricing" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#EF5E33] transition-colors font-medium">
                    <ArrowRight className="w-3 h-3" />
                    View Pricing Plans
                  </Link>
                  <Link href="/features" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#EF5E33] transition-colors font-medium">
                    <ArrowRight className="w-3 h-3" />
                    Explore Features
                  </Link>
                  <Link href="/use-cases" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#EF5E33] transition-colors font-medium">
                    <ArrowRight className="w-3 h-3" />
                    Browse Use Cases
                  </Link>
                  <a href={`${APP_URL}/auth`} className="flex items-center gap-2 text-sm text-[#EF5E33] font-semibold hover:text-[#d94e28] transition-colors">
                    <ArrowRight className="w-3 h-3" />
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#233C6F] mb-2">Send Us a Message</h2>
                <p className="text-gray-600 text-sm mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
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
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EF5E33]/50 focus:border-[#EF5E33] transition-colors text-sm bg-white"
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
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EF5E33]/50 focus:border-[#EF5E33] transition-colors text-sm bg-white"
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
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EF5E33]/50 focus:border-[#EF5E33] transition-colors text-sm bg-white"
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
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EF5E33]/50 focus:border-[#EF5E33] transition-colors text-sm bg-white"
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
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EF5E33]/50 focus:border-[#EF5E33] transition-colors text-sm text-gray-700 bg-white"
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
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EF5E33]/50 focus:border-[#EF5E33] transition-colors text-sm text-gray-700 bg-white"
                    >
                      <option value="">Select team size...</option>
                      <option value="1-5">1–5 people</option>
                      <option value="6-20">6–20 people</option>
                      <option value="21-50">21–50 people</option>
                      <option value="51-200">51–200 people</option>
                      <option value="200+">200+ people</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EF5E33]/50 focus:border-[#EF5E33] transition-colors text-sm resize-none bg-white"
                      placeholder="Tell us about your training needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#EF5E33] hover:bg-[#d94e28] text-white font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:scale-105 text-lg"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-[#233C6F] via-[#1e3461] to-[#162849] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#EF5E33] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Skip the form and jump right in. Start your free trial today — no credit card required.
          </p>
          <a
            href={`${APP_URL}/auth`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#EF5E33] hover:bg-[#d94e28] text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/25 text-lg hover:shadow-xl hover:scale-105"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
