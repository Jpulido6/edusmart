import { IsString, IsNotEmpty, IsArray, ArrayMinSize, ArrayMaxSize, IsNumber, Min, Max } from 'class-validator';

export class CalificacionDto {
    @IsString()
    @IsNotEmpty()
    estudianteId: string;

    @IsString()
    @IsNotEmpty()
    asignaturaId: string;

    @IsNumber()
    @IsNotEmpty()
    periodoId: number;

    @IsArray()
    @ArrayMinSize(5)
    @ArrayMaxSize(5)
    @IsNumber({}, { each: true })
    @Min(0, { each: true })
    @Max(100, { each: true })
    notas: number[];
}