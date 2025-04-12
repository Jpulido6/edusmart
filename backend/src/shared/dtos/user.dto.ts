import { IsNotEmpty, IsString, IsEmail, IsEnum } from 'class-validator';
import { UserRole } from 'src/infraestructure/database/entities/users/users.entity';

export class CrearUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEnum(['admin', 'teacher', 'student'])
  @IsString()
  role: UserRole;
}
