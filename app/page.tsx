
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { ContactSection } from '@/components/sections/contact-section';
import { AppFooter } from '@/components/layout/app-footer';
import { AppHeader } from '@/components/layout/app-header';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <AppHeader />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <AppFooter />
    </div>
  );
}
