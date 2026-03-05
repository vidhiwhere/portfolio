import { useState } from "react";
import underwaterVideo from "../assets/videos/0_Underwater_Ocean_3840x2160.mp4";

const hackathons = [
  {
    emoji: "🏆",
    title: "Best UI/UX Award",
    event: "HackAura 2025 — Geeks Hive",
    description: "Solo project awarded Best UI/UX for designing an intuitive, visually refined product from ideation to implementation.",
    tag: "Winner",
    tagColor: "#fbbf24",
  },
  {
    emoji: "💡",
    title: "StreetWealth",
    event: "Tutedude Hackathon",
    description: "Built a financial management platform for street vendors with digital ledger, micro-loans access & gamified learning.",
    tag: "Participant",
    tagColor: "#7dd3fc",
  },
  {
    emoji: "🌿",
    title: "Eco-Hackathon — TeamByte",
    event: "Technex'25 · IIT BHU",
    description: "Developed an AI & data analytics solution for Disaster Prediction & Management, representing BPIT.",
    tag: "Participant",
    tagColor: "#7dd3fc",
  },
  {
    emoji: "⚡",
    title: "SuperNova Hackathon",
    event: "GL Bajaj Institute · Team Mindluster",
    description: "Collaborated in a fast-paced innovation event organized by Dept. of CSE-AIML and Abhyudaya Club.",
    tag: "Participant",
    tagColor: "#7dd3fc",
  },
  {
    emoji: "💧",
    title: "Smart Delhi Ideathon",
    event: "Vigyan Bhawan, Delhi",
    description: "Pitched 'Maximizing Water Efficiency: Making Every Drop Count in Delhi' — focusing on sustainable water use in the capital.",
    tag: "Participant",
    tagColor: "#7dd3fc",
  },
  {
    emoji: "🧠",
    title: "NS-Hacks 2025 — Team Thunderbird",
    event: "NAMESPACE BPIT",
    description: "Showcased Smart Study Organizer, a tool to make learning smarter and more efficient. Received Certificate of Participation.",
    tag: "Participant",
    tagColor: "#7dd3fc",
  },
];

const achievements = [
  {
    emoji: "🎤",
    title: "Special Mention — Hindi Slam Poetry",
    event: "KavyotKarsh 2.0 · Shyam Lal College, DU",
    description: "Recognised at the Hindi Poetry Competition held on 16 Feb 2026, organised by Shyam Lal College, University of Delhi.",
  },
  {
    emoji: "🌍",
    title: "Campus Ambassador — E-Summit 2025",
    event: "IIT Roorkee E-Cell",
    description: "Officially worked as Campus Ambassador for E-Summit 2025, IIT Roorkee — nurturing entrepreneurial spirit on campus.",
  },
  {
    emoji: "🚀",
    title: "E-Cell Campus Ambassador",
    event: "DTU · E-Cell",
    description: "Selected to create awareness about entrepreneurship, connect students with resources, and organise innovation events.",
  },
  {
    emoji: "💻",
    title: "GirlScript Summer of Code 2025",
    event: "GirlScript Foundation · GSSoC '25",
    description: "Selected as an official Tech Contributor — collaborating on impactful open-source projects within an inclusive community.",
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("hackathons");

  return (
    <section
      id="experience"
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden", fontFamily: "'Georgia', serif" }}
    >
      {/* Video background */}
      <video
        autoPlay muted loop
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      >
        <source src={underwaterVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to bottom, rgba(0,10,30,0.55), rgba(0,10,40,0.7))",
      }} />

      {/* Top fade from previous section */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "100px",
        background: "linear-gradient(to bottom, rgba(10,30,60,0.98), transparent)",
        zIndex: 2,
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 3, padding: "5rem 2rem 4rem", maxWidth: "1100px", margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{
            color: "white", fontSize: "2.2rem", fontFamily: "serif",
            marginBottom: "0.5rem", opacity: 0.95, letterSpacing: "0.03em",
          }}>
            Experiences & Achievements 🐠
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
            A journey of learning, building & winning
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2.5rem" }}>
          {["hackathons", "achievements"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "0.55rem 1.8rem",
                borderRadius: "50px",
                border: activeTab === tab ? "1.5px solid rgba(255,255,255,0.6)" : "1.5px solid rgba(255,255,255,0.2)",
                background: activeTab === tab ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
                color: "white",
                fontSize: "0.88rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                letterSpacing: "0.05em",
                textTransform: "capitalize",
              }}
            >
              {tab === "hackathons" ? "⚡ Hackathons" : "🏅 Achievements"}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {(activeTab === "hackathons" ? hackathons : achievements).map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(14px)",
                border: "1.5px solid rgba(255,255,255,0.18)",
                borderRadius: "18px",
                padding: "1.5rem",
                color: "white",
                transition: "transform 0.3s ease, background 0.3s ease",
                animation: `fadeUp 0.5s ease ${i * 80}ms both`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.background = "rgba(255,255,255,0.13)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.8rem" }}>
                <span style={{ fontSize: "1.8rem" }}>{item.emoji}</span>
                {item.tag && (
                  <span style={{
                    fontSize: "0.7rem", padding: "0.2rem 0.7rem",
                    borderRadius: "20px", border: `1px solid ${item.tagColor}`,
                    color: item.tagColor, letterSpacing: "0.05em",
                  }}>
                    {item.tag}
                  </span>
                )}
              </div>
              <h3 style={{ fontSize: "1.05rem", marginBottom: "0.3rem", lineHeight: 1.4 }}>{item.title}</h3>
              <p style={{ fontSize: "0.78rem", opacity: 0.55, marginBottom: "0.8rem", letterSpacing: "0.03em" }}>{item.event}</p>
              <p style={{ fontSize: "0.83rem", opacity: 0.75, lineHeight: 1.6 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
        background: "linear-gradient(to bottom, transparent, rgba(10,20,50,0.98))",
        zIndex: 2,
      }} />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}