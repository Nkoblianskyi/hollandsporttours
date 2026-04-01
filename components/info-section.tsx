export function InfoSection() {
  const stats = [
    { number: '200+', label: 'Sportevenementen per jaar' },
    { number: '40+', label: 'Landen bereikt' },
    { number: '12.000+', label: 'Tevreden reizigers' },
    { number: '15', label: 'Jaar ervaring' },
  ]

  const pillars = [
    {
      index: '01',
      title: 'Toegang waar anderen niet komen',
      description:
        'Wij onderhandelen rechtstreeks met clubs, bonden en organisatoren. Dat betekent tickets voor uitverkochte wedstrijden, backstage passes en plaatsen in VIP-tribunes - lang voordat de reguliere verkoop start.',
    },
    {
      index: '02',
      title: 'Sport als reisdoel, niet als bijzaak',
      description:
        'Bij HollandSportTours staat het evenement centraal. De hotels, transfers en city trips zijn eromheen gebouwd - niet andersom. U reist als supporter, niet als toerist.',
    },
    {
      index: '03',
      title: 'Van Amsterdam tot Tokyo',
      description:
        'Nederland als thuisbasis, de wereld als speelveld. Eredivisie, Tour de France, Formule 1, Olympische Spelen, Six Nations - als het sport is, weten wij hoe u er het beste bij kunt zijn.',
    },
  ]

  return (
    <section className="bg-foreground text-background overflow-hidden">
      {/* Top: big statement row */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-accent font-sans text-sm uppercase tracking-[0.2em] mb-6">
              Over Holland Sport Tours
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none text-balance mb-0">
              SPORT BELEVEN OP HET{' '}
              <span className="text-accent">HOOGSTE NIVEAU</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Middle: stats strip */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="py-10 px-4 md:px-8 border-r border-background/10 last:border-r-0 even:border-r-0 md:even:border-r"
              >
                <p className="font-display text-4xl md:text-5xl text-accent leading-none mb-2">
                  {stat.number}
                </p>
                <p className="text-background/50 text-sm font-sans leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: three pillars as numbered rows */}
      <div className="container mx-auto px-4">
        {pillars.map((pillar, i) => (
          <div
            key={i}
            className="grid md:grid-cols-[120px_1fr_2fr] gap-6 md:gap-12 py-10 md:py-14 border-b border-background/10 last:border-b-0 items-start"
          >
            <span className="font-display text-6xl md:text-7xl text-background/15 leading-none select-none">
              {pillar.index}
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-background leading-tight text-balance pt-1 md:pt-3">
              {pillar.title}
            </h3>
            <p className="text-background/60 font-sans text-base leading-relaxed pt-1 md:pt-3 max-w-prose">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
