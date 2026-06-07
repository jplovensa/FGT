import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler, Clock, Users, Truck } from 'lucide-react';

interface Project {
  name: string;
  scale: string;
  type: string;
  detail: string;
  image: string;
  stats: { icon: React.ReactNode; label: string; value: string }[];
}

const PROJECTS: Project[] = [
  {
    name: 'Lombok Mass Housing Initiative',
    scale: '500+ Units',
    type: 'Public-Private Partnership',
    detail: 'Panel supply and on-site assembly support. Delivered 40% under traditional timeframes.',
    image: '/images/project-lombok.jpg',
    stats: [
      { icon: <Ruler size={16} />, label: 'Panels Supplied', value: '12,400+' },
      { icon: <Clock size={16} />, label: 'Build Time Saved', value: '40%' },
      { icon: <Users size={16} />, label: 'On-site Crew', value: '120' },
      { icon: <Truck size={16} />, label: 'Deliveries', value: '186' },
    ],
  },
  {
    name: 'Nusra City Affordable Sector',
    scale: '1,200+ Units',
    type: 'Government Housing Programme',
    detail: 'Volume panel procurement with integrated thermal efficiency for tropical climates.',
    image: '/images/project-nusra.jpg',
    stats: [
      { icon: <Ruler size={16} />, label: 'Panels Supplied', value: '31,200+' },
      { icon: <Clock size={16} />, label: 'Build Time Saved', value: '55%' },
      { icon: <Users size={16} />, label: 'On-site Crew', value: '280' },
      { icon: <Truck size={16} />, label: 'Deliveries', value: '412' },
    ],
  },
  {
    name: 'Urban Infill Housing Complex',
    scale: '150 Units',
    type: 'High-Density Urban',
    detail: 'Structural panel delivery for rapid vertical assembly in constrained urban footprint.',
    image: '/images/project-urban.jpg',
    stats: [
      { icon: <Ruler size={16} />, label: 'Panels Supplied', value: '3,850+' },
      { icon: <Clock size={16} />, label: 'Build Time Saved', value: '35%' },
      { icon: <Users size={16} />, label: 'On-site Crew', value: '45' },
      { icon: <Truck size={16} />, label: 'Deliveries', value: '62' },
    ],
  },
];

interface Props {
  projectIndex: number | null;
  onClose: () => void;
}

export default function ProjectModal({ projectIndex, onClose }: Props) {
  const project = projectIndex !== null ? PROJECTS[projectIndex] : null;

  useEffect(() => {
    if (projectIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [projectIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-950 border border-white/10"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-neutral-950/80 text-neutral-400 hover:text-white border border-white/10 hover:border-[#4ECDC4] transition-all"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Image */}
            <div className="relative w-full aspect-video">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <span className="text-[10px] text-[#4ECDC4] font-medium uppercase tracking-wider">
                  {project.type}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-1">
                  {project.name}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-8">
              <p className="text-sm text-neutral-400 leading-relaxed">
                {project.detail}
              </p>

              {/* Scale highlight */}
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-semibold text-[#4ECDC4] tracking-tight">
                  {project.scale}
                </span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider">
                  Total Development
                </span>
              </div>

              {/* Stats grid */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="bg-neutral-950 p-4 sm:p-5">
                    <div className="text-[#4ECDC4] mb-2">{stat.icon}</div>
                    <p className="text-lg sm:text-xl font-semibold text-white">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-neutral-500">
                  Material supply and on-site assembly support provided by Fjäll Green Tech.
                </p>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 text-xs text-neutral-950 bg-[#4ECDC4] hover:bg-[#3DBDB4] px-5 py-2.5 transition-colors font-medium tracking-wide"
                >
                  Discuss a Similar Project
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
