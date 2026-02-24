import Link from 'next/link';

const projects = [
    {
        category: 'Residential',
        title: 'Bantry Bay Villa',
        location: 'Cape Town',
        year: '2023',
        aspectRatio: '3 / 4',
    },
    {
        category: 'Sustainable',
        title: 'Karoo Retreat',
        location: 'Graaff-Reinet',
        year: '2024',
        aspectRatio: '1 / 1',
    },
    {
        category: 'Urban',
        title: 'City Center Atrium',
        location: 'Johannesburg',
        year: '2023',
        aspectRatio: '16 / 9',
    },
    {
        category: 'Commercial',
        title: 'Zenith Towers',
        location: 'Sandton',
        year: '2024',
        aspectRatio: '4 / 3',
    },
] as const;

export const Portfolio = () => {
    return (
        <section className="bg-[#0A0C10] py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-32">
                    <div>
                        <h2 className="text-6xl md:text-8xl lg:text-[120px] font-light leading-none mb-4">Portfolio</h2>
                        <p className="text-[#A0826D] italic text-xl font-serif">
                            Selected Architectural Works
                        </p>
                    </div>
                    <div className="mt-12 md:mt-0">
                        <Link
                            href="#"
                            className="text-[11px] tracking-[0.4em] uppercase border border-white/10 px-12 py-5 hover:border-[#A0826D] hover:bg-white/5 transition-all duration-500 inline-block font-medium"
                        >
                            View All Works
                        </Link>
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group overflow-hidden bg-[#0F1117] transition-all duration-500 hover:bg-[#14161B]"
                        >
                            {/* Image Container */}
                            <div
                                className="w-full grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 bg-zinc-800"
                                role="img"
                                aria-label={`${project.title} — ${project.category}`}
                                style={{ aspectRatio: project.aspectRatio }}
                            />

                            {/* Card Content */}
                            <div className="p-10 space-y-4">
                                <span className="text-[#A0826D] text-[10px] tracking-[0.3em] uppercase block font-semibold leading-none">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl italic font-light leading-tight font-serif group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium pt-2">
                                    {project.location} // {project.year}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
