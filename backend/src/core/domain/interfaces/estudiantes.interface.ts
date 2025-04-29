import { Estudiante } from '../entities/estudiantes.entity';

export interface IEstudianteRepository {
  save(student: Estudiante): Promise<Estudiante>;
  findById(id: string): Promise<Estudiante | null>;
  findByIdentificacion(identificacion: string): Promise<Estudiante | null>;
  findAll(): Promise<Estudiante[]>;
  delete(id: string): Promise<boolean>;
}
