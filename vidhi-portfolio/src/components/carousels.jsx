import { useState } from "react";
import image1 from "../assets/photos/WhatsApp Image 2026-01-08 at 21.06.21.jpeg"
import image2 from "../assets/photos/WhatsApp Image 2026-03-03 at 23.42.49.jpeg"
import image3 from "../assets/photos/WhatsApp Image 2026-03-04 at 10.18.09.jpeg"

const projects = [
  { title: "JC Member of Namespace BPIT", description: "An active mentor and participant ", features: [], img: image1, link: "https://www.instagram.com/p/DNya2xa5Aza/?igsh=NTYzem50Z3Q1MWFi" },
  { title: "Active member of Kalam BPIT", description: "Actively participating in literary events ", features: [], img: image2, link: "https://www.instagram.com/kalam.bpit?igsh=cWx3MnFldWM1anZ2" },
  { title: "Member of Avaran", description: "A member of dramatics society of BPIT", features: [], img: image3, link: "https://www.instagram.com/p/DFxvtdxS1jv/?igsh=N3c0aXRoa2YzbzQx" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(null);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  const getPosition = (i) => {
    if (i === current) return "center";
    if (i === (current - 1 + projects.length) % projects.length) return "left";
    if (i === (current + 1) % projects.length) return "right";
    return "hidden";
  };

  const positionStyles = {
    center: { transform: "translateX(0) scale(1)", zIndex: 3, opacity: 1 },
    left:   { transform: "translateX(-220px) scale(0.85)", zIndex: 2, opacity: 0.7 },
    right:  { transform: "translateX(220px) scale(0.85)", zIndex: 2, opacity: 0.7 },
    hidden: { transform: "translateX(0) scale(0.7)", zIndex: 1, opacity: 0 },
  };

  return (
    <div style={{ position: "relative", zIndex: 2, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

      <p style={{ color: "white", fontFamily:"emoji" , fontSize: "1.5rem", marginBottom: "3rem", opacity: 0.9 }}>
        Hi ,i am a student of Btech ,computer science and engineering 2nd year at BPIT .
      </p>

      {/* Carousel */}
      <div style={{ position: "relative", width: "100%", height: "380px", display: "flex", alignItems: "center", justifyContent: "center" }}>

        {projects.map((p, i) => {
          const pos = getPosition(i);
          return (
            <div
              key={i}
              onClick={() => pos === "center" && setFlipped(flipped === i ? null : i)}
              style={{
                position: "absolute",
                width: "280px",
                height: "340px",
                transition: "all 0.6s ease",
                cursor: pos === "center" ? "pointer" : "default",
                perspective: "1000px",
                ...positionStyles[pos],
              }}
            >
              {/* Inner flip container */}
              <div style={{
                width: "100%",
                height: "100%",
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "transform 0.7s ease",
                transform: flipped === i ? "rotateY(180deg)" : "rotateY(0deg)",
              }}>

                {/* FRONT */}
                <div style={{
                  position: "absolute", inset: 0,
                  backfaceVisibility: "hidden",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  color: "white",
                }}>
                  {/* Paperclip */}
                  <div style={{ position: "absolute", top: "-16px", left: "20px", fontSize: "1.8rem", transform: "rotate(-20deg)" }}>📎</div>

                  {/* Project image — opacity raised to 0.85 so photos are clearly visible */}
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
                  />

                  <div style={{ position: "relative", padding: "1.2rem", background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}>
                    <h3 style={{ fontSize: "1.2rem", fontFamily: "serif" }}>{p.title}</h3>
                    <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>{p.subtitle}</p>
                    <p style={{ fontSize: "0.7rem", opacity: 0.5, marginTop: "0.3rem" }}>Click to flip 👆</p>
                  </div>
                </div>

                {/* BACK */}
                <div style={{
                  position: "absolute", inset: 0,
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(14px)",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  padding: "1.5rem",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontFamily: "serif", marginBottom: "0.5rem" }}>{p.title}</h3>
                    <p style={{ fontSize: "0.82rem", opacity: 0.8, lineHeight: 1.5, marginBottom: "1rem" }}>{p.description}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                      {p.features.map((f, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem" }}>
                          <span style={{ color: "#7dd3fc" }}>→</span> {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    onClick={() => window.open(p.link, "_blank")}
                    style={{
                      padding: "0.6rem",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      textAlign: "center",
                      fontSize: "0.88rem",
                      cursor: "pointer",
                    }}
                  >
                    social media handles
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem" }}>
        <button onClick={prev} style={{
          background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)",
          color: "white", borderRadius: "50%", width: "45px", height: "45px",
          fontSize: "1.2rem", cursor: "pointer",
        }}>←</button>
        <button onClick={next} style={{
          background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)",
          color: "white", borderRadius: "50%", width: "45px", height: "45px",
          fontSize: "1.2rem", cursor: "pointer",
        }}>→</button>
      </div>

    </div>
  );
}