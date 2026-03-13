import { useEffect, useState, lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

/* Lazy loaded components (heavy ones) */
const Skills = lazy(() => import("./components/Skills"));
const StarsCanvas = lazy(() => import("./components/StarsCanvas"));
const Projects = lazy(() => import("./components/Projects"));
const ShootingStars = lazy(() => import("./components/ShootingStars"));
const NebulaBackground = lazy(() => import("./components/NebulaBackground"));
const Certifications = lazy(() => import("./components/Certifications"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={
        darkMode
          ? "dark text-white min-h-screen relative overflow-hidden"
          : "text-black min-h-screen relative overflow-hidden"
      }
    >
      {/* Background Animations */}
      <Suspense fallback={null}>
        <StarsCanvas />
        <NebulaBackground />
        <ShootingStars />
      </Suspense>

      {/* Main Content */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />

      <Suspense
        fallback={
          <div className="text-center py-20 text-gray-400">Loading...</div>
        }
      >
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </Suspense>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm py-6">
        &copy; {new Date().getFullYear()} AMARESH.dev. All rights reserved.
      </div>
    </div>
  );
}

export default App;