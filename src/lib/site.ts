const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");
const email = "dpm24mainstream@proton.me";

type ProjectLink = {
  label: string;
  href: string;
};

type ProjectImage = {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
};

type Project = {
  name: string;
  category: string;
  summary: string;
  context: string;
  role: string;
  problem: string;
  solution: string;
  contribution: string[];
  technologies: string[];
  outcome: string[];
  status: string;
  image: ProjectImage;
  links?: ProjectLink[];
};

type AdditionalWork = {
  name: string;
  description: string;
  tags: string[];
};

type TechnologyGroup = {
  category: string;
  items: string[];
};

type Credential = {
  label: string;
  value: string;
};

type Publication = {
  title: string;
  venue: string;
  year: string;
  description: string;
  href: string;
  tags: string[];
};

export const siteConfig = {
  name: "Darío Pérez Martín",
  role: "Software & AI Engineer",
  url: siteUrl,
  email,
  linkedIn: "https://www.linkedin.com/in/dar%C3%ADo-p%C3%A9rez-mart%C3%ADn-47529396/",
  github: "https://github.com/dpm2448dpm",
  headline: "From idea to production: AI agents, web applications, APIs and infrastructure.",
  subheadline:
    "I help businesses build AI-powered products, automations and backend systems that work reliably in production.",
  heroPill: "Software & AI Engineer · LLM Systems · Backend · Infrastructure",
  about:
    "Software engineer with six years of production experience building AI-powered systems, backend platforms and data-driven automation. MSc in Cryptography, Cybersecurity and Privacy, with an Outstanding-grade thesis on post-quantum cryptography benchmarking. Experienced across LLM integrations, RAG, Python backends, Laravel/Vue platforms, data pipelines and infrastructure for construction, real estate and research environments.",
  seo: {
    title: "Freelance AI Engineer | AI Agents, RAG & Full Stack Development",
    description:
      "Portfolio for a freelance AI engineer building production AI agents, LLM integrations, RAG systems, APIs, web applications and cloud infrastructure.",
    keywords: [
      "AI Engineer",
      "AI Agent Developer",
      "LLM Integration",
      "RAG Development",
      "FastAPI Developer",
      "Full Stack Developer",
      "Freelance AI Engineer",
      "Python Backend Engineer",
      "LLM Engineer",
      "Post-Quantum Cryptography",
      "AI Automation",
    ],
  },
  credentials: [
    { label: "Production experience", value: "6 years" },
    { label: "Internal users served", value: "~200" },
    { label: "External clients reached", value: ">10,000" },
    { label: "R&D funding co-authored", value: "~€500K" },
    { label: "Education", value: "MSc Cryptography, Cybersecurity & Privacy" },
    { label: "Recognition", value: "Innovation Award, CEOE-Cepyme Salamanca" },
  ] satisfies Credential[],
  publications: [
    {
      title: "Performance Benchmarking of Post-Quantum Cryptographic Algorithms across Heterogeneous Hardware Environments",
      venue: "MSc Thesis, Universitat Oberta de Catalunya",
      year: "2026",
      description:
        "Outstanding-grade thesis and reproducible benchmarking framework comparing post-quantum algorithms such as ML-KEM, ML-DSA, FrodoKEM and BIKE against classical cryptography across x86_64 and ARM64 hardware.",
      href: "https://hdl.handle.net/10609/154216",
      tags: ["Post-quantum cryptography", "Benchmarking", "OpenSSL", "OQS", "Python"],
    },
    {
      title: "Post-Quantum Cryptography: Algorithms and Impact",
      venue: "Academic publication, Universitat Oberta de Catalunya",
      year: "2026",
      description:
        "Academic work focused on the practical impact of post-quantum cryptographic algorithms, migration considerations and performance trade-offs for real systems.",
      href: "https://hdl.handle.net/10609/154216",
      tags: ["PQC", "Cybersecurity", "Privacy", "Cryptographic migration"],
    },
  ] satisfies Publication[],
  services: [
    {
      title: "AI & Agents",
      description:
        "Production LLM integrations, agentic workflows and knowledge assistants that solve operational problems.",
      items: ["LLM integrations", "AI agents", "RAG systems", "Chatbots", "AI workflows"],
    },
    {
      title: "Full Stack Development",
      description:
        "Reliable web applications, APIs and backend systems designed around business workflows.",
      items: ["React applications", "Backend systems", "APIs", "Database design", "Web apps"],
    },
    {
      title: "Automation",
      description:
        "Internal tools and automations that remove repetitive work and connect data across systems.",
      items: ["Business workflows", "Data extraction", "Notifications", "Internal tools", "Process automation"],
    },
    {
      title: "Infrastructure",
      description:
        "Deployments, CI/CD and observability foundations that keep products maintainable in production.",
      items: ["Docker", "Cloud deployments", "CI/CD", "Monitoring", "System architecture"],
    },
  ],
  process: [
    {
      title: "Understand the workflow",
      description:
        "I start from the business process, data sources and operational constraints before choosing the implementation.",
    },
    {
      title: "Build a reliable core",
      description:
        "I focus on APIs, background jobs, integrations and data flows that can run consistently in production.",
    },
    {
      title: "Add AI where it helps",
      description:
        "LLMs, RAG and agents are used to remove manual work, summarize information or make decisions easier.",
    },
    {
      title: "Ship and iterate",
      description:
        "I prepare deployments, monitoring points and feedback loops so products can improve after the first release.",
    },
  ],
  projects: [
    {
      name: "Public Alerts",
      category: "Web scraping and notifications",
      summary:
        "A notification platform that tracks public administration websites and alerts subscribers about public exams, interim positions and related opportunities.",
      context:
        "Product built for candidates who need to monitor multiple official sources without manually checking each administration website.",
      role: "Designed and built the scraping, data processing and notification workflows.",
      problem:
        "Information about public exams and interim opportunities is distributed across many administration websites, making it easy to miss relevant updates.",
      solution:
        "Built a system that monitors selected public sources, normalizes detected opportunities and sends targeted alerts to subscribed users.",
      contribution: [
        "Implemented scraping jobs for multiple public administration websites.",
        "Modeled opportunities, subscriptions and notification rules.",
        "Built the delivery workflow for notifying users when relevant updates appear.",
      ],
      technologies: ["Python", "Web scraping", "PostgreSQL", "Background jobs", "Notifications"],
      outcome: [
        "Centralized monitoring of fragmented public sources.",
        "Timely alerts for subscribers based on their interests.",
      ],
      status: "Real product. Add links and screenshots when ready.",
      image: {
        src: "https://images.unsplash.com/photo-1763718432504-7716caff6e99?auto=format&fit=crop&w=1200&q=80",
        alt: "Dashboard interface with alerts and notifications",
        credit: "Photo via Unsplash",
        creditUrl: "https://unsplash.com/s/photos/alerts",
      },
    },
    {
      name: "WhatsApp Medical Appointments",
      category: "AI assistant and SaaS",
      summary:
        "A subscription product for clinics that automates patient appointment handling through WhatsApp and Google Calendar.",
      context:
        "SaaS product for clinics that want a lightweight receptionist layer without adding more manual admin work.",
      role: "Designed the product workflow, WhatsApp conversation flow and calendar integration.",
      problem:
        "Clinics lose time answering repetitive scheduling messages and manually coordinating availability, confirmations and calendar updates.",
      solution:
        "Built a WhatsApp-based receptionist that handles appointment requests, checks availability and creates calendar events for subscribed clinics.",
      contribution: [
        "Modeled clinic onboarding, subscription state and appointment flows.",
        "Integrated WhatsApp messaging with automated scheduling logic.",
        "Connected bookings with Google Calendar to keep clinic calendars in sync.",
      ],
      technologies: ["WhatsApp", "Google Calendar", "Subscriptions", "Backend APIs", "Automation"],
      outcome: [
        "Reduced repetitive receptionist work for clinics.",
        "Automated appointment flow from message to calendar booking.",
      ],
      status: "Product in development.",
      image: {
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
        alt: "Doctor and patient discussing an appointment in a clinic",
        credit: "Photo via Unsplash",
        creditUrl: "https://unsplash.com/s/photos/doctor-appointment",
      },
    },
    {
      name: "Market Sentiment Intelligence",
      category: "Data intelligence and AI",
      summary:
        "A platform that aggregates place reviews and applies analytics and market sentiment analysis for businesses.",
      context:
        "Client project focused on turning fragmented review data into business insight and market signals.",
      role: "Building the data aggregation and analysis layer with a collaborator.",
      problem:
        "Businesses have access to many public opinions, but extracting trends, sentiment and competitive signals from them is time-consuming.",
      solution:
        "Aggregates opinions from different sources and applies a data analysis layer to surface sentiment, market positioning and recurring patterns.",
      contribution: [
        "Designed the data model for review aggregation and analysis.",
        "Built ingestion workflows for external opinion sources.",
        "Helped shape the insight layer for market and sentiment reporting.",
      ],
      technologies: ["Data pipelines", "Sentiment analysis", "LLMs", "PostgreSQL", "Analytics"],
      outcome: [
        "Transforms raw opinions into usable market intelligence.",
        "Helps businesses identify patterns that are difficult to see manually.",
      ],
      status: "Client project in development.",
      image: {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        alt: "Analytics dashboard with charts and business metrics",
        credit: "Photo via Unsplash",
        creditUrl: "https://unsplash.com/s/photos/dashboard-data",
      },
    },
    {
      name: "AI Reminder Campaigns",
      category: "AI workflow automation",
      summary:
        "An internal service that sends AI-assisted reminders to selected user groups through different delivery channels.",
      context:
        "Company project for scheduling recurring communications with configurable topics, audiences, frequency and delivery media.",
      role: "Built services for configuring, generating and delivering recurring AI-assisted reminders.",
      problem:
        "Teams needed a flexible way to remind different user groups about recurring topics without manually writing and sending every message.",
      solution:
        "Created a reminder system where teams can choose audience, topic, frequency and channel, with AI helping generate the message content.",
      contribution: [
        "Modeled audience selection, reminder frequency and campaign configuration.",
        "Built services for AI-assisted content generation and delivery scheduling.",
        "Integrated multiple notification channels for operational use.",
      ],
      technologies: ["AI workflows", "Notifications", "Backend services", "Scheduling", "APIs"],
      outcome: [
        "Automated recurring communication workflows.",
        "Gave teams control over audience, channel, topic and frequency.",
      ],
      status: "Production company project, anonymized.",
      image: {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        alt: "Laptop screen representing automated digital workflows",
        credit: "Photo via Unsplash",
        creditUrl: "https://unsplash.com/s/photos/workflow-automation",
      },
    },
    {
      name: "Weekly Audio Project Reports",
      category: "AI summarization",
      summary:
        "A bot that turns user audio notes about construction projects into a weekly email summary.",
      context:
        "Company project for construction teams that report issues during the week using quick audio messages.",
      role: "Built the automation that processes incoming audio notes and produces weekly email drafts.",
      problem:
        "Users captured project problems as audio notes, but turning those notes into structured weekly communication required manual effort.",
      solution:
        "Built a bot that collects audio messages, processes them and generates a weekly email summary that users can review and send.",
      contribution: [
        "Designed the audio intake and weekly batching workflow.",
        "Implemented AI summarization for construction-related project notes.",
        "Generated email-ready summaries for end users.",
      ],
      technologies: ["Audio processing", "LLMs", "Email automation", "Backend services", "Scheduling"],
      outcome: [
        "Reduced manual reporting effort for construction project updates.",
        "Converted unstructured audio notes into actionable weekly summaries.",
      ],
      status: "Production company project, anonymized.",
      image: {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        alt: "Construction site representing project reporting workflows",
        credit: "Photo via Unsplash",
        creditUrl: "https://unsplash.com/s/photos/construction-site",
      },
    },
    {
      name: "BC3 Budget Generator",
      category: "LLM and RAG system",
      summary:
        "A budget generation system that uses LLMs and RAG over construction cost data to produce BC3-style estimates.",
      context:
        "Company project built with teammates to support construction budgeting workflows with domain-specific knowledge.",
      role: "Contributed to the AI and data layer for budget generation using LLMs and retrieval over training data.",
      problem:
        "Creating construction budgets requires domain knowledge, structured cost data and repetitive manual work.",
      solution:
        "Built an AI-assisted budget generator that retrieves relevant construction data and uses LLMs to help produce structured BC3 estimates.",
      contribution: [
        "Worked on retrieval workflows over construction cost data.",
        "Helped integrate LLM output into budget generation processes.",
        "Collaborated on a production-oriented tool with domain-specific constraints.",
      ],
      technologies: ["LLMs", "RAG", "BC3", "Construction data", "Backend services"],
      outcome: [
        "Accelerated budget drafting for construction workflows.",
        "Reused domain data to produce more contextual estimates.",
      ],
      status: "Production company project, anonymized.",
      image: {
        src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
        alt: "Engineering and construction planning documents",
        credit: "Photo via Unsplash",
        creditUrl: "https://unsplash.com/s/photos/construction-planning",
      },
    },
  ] as Project[],
  additionalWork: [
    {
      name: "Construction Market News Monitor",
      description:
        "Daily intelligence system that tracks public and private news sources to identify tenders, companies and construction opportunities.",
      tags: ["Market intelligence", "Scraping", "Notifications", "Construction"],
    },
    {
      name: "Private CRM and Billing Tools",
      description:
        "Internal CRM work for business operations including invoices and private management workflows.",
      tags: ["CRM", "Backend", "Internal tools", "Business operations"],
    },
    {
      name: "Home Renovation Estimator",
      description:
        "Web application that estimates renovation costs from a guided form and turns user input into a budget range.",
      tags: ["Full stack", "Forms", "Estimations", "Construction"],
    },
    {
      name: "Cadastre Data Ingestion",
      description:
        "Software for downloading and ingesting complete cadastre datasets for multiple internal services and data products.",
      tags: ["Data ingestion", "ETL", "Cadastre", "Backend"],
    },
    {
      name: "CDTI Research Projects",
      description:
        "Three R&D projects using graph theory, AI and analysis of commercial and construction variables for pricing, margins and optimal renovations.",
      tags: ["R&D", "Graph theory", "AI", "Data analysis"],
    },
    {
      name: "PQC Performance Benchmarking",
      description:
        "Open-source MSc thesis framework benchmarking ML-KEM, ML-DSA, FrodoKEM and BIKE against classical cryptography across x86_64 and ARM64 hardware.",
      tags: ["Post-quantum cryptography", "Benchmarking", "Python", "OpenSSL"],
    },
    {
      name: "Renovation Investment Optimizer",
      description:
        "Real-estate analysis tool ranking renovation packages by expected ROI using market price-per-square-meter differentials.",
      tags: ["Real estate", "Optimization", "Data analysis", "Python"],
    },
    {
      name: "Business Success Prediction Platform",
      description:
        "Research platform built with pre-trained ML models to support business-success prediction and interdisciplinary data workflows.",
      tags: ["Machine learning", "Node.js", "Express", "Research"],
    },
    {
      name: "Route Efficiency Analysis",
      description:
        "Data analysis project for fuel distribution routes that identified around €100,000 in annual operational savings.",
      tags: ["Data analysis", "Operations", "Reporting", "Optimization"],
    },
    {
      name: "Encrypted Private RAG",
      description:
        "Personal project exploring private encrypted retrieval-augmented generation for sensitive knowledge bases.",
      tags: ["RAG", "Encryption", "Privacy", "LLMs"],
    },
  ] satisfies AdditionalWork[],
  technologyGroups: [
    {
      category: "Backend & APIs",
      items: ["Python", "FastAPI", "Laravel", "PHP", "Java", "Node.js", "Express", "REST APIs"],
    },
    {
      category: "Frontend",
      items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue", "Tailwind CSS"],
    },
    {
      category: "AI & LLMs",
      items: [
        "LLM integrations",
        "Claude",
        "OpenAI",
        "Perplexity",
        "DeepInfra",
        "RAG",
        "Embeddings",
        "LangGraph",
        "AI agents",
      ],
    },
    {
      category: "Data & Analytics",
      items: ["Pandas", "NumPy", "R", "Sentiment analysis", "Data pipelines", "ETL", "Cytoscape"],
    },
    {
      category: "Databases & Infrastructure",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker", "Linux", "GitHub Actions", "Vercel", "AWS"],
    },
    {
      category: "Security & Cryptography",
      items: ["PQC", "ML-KEM", "ML-DSA", "OpenSSL", "OQS Provider", "GDPR", "Privacy-by-design", "Metasploit"],
    },
    {
      category: "Automation & Integrations",
      items: ["Web scraping", "WhatsApp", "Google Calendar", "Email automation", "Notifications", "Market intelligence"],
    },
  ] satisfies TechnologyGroup[],
  highlights: ["LLM production systems", "RAG architecture", "API design", "Data pipelines"],
};

export const contactLinks = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    label: "LinkedIn",
    value: siteConfig.linkedIn.replace("https://", ""),
    href: siteConfig.linkedIn,
  },
  {
    label: "GitHub",
    value: siteConfig.github.replace("https://", ""),
    href: siteConfig.github,
  },
];

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: siteConfig.role,
  knowsAbout: [
    "AI Engineering",
    "LLM Integration",
    "AI Agents",
    "RAG Systems",
    "Backend Development",
    "Full Stack Development",
    "DevOps",
  ],
  sameAs: [siteConfig.linkedIn, siteConfig.github],
};
