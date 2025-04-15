import { Grado } from '../entities/grado.entity';

export interface IGradoRepository {
  guardar(grado: Grado): Promise<void>;
  buscar(): Promise<Grado>;
}
