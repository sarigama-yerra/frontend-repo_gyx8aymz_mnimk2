import { useState } from 'react';
import { Menu, X, Boxes, Sparkles } from 'lucide-react';

const brandPrimary = '#06232e';
const accent = '#54b477';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Product', href: '#product' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              <Boxes className="h-5 w-5 text-white" />
            </span>
            <div className="leading-tight">
              <p className="font-semibold text-white">Axion WMS</p>
              <p className="text-xs text-white/60">AI Warehouse OS</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-white/80 hover:text-white">Sign in</a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white"
              style={{ background: `linear-gradient(135deg, ${accent}, #4bc092)` }}
            >
              <Sparkles className="h-4 w-4" />
              Book demo
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile */}
        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-white/80 hover:text-white">
                  {l.label}
                </a>
              ))}
              <div className="pt-2 flex items-center gap-3">
                <a href="#" className="text-sm text-white/80 hover:text-white">Sign in</a>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white"
                  style={{ background: `linear-gradient(135deg, ${accent}, #4bc092)` }}
                >
                  <Sparkles className="h-4 w-4" />
                  Book demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
