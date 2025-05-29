import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Grado } from 'src/core/domain/entities';
import { IGradoRepository } from 'src/core/domain/interfaces/grado.interfaces';
import { GradosEntity } from 'src/infraestructure/database/entities/grados/grados.entity';

@Injectable()
export class GradosPostgresRepository implements IGradoRepository {
  constructor(
    @InjectRepository(GradosEntity)
    private readonly gradoRepo: Repository<GradosEntity>,

  ) { }
  async guardar(grado: Grado): Promise<Grado> {
    throw new Error('Method not implemented.');
  }
  async findById(id: number): Promise<Grado | null> {
    throw new Error('Method not implemented.');
  }
  async buscar(): Promise<Grado> {
    throw new Error('Method not implemented.');
  }
  
}
