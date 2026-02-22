import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const services = [
    {
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070',
        title: 'Conceptualization',
        description: 'The birth of spatial ideas rooted in context and site-specific geometry.',
    },
    {
        image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=2070',
        title: 'Structural Design',
        description: 'Engineering sophistication meeting aesthetic purity for lasting forms.',
    },
    {
        image: 'https://images.pexels.com/photos/7931/pexels-photo-7931.jpg',
        title: 'Site Supervision',
        description: 'Meticulous oversight from ground-break to final handover.',
    },
];

export const Services = () => {
    return (
        <section className="py-32 bg-white text-black overflow-hidden">
            {/* Section Header */}
            <div className="px-8 md:px-24 mb-16 flex justify-between items-end">
                <div>
                    <h2 className="text-5xl md:text-8xl font-light leading-none">Our Expertise</h2>
                    <p className="text-[var(--color-brand-accent)] font-medium tracking-widest uppercase mt-4 text-xs">
                        Architectural Lifecycle
                    </p>
                </div>
            </div>

            {/* Horizontal Scroll Carousel */}
            <div className="flex overflow-x-auto gap-12 px-8 md:px-24 pb-12 custom-scrollbar">
                {services.map((service) => (
                    <div key={service.title} className="min-w-[400px] group cursor-pointer">
                        <div className="h-[500px] overflow-hidden mb-8">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={800}
                                height={1000}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-3xl italic mb-2">{service.title}</h3>
                                <p className="text-xs text-black/40 tracking-wider uppercase max-w-xs">
                                    {service.description}
                                </p>
                            </div>
                            <div className="w-10 h-10 border border-[var(--color-brand-accent)] flex items-center justify-center text-[var(--color-brand-accent)] group-hover:bg-[var(--color-brand-accent)] group-hover:text-white transition-all">
                                <ChevronRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
