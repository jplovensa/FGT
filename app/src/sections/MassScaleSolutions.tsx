import { motion } from 'framer-motion';
import { Building2, Landmark, MapPin, HeartPulse } from 'lucide-react';

const SECTORS = [
  { icon: <Landmark size={24} />, name: 'Government Subsidised Housing', desc: 'National and municipal programmes delivering dignified housing at scale.' },
  { icon: <Building2 size={24} />, name: 'Public-Private Partnerships', desc: 'Collaborative developments where our material supply drives down costs.' },
  { icon: <MapPin size={24} />, name: 'Urban Infill Projects', desc: 'High-density modular deployment with minimal site disruption.' },
  { icon: <HeartPulse size={24} />, name: 'Disaster Relief Rebuilding', desc: 'Rapid-response structural kits for communities that need shelter, fast.' },
];

export default function MassScaleSolutions() {
  return (
    <section id="solutions" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-neutral-950/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-[#4ECDC4] text-xs font-medium tracking-[0.25em] uppercase mb-6">
            Mass-Scale Deployment
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            Changing years to weeks.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
            We specialise in one thing: delivering structural panel systems
            for high-volume housing programmes. No bespoke commissions.
            No luxury one-offs. Only scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {SECTORS.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-neutral-950/90 backdrop-blur-sm p-6 sm:p-8 group hover:bg-neutral-900/80 transition-all duration-500"
            >
              <div className="text-[#4ECDC4] mb-4 group-hover:scale-110 transition-transform duration-500">
                {sector.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                {sector.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-relaxed">
                {sector.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
