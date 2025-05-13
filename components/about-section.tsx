"use client"

import { motion } from "framer-motion"
import { Brain, Code, LineChart, Stethoscope, Layers, Globe } from "lucide-react"

export default function AboutSection() {
  const features = [
    { icon: <Brain className="w-6 h-6 text-cyan-400" />, text: "AI & LLM Ecosystems" },
    { icon: <Code className="w-6 h-6 text-cyan-400" />, text: "Developer Tools" },
    { icon: <LineChart className="w-6 h-6 text-cyan-400" />, text: "Productivity Automation" },
    { icon: <Stethoscope className="w-6 h-6 text-cyan-400" />, text: "Health and Education Tech" },
    { icon: <Layers className="w-6 h-6 text-cyan-400" />, text: "Full-stack SaaS Systems" },
    { icon: <Globe className="w-6 h-6 text-cyan-400" />, text: "Web3 & Decentralized Systems" },
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Veltrix Labs
          </h2>

          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            Veltrix Labs is an elite innovation lab building next-generation digital products from scratch. We're not a
            service agency. We create revolutionary platforms, AI tools, and digital ecosystems that matter. Every
            product is born internally and built by a handpicked team of engineers, designers, and thinkers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              >
                <div className="flex items-center mb-3">
                  {feature.icon}
                  <span className="ml-2 font-medium text-white">{feature.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
