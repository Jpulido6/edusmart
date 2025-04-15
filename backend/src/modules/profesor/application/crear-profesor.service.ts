import { Inject, Injectable } from '@nestjs/common';
import { IProfesorRepository } from 'src/core/domain/interfaces/profesor.interface';
import { Profesor } from 'src/core/domain/entities/profesor.entity';

@Injectable()
export class CrearProfesorService {
  constructor(
    @Inject('IProfesorRepository')
    private readonly proRepository: IProfesorRepository,
  ) {}

  async execute(data: {
    nombres: string;
    apellidos: string;
    email: string;
    especialidad: string;
  }): Promise<Profesor> {
    const existeProfesor = await this.proRepository.buscarbyEmail(data.email);

    if (existeProfesor) {
      throw new Error('Profesor con este email ya existe');
    }

    const profesor = new Profesor({
      ...data,
      id: `PRO-${crypto.randomUUID()}`,
      nombres: data.nombres,
      apellidos: data.apellidos,
      email: data.email,
    });
    return profesor;
  }
}
