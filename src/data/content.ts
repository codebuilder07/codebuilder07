export const profile = {
  name: "Nikhil Santhosh Jacob",
  short: "Nikhil",
  email: "nikhilsanthoshjacob@gmail.com",
  phone: "+91 8086062222",
  linkedin: "https://linkedin.com/in/nikhilsjacob-da",
  linkedinLabel: "linkedin.com/in/nikhilsjacob-da",
  github: "https://github.com/codebuilder07",
  githubLabel: "github.com/codebuilder07",
  credly: "https://credly.com/users/nikhil-santhosh-jacob",
  credlyLabel: "credly.com/users/nikhil-santhosh-jacob",
  location: "India · Open to relocation",
  roles: ["Data Platform Architect", "Cloud FinOps & Optimization", "Corporate AI Strategist"],
};

export const heroStats = [
  { value: "$30K", label: "saved per year for the client", sub: "25% compute cut across 26 regions" },
  { value: "24h → 15m", label: "time-to-insight", sub: "for 50+ business users" },
  { value: "4,100+", label: "people use the AI assistant", sub: "30% workflow efficiency gain" },
  { value: "99.9%", label: "platform uptime", sub: "inherited a failing estate" },
];

export const awards = [
  {
    title: "Innovator of the Month",
    org: "Tech Mahindra",
    date: "Jan 2026",
    detail: "For business impact and leadership in data platform modernization.",
  },
  {
    title: "Microsoft Hackathon · Top 10 Finalist",
    org: "Microsoft",
    date: "Jan 2026",
    detail: "Built autonomous agent-to-agent (A2A) orchestration with conversational AI frameworks.",
  },
  {
    title: "3rd Place · Agentic AI Track",
    org: "Tech Mahindra Hackathon",
    date: "Nov 2025",
    detail: "Scalable, tool-connected multi-agent automation systems.",
  },
  {
    title: "Google Cloud Associate Cloud Engineer",
    org: "Google Cloud",
    date: "Certified",
    detail: "Hands-on multi-cloud delivery across GCP, Azure and AWS.",
  },
  {
    title: "Azure AI Apps & Agents Developer Associate (AI-103)",
    org: "Microsoft",
    date: "Certified",
    detail: "Production-ready agentic apps on Azure AI Foundry.",
  },
  {
    title: "2nd Place · VIT Hackathon",
    org: "Vellore Institute of Technology",
    date: "2018",
    detail: "An early signal of building under pressure.",
  },
];

export type Achievement = {
  metric: string;
  title: string;
  story: string;
  who: string;
  tag: "Cost" | "Speed" | "Reliability" | "AI" | "Scale";
};

export const achievements: Achievement[] = [
  {
    metric: "25%",
    title: "Cut cloud compute spend and returned ~$30K a year to the client",
    story:
      "Started the cost-optimization work myself, with nobody asking for it. I redesigned how the Gold-layer data was aggregated across 26 operating regions. The same reports now cost a quarter less to produce.",
    who: "Transocean",
    tag: "Cost",
  },
  {
    metric: "24h → 15m",
    title: "Turned next-day reporting into near-real-time visibility",
    story:
      "Led 15+ production pipelines on 100 GB+ of data a day. 50+ business stakeholders now answer their own questions without waiting on an engineer.",
    who: "Transocean",
    tag: "Speed",
  },
  {
    metric: "4,100+",
    title: "Shipped an AI assistant that rig and onshore teams use every day",
    story:
      "Staff complete complex tasks by chatting, speaking or sending a photo. About 1,600 users are on mobile and 2,500 on web. Workflow efficiency is up 30% and critical incident reports are down 10%.",
    who: "Enterprise Agentic Task Assistant",
    tag: "AI",
  },
  {
    metric: "99.9%",
    title: "Stabilised a multi-year failure pattern on 24 offshore servers",
    story:
      "Inherited a fragile environment that had been failing for years. I found the real root cause, fixed it, and cut errors by about 80%. Uptime now holds at a 99.9% SLA.",
    who: "Transocean",
    tag: "Reliability",
  },
  {
    metric: "1M+",
    title: "Modernised a financial event platform at JP Morgan Chase",
    story:
      "Co-designed a real-time platform handling over a million financial events a day. Downstream latency dropped 60%. When a live schema change caused a spike, I fixed it with zero data loss.",
    who: "JP Morgan Chase",
    tag: "Scale",
  },
  {
    metric: "40%",
    title: "Made releases faster and failure recovery predictable",
    story:
      "Auto-scaling infrastructure and a cleaner release process cut deployment time by 40%. The runbooks I wrote became the training material for the global operations group.",
    who: "JP Morgan Chase",
    tag: "Speed",
  },
  {
    metric: "10+",
    title: "Built a startup's data foundation from nothing",
    story:
      "As the only data architect at an MIT startup, I turned FinCEN and AML regulatory requirements into the data platform behind 10+ fraud-detection models. Scoring kept running through upstream data gaps.",
    who: "Crypto Clear Inc.",
    tag: "AI",
  },
  {
    metric: "Gold Std",
    title: "My walkthroughs became the client's reference architecture",
    story:
      "Presented roadmaps, PII compliance designs and governance policies directly to client leads. The technical walkthroughs were adopted internally as the standard to follow.",
    who: "Transocean",
    tag: "Reliability",
  },
];

export type Role = {
  role: string;
  org: string;
  client?: string;
  period: string;
  place: string;
  mission: string;
  wins: string[];
};

export const roles: Role[] = [
  {
    role: "Data Platform Architect / Lead Consultant",
    org: "Tech Mahindra",
    client: "Transocean",
    period: "Mar 2025 – Present",
    place: "India",
    mission:
      "Owned a legacy offshore network and a new cloud platform at the same time, under strict client SLAs. Now the single point of ownership across every environment.",
    wins: [
      "Saved the client ~$30K a year by cutting compute cost 25% across 26 regions, on my own initiative.",
      "Brought reporting from 24 hours down to under 15 minutes for 50+ business users.",
      "Raised uptime to 99.9% and cut replication errors by ~80% on 24 offshore servers.",
      "Made queries about 40% faster across 10+ high-traffic operations reports, reviewed with the client's DBA.",
      "Launched an AI assistant now used by 4,100+ people, adding 30% workflow efficiency and cutting incidents 10%.",
      "Presented architecture and compliance roadmaps to client leads, who adopted them as their reference standard.",
    ],
  },
  {
    role: "Data Infrastructure Partner (Executive Consultant)",
    org: "Crypto Clear Inc. · MIT Startup",
    period: "Sep 2024 – Dec 2024",
    place: "Cambridge, MA · Remote",
    mission: "Sole data technology architect working directly with the founders of a pre-Series A company.",
    wins: [
      "Turned FinCEN and AML mandates into a data foundation the company still builds on.",
      "Delivered the infrastructure behind 10+ fraud-detection models, which kept scoring during partner data outages.",
      "Made every architecture decision end to end, from plan to launch.",
    ],
  },
  {
    role: "Data Analytics Partner (Externship)",
    org: "Beats by Dre",
    period: "Jun 2024 – Aug 2024",
    place: "USA · Remote",
    mission: "A focused three-month sprint for the Data Science team, alongside full-time MS studies.",
    wins: [
      "Delivered an automated product-data pipeline with tracking and alerting inside a rapid 3-month sprint.",
      "Kept the code easy for the team to maintain and trust.",
    ],
  },
  {
    role: "Data Platform Engineer",
    org: "WET Technologies",
    client: "JP Morgan Chase",
    period: "Jan 2021 – Feb 2022",
    place: "Sharjah, UAE",
    mission: "Part of the team modernising a mission-critical financial event platform.",
    wins: [
      "Handled 1M+ daily financial events and cut downstream latency by 60%.",
      "Resolved a live-migration crisis with a precise hot-fix and zero data loss.",
      "Cut team deployment time by 40% and wrote the runbooks the operations team trained on.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  outcome: string;
  highlights: string[];
  stack: string[];
  emoji: string;
};

export const projects: Project[] = [
  {
    name: "Enterprise Agentic Task Assistant",
    tagline: "Multi-agent platform that turns chat, voice and images into finished work.",
    outcome: "4,100+ users · +30% efficiency · −10% incidents",
    highlights: [
      "Owned the product from concept to launch.",
      "Aligned DevOps, Security and Database teams so secure code, automated backups and smooth deployment landed on deadline.",
      "Connected agents to company tools and data through the Model Context Protocol (MCP).",
    ],
    stack: ["Azure AI Foundry", "MCP", "Azure AI Speech", "Multimodal AI"],
    emoji: "🤖",
  },
  {
    name: "Ocean Analytics: Real-Time Lakehouse",
    tagline: "Self-serve analytics for a global offshore operation.",
    outcome: "24h → 15 min · 100 GB+/day · 50+ users",
    highlights: [
      "15+ production pipelines with built-in data-quality checks.",
      "A reusable ingestion pattern the team now uses as a template.",
      "A cost redesign that saves ~$30K a year.",
    ],
    stack: ["Databricks", "Delta Live Tables", "PySpark", "Kinesis"],
    emoji: "🌊",
  },
  {
    name: "Fraud-Detection Data Foundation",
    tagline: "The data and feature infrastructure for a startup's fraud models.",
    outcome: "10+ models · FinCEN / AML aligned",
    highlights: [
      "Five batch and streaming workflows for compliance reporting.",
      "Failover alerting so models never stop scoring.",
      "Governance standards written with the founding team.",
    ],
    stack: ["AWS", "XGBoost", "Isolation Forest", "Lambda Architecture"],
    emoji: "🛡️",
  },
  {
    name: "Real-Time Financial Event Platform",
    tagline: "Streaming change-data platform for a global bank.",
    outcome: "1M+ events/day · −60% latency · −40% deploy time",
    highlights: [
      "Bridged on-prem and Google Cloud for real-time analytics.",
      "Caught and fixed a live schema-migration issue with zero data loss.",
      "Authored the runbook the ops team used for every later release.",
    ],
    stack: ["Kafka", "Debezium", "GKE", "BigQuery"],
    emoji: "⚡",
  },
  {
    name: "Offshore Reliability Programme",
    tagline: "Stabilising 24 rig-connected servers for 24/7 operations.",
    outcome: "99.9% SLA · ~80% fewer errors",
    highlights: [
      "Found the root cause of a years-old conflict problem and fixed it permanently.",
      "Automated failure recovery and alerting around the clock.",
      "Enforced PII access control and lineage across every environment.",
    ],
    stack: ["SQL Server", "SRE", "Automation", "Governance"],
    emoji: "🛰️",
  },
  {
    name: "Capstone: Resource-Allocation Intelligence",
    tagline: "Predictive pipeline and executive dashboards for 400+ classes.",
    outcome: "Decisions backed by data at university scale",
    highlights: [
      "A churn prediction pipeline to guide where resources go.",
      "Executive Power BI dashboards that non-technical leaders could read.",
      "Presented as part of an M.S. in Data Analytics at Clark University.",
    ],
    stack: ["Scikit-learn", "Power BI", "Python"],
    emoji: "🎓",
  },
];

export const aiExperience = [
  {
    title: "Multi-agent systems",
    text: "Agents that plan, call tools and hand work to each other. Finalist at the Microsoft Hackathon, and 3rd place at the Tech Mahindra Agentic AI track.",
  },
  {
    title: "Model Context Protocol (MCP)",
    text: "Connecting AI agents safely to real company systems, so answers come from live data instead of guesses.",
  },
  {
    title: "Voice and vision interfaces",
    text: "People on a rig can speak or send a photo instead of filling in forms. This lowers friction for the people who need the tool most.",
  },
  {
    title: "ML pipelines and MLOps",
    text: "Feature pipelines behind 10+ fraud models, with alerting so scoring continues when upstream data breaks.",
  },
  {
    title: "Conversational BI",
    text: "Letting non-technical teams ask questions of their data in plain language.",
  },
  {
    title: "Applied research",
    text: "Deep-learning outbreak detection from social media, presented at a Clark University graduate conference (Mar 2024).",
  },
];

export const aiEfficiency = [
  { value: 30, suffix: "%", label: "Gain in operational workflow efficiency", note: "People finish multi-step tasks by chatting with an agent." },
  { value: 10, suffix: "%", label: "Fewer critical incident reports", note: "Guided workflows catch errors before they become incidents." },
  { value: 4100, suffix: "+", label: "Active users across web and mobile", note: "Adoption is the real proof. 1,600+ on mobile, 2,500+ on web." },
  { value: 99, suffix: "%", label: "Of 24h delay removed from reporting", note: "From a day to under 15 minutes, so decisions happen while they still matter." },
];

export const valueToTeam = [
  {
    title: "I find the problem behind the problem",
    text: "A years-old replication failure and a live-migration spike were each solved by tracing back to the real cause, not patching the symptom.",
  },
  {
    title: "I save money without being asked",
    text: "The 25% compute reduction was a self-started initiative. I think about cost the way an owner would.",
  },
  {
    title: "I make complexity understandable",
    text: "My walkthroughs became a client's reference standard and my runbooks became training material. People can follow what I build.",
  },
  {
    title: "I deliver in parallel, under pressure",
    text: "Legacy operations and a greenfield build ran side by side under strict SLAs, and both shipped.",
  },
  {
    title: "I bring AI that people really use",
    text: "4,100+ active users. I focus on adoption and business outcomes, not demos.",
  },
  {
    title: "I work well across teams",
    text: "Engineering, security, database, vendor and client leaders all get aligned before deadlines, not after.",
  },
];

export const nicheSkills = [
  { title: "FinOps + data architecture together", text: "Few people can redesign a data model and the cloud bill with the same change." },
  { title: "Hybrid estates, old and new", text: "Comfortable running legacy on-prem systems and modern cloud platforms side by side." },
  { title: "Agentic AI in production", text: "Multi-agent, MCP-connected, voice and image enabled, and at global scale." },
  { title: "Regulation into architecture", text: "Translating FinCEN, AML and PII rules into practical data models and governance." },
  { title: "Reliability under real conditions", text: "Offshore rigs, patchy connectivity and 24/7 uptime expectations." },
  { title: "Multi-cloud fluency", text: "Hands-on delivery across Azure, GCP and AWS, with certifications on two of them." },
];

export const communication = [
  {
    title: "Client and senior stakeholders",
    text: "Presented architecture roadmaps, compliance designs and governance policy directly to corporate client leads.",
  },
  {
    title: "Founders and executives",
    text: "Worked side by side with an MIT startup's founding team, turning vague regulation into clear decisions.",
  },
  {
    title: "Teaching and mentoring",
    text: "Teaching Assistant for graduate Applied Machine Learning and Python Programming at Clark University.",
  },
  {
    title: "Documentation that gets used",
    text: "Runbooks adopted as global ops training. Reference walkthroughs adopted as a client standard.",
  },
  {
    title: "Research presentation",
    text: "Presented original deep-learning research at the Clark University Graduate Student Council Multidisciplinary Conference.",
  },
];

export const collaboration = [
  { team: "DevOps", what: "Smooth, automated deployment with zero friction on launch day." },
  { team: "Security", what: "Secure coding practices, PII access control and compliance reviews." },
  { team: "Database / DBA", what: "Performance changes reviewed with the client DBA before every deployment." },
  { team: "SRE", what: "Alerting, failure recovery and the 99.9% SLA commitment." },
  { team: "Data Science", what: "Feature pipelines and ingestion built to the Data Science team's needs." },
  { team: "Vendors & Clients", what: "Alignment cycles with independent teams, ahead of tight deadlines." },
];

export const languages = {
  programming: [
    { name: "Python", detail: "PySpark · Polars · Pandas · Scikit-learn", level: 95 },
    { name: "SQL", detail: "Advanced · performance tuning", level: 95 },
    { name: "Scala", detail: "Spark workloads", level: 70 },
    { name: "Bash", detail: "Automation", level: 80 },
    { name: "PowerShell", detail: "Windows & SQL Server operations", level: 75 },
  ],
  // Edit these to match your own spoken languages.
  spoken: [
    { name: "English", level: "Professional working proficiency" },
    { name: "Malayalam", level: "Native" },
    { name: "Hindi", level: "Conversational" },
  ],
};

export const otherExperience = [
  {
    title: "Research & Teaching Assistant",
    where: "Clark University, MA, USA",
    text: "Supported graduate courses in Applied Machine Learning and Python Programming while completing the M.S. (2022 – 2024).",
  },
  {
    title: "M.S. in Data Analytics",
    where: "Clark University · May 2024",
    text: "Capstone: a churn prediction pipeline and executive Power BI dashboards for resource allocation across 400+ classes.",
  },
  {
    title: "Conference Presenter",
    where: "Graduate Student Council Conference · Mar 2024",
    text: "Real-time outbreak detection from social media using deep learning.",
  },
  {
    title: "B.Tech in Computer Science",
    where: "VIT, India · May 2021",
    text: "VIT Hackathon 2nd place (2018), IEEE Inaugural Chapter and the Data Science Association.",
  },
];

// Recognition drawn from documented outcomes. Replace or add real LinkedIn
// recommendations in `quotes` when you have them.
export const recognition = [
  { from: "Transocean (client leads)", text: "Technical walkthroughs officially adopted as the client's internal gold-standard reference architecture." },
  { from: "JP Morgan Chase (ops group)", text: "Runbooks authored during the engagement became the primary training material for the global operations group." },
  { from: "Tech Mahindra", text: "Named Innovator of the Month, January 2026, for business impact and leadership." },
  { from: "Transocean (data team)", text: "The ingestion pattern I designed is now reused as the team template for every new pipeline." },
];

export const quotes: { name: string; role: string; text: string }[] = [];

export const executive = {
  intro:
    "The strongest work I have done started with an idea or a business problem, not a tool. I want to spend more of my time on that part: shaping strategy, helping startups decide what to build, and sitting at the table where those decisions are made.",
  offers: [
    {
      title: "Fractional data & AI advisor",
      text: "Help early-stage teams decide what to build, what to buy and what to skip. This comes from building a startup's whole data foundation as its only architect.",
    },
    {
      title: "AI strategy for operations",
      text: "Find the workflows where agents actually save time, then design and ship them with the right guardrails.",
    },
    {
      title: "FinOps for data platforms",
      text: "Review cloud and data spend, find the waste and fix it at the design level.",
    },
    {
      title: "Compliance-ready architecture",
      text: "Turn regulation such as FinCEN, AML and PII requirements into plain-language data policies and the systems that follow them.",
    },
  ],
  shift: [
    { from: "Building pipelines", to: "Choosing which problems are worth solving" },
    { from: "Explaining architecture", to: "Telling the story of business impact" },
    { from: "Delivering to a brief", to: "Co-shaping the brief with leaders" },
    { from: "Technical depth alone", to: "Depth plus ideas, writing and relationships" },
  ],
};

export const writing = [
  { title: "How I cut a data platform's compute bill by 25% without cutting a feature", kind: "Case study", topic: "FinOps" },
  { title: "Before you build an AI agent: five questions executives should ask", kind: "Essay", topic: "AI strategy" },
  { title: "Debugging a years-old failure: a story about root causes", kind: "Story", topic: "Reliability" },
  { title: "Turning regulation into architecture: lessons from a startup", kind: "Essay", topic: "Compliance" },
  { title: "Why 4,100 people used our AI assistant", kind: "Case study", topic: "Adoption" },
  { title: "Writing runbooks people actually follow", kind: "Guide", topic: "Operations" },
];

export const impactTimeline = [
  { year: "2021", text: "JP Morgan Chase: real-time financial platform, 1M+ events/day" },
  { year: "2022–24", text: "M.S. Data Analytics, Research & Teaching Assistant" },
  { year: "2024", text: "MIT startup data foundation and Beats by Dre pipeline" },
  { year: "2025", text: "Transocean: lakehouse, FinOps, stabilisation, AI assistant" },
  { year: "2026", text: "Innovator of the Month · Microsoft Hackathon Top 10" },
];
