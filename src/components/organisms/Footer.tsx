import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="relative px-8 py-32 md:px-24 bg-[#0a0c10] border-t border-white/5 overflow-hidden">
            {/* Background Image */}
            <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1449156059431-789c6d4a8f35?q=80&w=2070"
                    alt="Architectural Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                {/* CTA Left */}
                <div>
                    <h2 className="text-6xl md:text-8xl italic mb-12">
                        Start your <br />
                        <span className="font-black not-italic">legacy</span>
                    </h2>
                    <div className="space-y-6">
                        <Link
                            href="mailto:hello@aura-arch.co.za"
                            className="flex items-center gap-4 text-xl group"
                        >
                            <span className="w-12 h-12 border border-[var(--color-brand-accent)] flex items-center justify-center text-[var(--color-brand-accent)] rounded-full group-hover:bg-[var(--color-brand-accent)] group-hover:text-white transition-all">
                                <Mail className="w-5 h-5" />
                            </span>
                            <span className="hover:text-[var(--color-brand-accent)] transition-colors">
                                hello@aura-arch.co.za
                            </span>
                        </Link>
                        <Link
                            href="tel:+27215550198"
                            className="flex items-center gap-4 text-xl group"
                        >
                            <span className="w-12 h-12 border border-[var(--color-brand-accent)] flex items-center justify-center text-[var(--color-brand-accent)] rounded-full group-hover:bg-[var(--color-brand-accent)] group-hover:text-white transition-all">
                                <Phone className="w-5 h-5" />
                            </span>
                            <span className="hover:text-[var(--color-brand-accent)] transition-colors">
                                +27 21 555 0198
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Nav + Copyright Right */}
                <div className="flex flex-col justify-between">
                    <div className="grid grid-cols-2 gap-12 text-[10px] tracking-[0.4em] uppercase opacity-60">
                        <div className="flex flex-col gap-4">
                            <Link href="#" className="hover:text-[var(--color-brand-accent)]">Services</Link>
                            <Link href="#" className="hover:text-[var(--color-brand-accent)]">Portfolio</Link>
                            <Link href="#" className="hover:text-[var(--color-brand-accent)]">Studio</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link href="#" className="hover:text-[var(--color-brand-accent)]">Instagram</Link>
                            <Link href="#" className="hover:text-[var(--color-brand-accent)]">LinkedIn</Link>
                            <Link href="#" className="hover:text-[var(--color-brand-accent)]">Behance</Link>
                        </div>
                    </div>
                    <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between text-[10px] tracking-widest text-white/20 uppercase">
                        <p>© 2024 Aura Architecture. All Rights Reserved.</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <Link href="#">Privacy</Link>
                            <Link href="#">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
