"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import ApplicationForm from "./application-form"
import SuggestionForm from "./suggestion-form"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [showSuggestionForm, setShowSuggestionForm] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
            Math.random() * 100 + 155,
          )}, 255, ${Math.random() * 0.5 + 0.25})`,
        })
      }
    }

    createParticles()

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.15 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      connectParticles()
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />

      <div className="max-w-[1400px] w-full mx-auto px-4 z-10 flex justify-center items-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex justify-center w-full">
            <Image src="/logo.png" alt="Veltrix Labs Logo" width={120} height={120} className="mb-8" />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Next-generation innovations from one lab.
            </span>
            <br />
            <span className="text-white">Accelerate. Create. Dominate.</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
              onClick={() => setShowApplicationForm(true)}
            >
              Apply to Join
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
              onClick={() => setShowSuggestionForm(true)}
            >
              Suggest or Advise
            </Button>
          </div>

          <button
            onClick={scrollToAbout}
            className="mt-16 text-white/70 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>

      {showApplicationForm && <ApplicationForm onClose={() => setShowApplicationForm(false)} />}

      {showSuggestionForm && <SuggestionForm onClose={() => setShowSuggestionForm(false)} />}
    </section>
  )
}
