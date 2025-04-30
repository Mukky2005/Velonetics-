import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { ServicesSection } from "@/components/services-section"
import { LogoShowcase } from "@/components/logo-showcase"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <HeroSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <ContentSection />
        <LogoShowcase />
        <ServicesSection />
      </div>
      <SiteFooter />
    </div>
  )
}

