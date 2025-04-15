import {
  BookOpen,
  Calendar,
  Home,
  LineChart,
  LucideProps,
  Printer,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";
export interface ItemsProps {
  title: string;
  url: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

export const itemsAdmin: ItemsProps[] = [
  {
    title: "Profesores",
    url: "/dashboard/profesores",
    icon: UserPlus,
  },
  // {
  //   title: "Estudiantes",
  //   url: "/dashboard/alumnos",
  //   icon: Users,
  // },
  // {
  //   title: "Calendario",
  //   url: "/dashboard/calendar",
  //   icon: Calendar,
  // },
  // {
  //   title: "Clases",
  //   url: "/dashboard/clases",
  //   icon: BookOpen,
  // },
  // {
  //   title: "Reportes",
  //   url: "/dashboard/reportes",
  //   icon: Printer,
  // },
  // {
  //   title: "Calificaciones",
  //   url: "/dashboard/calificaciones",
  //   icon: LineChart,
  // },
  // {
  //   title: "Configuración",
  //   url: "#",
  //   icon: Settings,
  // },
];

export const itemsTeacher: ItemsProps[] = [
  {
    title: "Inicio",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Estudiantes",
    url: "/dashboard/alumnos",
    icon: Users,
  },
  {
    title: "Calendario",
    url: "/dashboard/calendar",
    icon: Calendar,
  },
  {
    title: "Clases",
    url: "/dashboard/clases",
    icon: BookOpen,
  },
  {
    title: "Reportes",
    url: "/dashboard/reportes",
    icon: Printer,
  },
  {
    title: "Calificaciones",
    url: "/dashboard/calificaciones",
    icon: LineChart,
  },
  {
    title: "Configuración",
    url: "#",
    icon: Settings,
  },
];
