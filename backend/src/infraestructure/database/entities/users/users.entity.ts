import { User } from 'src/core/domain/entities/users.entity';
import { Entity, Column, PrimaryColumn } from 'typeorm';
export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
}
@Entity('users')
export class UserEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.STUDENT,
  })
  role: UserRole;

  @Column({ nullable: true })
  name: string;

  // @OneToMany(() => Note, note => note.user)
  // notes: Note[];

  // @OneToMany(() => Grade, grade => grade.user)
  // grades: Grade[];

  toDomain(): User {
    return new User({
      id: this.id,
      email: this.email,
      password: this.password,
      role: this.role,
      name: this.name,
    });
  }
  static fromDomain(user: User): UserEntity {
    const entity = new UserEntity();
    entity.id = user.id;
    entity.email = user.email;
    entity.password = user.password;
    entity.role = user.role;
    entity.name = user.name;
    return entity;
  }
}
