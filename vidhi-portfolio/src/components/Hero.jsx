import { useRef, useEffect } from "react";
import heroVideo from "../assets/videos/7048449_Animation_Motion_Graphic_3840x2160.mp4";

export default function Hero() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let ripples = [];

    canvas.addEventListener("mousemove", (e) => {
      ripples.push({ x: e.clientX, y: e.clientY, r: 1, alpha: 1 });
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ripples = ripples.filter((r) => r.alpha > 0);
      ripples.forEach((r) => {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`;
        ctx.stroke();
        r.r += 2;
        r.alpha -= 0.02;
      });
      requestAnimationFrame(animate);
    }
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section style={{ position: "relative", height: "100vh", width: "100vw", overflow: "hidden" }}>

      <video
        autoPlay muted loop
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, zIndex: 2, cursor: "crosshair", width: "100%", height: "100%" }}
      />

      <div style={{
        position: "absolute", zIndex: 3,
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(10px)",
        border: "1.5px solid rgba(255,255,255,0.3)",
        borderRadius: "18px",
        padding: "2rem 3rem",
        textAlign: "center",
        color: "white",
        whiteSpace: "nowrap",
      }}>
        <h1 style={{ fontSize: "3rem", fontFamily: "serif" }}>⭐ i am Vidhi</h1>
        <p style={{ opacity: 0.8 }}>(a MERN stack developer and Ai-ML developer)</p>
        <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
          Drag your mouse on the ocean to save the whales 🐋
        </p>
      </div>

    </section>
  );
}