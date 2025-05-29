import { Estudiante } from 'src/core/domain/entities/estudiantes.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GradosEntity } from '../grados/grados.entity';
import { CalificacionEntity } from '../calificaciones/calificaciones.entity';

@Entity('estudiantes')
export class EstudianteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ unique: true, length: 150 })
  identificacion: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => GradosEntity, grado => grado.estudiantes)
  grado: GradosEntity;

  @OneToMany(() => CalificacionEntity, calificacion => calificacion.estudiante)
  calificaciones: CalificacionEntity[];

  static fromDomain(student: Estudiante): EstudianteEntity {
    const entity = new EstudianteEntity();
    entity.id = student.id;
    entity.firstName = student.firstName;
    entity.lastName = student.lastName;
    entity.identificacion = student.identificacion;
    entity.grado = GradosEntity.fromDomain(student.grado);
    entity.calificaciones = student.calificacion.map(calificacion => CalificacionEntity.fromDomain(calificacion));

    return entity;
  }

  toDomain(): Estudiante {
    return new Estudiante({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      identificacion: this.identificacion,
      grado: this.grado.toDomain(),
      calificacion: this.calificaciones.map(calificacion => calificacion.toDomain()),
    });
  }
}
