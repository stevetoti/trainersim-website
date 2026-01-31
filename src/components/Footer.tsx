'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Twitter, Linkedin, Github } from 'lucide-react'

const APP_URL = 'https://app.trainersim.com'

const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'How It Works', href: '/features#how-it-works' },
  ],
  industries: [
    { label: 'Sales Training', href: '/use-cases#sales' },
    { label: 'Healthcare', href: '/use-cases#healthcare' },
    { label: 'Customer Service', href: '/use-cases#customer-service' },
    { label: 'HR & Management', href: '/use-cases#hr' },
    { label: 'Education', href: '/use-cases#education' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#233C6F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/trainersim-logo-white.png"
                alt="TrainerSim"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-white">
                Trainer<span className="text-[#EF5E33]">Sim</span>
              </span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6 max-w-sm">
              AI-powered training simulations with 190 agents across 12 industries. 
              Master high-stakes conversations with confidence.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/trainersim" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/trainersim" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/stevetoti" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-white mb-4">Industries</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-blue-500/30 mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-white mb-1">Stay Updated</h3>
              <p className="text-blue-200 text-sm">Get the latest news on AI training innovations</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2 rounded-lg bg-blue-800/50 border border-blue-400/30 text-white placeholder:text-blue-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EF5E33] w-full md:w-64"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#EF5E33] hover:bg-[#d94e28] text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2 shrink-0"
              >
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-500/30 mt-8 pt-6 text-center">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} TrainerSim — A{' '}
            <a
              href="https://pacificwavedigital.com"
              className="text-[#EF5E33] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pacific Wave Digital
            </a>{' '}
            Product. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
