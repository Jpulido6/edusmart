export interface EstudiantesProps {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  enrollmentDate: Date;
  studentCode?: string;
  updatedAt?: Date;
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

  public changeEmail(newEmail: string): void {
    if (!this.isValidEmail(newEmail)) {
      throw new Error('Invalid email format');
    }
    this.props.email = newEmail;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
  get email(): string {
    return this.props.email;
  }
  get enrollmentDate(): Date {
    return this.props.enrollmentDate;
  }
  get studentCode(): string | undefined {
    return this.props.studentCode;
  }
  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }
  get isActive(): boolean | undefined {
    return this.props.isActive;
  }
}
