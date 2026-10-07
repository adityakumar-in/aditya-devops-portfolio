"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, MessageSquare, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { MotionReveal } from "./motion-wrapper";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailAddress = "Aditya749308@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <MotionReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-emerald-400 mb-4">
              <span>// 07. GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s build something reliable.
            </h2>
            <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              I&apos;m actively seeking DevOps Engineer and Cloud Infrastructure opportunities. Whether you have an open role, an infrastructure challenge, or want to discuss automated CI/CD pipelines, my inbox is open.
            </p>
          </div>
        </MotionReveal>

        {/* Contact Channels Grid */}
        <MotionReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          {/* Email Card (With Copy & Direct Send) */}
          <div className="md:col-span-1 p-6 rounded-2xl bg-[#0b101b] border border-white/[0.08] hover:border-emerald-500/35 transition-all duration-300 flex flex-col justify-between shadow-xl group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Direct Email</h3>
              <p className="text-xs text-zinc-400 mt-1">Best way to reach me directly</p>
              <div className="mt-3 text-xs font-mono text-zinc-300 break-all select-all">
                {emailAddress}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2">
              <a
                href={`mailto:${emailAddress}`}
                className="flex-1 py-2 px-3 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-semibold text-xs text-center transition-colors font-mono min-h-[38px] flex items-center justify-center"
              >
                Send Email
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="md:col-span-1 p-6 rounded-2xl bg-[#0b101b] border border-white/[0.08] hover:border-emerald-500/35 transition-all duration-300 flex flex-col justify-between shadow-xl group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] text-zinc-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">GitHub</h3>
              <p className="text-xs text-zinc-400 mt-1">Open source code & configs</p>
              <div className="mt-3 text-xs font-mono text-zinc-300">
                github.com/adityakumar-in
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <a
                href="https://github.com/adityakumar-in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-200 hover:text-white font-medium text-xs transition-colors font-mono flex items-center justify-center gap-1.5 min-h-[38px]"
              >
                <span>Visit Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Professional Network / LinkedIn */}
          <div className="md:col-span-1 p-6 rounded-2xl bg-[#0b101b] border border-white/[0.08] hover:border-emerald-500/35 transition-all duration-300 flex flex-col justify-between shadow-xl group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">LinkedIn</h3>
              <p className="text-xs text-zinc-400 mt-1">Professional network & experience</p>
              <div className="mt-3 text-xs font-mono text-zinc-300">
                Aditya Kumar
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-200 hover:text-white font-medium text-xs transition-colors font-mono flex items-center justify-center gap-1.5 min-h-[38px]"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
        </MotionReveal>

        {/* Live Availability Banner */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-xl bg-[#07090e] border border-white/[0.08] flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-zinc-300">Current Status:</span>
            <span className="text-emerald-400 font-semibold">Ready for DevOps Engineer Roles</span>
          </div>
          <span className="text-zinc-400 hidden sm:inline">Response Time: &lt; 24h</span>
        </div>

      </div>
    </section>
  );
}
