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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/trainersim-logo.png"
              alt="TrainerSim"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-[#233C6F] hidden sm:inline">
              Trainer<span className="text-[#EF5E33]">Sim</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-[#233C6F] hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`${APP_URL}/auth`}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#233C6F] rounded-md transition-colors"
            >
              Log In
            </a>
            <a
              href={`${APP_URL}/auth`}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#EF5E33] hover:bg-[#d94e28] rounded-lg transition-colors shadow-sm"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#233C6F] hover:bg-gray-50"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#233C6F] hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-gray-100" />
            <a
              href={`${APP_URL}/auth`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#233C6F] hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Log In
            </a>
            <a
              href={`${APP_URL}/auth`}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-white bg-[#EF5E33] text-center hover:bg-[#d94e28] mt-2"
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
