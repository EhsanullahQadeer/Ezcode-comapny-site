import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/global/header/Header.js";
import AllRoutes from "./routes/routes";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
