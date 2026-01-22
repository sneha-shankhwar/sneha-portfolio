import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "110px 20px",
        backgroundColor: "#020617",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2.8rem", marginBottom: "15px" }}>
        Selected Work 🚀
      </h2>

      <p style={{ color: "#94a3b8", marginBottom: "60px" }}>
        Real products I’ve designed and built.
      </p>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "35px"
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "30px",
        borderRadius: "18px",
        textAlign: "left",
        boxShadow: "0 0 25px rgba(56,189,248,0.12)",
        transition: "0.3s",
        cursor: "pointer"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 0 40px rgba(56,189,248,0.25)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 0 25px rgba(56,189,248,0.12)";
      }}
    >
      <p style={{ color: "#38bdf8", marginBottom: "6px", fontSize: "0.9rem" }}>
        {project.type}
      </p>

      <h3 style={{ fontSize: "1.7rem", marginBottom: "10px" }}>
        {project.title}
      </h3>

      <p style={{ color: "#94a3b8", marginBottom: "15px", lineHeight: "1.6" }}>
        {project.description}
      </p>

      <ul style={{ paddingLeft: "18px", lineHeight: "1.7", marginBottom: "15px" }}>
        {project.features.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p>
        <b>Tech:</b> {project.tech}
      </p>

      <p style={{ marginTop: "10px", color: "#38bdf8" }}>
        {project.link}
      </p>
    </div>
  );
}

export default Projects;
