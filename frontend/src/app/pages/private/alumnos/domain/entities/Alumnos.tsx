export class Alumno {
  constructor(
    private _id: number,
    private _nombre: string,
    private _apellido: string,
    private _grado: string,
    private _calificaciones: number[]
  ) {}
  get id(): number {
    return this._id;
  }
  get nombre(): string {
    return this._nombre;
  }
  get apellido(): string {
    return this._apellido;
  } 
  get grado(): string {
    return this._grado;
  }
  get calificaciones(): number[] {
    return this._calificaciones;
  }
}
