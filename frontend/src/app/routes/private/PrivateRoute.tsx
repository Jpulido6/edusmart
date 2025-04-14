import React from "react";
import { Navigate } from "react-router";
import { ROUTES } from "../routesConfig";

interface Props {
  isAuthenticate: boolean;
  children: React.ReactNode;
}

export const PrivateRoute = ({ isAuthenticate, children }: Props) => {
  return isAuthenticate ? children : <Navigate to={ROUTES.PUBLIC.LOGIN} />;
};
