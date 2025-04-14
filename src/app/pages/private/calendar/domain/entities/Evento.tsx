export class Evento {
  constructor(
    private _id: number,
    private _nombre: string,
    private _fecha: Date,
    private _hora: Date,
    private _descripcion: string,
    private _profesor: string,
    private _curso: string,
    private _alumno: string
  ) {}
  get id(): number {
    return this._id;
  }
  get nombre(): string {
    return this._nombre;
  }
  get fecha(): Date {
    return this._fecha;
  }
  get hora(): Date {
    return this._hora;
  }
  get descripcion(): string {
    return this._descripcion;
  }
  get profesor(): string {
    return this._profesor;
  }
  get curso(): string {
    return this._curso;
  }
  get alumno(): string {
    return this._alumno;
  }
}
