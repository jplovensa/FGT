import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroB2B() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-aerial.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-neutral-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-transparent to-neutral-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-[#4ECDC4] text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6">
            Industrial Materials &amp; Volume Construction
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[0.95] tracking-tight">
            <span className="block">The Muscle</span>
            <span className="hidden sm:block">Behind Mass-Scale</span>
            <span className="sm:hidden">Behind</span>
            <span className="block">Development.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-neutral-300 font-light tracking-tight"
        >
          Precision Engineered. Sustainably Built.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
        >
          We do not build custom villas. We supply the proprietary panel systems
          and structural materials that make high-volume, low-to-middle-income
          housing financially viable and structurally superior.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 sm:mt-12"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-[#4ECDC4] text-white hover:text-[#4ECDC4] px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-wide transition-all duration-300"
          >
            Explore Material Systems
            <ChevronDown size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
