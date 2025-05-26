import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';


import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { UserRole } from 'src/infraestructure/database/entities/users/users.entity';
import { AsignaturaEntity } from 'src/infraestructure/database/entities/asignaturas/asignaturas.entity';
import { CalificacionService } from '../application/calificaciones.service';
import { CalificacionDto } from 'src/shared/dtos/calificaciones.dto';
import { CalificacionEntity } from 'src/infraestructure/database/entities/calificaciones/calificaciones.entity';

@Controller('calificaciones')
export class CalificacionController {
  constructor(private readonly calificacionService: CalificacionService) {}

  @Post('calificacion')
  @UseGuards(JwtAuthGuard)
  async createStudent(
    @Body() calificacionDto: CalificacionDto,
    @Request() req,
  ) {
    if ([UserRole.ADMIN, UserRole.TEACHER].indexOf(req.user.role) > 0) {
      throw new ForbiddenException(
        'Solo administradores o profesores pueden crear calificaciones',
      );
    }

    const calificacion = await this.calificacionService.create(calificacionDto);
    const calificacionEntity = CalificacionEntity.fromDomain(calificacion);
    return {
      status: 200,
      message: 'Calificación creada exitosamente',
      data: calificacionEntity,
    };
  }

  @Get('calificacion/:estudianteId')
  @UseGuards(JwtAuthGuard)
  async getCalificacionesByEstudiante(
    @Param('estudianteId') estudianteId: string,
    @Request() req,
  ) {
    if ([UserRole.ADMIN, UserRole.TEACHER].indexOf(req.user.role) > 0) {
      throw new ForbiddenException(
        'Solo administradores o profesores pueden ver calificaciones',
      );
    }

    const calificaciones = await this.calificacionService.findByEstudiante(
      estudianteId,
    );
    return {
      status: 200,
      message: 'Calificaciones obtenidas exitosamente',
      data: calificaciones,
    };
  }

  @Patch('calificacion/:id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  async updateCalificacion(
    @Param('id') id: string,
    @Body() calificacionDto: CalificacionDto,
    @Request() req,
  ) {
    if ([UserRole.ADMIN, UserRole.TEACHER].indexOf(req.user.role) > 0) {
      throw new ForbiddenException(
        'Solo administradores o profesores pueden actualizar calificaciones',
      );
    }

    const calificacion = await this.calificacionService.update(id, calificacionDto);
    const calificacionEntity = CalificacionEntity.fromDomain(calificacion);
    return {
      status: 200,
      message: 'Calificación actualizada exitosamente',
      data: calificacionEntity,
    };
  }
  @Get('calificacion/:estudianteId/:asignaturaId/:periodoId')
  @UseGuards(JwtAuthGuard)
  async getCalificacionByEstudianteAsignaturaPeriodo(
    @Param('estudianteId') estudianteId: string,
    @Param('asignaturaId') asignaturaId: string,
    @Param('periodoId') periodoId: string,
    @Request() req,
  ) {
    if ([UserRole.ADMIN, UserRole.TEACHER].indexOf(req.user.role) > 0) {
      throw new ForbiddenException(
        'Solo administradores o profesores pueden ver calificaciones',
      );
    }

    const calificacion = await this.calificacionService.findByEstudianteAsignaturaPeriodo(
      estudianteId,
      asignaturaId,
      periodoId,
    );
    return {
      status: 200,
      message: 'Calificación obtenida exitosamente',
      data: calificacion,
    };
  }

}
