import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from 'src/core/domain/entities/profesor.entity';
import { IProfesorRepository } from 'src/core/domain/interfaces/profesor.interface';
import { AsignaturaEntity } from 'src/infraestructure/database/entities/asignaturas/asignaturas.entity';
import { EventoEntity } from 'src/infraestructure/database/entities/eventos/eventos.entity';
import { GradosEntity } from 'src/infraestructure/database/entities/grados/grados.entity';
import { ProfesorEntity } from 'src/infraestructure/database/entities/profesor/profesor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesorPostgresRepository implements IProfesorRepository {
  constructor(
    @InjectRepository(ProfesorEntity)
    private readonly profesorRepo: Repository<ProfesorEntity>,
  ) { }
  async buscarByIdentificacion(identification: string): Promise<Profesor | null> {
    const profEntity = await this.profesorRepo.findOne({ where: { identification } })

    return profEntity ? profEntity.toDomain() : null
  }
  async buscarTodos(): Promise<Profesor[]> {
    const profEntity = await this.profesorRepo.find();
    return profEntity.map((profEntity) => profEntity.toDomain());
  }

  async buscarById(id: string): Promise<Profesor | null> {
    const profEntity = await this.profesorRepo.findOne({
      where: { id },
      relations: ['materia']
    })

    return profEntity ? profEntity.toDomain() : null
  }
  async crear(pro: Profesor): Promise<void> {
    const prof = this.mapToEntity(pro);
    await this.profesorRepo.save(prof);
  }


  private mapToEntity(pro: Profesor): ProfesorEntity {
    return {
      id: crypto.randomUUID(),
      nombres: pro.nombres,
      apellidos: pro.apellidos,
      identification: pro.identificacion,
      asignatura: AsignaturaEntity.fromDomain(pro.asignaturas),
      grado: GradosEntity.fromDomain(pro.grado),
      eventos: pro.eventos.map(proEntity => EventoEntity.fromDomain(proEntity)),
      createdAt: new Date(),
      updatedAt: new Date(),
      toDomain: () => pro,
    };
  }
}
