import { Asignatura, Profesor, Grado } from ".";

export interface ProfesorAsignaturaProps {
    id?: string;
    profesor: Profesor;
    asignatura: Asignatura;
    grado: Grado;
}    

export class ProfesorAsignatura {
    private readonly props: ProfesorAsignaturaProps;

    constructor(props: ProfesorAsignaturaProps) {
        this.props = {
            ...props,
            id: props.id
        };
    }

    get id(): string {
        return this.props.id!;
    }
    get profesor(): Profesor {
        return this.props.profesor;
    }
    get asignatura(): Asignatura {
        return this.props.asignatura;
    }
    get grado(): Grado {
        return this.props.grado;
    }
}