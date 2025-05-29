import {
  Body,
  Controller,
  ForbiddenException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CrearEstudianteDto } from 'src/shared/dtos/estudiantes.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { EstudianteEntity } from 'src/infraestructure/database/entities/estudiantes/estudiantes.entity';
import { UserRole } from 'src/infraestructure/database/entities/users/users.entity';
import { GradosService } from '../application/grados.service';
import { GradosEntity } from 'src/infraestructure/database/entities/grados/grados.entity';

@Controller('grados')
export class GradosController {
  constructor(private readonly gradosService: GradosService) {}

  @Post('crear-grado')
  @UseGuards(JwtAuthGuard)
  async createStudent(
    @Body() createStudentDto: CrearEstudianteDto,
    @Request() req,
  ) {
    if ([UserRole.ADMIN, UserRole.TEACHER].indexOf(req.user.role) > 0) {
      throw new ForbiddenException(
        'Solo administradores o profesores pueden crear grados',
      );
    }

    const grados = await this.gradosService.create()
    const gradosEntity = GradosEntity.fromDomain(grados);
    return {
      status: 200,
      message: 'Grado creado exitosamente',
      data: gradosEntity,
    };
  }
}
