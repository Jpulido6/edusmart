import { User } from '../entities/users.entity';

export interface IUserRepository {
  register(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findAll(): Promise<User[]>;
}
