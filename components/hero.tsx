import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&q=80" 
          alt="Sports action" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight text-balance">
          BELEEF SPORT<br />
          <span className="text-accent">WERELDWIJD</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90 text-pretty">
          Ontdek onvergetelijke sportreizen door Nederland, Europa en de rest van de wereld. Van voetbalwedstrijden tot marathons, wij organiseren uw ultieme sportavontuur.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/tours">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8 h-12"
            >
              Bekijk Tours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-base font-semibold px-8 h-12"
            >
              Neem Contact Op
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
