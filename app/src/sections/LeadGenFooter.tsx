import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, ArrowRight } from 'lucide-react';

const VOLUME_OPTIONS = [
  'Select Projected Volume',
  '50–100 Units',
  '100–500 Units',
  '500–1,000 Units',
  '1,000–5,000 Units',
  '5,000+ Units',
];

export default function LeadGenFooter() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    volume: '',
    location: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    'w-full px-0 py-3 sm:py-4 bg-transparent border-0 border-b border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#4ECDC4] transition-colors text-sm';

  return (
    <section id="contact" className="bg-neutral-950 border-t border-white/5">
      <div className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
              Ready to Build at Scale?
            </h2>
            <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
              If you are developing 100+ units and need structural panel
              systems that cut timelines in half, we need to talk.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/fjall-logo.png"
                alt="Fjäll Green Tech"
                className="h-10 sm:h-12 w-auto mb-8 sm:mb-12"
              />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#4ECDC4] mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Jalan Kuta Galeri - Velvet 2, No 17 Jalan Patih Jelantik, Kuta, Badung - Bali, Indonesia
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-[#4ECDC4] mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-neutral-400">
                    www.fjallgreentech.com
                  </p>
                </div>
              </div>
              <p className="mt-8 sm:mt-12 text-xs text-neutral-600">
                Industrial materials for mass-scale housing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-14 flex items-center justify-center border border-[#4ECDC4] mx-auto mb-6">
                    <Send size={20} className="text-[#4ECDC4]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Request Received
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    Our team will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                    <input type="text" name="name" required placeholder="Name" value={formData.name} onChange={handleChange} className={inputClasses} />
                    <input type="text" name="company" required placeholder="Company" value={formData.company} onChange={handleChange} className={inputClasses} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                    <input type="text" name="role" required placeholder="Role" value={formData.role} onChange={handleChange} className={inputClasses} />
                    <select name="volume" required value={formData.volume} onChange={handleChange} className={inputClasses + ' appearance-none cursor-pointer'}>
                      {VOLUME_OPTIONS.map((opt) => (
                        <option key={opt} value={opt === VOLUME_OPTIONS[0] ? '' : opt} className="bg-neutral-900">{opt}</option>
                      ))}
                    </select>
                  </div>
                  <input type="text" name="location" required placeholder="Project Location" value={formData.location} onChange={handleChange} className={inputClasses} />
                  <button
                    type="submit"
                    className="mt-6 flex items-center gap-2 bg-[#4ECDC4] hover:bg-[#3DBDB4] text-neutral-950 font-medium px-6 sm:px-8 py-3 sm:py-4 transition-colors text-xs sm:text-sm tracking-wide"
                  >
                    Request Tech Specs & Volume Pricing
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] sm:text-xs text-neutral-600">
            &copy; 2026 Fjäll Green Tech. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-neutral-700">
            Industrial Materials & Volume Construction Systems
          </p>
        </div>
      </div>
    </section>
  );
}
