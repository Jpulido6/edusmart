import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { EstudianteModule } from './modules/estudiantes/estudiante.module';
import { ProfesorModule } from './modules/profesor/profesor.module';
import { AsignaturasModule } from './modules/asignaturas/asignaturas.module';
import { GradosModule } from './modules/grados/grados.module';
import { CalificacionesModule } from './modules/calificaciones/calificaciones.module';
import { EventoModule } from './modules/eventos/eventos.module';
import { PeriodoModule } from './modules/periodo/periodo.module';

import { UserEntity } from './infraestructure/database/entities/users/users.entity';
import { EstudianteEntity } from './infraestructure/database/entities/estudiantes/estudiantes.entity';
import { ProfesorEntity } from './infraestructure/database/entities/profesor/profesor.entity';
import { CalificacionEntity } from './infraestructure/database/entities/calificaciones/calificaciones.entity';
import { EventoEntity } from './infraestructure/database/entities/eventos/eventos.entity';
import { GradosEntity } from './infraestructure/database/entities/grados/grados.entity';
import { AsignaturaEntity } from './infraestructure/database/entities/asignaturas/asignaturas.entity';
import { PeriodoEntity } from './infraestructure/database/entities/periodo/periodo.entity';





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
      entities: [
        UserEntity, 
        EstudianteEntity, 
        ProfesorEntity, 
        CalificacionEntity, 
        AsignaturaEntity,
        GradosEntity,
        PeriodoEntity,
        EventoEntity, 
      ],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    EstudianteModule,
    ProfesorModule,
    PeriodoModule,
    AsignaturasModule,
    CalificacionesModule,
    GradosModule,
    EventoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
