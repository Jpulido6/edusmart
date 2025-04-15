import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar/App-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@radix-ui/react-separator";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { useAppStore } from "../store/AppStore";
import { UserCircle } from "lucide-react";
import { Outlet, useLocation } from "react-router";

export default function Layout() {
  const route = useLocation();

  const pathNameString = (pathName: string) => {
    switch (pathName) {
      case "/dashboard":
        return "Inicio";
      case "/dashboard/alumnos":
        return "Estudiantes";
      case "/dashboard/calendar":
        return "Calendario";
      case "/dashboard/clases":
        return "Clases";
      case "/dashboard/reportes":
        return "Reportes";
      case "/dashboard/calificaciones":
        return "Calificaciones";
      case "/dashboard/profesores":
        return "Profesores";
      default:
        return pathName;
    }
  };

  const name = useAppStore((state) => state.user?.name);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb className="w-full">
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">EDU SMART</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {pathNameString(route.pathname)}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex w-full justify-end gap-2 ">
            {name && (
              <div className="flex items-center gap-2">
                <UserCircle className="h-5 w-5" />
                <span>{name}</span>
              </div>
            )}
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4"><Outlet/></div>
      </SidebarInset>
    </SidebarProvider>
  );
}
