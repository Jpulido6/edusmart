import { Estudiante } from '../entities/estudiantes.entity';

export interface IEstudianteRepository {
  save(student: Estudiante): Promise<void>;
  findById(id: string): Promise<Estudiante | null>;
  findByEmail(email: string): Promise<Estudiante | null>;
  findAll(): Promise<Estudiante[]>;
  delete(id: string): Promise<boolean>;
}
