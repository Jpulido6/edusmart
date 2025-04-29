import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
  ) { }
  async findByIdentificacion(identificacion: string): Promise<Estudiante | null> {
    const studentEntity = await this.studentRepo.findOne({
      where: { identificacion },
      relations: ['grados', 'calificaciones', 'asignaturas'],
    })
    return studentEntity ? studentEntity.toDomain() : null;
  }
  async findById(id: string): Promise<Estudiante | null> {
    const studentEntity = await this.studentRepo.findOne({
      where: { id },
      relations: ['grados', 'calificaciones', 'asignaturas'],
    });

    return studentEntity ? studentEntity.toDomain() : null;
  }
  async findAll(): Promise<Estudiante[]> {
    const studentEntity = await this.studentRepo.find({
      relations: ['grados', 'calificaciones', 'asignaturas'],
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
