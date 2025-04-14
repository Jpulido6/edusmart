export interface ProfesorProps {
  id?: number;
  nombres: string;
  apellidos: string;
  email: string;
  especialidad: string;
}

export class Profesor {
  private readonly props: ProfesorProps;

  constructor(props: ProfesorProps) {
    this.props = {
      ...props,
    };
  }

  get id(): number {
    return this.props.id!;
  }
  get nombres(): string {
    return this.props.nombres;
  }
  get apellidos(): string {
    return this.props.apellidos;
  }
  get email(): string {
    return this.props.email;
  }
  get especialidad(): string {
    return this.props.especialidad;
  }
}
