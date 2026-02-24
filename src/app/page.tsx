/// <reference path="../types/iconify.d.ts" />
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="min-h-screen relative">
      <div className="noise-overlay" aria-hidden="true" />

      <div className="min-h-screen">
        {/* NAVIGATION */}
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-8 md:px-16 transition-all duration-500 bg-transparent">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-[#A0826D] flex items-center justify-center text-[#A0826D] font-serif text-xl bg-black/20 backdrop-blur-sm">
              NS
            </div>
            <span className="text-[10px] tracking-[0.4em] font-medium hidden sm:block text-white uppercase">NOVA STUDIO</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12 text-[10px] tracking-[0.3em]">
            <a href="#services" className="text-white hover:text-[#A0826D] transition-colors uppercase">Services</a>
            <a href="#portfolio" className="text-white hover:text-[#A0826D] transition-colors uppercase">Portfolio</a>
            <a href="#studio" className="text-white hover:text-[#A0826D] transition-colors uppercase">Studio</a>
            <a href="#contact" className="text-white hover:text-[#A0826D] transition-colors uppercase">Contact</a>
          </div>

          {/* Hamburger Trigger */}
          <button
            onClick={toggleMenu}
            className="w-12 h-12 border border-white/10 flex flex-col items-center justify-center gap-1.5 hover:border-[#A0826D] group transition-all duration-500 z-50 bg-black/20 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </nav>

        {/* MOBILE OVERLAY */}
        <div className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center space-y-8 text-center">
            {['Services', 'Portfolio', 'Studio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="text-white text-4xl md:text-6xl font-serif italic hover:text-[#A0826D] transition-colors tracking-tight"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="absolute bottom-12 text-[#A0826D] text-[10px] tracking-[0.5em] uppercase font-medium">
            // Nova Studio Digital
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center overflow-hidden bg-[#0A0C10]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
              alt="High-End Digital Workspace"
              className="object-cover saturate-[1.1] brightness-[0.7] md:brightness-[0.85]"
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-[5]"></div>
          </div>

          {/* Left Aligned Hero Content */}
          <div className="relative z-10 px-6 md:px-24 max-w-7xl w-full">
            <span className="text-[#A0826D] text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.6em] uppercase mb-4 md:mb-6 block">High-Performance Digital Architecture</span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[130px] leading-[0.9] md:leading-[0.85] font-light mb-8 italic text-white font-serif">
              The Digital <br /><span className="font-black not-italic drop-shadow-2xl">Ecosystem</span>
            </h1>
            <div className="h-[1px] w-16 md:w-24 bg-[#A0826D] mb-8"></div>
            <p className="text-xs md:text-base tracking-widest font-light uppercase text-white/50 max-w-xs md:max-w-md leading-relaxed">
              Engineering the intersection of aesthetic luxury and sub-second digital performance.
            </p>
          </div>

          {/* Right Info Panel (Glass Overlay) - Hidden on mobile/tablet */}
          <div className="absolute right-0 top-0 h-full w-[350px] lg:w-[450px] glass-panel bg-black/10 z-20 hidden lg:flex flex-col justify-center px-12 lg:px-20 border-l border-white/5">
            <div className="space-y-16">
              <div className="space-y-6">
                <span className="text-[#A0826D] text-[10px] tracking-[0.5em] uppercase block font-medium">// Current Revelation</span>
                <h3 className="text-4xl italic font-light font-serif text-white">Project Obsidian</h3>
                <p className="text-[10px] leading-loose text-white/50 tracking-[0.2em] uppercase font-light">
                  A high-conversion e-commerce engine built with sub-second response times and a bespoke luxury aesthetic.
                </p>
                <a href="#" className="inline-block text-[10px] tracking-[0.3em] uppercase border-b border-white/20 pb-2 hover:border-[#A0826D] transition-colors text-white">
                  View Case Study
                </a>
              </div>
              <div className="space-y-8 pt-8 text-white">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <span className="text-3xl font-serif text-[#A0826D]">01</span>
                  <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase group-hover:text-white transition-colors font-medium">
                    Technical Integration
                  </span>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <span className="text-3xl font-serif text-white/20">02</span>
                  <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase group-hover:text-white transition-colors font-medium">
                    Brand Sophistication
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-24 flex items-center gap-4 md:gap-6">
            <div className="w-[1px] h-12 md:h-16 bg-white/20 relative">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[#A0826D] animate-pulse"></div>
            </div>
            <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase opacity-40 text-white font-medium">Begin Journey</span>
          </div>
        </section>

        {/* PROJECTS SECTION (MASONRY) */}
        <section id="portfolio" className="px-6 py-20 md:px-24 md:py-32 bg-[#0A0C10]">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 md:mb-24">
            <div>
              <h2 className="text-4xl md:text-8xl font-light mb-4 text-white font-serif">Portfolio</h2>
              <p className="text-[#A0826D] italic text-base md:text-lg font-serif">Selected Strategic Works</p>
            </div>
            <div className="mt-8 md:mt-0">
              <a href="#" className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase border border-white/10 px-6 py-3 md:px-8 md:py-4 hover:border-[#A0826D] transition-all duration-500 inline-block text-white font-medium">
                View All Works
              </a>
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              { title: "Project Obsidian", category: "E-Commerce", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070", meta: "Global Launch // 2023" },
              { title: "Vertex Systems", category: "Performance", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071", meta: "SaaS Refactor // 2024" },
              { title: "Lumina Brand", category: "Strategy", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070", meta: "Digital Experience // 2023" },
              { title: "Nexus Interface", category: "Product", img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2070", meta: "Infrastructure // 2024" }
            ].map((proj) => (
              <div key={proj.title} className="relative group overflow-hidden bg-[#111319] break-inside-avoid">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    className="grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 object-cover"
                    fill
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="text-[#A0826D] text-[9px] md:text-[10px] tracking-widest uppercase mb-2 block font-medium">{proj.category}</span>
                  <h3 className="text-xl md:text-2xl mb-4 italic text-white font-serif">{proj.title}</h3>
                  <p className="text-[10px] text-white/60 uppercase tracking-widest font-medium">{proj.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES SECTION (HORIZONTAL CAROUSEL) */}
        <section id="services" className="py-20 md:py-32 bg-white text-black overflow-hidden">
          <div className="px-6 md:px-24 mb-12 md:mb-16 flex justify-between items-end">
            <div>
              <h2 className="text-4xl md:text-8xl font-light leading-none font-serif">Our Expertise</h2>
              <p className="text-[#A0826D] font-medium tracking-widest uppercase mt-4 text-[10px] md:text-xs font-bold">Digital Lifecycle</p>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-8 md:gap-12 px-6 md:px-24 pb-12 custom-scrollbar">
            {[
              { title: "Conceptualization", desc: "The architectural birth of digital ideas rooted in user psychology and business logic.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070" },
              { title: "Development", desc: "Engineering sophistication meeting aesthetic purity for high-performance frameworks.", img: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=2070" },
              { title: "Optimization", desc: "Meticulous refinery from initial deployment to sub-second performance scaling.", img: "https://images.pexels.com/photos/7931/pexels-photo-7931.jpg" }
            ].map((service) => (
              <div key={service.title} className="min-w-[280px] md:min-w-[400px] group cursor-pointer">
                <div className="relative h-[350px] md:h-[500px] overflow-hidden mb-6 md:mb-8">
                  <Image
                    src={service.img}
                    alt={service.title}
                    className="transition-transform duration-700 group-hover:scale-110 object-cover"
                    fill
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl italic mb-2 font-serif">{service.title}</h3>
                    <p className="text-[10px] md:text-xs text-black/60 tracking-wider uppercase max-w-xs font-medium lead-relaxed">{service.desc}</p>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 border border-[#A0826D] flex items-center justify-center text-[#A0826D] group-hover:bg-[#A0826D] group-hover:text-white transition-all">
                    {/* @ts-ignore */}
                    <iconify-icon icon="lucide:chevron-right"></iconify-icon>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer id="contact" className="relative px-6 py-20 md:px-24 md:py-32 bg-[#0A0C10] border-t border-white/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 relative z-10 font-serif">
            <div>
              <h2 className="text-5xl md:text-8xl italic mb-8 md:mb-12 text-white leading-tight">
                Start your <br /><span className="font-black not-italic block md:inline">legacy</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <a href="mailto:hello@novastudio.demo" className="flex items-center gap-4 text-base md:text-xl group text-white font-sans">
                  <span className="w-10 h-10 md:w-12 md:h-12 border border-[#A0826D] flex items-center justify-center text-[#A0826D] rounded-full group-hover:bg-[#A0826D] group-hover:text-white transition-all">
                    {/* @ts-ignore */}
                    <iconify-icon icon="lucide:mail"></iconify-icon>
                  </span>
                  <span className="hover:text-[#A0826D] transition-colors">hello@novastudio.demo</span>
                </a>
                <a href="tel:+27210000000" className="flex items-center gap-4 text-base md:text-xl group text-white font-sans">
                  <span className="w-10 h-10 md:w-12 md:h-12 border border-[#A0826D] flex items-center justify-center text-[#A0826D] rounded-full group-hover:bg-[#A0826D] group-hover:text-white transition-all">
                    {/* @ts-ignore */}
                    <iconify-icon icon="lucide:phone"></iconify-icon>
                  </span>
                  <span className="hover:text-[#A0826D] transition-colors">+27 21 000 0000</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between font-sans">
              <div className="grid grid-cols-2 gap-8 md:gap-12 text-[9px] md:text-[10px] tracking-[0.4em] uppercase opacity-80">
                <div className="flex flex-col gap-4">
                  <a href="#services" className="hover:text-[#A0826D] text-white transition-colors">Services</a>
                  <a href="#portfolio" className="hover:text-[#A0826D] text-white transition-colors">Portfolio</a>
                  <a href="#studio" className="hover:text-[#A0826D] text-white transition-colors">Studio</a>
                </div>
                <div className="flex flex-col gap-4">
                  <a href="#" className="hover:text-[#A0826D] text-white transition-colors">Instagram</a>
                  <a href="#" className="hover:text-[#A0826D] text-white transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-[#A0826D] text-white transition-colors">Behance</a>
                </div>
              </div>
              <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between text-[8px] md:text-[10px] tracking-widest text-white/40 uppercase font-medium">
                <p>© 2026 NOVA STUDIO. All Rights Reserved.</p>
                <div className="flex gap-6 md:gap-8 mt-4 md:mt-0">
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
