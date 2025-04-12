import { Estudiante } from 'src/core/domain/entities/estudiantes.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('estudiantes')
export class EstudianteEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ unique: true, length: 150 })
  email: string;

  @Column({ nullable: true, length: 20 })
  studentCode?: string;

  @CreateDateColumn()
  enrollmentDate: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  // Relaciones con otras entidades
  // @OneToMany(() => GradeEntity, grade => grade.student)
  // grades: GradeEntity[];

  // @OneToMany(() => TaskEntity, task => task.student)
  // tasks: TaskEntity[];

  // Método estático para mapear del modelo de dominio a entidad de base de datos
  static fromDomain(student: Estudiante): EstudianteEntity {
    const entity = new EstudianteEntity();
    entity.id = student.id;
    entity.firstName = student.firstName;
    entity.lastName = student.lastName;
    entity.email = student.email;
    entity.enrollmentDate = new Date();
    return entity;
  }

  // Método para convertir a modelo de dominio
  toDomain(): Estudiante {
    return new Estudiante({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      enrollmentDate: this.enrollmentDate,
    });
  }
}
