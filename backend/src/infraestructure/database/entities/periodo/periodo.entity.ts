import {
    Column,
    Entity,
    OneToMany,
    PrimaryColumn,
} from 'typeorm';
import { CalificacionEntity } from '../calificaciones/calificaciones.entity';
import { Periodo } from 'src/core/domain/entities/periodo.entity';

@Entity('periodos')
export class PeriodoEntity {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    fechaInicio: Date;

    @Column()
    fechaFin: Date;

    @OneToMany(() => CalificacionEntity, calificacion => calificacion.periodo)
    calificaciones: CalificacionEntity[];

    static fromDomain(periodo: Periodo): PeriodoEntity {
        const entity = new PeriodoEntity();
        entity.id = periodo.id;
        entity.nombre = periodo.nombre;
        entity.fechaInicio = periodo.fechaInicio;
        entity.fechaFin = periodo.fechaFin;
        entity.calificaciones = periodo.calificaciones?.map(calificacion => CalificacionEntity.fromDomain(calificacion)) || [];
        return entity;
    }

    toDomain(): Periodo {
        return new Periodo({
            id: this.id,
            nombre: this.nombre,
            fechaInicio: this.fechaInicio,
            fechaFin: this.fechaFin,
            updatedAt: new Date(),
            calificaciones: this.calificaciones?.map(calificacion => calificacion.toDomain()),
        });
    }
}
