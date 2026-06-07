import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const PROJECTS = [
  {
    name: 'Lombok Mass Housing Initiative',
    scale: '500+ Units',
    type: 'Public-Private Partnership',
    detail: 'Panel supply and on-site assembly support. Delivered 40% under traditional timeframes.',
  },
  {
    name: 'Nusra City Affordable Sector',
    scale: '1,200+ Units',
    type: 'Government Housing Programme',
    detail: 'Volume panel procurement with integrated thermal efficiency for tropical climates.',
  },
  {
    name: 'Urban Infill Housing Complex',
    scale: '150 Units',
    type: 'High-Density Urban',
    detail: 'Structural panel delivery for rapid vertical assembly in constrained urban footprint.',
  },
];

export default function ProjectGrid() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <>
      <section id="projects" className="py-20 sm:py-32 bg-neutral-950 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16"
          >
            <p className="text-[#4ECDC4] text-xs font-medium tracking-[0.25em] uppercase mb-6">
              Material Supply at Scale
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
              Proven where volume matters.
            </h2>
          </motion.div>

          <div className="space-y-px bg-white/5">
            {PROJECTS.map((project, i) => (
              <motion.button
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setActiveProject(i)}
                className="w-full text-left bg-neutral-950 p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 group hover:bg-neutral-900/40 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight group-hover:text-[#4ECDC4] transition-colors truncate">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500 leading-relaxed">{project.detail}</p>
                </div>
                <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                  <span className="text-xl sm:text-2xl font-semibold text-[#4ECDC4] tracking-tight">
                    {project.scale}
                  </span>
                  <span className="hidden sm:block w-px h-8 bg-white/10" />
                  <span className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider whitespace-nowrap">
                    {project.type}
                  </span>
                  <span className="text-neutral-600 group-hover:text-[#4ECDC4] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"/></svg>
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal projectIndex={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
