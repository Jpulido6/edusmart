import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from 'src/core/domain/entities/estudiantes.entity';
import { IEstudianteRepository } from 'src/core/domain/interfaces/estudiantes.interface';
import { EstudianteEntity } from 'src/infraestructure/database/entities/estudiantes/estudiantes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstudiantePostgresRepository implements IEstudianteRepository {
  constructor(
    @InjectRepository(EstudianteEntity)
    private readonly studentRepo: Repository<EstudianteEntity>,
  ) {}
  async findById(id: string): Promise<Estudiante | null> {
    const studentEntity = await this.studentRepo.findOne({
      where: { id },
      relations: ['grades'],
    });

    return studentEntity ? studentEntity.toDomain() : null;
  }
  async findByEmail(email: string): Promise<Estudiante | null> {
    const studentEntity = await this.studentRepo.findOne({ where: { email } });
    return studentEntity ? studentEntity.toDomain() : null;
  }
  async findAll(): Promise<Estudiante[]> {
    const studentEntity = await this.studentRepo.find({
      relations: ['grades'],
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

  async save(student: Estudiante): Promise<void> {
    const studentEntity = this.mapToEntity(student);
    await this.studentRepo.save(studentEntity);
  }

  private mapToEntity(student: Estudiante): EstudianteEntity {
    return {
      id: student.id,
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      studentCode: student.studentCode,
      enrollmentDate: student.enrollmentDate,
      updatedAt: student.updatedAt!,
      isActive: student.isActive!,
      // grades: [], // Asumiendo que no se manejan las calificaciones aquí
      // tasks: [] // Asumiendo que no se manejan las tareas aquí
      toDomain: () => student,
    };
  }
}
