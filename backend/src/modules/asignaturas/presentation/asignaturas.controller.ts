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
import { AsignaturasService } from '../application/asignaturas.service';
import { AsignaturaDto } from 'src/shared/dtos/asignatura.dto';
import { UserRole } from 'src/infraestructure/database/entities/users/users.entity';
import { AsignaturaEntity } from 'src/infraestructure/database/entities/asignaturas/asignaturas.entity';

@Controller('asignaturas')
export class AsignaturasController {
  constructor(private readonly asignaturaService: AsignaturasService) {}

  @Post('crear-asignatura')
  @UseGuards(JwtAuthGuard)
  async createStudent(
    @Body() asignaturaDto: AsignaturaDto,
    @Request() req,
  ) {
    if ([UserRole.ADMIN, UserRole.TEACHER].indexOf(req.user.role) > 0) {
      throw new ForbiddenException(
        'Solo administradores o profesores pueden crear Asignaturas',
      );
    }

    const asignatura = await this.asignaturaService.execute(asignaturaDto);
    const asignaturaEntity = AsignaturaEntity.fromDomain(asignatura);
    return {
      status: 200,
      message: 'Asignatura creado exitosamente',
      data: asignaturaEntity,
    };
  }
}
