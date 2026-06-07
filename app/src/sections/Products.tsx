import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, Weight, ChevronRight, ShieldCheck, Droplets, Flame, Zap } from 'lucide-react';

const COMPOSITION = [
  { num: '01', name: 'Kalcia Board', role: 'Facing', desc: 'Impact-resistant, fire-rated surface' },
  { num: '02', name: 'Fibreglass Mesh', role: 'Reinforcement', desc: 'Tensile strength grid' },
  { num: '03', name: 'EPS Core', role: 'Insulation', desc: 'Expanded Polystyrene thermal core' },
  { num: '04', name: 'PU Glue', role: 'Bonding', desc: 'Polyurethane monolithic seal' },
];

const SPECS = [
  { label: 'Widths', val: '1.2m, 2.4m' },
  { label: 'Heights', val: 'Up to 3.6m' },
  { label: 'Thickness', val: '100 / 150 / 200mm' },
  { label: 'R-Value', val: '7.0+ per inch' },
  { label: 'Fire', val: 'Class A' },
  { label: 'Seismic', val: 'Zone 4' },
];

const SLABS = [
  { code: 'GBX200', thick: '22.3 cm', eps: '20 cm', load: '2.0 kN/m\u00B2', span: '6.0m', use: 'Residential' },
  { code: 'GBX300', thick: '33.8 cm', eps: '30 cm', load: '3.0 kN/m\u00B2', span: '8.0m', use: 'Commercial' },
];

const ADVANTAGES = [
  { icon: <Zap size={18} />, title: 'Under 1 month', desc: 'Structural assembly post-foundation' },
  { icon: <ShieldCheck size={18} />, title: 'Lightweight', desc: 'Minimal heavy machinery on site' },
  { icon: <Flame size={18} />, title: 'Non-corrosive', desc: 'Basalt fibre, no degradation' },
  { icon: <Droplets size={18} />, title: 'Thermal', desc: 'Passive house performance' },
];

export default function Products() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <section id="products" className="py-20 sm:py-32 bg-neutral-950 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-[#4ECDC4] text-xs font-medium tracking-[0.25em] uppercase mb-4">
            Product Range
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            The FGT System
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
            Engineered structural panels for volume housing. Four layers, one monolithic unit.
          </p>
        </motion.div>

        {/* Panel Composition — Immersive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 sm:mb-16 border border-white/5"
        >
          <div className="grid md:grid-cols-5 gap-0">
            {/* Image — takes 3 cols on desktop */}
            <div className="md:col-span-3 relative bg-neutral-900/50 min-h-[280px] sm:min-h-[400px] flex items-center justify-center p-6 sm:p-10">
              <img
                src="/images/panel-breakdown-dark.png"
                alt="FGT Panel exploded view showing four layers"
                className="w-full max-w-md h-auto object-contain"
              />
              {/* Overlay label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6">
                <span className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider whitespace-nowrap">
                  Wall Panel &middot; Exploded View
                </span>
              </div>
            </div>

            {/* Layer breakdown — takes 2 cols */}
            <div className="md:col-span-2 bg-neutral-950 p-5 sm:p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5">
              <p className="text-xs text-[#4ECDC4] uppercase tracking-wider mb-5 sm:mb-6">
                Composition
              </p>
              <div className="space-y-0">
                {COMPOSITION.map((item, i) => (
                  <button
                    key={item.num}
                    onMouseEnter={() => setActiveLayer(i)}
                    onMouseLeave={() => setActiveLayer(null)}
                    onClick={() => setActiveLayer(activeLayer === i ? null : i)}
                    className={`w-full text-left py-3 sm:py-4 border-b border-white/5 transition-all duration-300 ${
                      activeLayer === i ? 'pl-3' : 'pl-0'
                    }`}
                  >
                    <div className="flex items-baseline gap-2 sm:gap-3">
                      <span className={`text-xs font-semibold transition-colors ${
                        activeLayer === i ? 'text-[#4ECDC4]' : 'text-neutral-600'
                      }`}>
                        {item.num}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className={`text-sm sm:text-base font-medium transition-colors ${
                            activeLayer === i ? 'text-white' : 'text-neutral-300'
                          }`}>
                            {item.name}
                          </span>
                          <span className="text-[10px] sm:text-xs text-neutral-600 uppercase tracking-wider">
                            {item.role}
                          </span>
                        </div>
                        <AnimatePresence>
                          {activeLayer === i && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-xs text-neutral-500 mt-1 overflow-hidden"
                            >
                              {item.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                      <ChevronRight size={14} className={`text-neutral-600 flex-shrink-0 transition-all ${
                        activeLayer === i ? 'rotate-90 text-[#4ECDC4]' : ''
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
              <p className="mt-5 text-xs text-neutral-600 leading-relaxed">
                Factory-bonded under controlled conditions. Arrive flat-packed. Assemble immediately. No wet trades.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Two Systems Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {/* Wall Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-neutral-950 p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-1">
              <Ruler size={16} className="text-[#4ECDC4]" />
              <span className="text-[10px] sm:text-xs text-[#4ECDC4] font-medium uppercase tracking-wider">Primary</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              Wall Panel System
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-relaxed">
              EPS core with Kalcia board facing. Rapid install, superior thermal performance.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/5">
              {SPECS.map((s) => (
                <div key={s.label} className="bg-neutral-950 p-3">
                  <span className="text-[10px] text-neutral-600 uppercase tracking-wider block">{s.label}</span>
                  <span className="text-xs sm:text-sm text-white font-medium">{s.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GBX-SLAB */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-neutral-950 p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-1">
              <Weight size={16} className="text-[#4ECDC4]" />
              <span className="text-[10px] sm:text-xs text-[#4ECDC4] font-medium uppercase tracking-wider">Floor</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              GBX-SLAB Series
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Basalt fibre floor panels. No corrosion, no thermal bridging.
            </p>

            <div className="mt-6 space-y-3">
              {SLABS.map((slab) => (
                <div key={slab.code} className="border border-white/10 p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm sm:text-base font-semibold text-white">{slab.code}</span>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider">{slab.use}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-neutral-600 uppercase block">Thick</span>
                      <span className="text-[10px] sm:text-xs text-neutral-300">{slab.thick}</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-neutral-600 uppercase block">EPS</span>
                      <span className="text-[10px] sm:text-xs text-neutral-300">{slab.eps}</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-neutral-600 uppercase block">Load</span>
                      <span className="text-[10px] sm:text-xs text-neutral-300">{slab.load}</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-neutral-600 uppercase block">Span</span>
                      <span className="text-[10px] sm:text-xs text-neutral-300">{slab.span}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
        >
          {ADVANTAGES.map((a) => (
            <div key={a.title} className="bg-neutral-950 p-5 sm:p-6">
              <div className="text-[#4ECDC4] mb-2">{a.icon}</div>
              <p className="text-sm font-medium text-white">{a.title}</p>
              <p className="text-xs text-neutral-500 mt-0.5">{a.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
