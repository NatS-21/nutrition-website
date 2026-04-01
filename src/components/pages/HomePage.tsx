import { Header } from '../organisms/Header';
import { HeroSection } from '../organisms/HeroSection';
import { ProblemsSection } from '../organisms/ProblemsSection';
import { ServicesSection } from '../organisms/ServicesSection';
import { AboutSection } from '../organisms/AboutSection';
import { WorkflowSection } from '../organisms/WorkflowSection';
import { ReviewsSection } from '../organisms/ReviewsSection';
import { CtaSection } from '../organisms/CtaSection';
import { Footer } from '../organisms/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemsSection />
        <ServicesSection />
        <AboutSection />
        <WorkflowSection />
        <ReviewsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
