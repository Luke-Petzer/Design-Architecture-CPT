import Image from 'next/image';
import Link from 'next/link';
import { ParallaxWrapper } from '../molecules/MotionWrappers';

export const Hero = () => {

    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Image with LCP Optimization */}
            <ParallaxWrapper offset={200}>
                <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
                    alt="Sub-Saharan Coastal Residence"
                    fill
                    priority={true}
                    className="object-cover saturate-[1.1] brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-[5]"></div>
            </ParallaxWrapper>

            {/* Left Aligned Hero Content */}
            <div className="relative z-10 px-8 md:px-24 max-w-7xl">
                <span className="text-[var(--color-brand-accent)] text-xs tracking-[0.6em] uppercase mb-6 block">
                    Atlantic Seaboard Architecture
                </span>

                <h1 className="text-7xl md:text-[130px] leading-[0.85] font-light mb-8 italic">
                    The Cape <br />
                    <span className="font-black not-italic drop-shadow-2xl">Context</span>
                </h1>

                <div className="h-[1px] w-24 bg-[var(--color-brand-accent)] mb-8"></div>

                <p className="text-sm md:text-base tracking-widest font-light uppercase text-white/50 max-w-md">
                    Refining the dialogue between luxury living and the wild South African landscape.
                </p>
            </div>

            {/* Right Info Panel (Glass Overlay) */}
            <div className="absolute right-0 top-0 h-full w-[350px] lg:w-[450px] glass-panel bg-black/10 z-20 hidden lg:flex flex-col justify-center px-12 lg:px-20 border-l border-white/5">
                <div className="space-y-16">
                    <div className="space-y-6">
                        <span className="text-[var(--color-brand-accent)] text-[10px] tracking-[0.5em] uppercase block font-medium">
                            {'//'} Current Revelation
                        </span>
                        <h3 className="text-4xl italic font-light font-serif">Aura Monolith</h3>
                        <p className="text-[10px] leading-loose text-white/50 tracking-[0.2em] uppercase font-light">
                            A minimalist, multi-level concrete residence cantilevered over coastal rock formations, framing the horizon.
                        </p>
                        <Link
                            href="#"
                            className="inline-block text-[10px] tracking-[0.3em] uppercase border-b border-white/20 pb-2 hover:border-[var(--color-brand-accent)] transition-colors"
                        >
                            View Case Study
                        </Link>
                    </div>

                    <div className="space-y-8 pt-8">
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <span className="text-3xl font-serif text-[var(--color-brand-accent)]">01</span>
                            <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase group-hover:text-white transition-colors font-medium">Environmental Integration</span>
                        </div>
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <span className="text-3xl font-serif text-white/20">02</span>
                            <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase group-hover:text-white transition-colors font-medium">Material Sophistication</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-8 md:left-24 flex items-center gap-6">
                <div className="w-[1px] h-16 bg-white/20 relative">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-brand-accent)] animate-pulse"></div>
                </div>
                <span className="text-[10px] tracking-[0.4em] uppercase opacity-40">Begin Journey</span>
            </div>
        </section>
    );
};
