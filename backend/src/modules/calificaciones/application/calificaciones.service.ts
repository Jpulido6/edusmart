import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { Calificacion } from 'src/core/domain/entities';

import { IAsignaturaRepository } from 'src/core/domain/interfaces/asignatura.interface';
import { ICalificacionRepository } from 'src/core/domain/interfaces/calificaciones.interface';
import { IEstudianteRepository } from 'src/core/domain/interfaces/estudiantes.interface';
import { IPeriodoRepository } from 'src/core/domain/interfaces/periodo.interface';
import { PROVIDE } from 'src/shared/constant/provide.constant';

@Injectable()
export class CalificacionService {
  constructor(
    @Inject(PROVIDE.CALIFICACION)
    private readonly calificacionEntity: ICalificacionRepository,

    @Inject(PROVIDE.ASIGNATURA)
    private readonly asignaturaEntity: IAsignaturaRepository,

    @Inject(PROVIDE.ESTUDIANTE)
    private readonly estudianteEntity: IEstudianteRepository,

    @Inject(PROVIDE.PERIODO)
    private readonly periodoEntity: IPeriodoRepository
  ) { }



  async create(data: {
    estudianteId: string
    asignaturaId: string
    periodoId: number
    notas: number[]
  }): Promise<Calificacion> {

    const estudiante = await this.estudianteEntity.findById(data.estudianteId)

    if (!estudiante) throw new BadRequestException('Estudiante no encontrado')

    const asignatura = await this.asignaturaEntity.findById(data.asignaturaId)
    if (!asignatura) throw new BadRequestException('Asignatura no encontrada')

    const periodo = await this.periodoEntity.findById(data.periodoId)
    if (!periodo) throw new BadRequestException('Periodo no encontrado')

    // const existeCalificacion = await this.calificacionEntity

    let notaFinal = 0
    if (data.notas.length === 5) {
      notaFinal = data.notas.reduce((sum, nota) => sum + nota, 0) / 5
    }

    const calificacion = new Calificacion({
      nota1: data.notas[0],
      nota2: data.notas[1],
      nota3: data.notas[2],
      nota4: data.notas[3],
      nota5: data.notas[4],
      notaFinal: notaFinal,
      estudiante,
      asignatura,
      periodo,
    })

    this.calificacionEntity.save(calificacion)

    return calificacion
  }

  async findByEstudiante(estudianteId: string): Promise<Calificacion[]> {
    const calificacion = await this.calificacionEntity.findByEstudiante(estudianteId)

    if (!calificacion.length) throw new BadRequestException('No se encontraron calificaciones para este estudiante')

    return calificacion
  }

  async update(id: string, data: Partial<{ notas: number | number[] }>): Promise<Calificacion> {

    const calificacion = await this.calificacionEntity.findById(id)
    if (!calificacion) throw new BadRequestException('Calificacion no encontrada')

    let notaFinal = calificacion.notaFinal

    if (data.notas) {
      notaFinal = Array.isArray(data.notas) ? data.notas.reduce((sum, nota) => sum + nota, 0) / data.notas.length : data.notas
    }

    const updatedCalificacion = new Calificacion({
      ...calificacion,
      nota1: data.notas ? data.notas[0] || calificacion.nota1 : calificacion.nota1,
      nota2: data.notas ? data.notas[1] || calificacion.nota2 : calificacion.nota2,
      nota3: data.notas ? data.notas[2] || calificacion.nota3 : calificacion.nota3,
      nota4: data.notas ? data.notas[3] || calificacion.nota4 : calificacion.nota4,
      nota5: data.notas ? data.notas[4] || calificacion.nota5 : calificacion.nota5,
      notaFinal: notaFinal,
      estudiante: calificacion.estudiante,
      asignatura: calificacion.asignatura,
      periodo: calificacion.periodo,
      updatedAt: new Date(),
    })
    await this.calificacionEntity.save(updatedCalificacion)
    return updatedCalificacion

  }

  async findByEstudianteAsignaturaPeriodo(
    estudianteId: string,
    asignaturaId: string,
    periodoId: string
  ): Promise<Calificacion | null> {
    const calificacion = await this.calificacionEntity.findByEstudianteAsignaturaPeriodo(
      estudianteId,
      asignaturaId,
      periodoId
    );
    if (!calificacion) throw new BadRequestException('No se encontraron calificaciones para este estudiante en esta asignatura y periodo')

    return calificacion
  }







}
