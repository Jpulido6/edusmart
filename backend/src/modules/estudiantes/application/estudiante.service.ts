import { Estudiante } from 'src/core/domain/entities/estudiantes.entity';
import { IEstudianteRepository } from 'src/core/domain/interfaces/estudiantes.interface';
import { Inject, Injectable } from '@nestjs/common';
import { IGradoRepository } from 'src/core/domain/interfaces/grado.interfaces';
import { ICalificacionRepository } from 'src/core/domain/interfaces/calificaciones.interface';
import { Calificacion } from 'src/core/domain/entities';
import { IAsignaturaRepository } from 'src/core/domain/interfaces/asignatura.interface';
import { IPeriodoRepository } from 'src/core/domain/interfaces/periodo.interface';
import { CalificacionService } from 'src/modules/calificaciones/application/calificaciones.service';

@Injectable()
export class EstudianteService {
  constructor(
    @Inject('IEstudianteRepository')
    private readonly studentRepository: IEstudianteRepository,

    @Inject('IGradoRepository')
    private readonly gradoRepository: IGradoRepository,

    @Inject('ICalificacionRepository')
    private readonly calificacionRepository: ICalificacionRepository,
    private readonly calificacionService: CalificacionService,

    @Inject('IAsignaturaRepository')
    private readonly asignaturaRepository: IAsignaturaRepository,

    @Inject('IPeriodoRepository')
    private readonly periodoRepository: IPeriodoRepository,
  ) { }

  async crear(data: {
    firstName: string;
    lastName: string;
    identification: string;
    gradoId: number;
    calificaciones?: { asignaturaId: string, periodoId: number, notas: number[] }[];
  }): Promise<Estudiante> {
    const existingStudent = await this.studentRepository.findByIdentificacion(
      data.identification,
    );
    if (existingStudent) {
      throw new Error('Estudiante con este email ya existe');
    }

    const grado = await this.gradoRepository.findById(data.gradoId);
    if (!grado) {
      throw new Error('Grado no encontrado');
    }

    const student = new Estudiante({
      ...data,
      id: crypto.randomUUID(),
      identificacion: data.identification,
      grado,
      calificacion: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
    });

    const estudianteGuardado = await this.studentRepository.save(student);

    if (data.calificaciones && data.calificaciones.length > 0) {
      const calificaciones = await Promise.all(
        data.calificaciones.map(async (calificacion) => {
          return this.calificacionService.create({
            estudianteId: estudianteGuardado.id,
            asignaturaId: calificacion.asignaturaId,
            periodoId: calificacion.periodoId,
            notas: calificacion.notas
          })
        })
      )
      estudianteGuardado.calificacion.push(...calificaciones);

    }

    return estudianteGuardado;
  }


  async findAll(): Promise<Estudiante[]> {
    const estudiantes = await this.studentRepository.findAll();

    if (!estudiantes.length) {
      throw new Error('No hay estudiantes registrados')
    }
    return estudiantes;
  }

  async findById(id: string): Promise<Estudiante | null> {
    const estudiante = await this.studentRepository.findById(id);
    if (!estudiante) {
      throw new Error('Estudiante no encontrado');
    }
    return estudiante;
  }

  async findByIdentificacion(identificacion: string): Promise<Estudiante | null> {
    const estudiante = await this.studentRepository.findByIdentificacion(identificacion,);
    if (!estudiante) {
      throw new Error('Estudiante no encontrado');
    }
    return estudiante;
  }
}
