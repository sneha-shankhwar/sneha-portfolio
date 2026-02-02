function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 20px",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2.7rem", marginBottom: "20px" }}>
        Skills & Problem Solving 🧠
      </h2>

      <p style={{ maxWidth: "850px", margin: "0 auto 20px", color: "#94a3b8" }}>
        Strong in data structures and algorithms. Solved 230+ problems on LeetCode
        with a focus on clean, optimized, and logical solutions — along with real-world
        app and website development.
      </p>

      <p style={{ marginBottom: "50px" }}>
        🧠 <b>LeetCode Profile:</b>{" "}
        <a
          href="https://leetcode.com/your-username"
          target="_blank"
          style={{ color: "#38bdf8", textDecoration: "none", fontWeight: "bold" }}
        >
          View my problem-solving work →
        </a>
      </p>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px"
        }}
      >
        <SkillCard title="Programming" items="Python, JavaScript, TypeScript" />
        <SkillCard title="App Development" items="React Native, Android Studio" />
        <SkillCard title="Web Development" items="React, HTML, CSS" />
        <SkillCard title="Backend Development" items="Python, SQL, REST APIs, Database Design" />

        <SkillCard title="Problem Solving" items="250+ LeetCode, DSA, Algorithms" />
        <SkillCard title="Core Topics" items="Arrays, Trees, Recursion, DP" />
        <SkillCard title="Tools" items="Git, GitHub, VS Code" />
      </div>
    </section>
  );
}

function SkillCard({ title, items }) {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "25px",
        borderRadius: "14px",
        boxShadow: "0 0 20px rgba(56,189,248,0.12)"
      }}
    >
      <h3 style={{ marginBottom: "10px", color: "#38bdf8" }}>
        {title}
      </h3>
      <p>{items}</p>
    </div>
  );
}

export default Skills;
