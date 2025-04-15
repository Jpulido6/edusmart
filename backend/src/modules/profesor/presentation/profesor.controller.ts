import {
  Body,
  Controller,
  ForbiddenException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CrearProfesorService } from '../application/crear-profesor.service';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { CrearProfesorDto } from 'src/shared/dtos/profesor.dto';
import { ProfesorEntity } from 'src/infraestructure/database/entities/profesor/profesor.entity';

@Controller('profesor')
export class ProfesorController {
  constructor(private readonly createProfesorService: CrearProfesorService) {}

  @Post('crear')
  @UseGuards(JwtAuthGuard)
  async createProfesor(@Body() createproDto: CrearProfesorDto, @Request() req) {
    if (req.user.role !== 'admin') {
      throw new ForbiddenException(
        'Solo administradores pueden crear profesores',
      );
    }

    const profesor = await this.createProfesorService.execute(createproDto);
    const profesorEntity = ProfesorEntity.fromDomain(profesor);
    return {
      status: 200,
      message: 'Profesor creado exitosamente',
      data: profesorEntity,
    };
  }
}
