interface MateriaProps {
  id: number;
  nombre: string;
}

export class Materia {
  private readonly props: MateriaProps;

  constructor(props: MateriaProps) {
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
}
