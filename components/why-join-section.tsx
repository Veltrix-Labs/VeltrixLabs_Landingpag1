"use client"

import { motion } from "framer-motion"
import { Globe, Percent, FileText, Heart, Rocket, Lightbulb } from "lucide-react"

export default function WhyJoinSection() {
  const benefits = [
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "100% Remote & Async",
      description: "Work from anywhere in the world on your own schedule.",
    },
    {
      icon: <Percent className="w-8 h-8 text-cyan-400" />,
      title: "Pure Equity Ownership",
      description: "No salary initially, but significant equity in what you build.",
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      title: "Zero Bureaucracy",
      description: "Direct communication, flat structure, no unnecessary meetings.",
    },
    {
      icon: <Heart className="w-8 h-8 text-cyan-400" />,
      title: "Work on What You Love",
      description: "Choose projects that align with your passions and skills.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
      title: "Ship Bold Products",
      description: "Build and launch innovative products that make an impact.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
      title: "Total Creative Autonomy",
      description: "Freedom of thought and approach to solving problems.",
    },
  ]

  return (
    <section id="why-join" className="py-20">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Why Join Veltrix Labs?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
                }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
