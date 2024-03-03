import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home.js";
const AllRoutes = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
};
export default AllRoutes;
