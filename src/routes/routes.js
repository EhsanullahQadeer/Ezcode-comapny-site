import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home.js";
import { ContactUs } from "../pages/ContactUs.js";
const AllRoutes = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </React.Suspense>
  );
};
export default AllRoutes;
