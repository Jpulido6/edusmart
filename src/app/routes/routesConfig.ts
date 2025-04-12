export const ROUTES = {
  PUBLIC: {
    LANDING: "/",
    LOGIN: "/login",
    REGISTER: "/register",
  },
  PRIVATE: {
    HOME: "/home",
    CLASSES: "/clases",
    STUDENTS: "/alumnos",
    CALENDAR: "/calendar",
    GRADES: "/calificaciones",
    REPORTS: "/reportes",
  },
} as const;
