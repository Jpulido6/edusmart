export class Profesor {
  constructor(
    private _id: number,
    private _nombres: string,
    private _apellidos: string,
    private _materia: string
  ) {}

  get id() {
    return this._id;
  }
  get nombres() {
    return this._nombres;
  }
  get apellidos() {
    return this._apellidos;
  }
  get materia() {
    return this._materia;
  }
}
