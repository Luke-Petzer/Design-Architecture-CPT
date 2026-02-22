import { Heading, Text } from '../atoms/Typography';
import { GlassPanel } from '../atoms/GlassPanel';
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

            {/* Hero Content */}
            <div className="relative z-10 px-6 md:px-32 max-w-7xl">
                <div className="opacity-0 animate-[fade-in-left_0.8s_ease-out_0.4s_forwards]">
                    <span className="text-[var(--color-brand-accent)] text-xs tracking-[0.6em] uppercase mb-8 block">
                        Sub-Saharan Modernism
                    </span>
                </div>

                <div className="opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
                    <h1 className="text-[var(--font-size-hero)] leading-[0.85] font-light mb-8 italic">
                        The Cape <br />
                        <span className="font-black not-italic drop-shadow-2xl">Context</span>
                    </h1>
                </div>

                <div className="h-[1px] w-24 bg-[var(--color-brand-accent)] mb-8 origin-left scale-x-0 animate-[scale-x_1s_ease-out_0.8s_forwards]"></div>

                <div className="opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
                    <Text className="max-w-md text-slate-300">
                        Refining the dialogue between luxury living and the wild South African landscape.
                    </Text>
                </div>
            </div>

            {/* Right Info Panel (Frosted Glass) */}
            <aside
                className="absolute right-0 top-0 h-full w-[352px] lg:w-[448px] z-20 hidden lg:flex flex-col justify-center border-l border-white/5"
            >
                <GlassPanel className="h-full flex flex-col justify-center">
                    <div className="space-y-16">
                        <div className="space-y-6">
                            <span className="text-[var(--color-brand-accent)] text-[10px] tracking-[0.5em] uppercase block font-medium">
                // Current Revelation
                            </span>
                            <Heading as="h3">Aura Monolith</Heading>
                            <p className="text-[10px] leading-relaxed text-slate-300 tracking-[0.2em] uppercase font-light">
                                A minimalist concrete residence cantilevered over coastal rock formations, framing the horizon.
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
                                <span className="text-[9px] tracking-[0.3em] text-slate-400 uppercase group-hover:text-white transition-colors font-medium">Environmental Integration</span>
                            </div>
                            <div className="flex items-center gap-6 group cursor-pointer">
                                <span className="text-3xl font-serif text-white/20">02</span>
                                <span className="text-[9px] tracking-[0.3em] text-slate-400 uppercase group-hover:text-white transition-colors font-medium">Material Sophistication</span>
                            </div>
                        </div>
                    </div>
                </GlassPanel>
            </aside>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-6 md:left-32 flex items-center gap-6">
                <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
                    <div className="absolute left-0 w-full h-1/2 bg-[var(--color-brand-accent)] animate-[scroll-indicator_2s_easeInOut_infinite]"></div>
                </div>
                <span className="text-[10px] tracking-[0.4em] uppercase opacity-40">Begin Journey</span>
            </div>
        </section>
    );
};
