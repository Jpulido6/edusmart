import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { Asignatura } from 'src/core/domain/entities';
import { IAsignaturaRepository } from 'src/core/domain/interfaces/asignatura.interface';
import { AsignaturaEntity } from 'src/infraestructure/database/entities/asignaturas/asignaturas.entity';
import { CalificacionEntity } from 'src/infraestructure/database/entities/calificaciones/calificaciones.entity';
import { ProfesorEntity } from 'src/infraestructure/database/entities/profesor/profesor.entity';

@Injectable()
export class AsignaturasPostgresRepository implements IAsignaturaRepository {
  constructor(
    @InjectRepository(AsignaturaEntity)
    private readonly asignaturaRepo: Repository<AsignaturaEntity>,
  ) { }
  async save(asignatura: Asignatura): Promise<Asignatura> {
    const asignaturaEntity = this.mapToEntity(asignatura)
    await this.asignaturaRepo.save(asignaturaEntity)

    return asignaturaEntity.toDomain()
  }

  async findById(id: string): Promise<Asignatura | null> {
    const asignaturaEntity = await this.asignaturaRepo.findOne({ where: { id } })

    return asignaturaEntity ? asignaturaEntity.toDomain() : null
  }
  async findAll(): Promise<Asignatura[]> {
    const asignaturaEntity = await this.asignaturaRepo.find()

    return asignaturaEntity.map(asigEntity => asigEntity.toDomain())
  }

  private mapToEntity(asignatura: Asignatura): AsignaturaEntity {
    return {
      id: asignatura.id,
      nombre: asignatura.nombre,
      calificaciones: asignatura.calificaciones?.map(asigEntity => CalificacionEntity.fromDomain(asigEntity))!,
      profesores: asignatura.profesor?.map(asigEntity => ProfesorEntity.fromDomain(asigEntity))!,
      toDomain: () => asignatura,
    };
  }
}
