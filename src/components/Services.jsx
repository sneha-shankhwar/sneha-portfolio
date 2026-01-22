function Services() {
  return (
    <section
      style={{
        padding: "100px 20px",
        backgroundColor: "#020617",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2.7rem", marginBottom: "20px" }}>
        What I Do 💼
      </h2>

      <p style={{ maxWidth: "800px", margin: "0 auto 60px", color: "#94a3b8" }}>
        I design and build digital products with a strong focus on logic, clean UI,
        and real-world usability. Here’s how I can help you.
      </p>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px"
        }}
      >
        <ServiceCard
          title="📱 Mobile App Development"
          text="I build modern, high-performance mobile apps using React Native — from idea to Play Store ready products."
        />

        <ServiceCard
          title="🌐 Website Development"
          text="I create fast, responsive, and professional websites for personal brands, startups, and products."
        />

        <ServiceCard
          title="🎨 Frontend & UI Building"
          text="I design and develop clean, user-focused interfaces that feel smooth, modern, and intuitive."
        />

        <ServiceCard
          title="🧠 Problem Solving Systems"
          text="With a strong DSA background and 230+ LeetCode problems solved, I build logic-driven, scalable solutions."
        />
      </div>
    </section>
  );
}

function ServiceCard({ title, text }) {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "30px",
        borderRadius: "16px",
        textAlign: "left",
        boxShadow: "0 0 22px rgba(56,189,248,0.12)"
      }}
    >
      <h3 style={{ marginBottom: "12px", color: "#38bdf8" }}>
        {title}
      </h3>
      <p style={{ color: "#e5e7eb", lineHeight: "1.6" }}>
        {text}
      </p>
    </div>
  );
}

export default Services;
