import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/core/domain/entities/users.entity';
import { IUserRepository } from 'src/core/domain/interfaces/users.interface';
import { UserEntity } from 'src/infraestructure/database/entities/users/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserPostgresRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}
  async register(user: User): Promise<void> {
    const userEntity = this.mapToEntity(user);
    await this.userRepo.save(userEntity);
  }

  async findById(id: string): Promise<User | null> {
    const userEntity = await this.userRepo.findOne({
      where: { id },
    });
    return userEntity ? userEntity.toDomain() : null;
  }
  async findByEmail(email: string): Promise<User | null> {
    const userEntity = await this.userRepo.findOne({ where: { email } });
    return userEntity ? userEntity.toDomain() : null;
  }
  async findAll(): Promise<User[]> {
    const userEntity = this.userRepo.find({ relations: ['users'] });
    return userEntity.then((users) =>
      users.map((userEntity) => userEntity.toDomain()),
    );
  }
  private mapToEntity(user: User): UserEntity {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      toDomain: () => user,
    };
  }
}
