import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Material Science', href: '#technology' },
  { label: 'Mass-Scale Housing', href: '#solutions' },
  { label: 'Deployment', href: '#pipeline' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-neutral-950/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <a
              href="#"
              className="flex-shrink-0"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img
                src="/images/fjall-logo.png"
                alt="Fjäll Green Tech"
                className="h-8 sm:h-10 w-auto"
              />
            </a>

            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleLinkClick('#contact')}
                className="text-sm text-neutral-950 bg-[#4ECDC4] hover:bg-[#3DBDB4] px-6 py-2.5 transition-colors duration-300 font-medium tracking-wide"
              >
                Consult on Volume Builds
              </button>
            </div>

            <button
              className="lg:hidden text-white p-2 -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-neutral-950 pt-20 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left text-lg text-neutral-300 hover:text-[#4ECDC4] py-4 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleLinkClick('#contact')}
                className="mt-6 text-sm text-neutral-950 bg-[#4ECDC4] hover:bg-[#3DBDB4] px-8 py-4 transition-colors font-medium tracking-wide text-center"
              >
                Consult on Volume Builds
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
