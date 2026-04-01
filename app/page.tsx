import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { InfoSection } from '@/components/info-section'
import { ToursPreview } from '@/components/tours-preview'
import { AboutSnippet } from '@/components/about-snippet'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <ToursPreview />
        <AboutSnippet />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
