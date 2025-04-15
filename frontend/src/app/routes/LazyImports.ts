import { lazy } from 'react';

export const Landing = lazy(() => import('../pages/public/landing/presentation/Landing'));
export const LoginPage = lazy(() => import('../pages/public/login/presentation/Login'));
export const RegisterPage = lazy(() => import('../pages/public/register/presentation/Register'));
export const NotFoundPage = lazy(()=> import('@/components/not-found/NotFound'))

export const Layout = lazy(()=> import('@/app/layout/Layout'))
export const HomePage = lazy(() => import('../pages/private/home/presentation/HomePage'));
export const ClasesPage = lazy(() => import('../pages/private/clases/presentation/ClasesPage'));
export const AlumnosPage = lazy(() => import('../pages/private/alumnos/presentation/AlumnosPage'));
export const CalendarioPage = lazy(() => import('../pages/private/calendar/presentation/CalendarioPage'));
export const CalificacionesPage = lazy(() => import('../pages/private/calificaciones/presentation/CalificacionesPage'));
export const ReportesPage = lazy(() => import('../pages/private/reportes/presentation/ReportesPage'));
export const ProfesoresPage = lazy(()=>import('../pages/private/profesores/presentation/ProfesorPage'))