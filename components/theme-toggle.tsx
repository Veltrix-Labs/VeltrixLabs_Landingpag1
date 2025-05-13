"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full px-4 py-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-5 w-5 text-yellow-400" />
          <span className="text-white">Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="h-5 w-5 text-cyan-400" />
          <span className="text-white">Dark Mode</span>
        </>
      )}
    </Button>
  )
}
