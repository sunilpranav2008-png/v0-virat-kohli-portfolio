"use client"

import { useState, useEffect } from "react"

export default function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? "bg-background/80 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-baseline gap-2">
          <h1 className="text-xl font-bold text-foreground">Virat Kohli</h1>
          <span className="text-xs text-muted-foreground">Frontend Developer</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          {["PROJECTS", "EXPERIENCE", "ABOUT", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {[
            { name: "GitHub", href: "https://github.com" },
            { name: "LinkedIn", href: "https://linkedin.com" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
