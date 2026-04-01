'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground p-4 shadow-lg border-t border-primary-foreground/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm leading-relaxed">
              Wij gebruiken cookies om uw ervaring op onze website te verbeteren. Door deze website te blijven gebruiken, gaat u akkoord met ons gebruik van cookies.{' '}
              <Link href="/cookie-beleid" className="underline hover:text-accent">
                Meer informatie
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button 
              onClick={declineCookies} 
              variant="outline" 
              size="sm"
              className="flex-1 md:flex-none bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Weigeren
            </Button>
            <Button 
              onClick={acceptCookies} 
              variant="secondary" 
              size="sm"
              className="flex-1 md:flex-none"
            >
              Accepteren
            </Button>
            <button
              onClick={declineCookies}
              className="p-2 hover:bg-primary-foreground/10 rounded"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
