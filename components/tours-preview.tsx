import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'

export function ToursPreview() {
  const featuredTours = [
    {
      id: 'amsterdam-marathon',
      title: 'Amsterdam Marathon Experience',
      location: 'Amsterdam, Nederland',
      date: 'Oktober 2026',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
      category: 'Hardlopen',
    },
    {
      id: 'champions-league-final',
      title: 'UEFA Champions League Finale',
      location: 'München, Duitsland',
      date: 'Juni 2026',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
      category: 'Voetbal',
    },
    {
      id: 'tour-de-france',
      title: 'Tour de France Etappe',
      location: 'Frankrijk',
      date: 'Juli 2026',
      image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80',
      category: 'Wielrennen',
    },
    {
      id: 'dutch-classics-cycling',
      title: 'Nederlandse Wielerklassiekers',
      location: 'Nederland',
      date: 'Maart-April 2026',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
      category: 'Wielrennen',
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-4 tracking-tight">
              ONTDEK ONZE <span className="text-accent">TOURS</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-pretty">
              Van lokale klassiekers tot internationale topevents. Bekijk onze selectie van unieke sportreizen.
            </p>
          </div>
          <Link href="/tours" className="mt-6 md:mt-0">
            <Button variant="outline" size="lg">
              Alle Tours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTours.map((tour) => (
            <Link 
              key={tour.id} 
              href={`/tours/${tour.id}`}
              className="group"
            >
              <div className="bg-card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold">
                    {tour.category}
                  </div>
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl mb-3 tracking-tight group-hover:text-accent transition-colors">
                    {tour.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    {tour.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {tour.date}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
