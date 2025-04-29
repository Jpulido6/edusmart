import { Asignatura } from "../entities";

export interface IAsignaturaRepository {
    save(asignatura: Asignatura): Promise<Asignatura>;
    findById(id: number): Promise<Asignatura | null>;
    findAll(): Promise<Asignatura[]>;
}