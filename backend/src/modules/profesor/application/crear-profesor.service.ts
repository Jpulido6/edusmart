import { Inject, Injectable } from '@nestjs/common';
import { Profesor } from 'src/core/domain/entities/profesor.entity';
import { ProfesorPostgresRepository } from '../infraestructure/profesor.repository';

@Injectable()
export class CrearProfesorService {
  constructor(
    @Inject('IProfesorRepository')
    private readonly proRepository: ProfesorPostgresRepository,
  ) { }

  async execute(data: {
    nombres: string;
    apellidos: string;
    email: string;
    especialidad: string;
  }): Promise<Profesor> {
    const existeProfesor = await this.proRepository.buscarByEmail(data.email);

    if (existeProfesor) {
      throw new Error('Profesor con este email ya existe');
    }

    const profesor = new Profesor({
      nombres: data.nombres,
      apellidos: data.apellidos,
      email: data.email,
      especialidad: data.especialidad
    });

    await this.proRepository.crear(profesor)
    return profesor;
    
  }
  async getAllProfessors(): Promise<Profesor[]> {
    const profesors = await this.proRepository.buscar();
    return profesors;
  }

  async buscarTodos(): Promise<Profesor[]> {
    const profesores = await this.proRepository.buscar()

    return profesores
  }
}
