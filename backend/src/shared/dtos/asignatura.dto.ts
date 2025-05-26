import { IsNotEmpty, IsString } from "class-validator";
import { Calificacion, Profesor } from "src/core/domain/entities";

export class AsignaturaDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    calificaciones?: Calificacion[];

    profesor?: Profesor[];

}