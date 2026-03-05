import { useState } from "react";
import img1 from "../assets/photos/Screenshot (829).png";
import img2 from "../assets/photos/Screenshot (830).png";
import img3 from "../assets/photos/Screenshot (831).png";

export const projectImages = [img1, img2, img3];

export default function CardFlip({
  title = "Project One",
  subtitle = "MERN Stack App",
  description = "A full stack application built with MongoDB, Express, React and Node.",
  features = ["React", "Node.js", "MongoDB", "REST API"],
  link = "#",
  img = img1,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{
        perspective: "2000px",
        width: "280px",
        height: "320px",
        cursor: "pointer",
      }}
    >
      {/* Card inner */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.7s ease",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            border: "1.5px solid rgba(255,255,255,0.25)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "1.5rem",
            color: "white",
            overflow: "hidden",
          }}
        >
          {/* Paperclip */}
          <div style={{
            position: "absolute",
            top: "-18px",
            left: "20px",
            fontSize: "1.8rem",
            transform: "rotate(-20deg)",
          }}>📎</div>

          {/* Bubbles decoration */}
          <div style={{ position: "absolute", top: "1rem", right: "1rem", opacity: 0.4 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", border: "1px solid white", marginBottom: 6 }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", border: "1px solid white" }} />
          </div>

          {/* Small image box */}
          <div style={{
            position: "absolute",
            top: "1.2rem",
            left: "50%",
            transform: "translateX(-50%)",
            width: "160px",
            height: "110px",
            borderRadius: "12px",
            overflow: "hidden",
            border: "2px solid rgba(255,255,255,0.35)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          }}>
            <img
              src={img}
              alt={title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <h3 style={{ fontSize: "1.3rem", fontFamily: "serif", marginBottom: "0.4rem" }}>{title}</h3>
          <p style={{ fontSize: "1rem", opacity: 0.8 }}>{subtitle}</p>
          <p style={{ fontSize: "0.75rem", opacity: 0.5, marginTop: "0.5rem" }}>Hover to see more →</p>
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            border: "1.5px solid rgba(255,255,255,0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1.5rem",
            color: "white",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.2rem", fontFamily: "serif", marginBottom: "0.5rem" }}>{title}</h3>
            <p style={{ fontSize: "0.85rem", opacity: 0.75, marginBottom: "1rem", lineHeight: 1.5 }}>{description}</p>

            {/* Features list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {features.map((f, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.85rem",
                  opacity: isFlipped ? 1 : 0,
                  transform: isFlipped ? "translateX(0)" : "translateX(-10px)",
                  transition: `all 0.4s ease ${i * 100 + 200}ms`,
                }}>
                  <span style={{ color: "#7dd3fc" }}>→</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* View project button */}
          <div
            onClick={() => window.open(link, "_blank")}
            style={{
              marginTop: "1rem",
              padding: "0.6rem 1rem",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              textAlign: "center",
              fontSize: "0.9rem",
              fontWeight: 500,
              transition: "background 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
          >
            View Project →
          </div>
        </div>
      </div>
    </div>
  );
}