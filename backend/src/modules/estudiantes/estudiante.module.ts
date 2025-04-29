import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteEntity } from 'src/infraestructure/database/entities/estudiantes/estudiantes.entity';
import { EstudianteService } from './application/estudiante.service';
import { EstudiantePostgresRepository } from './infraestructure/estudiante.repository';
import { EstudianteController } from './presentation/estudiante.controller';
@Module({
  imports: [TypeOrmModule.forFeature([EstudianteEntity])],
  providers: [
    {
      provide: 'IEstudianteRepository',
      useClass: EstudiantePostgresRepository,
    },
    EstudianteService,
  ],
  controllers: [EstudianteController],
  exports: [
    {
      provide: 'IEstudianteRepository',
      useClass: EstudiantePostgresRepository,
    },
    EstudianteService,
  ],
})
export class EstudianteModule {}
