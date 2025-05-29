import { Eventos } from "../entities/eventos.entity";

export interface IEventoRepository {
    save(): Promise<Eventos>
    findAll(): Promise<Eventos[]>
    findById(id: string): Promise<Eventos | null>
}