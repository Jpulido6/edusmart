import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from 'src/core/domain/entities/profesor.entity';
import { IProfesorRepository } from 'src/core/domain/interfaces/profesor.interface';
import { ProfesorEntity } from 'src/infraestructure/database/entities/profesor/profesor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesorPostgresRepository implements IProfesorRepository {
  constructor(
    @InjectRepository(ProfesorEntity)
    private readonly profesorRepo: Repository<ProfesorEntity>,
  ) { }
  async crear(pro: Profesor): Promise<void> {
    const prof = this.mapToEntity(pro);
    await this.profesorRepo.save(prof);
  }
  async buscar(): Promise<Profesor[]> {
    const profEntity = await this.profesorRepo.find();
    return profEntity.map((profEntity) => profEntity.toDomain());
  }
  async buscarByEmail(email: string): Promise<Profesor | null> {
    const profEntity = await this.profesorRepo.findOne({ where: { email } });
    return profEntity ? profEntity.toDomain() : null;
  }

  private mapToEntity(pro: Profesor): ProfesorEntity {
    return {
      id:crypto.randomUUID(),      
      nombres: pro.nombres,
      apellidos: pro.apellidos,
      email: pro.email,
      especialidad: pro.especialidad,
      // grades: [], // Asumiendo que no se manejan las calificaciones aquí
      // tasks: [] // Asumiendo que no se manejan las tareas aquí
      toDomain: () => pro,
    };
  }
}
