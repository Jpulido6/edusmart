import { Profesor } from 'src/core/domain/entities/profesor.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grados } from '../grados/grados.entity';

@Entity('profesor')
export class ProfesorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column({ unique: true })
  email: string;

  @Column()
  especialidad: string;

  @OneToMany(() => Grados, (grade) => grade.id)
  gradedAssignments: Grados[];

  //   @OneToMany(() => Event, (event) => event.organizer)
  //   events: Event[];

  //   @OneToMany(() => Task, (task) => task.assignedBy)
  //   assignedTasks: Task[];

  static fromDomain(profesor: Profesor): ProfesorEntity {
    const entity = new ProfesorEntity();
    entity.id = profesor.id;
    entity.nombres = profesor.nombres;
    entity.apellidos = profesor.apellidos;
    entity.email = profesor.email;
    entity.especialidad = profesor.especialidad;
    return entity;
  }
  toDomain(): Profesor {
    return new Profesor({
      id: this.id,
      nombres: this.nombres,
      apellidos: this.apellidos,
      email: this.email,
      especialidad: this.especialidad,
    });
  }
}
