import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Grado, Periodo } from 'src/core/domain/entities';
import { GradosEntity } from 'src/infraestructure/database/entities/grados/grados.entity';
import { IPeriodoRepository } from 'src/core/domain/interfaces/periodo.interface';
import { PeriodoEntity } from 'src/infraestructure/database/entities/periodo/periodo.entity';

@Injectable()
export class PeriodoPostgresRepository implements IPeriodoRepository {
  constructor(
    @InjectRepository(PeriodoEntity)
    private readonly periodoRepo: Repository<PeriodoEntity>,

  ) { }
  save(periodo: Periodo): Promise<Periodo> {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Promise<Periodo | null> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Periodo[]> {
    throw new Error('Method not implemented.');
  }
  async guardar(grado: Grado): Promise<Grado> {
    throw new Error('Method not implemented.');
  }
  
  async buscar(): Promise<Grado> {
    throw new Error('Method not implemented.');
  }
  
}
