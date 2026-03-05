import Hero from "./components/Hero";
import WhaleTransition from "./components/WhaleTransition";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function App(){
  return (
    <>
    <Hero/>
    <WhaleTransition/>
    <Projects/>
    <Experience />
    <footer style={{
      height:"300px",
  width: "100%",
  padding: "1.5rem",
  textAlign: "center",
 background: "linear-gradient(to bottom,  #14225a,#37b3e8)",
  backdropFilter: "blur(8px)",
  borderTop: "1px solid rgba(173, 216, 230, 0.3)",
  color: "white",
  fontSize: "0.85rem",
  letterSpacing: "0.05em",
}}>
  © 2026 Vidhi · Made with ❤️

  <p>Vidhi | CSE Student & Developer</p>

  <p>Quick Links | Social | Contact</p>
</footer>
    </>
  )
}
