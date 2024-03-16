import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/global/header/Header.js";
import AllRoutes from "./routes/routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll } from "framer-motion";
import { Footer } from "./components/global/footer/Footer.js";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <BrowserRouter>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Header />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
