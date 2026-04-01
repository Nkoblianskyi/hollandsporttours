'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Filter } from 'lucide-react'
import { tours, getAllCategories } from '@/lib/tours-data'
import type { Tour } from '@/lib/tours-data'

export default function ToursPage() {
  const [selectedRegion, setSelectedRegion] = useState<'all' | Tour['region']>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredTours = tours.filter(tour => {
    const regionMatch = selectedRegion === 'all' || tour.region === selectedRegion
    const categoryMatch = selectedCategory === 'all' || tour.category === selectedCategory
    return regionMatch && categoryMatch
  })

  const categories = getAllCategories()

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-6xl mb-4 tracking-tight text-balance">
              ONTDEK ALLE <span className="text-accent">TOURS</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-primary-foreground/90 text-pretty">
              Van lokale klassiekers tot wereldwijde topevents. Vind uw perfecte sportavontuur.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-muted py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Filters:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedRegion === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedRegion('all')}
                >
                  Alle Regio&apos;s
                </Button>
                <Button
                  variant={selectedRegion === 'nederland' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedRegion('nederland')}
                >
                  Nederland
                </Button>
                <Button
                  variant={selectedRegion === 'europa' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedRegion('europa')}
                >
                  Europa
                </Button>
                <Button
                  variant={selectedRegion === 'wereld' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedRegion('wereld')}
                >
                  Wereld
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory('all')}
                >
                  Alle Categorieën
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-6 text-muted-foreground">
              {filteredTours.length} {filteredTours.length === 1 ? 'tour' : 'tours'} gevonden
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (
                <Link 
                  key={tour.id} 
                  href={`/tours/${tour.slug}`}
                  className="group"
                >
                  <div className="bg-card overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold">
                        {tour.category}
                      </div>
                      <img 
                        src={tour.image} 
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-xl mb-3 tracking-tight group-hover:text-accent transition-colors">
                        {tour.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                        {tour.shortDescription}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>{tour.location}, {tour.country}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>{tour.date} • {tour.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">Geen tours gevonden met deze filters.</p>
                <Button 
                  onClick={() => {
                    setSelectedRegion('all')
                    setSelectedCategory('all')
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
