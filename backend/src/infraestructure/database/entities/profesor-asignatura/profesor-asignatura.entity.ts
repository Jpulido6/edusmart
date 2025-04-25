import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { AsignaturaEntity } from "../asignaturas/asignaturas.entity";
import { GradosEntity } from "../grados/grados.entity";
import { ProfesorEntity } from "../profesor/profesor.entity";
import { ProfesorAsignatura } from "src/core/domain/entities";

@Entity('profesores_asignaturas')
export class ProfesorAsignaturaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => ProfesorEntity, profesor => profesor.especialidad)
    profesor: ProfesorEntity;

    @ManyToOne(() => AsignaturaEntity, asignatura => asignatura.profesoresAsignados)
    asignatura: AsignaturaEntity;

    @ManyToOne(() => GradosEntity, grado => grado.profesoresAsignados)
    grado: GradosEntity;


    static fromDomain(profesorAsignatura: ProfesorAsignatura): ProfesorAsignaturaEntity {
        const entity = new ProfesorAsignaturaEntity();
        entity.id = profesorAsignatura.id;
        entity.asignatura = AsignaturaEntity.fromDomain(profesorAsignatura.asignatura)
        entity.profesor = ProfesorEntity.fromDomain(profesorAsignatura.profesor)
        return entity;
    }

    toDomain(): ProfesorAsignatura {
        return new ProfesorAsignatura({
            id: this.id,
            asignatura: this.asignatura.toDomain(),
            profesor: this.profesor.toDomain(),
            grado: this.grado.toDomain()
        });
    }
}