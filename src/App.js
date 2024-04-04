import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "./components/global/footer/Footer.js";
import { Header } from "./components/global/header/Header.js";
import Lenis from "@studio-freight/lenis";
import { useStore } from "./lib/store.js";

import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const lenis = new Lenis({
    lerp: 0.1,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const [setLenis] = useStore((state) => [state.setLenis]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis({
      // gestureOrientation: 'both',
      smoothWheel: true,
      smoothTouch: true,
      syncTouch: true,
    });
    window.lenis = lenis;
    setLenis(lenis);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export { App, ScrollToTop };
