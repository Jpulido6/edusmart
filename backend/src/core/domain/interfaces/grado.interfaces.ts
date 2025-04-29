import { Grado } from '../entities/grado.entity';

export interface IGradoRepository {
  guardar(grado: Grado): Promise<Grado>;
  findById(id: number): Promise<Grado | null>;
  buscar(): Promise<Grado>;
}
