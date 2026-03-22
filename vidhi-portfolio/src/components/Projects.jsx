import underwaterVideo from "../assets/videos/0_Underwater_Ocean_3840x2160.mp4";
import CardFlip from "./cardFlip";
import img1 from "../assets/photos/Screenshot (829).png";
import img2 from "../assets/photos/Screenshot (830).png";
import img3 from "../assets/photos/Screenshot (831).png";

const projects = [
  { title: "Project One", subtitle: "Firerisksim", description: "FireRiskSim is an AI-powered forest fire prediction and simulation platform that analyzes environmental and satellite-based data to predict fire-prone regions", features: ["React", "Rasterio", "Leaflet.js"], link: "https://github.com/...", img: img3 },
  { title: "Project Two", subtitle: "Streethealth", description: "StreetWealth is a financial management platform designed specifically for street vendors.", features: ["HTML, Tailwind CSS, JavaScript", "TensorFlow", "Flask"], link: "https://github.com/...", img: img2 },
  { title: "Project Three", subtitle: "Portfolio", description: "This very portfolio you are looking at!", features: ["React", "Vite", "CSS"], link: "#", img: img1 },
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

      {/* Bottom fade blend into footer */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "160px",
        background: "linear-gradient(to bottom, transparent, rgba(10, 30, 60, 0.98))",
        zIndex: 1,
      }} />

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

      {/* Redirect button */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex",
        justifyContent: "center",
        paddingBottom: "5rem",
      }}>
        <button
          onClick={() => {
            const section = document.getElementById("experience");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            padding: "0.85rem 2.2rem",
            borderRadius: "50px",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            border: "1.5px solid rgba(255,255,255,0.35)",
            color: "white",
            fontSize: "0.95rem",
            fontFamily: "serif",
            letterSpacing: "0.05em",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.22)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.12)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          🏆 View Experiences & Achievements
        </button>
      </div>

    </section>
  );
}