import { Grado, Calificacion } from ".";

export interface EstudiantesProps {
  id?: string;
  firstName: string;
  lastName: string;
  identificacion: string;
  grado: Grado;
  calificacion: Calificacion[]
  updatedAt?: Date;
  createdAt?: Date;
  isActive?: boolean;
}

export class Estudiante {
  private readonly props: EstudiantesProps;

  constructor(props: EstudiantesProps) {
    this.props = {
      ...props,
      id: props.id || this.generateId(),
    };
  }

  private generateId(): string {
    return `STD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  } 

  get id(): string {
    return this.props.id!;
  }

  get firstName(): string {
    return this.props.firstName;
  }
  get lastName(): string {
    return this.props.lastName;
  }
  get identificacion(): string {
    return this.props.identificacion;
  }
  get grado(): Grado {
    return this.props.grado;
  }
  get calificacion(): Calificacion[] {
    return this.props.calificacion;
  }
  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }
  get createdAt(): Date | undefined {
    return this.props.createdAt;
  }
  get isActive(): boolean | undefined {
    return this.props.isActive;
  }
}
