import { Calificacion } from "../entities";

export interface ICalificacionRepository {
    save(calificacion: Calificacion): Promise<Calificacion>;
    findByEstudiante(id:string):Promise<Calificacion[]>
    findById(id: string): Promise<Calificacion | null>;
    findByEstudianteAsignaturaPeriodo( 
        estudianteId: string,
        asignaturaId: string,
        periodoId: string
    ): Promise<Calificacion | null>;
}