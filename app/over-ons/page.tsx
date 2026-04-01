import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Over Ons',
  description: 'Lees meer over Holland Sport Tours en ons gepassioneerde team van sportreisspecialisten.',
}

export default function OverOnsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-6xl mb-4 tracking-tight text-balance">
              OVER <span className="text-accent">ONS</span>
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-xl text-pretty">
              Uw specialist in unieke sportreizen wereldwijd.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="font-display text-3xl mb-6 tracking-tight">
                  WIE WE <span className="text-accent">ZIJN</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Holland Sport Tours is uw gespecialiseerde partner voor onvergetelijke sportreizen door Nederland, Europa en de rest van de wereld. Wij geloven dat sport mensen verbindt, grenzen doorbreekt en herinneringen schept die een leven lang meegaan.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ons team bestaat uit gepassioneerde sportliefhebbers met uitgebreide kennis van de internationale sportevenementenwereld. Van voetbalwedstrijden in Amsterdam tot marathons in Tokyo – wij zijn uw thuis voor alles wat beweegt.
                </p>
              </div>
              <div>
                <h2 className="font-display text-3xl mb-6 tracking-tight">
                  ONZE <span className="text-accent">MISSIE</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wij geloven dat iedere sportliefhebber zijn of haar droomsportevenement moet kunnen beleven. Onze missie is om die ervaringen toegankelijk, zorgeloos en onvergetelijk te maken.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Wij nemen alles uit handen: van accommodatie en tickets tot lokale begeleiding en transfers. U focust op het beleven van uw sportavontuur, wij zorgen voor de rest.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="font-display text-5xl text-accent mb-2">18+</div>
                <p className="font-semibold">Unieke Tours</p>
                <p className="text-sm text-muted-foreground">In Nederland, Europa en wereldwijd</p>
              </div>
              <div className="text-center">
                <div className="font-display text-5xl text-accent mb-2">100%</div>
                <p className="font-semibold">Maatwerk</p>
                <p className="text-sm text-muted-foreground">Elke reis afgestemd op uw wensen</p>
              </div>
              <div className="text-center">
                <div className="font-display text-5xl text-accent mb-2">30+</div>
                <p className="font-semibold">Bestemmingen</p>
                <p className="text-sm text-muted-foreground">Op alle continenten</p>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-muted p-8">
              <h2 className="font-display text-2xl mb-4 tracking-tight">
                BEDRIJFSINFORMATIE
              </h2>
              <address className="not-italic text-muted-foreground">
                <strong className="text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</strong><br />
                Myrianthous Anna<br />
                Panagioti Kaspi 5Α<br />
                Nicosia 1095<br />
                Cyprus
              </address>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
