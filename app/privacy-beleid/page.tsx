import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Beleid',
  description: 'Lees ons privacy beleid om te begrijpen hoe Holland Sport Tours omgaat met uw persoonsgegevens.',
}

export default function PrivacyBeleidPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-6xl mb-4 tracking-tight">
              PRIVACY <span className="text-accent">BELEID</span>
            </h1>
            <p className="text-primary-foreground/80 text-sm">Laatst bijgewerkt: 1 april 2026</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-display text-2xl text-foreground mb-4 tracking-tight">VERWERKINGSVERANTWOORDELIJKE</h2>
                <p>
                  Verwerkingsverantwoordelijke voor de verwerking van uw persoonsgegevens is:
                </p>
                <address className="not-italic mt-2">
                  <strong className="text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</strong><br />
                  Myrianthous Anna<br />
                  Panagioti Kaspi 5Α<br />
                  Nicosia 1095<br />
                  Cyprus<br />
                  <a href="mailto:info@hollandsporttours.com" className="text-accent hover:underline">
                    info@hollandsporttours.com
                  </a>
                </address>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4 tracking-tight">WELKE GEGEVENS VERZAMELEN WIJ?</h2>
                <p>Wij kunnen de volgende persoonsgegevens verwerken:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Naam en contactgegevens (e-mail, telefoon)</li>
                  <li>Reisgegevens en voorkeuren</li>
                  <li>Communicatiegeschiedenis</li>
                  <li>Technische gegevens (IP-adres, browsertype via cookies)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4 tracking-tight">WAARVOOR GEBRUIKEN WIJ UW GEGEVENS?</h2>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Het afhandelen van uw aanvragen en boekingen</li>
                  <li>Het versturen van informatie over onze diensten</li>
                  <li>Het verbeteren van onze website en dienstverlening</li>
                  <li>Het voldoen aan wettelijke verplichtingen</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4 tracking-tight">RECHTSGROND</h2>
                <p>
                  Wij verwerken uw persoonsgegevens op basis van:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Uitvoering van een overeenkomst (contractuele noodzaak)</li>
                  <li>Uw toestemming (voor marketingcommunicatie)</li>
                  <li>Gerechtvaardigde belangen (verbetering van onze diensten)</li>
                  <li>Wettelijke verplichting</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4 tracking-tight">BEWAARTERMIJN</h2>
                <p>
                  Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld, of zolang als wettelijk vereist.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4 tracking-tight">UW RECHTEN</h2>
                <p>Op grond van de AVG (GDPR) heeft u de volgende rechten:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Recht op inzage van uw persoonsgegevens</li>
                  <li>Recht op rectificatie van onjuiste gegevens</li>
                  <li>Recht op verwijdering van uw gegevens</li>
                  <li>Recht op beperking van de verwerking</li>
                  <li>Recht op overdraagbaarheid van gegevens</li>
                  <li>Recht van bezwaar</li>
                </ul>
                <p className="mt-2 text-sm">
                  Om uw rechten uit te oefenen, kunt u contact met ons opnemen via{' '}
                  <a href="mailto:info@hollandsporttours.com" className="text-accent hover:underline">
                    info@hollandsporttours.com
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4 tracking-tight">KLACHTEN</h2>
                <p>
                  Als u niet tevreden bent met hoe wij uw persoonsgegevens verwerken, heeft u het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP) of de relevante toezichthoudende autoriteit in uw land.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4 tracking-tight">WIJZIGINGEN</h2>
                <p>
                  Wij behouden het recht voor dit privacybeleid op elk moment te wijzigen. Wijzigingen worden op deze pagina gepubliceerd met een bijgewerkte datum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
