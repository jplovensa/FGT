export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  href: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  titleLines: string[]
  subtitle: string
}

export interface ManifestoConfig {
  headingText: string
  bodyText: string
  videoPath: string
}

export interface ExhibitionArticleSection {
  heading: string
  body: string
}

export interface ExhibitionItem {
  slug: string
  title: string
  image: string
  year: string
  eyebrow: string
  intro: string
  sections: ExhibitionArticleSection[]
}

export interface ExhibitionsConfig {
  sectionLabel: string
  countLabel: string
  detailBackText: string
  items: ExhibitionItem[]
}

export interface PavilionVideoItem {
  src: string
  caption: string
}

export interface PavilionsConfig {
  sectionLabel: string
  videos: PavilionVideoItem[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterConfig {
  visitLabel: string
  visitLines: string[]
  connectLabel: string
  connectLinks: FooterLink[]
  brandName: string
  rightsText: string
  coordinatesText: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Kimi Agent — Autonomous Multimodal AI Workspace",
  siteDescription: "Kimi Agent is an always-on, multimodal autonomous workspace assistant powered by Kimi K2.6. Spawn 300 sub-agents, execute 4,000 tool calls, and run 24/7 background tasks.",
}

export const navigationConfig: NavigationConfig = {
  brandName: "Kimi",
  links: [
    { label: "Capabilities", href: "#exhibitions" },
    { label: "Manifesto", href: "#manifesto" },
    { label: "Demos", href: "#pavilions" },
  ],
}

export const heroConfig: HeroConfig = {
  titleLines: ["Kimi", "Agent"],
  subtitle: "Autonomous. Multimodal. Always On.",
}

export const manifestoConfig: ManifestoConfig = {
  headingText: "Think. Delegate.",
  bodyText: "Kimi Agent doesn't just answer questions. It runs for hours, calls thousands of tools, and delivers finished work. Spawn 300 sub-agents. Maintain 24/7 cloud persistence. Transform sketches into production code. This is not a chatbot. This is a workforce.",
  videoPath: "/videos/manifesto.mp4",
}

export const exhibitionsConfig: ExhibitionsConfig = {
  sectionLabel: "Core Capabilities",
  countLabel: "4 Systems",
  detailBackText: "Back to Index",
  items: [
    {
      slug: "agent-swarm",
      title: "Agent Swarm",
      image: "/images/swarm.jpg",
      year: "2026",
      eyebrow: "Parallel Execution System",
      intro: "The Agent Swarm is Kimi K2.6's parallel execution architecture. It decomposes complex prompts into independent subtasks, each handled by a domain-specialized sub-agent. Results are synthesized into finished deliverables — documents, websites, spreadsheets — in a single autonomous run.",
      sections: [
        {
          heading: "300 Sub-Agents",
          body: "Up to 300 domain-specialized sub-agents spawn simultaneously, each with its own tool access and reasoning chain. The orchestration layer manages dependencies, resolves conflicts, and merges outputs into a coherent final result. No single agent bottleneck — work scales horizontally.",
        },
        {
          heading: "4,000 Coordinated Steps",
          body: "A single swarm execution can invoke up to 4,000 tool calls across web search, code execution, browser automation, and API requests. Steps are logged and recoverable, enabling inspection and replay of any agent's reasoning path.",
        },
        {
          heading: "12-Hour Autonomous Runs",
          body: "The swarm operates continuously for 12+ hours without human intervention. Schedule overnight research, batch processing, or long-running data pipelines. Kimi Claw persists state across sessions, so work resumes exactly where it left off.",
        },
      ],
    },
    {
      slug: "vibe-coding",
      title: "Vibe Coding",
      image: "/images/vibe-coding.jpg",
      year: "2026",
      eyebrow: "Visual-to-Code Pipeline",
      intro: "Vibe Coding transforms visual inputs — UI mockups, hand sketches, screen recordings — into production-ready, full-stack applications. The system generates structured layouts, interactive elements, rich animations, and complete backend integration.",
      sections: [
        {
          heading: "Mockup to Interface",
          body: "Upload a screenshot or wireframe. Kimi Agent analyzes the visual structure, extracts design tokens — colors, typography, spacing — and generates matching HTML, CSS, or React code with pixel-level fidelity. What you sketch is what you ship.",
        },
        {
          heading: "Full-Stack Generation",
          body: "Beyond frontend, Vibe Coding scaffolds databases, authentication, API routes, and deployment configuration. A single sketch becomes a deployed application with built-in auth and data persistence. From napkin to production in one prompt.",
        },
        {
          heading: "Animation & Motion",
          body: "The pipeline generates GSAP-based animations, WebGL shaders, and CSS transitions that match the visual energy of the source material. From subtle micro-interactions to full cinematic hero sections — every motion is deliberate.",
        },
      ],
    },
    {
      slug: "deep-research",
      title: "Deep Research",
      image: "/images/deep-research.jpg",
      year: "2026",
      eyebrow: "Autonomous Intelligence Engine",
      intro: "Deep Research executes complex, multi-source investigations with cross-verification and citation. It autonomously refines search queries, evaluates source credibility, and synthesizes findings into structured reports with verifiable sources.",
      sections: [
        {
          heading: "300-Step Reasoning Chains",
          body: "Each research task can execute up to 300 sequential tool calls — web searches, document retrieval, data extraction, and analysis — without losing context or coherence. The thinking model interleaves reasoning with tool use for maximum accuracy.",
        },
        {
          heading: "Multi-Source Verification",
          body: "Claims are cross-referenced across multiple sources before inclusion in the final report. The system flags uncertain findings and provides confidence scores for each conclusion. No hallucinations — only verified intelligence.",
        },
        {
          heading: "Structured Output",
          body: "Research converts automatically into formatted documents — PDF reports, PowerPoint presentations, Excel spreadsheets — with proper citations, charts, and executive summaries. Deliver publication-ready research without manual formatting.",
        },
      ],
    },
    {
      slug: "kimi-claw",
      title: "Kimi Claw",
      image: "/images/kimi-claw.jpg",
      year: "2026",
      eyebrow: "24/7 Cloud Persistence Layer",
      intro: "Kimi Claw is the always-on execution environment. It maintains persistent memory, schedules background tasks, and converts successful workflows into reusable Skills for one-click deployment. Your agent never sleeps.",
      sections: [
        {
          heading: "Persistent Memory",
          body: "User preferences, project context, and conversation history persist across sessions. Kimi Agent remembers your coding style, research interests, and workflow patterns — improving with every interaction. Context that compounds.",
        },
        {
          heading: "Scheduled Automation",
          body: "Set recurring tasks — daily news summaries, weekly report generation, continuous monitoring — and Kimi Claw executes them on schedule without requiring an active browser tab or local compute. True set-and-forget intelligence.",
        },
        {
          heading: "Skill Creation",
          body: "Any successful multi-step workflow can be saved as a reusable Skill. Define inputs, configure parameters, and deploy with one click. Skills are shareable and composable — build complex automations from simple building blocks.",
        },
      ],
    },
  ],
}

export const pavilionsConfig: PavilionsConfig = {
  sectionLabel: "Live Demos",
  videos: [
    {
      src: "/videos/demo-swarm.mp4",
      caption: "Agent Swarm — 300 sub-agents executing in parallel",
    },
    {
      src: "/videos/demo-vibe.mp4",
      caption: "Vibe Coding — From sketch to production interface",
    },
  ],
}

export const footerConfig: FooterConfig = {
  visitLabel: "Protocol",
  visitLines: [
    "1 Trillion Parameters",
    "256K Token Context",
    "300 Parallel Agents",
  ],
  connectLabel: "Connect",
  connectLinks: [
    { label: "API Platform", href: "https://platform.moonshot.ai/" },
    { label: "GitHub", href: "https://github.com/moonshotai" },
    { label: "Hugging Face", href: "https://huggingface.co/moonshotai" },
    { label: "Discord", href: "#" },
  ],
  brandName: "Kimi",
  rightsText: "Moonshot AI",
  coordinatesText: "39.9042 N, 116.4074 E",
}
