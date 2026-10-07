import { ArrowUpRight, GitBranch, GitPullRequest, Terminal } from "lucide-react";
import { GithubIcon } from "./icons";
import { MotionReveal } from "./motion-wrapper";

export function GithubSection() {
  return (
    <section className="py-20 md:py-24 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Card */}
        <MotionReveal>
          <div className="relative rounded-3xl bg-[#0b101b] border border-white/[0.08] p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Subtle Ambient Background glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: GitHub Identity */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-emerald-400 mb-4">
                <span>// 06. OPEN SOURCE & REPOSITORIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Explore Code & Configurations on GitHub
              </h2>
              <p className="mt-3 text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Infrastructure as Code modules, CI/CD pipeline definitions, Docker configurations, and automation scripts. Follow my open-source work and engineering experiments.
              </p>

              {/* GitHub CTA Button */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/adityakumar-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-sm transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px]"
                  aria-label="Visit Aditya Kumar's GitHub profile"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>github.com/adityakumar-in</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-700" />
                </a>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Public Repositories</span>
                </div>
              </div>
            </div>

            {/* Right Column: Terminal Shell Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#07090e] border border-white/[0.08] p-5 font-mono text-xs text-zinc-300 space-y-3 shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>git-cli</span>
                  </div>
                  <span className="text-[11px] text-zinc-400">bash</span>
                </div>

                <div className="space-y-2 text-[12px] leading-relaxed">
                  <div className="text-zinc-400">
                    <span className="text-emerald-400">$</span> git clone https://github.com/adityakumar-in/devops-portfolio.git
                  </div>
                  <div className="text-zinc-400 pl-3 border-l border-white/10 text-[11px]">
                    Cloning into &apos;devops-portfolio&apos;...<br />
                    Receiving objects: 100% (done).
                  </div>
                  <div className="text-zinc-400">
                    <span className="text-emerald-400">$</span> cd devops-portfolio && tree -L 2
                  </div>
                  <div className="text-emerald-400/90 pl-3 border-l border-white/10 text-[11px]">
                    ├── docker-compose.yml<br />
                    ├── terraform/<br />
                    ├── Jenkinsfile<br />
                    └── src/
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        </MotionReveal>

      </div>
    </section>
  );
}
