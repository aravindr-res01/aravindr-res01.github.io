// src/components/panels.jsx — one component per tab

import { DATA } from "../data.js";
import { Card, ELink, SectionHead, StatusBadge } from "./ui.jsx";

/* ── About ──────────────────────────────────────────────── */
export function AboutPanel() {
  const d = DATA.profile;
  return (
    <div>
      <SectionHead title="About Me" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 22 }}>
        {d.stats.map((s, i) => (
          <Card key={i} style={{ textAlign: "center", padding: "16px 10px" }}>
            <div style={{ fontSize: "1.7rem", fontWeight: 800, color: "#0f172a", lineHeight: 1, fontFamily: "'DM Serif Display',Georgia,serif" }}>
              {s.number}
            </div>
            <div style={{ color: "#94a3b8", fontSize: "0.77rem", marginTop: 5, fontWeight: 500 }}>
              {s.label}
            </div>
          </Card>
        ))}
      </div>
      <Card>
        {d.about.map((p, i) => (
          <p key={i} style={{ margin: i === 0 ? "0 0 12px" : 0, color: "#334155", lineHeight: 1.8, fontSize: "0.96rem" }}>
            {p}
          </p>
        ))}
      </Card>
    </div>
  );
}

/* ── Expertise ──────────────────────────────────────────── */
export function ExpertisePanel() {
  return (
    <div>
      <SectionHead title="Technical Expertise" sub="Core areas of engineering focus built over 10+ years in FinTech." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {DATA.expertise.map((item, i) => (
          <Card key={i}>
            <div style={{ fontSize: "1.55rem", marginBottom: 10 }}>{item.icon}</div>
            <h3 style={{ margin: "0 0 6px", fontSize: "0.97rem", color: "#0f172a" }}>{item.title}</h3>
            <p style={{ margin: 0, color: "#64748b", fontSize: "0.87rem", lineHeight: 1.65 }}>{item.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ── Peer Review ────────────────────────────────────────── */
export function PeerReviewPanel() {
  const d = DATA.peerReview;
  return (
    <div>
      <SectionHead title="Peer Review & Academic Judging" sub={d.subtitle} />

      {/* Stat boxes */}
      <div style={{ display: "flex", gap: 14, marginBottom: 24 }}>
        {d.stats.map((s, i) => (
          <div key={i} style={{
            flex: 1, textAlign: "center", padding: "18px 10px",
            background: "linear-gradient(135deg,#eff6ff,#f0f9ff)",
            border: "1px solid #bfdbfe", borderRadius: 14,
          }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#1d4ed8", lineHeight: 1, fontFamily: "'DM Serif Display',Georgia,serif" }}>
              {s.number}
            </div>
            <div style={{ color: "#3b82f6", fontSize: "0.8rem", marginTop: 5, fontWeight: 600 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Fields */}
      <div style={{ marginBottom: 22 }}>
        <p style={{ margin: "0 0 10px", fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
          Fields Covered
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {d.fields.map((f, i) => (
            <span key={i} style={{ padding: "5px 13px", borderRadius: 999, fontSize: "0.81rem", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#475569" }}>
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Judging roles */}
      <Card style={{ marginBottom: 22 }}>
        <p style={{ margin: "0 0 14px", fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
          Judging & Committee Roles
        </p>
        {d.roles.map((r, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            gap: 12, padding: "12px 0",
            borderBottom: i < d.roles.length - 1 ? "1px solid #f1f5f9" : "none",
          }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0f172a" }}>{r.role}</div>
              <div style={{ color: "#64748b", fontSize: "0.84rem", marginTop: 2 }}>{r.org}</div>
            </div>
            <ELink href={r.url}>{r.url ? `${r.label} →` : r.label}</ELink>
          </div>
        ))}
      </Card>

      {/* Reviewer profiles */}
      <div>
        <p style={{ margin: "0 0 10px", fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
          Verified Reviewer Profiles
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {d.profiles.map((p, i) => (
            <ELink key={i} href={p.url} pill>{p.label}</ELink>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Mentorship ─────────────────────────────────────────── */
export function MentorshipPanel() {
  const d = DATA.mentorship;
  return (
    <div>
      <SectionHead title="Volunteer Mentorship" sub={d.subtitle} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {d.programs.map((p, i) => (
          <Card key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
              <h3 style={{ margin: 0, fontSize: "0.96rem", color: "#0f172a" }}>{p.org}</h3>
              <StatusBadge status={p.status} label={p.badge} />
            </div>
            <p style={{ margin: 0, color: "#64748b", fontSize: "0.86rem", lineHeight: 1.62, flexGrow: 1 }}>
              {p.desc}
            </p>
            {p.url && <ELink href={p.url}>{p.label} →</ELink>}
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ── Publications ───────────────────────────────────────── */
export function PublicationsPanel() {
  const d = DATA.publications;
  return (
    <div>
      <SectionHead title="Publications & Research" sub={d.subtitle} />
      {d.items.length === 0 ? (
        <Card style={{ textAlign: "center", padding: "50px 24px" }}>
          <div style={{ fontSize: "2.4rem", marginBottom: 12 }}>📄</div>
          <p style={{ margin: "0 0 18px", color: "#64748b", fontSize: "0.95rem" }}>
            Publications will be listed here. View current work on academic profiles:
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10 }}>
            {d.profiles.map((p, i) => (
              <ELink key={i} href={p.url} pill>{p.label}</ELink>
            ))}
          </div>
        </Card>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {d.items.map((item, i) => (
            <Card key={i}>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <span style={{ padding: "2px 9px", borderRadius: 999, fontSize: "0.74rem", fontWeight: 700, background: "#f1f5f9", color: "#475569", border: "1px solid #e2e8f0" }}>
                  {item.year}
                </span>
                <span style={{ padding: "2px 9px", borderRadius: 999, fontSize: "0.74rem", fontWeight: 700, background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe" }}>
                  {item.type}
                </span>
              </div>
              <h3 style={{ margin: "0 0 4px", fontSize: "0.97rem", color: "#0f172a" }}>{item.title}</h3>
              <p style={{ margin: "0 0 10px", color: "#64748b", fontSize: "0.86rem" }}>{item.venue}</p>
              <div style={{ display: "flex", gap: 14 }}>
                {item.links.map((l, j) => (
                  <ELink key={j} href={l.url}>{l.label} →</ELink>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Mentoring ──────────────────────────────────────────── */
export function MentoringPanel() {
  const d = DATA.mentoring;
  return (
    <div>
      <SectionHead title="1:1 Mentoring" sub="Practical, free sessions for engineers at any stage." />
      <Card style={{
        background: "linear-gradient(135deg,#f0f9ff,#eff6ff)",
        border: "1px solid #bfdbfe",
        textAlign: "center",
        padding: "44px 32px",
        marginBottom: 16,
      }}>
        <div style={{ fontSize: "2.6rem", marginBottom: 12 }}>🎯</div>
        <h2 style={{ margin: "0 0 10px", fontFamily: "'DM Serif Display',Georgia,serif", fontSize: "1.75rem", fontWeight: 400, color: "#0f172a" }}>
          {d.heading}
        </h2>
        <p style={{ margin: "0 auto 26px", color: "#475569", fontSize: "0.97rem", maxWidth: 500, lineHeight: 1.72 }}>
          {d.desc}
        </p>
        <a href={d.url} style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "12px 26px", borderRadius: 999,
          background: "#0f172a", color: "#fff",
          fontWeight: 700, fontSize: "0.92rem", textDecoration: "none",
          boxShadow: "0 4px 14px rgba(15,23,42,0.18)",
        }}>
          Schedule a Free Session →
        </a>
      </Card>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
        {d.topics.map((t, i) => (
          <Card key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>{t.icon}</div>
            <h3 style={{ margin: "0 0 5px", fontSize: "0.88rem", color: "#0f172a" }}>{t.title}</h3>
            <p style={{ margin: 0, color: "#64748b", fontSize: "0.82rem", lineHeight: 1.6 }}>{t.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
