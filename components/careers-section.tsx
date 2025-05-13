"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import ApplicationForm from "./application-form"

export default function CareersSection() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [selectedRole, setSelectedRole] = useState("")

  const roles = [
    {
      title: "Full Stack Engineer",
      skills: "React, Node.js, TypeScript, MongoDB, TailwindCSS",
      equity: "0.5–2%",
      remote: true,
    },
    {
      title: "AI/ML Engineer",
      skills: "Python, LLMs, Transformers, LangChain, APIs",
      equity: "0.5–2%",
      remote: true,
    },
    {
      title: "UI/UX Designer",
      skills: "Figma, Design Systems, Microinteractions",
      equity: "0.3–1.5%",
      remote: true,
    },
    {
      title: "DevOps Engineer",
      skills: "CI/CD, Docker, GitHub Actions, AWS/Vercel",
      equity: "0.3–1%",
      remote: true,
    },
    {
      title: "Creative Researcher",
      skills: "Product Analysis, Trend Scouting, AI Tools",
      equity: "0.3–1%",
      remote: true,
    },
    {
      title: "Frontend Developer",
      skills: "React, Next.js, GSAP/Framer, TailwindCSS",
      equity: "0.3–1%",
      remote: true,
    },
  ]

  const handleApply = (role: string) => {
    setSelectedRole(role)
    setShowApplicationForm(true)
  }

  return (
    <section id="careers" className="py-20">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Open Roles (Equity-Only)
          </h2>

          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our team of innovators and build the future. All positions are remote and equity-based.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3 text-white">{role.title}</h3>

                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-400">Skills:</span>
                    <p className="text-gray-300">{role.skills}</p>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-400">Equity:</span>
                    <p className="text-cyan-400 font-medium">{role.equity}</p>
                  </div>

                  <div className="flex items-center mb-6">
                    <Globe className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-gray-300 text-sm">Remote</span>
                  </div>

                  <div className="mt-auto">
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      onClick={() => handleApply(role.title)}
                    >
                      Apply for this Role
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {showApplicationForm && (
        <ApplicationForm onClose={() => setShowApplicationForm(false)} preselectedRole={selectedRole} />
      )}
    </section>
  )
}
