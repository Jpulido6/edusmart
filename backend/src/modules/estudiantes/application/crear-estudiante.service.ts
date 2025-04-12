import { Estudiante } from 'src/core/domain/entities/estudiantes.entity';
import { IEstudianteRepository } from 'src/core/domain/interfaces/estudiantes.interface';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CrearEstudianteService {
  constructor(
    @Inject('IEstudianteRepository')
    private readonly studentRepository: IEstudianteRepository,
  ) {}

  async execute(data: {
    firstName: string;
    lastName: string;
    email: string;
  }): Promise<Estudiante> {
    // Lógica de negocio antes de crear
    const existingStudent = await this.studentRepository.findByEmail(
      data.email,
    );
    if (existingStudent) {
      throw new Error('Estudiante con este email ya existe');
    }

    const student = new Estudiante({
      ...data,
      id: crypto.randomUUID(),
      enrollmentDate: new Date(),
    });

    await this.studentRepository.save(student);

    return student;
  }
}
