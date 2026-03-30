import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-12 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-[48%] space-y-6">
            {/* Available Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground">
                AVAILABLE FOR WORK
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-[72px] md:text-[88px] font-serif tracking-tight text-foreground leading-[0.9]">
                Ezequiel
              </h1>
              <h1 className="text-[72px] md:text-[88px] font-serif italic text-primary leading-[0.9]">
                Prats.
              </h1>
            </div>

            {/* Role */}
            <p className="text-xs tracking-[0.3em] text-muted-foreground font-medium">
              PRODUCT DESIGNER
            </p>

            {/* Description */}
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Product Designer focused on turning complex systems into clear, usable experiences — combining research, UX thinking, and interface design. Currently exploring how AI can enhance products and workflows.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                See my work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-border text-foreground rounded-full text-sm font-medium hover:bg-muted transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>

{/* Right Content - Photo */}
            <div className="relative lg:w-[48%] flex justify-center">
            {/* UX/UI Badge - floating top-right outside photo */}
            <div className="absolute -top-2 -right-4 lg:right-[-60px] z-10 bg-card border border-border rounded-xl px-3 py-2 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground">UX/UI + Product</span>
              </div>
            </div>

            {/* Main Photo */}
            <div className="relative w-[320px] md:w-[380px] h-[420px] md:h-[500px] rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/images/profile.jpg"
                alt="Ezequiel Prats - Product Designer"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Experience Badge - floating bottom-left overlapping photo */}
            <div className="absolute bottom-6 -left-4 lg:left-[-40px] z-10 bg-card border border-border rounded-xl px-4 py-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-muted rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">3+ Years</p>
                  <p className="text-xs text-muted-foreground">Product Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center mt-20">
          <span className="text-[11px] tracking-[0.3em] text-muted-foreground mb-3">SCROLL</span>
          <div className="w-px h-12 bg-border" />
        </div>
      </div>
    </section>
  )
}
