export const ROUTES = {
  PUBLIC: {
    LANDING: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    NOT_FOUND:"*"
  },
  PRIVATE: {
    DASHBOARD:"/dashboard",
    HOME: "/dashboard/home",
    CLASSES: "/dashboard/clases",
    STUDENTS: "/dashboard/alumnos",
    CALENDAR: "/dashboard/calendar",
    GRADES: "/dashboard/calificaciones",
    REPORTS: "/dashboard/reportes",
  },
} as const;
