import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CalificacionEntity } from "../calificaciones/calificaciones.entity";
import { Asignatura } from "src/core/domain/entities/asignatura.entity";
import { ProfesorAsignaturaEntity } from "../profesor-asignatura/profesor-asignatura.entity";

@Entity('asignaturas')
export class AsignaturaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @OneToMany(() => CalificacionEntity, calificacion => calificacion.asignatura)
    calificaciones: CalificacionEntity[];

    @OneToMany(() => ProfesorAsignaturaEntity, ps => ps.asignatura)
    profesoresAsignados: ProfesorAsignaturaEntity[];


    static fromDomain(asignatura: Asignatura): AsignaturaEntity {
        const entity = new AsignaturaEntity();
        entity.id = asignatura.id;
        entity.nombre = asignatura.nombre;
        entity.calificaciones = asignatura.calificaciones?.map(calificacion => CalificacionEntity.fromDomain(calificacion)) || [];
        entity.profesoresAsignados = asignatura.profesoresAsignados?.map(ps => ProfesorAsignaturaEntity.fromDomain(ps)) || [];
        return entity;
    }

    toDomain(): Asignatura {
        return new Asignatura({
            id: this.id,
            nombre: this.nombre,
            calificaciones: this.calificaciones?.map(calificacion => calificacion.toDomain()),
            profesoresAsignados: this.profesoresAsignados?.map(ps => ps.toDomain())
        });
    }
}