import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import BlogHome from "./components/blog/BlogHome";
import BlogPost from "./components/blog/BlogPost";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router basename="/pixel-portfolio">
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="hero" className="pt-20">
                <Hero />
              </section>
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
