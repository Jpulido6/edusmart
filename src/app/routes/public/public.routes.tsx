import { Route } from "react-router";
import { ROUTES } from "../routesConfig";
import { Landing, LoginPage, RegisterPage } from "../LazyImports";
import RouteErrorBoundary from "../errorBoundary";

const publicRoutes = () => [
  <Route
    key={ROUTES.PUBLIC.LANDING}
    path={ROUTES.PUBLIC.LANDING}
    element={
      <RouteErrorBoundary>
        <Landing />
      </RouteErrorBoundary>
    }
  />,
  <Route
    key={ROUTES.PUBLIC.LOGIN}
    path={ROUTES.PUBLIC.LOGIN}
    element={
      <RouteErrorBoundary>
        <LoginPage />
      </RouteErrorBoundary>
    }
  />,
  <Route
    key={ROUTES.PUBLIC.REGISTER}
    path={ROUTES.PUBLIC.REGISTER}
    element={
      <RouteErrorBoundary>
        <RegisterPage />
      </RouteErrorBoundary>
    }
  />,
];

export default publicRoutes;
