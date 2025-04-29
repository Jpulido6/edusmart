import { Calificacion } from "../entities";

export interface ICalificacionRepository {
    save(calificacion: Calificacion): Promise<Calificacion>;
    findById(id: string): Promise<Calificacion | null>;
    findAll(): Promise<Calificacion[]>;
}