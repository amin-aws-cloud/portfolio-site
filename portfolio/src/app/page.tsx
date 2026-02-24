import Image from "next/image";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  BookOpen,
  Shield,
  Code2,
  Zap,
  Globe,
  Terminal,
  Award,
  Cloud,
} from "lucide-react";

/* ════════════════════════ DATA ════════════════════════ */

const projects = [
  {
    title: "IAM Security Implementation",
    description:
      "Comprehensive IAM strategy for a multi-account AWS org. Enforced least-privilege access, MFA policies, and role-based controls across 15+ accounts.",
    tags: ["IAM", "Organizations", "SSO", "CloudTrail"],
    icon: Shield,
    metric: "15+ accounts secured",
    featured: true,
  },
  {
    title: "Infrastructure as Code Migration",
    description:
      "Migrated legacy healthcare infrastructure to AWS CDK with TypeScript. Automated VPCs, ECS clusters, and RDS instances while ensuring HIPAA compliance.",
    tags: ["CDK", "TypeScript", "ECS", "RDS"],
    icon: Code2,
    metric: "70% faster deploys",
    featured: true,
  },
  {
    title: "Serverless Data Pipeline",
    description:
      "Real-time ingestion pipeline using Lambda, Kinesis, and DynamoDB. Processes 2M+ events/day with auto-scaling and dead-letter queue error handling.",
    tags: ["Lambda", "Kinesis", "DynamoDB", "EventBridge"],
    icon: Zap,
    metric: "2M+ events/day",
    featured: false,
  },
  {
    title: "Multi-Region Disaster Recovery",
    description:
      "Active-passive DR solution with Route 53 failover, cross-region S3 replication, and Aurora Global Database. Sub-minute RPO, under 5-minute RTO.",
    tags: ["Route 53", "Aurora", "S3", "CloudFormation"],
    icon: Globe,
    metric: "<1 min RPO",
    featured: false,
  },
];

const credentials = [
  "AWS Solutions Architect",
  "AWS Cloud Practitioner",
  "Terraform Associate",
  "Kubernetes (CKA)",
  "AWS Security Specialty",
  "AWS DevOps Engineer",
];

const socialLinks = [
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "Medium", href: "https://medium.com", icon: BookOpen },
];

/* ════════════════════════ PAGE ════════════════════════ */

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* ── Deep gradient background ── */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden="true"
      >
        {/* Core gradient: deep navy to dark with blue-purple undertone */}
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#06080d_0%,#0a0e1a_25%,#0d1020_50%,#0f0a18_75%,#0a080f_100%)]" />

        {/* Top-left warm accent glow */}
        <div className="animate-orb-1 absolute -top-40 -left-20 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(232,168,73,0.07)_0%,transparent_60%)]" />

        {/* Center-right blue counter glow for depth */}
        <div className="animate-orb-2 absolute top-1/3 -right-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.04)_0%,transparent_60%)]" />

        {/* Bottom warm glow near CTA */}
        <div className="absolute -bottom-20 left-1/3 h-[500px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(232,168,73,0.04)_0%,transparent_55%)]" />

        {/* Fine dot grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── Nav ── */}
      <header className="animate-fade-up delay-0 mx-auto flex max-w-5xl items-center justify-between px-6 pt-8 pb-4 lg:px-0">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Cloud className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">Your Name</span>
        </div>
        <div className="flex items-center gap-1">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
            >
              <link.icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 lg:px-0">
        {/* ══════════════ HERO ══════════════ */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32">
          {/* Profile + Status */}
          <div className="animate-fade-up delay-1 mb-8 flex items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/60 via-primary/20 to-transparent blur-md" />
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-background md:h-20 md:w-20">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="animate-pulse-glow h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-emerald-400">
                  Open to opportunities
                </span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                Cloud Infrastructure & Security
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-2 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-gradient">I build the cloud</span>
            <br />
            <span className="text-gradient">infrastructure that</span>
            <br />
            <span className="text-primary">ships products.</span>
          </h1>

          {/* Sub-copy */}
          <p className="animate-fade-up delay-3 mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {
              "AWS Cloud Engineer specializing in secure, production-grade infrastructure. I architect IAM strategies, automate with IaC, and build pipelines that let engineering teams move fast without breaking things."
            }
          </p>

          {/* CTA row */}
          <div className="animate-fade-up delay-4 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_rgba(232,168,73,0.2)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,168,73,0.3)] hover:brightness-110"
            >
              <Mail className="h-4 w-4" />
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass hover-glow inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-1 px-2 py-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              View projects
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Stat strip */}
          <div className="animate-fade-up delay-5 mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { value: "5+", label: "Years on AWS" },
              { value: "15+", label: "Accounts managed" },
              { value: "99.99%", label: "Uptime SLA met" },
              { value: "70%", label: "Deploy time cut" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass hover-glow rounded-xl px-4 py-4 md:px-5 md:py-5"
              >
                <p className="font-mono text-xl font-bold text-foreground md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ CREDENTIAL STRIP ══════════════ */}
        <div className="animate-fade-up delay-6 relative overflow-hidden rounded-2xl border border-border bg-secondary py-4">
          <div className="flex items-center gap-3 px-5">
            <Award className="h-4 w-4 shrink-0 text-primary" />
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-primary">
              Certifications
            </span>
            <div className="h-4 w-px bg-border" />
          </div>
          <div className="mt-3 overflow-hidden">
            <div className="animate-scroll flex w-max items-center gap-8 px-5">
              {[...credentials, ...credentials].map((cert, i) => (
                <span
                  key={`${cert}-${i}`}
                  className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm text-secondary-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-primary/50" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════ PROJECTS ══════════════ */}
        <section id="projects" className="pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="animate-fade-up delay-7 mb-4 flex items-center gap-3">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Projects
            </span>
          </div>
          <h2 className="animate-fade-up delay-8 mb-12 max-w-lg text-2xl font-bold tracking-tight text-foreground md:mb-16 md:text-3xl">
            {"Production infrastructure I've designed & deployed."}
          </h2>

          {/* Featured projects: large */}
          <div className="mb-4 grid gap-4 md:grid-cols-2 md:gap-5">
            {projects
              .filter((p) => p.featured)
              .map((project) => {
                const Icon = project.icon;
                return (
                  <a
                    key={project.title}
                    href="#"
                    className="animate-fade-up delay-9 group glass-strong hover-glow relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 md:p-8"
                  >
                    <div>
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15 group-hover:shadow-[0_0_16px_rgba(232,168,73,0.12)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
                        {project.title}
                      </h3>
                      <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                    <div>
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 border-t border-border pt-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="font-mono text-xs font-medium text-primary">
                          {project.metric}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
          </div>

          {/* Secondary projects: compact */}
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {projects
              .filter((p) => !p.featured)
              .map((project) => {
                const Icon = project.icon;
                return (
                  <a
                    key={project.title}
                    href="#"
                    className="animate-fade-up delay-10 group glass hover-glow relative flex items-start gap-4 overflow-hidden rounded-2xl p-5 md:p-6"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all duration-300 group-hover:text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                      </div>
                      <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-secondary-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          <span className="font-mono text-[10px] font-medium text-primary">
                            {project.metric}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
          </div>
        </section>

        {/* ══════════════ CTA ══════════════ */}
        <section className="py-24 md:py-32">
          <div className="animate-fade-up delay-11 glass-strong relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-20">
            {/* Inner glow */}
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(232,168,73,0.06),transparent_70%)]"
              aria-hidden="true"
            />

            <p className="relative font-mono text-xs uppercase tracking-widest text-primary">
              {"Let's build something"}
            </p>
            <h2 className="relative mx-auto mt-4 max-w-md text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Looking for a cloud engineer who ships?
            </h2>
            <p className="relative mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
              {
                "I'm open to roles, contract work, and interesting architecture challenges."
              }
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_rgba(232,168,73,0.2)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,168,73,0.3)] hover:brightness-110"
              >
                <Mail className="h-4 w-4" />
                hello@example.com
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass hover-glow inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-0">
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10">
              <Cloud className="h-3 w-3 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground">Your Name</span>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <link.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
          <p className="font-mono text-[11px] text-muted-foreground">
            {"Built with Next.js + Vercel"}
          </p>
        </div>
      </footer>
    </div>
  );
}
