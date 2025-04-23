export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  email?: string;
  grado: string;
  calificaciones?: number[];
}
export interface Curso {
  id: number;
  nombre: string;
  codigo: string;
}
export interface Profesor {
  id: number;
  nombre: string;
  apellido: string;
  email?: string;
  curso: Curso;
}

export interface Response<T> {
  status: number,
  message: string,
  data: T
}
