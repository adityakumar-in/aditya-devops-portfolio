"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Pipeline", href: "#pipeline" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 header-glass border-b border-[#EAE6DF] dark:border-[#1E283D] shadow-xs"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <Link
            href="#"
            className="group flex items-center gap-2.5 text-[#1C1E21] dark:text-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02365D] dark:focus-visible:ring-[#38BDF8] rounded-lg"
            aria-label="Aditya Kumar — DevOps Engineer Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#02365D] dark:bg-[#38BDF8] text-white dark:text-[#090D16] flex items-center justify-center font-bold text-xs tracking-wider shadow-xs group-hover:opacity-90 transition-opacity">
              AK
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-sm tracking-tight text-[#1C1E21] dark:text-[#F8FAFC] group-hover:text-[#02365D] dark:group-hover:text-[#38BDF8] transition-colors">
                Aditya Kumar
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#02365D]/10 dark:bg-[#38BDF8]/10 text-[#02365D] dark:text-[#38BDF8] border border-[#02365D]/15 dark:border-[#38BDF8]/20">
                DevOps
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-0.5 lg:gap-1 rounded-full px-3 py-1 bg-white/80 dark:bg-[#101624]/80 border border-[#EAE6DF] dark:border-[#1E283D] shadow-xs backdrop-blur-md"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 lg:px-3.5 py-1.5 text-xs font-semibold text-[#5C6470] dark:text-[#94A3B8] hover:text-[#02365D] dark:hover:text-[#38BDF8] transition-colors rounded-full hover:bg-[#FAF8F5] dark:hover:bg-[#161F33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02365D]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA, Availability Indicator & Dark Mode Toggle */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <div className="hidden lg:flex items-center gap-2 text-[11px] font-medium text-[#087D82] dark:text-[#14B8A6] bg-[#0B9FA5]/10 dark:bg-[#14B8A6]/10 border border-[#0B9FA5]/20 dark:border-[#14B8A6]/20 px-2.5 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0B9FA5] dark:bg-[#14B8A6] pulse-dot" />
              <span>Available</span>
            </div>

            {/* Dark Mode Toggle */}
            <ThemeToggle />

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#02365D] hover:bg-[#01243E] dark:bg-[#38BDF8] dark:text-[#090D16] dark:hover:bg-[#7DD3FC] transition-all px-3.5 lg:px-4 py-2 rounded-xl shadow-xs hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02365D] cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Dark Mode Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#1C1E21] dark:text-[#F8FAFC] bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02365D] min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-[#1C1E21] dark:text-[#F8FAFC] hover:text-[#02365D] dark:hover:text-[#38BDF8] hover:bg-[#FAF8F5] dark:hover:bg-[#161F33] transition-colors flex items-center justify-between min-h-[44px]"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-[#8C94A0]">→</span>
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-[#EAE6DF] dark:border-[#1E283D]">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 text-sm font-bold text-white dark:text-[#090D16] bg-[#02365D] dark:bg-[#38BDF8] hover:bg-[#01243E] dark:hover:bg-[#7DD3FC] transition-colors px-4 py-3 rounded-xl min-h-[44px] shadow-xs"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
