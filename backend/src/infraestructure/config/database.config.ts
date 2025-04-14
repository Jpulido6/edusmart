import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Estudiante } from "src/core/domain/entities/estudiantes.entity";
import { User } from "src/core/domain/entities/users.entity";

// pasamos las variables de entorno
import { config } from "dotenv";


export const databaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, Estudiante],
    synchronize: true,
    logging: true,
};