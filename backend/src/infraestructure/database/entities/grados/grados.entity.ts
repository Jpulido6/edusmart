import { Grado } from 'src/core/domain/entities/grado.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class GradosEntity {
  id: number;
  nombre: string;
  codigo: string;
}
@Entity('grados')
export class Grados {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  codigo: string;

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
