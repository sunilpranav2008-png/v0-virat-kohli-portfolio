export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Engineer",
      company: "Tech Startup Inc.",
      period: "2022 - Present",
      description: "Led React team building performance-critical applications. Improved load times by 40%.",
    },
    {
      title: "React Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Developed responsive web applications for Fortune 500 clients.",
    },
    {
      title: "Junior Frontend Developer",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description: "Built interactive UI components and learned best practices in web development.",
    },
  ]

  return (
    <section id="experience" className="py-32 px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">My Work Experience</h2>
        <p className="text-muted-foreground mb-16 max-w-2xl">
          Over 5 years building scalable applications and leading frontend teams. Expertise in React, performance
          optimization, and modern web development practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 bg-background border border-border rounded hover:border-accent transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
              <p className="text-accent text-sm font-semibold mb-2">{exp.company}</p>
              <p className="text-xs text-muted-foreground mb-4">{exp.period}</p>
              <p className="text-muted-foreground text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
