import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne } from "typeorm";
import { ProfesorEntity } from "../profesor/profesor.entity";
import { Eventos } from "src/core/domain/entities/eventos.entity";

@Entity('eventos')
export class EventoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    fecha: Date;

    @ManyToOne(() => ProfesorEntity, profesor => profesor.eventos)
    profesor: ProfesorEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    static fromDomain(evento: Eventos): EventoEntity {
        const entity = new EventoEntity();
        entity.id = evento.id;
        entity.titulo = evento.titulo;
        entity.descripcion = evento.descripcion;
        entity.fecha = evento.fecha;
        entity.profesor = ProfesorEntity.fromDomain(evento.profesor);
        return entity;
    }

    toDomain(): Eventos {
        return new Eventos({
            id: this.id,
            titulo: this.titulo,
            descripcion: this.descripcion,
            fecha: this.fecha,
            profesor: this.profesor.toDomain(),
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        });
    }
}