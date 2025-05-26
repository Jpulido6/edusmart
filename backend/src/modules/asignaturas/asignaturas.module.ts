import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignaturasPostgresRepository } from './infraestructure/asignaturas.repository';
import { AsignaturaEntity } from 'src/infraestructure/database/entities/asignaturas/asignaturas.entity';
import { AsignaturasService } from './application/asignaturas.service';
import { AsignaturasController } from './presentation/asignaturas.controller';
@Module({
  imports: [TypeOrmModule.forFeature([AsignaturaEntity])],
  providers: [
    {
      provide: 'IAsignaturaRepository',
      useClass: AsignaturasPostgresRepository,
    },
    AsignaturasService,
  ],
  controllers: [AsignaturasController],
  exports: [
    {
      provide: 'IAsignaturaRepository',
      useClass: AsignaturasPostgresRepository,
    },
    AsignaturasService,
  ],
})
export class AsignaturasModule {}
