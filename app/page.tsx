"use client"
import TopNav from "@/components/top-nav"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <TopNav />
      <main className="pt-20">
        <Hero />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}
