import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 sm:py-32 bg-neutral-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#4ECDC4] text-xs font-medium tracking-[0.25em] uppercase mb-6">
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
              The Engine of the Fjäll Group.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:pt-12"
          >
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Fjäll Green Tech is not an architectural boutique. We are the industrial
              backbone of volume construction. By merging rigorous Scandinavian
              material science with high-velocity Asian manufacturing precision,
              we engineer the structural panel systems that make mass-scale
              development financially viable, structurally superior, and
              environmentally responsible.
            </p>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              We do not design one-off residences. We supply the literal building
              blocks for governments and developers building hundreds — or thousands
              — of units.
            </p>
            <p className="mt-6 text-lg sm:text-xl text-[#4ECDC4] font-medium tracking-tight">
              &lsquo;Sourced in Indonesia. Engineered for the World.&rsquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
