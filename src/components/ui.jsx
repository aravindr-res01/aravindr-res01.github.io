// src/components/ui.jsx — shared building blocks

export function ELink({ href, children, pill = false }) {
  const pillStyle = {
    padding: "7px 16px",
    borderRadius: 999,
    background: "#eff6ff",
    color: "#1d4ed8",
    border: "1px solid #bfdbfe",
    fontWeight: 600,
    fontSize: "0.84rem",
    textDecoration: "none",
    display: "inline-block",
    transition: "background 0.15s",
  };
  const inlineStyle = {
    color: "#2563eb",
    fontWeight: 600,
    fontSize: "0.84rem",
    textDecoration: "none",
  };
  if (!href) {
    return (
      <span style={{ color: "#94a3b8", fontStyle: "italic", fontSize: "0.82rem" }}>
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={pill ? pillStyle : inlineStyle}
    >
      {children}
    </a>
  );
}

const BADGE_STYLES = {
  ongoing:   { bg: "#dcfce7", color: "#166534", border: "#bbf7d0" },
  upcoming:  { bg: "#dbeafe", color: "#1e40af", border: "#bfdbfe" },
  completed: { bg: "#f3f4f6", color: "#4b5563", border: "#e5e7eb" },
};

export function StatusBadge({ status, label }) {
  const s = BADGE_STYLES[status] || BADGE_STYLES.completed;
  return (
    <span style={{
      padding: "3px 10px",
      borderRadius: 999,
      fontSize: "0.71rem",
      fontWeight: 700,
      background: s.bg,
      color: s.color,
      border: `1px solid ${s.border}`,
      whiteSpace: "nowrap",
    }}>
      {label}
    </span>
  );
}

export function Card({ children, style = {} }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e8edf3",
      borderRadius: 14,
      padding: "20px 22px",
      boxShadow: "0 1px 6px rgba(15,23,42,0.05)",
      ...style,
    }}>
      {children}
    </div>
  );
}

export function SectionHead({ title, sub }) {
  return (
    <div style={{ marginBottom: 26 }}>
      <h2 style={{
        margin: "0 0 6px",
        fontSize: "1.5rem",
        fontFamily: "'DM Serif Display', Georgia, serif",
        color: "#0f172a",
        fontWeight: 400,
      }}>
        {title}
      </h2>
      {sub && (
        <p style={{ margin: 0, color: "#64748b", fontSize: "0.93rem", maxWidth: 660 }}>
          {sub}
        </p>
      )}
    </div>
  );
}
