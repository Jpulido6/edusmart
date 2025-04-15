import { api } from "@/app/utils/api";
import { ENDPOINT } from "@/config/endpoint/endpoint";
import { profesorDto } from "../domain/dto/profesor.dto";

export const profesorService = async (data: profesorDto) => {
  const response = await api.post(ENDPOINT.PROFESOR.CREAR, data);
  console.log(response.data);
  
  return response.data;
};
