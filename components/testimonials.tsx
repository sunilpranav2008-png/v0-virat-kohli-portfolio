export default function Testimonials() {
  const testimonials = [
    {
      author: "John Smith",
      role: "CEO, Tech Corp",
      text: "Virat is an exceptional developer. His attention to detail and fast turnaround time impressed everyone.",
      initials: "JS",
    },
    {
      author: "Sarah Johnson",
      role: "Product Manager, StartUp Co",
      text: "Working with Virat was seamless. He understood our vision and delivered beyond expectations.",
      initials: "SJ",
    },
    {
      author: "Mike Chen",
      role: "Founder, Digital Agency",
      text: "One of the best frontend engineers I've worked with. Highly recommended for any React project.",
      initials: "MC",
    },
  ]

  return (
    <section className="py-32 px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">People talk about us</h2>
        <p className="text-muted-foreground mb-16 max-w-2xl">
          Don't just take our word for it — see what clients and colleagues say about working with Virat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-6 bg-background border border-border rounded">
              <p className="text-muted-foreground mb-6 italic">{`"${testimonial.text}"`}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <p className="text-xs font-bold text-accent">{testimonial.initials}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
