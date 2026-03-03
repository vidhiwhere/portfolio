import { useRef, useEffect } from "react";
import underwaterVideo from "../assets/videos/0_Underwater_Ocean_3840x2160.mp4";
import Carousel from "./carousels";

export default function Transition() {
  const videoRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>

      {/* Background video */}
      <video
        ref={videoRef}
        muted
        loop
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={underwaterVideo} type="video/mp4" />
      </video>

      {/* Carousel on top */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Carousel />
      </div>

    </section>
  );
}
