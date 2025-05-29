import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Profesor } from 'src/core/domain/entities/profesor.entity';
import { AsignaturaEntity } from '../asignaturas/asignaturas.entity';
import { GradosEntity } from '../grados/grados.entity';
import { EventoEntity } from '../eventos/eventos.entity';

@Entity('profesor')
export class ProfesorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column({nullable:true})
  identificacion: string;

  @ManyToOne(() => AsignaturaEntity, asignatura => asignatura.profesores)
  asignatura: AsignaturaEntity

  @ManyToOne(() => GradosEntity, grado => grado.profesores)
  grado: GradosEntity;

  @ManyToOne(() => EventoEntity, evento => evento.profesor, { nullable: true })
  eventos: EventoEntity[]

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  static fromDomain(profesor: Profesor): ProfesorEntity {
    const entity = new ProfesorEntity();
    if (profesor.id) entity.id = profesor.id;
    entity.nombres = profesor.nombres;
    entity.apellidos = profesor.apellidos;
    entity.identificacion = profesor.identificacion;
    entity.asignatura = AsignaturaEntity.fromDomain(profesor.asignaturas);
    entity.grado = GradosEntity.fromDomain(profesor.grado);
    entity.eventos = profesor.eventos.map(evento => EventoEntity.fromDomain(evento));
    entity.createdAt = profesor.createdAt;
    entity.updatedAt = profesor.updatedAt;
    return entity;
  }
  toDomain(): Profesor {
    return new Profesor({
      id: this.id,
      nombres: this.nombres,
      apellidos: this.apellidos,
      identificacion: this.identificacion,
      asignaturas: this.asignatura.toDomain(),
      grado: this.grado.toDomain(),
      eventos: this.eventos.map(evento => evento.toDomain()),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    });
  }
}
