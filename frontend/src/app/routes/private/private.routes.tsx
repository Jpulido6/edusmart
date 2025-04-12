import { Route } from "react-router";
import { ROUTES } from "../routesConfig";
import {
  Home,
  Clases,
  Alumnos,
  Calendario,
  Calificaciones,
  Reportes,
} from "../LazyImports";
import RouteErrorBoundary from "../errorBoundary";

const privateRoutes = () => [
  <Route
    key={ROUTES.PRIVATE.HOME}
    path={ROUTES.PRIVATE.HOME}
    element={
      <RouteErrorBoundary>
        <Home />
      </RouteErrorBoundary>
    }
  />,
  <Route
    key={ROUTES.PRIVATE.CLASSES}
    path={ROUTES.PRIVATE.CLASSES}
    element={
      <RouteErrorBoundary>
        <Clases />
      </RouteErrorBoundary>
    }
  />,
  <Route
    key={ROUTES.PRIVATE.STUDENTS}
    path={ROUTES.PRIVATE.STUDENTS}
    element={
      <RouteErrorBoundary>
        <Alumnos />
      </RouteErrorBoundary>
    }
  />,
  <Route
    key={ROUTES.PRIVATE.CALENDAR}
    path={ROUTES.PRIVATE.CALENDAR}
    element={
      <RouteErrorBoundary>
        <Calendario />
      </RouteErrorBoundary>
    }
  />,
  <Route
    key={ROUTES.PRIVATE.GRADES}
    path={ROUTES.PRIVATE.GRADES}
    element={
      <RouteErrorBoundary>
        <Calificaciones />
      </RouteErrorBoundary>
    }
  />,
  <Route
    key={ROUTES.PRIVATE.REPORTS}
    path={ROUTES.PRIVATE.REPORTS}
    element={
      <RouteErrorBoundary>
        <Reportes />
      </RouteErrorBoundary>
    }
  />,
];

export default privateRoutes;
