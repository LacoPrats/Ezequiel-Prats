export function About() {
  const stats = [
    { value: "3+", label: "YEARS DESIGNING" },
    { value: "5+", label: "DIGITAL PRODUCTS DESIGNED" },
    { value: "0→1", label: "PRODUCT DESIGN FOCUS" }
  ]

  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - empty for visual balance like the original */}
          <div className="hidden lg:block" />

          {/* Right side - content */}
          <div className="lg:bg-muted lg:-mr-6 lg:pl-10 lg:pr-6 lg:py-12 lg:rounded-l-2xl">
            <p className="text-xs tracking-[0.2em] text-primary font-medium mb-3">ABOUT</p>
            
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-[1.1] mb-1">
              Design meets
            </h2>
            <h2 className="text-3xl md:text-4xl font-serif italic text-foreground leading-[1.1] mb-6">
              product thinking.
            </h2>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Product Designer focused on UX/UI, working across the full product lifecycle — from research and problem definition to interaction design and implementation.
              </p>
              <p>
                I focus on simplifying complex user flows and bringing structure to early-stage (0→1) products, where clarity and usability are critical.
              </p>
              <p>
                With a front-end background, I design with real constraints in mind. I prototype directly in code and work closely with developers to ensure ideas translate clearly into the final product.
              </p>
              <p>
                I&apos;m currently exploring how AI can enhance design workflows and product experiences — through hands-on experimentation and real use cases.
              </p>
            </div>

            {/* Stats */}
            <div className="border-t border-border mt-8 pt-8">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <p className="text-2xl md:text-3xl font-serif text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[10px] tracking-[0.1em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
