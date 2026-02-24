import Link from 'next/link';

/** Inline SVG icon — mail envelope */
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

/** Inline SVG icon — phone */
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const siteLinks = ['Services', 'Portfolio', 'Studio'] as const;
const socialLinks = ['Instagram', 'LinkedIn', 'Behance'] as const;

export const Footer = () => {
    return (
        <footer className="relative bg-[#0A0C10] border-t border-white/5 overflow-hidden py-32">
            {/* Background Texture / Watermark */}
            <div className="absolute right-[-5%] bottom-[-5%] z-0 select-none pointer-events-none opacity-[0.03]">
                <span className="text-[280px] font-black leading-none tracking-tighter">CONRAD</span>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                    <div className="space-y-16">
                        <h2 className="text-6xl md:text-8xl lg:text-[100px] leading-[0.9] font-light font-serif">
                            <span className="italic">Start your</span> <br />
                            <span className="font-semibold">legacy</span>
                        </h2>

                        <div className="space-y-8">
                            <Link
                                href="mailto:office@joshuaconrad.com"
                                className="flex items-center gap-6 group"
                            >
                                <div className="w-14 h-14 border border-white/10 flex items-center justify-center text-white rounded-full group-hover:border-[#A0826D] group-hover:text-[#A0826D] transition-all duration-500">
                                    <MailIcon />
                                </div>
                                <span className="text-lg md:text-xl font-light hover:text-[#A0826D] transition-colors leading-none">
                                    office@joshuaconrad.com
                                </span>
                            </Link>
                            <Link
                                href="tel:+27215550123"
                                className="flex items-center gap-6 group"
                            >
                                <div className="w-14 h-14 border border-white/10 flex items-center justify-center text-white rounded-full group-hover:border-[#A0826D] group-hover:text-[#A0826D] transition-all duration-500">
                                    <PhoneIcon />
                                </div>
                                <span className="text-lg md:text-xl font-light hover:text-[#A0826D] transition-colors leading-none">
                                    +27 21 555 0123
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between pt-8 lg:pt-0">
                        <div className="grid grid-cols-2 gap-12 md:gap-24">
                            <div className="flex flex-col gap-6">
                                <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#A0826D] font-bold mb-4">Navigation</h4>
                                {siteLinks.map((item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-[11px] tracking-[0.3em] uppercase opacity-50 hover:opacity-100 hover:text-[#A0826D] transition-all font-medium"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-6">
                                <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#A0826D] font-bold mb-4">Social</h4>
                                {socialLinks.map((item) => (
                                    <Link
                                        key={item}
                                        href="#"
                                        className="text-[11px] tracking-[0.3em] uppercase opacity-50 hover:opacity-100 hover:text-[#A0826D] transition-all font-medium"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.3em] text-white/20 uppercase font-medium gap-4">
                            <p>© 2026 Joshua Conrad Architects. All Rights Reserved.</p>
                            <div className="flex gap-12">
                                <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                                <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
