import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrearProfesorService } from './application/crear-profesor.service';
import { ProfesorPostgresRepository } from './infraestructure/profesor.repository';
import { ProfesorController } from './presentation/profesor.controller';
import { ProfesorEntity } from 'src/infraestructure/database/entities/profesor/profesor.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ProfesorEntity])],
  providers: [
    {
      provide: 'IProfesorRepository',
      useClass: ProfesorPostgresRepository,
    },
    CrearProfesorService,
  ],
  controllers: [ProfesorController],
  exports: [
    {
      provide: 'IProfesorRepository',
      useClass: ProfesorPostgresRepository,
    },
    CrearProfesorService,
  ],
})
export class ProfesorModule {}
