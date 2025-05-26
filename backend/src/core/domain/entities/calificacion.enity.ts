import { Estudiante, Asignatura, Periodo } from ".";

export class CalificacionProps {
    id?: string;
    nota1: number;
    nota2: number;
    nota3: number;
    nota4: number;
    nota5: number;
    notaFinal: number;
    estudiante: Estudiante;
    asignatura: Asignatura;
    periodo: Periodo;
    createdAt?: Date;
    updatedAt?: Date;
}

export class Calificacion {
    private readonly props: CalificacionProps;

    constructor(props: CalificacionProps) {
        this.props = {
            ...props,
            id: props.id || this.generateId(),
        };
    }

    private generateId(): string {
        return `CAL-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    get id(): string {
        return this.props.id!;
    }
    get nota1(): number {
        return this.props.nota1;
    }
    get nota2(): number {
        return this.props.nota2;
    }
    get nota3(): number {
        return this.props.nota3;
    }
    get nota4(): number {
        return this.props.nota4;
    }
    get nota5(): number {
        return this.props.nota5;
    }
    get notaFinal(): number {
        return this.props.notaFinal;
    }
    get estudiante(): Estudiante {
        return this.props.estudiante;
    }
    get asignatura(): Asignatura {
        return this.props.asignatura;
    }

    get periodo(): Periodo {
        return this.props.periodo;
    }
    get createdAt(): Date {
        return this.props.createdAt!;
    }
    get updatedAt(): Date {
        return this.props.updatedAt!;
    }

}