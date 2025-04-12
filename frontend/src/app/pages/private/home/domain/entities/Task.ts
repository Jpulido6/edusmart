export class Task {
  constructor(
    private _id: number,
    private _name: string,
    private _description: string,
    private _dueDate: Date,
    private _priority: number,
    private _status: string,
    private _progress: number,
    private _completed: boolean,
    private _createdAt: Date,
    private _updatedAt: Date
  ) {}
  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get description(): string {
    return this._description;
  }
  get dueDate(): Date {
    return this._dueDate;
  }
  get priority(): number {
    return this._priority;
  }
  get status(): string {
    return this._status;
  }
  get progress(): number {
    return this._progress;
  }
  get completed(): boolean {
    return this._completed;
  }
  get createdAt(): Date {
    return this._createdAt;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }
}