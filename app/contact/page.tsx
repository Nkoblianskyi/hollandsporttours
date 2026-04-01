'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Mail, Phone } from 'lucide-react'

interface ContactForm {
  naam: string
  email: string
  telefoon: string
  onderwerp: string
  bericht: string
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    // Simulated form submission
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
    reset()
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-6xl mb-4 tracking-tight text-balance">
              NEEM <span className="text-accent">CONTACT OP</span>
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-xl text-pretty">
              Heeft u vragen over onze tours of wilt u een offerte aanvragen? Wij horen graag van u.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="font-display text-2xl mb-6 tracking-tight">
                    CONTACTGEGEVENS
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <address className="not-italic text-sm text-muted-foreground">
                        FISCUS NOSTRUM FUND SERVICES LIMITED<br />
                        Myrianthous Anna<br />
                        Panagioti Kaspi 5Α<br />
                        Nicosia 1095<br />
                        Cyprus
                      </address>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <a href="mailto:info@hollandsporttours.com" className="hover:text-accent transition-colors">
                          info@hollandsporttours.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-6">
                  <h3 className="font-semibold mb-2">Reactietijd</h3>
                  <p className="text-sm text-muted-foreground">
                    Wij streven ernaar binnen 24 uur op uw bericht te reageren op werkdagen.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="bg-accent/10 border border-accent/20 p-8 text-center">
                    <h3 className="font-display text-2xl mb-2">BEDANKT VOOR UW BERICHT!</h3>
                    <p className="text-muted-foreground">
                      Wij nemen zo snel mogelijk contact met u op.
                    </p>
                    <Button 
                      className="mt-6" 
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                    >
                      Nieuw bericht sturen
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <h2 className="font-display text-2xl tracking-tight">
                      STUUR ONS EEN <span className="text-accent">BERICHT</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="naam">Naam *</Label>
                        <Input
                          id="naam"
                          {...register('naam', { required: 'Naam is verplicht' })}
                          placeholder="Uw volledige naam"
                          className={errors.naam ? 'border-destructive' : ''}
                        />
                        {errors.naam && <p className="text-sm text-destructive">{errors.naam.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email', { 
                            required: 'E-mail is verplicht',
                            pattern: { value: /^\S+@\S+$/i, message: 'Ongeldig e-mailadres' }
                          })}
                          placeholder="uw@email.com"
                          className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefoon">Telefoonnummer</Label>
                        <Input
                          id="telefoon"
                          {...register('telefoon')}
                          placeholder="+31 6 12 34 56 78"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="onderwerp">Onderwerp *</Label>
                        <Input
                          id="onderwerp"
                          {...register('onderwerp', { required: 'Onderwerp is verplicht' })}
                          placeholder="Bijv. Vraag over Amsterdam Marathon"
                          className={errors.onderwerp ? 'border-destructive' : ''}
                        />
                        {errors.onderwerp && <p className="text-sm text-destructive">{errors.onderwerp.message}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bericht">Bericht *</Label>
                      <Textarea
                        id="bericht"
                        {...register('bericht', { required: 'Bericht is verplicht' })}
                        placeholder="Vertel ons meer over uw sportreisinteresses..."
                        rows={6}
                        className={errors.bericht ? 'border-destructive' : ''}
                      />
                      {errors.bericht && <p className="text-sm text-destructive">{errors.bericht.message}</p>}
                    </div>
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? 'Verzenden...' : 'Verstuur Bericht'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
