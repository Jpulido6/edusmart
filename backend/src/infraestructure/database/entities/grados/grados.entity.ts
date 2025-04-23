import { Grado } from 'src/core/domain/entities/grado.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EstudianteEntity } from '../estudiantes/estudiantes.entity';

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

  static fromDomain(grado: Grado): GradosEntity {
    const entity = new GradosEntity();
    entity.id = grado.id;
    entity.nombre = grado.nombre;
    entity.codigo = grado.codigo;
    return entity;
  }
  toDomain(): Grado {
    return new Grado({
      id: this.id,
      nombre: this.nombre,
      codigo: this.codigo,
    });
  }
}
