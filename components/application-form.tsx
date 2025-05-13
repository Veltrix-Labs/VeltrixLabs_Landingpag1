"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { X } from "lucide-react"
import { useEffect, useState } from "react"

interface ApplicationFormProps {
  onClose: () => void
  preselectedRole?: string
}

export default function ApplicationForm({ onClose, preselectedRole = "" }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    linkedinUrl: "",
    githubUrl: "",
    role: preselectedRole,
    resume: null as File | null,
    whyGoodFit: "",
    whyExcited: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const roles = [
    "Full Stack Engineer",
    "AI/ML Engineer",
    "UI/UX Designer",
    "DevOps Engineer",
    "Creative Researcher",
    "Frontend Developer",
    "Technical Writer / AI Content Engineer",
  ]

  useEffect(() => {
    // Disable scrolling when modal is open
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form
    if (!formData.fullName || !formData.email || !formData.role || !formData.whyGoodFit || !formData.whyExcited) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      })
      setIsSubmitting(false)
      onClose()
    }, 1500)
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className="bg-gray-900 rounded-xl border border-gray-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-800 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Apply for a Role</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="linkedinUrl">LinkedIn URL *</Label>
              <Input
                id="linkedinUrl"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="githubUrl">GitHub URL (optional)</Label>
              <Input
                id="githubUrl"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role you're applying for *</Label>
            <Select value={formData.role} onValueChange={handleSelectChange} required>
              <SelectTrigger className="bg-gray-800 border-gray-700">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume">Resume Upload (optional)</Label>
            <Input
              id="resume"
              name="resume"
              type="file"
              onChange={handleFileChange}
              className="bg-gray-800 border-gray-700"
              accept=".pdf,.doc,.docx"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whyGoodFit">Why are you a good fit? *</Label>
            <Textarea
              id="whyGoodFit"
              name="whyGoodFit"
              value={formData.whyGoodFit}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700 min-h-[100px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whyExcited">What excites you about Veltrix Labs? *</Label>
            <Textarea
              id="whyExcited"
              name="whyExcited"
              value={formData.whyExcited}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700 min-h-[100px]"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
