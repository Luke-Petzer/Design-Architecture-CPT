import { Menu } from 'lucide-react';
import Link from 'next/link';

export const Navigation = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 py-8 transition-all duration-500 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-[#A0826D] flex items-center justify-center text-[#A0826D] font-serif text-xl">
                        JC
                    </div>
                    <span className="text-[10px] tracking-[0.4em] font-medium hidden sm:block uppercase">Joshua Conrad</span>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center space-x-12 text-[10px] tracking-[0.3em]">
                    {['Services', 'Portfolio', 'Studio', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white hover:text-[#A0826D] transition-colors uppercase font-medium"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Menu Button */}
                <button
                    className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-[#A0826D] group transition-all duration-500"
                    aria-label="Open Menu"
                >
                    <Menu className="w-5 h-5 text-white group-hover:text-[#A0826D] transition-colors" />
                </button>
            </div>
        </nav>
    );
};
