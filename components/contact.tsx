export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Let's make something amazing together.</h2>
          <p className="text-muted-foreground mb-12">
            I'm always interested in hearing about new projects and opportunities. Let's connect and build something
            great.
          </p>

          <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded hover:opacity-90 transition-opacity mb-12">
            Start by saying hi
          </button>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground font-semibold mb-2">EMAIL</p>
              <a href="mailto:virat@example.com" className="text-foreground hover:text-accent transition-colors">
                virat.kohli@dev.com
              </a>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-semibold mb-2">SOCIAL</p>
              <div className="flex justify-center gap-4">
                {["GitHub", "Twitter", "LinkedIn"].map((social) => (
                  <a key={social} href="#" className="text-foreground hover:text-accent transition-colors text-sm">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-semibold mb-2">LOCATION</p>
              <p className="text-foreground">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
