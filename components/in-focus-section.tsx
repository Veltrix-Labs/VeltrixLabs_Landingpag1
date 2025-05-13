"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function InFocusSection() {
  return (
    <section className="py-20">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-cyan-800/50">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              In Focus at Veltrix Labs
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're exploring decentralized AI APIs to create an open, trustless innovation stack. Want to contribute?
              Apply now.
            </p>

            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 group">
              Explore More
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
