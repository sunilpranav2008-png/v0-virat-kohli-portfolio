export default function Projects() {
  const projects = [
    {
      id: "hcl",
      name: "HCL Enterprise Dashboard",
      category: "Enterprise",
      description:
        "Built a comprehensive enterprise dashboard for HCL Technologies serving 10K+ daily users. Implemented real-time data visualization, advanced filtering, and responsive design.",
      metrics: "40% Faster Load Times",
      featured: true,
      color: "bg-yellow-500/10",
    },
    {
      id: "portfolio",
      name: "Web Design Showcase",
      category: "Portfolio",
      description: "Designed and developed a beautiful portfolio platform enabling creators to showcase their work.",
      metrics: "50+ Active Creators",
      color: "bg-green-500/10",
    },
    {
      id: "analytics",
      name: "Real-time Analytics App",
      category: "Analytics",
      description:
        "Built a real-time analytics dashboard with live data streaming, custom charts, and export functionality.",
      metrics: "99.9% Uptime",
      color: "bg-blue-500/10",
    },
  ]

  return (
    <section id="projects" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">My Latest Works</h2>
        <a href="#" className="text-accent text-sm font-semibold hover:underline">
          View all →
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${project.color} rounded-lg p-6 border border-border hover:border-accent transition-all cursor-pointer group`}
            >
              <div className="h-40 bg-card/50 rounded mb-4 flex items-center justify-center group-hover:bg-card transition-colors">
                <p className="text-muted-foreground">Project Preview</p>
              </div>
              <p className="text-xs text-accent font-semibold mb-2">{project.category}</p>
              <h3 className="text-lg font-bold text-foreground mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <p className="text-accent font-semibold text-sm">{project.metrics}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
