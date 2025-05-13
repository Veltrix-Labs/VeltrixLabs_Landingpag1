"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import ApplicationForm from "./application-form"
import SuggestionForm from "./suggestion-form"
import { useToast } from "@/hooks/use-toast"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [showSuggestionForm, setShowSuggestionForm] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/70 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] w-full mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Veltrix Labs Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Veltrix Labs
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("careers")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Careers
            </button>
            <button
              onClick={() => scrollToSection("why-join")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Join Us
            </button>

            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
              onClick={() => setShowSuggestionForm(true)}
            >
              Suggest / Advise
            </Button>

            <Button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
              onClick={() => setShowApplicationForm(true)}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("careers")}
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                Careers
              </button>
              <button
                onClick={() => scrollToSection("why-join")}
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                Join Us
              </button>

              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 w-full"
                onClick={() => {
                  setShowSuggestionForm(true)
                  setMobileMenuOpen(false)
                }}
              >
                Suggest / Advise
              </Button>

              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white w-full"
                onClick={() => {
                  setShowApplicationForm(true)
                  setMobileMenuOpen(false)
                }}
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {showApplicationForm && <ApplicationForm onClose={() => setShowApplicationForm(false)} />}

      {showSuggestionForm && <SuggestionForm onClose={() => setShowSuggestionForm(false)} />}
    </>
  )
}
