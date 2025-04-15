import { BrowserRouter, Route, Routes } from "react-router";
import {
  AlumnosPage,
  CalendarioPage,
  ClasesPage,
  HomePage,
  Landing,
  Layout,
  NotFoundPage,
  RegisterPage,
  ReportesPage,
  ProfesoresPage
} from "./LazyImports";
import { ROUTES } from "./routesConfig";
import LoginPage from "../pages/public/login/presentation/Login";
import { Suspense, useEffect } from "react";
import Loading from "@/components/loading/Loading";
import { PrivateRoute } from "./private/PrivateRoute";
import { useAppStore } from "../store/AppStore";

export default function AppRouter() {
  const isAuth = useAppStore((state) => state.isLogged);
  const role = useAppStore((state) => state.user);
  useEffect(() => {
    console.log(isAuth);
    console.log(role);
  }, [isAuth, role]);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path={ROUTES.PUBLIC.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.PUBLIC.REGISTER} element={<RegisterPage />} />

        <Route
          path={ROUTES.PRIVATE.DASHBOARD}
          element={
            <Suspense fallback={<Loading />}>
              <PrivateRoute isAuthenticate={isAuth}>
                <Layout />
              </PrivateRoute>
            </Suspense>
          }
        >
          <Route index element={<HomePage />} />
          <Route path={ROUTES.PRIVATE.STUDENTS} element={<AlumnosPage />} />
          <Route path={ROUTES.PRIVATE.CALENDAR} element={<CalendarioPage />} />
          <Route path={ROUTES.PRIVATE.CLASSES} element={<ClasesPage />} />
          <Route path={ROUTES.PRIVATE.REPORTS} element={<ReportesPage />} />
          <Route path={ROUTES.PRIVATE.PROFESSOR} element={<ProfesoresPage />} />
        </Route>

        <Route path={ROUTES.PUBLIC.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
