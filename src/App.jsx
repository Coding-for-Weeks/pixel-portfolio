import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogHome from "./components/blog/BlogHome";
import BlogPost from "./components/blog/BlogPost"; // we’ll build this next
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="hero" className="pt-20"><Hero /></section>
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
