function Hero() {
  return (
    <section
      style={{
        minHeight: "75vh",   // 👈 reduced height (was 90vh)
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "60px 20px"
      }}
    >
      <p
        style={{
          color: "#38bdf8",
          marginBottom: "8px",
          letterSpacing: "2px",
          fontSize: "1.4rem",
          fontWeight: "600"
        }}
      >
        CREATIVE SOFTWARES
      </p>

      <h1 style={{ fontSize: "3rem", marginBottom: "8px" }}>
        Sneha
      </h1>

      <h2
        style={{
          color: "#e5e7eb",
          marginBottom: "18px",
          fontWeight: "500",
          fontSize: "1.4rem"
        }}
      >
        Product-Focused App & Web Developer
      </h2>

      <p
        style={{
          maxWidth: "720px",
          lineHeight: "1.7",
          marginBottom: "10px",
          color: "#cbd5f5",
          fontSize: "1.05rem"
        }}
      >
        I build real digital products — mobile apps and modern websites — with strong
        foundations in problem solving, data structures, and clean UI design.
      </p>

      <p
        style={{
          maxWidth: "720px",
          lineHeight: "1.7",
          color: "#cbd5f5",
          fontSize: "1.05rem"
        }}
      >
        Creator of <b>Motivation Booster</b>, a multilingual motivational app built with
        real authors, real content, and a product mindset.
      </p>

      <div
        style={{
          marginTop: "28px",
          display: "flex",
          gap: "16px",
          flexWrap: "wrap"
        }}
      >
        <a
          href="#projects"
          style={{
            padding: "11px 24px",
            background: "#38bdf8",
            color: "#020617",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "0.95rem"
          }}
        >
          View My Work
        </a>

        <a
          href="#contact"
          style={{
            padding: "11px 24px",
            border: "1px solid #38bdf8",
            color: "#38bdf8",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "0.95rem"
          }}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
