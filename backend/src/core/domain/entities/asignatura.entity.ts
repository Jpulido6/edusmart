import { Calificacion, Profesor } from ".";

export interface AsignaturaProps {
    id?: string;
    nombre: string;
    createdAt?: Date;
    updatedAt?: Date;
    calificaciones?: Calificacion[];
    profesor?: Profesor[];
}

export class Asignatura {
    private readonly props: AsignaturaProps;

    constructor(props: AsignaturaProps) {
        this.props = {
            ...props,
            id: props.id
        };
    }

    get id(): string {
        return this.props.id!;
    }
    get nombre(): string {
        return this.props.nombre;
    }
    get calificaciones(): Calificacion[] | undefined {
        return this.props.calificaciones;
    }
    get profesor(): Profesor[] | undefined {
        return this.props.profesor;
    }
}