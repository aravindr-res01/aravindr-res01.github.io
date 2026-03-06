// ============================================================
//  data.js — ALL CONTENT LIVES HERE
//  Edit this file to update your portfolio. No other file
//  needs to be touched for content changes.
// ============================================================

export const DATA = {

  // ── Profile ──────────────────────────────────────────────
  profile: {
    name:    "Aravind Raghu",
    title:   "Lead Full-Stack Engineer · FinTech",
    tagline: "FinTech · Distributed Systems · Peer Reviewer · Mentor",
    // Place your photo in /public/resources/ and reference it here
    photo:   "/resources/3111336A-0B10-46E1-A4B9-425E01F86EB4.jpeg",
    email:   "aravindr.res@gmail.com",
    about: [
      "I am a software engineer with over 10 years of experience building secure, scalable financial technology systems — particularly in payments, risk, and compliance. My work spans backend architecture, microservices, cloud-native infrastructure, and distributed systems design.",
      "Beyond engineering, I actively contribute to the broader technology and research community through academic peer review, conference technical committees, and volunteer mentoring across multiple nonprofit organizations. All mentoring and review work is provided on a voluntary, unpaid basis.",
    ],
    links: [
      { label: "LinkedIn",       url: "https://www.linkedin.com/in/aravindraghu01" },
      { label: "GitHub",         url: "https://github.com/aravindr-res01" },
      { label: "ORCID",          url: "https://orcid.org/0009-0006-4340-3653" },
      { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Aravind_Raghu4" },
      { label: "Web of Science", url: "https://www.webofscience.com/wos/author/record/NMJ-9665-2025" },
    ],
    stats: [
      { number: "10+", label: "Years Engineering" },
      { number: "65+", label: "Peer Reviews"      },
      { number: "10+", label: "Mentees Guided"    },
      { number: "6",   label: "Mentor Programs"   },
    ],
  },

  // ── Expertise cards ──────────────────────────────────────
  expertise: [
    {
      icon:  "💳",
      title: "Payments & FinTech Systems",
      desc:  "Payment processing infrastructure, risk engines, fraud detection, and regulatory compliance systems built for scale and reliability.",
    },
    {
      icon:  "⚙️",
      title: "Backend & Microservices",
      desc:  "Java/Spring Boot, event-driven architecture, distributed systems design, and production-ready API development.",
    },
    {
      icon:  "🔐",
      title: "Security & Identity",
      desc:  "OAuth2, OpenID Connect, Zero Trust architecture, and secure integration patterns for financial applications.",
    },
    {
      icon:  "☁️",
      title: "Cloud-Native Architecture",
      desc:  "Scalable, resilient systems on cloud infrastructure with a focus on observability, performance, and operational maturity.",
    },
  ],

  // ── Peer Review & Judging ─────────────────────────────────
  peerReview: {
    subtitle: "Volunteer reviewer and judge for academic journals and conferences in FinTech and related technical fields.",
    stats: [
      { number: "56",  label: "Journal Reviews"     },
      { number: "9",   label: "Conference Reviews"  },
      { number: "65+", label: "Total Contributions" },
    ],
    fields: [
      "Financial Technology",
      "Artificial Intelligence",
      "Distributed Systems",
      "Secure Software Engineering",
    ],
    // Set url: null to show "Link pending" automatically
    roles: [
      {
        role:  "Judge",
        org:   "Business Intelligence Group (BIG) Awards",
        url:   "https://www.bintelligence.com/judge/aravind-raghu",
        label: "View Profile",
      },
      {
        role:  "Technical Committee Member",
        org:   "15th International Conference on Software Technology & Engineering (ICSTE 2025)",
        url:   null, // ← replace with official URL when available
        label: "Link pending",
      },
      {
        role:  "Volunteer Mentor & Judge",
        org:   "305 Hack Edition Hackathon — January 2026",
        url:   "https://codecrunchglobal.vercel.app/hackuniversity-hackathons.html",
        label: "View Event",
      },
    ],
    profiles: [
      { label: "ORCID",          url: "https://orcid.org/0009-0006-4340-3653" },
      { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Aravind_Raghu4" },
      { label: "Web of Science", url: "https://www.webofscience.com/wos/author/record/NMJ-9665-2025" },
    ],
  },

  // ── Mentorship programs ───────────────────────────────────
  // status: "ongoing" | "upcoming" | "completed"
  mentorship: {
    subtitle: "All mentoring is voluntary and unpaid — provided as community service to engineers, students, and small business owners.",
    programs: [
      {
        org:    "SCORE Fort Worth",
        status: "ongoing",
        badge:  "Ongoing",
        desc:   "Volunteer mentor with SCORE, a nonprofit partner of the U.S. Small Business Administration. Guided ~10 small business clients on technology adoption, software applications, e-commerce strategy, and business scalability.",
        url:    "https://www.score.org/fortworth/profile/aravind-raghu",
        label:  "SCORE Profile",
      },
      {
        org:    "Rewriting the Code",
        status: "ongoing",
        badge:  "Ongoing",
        desc:   "Mentor with a nonprofit supporting students and early-career professionals in technology. Sessions cover career guidance, technical discussions, interview preparation, and professional development.",
        url:    null,
        label:  null,
      },
      {
        org:    "Data Visualization Society",
        status: "upcoming",
        badge:  "Feb – Apr 2026",
        desc:   "Selected mentor for the DVS structured mentorship program. Ten-week cohort providing professional and technical guidance to matched mentees.",
        url:    "https://datavisualizationsociety.com",
        label:  "Organization",
      },
      {
        org:    "CodePath",
        status: "upcoming",
        badge:  "Spring 2026",
        desc:   "Invited volunteer for Spring 2026 programs: Resume Review Week, Mentorship Week, Technical Interview Week, and Behavioral Interview Week. Sessions March – May 2026.",
        url:    "https://www.codepath.org/about",
        label:  "Organization",
      },
      {
        org:    "UTRA Hacks",
        status: "completed",
        badge:  "January 2026",
        desc:   "Volunteer mentor at the UTRA Hacks Mentorship Program, providing technical guidance to participants during the hackathon.",
        url:    null,
        label:  null,
      },
      {
        org:    "305 Hack Edition Hackathon",
        status: "completed",
        badge:  "January 2026",
        desc:   "Served as volunteer mentor and judge, mentoring teams and evaluating project submissions during the event.",
        url:    "https://codecrunchglobal.vercel.app/home.html",
        label:  "Event Info",
      },
    ],
  },

  // ── Publications ──────────────────────────────────────────
  // Leave items: [] to show placeholder. Add papers like:
  // { year:"2024", type:"Journal Article", title:"...", venue:"...",
  //   links:[{ label:"DOI", url:"https://doi.org/..." }] }
  publications: {
    subtitle: "Selected journal and conference publications in FinTech, payments, secure systems, and cloud-native enterprise architecture. Each abstract page is a static HTML page under /public/publications so it can behave more like a journal article page and support search discovery.",
    profiles: [
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Aravind_Raghu4" },
      { label: "ORCID", url: "https://orcid.org/0009-0006-4340-3653" },
      { label: "Web of Science", url: "https://www.webofscience.com/wos/author/record/NMJ-9665-2025" },
    ],
    items: [
      {
        slug: "real-time-financial-risk-kafka-flink",
        status: "published",
        badge: "Published",
        year: "2025",
        type: "Journal Article",
        title: "A Novel Java-Based Framework for Real-Time Financial Risk Assessment and Anomaly Detection Using Apache Kafka and Apache Flink",
        authors: "Aravind Raghu",
        venue: "Journal of Information Systems Engineering and Management · Vol. 10 No. 36s (2025)",
        summary: "A Java-based streaming framework for real-time financial risk assessment and anomaly detection using Apache Kafka and Apache Flink.",
        publisherUrl: "https://www.jisem-journal.com/index.php/journal/article/view/6628",
        doi: "https://doi.org/10.52783/jisem.v10i36s.6628",
        abstractPage: "/publications/real-time-financial-risk-kafka-flink.html",
        pdfPath: "/papers/real-time-financial-risk-kafka-flink.pdf",
      },
      {
        slug: "fraud-detection-real-time-payments",
        status: "published",
        badge: "Published",
        year: "2025",
        type: "Journal Article",
        title: "AI-Driven Fraud Detection in Real-Time Payment Processing Systems: A Java-Based Approach",
        authors: "Aravind Raghu",
        venue: "Computer Fraud and Security · Volume 2024, Issue 12",
        summary: "A Java and Spring Boot microservices framework combining deep neural networks and rule-based heuristics for real-time fraud detection.",
        publisherUrl: "https://computerfraudsecurity.com/index.php/journal/article/view/632",
        doi: "https://doi.org/10.52710/cfs.632",
        abstractPage: "/publications/fraud-detection-real-time-payments.html",
        pdfPath: "/papers/fraud-detection-real-time-payments.pdf",
      },
      {
        slug: "oauth2-mfa-azure-ad-financial-security",
        status: "published",
        badge: "Published",
        year: "2025",
        type: "Journal Article",
        title: "Enhancing Financial Transaction Security Using OAuth2, MFA, and Azure AD Authentication: A Java-Based Integrated Approach",
        authors: "Aravind Raghu",
        venue: "International Journal of Computational and Experimental Science and Engineering · 11(2)",
        summary: "A layered authentication framework integrating OAuth2, MFA, and Azure Active Directory for secure real-time financial transactions.",
        publisherUrl: "https://www.ijcesen.com/index.php/ijcesen/article/view/2068",
        doi: "https://doi.org/10.22399/ijcesen.2068",
        abstractPage: "/publications/oauth2-mfa-azure-ad-financial-security.html",
        pdfPath: "/papers/oauth2-mfa-azure-ad-financial-security.pdf",
      },
      {
        slug: "context-aware-secure-fintech-apis",
        status: "published",
        badge: "Published",
        year: "2025",
        type: "Journal Article",
        title: "A Context Aware Framework for Secure Fintech APIs: Leveraging Java Spring Boot and OAuth 2.0 with Dynamic Token Adaptation",
        authors: "Aravind Raghu",
        venue: "Journal of Information Systems Engineering and Management · Vol. 10 No. 49s (2025)",
        summary: "A context-aware token adaptation framework for securing high-throughput fintech APIs with dynamic JWT scope, TTL, and rate limits.",
        publisherUrl: "https://www.jisem-journal.com/index.php/journal/article/view/9890",
        doi: "https://doi.org/10.52783/jisem.v10i49s.9890",
        abstractPage: "/publications/context-aware-secure-fintech-apis.html",
        pdfPath: "/papers/context-aware-secure-fintech-apis.pdf",
      },
      {
        slug: "hashicorp-vault-financial-services",
        status: "published",
        badge: "Published",
        year: "2025",
        type: "Journal Article",
        title: "Implementing HashiCorp Vault for Secure Credential Management in Financial Services: A Java-Centric Approach",
        authors: "Aravind Raghu",
        venue: "International Journal of Computational and Experimental Science and Engineering · 11(3)",
        summary: "A Java-centric secrets management architecture using HashiCorp Vault, dynamic secrets, encryption-as-a-service, and audit logging.",
        publisherUrl: "https://www.ijcesen.com/index.php/ijcesen/article/view/2473",
        doi: "https://doi.org/10.22399/ijcesen.2473",
        abstractPage: "/publications/hashicorp-vault-financial-services.html",
        pdfPath: "/papers/hashicorp-vault-financial-services.pdf",
      },
      {
        slug: "cloud-storage-costs-agri-lending-crm",
        status: "published",
        badge: "Published",
        year: "2025",
        type: "Conference Paper",
        title: "Reducing Cloud Storage Costs in Agri-Lending CRM Systems Using Intelligent Data Retention Policies",
        authors: "Karthik Nallani Chakravartula, Aravind Raghu",
        venue: "2025 8th International Conference on Algorithms, Computing and Artificial Intelligence (ACAI)",
        summary: "Conference paper on reducing cloud storage costs in agri-lending CRM environments through intelligent data retention policies.",
        publisherUrl: "https://doi.org/10.1109/ACAI68217.2025.11406232",
        doi: "https://doi.org/10.1109/ACAI68217.2025.11406232",
        abstractPage: "/publications/cloud-storage-costs-agri-lending-crm.html",
        pdfPath: "/papers/cloud-storage-costs-agri-lending-crm.pdf",
      },
      {
        slug: "ai-driven-decision-support-agricultural-lending",
        status: "published",
        badge: "Published",
        year: "2026",
        type: "Journal Article",
        title: "Implementing AI-Driven Decision Support in Agricultural Lending Through Predictive Analytics for Customer Relationship Management",
        authors: "Karthik Nallani Chakravartula, Aravind Raghu",
        venue: "Journal of Intelligent Management Decision · 5(1), 11-34",
        summary: "A pragmatic framework for predictive analytics and AI-enabled CRM workflows in agricultural lending environments.",
        publisherUrl: "https://www.acadlore.com/article/JIMD/2026_5_1/jimd050102",
        doi: "https://doi.org/10.56578/jimd050102",
        abstractPage: "/publications/ai-driven-decision-support-agricultural-lending.html",
        pdfPath: "/papers/ai-driven-decision-support-agricultural-lending.pdf",
      },
      {
        slug: "icft-2025-pending",
        status: "in-publishing",
        badge: "Presented & accepted",
        year: "2025",
        type: "Conference Paper",
        title: "ICFT 2025 paper — title and DOI to be added",
        authors: "Aravind Raghu",
        venue: "ICFT 2025 · In publishing",
        summary: "Placeholder entry added so the portfolio can show accepted conference work. Update this card once the final title, DOI, and PDF filename are available.",
        abstractPage: null,
        pdfPath: null,
        doi: null,
        publisherUrl: null,
      },
      {
        slug: "csci-2025-pending",
        status: "in-publishing",
        badge: "Presented & accepted",
        year: "2025",
        type: "Conference Paper",
        title: "CSCI 2025 paper — title and DOI to be added",
        authors: "Aravind Raghu",
        venue: "CSCI 2025 · In publishing",
        summary: "Placeholder entry added so the portfolio can show accepted conference work. Update this card once the final title, DOI, and PDF filename are available.",
        abstractPage: null,
        pdfPath: null,
        doi: null,
        publisherUrl: null,
      },
    ],
  },

  // ── Mentoring (booking) ───────────────────────────────────
  mentoring: {
    heading: "Free 1:1 Mentoring",
    desc:    "I offer free virtual sessions for engineers, career-changers, and builders. Sessions are agenda-driven and practical — we work on your real problems.",
    url:     "https://mentoring.aravindraghu.com", // ← replace with your booking URL
    topics: [
      { icon: "💬", title: "Career Guidance",    desc: "Senior-level thinking, roadmap planning, and interview preparation." },
      { icon: "🏗️", title: "System Design",      desc: "APIs, scalability trade-offs, resilience, and real-world constraints." },
      { icon: "🔒", title: "FinTech & Security", desc: "Payments, OAuth2, Zero Trust, and secure integration patterns." },
    ],
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    year: "2026",
  },
};
