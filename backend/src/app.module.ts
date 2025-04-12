import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { UserEntity } from './infraestructure/database/entities/users/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { EstudianteModule } from './modules/estudiantes/estudiante.module';
import { EstudianteEntity } from './infraestructure/database/entities/estudiantes/estudiantes.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [UserEntity, EstudianteEntity],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    EstudianteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
