import { Cpu, Server, GitMerge, ShieldCheck, CheckCircle2 } from "lucide-react";
import { MotionReveal } from "./motion-wrapper";

export function About() {
  const pillars = [
    {
      icon: GitMerge,
      title: "Automated CI/CD Delivery",
      description:
        "Building automated deployment pipelines with Jenkins and GitHub Actions, cutting manual deployment effort by 60% and ensuring reproducible builds.",
      color: "text-emerald-400",
      border: "hover:border-emerald-500/30",
    },
    {
      icon: Server,
      title: "Containerization & Orchestration",
      description:
        "Packaging microservices and multi-tier architectures with Docker and Docker Compose for consistent environment parity between local and production.",
      color: "text-cyan-400",
      border: "hover:border-cyan-500/30",
    },
    {
      icon: ShieldCheck,
      title: "Cloud Infrastructure as Code",
      description:
        "Provisioning AWS resources (EC2, VPC, IAM, S3) with Terraform, enforcing security policies, isolation, and repeatable declarative configurations.",
      color: "text-purple-400",
      border: "hover:border-purple-500/30",
    },
    {
      icon: Cpu,
      title: "Linux & Systems Administration",
      description:
        "Managing Ubuntu/Linux server environments, crafting robust Bash automation scripts, and troubleshooting networking and reverse proxies with Nginx.",
      color: "text-amber-400",
      border: "hover:border-amber-500/30",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col items-start mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-emerald-400 mb-3">
              <span>// 01. ABOUT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering reliable systems from code to cloud
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              I specialize in bridging software development and production infrastructure through automation, containerization, and clean architectural practices.
            </p>
          </div>
        </MotionReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-5">
            <MotionReveal delay={0.1}>
              <div className="space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <div className="p-6 rounded-2xl bg-[#0b101b] border border-white/[0.08] relative">
                  <p className="text-zinc-300">
                    As a <strong className="text-white font-semibold">DevOps Engineer</strong>, I believe software is only as good as the system that delivers and runs it. My work focuses on removing friction between development teams and production environments.
                  </p>
                  <p className="mt-4 text-zinc-300">
                    During my hands-on experience at CS Soft Solutions, I engineered automated CI/CD pipelines with Jenkins and GitHub Actions, containerized full-stack services using Docker, and configured secure AWS cloud environments with EC2, IAM, S3, and custom VPC networking.
                  </p>
                  <p className="mt-4 text-zinc-400 text-xs sm:text-sm font-mono border-t border-white/[0.08] pt-4">
                    Core Focus: Infrastructure as Code (Terraform) • Containerization (Docker) • CI/CD Automation (Jenkins) • Cloud (AWS) • Linux Administration
                  </p>
                </div>

                {/* Quick Stats or Highlights */}
                <div className="grid grid-cols-2 gap-3 font-mono">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-2xl font-bold text-emerald-400">~60%</div>
                    <div className="text-xs text-zinc-400 mt-1">Manual Deployment Effort Reduced</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-2xl font-bold text-cyan-400">6 Mo</div>
                    <div className="text-xs text-zinc-400 mt-1">Production Hands-on Experience</div>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Pillars Cards Column */}
          <div className="lg:col-span-7">
            <MotionReveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className={`p-5 rounded-2xl bg-[#0b101b] border border-white/[0.08] ${pillar.border} transition-all duration-300 flex flex-col justify-between group`}
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                          <Icon className={`w-5 h-5 ${pillar.color}`} />
                        </div>
                        <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/70" />
                        <span>Production Verified</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
