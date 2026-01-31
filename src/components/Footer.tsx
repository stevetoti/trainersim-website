import Link from 'next/link';
import Image from 'next/image';

const APP_URL = 'https://app.trainersim.com/auth';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Use Cases', href: '#use-cases' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Changelog', href: '#changelog' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Sales Training', href: '#use-cases' },
      { label: 'Healthcare', href: '#use-cases' },
      { label: 'Customer Service', href: '#use-cases' },
      { label: 'Education', href: '#use-cases' },
      { label: 'HR & Management', href: '#use-cases' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: 'mailto:hello@trainersim.com' },
      { label: 'Press', href: '#press' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Security', href: '#security' },
      { label: 'GDPR', href: '#gdpr' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/trainersim-logo-white.png"
                alt="TrainerSim"
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
              />
              <span className="text-lg font-bold text-white">
                Trainer<span className="text-brand-orange">Sim</span>
              </span>
            </Link>
            <p className="text-base text-dark-300 leading-relaxed max-w-sm mb-8">
              AI-powered training simulations with 380 agents across 12 industries. 
              Master high-stakes conversations with confidence.
            </p>
            <a
              href={APP_URL}
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-xl bg-brand-orange text-white hover:bg-brand-orange-light transition-all shadow-lg shadow-brand-orange/20"
            >
              Get Started Free
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </a>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {[
                { name: 'twitter', href: 'https://x.com/trainersim' },
                { name: 'linkedin', href: 'https://linkedin.com/company/trainersim' },
                { name: 'github', href: 'https://github.com/stevetoti' },
              ].map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-brand-orange transition-colors" aria-label={s.name}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    {s.name === 'twitter' && <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />}
                    {s.name === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />}
                    {s.name === 'github' && <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-base font-semibold text-white mb-6">{col.title}</h3>
              <ul className="space-y-4">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-base text-dark-300 hover:text-brand-orange transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-dark-400">
            &copy; {new Date().getFullYear()} TrainerSim by Pacific Wave Digital. All rights reserved.
          </p>
          <p className="text-sm text-dark-400">
            380 AI agents · 12 industries · Unlimited potential
          </p>
        </div>
      </div>
    </footer>
  );
}
