'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const APP_URL = 'https://app.trainersim.com'

const NAV_LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/trainersim-logo.png"
              alt="TrainerSim"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-brand-blue hidden sm:inline">
              Trainer<span className="text-brand-orange">Sim</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`${APP_URL}/auth`}
              className="px-4 py-2 text-sm font-medium text-brand-blue hover:bg-gray-50 rounded-md transition-colors"
            >
              Log In
            </a>
            <a
              href={`${APP_URL}/auth`}
              className="px-4 py-2 text-sm font-medium text-white bg-brand-orange hover:bg-brand-orange-dark rounded-lg transition-colors shadow-sm"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-50"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2" />
            <a
              href={`${APP_URL}/auth`}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-blue hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Log In
            </a>
            <a
              href={`${APP_URL}/auth`}
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-brand-orange text-center hover:bg-brand-orange-dark mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
