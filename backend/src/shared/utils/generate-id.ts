import { UserRole } from 'src/infraestructure/database/entities/users/users.entity';

export function generateId(user: UserRole): string {
  return `STD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
