import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CalificacionEntity } from "../calificaciones/calificaciones.entity";
import { Asignatura } from "src/core/domain/entities/asignatura.entity";
import { ProfesorEntity } from "../profesor/profesor.entity";

@Entity('asignaturas')
export class AsignaturaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @OneToMany(() => CalificacionEntity, calificacion => calificacion.asignatura)
    calificaciones: CalificacionEntity[];

    @OneToMany(() => ProfesorEntity, ps => ps.asignatura)
    profesores: ProfesorEntity[]


    static fromDomain(asignatura: Asignatura): AsignaturaEntity {
        const entity = new AsignaturaEntity();
        entity.id = asignatura.id;
        entity.nombre = asignatura.nombre;
        entity.calificaciones = asignatura.calificaciones?.map(calificacion => CalificacionEntity.fromDomain(calificacion)) || [];
        entity.profesores = asignatura.profesor?.map(ps => ProfesorEntity.fromDomain(ps)) || [];
        return entity;
    }

    toDomain(): Asignatura {
        return new Asignatura({
            id: this.id,
            nombre: this.nombre,
            calificaciones: this.calificaciones?.map(calificacion => calificacion.toDomain()),
            profesor: this.profesores?.map(ps => ps.toDomain())
        });
    }
}