import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/global/header/Header.js";
import AllRoutes from "./routes/routes";
function App() {
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
