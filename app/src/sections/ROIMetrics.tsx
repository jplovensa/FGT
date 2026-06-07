import { motion } from 'framer-motion';
import { Shield, Droplets, Flame, ShieldCheck, Zap, Leaf } from 'lucide-react';

const ADVANTAGES = [
  { icon: <Shield size={24} />, title: 'Seismic Proof', desc: 'Absorbs kinetic energy, maintains integrity during extreme seismic activity.' },
  { icon: <Droplets size={24} />, title: 'Waterproof', desc: 'Monolithic barriers prevent water ingress in harsh climates.' },
  { icon: <Flame size={24} />, title: 'Fireproof', desc: 'GX-100 technology slows fire spread and reduces smoke emission.' },
  { icon: <ShieldCheck size={24} />, title: 'Mould Resistant', desc: 'Breathable composites resist dampness and mould proliferation.' },
  { icon: <Zap size={24} />, title: 'Rapid Assembly', desc: 'Precision off-site manufacturing, simple on-site integration.' },
  { icon: <Leaf size={24} />, title: 'Sustainable', desc: 'Fewer shipments, lower transport costs, drastically reduced CO2.' },
];

export default function ROIMetrics() {
  return (
    <section id="advantage" className="py-20 sm:py-32 bg-neutral-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-[#4ECDC4] text-xs font-medium tracking-[0.25em] uppercase mb-6">
            The Fjäll Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            Engineered for volume. Built to outlast.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {ADVANTAGES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-neutral-950 p-6 sm:p-8 group hover:bg-neutral-900/50 transition-colors duration-500"
            >
              <div className="text-[#4ECDC4] mb-4 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
