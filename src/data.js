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
    subtitle: "Academic and technical publications in FinTech, distributed systems, and secure software engineering.",
    profiles: [
      { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Aravind_Raghu4" },
      { label: "ORCID",          url: "https://orcid.org/0009-0006-4340-3653" },
      { label: "Web of Science", url: "https://www.webofscience.com/wos/author/record/NMJ-9665-2025" },
    ],
    items: [
      // Add publications here
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
