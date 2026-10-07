"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 md:py-10 border-t border-[#EAE6DF] dark:border-[#1E283D] bg-[#FAF8F5] dark:bg-[#090D16] text-[#5C6470] dark:text-[#94A3B8] text-xs transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#02365D] dark:bg-[#38BDF8] text-white dark:text-[#090D16] flex items-center justify-center font-bold text-[10px]">
                AK
              </div>
              <span className="font-bold text-[#1C1E21] dark:text-[#F8FAFC] text-sm">Aditya Kumar</span>
            </div>
            <span className="hidden sm:inline text-[#EAE6DF] dark:text-[#1E283D]">|</span>
            <span className="text-[#5C6470] dark:text-[#94A3B8] font-mono text-[11px]">DevOps Engineer</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 font-semibold text-xs">
            <a
              href="https://github.com/adityakumar-in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5C6470] dark:text-[#94A3B8] hover:text-[#02365D] dark:hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-kumar-aa30343a0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5C6470] dark:text-[#94A3B8] hover:text-[#02365D] dark:hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:Aditya749308@gmail.com"
              className="text-[#5C6470] dark:text-[#94A3B8] hover:text-[#02365D] dark:hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-3 text-[#5C6470] dark:text-[#94A3B8] font-mono text-[11px]">
            <span>© 2026 Aditya Kumar</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#02365D] dark:hover:text-[#38BDF8] transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
