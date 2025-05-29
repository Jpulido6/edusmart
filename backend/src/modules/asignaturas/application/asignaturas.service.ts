import { Inject, Injectable } from '@nestjs/common';

import { Estudiante } from 'src/core/domain/entities/estudiantes.entity';
import { Asignatura, Calificacion, Profesor } from 'src/core/domain/entities';
import { IAsignaturaRepository } from 'src/core/domain/interfaces/asignatura.interface';
import { PROVIDE } from 'src/shared/constant/provide.constant';

@Injectable()
export class AsignaturasService {
  constructor(
    @Inject(PROVIDE.ASIGNATURA)
    private readonly asignaturaEntity: IAsignaturaRepository,  
  ) { }

  async execute(data: {
    id?: string;
    nombre: string;
    createdAt?: Date;
    updatedAt?: Date;
    calificaciones?: Calificacion[];
    profesor?: Profesor[];
  }): Promise<Asignatura> {

    const existeAsignatura = await this.asignaturaEntity.findById(data.id!)

    if (existeAsignatura) throw new Error('Ya existe esta asignatura')

    const asignatura = new Asignatura({
      ...data,
      createdAt: new Date(),
      calificaciones: [],
      profesor:[]
    })

    const asignaturaGuardada = await this.asignaturaEntity.save(asignatura)

    return asignaturaGuardada

  }
  
}
