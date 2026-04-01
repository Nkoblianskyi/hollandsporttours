'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const marqueeItems = [
  'NEDERLAND', 'EUROPA', 'WERELDWIJD', 'FIETSEN', 'HARDLOPEN',
  'SKIËN', 'GOLF', 'TENNIS', 'VOETBAL', 'MOUNTAINBIKE', 'SURFEN',
]

export function AboutSnippet() {
  return (
    <section className="bg-background overflow-hidden">

      {/* Marquee strip */}
      <div className="bg-accent py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_22s_linear_infinite]">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-display text-sm tracking-widest text-accent-foreground mx-6 shrink-0"
            >
              {item}
              <span className="mx-6 opacity-40">-</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">

        {/* Image side */}
        <div className="relative overflow-hidden min-h-[340px] lg:min-h-0">
          <img
            src="/images/about-team.jpg"
            alt="Het Holland Sport Tours team onderweg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* bold label overlaid */}
          <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 backdrop-blur-sm px-8 py-5">
            <p className="font-display text-primary-foreground text-xl tracking-widest uppercase">
              Gepassioneerd door sport. <span className="text-accent">Gedreven door reizen.</span>
            </p>
          </div>
        </div>

        {/* Content side */}
        <div className="bg-foreground text-primary-foreground flex flex-col justify-center px-10 py-16 lg:px-16">

          <p className="font-display text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Over Holland Sport Tours
          </p>

          <h2 className="font-display text-4xl md:text-5xl leading-none tracking-tight text-balance mb-8">
            WIJ BRENGEN U<br />
            NAAR DE PLEK<br />
            WAAR HET<br />
            <span className="text-accent">GEBEURT</span>
          </h2>

          <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-md text-pretty">
            Holland Sport Tours organiseert meerdaagse sportreizen naar iconische sportoorden en actieve bestemmingen wereldwijd. Niet als toeschouwer op de tribune - maar midden in de sportwereld, op de route, op de baan, op de piste.
          </p>

          <p className="text-primary-foreground/70 leading-relaxed mb-10 max-w-md text-pretty">
            Elk programma wordt op maat samengesteld: van een fietsstage langs de cols van de Tour de France tot een hardloopweek in de Sahara. Ons team spreekt de taal van de sport en kent de route als geen ander.
          </p>

          {/* Three inline stats */}
          <div className="grid grid-cols-3 gap-6 border-t border-primary-foreground/20 pt-8 mb-10">
            <div>
              <div className="font-display text-3xl text-accent">18+</div>
              <p className="text-xs text-primary-foreground/50 uppercase tracking-widest mt-1">Unieke tours</p>
            </div>
            <div>
              <div className="font-display text-3xl text-accent">30+</div>
              <p className="text-xs text-primary-foreground/50 uppercase tracking-widest mt-1">Bestemmingen</p>
            </div>
            <div>
              <div className="font-display text-3xl text-accent">100%</div>
              <p className="text-xs text-primary-foreground/50 uppercase tracking-widest mt-1">Maatwerk</p>
            </div>
          </div>

          <Link
            href="/over-ons"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm tracking-widest uppercase group"
          >
            Lees ons verhaal
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>

    </section>
  )
}
