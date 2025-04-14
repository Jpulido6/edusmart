import Layout from "@/app/layout/Layout";
import { useAppStore } from "@/app/store/AppStore";
import { Navigate, Outlet } from "react-router";
import { ROUTES } from "../routesConfig";

export const ProtectedLayout = () => {
  const isLogged = useAppStore((state) => state.isLogged);
  
  if (!isLogged) {
    return <Navigate to={ROUTES.PUBLIC.LOGIN} replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedLayout;
