"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { MotionReveal } from "./motion-wrapper";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "Aditya749308@gmail.com";
  const phoneNumber = "+91 7403084655";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-16 relative bg-[var(--bg-canvas)] border-t border-[var(--border-warm)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <MotionReveal>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-xs font-bold uppercase tracking-widest text-[#0B9FA5] dark:text-[#14B8A6] mb-4 shadow-xs">
              <span>// 07. Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#02365D] dark:text-[#38BDF8] leading-tight">
              Let&apos;s build something reliable.
            </h2>
            <p className="mt-4 text-[#5C6470] dark:text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              I am actively seeking DevOps Engineer and Cloud Infrastructure opportunities. Whether you have an open role, need to automate continuous integration pipelines, or want to discuss container orchestration, my inbox is open.
            </p>
          </div>
        </MotionReveal>

        {/* Contact Cards Grid */}
        <MotionReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            {/* Email Card */}
            <div className="card-premium p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#02365D]/10 dark:bg-[#38BDF8]/10 text-[#02365D] dark:text-[#38BDF8] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1C1E21] dark:text-[#F8FAFC]">Email</h3>
                <p className="text-xs text-[#5C6470] dark:text-[#94A3B8] mt-1">Direct communication</p>
                <div className="mt-3 text-xs font-mono font-medium text-[#02365D] dark:text-[#38BDF8] break-all select-all">
                  {emailAddress}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE6DF] dark:border-[#1E283D] flex items-center gap-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#02365D] hover:bg-[#01243E] dark:bg-[#38BDF8] dark:text-[#090D16] dark:hover:bg-[#7DD3FC] text-white font-bold text-xs text-center transition-all min-h-[38px] flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white dark:bg-[#101624] hover:bg-[#FAF8F5] dark:hover:bg-[#161F33] border border-[#EAE6DF] dark:border-[#1E283D] hover:border-[#D8D2C7] dark:hover:border-[#334155] text-[#5C6470] dark:text-[#94A3B8] hover:text-[#1C1E21] dark:hover:text-[#F8FAFC] transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#087D82] dark:text-[#14B8A6]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="card-premium p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] dark:bg-[#161F33] border border-[#EAE6DF] dark:border-[#1E283D] text-[#1C1E21] dark:text-[#F8FAFC] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1C1E21] dark:text-[#F8FAFC]">GitHub</h3>
                <p className="text-xs text-[#5C6470] dark:text-[#94A3B8] mt-1">Repositories & configs</p>
                <div className="mt-3 text-xs font-mono font-medium text-[#02365D] dark:text-[#38BDF8]">
                  github.com/adityakumar-in
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE6DF] dark:border-[#1E283D]">
                <a
                  href="https://github.com/adityakumar-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-white dark:bg-[#101624] hover:bg-[#FAF8F5] dark:hover:bg-[#161F33] border border-[#EAE6DF] dark:border-[#1E283D] hover:border-[#D8D2C7] dark:hover:border-[#334155] text-[#1C1E21] dark:text-[#F8FAFC] hover:text-[#02365D] dark:hover:text-[#38BDF8] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 min-h-[38px] shadow-xs"
                >
                  <span>Visit Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#5C6470] dark:text-[#94A3B8]" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="card-premium p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#02365D]/10 dark:bg-[#38BDF8]/10 text-[#02365D] dark:text-[#38BDF8] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1C1E21] dark:text-[#F8FAFC]">LinkedIn</h3>
                <p className="text-xs text-[#5C6470] dark:text-[#94A3B8] mt-1">Professional network</p>
                <div className="mt-3 text-xs font-mono font-medium text-[#02365D] dark:text-[#38BDF8] break-all">
                  linkedin.com/in/aditya-kumar-aa30343a0
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE6DF] dark:border-[#1E283D]">
                <a
                  href="https://www.linkedin.com/in/aditya-kumar-aa30343a0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-white dark:bg-[#101624] hover:bg-[#FAF8F5] dark:hover:bg-[#161F33] border border-[#EAE6DF] dark:border-[#1E283D] hover:border-[#D8D2C7] dark:hover:border-[#334155] text-[#1C1E21] dark:text-[#F8FAFC] hover:text-[#02365D] dark:hover:text-[#38BDF8] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 min-h-[38px] shadow-xs"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#5C6470] dark:text-[#94A3B8]" />
                </a>
              </div>
            </div>

          </div>
        </MotionReveal>

        {/* Live Status & Phone Callout */}
        <div className="mt-8 sm:mt-10 max-w-2xl mx-auto p-4 rounded-2xl bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0B9FA5] dark:bg-[#14B8A6] pulse-dot" />
            <span className="text-[#5C6470] dark:text-[#94A3B8]">Availability:</span>
            <span className="text-[#02365D] dark:text-[#38BDF8] font-bold">Open to Full-Time DevOps Roles</span>
          </div>

          <div className="flex items-center gap-2 text-[#5C6470] dark:text-[#94A3B8]">
            <Phone className="w-3.5 h-3.5 text-[#02365D] dark:text-[#38BDF8]" />
            <span className="select-all text-[#1C1E21] dark:text-[#F8FAFC]">{phoneNumber}</span>
            <button
              onClick={handleCopyPhone}
              className="p-1 hover:text-[#02365D] dark:hover:text-[#38BDF8] transition-colors cursor-pointer"
              title="Copy phone number"
              aria-label="Copy phone number"
            >
              {copiedPhone ? (
                <Check className="w-3 h-3 text-[#087D82] dark:text-[#14B8A6]" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
