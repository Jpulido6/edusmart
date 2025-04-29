import { randomUUID } from "crypto";
import { Asignatura, Grado } from ".";
import { Eventos } from "./eventos.entity";

export interface ProfesorProps {
  id?: string;
  nombres: string;
  apellidos: string;
  identificacion: string;
  asignaturas: Asignatura;
  grado: Grado;
  eventos:Eventos[]
  createdAt:Date;
  updatedAt:Date;
}

export class Profesor {
  private readonly props: ProfesorProps;

  constructor(props: ProfesorProps) {
    this.props = {
      ...props,
      id: props.id || randomUUID()
    };
  }

  get id(): string {
    return this.props.id!;
  }
  get nombres(): string {
    return this.props.nombres;
  }
  get apellidos(): string {
    return this.props.apellidos;
  }
  get identificacion(): string {
    return this.props.identificacion;
  }
  get asignaturas(): Asignatura{
    return this.props.asignaturas;
  }
  get grado(): Grado {
    return this.props.grado;
  }
  get eventos():Eventos[]{
    return this.props.eventos;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
  get updatedAt(): Date {
    return this.props.updatedAt;
  }
    
}
