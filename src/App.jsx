// src/App.jsx — layout, hero, nav, tab routing

import { useState, useEffect } from "react";
import { DATA } from "./data.js";
import {
  AboutPanel, ExpertisePanel, PeerReviewPanel,
  MentorshipPanel, PublicationsPanel, MentoringPanel,
} from "./components/panels.jsx";

const TABS = [
  { id: "about",        label: "About",        Panel: AboutPanel        },
  { id: "expertise",    label: "Expertise",    Panel: ExpertisePanel    },
  { id: "peerreview",   label: "Peer Review",  Panel: PeerReviewPanel   },
  { id: "mentorship",   label: "Mentorship",   Panel: MentorshipPanel   },
  { id: "publications", label: "Publications", Panel: PublicationsPanel },
  { id: "mentoring",    label: "Mentoring",    Panel: MentoringPanel    },
];

export default function App() {
  const [tab, setTab]           = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const d = DATA.profile;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const ActivePanel = TABS.find(t => t.id === tab)?.Panel ?? AboutPanel;

  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: "'DM Sans', system-ui, sans-serif",
      background: "linear-gradient(160deg,#eef4ff 0%,#f8fafc 35%,#f0fdf4 70%,#f8fafc 100%)",
      color: "#0f172a",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        button { font-family: inherit; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        a { transition: opacity 0.15s; }
        a:hover { opacity: 0.82; }
      `}</style>

      {/* STICKY NAV */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: scrolled ? "rgba(248,250,252,0.92)" : "rgba(248,250,252,0.65)",
        backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
        borderBottom: `1px solid ${scrolled ? "#dde3ed" : "transparent"}`,
        transition: "all 0.25s",
      }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <span style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: "1.15rem", color: "#0f172a" }}>
            {d.name}
          </span>
          <nav style={{ display: "flex", gap: 4 }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                padding: "7px 14px", borderRadius: 999, border: "none", cursor: "pointer",
                fontFamily: "inherit", fontSize: "0.83rem", fontWeight: 600,
                background: tab === t.id ? "#0f172a" : "transparent",
                color: tab === t.id ? "#fff" : "#64748b",
                transition: "all 0.16s",
              }}>{t.label}</button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "56px 24px 44px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: "inline-block", padding: "5px 13px", borderRadius: 999, fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe", marginBottom: 18 }}>
              {d.tagline}
            </div>
            <h1 style={{ margin: "0 0 10px", fontSize: "2.85rem", lineHeight: 1.1, fontFamily: "'DM Serif Display',Georgia,serif", fontWeight: 400, color: "#0f172a", letterSpacing: "-0.025em" }}>
              {d.name}
            </h1>
            <p style={{ margin: "0 0 22px", color: "#475569", fontSize: "1.05rem", lineHeight: 1.6 }}>{d.title}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {d.links.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" style={{ padding: "7px 14px", borderRadius: 999, fontSize: "0.8rem", fontWeight: 600, background: "#fff", border: "1px solid #e2e8f0", color: "#374151", textDecoration: "none", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                  {l.label}
                </a>
              ))}
              <a href={`mailto:${d.email}`} style={{ padding: "7px 14px", borderRadius: 999, fontSize: "0.8rem", fontWeight: 700, background: "#0f172a", color: "#fff", textDecoration: "none" }}>Email</a>
            </div>
          </div>
          <div style={{ width: 148, height: 148, borderRadius: "50%", overflow: "hidden", border: "3px solid #fff", boxShadow: "0 8px 28px rgba(15,23,42,0.12)", flexShrink: 0, background: "linear-gradient(135deg,#dbeafe,#e0e7ff)" }}>
            <img src={d.photo} alt={d.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { e.target.style.display = "none"; }} />
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: 36, background: "#fff", border: "1px solid #e8edf3", borderRadius: 16, overflow: "hidden", boxShadow: "0 1px 6px rgba(15,23,42,0.05)" }}>
          {d.stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "18px 10px", borderRight: i < d.stats.length - 1 ? "1px solid #f1f5f9" : "none" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", lineHeight: 1, fontFamily: "'DM Serif Display',Georgia,serif" }}>{s.number}</div>
              <div style={{ color: "#94a3b8", fontSize: "0.76rem", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TAB BAR + PANEL */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", borderBottom: "2px solid #e2e8f0", marginBottom: 28 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "10px 18px", border: "none", background: "transparent",
              cursor: "pointer", fontFamily: "inherit", fontSize: "0.87rem", fontWeight: 600,
              color: tab === t.id ? "#2563eb" : "#94a3b8",
              borderBottom: tab === t.id ? "2px solid #2563eb" : "2px solid transparent",
              marginBottom: "-2px", transition: "all 0.16s",
            }}>{t.label}</button>
          ))}
        </div>
        <div key={tab} style={{ animation: "fadeUp 0.22s ease" }}>
          <ActivePanel />
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #e2e8f0", background: "#fff", padding: "20px 24px", textAlign: "center", color: "#94a3b8", fontSize: "0.83rem" }}>
        © {DATA.footer.year} {d.name} &nbsp;·&nbsp;
        <a href={`mailto:${d.email}`} style={{ color: "#94a3b8", textDecoration: "none" }}>{d.email}</a>
        &nbsp;·&nbsp; Built with React &amp; GitHub Pages
      </footer>
    </div>
  );
}
