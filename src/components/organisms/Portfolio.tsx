import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
        category: 'Residential',
        title: 'Bantry Bay Villa',
        location: 'Cape Town',
        year: '2023',
    },
    {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
        category: 'Urban',
        title: 'City Center Atrium',
        location: 'Johannesburg',
        year: '2023',
    },
    {
        image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2070',
        category: 'Commercial',
        title: 'Zenith Towers',
        location: 'Sandton',
        year: '2024',
    },
    {
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
        category: 'Sustainable',
        title: 'Karoo Retreat',
        location: 'Graaff-Reinet',
        year: '2024',
    },
];

export const Portfolio = () => {
    return (
        <section className="px-8 py-32 md:px-24 bg-[#0a0c10]">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-24">
                <div>
                    <h2 className="text-5xl md:text-8xl font-light mb-4">Portfolio</h2>
                    <p className="text-[var(--color-brand-accent)] italic text-lg">
                        Selected Architectural Works
                    </p>
                </div>
                <div className="mt-8 md:mt-0">
                    <Link
                        href="#"
                        className="text-[10px] tracking-[0.4em] uppercase border border-white/10 px-8 py-4 hover:border-[var(--color-brand-accent)] transition-all duration-500"
                    >
                        View All Works
                    </Link>
                </div>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="relative group overflow-hidden bg-[#111319] break-inside-avoid"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                        />
                        <div className="p-8">
                            <span className="text-[var(--color-brand-accent)] text-[10px] tracking-widest uppercase mb-2 block">
                                {project.category}
                            </span>
                            <h3 className="text-2xl mb-4 italic">{project.title}</h3>
                            <p className="text-xs text-white/40 uppercase tracking-widest">
                                {project.location} {'//'}  {project.year}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
