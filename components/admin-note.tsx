"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Edit, Save, Lock } from "lucide-react"

export default function AdminNote() {
  const [isEditing, setIsEditing] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [password, setPassword] = useState("")
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [note, setNote] = useState(
    "Welcome to Veltrix Labs! We're currently looking for exceptional talent to join our team. Our AI/ML Engineer and Full Stack Engineer positions are priority hires. Apply now to be part of our journey!",
  )
  const [tempNote, setTempNote] = useState(note)
  const { toast } = useToast()

  const handleAdminLogin = () => {
    // In a real app, you would validate this against a secure backend
    if (password === "admin123") {
      setIsAdmin(true)
      setShowPasswordInput(false)
      toast({
        title: "Admin Access Granted",
        description: "You can now edit the admin note.",
      })
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password.",
        variant: "destructive",
      })
    }
  }

  const handleSaveNote = () => {
    setNote(tempNote)
    setIsEditing(false)
    toast({
      title: "Note Updated",
      description: "The admin note has been updated successfully.",
    })
  }

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
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-blue-800/50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Admin Note
              </h2>

              {!isAdmin && !showPasswordInput && (
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                  onClick={() => setShowPasswordInput(true)}
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Admin Access
                </Button>
              )}

              {showPasswordInput && (
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                  />
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    onClick={handleAdminLogin}
                  >
                    Login
                  </Button>
                </div>
              )}

              {isAdmin && !isEditing && (
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                  onClick={() => {
                    setIsEditing(true)
                    setTempNote(note)
                  }}
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Note
                </Button>
              )}

              {isAdmin && isEditing && (
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  onClick={handleSaveNote}
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Note
                </Button>
              )}
            </div>

            {isEditing ? (
              <Textarea
                value={tempNote}
                onChange={(e) => setTempNote(e.target.value)}
                className="bg-gray-800/70 border-gray-700 min-h-[150px] text-white text-lg"
              />
            ) : (
              <p className="text-xl text-gray-300 leading-relaxed">{note}</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
