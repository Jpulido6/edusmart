import { Profesor } from '../entities/profesor.entity';

export interface IProfesorRepository {
  crear(pro: Profesor): Promise<void>;
  buscarTodos(): Promise<Profesor[]>;
  buscarById(id:string):Promise<Profesor | null>
  buscarByIdentificacion(identification:string):Promise<Profesor | null>

}
