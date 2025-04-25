import { Calificacion, ProfesorAsignatura } from ".";

export interface AsignaturaProps {
    id?: string;
    nombre: string;
    calificaciones?: Calificacion[];
    profesoresAsignados?: ProfesorAsignatura[];
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
    get profesoresAsignados(): ProfesorAsignatura[] | undefined {
        return this.props.profesoresAsignados;
    }
}