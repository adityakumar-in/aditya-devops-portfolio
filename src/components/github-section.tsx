"use client";

import { ArrowUpRight, GitBranch, Terminal } from "lucide-react";
import { GithubIcon } from "./icons";
import { MotionReveal } from "./motion-wrapper";

export function GithubSection() {
  return (
    <section className="py-12 md:py-16 relative bg-[var(--bg-canvas)] border-t border-[var(--border-warm)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <MotionReveal>
          <div className="card-premium p-8 sm:p-12 shadow-md relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-xs font-bold uppercase tracking-widest text-[#0B9FA5] dark:text-[#14B8A6] mb-4">
                  <span>// 06. Source Repositories</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#02365D] dark:text-[#38BDF8]">
                  Explore Configurations on GitHub
                </h2>
                <p className="mt-3 text-[#5C6470] dark:text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-xl">
                  Infrastructure as Code scripts, CI/CD pipeline definitions, Docker configurations, and multi-tier application deployments. Everything version-controlled and reproducible.
                </p>

                {/* GitHub CTA Button */}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="https://github.com/adityakumar-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#02365D] hover:bg-[#01243E] dark:bg-[#38BDF8] dark:text-[#090D16] dark:hover:bg-[#7DD3FC] text-white font-bold text-sm transition-all shadow-sm hover:shadow hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02365D] dark:focus-visible:ring-[#38BDF8] min-h-[46px]"
                    aria-label="Visit Aditya Kumar's GitHub profile"
                  >
                    <GithubIcon className="w-4 h-4 text-white dark:text-[#090D16]" />
                    <span>github.com/adityakumar-in</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 dark:text-slate-800" />
                  </a>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#5C6470] dark:text-[#94A3B8]">
                    <span className="w-2 h-2 rounded-full bg-[#0B9FA5] dark:bg-[#14B8A6]" />
                    <span>Public Workspaces</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Sleek Terminal Preview */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#121721] border border-[#232B3D] p-5 font-mono text-xs text-[#E2E8F0] space-y-3 shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-[#232B3D] text-[#94A3B8]">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#0B9FA5]" />
                      <span>git-cli</span>
                    </div>
                    <span className="text-[11px] text-[#64748B]">bash</span>
                  </div>

                  <div className="space-y-2 text-[12px] leading-relaxed">
                    <div className="text-[#94A3B8]">
                      <span className="text-[#38BDF8]">$</span> git clone https://github.com/adityakumar-in/devops-portfolio.git
                    </div>
                    <div className="text-[#94A3B8] pl-3 border-l border-[#232B3D] text-[11px]">
                      Cloning into &apos;devops-portfolio&apos;...<br />
                      Receiving objects: 100% (done).
                    </div>
                    <div className="text-[#94A3B8]">
                      <span className="text-[#38BDF8]">$</span> cd devops-portfolio && ls -la
                    </div>
                    <div className="text-[#10B981] pl-3 border-l border-[#232B3D] text-[11px]">
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
