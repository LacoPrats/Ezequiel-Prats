"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">P</span>
          </div>
          <span className="font-semibold text-sm text-foreground tracking-tight">EP</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#work" 
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wider"
          >
            WORK
          </Link>
          <Link 
            href="#about" 
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wider"
          >
            ABOUT
          </Link>
          <Link 
            href="#contact" 
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wider"
          >
            CONTACT
          </Link>
        </nav>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:bg-primary/90 transition-colors"
        >
          Get in touch
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </header>
  )
}
