import { Suspense, lazy, useEffect, useState } from "react";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Projects = lazy(() => import("./components/Projects"));
const Technologies = lazy(() => import("./components/Technologies"));
useState;
function App() {
  const [showButton, setShowButton] = useState(false);

  // Show button when page is scrolled down by 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 750) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function Spinner() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
      </div>
      {/* <div className="fixed top-0 -z-10 h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div> */}
      <div className="container mx-auto px-8">
        {/* ใช้ Suspense เพื่อรอให้คอมโพเนนต์โหลดเสร็จก่อนแสดงผล */}
        <Suspense fallback={<Spinner />}>
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </div>
      {/* Scroll to top button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-2 rounded-lg bg-cyan-800 text-white shadow-lg opacity-60
          hover:bg-cyan-600 focus:outline-none"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
