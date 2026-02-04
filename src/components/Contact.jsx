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
        {/* ✅ EMAIL (works on phone + laptop) */}
        <p style={{ marginBottom: "12px" }}>
          📧 <b>Email:</b>{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=creativesoftwares96@gmail.com&su=Project%20Inquiry&body=Hello%20Sneha,"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            creativesoftwares96@gmail.com
          </a>
        </p>

        {/* ✅ PHONE (opens dialer) */}
        <p style={{ marginBottom: "12px" }}>
          📞 <b>Phone:</b>{" "}
          <a
            href="tel:9548488443"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            9548488443
          </a>
        </p>

        {/* GitHub */}
        <p style={{ marginBottom: "12px" }}>
          💻 <b>GitHub:</b>{" "}
          <a
            href="https://github.com/"
            target="_blank"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            View profile
          </a>
        </p>

        {/* LinkedIn */}
        <p style={{ marginBottom: "12px" }}>
          🔗 <b>LinkedIn:</b>{" "}
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            View profile
          </a>
        </p>

        {/* LeetCode */}
        <p>
          🧠 <b>LeetCode:</b>{" "}
          <a
            href="https://leetcode.com/u/sneha_shankhwar/"
            target="_blank"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            View my profile
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
