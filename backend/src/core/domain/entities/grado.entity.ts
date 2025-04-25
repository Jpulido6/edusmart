import { Estudiante, ProfesorAsignatura } from ".";

interface GradoProps {
  id: number;
  nombre: string;
  codigo: string;
  estudiantes: Estudiante[];
  profesoresAsignados: ProfesorAsignatura[];
}

export class Grado {
  private readonly props: GradoProps;

  constructor(props: GradoProps) {
    this.props = {
      ...props,
    };
  }

  get id(): number {
    return this.props.id;
  }
  get nombre(): string {
    return this.props.nombre;
  }
  get codigo(): string {
    return this.props.codigo;
  }
  get estudiantes(): Estudiante[] {
    return this.props.estudiantes;
  }
  get profesoresAsignados(): ProfesorAsignatura[] {
    return this.props.profesoresAsignados;
  }
}
