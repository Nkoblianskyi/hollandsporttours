import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Cookie Beleid',
  description: 'Lees ons cookie beleid om te begrijpen hoe Holland Sport Tours cookies gebruikt op onze website.',
}

export default function CookieBeleidPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-6xl mb-4 tracking-tight">
              COOKIE <span className="text-accent">BELEID</span>
            </h1>
            <p className="text-primary-foreground/80 text-sm">Laatst bijgewerkt: 1 april 2026</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-display text-2xl text-foreground mb-4 tracking-tight">WAT ZIJN COOKIES?</h2>
                <p>
                  Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt. Ze helpen ons de website beter te laten werken en uw ervaring te personaliseren.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4 tracking-tight">WELKE COOKIES GEBRUIKEN WIJ?</h2>
                <div className="space-y-4">
                  <div className="bg-muted p-4">
                    <h3 className="font-semibold text-foreground mb-2">Essentiële Cookies</h3>
                    <p className="text-sm">
                      Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen niet worden uitgeschakeld. Ze worden doorgaans ingesteld als reactie op door u uitgevoerde acties zoals het instellen van uw privacyvoorkeuren.
                    </p>
                  </div>
                  <div className="bg-muted p-4">
                    <h3 className="font-semibold text-foreground mb-2">Analytische Cookies</h3>
                    <p className="text-sm">
                      Met uw toestemming gebruiken wij analytische cookies om te begrijpen hoe bezoekers onze website gebruiken. Dit helpt ons de website te verbeteren.
                    </p>
                  </div>
                  <div className="bg-muted p-4">
                    <h3 className="font-semibold text-foreground mb-2">Marketingcookies</h3>
                    <p className="text-sm">
                      Met uw toestemming kunnen wij marketingcookies gebruiken om u relevante advertenties te tonen op basis van uw interesses.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4 tracking-tight">HOW LANG WORDEN COOKIES BEWAARD?</h2>
                <p>
                  Sessiecookies worden verwijderd wanneer u uw browser sluit. Permanente cookies blijven op uw apparaat staan totdat ze verlopen of u ze verwijdert.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4 tracking-tight">COOKIES BEHEREN</h2>
                <p>
                  U kunt uw cookievoorkeuren op elk moment aanpassen via uw browserinstellingen. Houd er rekening mee dat het uitschakelen van bepaalde cookies de functionaliteit van de website kan beïnvloeden.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4 tracking-tight">CONTACT</h2>
                <p>
                  Heeft u vragen over ons cookiebeleid? Neem dan contact met ons op:
                </p>
                <address className="not-italic">
                  FISCUS NOSTRUM FUND SERVICES LIMITED<br />
                  Myrianthous Anna<br />
                  Panagioti Kaspi 5Α<br />
                  Nicosia 1095, Cyprus<br />
                  <a href="mailto:info@hollandsporttours.com" className="text-accent hover:underline">
                    info@hollandsporttours.com
                  </a>
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
