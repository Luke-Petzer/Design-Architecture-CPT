import { Menu } from 'lucide-react';
import Link from 'next/link';

export const Navigation = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-8 md:px-16 bg-transparent">
            <div className="flex items-center gap-8">
                <div className="px-3 py-1 border border-[var(--color-brand-accent)] flex items-center justify-center text-[var(--color-brand-accent)] font-serif text-lg tracking-widest whitespace-nowrap">
                    AURA
                </div>
                <span className="text-[10px] tracking-[0.4em] font-medium hidden sm:block uppercase text-slate-300">Aura Architecture</span>
            </div>

            <div className="hidden md:flex items-center space-x-12 text-[10px] tracking-[0.3em]">
                {['Services', 'Portfolio', 'Studio', 'Contact'].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-[var(--color-brand-accent)] transition-all duration-300 ease-in-out uppercase"
                    >
                        {item}
                    </Link>
                ))}
            </div>

            <button
                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-[var(--color-brand-accent)] group transition-all duration-300 ease-in-out active:scale-95"
            >
                <Menu className="w-5 h-5 text-white group-hover:text-[var(--color-brand-accent)] transition-colors" />
            </button>
        </nav>
    );
};
