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

type Differentiator = {
  title: string;
  description: string;
};

type PqcFocus = {
  title: string;
  description: string;
};

export const siteConfig = {
  name: "Darío Pérez Martín",
  role: "Software & AI Engineer",
  url: siteUrl,
  email,
  linkedIn: "https://www.linkedin.com/in/dar%C3%ADo-p%C3%A9rez-mart%C3%ADn-47529396/",
  github: "https://github.com/dpm2448dpm",
  malt: "https://www.malt.es/profile/darioperez",
  profileImage: {
    src: "/images/profile/dario-perez.jpg",
    alt: "Portrait of Darío Pérez Martín",
  },
  headline: "From idea to production: AI agents, secure systems, APIs and infrastructure.",
  subheadline:
    "I help businesses build AI-powered products, automations, backend systems and cryptography-aware software that work reliably in production.",
  heroPill: "Software & AI Engineer · LLM Systems · PQC · Backend",
  cta: {
    projects: "View Projects",
    contact: "Contact Me",
  },
  heroCardTitle: "production-ready systems",
  about:
    "Software engineer with six years of production experience building AI-powered systems, backend platforms and data-driven automation. MSc in Cryptography, Cybersecurity and Privacy, with an Outstanding-grade thesis on post-quantum cryptography benchmarking. Experienced across LLM integrations, RAG, Python backends, Laravel/Vue platforms, data pipelines, infrastructure and cryptography-aware engineering for construction, real estate and research environments.",
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
  sections: {
    servicesEyebrow: "Services",
    servicesTitle: "Engineering support from prototype to production.",
    processEyebrow: "How I Work",
    processTitle: "From business workflow to production software.",
    differentEyebrow: "Difference",
    differentTitle: "Why my work does not stop at a polished demo.",
    pqcEyebrow: "Post-Quantum Cryptography",
    pqcTitle: "Security thinking for systems that need to survive the next cryptographic shift.",
    projectsEyebrow: "Featured Projects",
    projectsTitle: "Case studies focused on problems, solutions and outcomes.",
    moreWorkTitle: "More Selected Work",
    aboutEyebrow: "About",
    aboutTitle: "A practical engineering partner for AI-enabled products.",
    publicationsEyebrow: "Publications & Academic Work",
    publicationsTitle: "Research background in cryptography, benchmarking and privacy.",
    stackEyebrow: "Technology Stack",
    stackTitle: "Tools selected for reliable delivery.",
    contactEyebrow: "Contact",
    contactTitle: "Tell me about your project.",
    contactText:
      "Share the business problem, current constraints and what a successful outcome would look like.",
  },
  projectLabels: {
    caseStudy: "case study",
    context: "Context",
    role: "Role",
    problem: "Problem",
    solution: "Solution",
    contribution: "Contribution",
    technologies: "Technologies",
    outcome: "Outcome",
    publication: "View publication",
  },
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
      title: "Security & Post-Quantum Cryptography",
      description:
        "Practical cryptography, PQC benchmarking and migration thinking for systems that need privacy, reproducibility and long-term security.",
      items: ["PQC readiness", "ML-KEM / ML-DSA", "Hybrid TLS", "Benchmarking", "Privacy-by-design"],
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
  differentiators: [
    {
      title: "I work well with messy business workflows",
      description:
        "Many useful systems start with spreadsheets, legacy tools, WhatsApp messages, PDFs and undocumented routines. I turn that reality into software that teams can actually use.",
    },
    {
      title: "I can connect product, backend, data and AI",
      description:
        "I am comfortable moving from user workflow and domain rules to APIs, databases, background jobs, LLM integrations and deployment.",
    },
    {
      title: "I care about reproducibility and privacy",
      description:
        "My cybersecurity and cryptography background shapes how I approach data handling, evaluation, benchmarking and production reliability.",
    },
  ] satisfies Differentiator[],
  pqcFocus: [
    {
      title: "PQC readiness from an engineering perspective",
      description:
        "I do not treat post-quantum cryptography as a buzzword. My work focuses on what changes in real systems: algorithms, key sizes, latency, TLS handshakes and deployment constraints.",
    },
    {
      title: "Benchmarking before migration decisions",
      description:
        "My MSc thesis measured ML-KEM, ML-DSA, FrodoKEM and BIKE across heterogeneous hardware, with reproducible methodology and raw data versioning.",
    },
    {
      title: "Useful bridge between AI, backend and security",
      description:
        "For products handling sensitive data, I can combine backend implementation, AI workflows and privacy/security constraints instead of treating them as separate worlds.",
    },
  ] satisfies PqcFocus[],
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
  highlights: ["LLM production systems", "PQC benchmarking", "RAG architecture", "API design"],
  translations: {
    es: {
      heroPill: "Ingeniero de Software e IA · Sistemas LLM · PQC · Backend",
      headline: "Construyo sistemas con IA, software seguro, APIs e infraestructura para producción.",
      subheadline:
        "Ayudo a empresas a crear automatizaciones, productos con IA, sistemas backend y software consciente de criptografía para casos reales, no solo demos.",
      about:
        "Ingeniero de software con seis años de experiencia construyendo sistemas en producción, plataformas backend y automatización basada en datos e IA. Máster en Criptografía, Ciberseguridad y Privacidad, con tesis sobresaliente sobre benchmarking de criptografía post-cuántica. Experiencia en integraciones LLM, RAG, backends Python, plataformas Laravel/Vue, pipelines de datos e infraestructura para construcción, real estate e investigación.",
      cta: {
        projects: "Ver proyectos",
        contact: "Contactar",
      },
      heroCardTitle: "sistemas preparados para producción",
      highlights: ["Sistemas LLM en producción", "Benchmarking PQC", "Arquitecturas RAG", "Diseño de APIs"],
      sections: {
        servicesEyebrow: "Servicios",
        servicesTitle: "Apoyo de ingeniería desde prototipo hasta producción.",
        processEyebrow: "Cómo trabajo",
        processTitle: "Del proceso de negocio al software en producción.",
        differentEyebrow: "Diferencial",
        differentTitle: "Por qué mi trabajo no se queda en una demo bonita.",
        pqcEyebrow: "Criptografía post-cuántica",
        pqcTitle: "Pensamiento de seguridad para sistemas que deben sobrevivir al próximo cambio criptográfico.",
        projectsEyebrow: "Proyectos destacados",
        projectsTitle: "Casos centrados en problemas, soluciones y resultados.",
        moreWorkTitle: "Más trabajos seleccionados",
        aboutEyebrow: "Sobre mí",
        aboutTitle: "Un perfil práctico para productos con IA y sistemas reales.",
        publicationsEyebrow: "Publicaciones y trabajo académico",
        publicationsTitle: "Base investigadora en criptografía, benchmarking y privacidad.",
        stackEyebrow: "Stack técnico",
        stackTitle: "Herramientas elegidas para entregar software fiable.",
        contactEyebrow: "Contacto",
        contactTitle: "Cuéntame tu proyecto.",
        contactText:
          "Comparte el problema de negocio, las restricciones actuales y cómo sería un buen resultado.",
      },
      projectLabels: {
        caseStudy: "caso",
        context: "Contexto",
        role: "Rol",
        problem: "Problema",
        solution: "Solución",
        contribution: "Contribución",
        technologies: "Tecnologías",
        outcome: "Resultado",
        publication: "Ver publicación",
      },
      services: [
        {
          title: "IA y agentes",
          description:
            "Integraciones LLM, flujos agentic y asistentes de conocimiento pensados para resolver problemas operativos.",
          items: ["Integraciones LLM", "Agentes de IA", "Sistemas RAG", "Chatbots", "Workflows con IA"],
        },
        {
          title: "Desarrollo full stack",
          description:
            "Aplicaciones web, APIs y sistemas backend diseñados alrededor de procesos reales de negocio.",
          items: ["Aplicaciones React", "Sistemas backend", "APIs", "Diseño de bases de datos", "Aplicaciones web"],
        },
        {
          title: "Automatización",
          description:
            "Herramientas internas y automatizaciones que eliminan trabajo repetitivo y conectan datos entre sistemas.",
          items: ["Procesos de negocio", "Extracción de datos", "Notificaciones", "Herramientas internas", "Automatización"],
        },
        {
          title: "Infraestructura",
          description:
            "Despliegues, CI/CD y bases de observabilidad para mantener productos en producción.",
          items: ["Docker", "Despliegues cloud", "CI/CD", "Monitorización", "Arquitectura de sistemas"],
        },
        {
          title: "Seguridad y criptografía post-cuántica",
          description:
            "Criptografía aplicada, benchmarking PQC y criterio de migración para sistemas que necesitan privacidad, reproducibilidad y seguridad a largo plazo.",
          items: ["Preparación PQC", "ML-KEM / ML-DSA", "TLS híbrido", "Benchmarking", "Privacy-by-design"],
        },
      ],
      process: [
        {
          title: "Entender el proceso",
          description:
            "Empiezo por el proceso de negocio, las fuentes de datos y las restricciones antes de elegir la implementación.",
        },
        {
          title: "Construir un núcleo fiable",
          description:
            "Me centro en APIs, jobs, integraciones y flujos de datos que puedan funcionar de forma estable en producción.",
        },
        {
          title: "Añadir IA donde aporta",
          description:
            "Uso LLMs, RAG y agentes para reducir trabajo manual, resumir información o facilitar decisiones.",
        },
        {
          title: "Publicar e iterar",
          description:
            "Preparo despliegues, puntos de monitorización y bucles de feedback para mejorar tras la primera versión.",
        },
      ],
      differentiators: [
        {
          title: "Trabajo bien con procesos de negocio desordenados",
          description:
            "Muchos sistemas útiles empiezan con Excel, herramientas heredadas, WhatsApp, PDFs y rutinas no documentadas. Convierto esa realidad en software que los equipos usan.",
        },
        {
          title: "Conecto producto, backend, datos e IA",
          description:
            "Puedo pasar del flujo de usuario y reglas de dominio a APIs, bases de datos, jobs, integraciones LLM y despliegue.",
        },
        {
          title: "Me importan la reproducibilidad y la privacidad",
          description:
            "Mi base en ciberseguridad y criptografía influye en cómo trato datos, evaluación, benchmarking y fiabilidad en producción.",
        },
      ],
      pqcFocus: [
        {
          title: "PQC readiness desde una perspectiva de ingeniería",
          description:
            "No trato la criptografía post-cuántica como una palabra de moda. Me centro en lo que cambia en sistemas reales: algoritmos, tamaños de clave, latencia, handshakes TLS y restricciones de despliegue.",
        },
        {
          title: "Benchmarking antes de decidir migraciones",
          description:
            "Mi tesis de máster midió ML-KEM, ML-DSA, FrodoKEM y BIKE en hardware heterogéneo, con metodología reproducible y versionado de datos brutos.",
        },
        {
          title: "Puente útil entre IA, backend y seguridad",
          description:
            "En productos con datos sensibles puedo combinar implementación backend, workflows de IA y restricciones de privacidad/seguridad sin tratarlos como mundos separados.",
        },
      ],
      credentials: [
        { label: "Experiencia en producción", value: "6 años" },
        { label: "Usuarios internos", value: "~200" },
        { label: "Clientes externos alcanzados", value: ">10.000" },
        { label: "Financiación I+D co-redactada", value: "~500K€" },
        { label: "Formación", value: "MSc Criptografía, Ciberseguridad y Privacidad" },
        { label: "Reconocimiento", value: "Premio Innovación, CEOE-Cepyme Salamanca" },
      ],
      projects: [
        {
          name: "Public Alerts",
          category: "Scraping y notificaciones",
          summary:
            "Plataforma que rastrea webs de administraciones públicas y avisa a suscriptores sobre oposiciones, interinidades y oportunidades relacionadas.",
          context:
            "Producto para opositores que necesitan vigilar múltiples fuentes oficiales sin revisar manualmente cada administración.",
          role: "Diseñé y construí los flujos de scraping, procesamiento de datos y notificaciones.",
          problem:
            "La información sobre oposiciones e interinidades está dispersa en muchas webs, por lo que es fácil perder novedades relevantes.",
          solution:
            "Construí un sistema que monitoriza fuentes públicas, normaliza oportunidades detectadas y envía alertas segmentadas.",
          contribution: [
            "Implementé jobs de scraping para varias administraciones públicas.",
            "Modelé oportunidades, suscripciones y reglas de notificación.",
            "Construí el flujo de entrega para avisar a usuarios cuando aparecen novedades relevantes.",
          ],
          outcome: [
            "Monitorización centralizada de fuentes públicas fragmentadas.",
            "Alertas a tiempo para suscriptores según sus intereses.",
          ],
          status: "Producto real. Añadir enlaces y capturas cuando esté listo.",
        },
        {
          name: "WhatsApp Medical Appointments",
          category: "Asistente IA y SaaS",
          summary:
            "Producto por suscripción para clínicas que automatiza la gestión de citas por WhatsApp e integra Google Calendar.",
          context:
            "SaaS para clínicas que necesitan una capa de recepción ligera sin aumentar trabajo administrativo.",
          role: "Diseñé el flujo de producto, conversación por WhatsApp e integración de calendario.",
          problem:
            "Las clínicas pierden tiempo respondiendo mensajes repetitivos y coordinando disponibilidad, confirmaciones y calendario.",
          solution:
            "Construí un recepcionista por WhatsApp que gestiona solicitudes, comprueba disponibilidad y crea eventos de calendario.",
          contribution: [
            "Modelé onboarding de clínicas, suscripción y flujos de cita.",
            "Integré mensajería WhatsApp con lógica automatizada de agenda.",
            "Conecté reservas con Google Calendar para sincronizar calendarios.",
          ],
          outcome: [
            "Menos trabajo repetitivo de recepción.",
            "Flujo automatizado desde mensaje hasta cita en calendario.",
          ],
          status: "Producto en desarrollo.",
        },
        {
          name: "Market Sentiment Intelligence",
          category: "Inteligencia de datos e IA",
          summary:
            "Plataforma que agrega opiniones de sitios y aplica analítica y sentimiento de mercado para empresas.",
          context:
            "Proyecto de cliente orientado a convertir opiniones dispersas en señales de negocio y mercado.",
          role: "Construyo la capa de agregación y análisis de datos junto a un colaborador.",
          problem:
            "Las empresas tienen muchas opiniones públicas disponibles, pero extraer tendencias y sentimiento lleva demasiado tiempo.",
          solution:
            "Agrega opiniones de distintas fuentes y aplica análisis para detectar sentimiento, posicionamiento y patrones recurrentes.",
          contribution: [
            "Diseñé el modelo de datos para agregación y análisis de opiniones.",
            "Construí flujos de ingesta desde fuentes externas.",
            "Ayudé a definir la capa de insights para informes de mercado y sentimiento.",
          ],
          outcome: [
            "Convierte opiniones brutas en inteligencia de mercado accionable.",
            "Ayuda a detectar patrones difíciles de ver manualmente.",
          ],
          status: "Proyecto de cliente en desarrollo.",
        },
        {
          name: "AI Reminder Campaigns",
          category: "Automatización con IA",
          summary:
            "Servicio interno que envía recordatorios asistidos por IA a grupos de usuarios mediante distintos canales.",
          context:
            "Proyecto de empresa para programar comunicaciones recurrentes con temática, audiencia, frecuencia y canal configurables.",
          role: "Construí servicios para configurar, generar y entregar recordatorios recurrentes con IA.",
          problem:
            "Los equipos necesitaban recordar temas a distintos usuarios sin escribir y enviar cada mensaje manualmente.",
          solution:
            "Creé un sistema donde se elige audiencia, tema, frecuencia y canal, con IA ayudando a generar el contenido.",
          contribution: [
            "Modelé selección de audiencias, frecuencias y configuración de campañas.",
            "Construí servicios de generación con IA y planificación de envíos.",
            "Integré múltiples canales de notificación para uso operativo.",
          ],
          outcome: [
            "Automatización de comunicaciones recurrentes.",
            "Control de audiencia, canal, temática y frecuencia por parte de los equipos.",
          ],
          status: "Proyecto de empresa en producción, anonimizado.",
        },
        {
          name: "Weekly Audio Project Reports",
          category: "Resumen con IA",
          summary:
            "Bot que transforma audios de usuarios sobre obras en un email semanal resumido.",
          context:
            "Proyecto de empresa para equipos de construcción que reportan problemas durante la semana mediante audios rápidos.",
          role: "Construí la automatización que procesa audios entrantes y genera borradores semanales de email.",
          problem:
            "Los usuarios registraban problemas en audio, pero convertirlos en comunicación semanal estructurada requería trabajo manual.",
          solution:
            "Construí un bot que recopila mensajes de audio, los procesa y genera un resumen semanal listo para revisar y enviar.",
          contribution: [
            "Diseñé el flujo de entrada de audio y agrupación semanal.",
            "Implementé resumen con IA para notas de proyectos de construcción.",
            "Generé emails listos para revisar por usuarios finales.",
          ],
          outcome: [
            "Menos esfuerzo manual en reportes de obra.",
            "Conversión de audios desestructurados en resúmenes accionables.",
          ],
          status: "Proyecto de empresa en producción, anonimizado.",
        },
        {
          name: "BC3 Budget Generator",
          category: "LLM y RAG",
          summary:
            "Sistema de generación de presupuestos que usa LLMs y RAG sobre datos de construcción para producir estimaciones tipo BC3.",
          context:
            "Proyecto de empresa construido con compañeros para apoyar presupuestación con conocimiento específico del sector construcción.",
          role: "Contribuí a la capa de IA y datos para generación de presupuestos con LLMs y recuperación de información.",
          problem:
            "Crear presupuestos de construcción requiere conocimiento de dominio, datos estructurados y mucho trabajo repetitivo.",
          solution:
            "Construimos un generador asistido por IA que recupera datos relevantes y usa LLMs para producir estimaciones estructuradas.",
          contribution: [
            "Trabajé en flujos de recuperación sobre datos de costes de construcción.",
            "Ayudé a integrar salidas LLM en procesos de generación de presupuestos.",
            "Colaboré en una herramienta orientada a producción con restricciones de dominio.",
          ],
          outcome: [
            "Aceleración del borrador de presupuestos de construcción.",
            "Reutilización de datos de dominio para estimaciones más contextuales.",
          ],
          status: "Proyecto de empresa en producción, anonimizado.",
        },
      ],
      additionalWork: [
        {
          name: "Monitor de noticias de construcción",
          description:
            "Sistema diario de inteligencia que rastrea fuentes públicas y privadas para identificar licitaciones, empresas y oportunidades de construcción.",
          tags: ["Inteligencia de mercado", "Scraping", "Notificaciones", "Construcción"],
        },
        {
          name: "CRM privado y herramientas de facturación",
          description:
            "Trabajo en CRM interno para operaciones de negocio, facturación y flujos privados de gestión.",
          tags: ["CRM", "Backend", "Herramientas internas", "Operaciones"],
        },
        {
          name: "Estimador de reformas",
          description:
            "Aplicación web que estima costes de reforma a partir de un formulario guiado y convierte inputs en rangos de presupuesto.",
          tags: ["Full stack", "Formularios", "Estimaciones", "Construcción"],
        },
        {
          name: "Ingesta de datos de catastro",
          description:
            "Software para descargar e ingerir datasets completos de catastro para varios servicios internos y productos de datos.",
          tags: ["Ingesta de datos", "ETL", "Catastro", "Backend"],
        },
        {
          name: "Proyectos CDTI de I+D",
          description:
            "Tres proyectos de I+D con teoría de grafos, IA y análisis de variables mercantiles y de construcción para precios, márgenes y reformas óptimas.",
          tags: ["I+D", "Teoría de grafos", "IA", "Análisis de datos"],
        },
        {
          name: "Benchmarking PQC",
          description:
            "Framework open-source de tesis de máster para comparar ML-KEM, ML-DSA, FrodoKEM y BIKE contra criptografía clásica en x86_64 y ARM64.",
          tags: ["Criptografía post-cuántica", "Benchmarking", "Python", "OpenSSL"],
        },
        {
          name: "Optimizador de inversión en reformas",
          description:
            "Herramienta de análisis inmobiliario que rankea paquetes de reforma según ROI esperado usando diferenciales de precio por metro cuadrado.",
          tags: ["Real estate", "Optimización", "Análisis de datos", "Python"],
        },
        {
          name: "Predicción de éxito empresarial",
          description:
            "Plataforma de investigación con modelos ML preentrenados para apoyar predicción de éxito empresarial y workflows de datos.",
          tags: ["Machine learning", "Node.js", "Express", "Investigación"],
        },
        {
          name: "Análisis de eficiencia de rutas",
          description:
            "Proyecto de análisis de datos para rutas de distribución de combustible que identificó alrededor de 100.000€ de ahorro anual.",
          tags: ["Análisis de datos", "Operaciones", "Reporting", "Optimización"],
        },
        {
          name: "RAG privado cifrado",
          description:
            "Proyecto personal explorando generación aumentada por recuperación privada y cifrada para bases de conocimiento sensibles.",
          tags: ["RAG", "Cifrado", "Privacidad", "LLMs"],
        },
      ],
      publications: [
        {
          title: "Performance Benchmarking of Post-Quantum Cryptographic Algorithms across Heterogeneous Hardware Environments",
          venue: "Tesis de máster, Universitat Oberta de Catalunya",
          year: "2026",
          description:
            "Tesis con calificación sobresaliente y framework reproducible para comparar algoritmos post-cuánticos como ML-KEM, ML-DSA, FrodoKEM y BIKE frente a criptografía clásica en hardware x86_64 y ARM64.",
          href: "https://hdl.handle.net/10609/154216",
          tags: ["Criptografía post-cuántica", "Benchmarking", "OpenSSL", "OQS", "Python"],
        },
        {
          title: "Post-Quantum Cryptography: Algorithms and Impact",
          venue: "Publicación académica, Universitat Oberta de Catalunya",
          year: "2026",
          description:
            "Trabajo académico sobre impacto práctico de algoritmos post-cuánticos, migración criptográfica y compromisos de rendimiento en sistemas reales.",
          href: "https://hdl.handle.net/10609/154216",
          tags: ["PQC", "Ciberseguridad", "Privacidad", "Migración criptográfica"],
        },
      ],
      technologyGroups: [
        { category: "Backend y APIs", items: ["Python", "FastAPI", "Laravel", "PHP", "Java", "Node.js", "Express", "REST APIs"] },
        { category: "Frontend", items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue", "Tailwind CSS"] },
        { category: "IA y LLMs", items: ["Integraciones LLM", "Claude", "OpenAI", "Perplexity", "DeepInfra", "RAG", "Embeddings", "LangGraph", "Agentes IA"] },
        { category: "Datos y analítica", items: ["Pandas", "NumPy", "R", "Análisis de sentimiento", "Pipelines de datos", "ETL", "Cytoscape"] },
        { category: "Bases de datos e infraestructura", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker", "Linux", "GitHub Actions", "Vercel", "AWS"] },
        { category: "Seguridad y criptografía", items: ["PQC", "ML-KEM", "ML-DSA", "OpenSSL", "OQS Provider", "GDPR", "Privacy-by-design", "Metasploit"] },
        { category: "Automatización e integraciones", items: ["Web scraping", "WhatsApp", "Google Calendar", "Email automation", "Notificaciones", "Inteligencia de mercado"] },
      ],
    },
  },
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
  {
    label: "Malt",
    value: siteConfig.malt.replace("https://", ""),
    href: siteConfig.malt,
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
  sameAs: [siteConfig.linkedIn, siteConfig.github, siteConfig.malt],
};
