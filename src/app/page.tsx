import { Navigation } from '@/components/organisms/Navigation';
import { Hero } from '@/components/organisms/Hero';
import { Portfolio } from '@/components/organisms/Portfolio';
import { Services } from '@/components/organisms/Services';
import { Footer } from '@/components/organisms/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />
      <Navigation />
      <Hero />
      <Portfolio />
      <Services />
      <Footer />
    </main>
  );
}
