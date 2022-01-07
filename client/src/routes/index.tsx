import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SuspenseCom from "../components/Suspense";

// Pages
const Home = lazy(() => import("../pages/Home"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

function IndexRouter() {
  return (
    <Router>
      <Suspense fallback={<SuspenseCom />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default IndexRouter;
