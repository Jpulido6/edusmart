import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/core/domain/entities/users.entity';
import { UserRole } from 'src/infraestructure/database/entities/users/users.entity';
import { UserPostgresRepository } from '../user/infraestructure/user.repository';

@Injectable()
export class AuthService {
  constructor(
    @Inject('IUserRepository')
    private userRepository: UserPostgresRepository,
    private jwtService: JwtService,
  ) {}

  async register(
    name: string,
    email: string,
    password: string,
    role: UserRole,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      id: crypto.randomUUID(),
      name: name,
      email,
      password: hashedPassword,
      role: role,
    });
    return this.userRepository.register(user);
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
