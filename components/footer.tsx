"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }

    // Here you would typically send the email to your backend
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    })

    setEmail("")
  }

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image src="/logo.png" alt="Veltrix Labs Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Veltrix Labs
              </span>
            </div>

            <p className="text-gray-400 mb-6 max-w-md">
              An elite innovation lab building next-generation digital products from scratch. We create revolutionary
              platforms, AI tools, and digital ecosystems that matter.
            </p>

            <div className="flex items-center space-x-4 mb-6">
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
                href="https://www.instagram.com/__ramu1904?igsh=N3NyeGlwOWI5bzNt "
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:ramuconnect45@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center text-gray-400">
              <Mail className="w-4 h-4 mr-2" />
              <span>veltrixlabsfornextgen@gmail.com</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("careers")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("why-join")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Why Join Us
                </button>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to get the latest updates.</p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 focus:border-cyan-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Veltrix Labs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
