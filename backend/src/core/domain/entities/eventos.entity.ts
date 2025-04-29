import { Profesor } from "./profesor.entity";

export interface EventosProps {
    id: string;
    titulo: string;
    descripcion: string;
    fecha: Date;
    profesor: Profesor;
    createdAt: Date;
    updatedAt: Date;
}

export class Eventos {
    private readonly props: EventosProps;

    constructor(props: EventosProps) {
        this.props = {
            ...props,
            id: props.id,
        };
    }

    get id(): string {
        return this.props.id;
    }
    get titulo(): string {
        return this.titulo
    }
    get descripcion(): string {
        return this.descripcion
    }
    get fecha(): Date {
        return this.fecha
    }
    get profesor(): Profesor {
        return this.profesor
    }
    get createdAt(): Date {
        return this.createdAt
    }
    get updatedAt(): Date {
        return this.updatedAt
    }

}