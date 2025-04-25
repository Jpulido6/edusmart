import { Calificacion } from "./calificacion.enity";

export interface PeriodoProps {
    id?: string;
    nombre: string;
    fechaInicio: Date;
    fechaFin: Date;
    updatedAt?: Date;
    isActive?: boolean;
    calificaciones?: Calificacion[];
}

export class Periodo {
    private readonly props: PeriodoProps;

    constructor(props: PeriodoProps) {
        this.props = {
            ...props,
            id: props.id || this.generateId(),
        };
    }

    private generateId(): string {
        return `PER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    get id(): string {
        return this.props.id!;
    }
    get nombre(): string {
        return this.props.nombre;
    }
    get fechaInicio(): Date {
        return this.props.fechaInicio;
    }
    get fechaFin(): Date {
        return this.props.fechaFin;
    }
    get updatedAt(): Date | undefined {
        return this.props.updatedAt;
    }
    get isActive(): boolean | undefined {
        return this.props.isActive;
    }
    get calificaciones(): Calificacion[] | undefined {
        return this.props.calificaciones;
    }
}
