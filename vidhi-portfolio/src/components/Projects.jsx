import underwaterVideo from "../assets/videos/0_Underwater_Ocean_3840x2160.mp4";
import CardFlip from "./cardFlip";
import Carousel from "./carousels";

const projects = [
  { title: "Project One", subtitle: "MERN Stack App", description: "Full stack app with auth and REST API.", features: ["React", "Node.js", "MongoDB"], link: "https://github.com/..." },
  { title: "Project Two", subtitle: "AI/ML Model", description: "Machine learning model for image classification.", features: ["Python", "TensorFlow", "Flask"], link: "https://github.com/..." },
  { title: "Project Three", subtitle: "Portfolio", description: "This very portfolio you are looking at!", features: ["React", "Vite", "CSS"], link: "#" },
];

export default function Projects() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>

      {/* Underwater background video */}
      <video
        autoPlay muted loop
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      >
        <source src={underwaterVideo} type="video/mp4" />
      </video>

      {/* Cards grid */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        padding: "6rem 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        {projects.map((p, i) => (
          <CardFlip key={i} {...p} />
        ))}
      </div>

    </section>
  );
}