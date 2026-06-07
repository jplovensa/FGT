import { motion } from 'framer-motion';
import { Factory, Container, Globe } from 'lucide-react';

const MODELS = [
  {
    icon: <Factory size={28} />,
    title: 'Licencee Model',
    subtitle: 'Regional Manufacturing Rights',
    desc: 'Secure exclusive regional rights to manufacture Fjäll GX-100 panels under licence. We provide the facility blueprint, production training, quality control protocols, and ongoing technical support.',
    partner: 'Established Manufacturers & Regional Developers',
  },
  {
    icon: <Container size={28} />,
    title: 'Volume Supply',
    subtitle: 'Direct Panel Procurement',
    desc: 'Order precision-engineered structural panel systems directly from our Indonesian manufacturing hub. We handle fabrication, quality control, and logistics — delivering flat-packed kits to your site on schedule.',
    partner: 'Housing Developers & Government Programmes',
  },
  {
    icon: <Globe size={28} />,
    title: 'Global Export',
    subtitle: 'International Material Distribution',
    desc: 'Source Fjäll structural kits for deployment anywhere in the world. Benefit from ultra-lightweight logistics that slash shipping costs, and deploy our specialist assembly consultants to train your construction teams.',
    partner: 'International Buyers & Government Entities',
  },
];

export default function DeliveryPipeline() {
  return (
    <section id="pipeline" className="py-20 sm:py-32 bg-neutral-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-[#4ECDC4] text-xs font-medium tracking-[0.25em] uppercase mb-6">
            Deployment Models
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            Three ways to access our materials.
          </h2>
        </motion.div>

        <div className="space-y-px bg-white/5">
          {MODELS.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-neutral-950 p-6 sm:p-10 flex flex-col sm:flex-row gap-5 sm:gap-8 group hover:bg-neutral-900/30 transition-colors duration-500"
            >
              <div className="flex-shrink-0 text-[#4ECDC4] group-hover:scale-110 transition-transform duration-500">
                {model.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {model.title}
                  </h3>
                  <span className="text-xs text-[#4ECDC4] font-medium tracking-wider">
                    {model.subtitle}
                  </span>
                </div>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed max-w-2xl">
                  {model.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 border border-white/10 px-3 py-1.5">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Ideal Partner</span>
                  <span className="text-xs text-neutral-300">{model.partner}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
