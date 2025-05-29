import { Inject, Injectable } from '@nestjs/common';
import { Profesor } from 'src/core/domain/entities/profesor.entity';
import { ProfesorPostgresRepository } from '../infraestructure/profesor.repository';
import { Asignatura, Grado } from 'src/core/domain/entities';
import { Eventos } from 'src/core/domain/entities/eventos.entity';
import { PROVIDE } from 'src/shared/constant/provide.constant';

@Injectable()
export class CrearProfesorService {
  constructor(
    @Inject(PROVIDE.PROFESOR)
    private readonly proRepository: ProfesorPostgresRepository,
  ) { }

  async execute(data: {
    nombres: string;
    apellidos: string;
    identificacion: string;
    asignaturas: Asignatura;
    grado: Grado;
    eventos: Eventos[]
    createdAt: Date;
    updatedAt: Date;
  }): Promise<Profesor> {
    const existeProfesor = await this.proRepository.buscarByIdentificacion(data.identificacion)

    if (existeProfesor) {
      throw new Error('Profesor con esta identificación ya existe');
    }

    const profesor = new Profesor({
      nombres: data.nombres,
      apellidos: data.apellidos,
      identificacion: data.identificacion,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      asignaturas: data.asignaturas,
      eventos: data.eventos,
      grado: data.grado
    });

    await this.proRepository.crear(profesor)
    return profesor;

  }
  async getAllProfessors(): Promise<Profesor[]> {
    const profesors = await this.proRepository.buscarTodos();
    return profesors;
  }

}
