import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { IEventoRepository } from 'src/core/domain/interfaces/evento.interface';
import { EventoEntity } from 'src/infraestructure/database/entities/eventos/eventos.entity';
import { Eventos } from 'src/core/domain/entities/eventos.entity';

@Injectable()
export class EventoPostgresRepository implements IEventoRepository {
  constructor(
    @InjectRepository(EventoEntity)
    private readonly eventoRepo: Repository<EventoEntity>,

  ) { }
  save(): Promise<Eventos> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Eventos[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Eventos | null> {
    throw new Error('Method not implemented.');
  }
  async guardar(grado: Eventos): Promise<Eventos> {
    throw new Error('Method not implemented.');
  }
  // async findById(id: string): Promise<Eventos | null> {
  //   throw new Error('Method not implemented.');
  // }
 
}
