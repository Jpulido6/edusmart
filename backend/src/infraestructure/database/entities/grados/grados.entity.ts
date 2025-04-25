import { Grado } from 'src/core/domain/entities';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EstudianteEntity } from '../estudiantes/estudiantes.entity';
import { ProfesorAsignaturaEntity } from '../profesor-asignatura/profesor-asignatura.entity';

@Entity('grados')
export class GradosEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  nombre: string;

  @Column()
  codigo: string;

  @OneToMany(()=>EstudianteEntity, estudiante => estudiante.grado)
  estudiantes: EstudianteEntity[]

  @OneToMany(() => ProfesorAsignaturaEntity, ps => ps.grado)
  profesoresAsignados: ProfesorAsignaturaEntity[];

  static fromDomain(grado: Grado): GradosEntity {
    const entity = new GradosEntity();
    entity.id = grado.id;
    entity.nombre = grado.nombre;
    entity.codigo = grado.codigo;
    entity.estudiantes = grado.estudiantes?.map(estudiante => EstudianteEntity.fromDomain(estudiante)) || [];
    entity.profesoresAsignados = grado.profesoresAsignados?.map(ps => ProfesorAsignaturaEntity.fromDomain(ps)) || [];
    return entity;
  }
  toDomain(): Grado {
    return new Grado({
      id: this.id,
      nombre: this.nombre,
      codigo: this.codigo,
      estudiantes: this.estudiantes?.map(estudiante => estudiante.toDomain()),
      profesoresAsignados: this.profesoresAsignados?.map(ps => ps.toDomain())
    });
  }
}
