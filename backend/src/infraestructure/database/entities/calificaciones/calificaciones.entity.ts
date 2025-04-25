import {
    Column,
    Entity,
    ManyToOne,
    PrimaryColumn,
} from 'typeorm';
import { GradosEntity } from '../grados/grados.entity';
import { EstudianteEntity } from '../estudiantes/estudiantes.entity';
import { Calificacion } from 'src/core/domain/entities/calificacion.enity';
import { PeriodoEntity } from '../periodo/periodo.entity';
import { AsignaturaEntity } from '../asignaturas/asignaturas.entity';

@Entity('calificaciones')
export class CalificacionEntity {
    @PrimaryColumn('uuid')
    id: string;
    @Column('decimal', { precision: 5, scale: 2 })
    nota1: number;

    @Column('decimal', { precision: 5, scale: 2 })
    nota2: number;

    @Column('decimal', { precision: 5, scale: 2 })
    nota3: number;

    @Column('decimal', { precision: 5, scale: 2 })
    nota4: number;

    @Column('decimal', { precision: 5, scale: 2 })
    nota5: number;

    @Column('decimal', { precision: 5, scale: 2 })
    notaFinal: number;

    @ManyToOne(() => EstudianteEntity, estudiante => estudiante.calificaciones)
    estudiante: EstudianteEntity;

    @ManyToOne(() => AsignaturaEntity, asignatura => asignatura.calificaciones)
    asignatura: AsignaturaEntity;

    @ManyToOne(() => GradosEntity)
    grado: GradosEntity;

    @ManyToOne(() => PeriodoEntity, periodo => periodo.calificaciones)
    periodo: PeriodoEntity;

    // @OneToMany(() => TaskEntity, task => task.student)
    // tasks: TaskEntity[];

    // Método estático para mapear del modelo de dominio a entidad de base de datos
    static fromDomain(calificacion: Calificacion): CalificacionEntity {
        const entity = new CalificacionEntity();
        entity.id = calificacion.id;
        entity.nota1 = calificacion.nota1;
        entity.nota2 = calificacion.nota2;
        entity.nota3 = calificacion.nota3;
        entity.nota4 = calificacion.nota4;
        entity.nota5 = calificacion.nota5;
        entity.notaFinal = calificacion.notaFinal;
        entity.estudiante = EstudianteEntity.fromDomain(calificacion.estudiante);
        entity.asignatura = AsignaturaEntity.fromDomain(calificacion.asignatura);
        entity.grado = GradosEntity.fromDomain(calificacion.grado);
        return entity;
    }

    // Método para convertir a modelo de dominio
    toDomain(): Calificacion {
        return new Calificacion({
            id: this.id,
            nota1: this.nota1,
            nota2: this.nota2,
            nota3: this.nota3,
            nota4: this.nota4,
            nota5: this.nota5,
            notaFinal: this.notaFinal,
            estudiante: this.estudiante.toDomain(),
            asignatura: this.asignatura.toDomain(),
            grado: this.grado.toDomain(),
            periodoId: this.periodo.id,
        });
    }
}
