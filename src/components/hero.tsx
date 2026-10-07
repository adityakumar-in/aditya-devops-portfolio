"use client";

import { useState } from "react";
import {
  ArrowRight,
  Mail,
  Terminal,
  CheckCircle2,
  Server,
  Cloud,
  Layers,
  Cpu,
  Copy,
  Check,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { MotionReveal } from "./motion-wrapper";

type ConsoleTab = "terraform" | "jenkins" | "docker";

export function Hero() {
  const [activeTab, setActiveTab] = useState<ConsoleTab>("jenkins");
  const [copiedCmd, setCopiedCmd] = useState(false);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      {/* Background Subtle Warm Dot Pattern */}
      <div className="absolute inset-0 bg-soft-grid opacity-60 pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-b from-[#02365D]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Hero Identity & Position */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <MotionReveal delay={0.05}>
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] shadow-xs text-xs font-semibold text-[#1C1E21] dark:text-[#F8FAFC] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0B9FA5] dark:bg-[#14B8A6] pulse-dot" />
                <span className="text-[#5C6470] dark:text-[#94A3B8]">Status:</span>
                <span className="text-[#02365D] dark:text-[#38BDF8] font-bold">Open for DevOps Roles</span>
              </div>
            </MotionReveal>

            {/* Main Headline */}
            <MotionReveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1C1E21] dark:text-[#F8FAFC] leading-[1.08] mb-4">
                Aditya Kumar
                <span className="block mt-1 sm:mt-2 text-3xl sm:text-5xl lg:text-6xl font-serif-italic text-[#E77922] dark:text-[#F59E0B]">
                  DevOps Engineer
                </span>
              </h1>
            </MotionReveal>

            {/* Professional Summary from Resume */}
            <MotionReveal delay={0.15}>
              <p className="text-base sm:text-lg text-[#5C6470] dark:text-[#94A3B8] leading-relaxed max-w-2xl mb-6">
                DevOps Engineer with hands-on experience in AWS, Linux, Docker, Jenkins, Terraform, and CI/CD automation. Skilled in cloud infrastructure, containerization, Infrastructure as Code (IaC), and deployment automation.
              </p>
            </MotionReveal>

            {/* Key Stack Pillars from Resume */}
            <MotionReveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-[#1C1E21] dark:text-[#F8FAFC] font-medium shadow-xs flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5 text-[#02365D] dark:text-[#38BDF8]" />
                  AWS (EC2, VPC, IAM, S3)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-[#1C1E21] dark:text-[#F8FAFC] font-medium shadow-xs flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#E77922] dark:text-[#F59E0B]" />
                  Linux (Ubuntu)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-[#1C1E21] dark:text-[#F8FAFC] font-medium shadow-xs flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-[#0B9FA5] dark:text-[#14B8A6]" />
                  Docker & Compose
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-[#1C1E21] dark:text-[#F8FAFC] font-medium shadow-xs flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#02365D] dark:text-[#38BDF8]" />
                  Jenkins CI/CD
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-[#1C1E21] dark:text-[#F8FAFC] font-medium shadow-xs flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#5C6470] dark:text-[#94A3B8]" />
                  Terraform IaC
                </span>
              </div>
            </MotionReveal>

            {/* CTAs */}
            <MotionReveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#02365D] hover:bg-[#01243E] dark:bg-[#38BDF8] dark:text-[#090D16] dark:hover:bg-[#7DD3FC] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02365D] min-h-[46px] w-full sm:w-auto"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-[#101624] hover:bg-[#F4F1EA] dark:hover:bg-[#161F33] border border-[#EAE6DF] dark:border-[#1E283D] text-[#1C1E21] dark:text-[#F8FAFC] hover:text-[#02365D] dark:hover:text-[#38BDF8] font-semibold text-sm transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02365D] min-h-[46px] w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4 text-[#5C6470] dark:text-[#94A3B8]" />
                  <span>Contact Me</span>
                </a>

                <a
                  href="https://github.com/adityakumar-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white dark:bg-[#101624] hover:bg-[#F4F1EA] dark:hover:bg-[#161F33] border border-[#EAE6DF] dark:border-[#1E283D] text-[#1C1E21] dark:text-[#F8FAFC] font-semibold text-sm transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02365D] min-h-[46px] w-full sm:w-auto"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/aditya-kumar-aa30343a0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white dark:bg-[#101624] hover:bg-[#F4F1EA] dark:hover:bg-[#161F33] border border-[#EAE6DF] dark:border-[#1E283D] text-[#1C1E21] dark:text-[#F8FAFC] font-semibold text-sm transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02365D] min-h-[46px] w-full sm:w-auto"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#02365D] dark:text-[#38BDF8]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </MotionReveal>

          </div>

          {/* Right Column: DevOps Console & Automation Telemetry */}
          <div className="lg:col-span-5 w-full">
            <MotionReveal delay={0.2} direction="left">
              <div className="rounded-2xl terminal-window shadow-xl overflow-hidden border border-[#232B3D]">
                
                {/* Console Top Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0D121C] border-b border-[#232B3D]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                    <span className="ml-2 text-xs font-mono text-[#94A3B8]">infra.adityakumar.dev</span>
                  </div>

                  <button
                    onClick={() => {
                      const cmd =
                        activeTab === "terraform"
                          ? "terraform apply -auto-approve"
                          : activeTab === "jenkins"
                          ? "jenkins-pipeline --run --all-stages"
                          : "docker compose up -d --build";
                      copyCommand(cmd);
                    }}
                    className="p-1 rounded text-[#94A3B8] hover:text-white transition-colors"
                    title="Copy command"
                    aria-label="Copy active command"
                  >
                    {copiedCmd ? (
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Tab Controls */}
                <div className="flex items-center border-b border-[#232B3D] bg-[#101522] px-2 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab("jenkins")}
                    className={`px-3 py-2 text-xs border-b-2 transition-colors ${
                      activeTab === "jenkins"
                        ? "border-[#0B9FA5] text-[#38BDF8] font-semibold"
                        : "border-transparent text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    CI/CD Pipeline
                  </button>
                  <button
                    onClick={() => setActiveTab("terraform")}
                    className={`px-3 py-2 text-xs border-b-2 transition-colors ${
                      activeTab === "terraform"
                        ? "border-[#0B9FA5] text-[#38BDF8] font-semibold"
                        : "border-transparent text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    Terraform IaC
                  </button>
                  <button
                    onClick={() => setActiveTab("docker")}
                    className={`px-3 py-2 text-xs border-b-2 transition-colors ${
                      activeTab === "docker"
                        ? "border-[#0B9FA5] text-[#38BDF8] font-semibold"
                        : "border-transparent text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    Docker Compose
                  </button>
                </div>

                {/* Tab Content Panes */}
                <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed space-y-3.5 min-h-[220px]">
                  {activeTab === "jenkins" && (
                    <div className="space-y-2.5">
                      <div className="text-[#94A3B8]">
                        <span className="text-[#38BDF8]">$</span> jenkins-pipeline --run --all-stages
                      </div>
                      <div className="pl-3 border-l-2 border-[#232B3D] space-y-1.5 text-[11px] sm:text-xs">
                        <div className="flex items-center gap-2 text-[#10B981]">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>1. Git Checkout & Webhook Trigger [OK]</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#10B981]">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>2. Automated Unit Tests & Linting [PASSED]</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#10B981]">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>3. Multi-Stage Docker Container Build [OK]</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#38BDF8]">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#10B981]" />
                          <span>4. Zero-Downtime Deploy on AWS EC2 [ACTIVE]</span>
                        </div>
                      </div>
                      <div className="pt-2 text-[11px] text-[#94A3B8]">
                        Result: <span className="text-[#10B981] font-semibold">~60% deployment effort saved</span>
                      </div>
                    </div>
                  )}

                  {activeTab === "terraform" && (
                    <div className="space-y-2.5">
                      <div className="text-[#94A3B8]">
                        <span className="text-[#38BDF8]">$</span> terraform apply -auto-approve
                      </div>
                      <div className="pl-3 border-l-2 border-[#232B3D] space-y-1 text-[11px] sm:text-xs text-[#E2E8F0]">
                        <p className="text-[#38BDF8]">aws_vpc.production: Creating... [CIDR: 10.0.0.0/16]</p>
                        <p className="text-[#38BDF8]">aws_subnet.public: Creation complete [id: subnet-0e12]</p>
                        <p className="text-[#38BDF8]">aws_instance.ec2: Provisioning [Ubuntu 24.04 LTS]</p>
                        <p className="text-[#38BDF8]">aws_security_group.web: Rules configured [Port: 80, 443]</p>
                        <p className="text-[#10B981] pt-1">Apply complete! Resources: 4 added, 0 destroyed.</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "docker" && (
                    <div className="space-y-2.5">
                      <div className="text-[#94A3B8]">
                        <span className="text-[#38BDF8]">$</span> docker compose up -d --build
                      </div>
                      <div className="pl-3 border-l-2 border-[#232B3D] space-y-1 text-[11px] sm:text-xs text-[#E2E8F0]">
                        <p>[+] Building 3/3 services</p>
                        <p className="text-[#10B981]">✔ Container frontend-ui Started [React / Nginx]</p>
                        <p className="text-[#10B981]">✔ Container backend-api Started [Node.js / Express]</p>
                        <p className="text-[#10B981]">✔ Container db-cluster Started [MySQL 8.0]</p>
                        <p className="text-[#38BDF8] pt-1">Network: isolated-bridge (health: healthy)</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Live Node Telemetry Mini-Card */}
                <div className="p-3 bg-[#0D121C] border-t border-[#232B3D] grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="bg-[#141A26] border border-[#232B3D] rounded-lg p-2.5">
                    <span className="text-[#94A3B8] block text-[10px]">MEASURED IMPACT</span>
                    <span className="text-white font-bold block mt-0.5">~60% Reduced</span>
                    <span className="text-[#10B981] text-[10px]">Manual Deploy Effort</span>
                  </div>
                  <div className="bg-[#141A26] border border-[#232B3D] rounded-lg p-2.5">
                    <span className="text-[#94A3B8] block text-[10px]">INFRASTRUCTURE</span>
                    <span className="text-white font-bold block mt-0.5">AWS EC2 + VPC</span>
                    <span className="text-[#38BDF8] text-[10px]">Terraform IaC Managed</span>
                  </div>
                </div>

                {/* Console Footer Status */}
                <div className="px-4 py-2 bg-[#090D14] border-t border-[#232B3D] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                  <span className="flex items-center gap-1.5 text-[#10B981]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    Pipeline Status: Operational
                  </span>
                  <span className="text-[#64748B]">Region: AWS ap-south-1</span>
                </div>

              </div>
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
