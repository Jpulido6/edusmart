import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Profesor } from 'src/core/domain/entities/profesor.entity';

@Entity('profesor')
export class ProfesorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombres: string;
  
  @Column()
  apellidos: string;

  @Column({ unique: true })
  email: string;

  @Column()
  especialidad: string;

  static fromDomain(profesor: Profesor): ProfesorEntity {
    const entity = new ProfesorEntity();
    if (profesor.id) entity.id = profesor.id;    
    entity.nombres = profesor.nombres;
    entity.apellidos = profesor.apellidos;
    entity.email = profesor.email;
    entity.especialidad = profesor.especialidad;
    return entity;
  }
  toDomain(): Profesor {
    return new Profesor({
      id: this.id,
      nombres: this.nombres,
      apellidos: this.apellidos,
      email: this.email,
      especialidad: this.especialidad,
    });
  }
}
