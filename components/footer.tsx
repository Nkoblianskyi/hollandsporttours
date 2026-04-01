import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">
              HOLLAND<span className="text-accent">SPORT</span>TOURS
            </h3>
            <p className="text-sm text-primary-foreground/80">
              Uw specialist in unieke sportreizen door Nederland, Europa en de wereld.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Juridisch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-beleid" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Privacy Beleid
                </Link>
              </li>
              <li>
                <Link href="/cookie-beleid" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Cookie Beleid
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Bedrijfsinformatie</h4>
            <address className="text-sm text-primary-foreground/80 not-italic">
              FISCUS NOSTRUM FUND SERVICES LIMITED<br />
              Myrianthous Anna<br />
              Panagioti Kaspi 5Α<br />
              Nicosia 1095<br />
              Cyprus
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Holland Sport Tours. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
