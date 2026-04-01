import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQSection() {
  const faqs = [
    {
      question: 'Hoe boek ik een sportreis?',
      answer: 'Het boeken van een sportreis is eenvoudig. Bekijk onze tourgids, kies uw gewenste reis en neem contact met ons op via het contactformulier. Ons team zal u begeleiden door het boekingsproces en zorgen voor een naadloze ervaring.',
    },
    {
      question: 'Zijn de reizen geschikt voor groepen?',
      answer: 'Ja, wij organiseren zowel individuele als groepsreizen. Of u nu met vrienden, familie, of collega\'s reist, wij kunnen uw reis op maat maken voor groepen van elke grootte.',
    },
    {
      question: 'Wat is inbegrepen in de tourprijs?',
      answer: 'Elke tour is uniek, maar over het algemeen zijn accommodatie, tickets voor sportevenementen, en lokaal transport inbegrepen. Specifieke details vindt u op de individuele tourpagina\'s. Neem contact met ons op voor een gedetailleerde offerte.',
    },
    {
      question: 'Kan ik een tour op maat laten maken?',
      answer: 'Absoluut! Wij zijn gespecialiseerd in maatwerk sportreizen. Vertel ons uw dromen en voorkeuren, en wij creëren een gepersonaliseerde reis die perfect bij u past.',
    },
    {
      question: 'Wat is het annuleringsbeleid?',
      answer: 'Ons annuleringsbeleid varieert afhankelijk van de tour en de boeking. Bij het boeken ontvangt u gedetailleerde informatie over annuleringsvoorwaarden. Wij adviseren ook reisannuleringsverzekering.',
    },
    {
      question: 'Bieden jullie verzekeringen aan?',
      answer: 'Wij raden ten zeerste aan om een reisverzekering af te sluiten voor uw sportreis. Hoewel wij geen verzekeringen direct aanbieden, kunnen wij u adviseren over geschikte opties en partners.',
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4 tracking-tight">
            VEELGESTELDE <span className="text-accent">VRAGEN</span>
          </h2>
          <p className="text-muted-foreground text-pretty">
            Heeft u vragen? Wij hebben antwoorden.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
