"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ppm from "../components/images/ppm1.png"

export default function FounderSection() {
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
            Meet the Founder
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-500 mb-4">
                <Image
                  src={ppm}
                  alt="Ramu R"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold text-white mb-1">Ramu R</h3>

              <p className="text-gray-300 italic mb-6">"Building the impossible, one product at a time."</p>

              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/in/ramu-r-nayak1904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://github.com/ramu1904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/__ramu1904?igsh=N3NyeGlwOWI5bzNt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
