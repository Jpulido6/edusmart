import { Module } from '@nestjs/common';
import { UserController } from './presentation/user.controller';
import { CrearUserService } from './application/crear-user.service';
import { UserPostgresRepository } from './infraestructure/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/infraestructure/database/entities/users/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserPostgresRepository,
    },
    CrearUserService,
  ],
  controllers: [UserController],
  exports: [
    {
      provide: 'IUserRepository',
      useClass: UserPostgresRepository,
    },
    CrearUserService,
  ],
})
export class UserModule {}
