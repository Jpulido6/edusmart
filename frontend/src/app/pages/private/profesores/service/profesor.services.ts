import { api } from "@/app/utils/api";
import { ENDPOINT } from "@/config/endpoint/endpoint";
import { profesorDto } from "../domain/dto/profesor.dto";
import { Response } from "@/config/interfaces/interfaces";
import { Profesor } from "../domain/entities/profesor.entity";
import { responseToProfesor } from "../factories/profesor.factory";

export interface IProfesorRes {
  props: {
    id: number
    nombres: string
    apellidos: string
    email: string
    especialidad: string
  }
}

export const createProfesor = async (data: profesorDto) => {
  const response = await api.post(ENDPOINT.PROFESOR.CREAR, data);

  return response.data;
};

export const findProfesor = async (): Promise<Profesor[]> => {
  const response = await api.get<Response<IProfesorRes[]>>(ENDPOINT.PROFESOR.BUSCAR);
  const profesor = responseToProfesor(response.data)
  console.log(profesor);

  return profesor
}
