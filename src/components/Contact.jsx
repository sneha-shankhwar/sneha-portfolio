function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2.7rem", marginBottom: "20px" }}>
        Let’s Work Together 🤝
      </h2>

      <p style={{ maxWidth: "800px", margin: "0 auto 50px", color: "#94a3b8" }}>
        I’m open to app projects, website development work, and collaborations.
        If you have an idea or need a developer, feel free to reach out.
      </p>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#0f172a",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(56,189,248,0.15)"
        }}
      >
        <p style={{ marginBottom: "12px" }}>
          📧 <b>Email:</b> creativesoftwares96@gmail.com
        </p>

        <p style={{ marginBottom: "12px" }}>
          📞 <b>Phone:</b> 9560939353
        </p>

        <p style={{ marginBottom: "12px" }}>
          💻 <b>GitHub:</b>{" "}
          <a
            href="https://github.com/your-username"
            target="_blank"
            style={{ color: "#38bdf8" }}
          >
            View profile
          </a>
        </p>

        <p style={{ marginBottom: "12px" }}>
          🔗 <b>LinkedIn:</b>{" "}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            style={{ color: "#38bdf8" }}
          >
            View profile
          </a>
        </p>

        <p>
          🧠 <b>LeetCode:</b>{" "}
          <a
            href="https://leetcode.com/your-username"
            target="_blank"
            style={{ color: "#38bdf8" }}
          >
            View my profile
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
