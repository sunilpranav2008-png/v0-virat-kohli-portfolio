"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen">
      <div className="relative min-h-screen flex">
        {/* Left Accent Border */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-accent/10 border-l-8 border-accent" />

        {/* Main Content Grid */}
        <div className="relative w-full flex items-center px-8 ml-24">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-16 items-center">
            {/* Left: Hero Content with Profile Section */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div>
                <p className="text-accent text-sm font-semibold mb-2">HEY THERE</p>
                <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight mb-6">I'm Virat</h1>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  I design beautifully simple things, and I love what I do. Fast workflows, React expertise, and
                  shipping high-quality web experiences.
                </p>
              </div>

              <a
                href="mailto:virat@example.com"
                className="text-accent font-semibold hover:text-accent/80 inline-flex items-center gap-2"
              >
                virat.kohli@dev.com <span>→</span>
              </a>

              {/* Key Stats */}
              <div className="flex gap-16 pt-8 border-t border-border pt-8">
                <div>
                  <p className="text-3xl font-bold text-accent">50+</p>
                  <p className="text-xs text-muted-foreground font-medium">PROJECTS SHIPPED</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">100%</p>
                  <p className="text-xs text-muted-foreground font-medium">CLIENT SATISFACTION</p>
                </div>
              </div>

              {/* Service Cards */}
              <div className="space-y-4 pt-8">
                {[
                  { label: "Frontend Development", projects: "45 Projects", icon: "⚛️" },
                  { label: "React & Next.js", projects: "50 Projects", icon: "⚡" },
                  { label: "Performance Optimization", projects: "30 Projects", icon: "🚀" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.projects}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Profile Image with Artistic Background */}
            <div
              className={`relative flex items-center justify-center transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative w-full aspect-square max-w-md">
                {/* Artistic Brush Strokes Background */}
                <div className="absolute -top-8 -right-8 w-64 h-64 opacity-30">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path
                      d="M 40 60 Q 60 20 100 30 T 160 80"
                      stroke="var(--color-accent)"
                      strokeWidth="20"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 50 100 Q 80 60 120 90 T 160 140"
                      stroke="var(--color-accent)"
                      strokeWidth="18"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                    <path
                      d="M 30 140 Q 70 110 110 130 T 180 160"
                      stroke="var(--color-accent)"
                      strokeWidth="16"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.4"
                    />
                  </svg>
                </div>

                {/* Profile Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-accent/30 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1529841845421-2e0a00a28f3e?w=500&h=500&fit=crop"
                    alt="Virat Kohli - Web Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold shadow-lg">
                  React Dev ⚛️
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Accent Border */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-accent/10 border-r-8 border-accent" />
      </div>
    </section>
  )
}
