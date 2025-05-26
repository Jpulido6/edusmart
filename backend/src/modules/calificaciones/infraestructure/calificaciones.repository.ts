import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { Asignatura, Calificacion } from 'src/core/domain/entities';
import { AsignaturaEntity } from 'src/infraestructure/database/entities/asignaturas/asignaturas.entity';
import { CalificacionEntity } from 'src/infraestructure/database/entities/calificaciones/calificaciones.entity';
import { ICalificacionRepository } from 'src/core/domain/interfaces/calificaciones.interface';
import { EstudianteEntity } from 'src/infraestructure/database/entities/estudiantes/estudiantes.entity';
import { PeriodoEntity } from 'src/infraestructure/database/entities/periodo/periodo.entity';

@Injectable()
export class CalificacionPostgresRepository implements ICalificacionRepository {
  constructor(
    @InjectRepository(CalificacionEntity)
    private readonly calificacionesRepo: Repository<CalificacionEntity>,
  ) { }
  async findByEstudianteAsignaturaPeriodo(estudianteId: string, asignaturaId: string, periodoId: string): Promise<Calificacion | null> {
    const calificacion = await this.calificacionesRepo.findOne({
      where: {
        estudiante: { id: estudianteId },
        asignatura: { id: asignaturaId },
        periodo: { id: periodoId },
      },
      relations: ['estudiante', 'asignatura', 'periodo'],
    });

    return calificacion ? calificacion.toDomain() : null;
  }
  async findById(id: string): Promise<Calificacion | null> {
    const calificacion = await this.calificacionesRepo.findOne({
      where: { id },
      relations: ['estudiante', 'asignatura'],
    });

    return calificacion ? calificacion.toDomain() : null;
  }
  async save(calificacion: Calificacion): Promise<Calificacion> {

    const calificacionEntity = this.mapToEntity(calificacion);
    await this.calificacionesRepo.save(calificacionEntity);
    return calificacionEntity.toDomain();
  }

  async findByEstudiante(id: string): Promise<Calificacion[]> {

    const calificacion = await this.calificacionesRepo.findOne({ where: { estudiante: { id } }, relations: ['estudiante', 'materia', 'grado', 'periodo'] })

    return calificacion ? calificacion.estudiante.calificaciones.map((calificacion) => calificacion.toDomain()) : []
  }




  private mapToEntity(calificacion: Calificacion): CalificacionEntity {
    return {
      id: calificacion.id,
      nota1: calificacion.nota1,
      nota2: calificacion.nota2,
      nota3: calificacion.nota3,
      nota4: calificacion.nota4,
      nota5: calificacion.nota5,
      notaFinal: calificacion.notaFinal,
      estudiante: EstudianteEntity.fromDomain(calificacion.estudiante),
      asignatura: AsignaturaEntity.fromDomain(calificacion.asignatura),
      periodo: PeriodoEntity.fromDomain(calificacion.periodo),
      createdAt: calificacion.createdAt,
      updatedAt: calificacion.updatedAt,
      toDomain: () => calificacion,
    };
  }

}
