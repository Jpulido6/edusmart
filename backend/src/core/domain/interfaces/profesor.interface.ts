import { Profesor } from '../entities/profesor.entity';

export interface IProfesorRepository {
  crear(pro: Profesor): Promise<void>;
  buscar(): Promise<Profesor[]>;
  buscarbyEmail(email: string): Promise<Profesor | null>;
}
