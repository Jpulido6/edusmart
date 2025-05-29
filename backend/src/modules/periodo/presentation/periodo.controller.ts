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
import { PeriodoService } from '../application/periodo.service';
import { GradosEntity } from 'src/infraestructure/database/entities/grados/grados.entity';
import { PeriodoEntity } from 'src/infraestructure/database/entities/periodo/periodo.entity';

@Controller('periodo')
export class periodoController {
  constructor(private readonly periodoService: PeriodoService) {}

  @Post('crear-periodo')
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

    const grados = await this.periodoService.create()
    const gradosEntity = PeriodoEntity.fromDomain(grados);
    return {
      status: 200,
      message: 'Grado creado exitosamente',
      data: gradosEntity,
    };
  }
}
