import { UserRole } from 'src/infraestructure/database/entities/users/users.entity';

export interface IUser {
  id: string;
  email: string;
  password: string;
  role: UserRole;
  name: string;
}
export class User {
  private readonly props: IUser;
  constructor(props: IUser) {
    this.props = {
      ...props,
      id: props.id || this.generateId(props.role),
    };
  }

  private generateId(user: UserRole): string {
    switch (user) {
      case UserRole.ADMIN:
        return `ADM-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      case UserRole.STUDENT:
        return `STD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      case UserRole.TEACHER:
        return `TEA-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
  }
  get id(): string {
    return this.props.id;
  }
  get email(): string {
    return this.props.email;
  }
  get password(): string {
    return this.props.password;
  }
  get role(): UserRole {
    return this.props.role;
  }
  get name(): string {
    return this.props.name;
  }
}
