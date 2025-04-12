import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme/theme-provider.tsx";
import MainRoutes from "./app/routes/MainRoutes.tsx";

export const metaData = {
  title: "EDU SMART",
  description: "Gestión de alumnos notas y calificaciones",
};
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <html lang="es" suppressHydrationWarning>     
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
        <MainRoutes />
      </ThemeProvider>
    </html>
  </StrictMode>
);
