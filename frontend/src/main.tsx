import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./components/theme/theme-provider.tsx";

import App from "./App.tsx";

// import MainRoutes from "./app/routes/MainRoutes.tsx";
import "./index.css";

export const metaData = {
  title: "EDU SMART",
  description: "Gestión de alumnos notas y calificaciones",
};
createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
        {/* <MainRoutes /> */}
        <App/>
      </ThemeProvider>
  </StrictMode>
);
