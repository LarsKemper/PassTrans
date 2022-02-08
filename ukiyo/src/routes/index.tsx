import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SuspenseCom from "../components/Suspense";
import { frontendRoutes } from "../shared/enums/frontendRoutes.enum";

// Pages
const Home = lazy(() => import("../pages/Home"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const CreateTransferWizard = lazy(
  () => import("../pages/CreateTransferWizard/CreateTransferWizard")
);
const ViewTransfer = lazy(() => import("../pages/ViewTransfer/ViewTransfer"));
const TransferDashboard = lazy(
  () => import("../pages/TransferDashboard/TransferDashboard")
);

function IndexRouter() {
  return (
    <Router>
      <Suspense fallback={<SuspenseCom />}>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path={frontendRoutes.CREATE_TRANSFER}
            element={<CreateTransferWizard />}
          />
          <Route
            path={frontendRoutes.VIEW_TRANSFER}
            element={<ViewTransfer />}
          />
          <Route
            path={frontendRoutes.TRANSFER_DASHBOARD}
            element={<TransferDashboard />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default IndexRouter;
