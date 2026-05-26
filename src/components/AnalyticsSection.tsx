import React from "react";
import { motion } from "motion/react";

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="w-full bg-transparent text-white pb-40 pt-16 px-6 sm:px-10 lg:px-16 xl:px-24 animate-fade-in relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-2xl text-left">
          {/* Cyan Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] sm:text-[12px] font-mono tracking-[0.2em] text-sky-400 uppercase mb-8"
          >
            Pipeline Synchronization
          </motion.div>

          {/* Core high-contrast responsive title with elegant lines */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[28px] sm:text-[36px] md:text-[44px] leading-[1.3] font-light text-zinc-100 tracking-tight mb-8"
          >
            Helping you connect the cuts. <br className="hidden sm:inline" />
            So you can see what your title <br className="hidden sm:inline" />
            will look like on the silver screen.
          </motion.h2>

          {/* Authentic high-fidelity Latin paragraph matching the reference design */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[13px] sm:text-[14px] leading-relaxed text-zinc-400 font-light font-sans max-w-lg select-text"
          >
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
