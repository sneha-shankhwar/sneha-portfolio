function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "rgba(2,6,23,0.9)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 40px",
        zIndex: 1000,
        borderBottom: "1px solid rgba(148,163,184,0.1)"
      }}
    >
      {/* BRAND */}
      <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
        Sneha <span style={{ color: "#38bdf8" }}>| Creative Softwares</span>
      </div>

      {/* LINKS */}
      <div style={{ display: "flex", gap: "26px" }}>
        <NavLink href="#projects" text="Work" />
        <NavLink href="#skills" text="Skills" />
        <NavLink href="#contact" text="Contact" />
      </div>
    </nav>
  );
}

function NavLink({ href, text }) {
  return (
    <a
      href={href}
      style={{
        color: "#e5e7eb",
        textDecoration: "none",
        fontSize: "0.95rem"
      }}
      onMouseEnter={e => (e.target.style.color = "#38bdf8")}
      onMouseLeave={e => (e.target.style.color = "#e5e7eb")}
    >
      {text}
    </a>
  );
}

export default Navbar;
