import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grado } from 'src/core/domain/entities';
import { Estudiante } from 'src/core/domain/entities/estudiantes.entity';
import { IEstudianteRepository } from 'src/core/domain/interfaces/estudiantes.interface';
import { CalificacionEntity } from 'src/infraestructure/database/entities/calificaciones/calificaciones.entity';
import { EstudianteEntity } from 'src/infraestructure/database/entities/estudiantes/estudiantes.entity';
import { GradosEntity } from 'src/infraestructure/database/entities/grados/grados.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstudiantePostgresRepository implements IEstudianteRepository {
  constructor(
    @InjectRepository(EstudianteEntity)
    private readonly studentRepo: Repository<EstudianteEntity>,

    @InjectRepository(GradosEntity)
    private readonly gradoRepo: Repository<GradosEntity>,
  ) { }
  async update(id: string, data: Partial<{ firstName: string; lastName: string; identificacion: string; gradoId: number; isActive: boolean; }>): Promise<Estudiante> {
    const estudianteEntity = await this.studentRepo.findOne({ where: { id } })
    if (!estudianteEntity) throw new BadRequestException('Estudiante no encontrado')

    let grado: GradosEntity | null

    if (data.gradoId) {
      grado = await this.gradoRepo.findOne({ where: { id: data.gradoId } })
      if (!grado) throw new BadRequestException('Grado no encontrado')
    }

    const updatedEstudiante = {
      ...estudianteEntity,
      firstName: data.firstName || estudianteEntity.firstName,
      lastName: data.lastName || estudianteEntity.lastName,
      identificacion: data.identificacion || estudianteEntity.identificacion,
      grado: grado! || estudianteEntity.grado,
      isActive: data.isActive !== undefined ? data.isActive : estudianteEntity.isActive,
      updatedAt: new Date()     
    }

    const studentUpdated = new Estudiante({
      id: updatedEstudiante.id,
      firstName: updatedEstudiante.firstName,
      lastName: updatedEstudiante.lastName,
      identificacion: updatedEstudiante.identificacion,
      grado: updatedEstudiante.grado.toDomain(),
      calificacion: updatedEstudiante.calificaciones.map((calificacion) => calificacion.toDomain()),
      updatedAt: updatedEstudiante.updatedAt,
      isActive: updatedEstudiante.isActive,
    })

    await this.studentRepo.save(updatedEstudiante)
    return studentUpdated

  }
  async findByIdentificacion(identificacion: string): Promise<Estudiante | null> {
    const studentEntity = await this.studentRepo.findOne({
      where: { identificacion },
      relations: ['grados', 'calificaciones', 'calificaciones.asignaturas'],
    })
    return studentEntity ? studentEntity.toDomain() : null;
  }
  async findById(id: string): Promise<Estudiante | null> {
    const studentEntity = await this.studentRepo.findOne({
      where: { id },
      relations: ['grados', 'calificaciones', 'calificaciones.asignaturas'],
    });

    return studentEntity ? studentEntity.toDomain() : null;
  }
  async findAll(): Promise<Estudiante[]> {
    const studentEntity = await this.studentRepo.find({
      relations: ['grados', 'calificaciones', 'calificaciones.asignaturas', 'calificaciones.periodo'],
    });

    return studentEntity.map((studentEntity) => studentEntity.toDomain());
  }
  async delete(id: string): Promise<boolean> {
    const studentEntity = await this.studentRepo.delete(id);
    if (!studentEntity.affected) {
      throw new Error('Estudiante no encontrado');
    }
    if (studentEntity) return true;
    return studentEntity;
  }

  async save(student: Estudiante): Promise<Estudiante> {
    const studentEntity = this.mapToEntity(student);
    await this.studentRepo.save(studentEntity);
    return studentEntity.toDomain();
  }

  private mapToEntity(student: Estudiante): EstudianteEntity {
    return {
      id: student.id,
      firstName: student.firstName,
      lastName: student.lastName,
      identificacion: student.identificacion,
      calificaciones: student.calificacion.map((calificacion) => CalificacionEntity.fromDomain(calificacion)),
      grado: GradosEntity.fromDomain(student.grado),
      createdAt: student.createdAt!,
      updatedAt: student.updatedAt!,
      isActive: student.isActive!,
      toDomain: () => student,
    };
  }
}
