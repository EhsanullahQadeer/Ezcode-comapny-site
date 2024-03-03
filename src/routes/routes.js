import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Wrapper from "../Wrapper";
const AllRoutes = () => {
  return (
    <BrowserRouter>
      <React.Suspense>
        <Routes>
          <Route path={``} element={<Wrapper />}>
            <Route>
              {/* <Route index path="/" element={<Dashboard />} /> */}
            </Route>
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};
export default AllRoutes;
