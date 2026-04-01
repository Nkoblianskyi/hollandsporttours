import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Clock, Check, ArrowLeft } from 'lucide-react'
import { getTourBySlug, tours } from '@/lib/tours-data'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  
  if (!tour) return {}

  return {
    title: tour.title,
    description: tour.shortDescription,
    openGraph: {
      title: tour.title,
      description: tour.shortDescription,
      images: [{ url: tour.image }],
    },
  }
}

export async function generateStaticParams() {
  return tours.map(tour => ({ slug: tour.slug }))
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Image */}
        <section className="relative h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
            <img 
              src={tour.image} 
              alt={tour.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 container mx-auto px-4 pb-12">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
              <Link href="/tours" className="hover:text-accent transition-colors flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Alle Tours
              </Link>
              <span>/</span>
              <span>{tour.category}</span>
            </div>
            <div className="inline-block bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold mb-3">
              {tour.category}
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-white text-balance mb-4 tracking-tight">
              {tour.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {tour.location}, {tour.country}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {tour.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {tour.duration}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl mb-4 tracking-tight">
                    OVER DEZE <span className="text-accent">TOUR</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {tour.description}
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl md:text-3xl mb-4 tracking-tight">
                    HOOGTEPUNTEN
                  </h2>
                  <ul className="space-y-3">
                    {tour.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl md:text-3xl mb-4 tracking-tight">
                    INBEGREPEN
                  </h2>
                  <ul className="space-y-3">
                    {tour.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar - Contact */}
              <div className="lg:col-span-1">
                <div className="bg-card p-8 sticky top-24 border border-border">
                  <h3 className="font-display text-xl mb-4 tracking-tight">
                    INTERESSE IN DEZE TOUR?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Neem contact op met ons team voor meer informatie en een persoonlijke offerte.
                  </p>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Datum</span>
                      <span className="font-medium">{tour.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duur</span>
                      <span className="font-medium">{tour.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bestemming</span>
                      <span className="font-medium">{tour.country}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sport</span>
                      <span className="font-medium">{tour.category}</span>
                    </div>
                  </div>
                  <Link href="/contact">
                    <Button variant="default" size="lg" className="w-full">
                      Neem Contact Op
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tours */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl mb-8 tracking-tight">
              ANDERE <span className="text-accent">TOURS</span>
            </h2>
            <Link href="/tours">
              <Button variant="outline" size="lg">
                Bekijk Alle Tours
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
