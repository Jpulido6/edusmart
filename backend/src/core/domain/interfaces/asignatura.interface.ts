import { Asignatura } from "../entities";

export interface IAsignaturaRepository {
    save(asignatura: Asignatura): Promise<Asignatura>;
    findById(id: string): Promise<Asignatura | null>;
    findAll(): Promise<Asignatura[]>;
}