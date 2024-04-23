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
  const [lenis] = useStore((state) => [state.lenis]);
  useEffect(() => {

    if (lenis) {
      lenis?.scrollTo(0, {
        immediate: true,
      });
    }
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const [setLenis] = useStore((state) => [state.setLenis]);
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0);
    const lenis = new Lenis({
      easing: (x) => {
        return Math.sin((x * Math.PI) / 2);
      },
      duration: 0.8,
      smoothTouch: true,
      syncTouch: true,
    });
    lenis?.scrollTo(0, {
      immediate: true,
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
