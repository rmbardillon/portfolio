import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import "./App.css";

function App() {

  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default App
