export type ResumeRole = {
  title: string;
  org: string;
  period: string;
  place: string;
  intro?: string;
  bullets: string[];
};

export type Resume = {
  id: string;
  number: number;
  tab: string;
  isNew?: boolean;
  headline: string;
  subtitle: string;
  summary: string;
  achievements: string[];
  skills: { label: string; items: string }[];
  roles: ResumeRole[];
  education: { title: string; where: string; date: string; bullets: string[] }[];
  certs: string[];
};

const education = [
  {
    title: "M.S., Data Analytics",
    where: "Clark University · Worcester, MA, USA",
    date: "Graduated May 2024",
    bullets: [
      "Research & Teaching Assistant for Applied Machine Learning and Python Programming.",
      "Research: real-time outbreak detection using social media analysis (deep learning), presented at the Clark University Graduate Student Council Multidisciplinary Conference, Mar 2024.",
      "Capstone: ML churn prediction pipeline (Decision Tree + Logistic Regression, Scikit-learn) with Power BI dashboards for resource allocation across 400+ classes.",
    ],
  },
  {
    title: "B.Tech, Computer Science",
    where: "Vellore Institute of Technology (VIT) · India",
    date: "Graduated May 2021",
    bullets: ["VIT Hackathon 2nd Place (2018) · IEEE Inaugural Chapter · Data Science Association."],
  },
];

const certs = [
  "Innovator of the Month, Tech Mahindra (Jan 2026)",
  "Microsoft Hackathon, Top 10 Finalist (Jan 2026)",
  "Tech Mahindra Hackathon, 3rd Place, Microsoft Agentic AI Track (Nov 2025)",
  "Google Cloud Associate Cloud Engineer",
  "Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)",
];

export const resumes: Resume[] = [
  /* ───────────────────────────── 1. EXECUTIVE ───────────────────────────── */
  {
    id: "executive",
    number: 1,
    tab: "Executive / Architect",
    headline: "Data Platform Architect",
    subtitle: "Cloud FinOps & Optimization · Corporate AI Strategist",
    summary:
      "Data & AI platform leader with 3+ years running production platforms in enterprise fintech (JP Morgan Chase) and heavy industry (Transocean). I turn business and compliance requirements into reliable, cost-efficient cloud architectures. Tech Mahindra Innovator of the Month (Jan 2026) and multi-time Microsoft Hackathon finalist for production-ready Agentic AI. I work well with senior client stakeholders and engineering squads (DevOps, SRE, DBAs).",
    achievements: [
      "Innovator of the Month, Tech Mahindra (Jan 2026), for impact and leadership in data platform modernization.",
      "Microsoft Hackathon Top 10 Finalist (Jan 2026): autonomous agent-to-agent (A2A) orchestration.",
      "Hackathon 3rd Place, Agentic AI Track, Tech Mahindra (Nov 2025).",
      "Scaled an enterprise AI assistant to 4,100+ users: +30% workflow efficiency, −10% critical incident reports.",
    ],
    skills: [
      { label: "Cloud FinOps & Cost Governance", items: "Infrastructure right-sizing, compute waste reduction, Azure / GCP billing optimization, resource allocation" },
      { label: "Enterprise Data & Platform", items: "Greenfield Medallion Lakehouses, Delta Live Tables, end-to-end production pipelines" },
      { label: "Strategic AI & MLOps", items: "Multi-agent systems, Model Context Protocol (MCP), conversational BI, automated feature pipelines" },
      { label: "Collaboration", items: "C-suite and client stakeholder management, vendor alignment, technical product ownership" },
      { label: "Reliability & Governance", items: "99.9% SLAs, disaster recovery automation, data lineage, PII / regulatory compliance" },
    ],
    roles: [
      {
        title: "Data Platform Architect / Lead Consultant",
        org: "Tech Mahindra → Transocean (Client)",
        period: "Mar 2025 – Present",
        place: "India",
        intro: "Full ownership of legacy on-prem networks and new cloud architecture, running in parallel under strict client SLAs.",
        bullets: [
          "Led an independent cost-optimization initiative across 26 regions. Restructured Gold-layer aggregation to cut compute cost 25%, returning ~$30,000/year to the client.",
          "Co-led 15+ real-time Delta Live Table pipelines on Databricks. Reduced data latency from 24 hours to under 15 minutes, enabling self-serve analytics for 50+ stakeholders.",
          "Presented roadmaps, PII compliance designs and governance policy to client leads. My walkthroughs were adopted as the client's gold-standard reference architecture.",
          "Took over a 24-server offshore database replication environment. Resolved a multi-year conflict issue, cutting errors 80% and holding a 99.9% SLA.",
        ],
      },
      {
        title: "Data Infrastructure Partner (Executive Consultant)",
        org: "Crypto Clear Inc. (MIT Startup)",
        period: "Sep 2024 – Dec 2024",
        place: "Cambridge, MA · Remote",
        bullets: [
          "Sole data technology architect. Worked with the founders to turn FinCEN and AML mandates into data models and governance frameworks.",
          "Delivered the data infrastructure and feature pipelines behind 10+ fraud-detection models, with failover alerting so scoring continued through partner data gaps.",
        ],
      },
      {
        title: "Data Analytics Partner",
        org: "Beats by Dre",
        period: "Jun 2024 – Aug 2024",
        place: "USA · Remote",
        bullets: [
          "Built an event-driven AWS ingestion pipeline for the Data Science team with tracking, lineage and anomaly alerting, delivered in a 3-month sprint.",
        ],
      },
      {
        title: "Data Platform Engineer",
        org: "WET Technologies → JP Morgan Chase (Client)",
        period: "Jan 2021 – Feb 2022",
        place: "Sharjah, UAE",
        bullets: [
          "Co-designed a real-time CDC platform handling 1M+ daily financial events, cutting downstream latency 60%.",
          "Resolved a processing spike during a live schema change with a precision hot-fix and zero data loss.",
          "Built auto-scaling cluster deployments and cut deployment cycle time 40%. My runbooks became the global ops group's primary training material.",
        ],
      },
    ],
    education,
    certs,
  },

  /* ───────────────────────────── 2. DATA / AI ENGINEER ───────────────────────────── */
  {
    id: "data",
    number: 2,
    tab: "Data / AI Engineer",
    headline: "Data Engineer · Agentic AI Engineer",
    subtitle: "Azure · GCP · AWS · SQL DBA",
    summary:
      "Agentic AI and Data Engineer with 3+ years owning production data platforms across offshore energy (Transocean) and fintech (JP Morgan Chase): 100 GB+/day, 1M+ daily events, $30K compute savings, 99.9% SLA. At Transocean I inherited a fragile SQL Server replication estate across 24 subscriber servers and stabilised it while building a greenfield Medallion Lakehouse on Databricks, both in production at once. Hands-on with AWS, GCP, Azure, Spark, Airflow 3.0, Kafka, CDC, Delta Live Tables and Debezium.",
    achievements: [
      "Innovator of the Month, Tech Mahindra (Jan 2026).",
      "Microsoft Hackathon Top 10 Finalist (Jan 2026).",
      "Tech Mahindra Hackathon 3rd Place, Agentic AI Track (Nov 2025).",
      "100 GB+/day pipelines, 1M+ daily events, $30K compute savings, 99.9% SLA.",
    ],
    skills: [
      { label: "Languages", items: "Python, SQL, Scala · Bash, PowerShell" },
      { label: "Streaming & CDC", items: "Apache Kafka, Kinesis, GCP Pub/Sub, Delta Live Tables, Debezium, snapshot + incremental CDC" },
      { label: "Batch & Lakehouse", items: "Apache Spark, dbt, Databricks (DLT, Unity Catalog), Medallion Architecture, Delta Lake" },
      { label: "Cloud", items: "AWS (S3, Kinesis, Glue, Redshift, Lambda, SageMaker) · GCP (BigQuery, Dataflow/Beam, Pub/Sub, Composer, Dataproc, GKE, Looker) · Azure (Cosmos DB, Data Factory, AI Foundry, OpenAI SDK)" },
      { label: "Orchestration & DBs", items: "Airflow 3.0, Cloud Composer, SQL Server Agent · SQL Server, PostgreSQL, MongoDB, Neo4j, Redis" },
      { label: "AI & ML", items: "LangChain, Hugging Face, Vertex AI, Google ADK, Azure AI Foundry, MCP, Azure AI Speech, multimodal models" },
      { label: "DevOps & BI", items: "Kubernetes (GKE), Docker, Jenkins, GitHub Actions, Cloud Build · Tableau, Power BI" },
    ],
    roles: [
      {
        title: "Data Engineer",
        org: "Tech Mahindra → Transocean (Client)",
        period: "Mar 2025 – Present",
        place: "India",
        intro: "Joined a two-engineer team running a legacy SQL Server replication estate and a greenfield lakehouse in parallel. Now a one-person team across DEV, QA, UAT, Training, Staging and Production.",
        bullets: [
          "Ocean Analytics: shipped 15+ end-to-end DLT pipelines ingesting 100 GB+/day from SQL Server and Kinesis into a Bronze → Silver → Gold lakehouse. Latency fell from 24 hours to under 15 minutes for 50+ users.",
          "Designed snapshot + incremental CDC for the silver layer with DLT expectations, now reused as the team template.",
          "OPS Onshore & RIG App: built a multi-agent system on Azure AI Foundry, connected to tools via MCP, with voice and image input. Efficiency +30%, incidents −10%, 1,600+ mobile and 2,500+ web users.",
          "Stabilised a Merge Replication topology across 24 servers and 15 databases. Found a missing conflict resolver on a high-write table and cut errors ~80%.",
          "Built 50+ stored procedures, 40+ table types and 14 SQL Agent jobs. Improved 10+ stored procedures by ~40%. Maintained a 99.9% SLA.",
        ],
      },
      {
        title: "Data Engineer (Contract)",
        org: "Crypto Clear Inc. — MIT Startup",
        period: "Sep 2024 – Dec 2024",
        place: "Cambridge, MA · Remote",
        bullets: [
          "Designed a Lambda Architecture for crypto transaction ingestion across 5 batch and streaming workflows, supporting compliance reporting for a pre-Series A team.",
          "Built feature pipelines feeding 10+ fraud-detection models (XGBoost, Isolation Forest) on AWS, with alerting and recovery so scoring never stopped.",
          "Translated FinCEN and AML requirements into data models and governance standards as the only data engineer.",
        ],
      },
      {
        title: "Data / Research Analyst (Externship)",
        org: "Beats by Dre",
        period: "Jun 2024 – Aug 2024",
        place: "USA · Remote",
        bullets: ["Built an event-driven AWS pipeline (S3 ingestion from survey tools) with monitoring and alerting for product analytics."],
      },
      {
        title: "Data Engineer",
        org: "WET Technologies → JP Morgan Chase (Client)",
        period: "Jan 2021 – Feb 2022",
        place: "Sharjah, UAE",
        bullets: [
          "Deployed a CDC architecture for 1M+ daily events using on-prem Kafka, Zookeeper and PostgreSQL on stateful Kubernetes.",
          "Integrated Kafka with Dataflow (Beam) → BigQuery for real-time analytics with schema evolution and access control.",
          "Fixed a consumer lag spike from a Debezium misconfiguration with zero data loss.",
          "Deployed auto-scaling GKE clusters and Cloud Build CI/CD, cutting deployment time 40%. Orchestrated pipelines with Cloud Composer using dynamic DAGs.",
        ],
      },
    ],
    education,
    certs: [...certs, "Full list: credly.com/users/nikhil-santhosh-jacob"],
  },

  /* ───────────────────────────── 3. CLOUD ENGINEER (NEW) ───────────────────────────── */
  {
    id: "cloud",
    number: 3,
    tab: "Cloud Engineer",
    isNew: true,
    headline: "Cloud Engineer",
    subtitle: "GCP · Azure · AWS · FinOps · Reliability",
    summary:
      "Google Cloud Associate Cloud Engineer and Azure AI-certified engineer with 3+ years running production workloads across GCP, Azure and AWS. I design cost-efficient, highly available cloud platforms and keep them running: 99.9% uptime on a 24-server hybrid estate, 25% compute savings across 26 regions, and 40% faster releases through automated pipelines. I work easily with DevOps, Security and DBA teams and write the runbooks that make operations predictable.",
    achievements: [
      "Cut platform compute spend 25% across 26 regions, saving ~$30K/year for the client.",
      "Held a 99.9% SLA across a 24-server offshore hybrid estate. Errors down ~80%.",
      "Reduced deployment cycle time 40% with auto-scaling GKE and Cloud Build CI/CD.",
      "Scaled an Azure-hosted AI assistant to 4,100+ users with secure code practices and automated backups.",
      "Google Cloud Associate Cloud Engineer · Azure AI Apps & Agents Developer Associate.",
    ],
    skills: [
      { label: "Google Cloud", items: "GKE, BigQuery, Dataflow / Beam, Pub/Sub, Cloud Composer, Dataproc, Cloud Build, Looker" },
      { label: "Microsoft Azure", items: "Azure AI Foundry, Azure AI Speech, Cosmos DB, Data Factory, OpenAI SDK" },
      { label: "AWS", items: "S3, Lambda, Kinesis, Glue, Redshift, SageMaker" },
      { label: "Containers & CI/CD", items: "Kubernetes (GKE, stateful workloads, auto-scaling node pools), Docker, Jenkins, GitHub Actions, Cloud Build" },
      { label: "FinOps", items: "Right-sizing, compute waste reduction, billing optimization for Azure and GCP, resource allocation" },
      { label: "Reliability & Security", items: "99.9% SLAs, 24/7 alerting, automated failure recovery, disaster recovery automation, PII access control, data lineage" },
      { label: "Data & Scripting", items: "Databricks, Spark, Kafka, SQL Server, PostgreSQL · Python, Bash, PowerShell, SQL" },
    ],
    roles: [
      {
        title: "Cloud & Data Platform Lead",
        org: "Tech Mahindra → Transocean (Client)",
        period: "Mar 2025 – Present",
        place: "India",
        intro: "Responsible for a legacy on-prem estate and a new cloud platform in parallel under strict client SLAs, across DEV, QA, UAT, Training, Staging and Production.",
        bullets: [
          "FinOps: led a cost-optimization initiative across 26 operating regions, redesigning aggregation models to cut compute cost 25% (~$30K/year saved).",
          "Reliability: stabilised 24 offshore servers by finding and fixing a missing conflict resolver. Replication errors fell ~80% and uptime reached 99.9%.",
          "Operations: automated failure recovery and 24/7 alerting across all environments. Enforced PII access control and lineage across every subscription.",
          "Delivered 15+ cloud pipelines on Databricks handling 100 GB+/day, cutting reporting delay from 24 hours to under 15 minutes for 50+ users.",
          "Presented architecture and compliance designs to client leads. They were adopted as the reference architecture.",
        ],
      },
      {
        title: "Cloud Delivery Lead, Enterprise AI Assistant",
        org: "Azure AI Foundry · MCP",
        period: "2025 – Present",
        place: "Global rollout",
        bullets: [
          "Deployed a multi-agent assistant on Azure AI Foundry to 4,100+ users across web and mobile.",
          "Aligned independent DevOps, Security and database teams on secure code practices, automated data backups and low-friction deployment, ahead of a tight deadline.",
          "Outcome: +30% workflow efficiency and −10% critical incident reports.",
        ],
      },
      {
        title: "Data Engineer (Contract)",
        org: "Crypto Clear Inc. — MIT Startup",
        period: "Sep 2024 – Dec 2024",
        place: "Cambridge, MA · Remote",
        bullets: [
          "Built the full AWS data platform (Lambda Architecture, 5 batch and streaming workflows) for a pre-Series A team.",
          "Added failover alerting and graceful degradation so 10+ production models kept scoring during upstream outages.",
        ],
      },
      {
        title: "Data / Research Analyst (Externship)",
        org: "Beats by Dre",
        period: "Jun 2024 – Aug 2024",
        place: "USA · Remote",
        bullets: ["Delivered an event-driven AWS pipeline (S3 ingestion) with monitoring and alerting in a three-month sprint."],
      },
      {
        title: "Cloud & Data Engineer",
        org: "WET Technologies → JP Morgan Chase (Client)",
        period: "Jan 2021 – Feb 2022",
        place: "Sharjah, UAE",
        bullets: [
          "Deployed GKE clusters with auto-scaling node pools and Cloud Build CI/CD, cutting deployment cycle time 40%.",
          "Bridged on-prem Kafka (on stateful Kubernetes) with Dataflow and BigQuery for 1M+ daily events, with access control across the full path.",
          "Resolved a live schema-migration spike with a config hot-fix and zero data loss.",
          "Wrote the deployment runbook the operations team used for every later release.",
        ],
      },
    ],
    education,
    certs: [...certs, "Full list: credly.com/users/nikhil-santhosh-jacob"],
  },

  /* ───────────────────────────── 4. ML ENGINEER (NEW) ───────────────────────────── */
  {
    id: "ml",
    number: 4,
    tab: "ML Engineer",
    isNew: true,
    headline: "Machine Learning Engineer",
    subtitle: "MLOps · Agentic AI · Feature Pipelines",
    summary:
      "ML and Agentic AI engineer with an M.S. in Data Analytics and 3+ years shipping production data and AI systems. I built the feature pipelines behind 10+ fraud-detection models, launched a multi-agent assistant used by 4,100+ people, and delivered the real-time data foundations that ML depends on. Tech Mahindra Innovator of the Month, Microsoft Hackathon Top 10 finalist, and Azure AI Apps & Agents Developer Associate. I care about models that stay reliable in production.",
    achievements: [
      "Launched a multi-agent AI assistant to 4,100+ users: +30% workflow efficiency, −10% critical incident reports.",
      "Built data and feature pipelines for 10+ fraud-detection models (XGBoost, Isolation Forest), with alerting that kept scoring live during data gaps.",
      "Microsoft Hackathon Top 10 Finalist: agent-to-agent (A2A) orchestration.",
      "Tech Mahindra Hackathon 3rd Place, Agentic AI Track · Innovator of the Month (Jan 2026).",
      "Azure AI Apps & Agents Developer Associate (AI-103).",
    ],
    skills: [
      { label: "Agentic AI & LLMs", items: "Azure AI Foundry, Model Context Protocol (MCP), LangChain, Google ADK, Hugging Face, OpenAI SDK, multi-agent orchestration (A2A)" },
      { label: "Multimodal", items: "Azure AI Speech, voice and image-driven task inputs, conversational BI" },
      { label: "ML & Modeling", items: "Scikit-learn, XGBoost, Isolation Forest, Decision Trees, Logistic Regression, deep learning (applied research)" },
      { label: "MLOps & Platforms", items: "Vertex AI, SageMaker, automated feature pipelines, failover alerting, graceful degradation, data-quality expectations, lineage" },
      { label: "Data Engineering for ML", items: "Databricks (DLT, Unity Catalog), Spark / PySpark, Kafka, Kinesis, dbt, Airflow 3.0, Delta Lake" },
      { label: "Languages & Tools", items: "Python (PySpark, Polars, Pandas, Scikit-learn), SQL, Scala, Bash · Docker, Kubernetes, GitHub Actions · Power BI, Tableau" },
    ],
    roles: [
      {
        title: "AI & Data Platform Engineer",
        org: "Tech Mahindra → Transocean (Client)",
        period: "Mar 2025 – Present",
        place: "India",
        bullets: [
          "Product owner and builder of a multi-agent assistant on Azure AI Foundry. Agents are connected to enterprise tools via MCP and accept voice and image input. 1,600+ mobile and 2,500+ web users.",
          "Measured outcomes: +30% operational workflow efficiency and −10% critical incident reports.",
          "Aligned DevOps, Security and DB teams so the AI system launched with secure code practices and automated backups on time.",
          "Built 15+ real-time DLT pipelines (100 GB+/day) that cut data latency from 24 hours to under 15 minutes. This is the fresh, quality-checked data layer ML and BI depend on.",
          "Enforced data-quality expectations and schema evolution handling, then reused the pattern as the team template.",
        ],
      },
      {
        title: "ML Data Infrastructure Engineer (Contract)",
        org: "Crypto Clear Inc. — MIT Startup",
        period: "Sep 2024 – Dec 2024",
        place: "Cambridge, MA · Remote",
        bullets: [
          "Designed and deployed the end-to-end data infrastructure and feature engineering pipelines for 10+ fraud-detection models (XGBoost, Isolation Forest) on AWS.",
          "Built a Lambda Architecture with 5 batch and streaming workflows to support compliance reporting.",
          "Added failover alerting and graceful degradation jobs so models kept scoring through upstream partner data gaps.",
          "Translated FinCEN and AML requirements into data models and governance standards.",
        ],
      },
      {
        title: "Research Assistant & Teaching Assistant",
        org: "Clark University",
        period: "Aug 2022 – May 2024",
        place: "Worcester, MA, USA",
        bullets: [
          "Supported graduate Applied Machine Learning and Python Programming courses.",
          "Research: deep-learning outbreak detection from social media, presented at the Graduate Student Council Multidisciplinary Conference (Mar 2024).",
          "Capstone: churn prediction pipeline (Decision Tree + Logistic Regression) with executive Power BI dashboards across 400+ classes.",
        ],
      },
      {
        title: "Data / Research Analyst (Externship)",
        org: "Beats by Dre",
        period: "Jun 2024 – Aug 2024",
        place: "USA · Remote",
        bullets: ["Built an event-driven AWS pipeline with monitoring, lineage and anomaly alerting for the Data Science team's product analytics."],
      },
      {
        title: "Data Engineer",
        org: "WET Technologies → JP Morgan Chase (Client)",
        period: "Jan 2021 – Feb 2022",
        place: "Sharjah, UAE",
        bullets: [
          "Built a real-time CDC platform (1M+ events/day) that cut downstream latency 60% and fed analytics in BigQuery.",
          "Resolved a live schema-change incident with zero data loss.",
        ],
      },
    ],
    education,
    certs: [...certs, "Full list: credly.com/users/nikhil-santhosh-jacob"],
  },
];
