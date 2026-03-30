import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <p className="text-xs tracking-[0.2em] text-primary font-medium mb-3">CONTACT</p>
            
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-[1.1] mb-1">
              Let&apos;s work
            </h2>
            <h2 className="text-3xl md:text-4xl font-serif italic text-foreground leading-[1.1] mb-6">
              together.
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              I&apos;m open to product design roles and freelance work. If you&apos;re building something and need clarity in your product, let&apos;s talk.
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              Based in Argentina · Open to remote work
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Email Button */}
            <Link
              href="mailto:hello@ezequielprats.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:bg-primary/90 transition-colors"
            >
              Send me an email
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-3">FIND ME ON</p>
              
              <div className="space-y-2.5">
                <Link 
                  href="https://linkedin.com/in/ezequielprats"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 border border-border rounded-full flex items-center justify-center group-hover:border-primary transition-colors">
                    <span className="text-xs font-medium">in</span>
                  </div>
                  <span className="text-xs">linkedin.com/in/ezequielprats</span>
                </Link>

                <Link 
                  href="https://github.com/ezequielprats"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 border border-border rounded-full flex items-center justify-center group-hover:border-primary transition-colors">
                    <span className="text-xs font-mono">~</span>
                  </div>
                  <span className="text-xs">github.com/ezequielprats</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
