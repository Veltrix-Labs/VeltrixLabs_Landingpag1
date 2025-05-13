"use client"

import { motion } from "framer-motion"

export default function VisionSection() {
  return (
    <section className="py-20">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Vision & Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Vision</h3>
              <p className="text-gray-300">
                To become the most inventive innovation lab producing transformative digital ecosystems for the next
                generation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Mission</h3>
              <p className="text-gray-300">
                Build futuristic, high-impact tech with speed, creativity, and ownership. Veltrix is a launchpad — not a
                playground.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
