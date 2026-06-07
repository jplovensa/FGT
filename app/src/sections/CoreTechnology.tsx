import { motion } from 'framer-motion';
import { Layers, Cpu, Factory } from 'lucide-react';

const TECHS = [
  {
    icon: <Layers size={28} />,
    name: 'GX-100',
    subtitle: 'Panel System',
    desc: 'Our proprietary Polyisocyanurate core panels are an exceptional low-moisture barrier with resistance to elemental threats. Fire suppression rated. Thermally efficient. Manufactured to identical specifications at industrial scale.',
  },
  {
    icon: <Cpu size={28} />,
    name: 'BEMMELS',
    subtitle: 'Smart Connector System',
    desc: 'Precision-engineered structural joint connectors for rapid on-site assembly without specialist tools. Reduces build time by 60% while maintaining seismic-grade integrity across thousands of connections.',
  },
  {
    icon: <Factory size={28} />,
    name: 'Virtual Twin',
    subtitle: 'Volume Configurator',
    desc: 'Every mass-scale project begins as a digital blueprint. Precise material orders, cut lists, and delivery schedules generated from your master plan — eliminating waste and guaranteeing on-time delivery.',
  },
];

export default function CoreTechnology() {
  return (
    <section id="technology" className="py-20 sm:py-32 bg-neutral-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-[#4ECDC4] text-xs font-medium tracking-[0.25em] uppercase mb-6">
            Proprietary Technology
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            Material systems built for scale.
          </h2>
        </motion.div>

        <div className="space-y-px bg-white/5">
          {TECHS.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-neutral-950 p-6 sm:p-10 flex flex-col sm:flex-row gap-5 sm:gap-8 group hover:bg-neutral-900/30 transition-colors duration-500"
            >
              <div className="flex-shrink-0 text-[#4ECDC4] group-hover:scale-110 transition-transform duration-500">
                {tech.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {tech.name}
                  </h3>
                  <span className="text-xs text-[#4ECDC4] font-medium uppercase tracking-wider">
                    {tech.subtitle}
                  </span>
                </div>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed max-w-2xl">
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
