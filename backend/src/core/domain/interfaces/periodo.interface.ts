import { Periodo } from "../entities";

export interface IPeriodoRepository {
  save(periodo: Periodo): Promise<Periodo>;
  findById(id: number): Promise<Periodo | null>;
  findAll(): Promise<Periodo[]>;
}