import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CrearProfesorDto {
  @IsNotEmpty()
  @IsString()
  nombres: string;

  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  especialidad: string;
}
