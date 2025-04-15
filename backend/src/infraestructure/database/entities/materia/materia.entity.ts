import { Materia } from 'src/core/domain/entities/materia.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class GradosEntity {
  id: number;
  nombre: string;
  codigo: string;
}
@Entity('materia')
export class Materias {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  static fromDomain(materia: Materia): GradosEntity {
    const entity = new GradosEntity();
    entity.id = materia.id;
    entity.nombre = materia.nombre;
    return entity;
  }

  toDomain(): Materia {
    return new Materia({
      id: this.id,
      nombre: this.nombre,
    });
  }
}
