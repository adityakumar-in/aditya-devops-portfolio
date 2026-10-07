import { Terminal, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#06080d] text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-white text-sm">Aditya Kumar</span>
            </div>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="text-zinc-400 font-mono text-[11px]">DevOps Engineer</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a
              href="https://github.com/adityakumar-in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a
              href="mailto:Aditya749308@gmail.com"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              Email
            </a>
          </div>

          {/* Copyright & System Status */}
          <div className="flex items-center gap-3 text-zinc-400 font-mono text-[11px]">
            <span>© 2026 Aditya Kumar</span>
            <span>•</span>
            <a
              href="#"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
