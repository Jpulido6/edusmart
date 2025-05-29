import { IsNotEmpty, IsString, IsEmail, IsNumber } from 'class-validator';

export class CrearEstudianteDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsString()
  identification: string;

  @IsNumber()
  gradoId: number;
  
  calificaciones?: { asignaturaId: string, periodoId: number, notas: number[] }[];
}
