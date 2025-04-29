import {
  Body,
  Controller,
  ForbiddenException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { EstudianteService } from '../application/estudiante.service';
import { CrearEstudianteDto } from 'src/shared/dtos/estudiantes.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { EstudianteEntity } from 'src/infraestructure/database/entities/estudiantes/estudiantes.entity';

@Controller('estudiantes')
export class EstudianteController {
  constructor(private readonly createStudentService: EstudianteService) {}

  @Post('crear-estudiante')
  @UseGuards(JwtAuthGuard)
  async createStudent(
    @Body() createStudentDto: CrearEstudianteDto,
    @Request() req,
  ) {
    if (req.user.role !== 'admin') {
      throw new ForbiddenException(
        'Solo administradores pueden crear estudiantes',
      );
    }

    const student = await this.createStudentService.execute(createStudentDto);
    const estudianteEntity = EstudianteEntity.fromDomain(student);
    return {
      status: 200,
      message: 'Estudiante creado exitosamente',
      data: estudianteEntity,
    };
  }
}
