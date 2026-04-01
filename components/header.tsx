'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl tracking-tight">
              HOLLAND<span className="text-accent">SPORT</span>TOURS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/tours" className="text-sm font-medium hover:text-accent transition-colors">
              Tours
            </Link>
            <Link href="/over-ons" className="text-sm font-medium hover:text-accent transition-colors">
              Over Ons
            </Link>
            <Link href="/contact">
              <Button variant="default" size="sm">
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 border-t border-border">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/tours" 
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tours
            </Link>
            <Link 
              href="/over-ons" 
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Over Ons
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button variant="default" size="sm" className="w-full">
                Contact
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
