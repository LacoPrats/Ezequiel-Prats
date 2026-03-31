import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    category: "UX + AI CONCEPT",
    title: "AI UX Audit",
    description: "A concept tool that evaluates UI screenshots and surfaces prioritized usability improvements ranked by impact and effort.",
    result: "Turns heuristic evaluation into actionable recommendations in seconds",
    link: "#",
    categoryColor: "text-emerald-600",
    image: "/images/projects/ai-ux-audit.png"
  },
  {
    category: "PRODUCT DESIGN",
    title: "BCH Arquitectura",
    description: "End-to-end design and development of a portfolio site for an architecture studio — visual hierarchy, project clarity, and a clean responsive system.",
    result: "Delivered a digital presence that showcases work with structure and clarity",
    link: "#",
    categoryColor: "text-primary",
    image: "/images/projects/bch-arquitectura.png"
  },
  {
    category: "PRODUCT DESIGN",
    title: "SmartBuy Consulting",
    description: "Full product design for a consulting marketing site — information architecture, visual system, and responsive components built to improve credibility and conversions.",
    result: "Launched a site that clarifies the offer and strengthens brand trust",
    link: "#",
    categoryColor: "text-primary",
    image: "/images/projects/smartbuy.png"
  },
  {
    category: "AI + DESIGN",
    title: "This Portfolio",
    description: "Designed and built using AI-assisted workflows — from visual direction to code implementation. A real example of how I use AI tools to accelerate product design without losing craft.",
    result: "From concept to deployed site in a single day",
    link: "#",
    categoryColor: "text-emerald-600",
    image: "/images/projects/portfolio.png"
  }
]

export function Projects() {
  return (
    <section id="work" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-primary font-medium mb-3">SELECTED WORK</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-[1.1]">
              Projects I&apos;ve
            </h2>
            <h2 className="text-3xl md:text-4xl font-serif italic text-foreground leading-[1.1]">
              shipped.
            </h2>
          </div>
          <div className="lg:text-right lg:self-end">
            <p className="text-sm text-muted-foreground max-w-sm lg:ml-auto">
              UX/UI and product design work — from AI concepts to real client websites.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="group bg-card border border-border rounded-xl p-5 flex flex-col hover:shadow-md transition-shadow"
            >
              {/* Project image */}
              <div className="aspect-[16/9] bg-muted rounded-lg mb-4 overflow-hidden relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}
              </div>

              {/* Category */}
              <p className={`text-[10px] tracking-[0.15em] font-medium mb-1.5 ${project.categoryColor}`}>
                {project.category}
              </p>

              {/* Title */}
              <h3 className="text-base font-serif text-foreground mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-grow">
                {project.description}
              </p>

              {/* Result */}
              <div className="bg-muted rounded-md p-3 mb-4">
                <div className="flex items-start gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Link */}
              <Link 
                href={project.link}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-foreground tracking-wider hover:text-primary transition-colors group"
              >
                VIEW LIVE SITE
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
