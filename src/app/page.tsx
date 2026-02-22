import { Navigation } from '@/components/organisms/Navigation';
import { Hero } from '@/components/organisms/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />
      <Navigation />
      <Hero />

      {/* Portfolio Placeholder Section */}
      <section className="min-h-screen bg-brand-dark flex items-center justify-center border-t border-white/5 px-6 py-16 md:py-32">
        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-8xl font-light opacity-20 leading-tight">Portfolio</h2>
          <p className="text-[var(--color-brand-accent)] italic text-lg opacity-40">Coming Soon</p>
        </div>
      </section>
    </main>
  );
}
