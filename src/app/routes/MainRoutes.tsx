import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { ProtectedLayout } from "./guard/ProtectedRoutes";
import Loading from "@/components/loading/Loading";
import publicRoutes from "./public/public.routes";
import privateRoutes from "./private/private.routes";
import RouteErrorBoundary from "./errorBoundary";

const MainRoutes = () => {
  return (
    <RouteErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {publicRoutes()}
            <Route element={<ProtectedLayout />}>{privateRoutes()}</Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RouteErrorBoundary>
  );
};

export default MainRoutes;
