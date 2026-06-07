import { motion } from 'framer-motion';

export default function TheMuscle() {
  return (
    <section id="story" className="py-20 sm:py-32 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-[#4ECDC4] text-xs font-medium tracking-[0.25em] uppercase mb-6">
            The Global Challenge
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            We cannot build the future with tools of the past.
          </h2>
          <p className="mt-6 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
            Traditional construction is slow, structurally heavy, and environmentally
            damaging. Brick and mortar cannot solve the global housing deficit.
            What the world needs is a materials revolution.
          </p>
        </motion.div>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
          {[
            { value: '1.6B', label: 'Global Housing Need', sub: 'Without adequate shelter' },
            { value: '13M', label: 'Indonesia Shortfall', sub: 'Housing unit deficit by 2030' },
            { value: '635K', label: 'Fjäll Initial Target', sub: 'Units in first deployment phase' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-neutral-950 p-8 sm:p-10"
            >
              <span className="text-4xl sm:text-5xl font-semibold text-[#4ECDC4] tracking-tight">
                {stat.value}
              </span>
              <p className="mt-3 text-base font-medium text-white">{stat.label}</p>
              <p className="mt-1 text-xs text-neutral-500">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
