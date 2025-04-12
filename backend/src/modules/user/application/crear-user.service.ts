import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/core/domain/interfaces/users.interface';
import { User } from 'src/core/domain/entities/users.entity';
import { UserRole } from 'src/infraestructure/database/entities/users/users.entity';
@Injectable()
export class CrearUserService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(data: {
    name: string;
    email: string;
    password: string;
    role: UserRole;
  }): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new Error('usuario ya existe');
    }
    const user = new User({
      ...data,
      id: crypto.randomUUID(),
      role: data.role,
      password: data.password,
    });

    await this.userRepository.register(user);
    return user;
  }
}
