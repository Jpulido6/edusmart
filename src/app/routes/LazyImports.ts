import { lazy } from 'react';

export const Landing = lazy(() => import('../pages/public/landing/presentation/Landing'));
export const LoginPage = lazy(() => import('../pages/public/login/presentation/Login'));
export const RegisterPage = lazy(() => import('../pages/public/register/presentation/Register'));

export const Home = lazy(() => import('../pages/private/home/presentation/HomePage'));
export const Clases = lazy(() => import('../pages/private/clases/presentation/Clases'));
export const Alumnos = lazy(() => import('../pages/private/alumnos/presentation/AlumnosPage'));
export const Calendario = lazy(() => import('../pages/private/calendar/presentation/Calendario'));
export const Calificaciones = lazy(() => import('../pages/private/calificaciones/presentation/Calificaciones'));
export const Reportes = lazy(() => import('../pages/private/reportes/presentation/Reportes'));