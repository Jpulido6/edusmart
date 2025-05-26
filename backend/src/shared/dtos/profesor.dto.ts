import { IsNotEmpty, IsString, IsEmail, IsDate } from 'class-validator';
import { Asignatura, Grado } from 'src/core/domain/entities';
import { Eventos } from 'src/core/domain/entities/eventos.entity';

export class CrearProfesorDto {
  @IsNotEmpty()
  @IsString()
  nombres: string;

  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @IsNotEmpty()
  @IsString()
  especialidad: string;

  @IsString()
  identificacion: string;


  asignaturas: Asignatura;

  grado: Grado;

  eventos: Eventos[]

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
