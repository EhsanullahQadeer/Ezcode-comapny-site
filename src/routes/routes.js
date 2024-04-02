import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home.js";
import { ContactUs } from "../pages/ContactUs.js";
import { AboutUs } from "../pages/AboutUs.js";
import { Work } from "../pages/Work.js";
import { Services } from "../pages/Services.js";
const AllRoutes = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </React.Suspense>
  );
};
export default AllRoutes;
