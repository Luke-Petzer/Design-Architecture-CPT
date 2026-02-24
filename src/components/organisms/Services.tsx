import { ChevronRight } from 'lucide-react';

const services = [
    {
        title: 'Conceptualization',
        description: 'The birth of spatial ideas rooted in context and site-specific geometry.',
    },
    {
        title: 'Structural Design',
        description: 'Engineering sophistication meeting aesthetic purity for lasting forms.',
    },
    {
        title: 'Site Supervision',
        description: 'Meticulous oversight from ground-break to final handover.',
    },
];

export const Services = () => {
    return (
        <section className="py-40 bg-white text-black">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="mb-24">
                    <h2 className="text-6xl md:text-8xl lg:text-[120px] font-light leading-none font-serif mb-6">Our Expertise</h2>
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-[1px] bg-[#A0826D]"></div>
                        <p className="text-[#A0826D] font-semibold tracking-[0.4em] uppercase text-[10px]">
                            Architectural Lifecycle
                        </p>
                    </div>
                </div>

                {/* Expertise Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {services.map((service) => (
                        <article key={service.title} className="group cursor-pointer">
                            {/* Image Placeholder */}
                            <div
                                className="aspect-[4/5] bg-neutral-100 mb-10 overflow-hidden relative shadow-sm"
                                role="img"
                                aria-label={`${service.title} — architectural service`}
                            >
                                <div className="w-full h-full bg-neutral-200 transition-transform duration-1000 group-hover:scale-110" />
                            </div>

                            {/* Content Block */}
                            <div className="flex justify-between items-start">
                                <div className="space-y-4">
                                    <h3 className="text-4xl italic font-light font-serif leading-tight group-hover:text-[#A0826D] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-[10px] text-black/50 tracking-[0.2em] uppercase max-w-[280px] leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>
                                <div
                                    className="w-12 h-12 border border-[#A0826D]/30 flex items-center justify-center text-[#A0826D] group-hover:bg-[#A0826D] group-hover:text-white group-hover:border-[#A0826D] transition-all duration-500"
                                    aria-hidden="true"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
